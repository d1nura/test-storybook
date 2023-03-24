import { App } from "../App/App";
import Layout from "../Layout/Layout";
import Navbar from "../Navbar/Navabr";

const MainPage = () => {
  return (
    <Layout>
      <Navbar></Navbar>
      <App />
    </Layout>
  );
};

export default MainPage;
