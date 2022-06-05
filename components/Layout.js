// Layout.js
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <section>
        <Header />
        <div className="m-8 md:mx-14 lg:mx-40 xl:mx-64 2xl:mx-80 mb-20">
          {children}
        </div>
      </section>
      <Footer />
    </>
  )
}
