import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Paralla from "../../components/Paralax/Paralla";
import Provide from "../../components/Provide/Provide";
import Questions from "../../components/Questions/Questions";
import Services from "../../components/Services/Services";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Provide></Provide>
            <Paralla></Paralla>
            <Services></Services>
            <Questions></Questions>
            <Footer></Footer>
        </div>
    );
};

export default Home;