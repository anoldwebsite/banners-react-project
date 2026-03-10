import classnames from "classnames";

export default function Banner({
  status = "success",
  layout = "single",
  title,
  text,
  children,
}) {
  const className = classnames(
    "banner",
    `banner--${status}`,
    `banner--${layout}`,
  );
  // console.log(className); // banner banner--success
  return (
    <div className={className}>
      {title && <h3 className="banner--title">{title}</h3>}
      {text && <p className="banner--text">{text}</p>}
      {children}
    </div>
  );
}
