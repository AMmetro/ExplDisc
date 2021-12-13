import type {GetServerSideProps} from 'next'

export default function Index() {
  return null
}

export let getServerSideProps: GetServerSideProps = async (ctx) => {
  const {country, language} = ctx.query

  return {
    redirect: {
      destination: `/${country}/${language}/portal/dashboard`,
      permanent: false,
    },
  }
}
