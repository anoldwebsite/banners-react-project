import Banner from "./Banner";
import useBanner from "../hooks/useBanner";
import "../styles/banner-controller.css";

export default function BannerController({
  status,
  layout,
  title,
  text,
  children,
}) {
  const { visible, show, hide } = useBanner(true);

  return (
    <div className="banner-controller">
      {!visible && (
        <button className="banner-controller__show-btn" onClick={show}>
          Show Banner
        </button>
      )}

      {visible && (
        <Banner status={status} layout={layout} title={title} text={text}>
          {children(hide)}
        </Banner>
      )}
    </div>
  );
}
