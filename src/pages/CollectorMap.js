/** @jsx jsx */
import React, { Component } from "react";
import ReactGA from "react-ga";
import Iframe from "react-iframe";
import { jsx, css } from "@emotion/core";
import styles from "./CollectorMap.css";

class CollectorMap extends Component {
  constructor(props) {
    super(props);
    this.state = { expandMap: false, iframeUrl: false };
  }

  componentDidMount() {
    this.props.parent.setState({ currentPage: window.location.pathname });
  }

  render() {
    return (
      <>
        <h2>
          Read dead redemption collectors map from{" "}
          <a
            href="https://twitter.com/_jeanropke"
            onClick={() => {
              ReactGA.event({
                category: "click.map.link",
                action: "Click on jean ropke twitter profile"
              });
            }}
          >
            @JeanRopke
          </a>{" "}
          :
        </h2>
        <span
          className="mb-16 p-8 d-inline-block"
          css={css`
            border-image-slice: 10;
            border-image-outset: 3px;
            border-image-source: url(${require("../images/frame.png")});
            border-style: solid;
            border-width: 6px;
            background: rgba(255, 255, 255, 0.3);
            color: var(--Armadillo);
          `}
        >
          <span role="img" aria-label="information icon">
            ℹ️
          </span>{" "}
          If the map is not loading, please visit{" "}
          <a
            href="https://jeanropke.github.io/poggers?v=1&utm_source=madamnazar.io"
            onClick={() => {
              ReactGA.event({
                category: "click.map.link",
                action: "🛑 Click on map resolver"
              });
            }}
          >
            this link
          </a>{" "}
          and come back
        </span>
        <div
          className="pos-relative"
          css={
            this.state.expandMap === true &&
            css`
              position: fixed;
              top: 90px;
              z-index: 9999999999;
              left: 2px;
              width: calc(100%);
              height: 82vh;
            `
          }
        >
          <button
            onClick={() => this.setState({ expandMap: !this.state.expandMap })}
            css={css`
              position: absolute;
              bottom: 32px;
              left: 16px;
              appearance: none;
              border: none;
              background: rgba(0, 0, 0, 0.8);
              padding: 1em;
              font-size: 16px;
              border-radius: 100px;
              color: white;
              z-index: 99999999999;
              cursor: pointer;
            `}
          >
            {this.state.expandMap === false ? "Expand Map" : "Reduce Map"}
          </button>

          <Iframe
            url="https://jeanropke.github.io/poggers?v=1&utm_source=madamnazar.io"
            title="Jean Ropke RDR2 Collector Map"
            height={this.state.expandMap === false ? "640px" : "100%"}
            frameBorder="border: 4px solid var(--Armadillo);"
            id="myId"
            display="initial"
            position="relative"
            css={styles.iframe}
          />
        </div>
        <h4>
          Credit:{" "}
          <a
            href="https://github.com/jeanropke/RDR2CollectorsMap"
            onClick={() => {
              ReactGA.event({
                category: "click.map.link",
                action: "Click onjean RDR2CollectorsMap github project"
              });
            }}
          >
            @JeanRopke
          </a>
        </h4>
      </>
    );
  }
}
export default CollectorMap;