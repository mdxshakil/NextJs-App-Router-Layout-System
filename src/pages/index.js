import RootLayout from "@/components/layouts/RootLayout";
import Head from "next/head";

const Home = () => {

  return (
    <div>
      <Head>
        <title>Next - home page</title>
        <meta name="Home page" description="This is a simple descriptipon about the homepage"/>
      </Head>
      <h1>Welcome to Homepage of next js App Router Layout system</h1>
    </div>
  );
};
export default Home;

Home.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}