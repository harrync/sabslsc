import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>St Austell Bay Surf Lifesaving Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="St Austell Bay Surf Lifesaving Club 🏄‍♀️" />
      </main>

      <Footer />
    </div>
  );
}
