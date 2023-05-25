import '@/styles/globals.css'
import Layout from '@/components/layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <div className="body">
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}
