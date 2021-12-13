def repoName = "my-juiceplus-com"
def ecrRepoName = "965256157462.dkr.ecr.us-east-2.amazonaws.com"
def dockerRepoName = "${ecrRepoName}/${repoName}"
imageTag = ""
def e2eImage = "mcr.microsoft.com/playwright:v1.11.1-focal"
def nodeImage = "node:14-slim"
def destinationEnvironment = ""

pipeline {
  agent none

  options {
    buildDiscarder(
      logRotator(
        artifactDaysToKeepStr: '',
        artifactNumToKeepStr: '',
        daysToKeepStr: '5',
        numToKeepStr: '30'
      )
    )
    disableConcurrentBuilds()
  }

  stages {
    stage('Test') {
      parallel {
        stage('Lint') {
          agent {
            docker {
              image "${nodeImage}"
            }
          }
          steps {
            sh """
              npm ci
              npm run eslint
            """
          }
        }
        stage('Typecheck') {
          agent {
            docker {
              image "${nodeImage}"
            }
          }
          steps {
            sh """
              npm ci
              npm run typecheck
            """
          }
        }
        stage('Unit Test') {
          agent {
            docker {
              image "${nodeImage}"
            }
          }
          steps {
            sh """
              npm ci
              npm run test
            """
          }
        }
        stage('E2E Test') {
          agent {
            docker {
              image "${e2eImage}"
            }
          }
          environment {
            MOCKS_ENABLED=true
          }
          steps {
            sh """
              npm ci
              npm run build
              npm run test:e2e
            """
          }
        }
      }
    }
    stage("Docker") {
      agent any
      environment {
        DOCKER_IMAGE="${dockerRepoName}:${env.GIT_COMMIT}"
      }
      stages {
        stage('Build') {
          environment {
            DOCKER_BUILDKIT=1
          }
          steps {
            checkout scm
            script {
              imageTag = env.GIT_COMMIT
              docker.build("${env.DOCKER_IMAGE}")
            }
          }
        }
        stage('Push') {
          when {
            expression { BRANCH_NAME ==~ "^(main|master|develop)\$" }
          }
          steps {
            script {
              docker.withRegistry("https://${ecrRepoName}", "ecr:us-east-2:aws-instance-profile") {
                docker.image("${env.DOCKER_IMAGE}").push()
              }
            }
          }
        }
      }
    }
    stage('Deploy') {
      when {
        expression { BRANCH_NAME ==~ "^(main|master|develop)\$" }
      }
      stages{
        stage("Destination Environment") {
          steps {
            script {
              destinationEnvironment = input message: 'Destination environment', ok: 'Deploy', parameters: [choice(choices: BRANCH_NAME ==~ "^(main|master)\$" ? ['prod'] : ['dev', 'stage', 'test'], description: 'Environment', name: 'DESTINATION_ENVIRONMENT')]

            }
          }
        }
        stage('Deploy') {
          steps {
            build job: "Deploy Image",
              parameters: [
                  string(name: "ENVIRONMENT", value: destinationEnvironment),
                  string(name: "APPLICATION", value: repoName),
                  string(name: "VERSION", value: imageTag)
              ]
          }
        }
      }
    }
  }
}
