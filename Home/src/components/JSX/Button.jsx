import React, { Component } from "react";
import { useEffect } from "react";
import "../CSS/Button.css";

const Button = props => {
  return (
    <div className="button">
      <a href="https://apogee-2023-regist.vercel.app/">
        <button type={props.type} className="btn">
          <svg
            viewBox="0 0 300 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g style={{ mixBlendmode: "difference", opacity: "0.4" }}>
              <g style={{ mixBlendMOde: "difference" }}>
                <path
                  className="btn-inside"
                  d="M14.8763 81.1417L10.5879 76.84V11.1635L14.8763 6.875H223.448L246.809 30.2232H288.41L294.577 36.3911V76.84L290.289 81.1417H14.8763Z"
                  fill="#4DACFF"
                />
              </g>
              <path
                d="M290.422 81.4721H14.7448L10.2578 76.9851V10.9776L14.7448 6.50391H223.594L246.942 29.8521H288.543L294.909 36.2185V76.9454L290.422 81.4721ZM15.0227 80.8103H290.144L294.247 76.7072V36.5362L288.265 30.5536H246.678L223.316 7.20541H15.0227L10.9196 11.2953V76.7072L15.0227 80.8103Z"
                fill="#4DACFF"
              />
            </g>
            <path
              d="M57.6556 2.90332H56.332V7.57559H57.6556V2.90332Z"
              fill="#1A93FF"
            />
            <path
              d="M57.6556 80.4258H56.332V85.0981H57.6556V80.4258Z"
              fill="#1A93FF"
            />
            <path
              d="M288.318 76.627H219.689V80.5977H288.318V76.627Z"
              fill="#1A93FF"
            />
            <path
              d="M259.423 31.3875H258.1L262.07 21.1826H263.394L259.423 31.3875ZM268 21.1826H266.676L262.706 31.3875H264.029L268 21.1826ZM272.606 21.1826H271.283L267.312 31.3875H268.635L272.606 21.1826ZM277.225 21.1826H275.902L271.931 31.3875H273.255L277.225 21.1826Z"
              fill="#1A93FF"
            />
            <path d="M163 0H91V9H163V0Z" fill="#1A93FF" />
            <path
              d="M292.209 85.773H12.9315L5.92969 78.758V9.24302L12.9315 2.24121H225.368L248.729 25.5364H290.33L299.211 34.4177V78.7051L292.209 85.773ZM13.5139 84.4494H291.653L297.887 78.2153V35.0266L289.774 26.86H248.16L224.825 3.5648H13.5139L7.26653 9.78569V78.2153L13.5139 84.4494Z"
              fill="#1A93FF"
            />
            <path
              d="M2.64718 42.6112H0V41.6848H2.64718V42.6112ZM2.64718 39.0376H0V38.111H2.64718V39.0376ZM2.64718 35.4639H0V34.5373H2.64718V35.4639ZM2.64718 31.8902H0V30.9637H2.64718V31.8902ZM2.64718 28.3165H0V27.39H2.64718V28.3165ZM2.64718 24.7428H0V23.8163H2.64718V24.7428ZM2.64718 21.1691H0V20.2426H2.64718V21.1691ZM2.64718 17.5954H0V16.6689H2.64718V17.5954ZM2.64718 14.0217H0V13.0952H2.64718V14.0217ZM2.64718 10.448H0V9.52148H2.64718V10.448Z"
              fill="#1A93FF"
            />
            <path
              d="M22.1964 96.3224H20.5684V88.6191H22.1964V96.3224ZM25.3598 88.6191H23.7318V96.3224H25.3598V88.6191ZM28.5364 88.6191H26.9084V96.3224H28.5364V88.6191ZM31.713 88.6191H30.0718V96.3224H31.713V88.6191ZM34.8764 88.6191H33.2484V96.3224H34.8764V88.6191ZM38.053 88.6191H36.3853V96.3224H38.0265L38.053 88.6191ZM41.2164 88.6191H39.5884V96.3224H41.2164V88.6191ZM44.393 88.6191H42.765V96.3224H44.393V88.6191ZM47.5696 88.6191H45.9284V96.3224H47.5696V88.6191ZM50.733 88.6191H49.105V96.3224H50.733V88.6191ZM53.9096 88.6191H52.2684V96.3224H53.9096V88.6191ZM57.073 88.6191H55.445V96.3224H57.073V88.6191ZM60.2496 88.6191H58.6216V96.3224H60.2099L60.2496 88.6191ZM63.4262 88.6191H61.785V96.3224H63.4262V88.6191ZM66.5896 88.6191H64.9616V96.3224H66.5896V88.6191ZM69.7662 88.6191H68.1515V96.3224H69.7927L69.7662 88.6191ZM72.9296 88.6191H71.3016V96.3224H72.9296V88.6191ZM76.1062 88.6191H74.4782V96.3224H76.093L76.1062 88.6191ZM79.2696 88.6191H77.6416V96.3224H79.2696V88.6191ZM82.4462 88.6191H80.8182V96.3224H82.4462V88.6191ZM85.6229 88.6191H84.0345V96.3224H85.6758L85.6229 88.6191ZM88.7862 88.6191H87.1582V96.3224H88.7862V88.6191ZM91.9628 88.6191H90.3348V96.3224H91.9761L91.9628 88.6191ZM95.1262 88.6191H93.4982V96.3224H95.1262V88.6191ZM98.3028 88.6191H96.6748V96.3224H98.3028V88.6191ZM101.479 88.6191H99.8382V96.3224H101.479V88.6191ZM104.643 88.6191H103.015V96.3224H104.643V88.6191ZM107.819 88.6191H106.178V96.3224H107.859L107.819 88.6191ZM110.983 88.6191H109.355V96.3224H110.983V88.6191ZM114.159 88.6191H112.531V96.3224H114.159V88.6191ZM117.336 88.6191H115.695V96.3224H117.336V88.6191ZM120.499 88.6191H118.871V96.3224H120.499V88.6191ZM123.676 88.6191H122.035V96.3224H123.742L123.676 88.6191ZM126.839 88.6191H125.211V96.3224H126.839V88.6191ZM130.016 88.6191H128.388V96.3224H130.016V88.6191ZM133.193 88.6191H131.551V96.3224H133.193V88.6191ZM136.356 88.6191H134.728V96.3224H136.356V88.6191ZM139.533 88.6191H137.891V96.3224H139.533V88.6191ZM142.696 88.6191H141.068V96.3224H142.696V88.6191ZM145.873 88.6191H144.245V96.3224H145.873V88.6191ZM149.036 88.6191H147.408V96.3224H149.036V88.6191Z"
              fill="#1A93FF"
            />
            <path
              d="M235.242 88.6191H152.584V89.9427H235.242V88.6191Z"
              fill="#1A93FF"
            />
          </svg>
          <span>REGISTER</span>
        </button>
      </a>
    </div>
  );
};

export default Button;
