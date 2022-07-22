import '../ui/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import myTheme from '../ui/themes/theme';
import Header from '../ui/components/header/header';
import Title from '../ui/components/title/title';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={myTheme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
