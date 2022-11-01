import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Layout from "../containers/Layout";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <AboutUs />
        <Services />
        <Footer />
      </Layout>
    </>
  )
}
export default Home;
