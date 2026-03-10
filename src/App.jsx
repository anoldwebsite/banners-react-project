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
        autoDismiss={true}
        autoDismissDelay={4000}
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
/*
Cohesive narrative that ties **everything** together — side effects, optional behavior, custom hooks,
render props, and composition — architectural explanation. 

In this project, I built a reusable Banner component using a combination of 
custom hooks, 
the render props pattern, and 
component composition 

to create a clean separation between presentation and behavior. 

The core `Banner` component is intentionally kept pure and stateless: it only renders UI based on the props
it receives. All logic related to visibility, actions, and lifecycle behavior is delegated to a separate
wrapper component called `BannerController`.

The `BannerController` uses a custom hook (`useBanner`) to encapsulate the banner’s visibility state 
and expose a simple API (`show`, `hide`, `toggle`). This keeps the state logic reusable and easy to test,
while allowing multiple banners on the page to manage their visibility independently. 

To give consumers full control over the banner’s actions, the controller uses the "render props pattern",
passing the `hide` method into a function provided as `children`. This inversion of control allows the
parent to define custom buttons or actions without the controller needing to know anything about their
structure.

The component also supports "optional behavior" through an auto‑dismiss feature. When enabled, the banner
hides itself after a configurable delay. This is implemented using "side effects", because the dismissal
happens after the component renders and relies on external timing. 

React’s `useEffect` hook manages this behavior by starting a timer when the banner becomes visible and
cleaning it up when the component hides or unmounts. This ensures predictable behavior and prevents memory
leaks.

By combining a pure presentational component, a stateful controller, a custom hook for reusable logic, 
render props for flexible actions, and `useEffect` for controlled side effects, the final design is both 
expressive and maintainable. It demonstrates modern React patterns that scale well in real-world component
libraries and design systems.

---

*/
