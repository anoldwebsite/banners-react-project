import classnames from "classnames";

export default function Banner({ status = "success", layout, children }) {
  const className = classnames(
    "banner",
    `banner--${status}`,
    `banner--${layout}`,
  );
  // console.log(className); // banner banner--success
  return <div className={className}>{children}</div>;
}
