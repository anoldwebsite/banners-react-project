import { useState } from "react";

export default function useBanner(initialVisible = true) {
  const [visible, setVisible] = useState(initialVisible);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const toggle = () => setVisible((prevVisible) => !prevVisible);

  return { visible, show, hide, toggle }; // returning state and all methods.
}
/*
    Custom Hook (useBanner)
      Encapsulates state (i.e., visible)

      Exposes a clean API (show, hide, toggle)

      Reusable across components
*/
