import "./styles/banner.css";
import Banner from "./components/Banner";
import useBanner from "./hooks/useBanner";

const bannerType = ["success", "warning", "error"];

export default function App() {
  const { visible, hide, show } = useBanner();

  return (
    <>
      {bannerType.map((item, index) => {
        return (
          <Banner key={index} status={item}>
            {item}
          </Banner>
        );
      })}

      {visible && (
        <Banner status="success" layout="single">
          <span>Success</span>
          <button onClick={hide}>Dismiss</button>
        </Banner>
      )}

      <Banner
        status="error"
        layout="multi"
        title="Error"
        text="Something went wrong!"
      >
        <button>Retry</button>
      </Banner>
    </>
  );
}
