import React from 'react';

export default ({ items = [], title }) => {
  return (<section>
    <h2>{title}</h2>
    <ul>
      {items.map((x, i) => <li key={i}>{x}</li>)}
    </ul>
  </section>);
};
