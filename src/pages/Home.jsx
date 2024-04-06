import Header from "../components/Header";
import Section from "../components/Section";
import CardBox from "../components/CardBox";
import Section2 from "../components/Section2";
import Footer from "../components/Footer";

import TabsRouter from "../components/Navbar";

const Home = () => {
  return (
    <div className=" space-y-8">
      <TabsRouter />
      <Header />
      <Section />
      <CardBox />
      <Section2 />
      <Footer />
    </div>
  );
};

export default Home;
