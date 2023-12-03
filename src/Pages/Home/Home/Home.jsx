import Advertisement from "../Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import FeaturedProperty from "../FeaturedProperty/FeaturedProperty";

import Reviewer from "../Reviewer/Reviewer";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <Reviewer></Reviewer>
            <div className="max-w-screen-xl mx-auto">
                <FeaturedProperty></FeaturedProperty>
            </div>
            <div className="max-w-screen-xl mx-auto">
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;