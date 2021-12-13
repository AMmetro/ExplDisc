import type {GetServerSideProps} from 'next'

export default function Index() {
  return null
}

export let getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/us/en',
      permanent: false,
    },
  }
}
