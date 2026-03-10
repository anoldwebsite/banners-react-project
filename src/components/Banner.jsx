import classnames from "classnames";

export default function Banner({ status = "success", children }) {
  const className = classnames("banner", `banner--${status}`);
  // console.log(className); // banner banner--success
  return <div className={className}>{children}</div>;
}
