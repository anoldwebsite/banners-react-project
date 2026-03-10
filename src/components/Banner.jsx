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
/*
  Why not put everything inside Banner instead of having a separate BannerController componet and a Banner component?
    Because that would violate one of the most important principles in UI architecture:

    A presentational component should NOT own business logic.
    If Banner handled:

    visibility state

    show/hide logic

    buttons

    actions

    controller behavior

    …then it would no longer be a reusable UI primitive.

    It would become a stateful widget that can’t be used flexibly.

    We'd lose:

    composability

    reusability

    testability

    design-system purity

    ability to use Banner in different contexts

    This is why every serious UI library splits these concerns.
*/
