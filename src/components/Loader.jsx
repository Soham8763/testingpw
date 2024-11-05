import React from 'react'

const Loader = () => {
    return (
        <div className="loader active">
            <div className="loading-img">
                <svg
                    width="80px"
                    height="80px"
                    xmlns="https://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                    className="lds-coffee"
                >
                    <defs>
                        <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                            <stop offset="10%" stopColor="black" stopOpacity="0"></stop>
                            <stop offset="100%" stopColor="white" stopOpacity="1"></stop>
                        </linearGradient>
                        <mask
                            id="mask"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="100"
                            height="100"
                        >
                            <rect
                                x="22"
                                y="8"
                                width="56"
                                height="54"
                                fill="url(#gradient)"
                            ></rect>
                        </mask>
                        <path
                            id="steam"
                            d="M0-4c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0 c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0 c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0 c-2.1,2.6-2.1,6.4,0,9h0c2.1,2.6,2.1,6.4,0,9h0c-2.1,2.6-2.1,6.4,0,9h0c2.1,2.6,2.1,6.4,0,9"
                            strokeWidth="6"
                            strokeLinecap="round"
                            fill="#f00"
                            stroke="#71c2cc"
                        ></path>
                    </defs>
                    <g mask="url(#mask)">
                        <use x="29" y="2.85268" href="#steam">
                            <animate
                                attributeName="y"
                                calcMode="linear"
                                values="4;-14"
                                keyTimes="0;1"
                                dur="1.3"
                                begin="0s"
                                repeatCount="indefinite"
                            ></animate>
                        </use>
                        <use x="47" y="-2.29464" href="#steam">
                            <animate
                                attributeName="y"
                                calcMode="linear"
                                values="0;-18"
                                keyTimes="0;1"
                                dur="0.65"
                                begin="0s"
                                repeatCount="indefinite"
                            ></animate>
                        </use>
                        <use x="64" y="-14.721" href="#steam">
                            <animate
                                attributeName="y"
                                calcMode="linear"
                                values="-4;-22"
                                keyTimes="0;1"
                                dur="0.8666666666666667"
                                begin="0s"
                                repeatCount="indefinite"
                            ></animate>
                        </use>
                    </g>
                    <path
                        d="M81.2,52.5l-5.2,0V49c0-1.6-1.3-3-3-3H20c-1.6,0-3,1.3-3,3v11.6C17,71.3,25.7,80,36.5,80h20.1 c7.1,0,13.3-3.8,16.7-9.5h8.3c5.2,0,9.3-4.4,9-9.6C90.2,56.1,86,52.5,81.2,52.5z M81.5,67.5h-6.8c0.8-2.2,1.3-4.5,1.3-7v-5h5.5 c3.3,0,6,2.7,6,6S84.8,67.5,81.5,67.5z"
                        fill="#1d3f72"
                    ></path>
                    <path
                        d="M78.8,88H19.2c-1.1,0-2-0.9-2-2s0.9-2,2-2h59.5c1.1,0,2,0.9,2,2S79.9,88,78.8,88z"
                        fill="#5699d2"
                    ></path>
                </svg>
            </div>
        </div>
    )
}

export default Loader;