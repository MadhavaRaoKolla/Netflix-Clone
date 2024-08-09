import Data from "../../Data";
import First from "./components/First/First";
import Header from "./components/Header/Header";
import Second from "./components/Second/Second";

const Netflix = () => {
  return (
    <>
      <Header />
      {Data.map((item, index) =>
        index % 2 === 0 ? (
          <First
            key={index}
            heading={item.heading}
            text={item.text}
            image={item.image}
          />
        ) : (
          <Second
            key={index}
            heading={item.heading}
            text={item.text}
            image={item.image}
          />
        )
      )}
    </>
  );
};
export default Netflix;
