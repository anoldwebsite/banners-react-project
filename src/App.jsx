import "./styles/banner.css";
import Banner from "./components/Banner";

const bannerType = ["success", "warning", "error"];

export default function App() {
  return (
    <>
      {bannerType.map((item, index) => {
        return (
          <Banner key={index} status={item}>
            {item}
          </Banner>
        );
      })}
    </>
  );
}
