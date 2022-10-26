import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Open Source",
    Svg: require("@site/static/img/software_developer.svg").default,
    description: (
      <>
        SignalWire Community libraries are Open Source. Contributions are
        welcome.
      </>
    ),
  },
  {
    title: "Write Less Code",
    Svg: require("@site/static/img/hot_beverage.svg").default,
    description: (
      <>
        SignalWire Community libraries provide you an unofficial higher-level
        interface to SignalWire APIs.
      </>
    ),
  },
  {
    title: "Integration",
    Svg: require("@site/static/img/developer_activity.svg").default,
    description: (
      <>
        Easily integrate SignalWire libraries with frameworks such as React and
        React&nbsp;Native.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
