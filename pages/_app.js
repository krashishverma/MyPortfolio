import '../styles/globals.css'
import Layout from './layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { inter, circularLight, circularNormal, circularMedium, circularBold, cascadia } from '../styles/fonts'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${inter.variable} ${circularLight.variable} ${circularNormal.variable} ${circularMedium.variable} ${circularBold.variable} ${cascadia.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </QueryClientProvider>
  )
}
