import { FunctionComponent } from 'react'
import Sidebar from '@/components/Sidebar'
import '../styles/globals.css'

type AppProps = {
  Component: FunctionComponent,
  pageProps: any
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </div>
  )
}
