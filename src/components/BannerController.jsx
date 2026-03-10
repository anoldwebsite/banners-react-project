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

/*
  {children(hide)} means we are passing the method hide, defined in useBanner hook to the function children. 

  So, instead of this:
  <BannerController>
    <button>Dismiss</button>
  </BannerController>

  We wrote this in the App() component:

  <BannerController>
    {(hide) => <button onClick={hide}>Dismiss</button>}
  </BannerController>

  That means:

  children is a function and we call it passing to it argument hide which we deconstruct from the
  object retured by the useBanner hook.

  The function children returns JSX that uses hide.

  This pattern is called a render prop.

  Why use a render prop here?
    Because it allows the parent (App.jsx) to decide what the banner’s action looks like, while the controller still owns the logic.

    You get:

    BannerController → owns the state (visible, show, hide)

    App.jsx → decides what the dismiss button looks like

    This avoids:

    prop drilling

    inline logic

    hard‑coding the dismiss button inside BannerController

    repeating useBanner() everywhere

    It’s clean, flexible, and scalable
*/

/*
  Yes — BannerController is a wrapper that augments Banner
    That’s exactly what it is.

    Banner = pure presentational component  
    It only knows how to render a banner.

    BannerController = stateful wrapper  
    It knows how to show/hide a banner.

    This separation is not only intentional — it’s professional.
*/
