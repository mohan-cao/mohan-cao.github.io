import React from "react";

const flexItem = ({ title, children }) => {
  let result = [];
  children = React.Children.toArray(children);
  for (let i = 0; i < children.length; i += 2) {
    result.push(
      <div key={i} className="even-columns center">
        <div className="even-columns-child">{children[i]}</div>
        {children[i + 1] ? (
          <div className="even-columns-child">{children[i + 1]}</div>
        ) : (
          ""
        )}
      </div>
    );
  }
  return (
    <section>
      <h2>{title}</h2>
      {result}
    </section>
  );
};

export default flexItem;
