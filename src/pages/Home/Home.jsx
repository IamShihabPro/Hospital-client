import Header from "../../components/Header/Header";
import Paralla from "../../components/Paralax/Paralla";
import Provide from "../../components/Provide/Provide";
import Services from "../../components/Services/Services";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Provide></Provide>
            <Paralla></Paralla>
            <Services></Services>
        </div>
    );
};

export default Home;