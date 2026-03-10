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

      <Banner status="success" layout="single">
        <span>Success</span>
        <button>Dismiss</button>
      </Banner>

      <Banner status="error" layout="multi">
        <h3>Error</h3>
        <p>Something went worng. Please try again later.</p>
      </Banner>
    </>
  );
}
