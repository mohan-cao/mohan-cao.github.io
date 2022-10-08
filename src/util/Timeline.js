import React from "react";

const TimelineItems = ({ items }) => {
  let result = [];
  if (items && items.length > 0) {
    for (let i = 0; i < items.length; i++) {
      const title = items[i].title ? (
        <h3>
          {items[i].title}
          <small>{items[i].date ? items[i].date : ""}</small>
        </h3>
      ) : (
        ""
      );
      const subtitle = items[i].subtitle;
      const list =
        items[i].description &&
        typeof items[i].description === "object" &&
        items[i].description.length
          ? items[i].description.map((x, i) => <li key={i}>{x}</li>)
          : items[i].description;
      result.push(
        <div key={i} className="timeline-item">
          {title}
          <p>
            <em>{subtitle}</em>
          </p>
          {list && list.length ? <ul>{list}</ul> : list}
        </div>
      );
    }
  }
  return result;
};

const timelineContainer = ({ title, list, condensed = false }) => {
  return (
    <section>
      <h2>{title}</h2>
      <div className={`timeline${condensed ? " condensed" : ""}`}>
        <TimelineItems items={list} />
      </div>
    </section>
  );
};

export default timelineContainer
