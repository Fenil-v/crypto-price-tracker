import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Crypto Price Tracker</title>
        <meta name="description" content="Track real-time cryptocurrency prices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;