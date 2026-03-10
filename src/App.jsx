import BannerController from "./components/BannerController";
import "./styles/banner.css";

export default function App() {
  return (
    <div>
      <BannerController
        status="success"
        layout="multi"
        title="Congratulations!"
        text="You did it!"
      >
        {(hide) => <button onClick={hide}>Dismiss</button>}
      </BannerController>

      <BannerController
        status="warning"
        layout="single"
        title="Attention"
        text="Be careful!"
      >
        {(hide) => <button onClick={hide}>Dismiss</button>}
      </BannerController>

      <BannerController
        status="error"
        layout="multi"
        title="There is a problem!"
        text="Something went wrong!"
      >
        {(hide) => <button onClick={hide}>Dismiss</button>}
      </BannerController>
    </div>
  );
}
