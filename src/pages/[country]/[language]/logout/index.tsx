import {serialize} from 'cookie'
import type {GetServerSideProps, GetServerSidePropsContext} from 'next'

export default function Index() {
  return null
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  context.res.setHeader('Set-Cookie', [
    serialize('react-auth-token', '', {
      maxAge: -1,
      path: '/',
    }),
  ])

  return {
    redirect: {
      destination: '/us/en',
      permanent: false,
    },
  }
}
