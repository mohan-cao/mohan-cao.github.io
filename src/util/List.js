import React from "react";

const list = ({ items = [], title }) => {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {items.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </section>
  );
};

export default list
