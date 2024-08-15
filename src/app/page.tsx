// import Data from "../../Data";
import Faq from "./components/Faq/Faq";
import First from "./components/First/First";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Second from "./components/Second/Second";

const Netflix = () => {
  return (
    <>
      <Header />

      <First
        heading="Enjoy On your TV"
        text="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more."
        image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
      />
      <Second
        heading="Download your shows to watch offline"
        text="Save your favourites easily and always have something to watch."
        image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
      />
      <First
        heading="Watch everywhere"
        text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
      />
      <Second
        heading="Create profiles for kids"
        text="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        image="https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
      />
      <Faq />
      <Footer />
    </>
  );
};
export default Netflix;
