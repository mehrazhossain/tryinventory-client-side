import React from 'react';
import './Footer.css';

// get full dynamic year
const today = new Date();
const year = today.getFullYear();

const Footer = () => {
  return (
    <div className="h-8 relative mt-16 bg-deep-purple-accent-400">
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-500">
            © Copyright {year} TryInventory. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlnssvgjs="http://svgjs.com/svgjs"
                width="28"
                height="28"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                style={{ enableBackground: 'new 0 0 512 512' }}
                xmlSpace="preserve"
                className=""
              >
                <g>
                  <linearGradient
                    xmlns="http://www.w3.org/2000/svg"
                    id="linear-gradient"
                    gradientUnits="userSpaceOnUse"
                    x1="126.15"
                    x2="436.935"
                    y1="117.834"
                    y2="428.619"
                  >
                    <stop offset="0" stopColor="#1d1d1b"></stop>
                    <stop
                      offset=".369"
                      stopColor="#1d1d1b"
                      stopOpacity=".856"
                    ></stop>
                    <stop
                      offset=".75"
                      stopColor="#1d1d1b"
                      stopOpacity=".429"
                    ></stop>
                    <stop offset="1" stopColor="#1d1d1b" stopOpacity="0"></stop>
                  </linearGradient>
                  <circle
                    xmlns="http://www.w3.org/2000/svg"
                    cx="256"
                    cy="256"
                    fill="#03a9f4"
                    r="250"
                    data-original="#03a9f4"
                    className=""
                  ></circle>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m506 256a251.274 251.274 0 0 0 -4.261-46.111l-83.37-83.371s-28.587 13.453-44.594 16.816c-12.579-13.453-30.874-21.3-51.456-21.3-45.377 0-77.534 40.333-68.606 84.082-58.313-3.364-110.913-30.27-145.213-70.629a67.452 67.452 0 0 0 -9.148 33.632c0 23.542 12.578 44.843 30.873 56.054a62.377 62.377 0 0 1 -32.017-8.968c-.214 32.676 23.759 61.615 56.029 67.265-10.234 2.008-21.7 3.649-32.016 1.121a70.339 70.339 0 0 0 66.32 47.086c-28.055 20.956-68.829 34.937-104.054 28.026l144.881 144.884a252.729 252.729 0 0 0 26.632 1.413c138.071 0 250-111.929 250-250z"
                    fill="url(#linear-gradient)"
                    opacity=".49"
                    data-original="url(#linear-gradient)"
                    className=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m373.775 143.334c-12.579-13.453-30.874-21.3-51.456-21.3-45.377 0-77.534 40.333-68.606 84.081-58.313-3.363-110.913-30.269-145.213-70.628a67.452 67.452 0 0 0 -9.148 33.632c0 23.542 12.578 44.844 30.873 56.054a62.377 62.377 0 0 1 -32.017-8.968c-.214 32.676 23.759 61.615 56.029 67.265-10.234 2.007-21.7 3.649-32.016 1.121a70.339 70.339 0 0 0 66.32 47.086c-28.055 20.956-68.829 34.937-104.054 28.026 68.66 42.388 162.5 40.539 227.957-7.383 52.778-38.639 79.628-99.762 79.628-164.143a171.859 171.859 0 0 0 35.447-34.753c-12.579 5.606-26.3 8.969-40.02 11.211 13.72-8.969 25.155-21.3 30.872-38.117-.003 0-28.589 13.453-44.596 16.816z"
                    fill="#ffffff"
                    fillRule="evenodd"
                    data-original="#ffffff"
                    className=""
                  ></path>
                </g>
              </svg>
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlnssvgjs="http://svgjs.com/svgjs"
                width="28"
                height="28"
                x="0"
                y="0"
                viewBox="0 0 152 152"
                style={{ enableBackground: 'new 0 0 512 512' }}
                xmlSpace="preserve"
                className=""
              >
                <g>
                  <linearGradient
                    xmlns="http://www.w3.org/2000/svg"
                    id="linearGradient"
                    gradientUnits="userSpaceOnUse"
                    x1="22.26"
                    x2="129.74"
                    y1="22.26"
                    y2="129.74"
                  >
                    <stop offset="0" stopColor="#fae100"></stop>
                    <stop offset=".15" stopColor="#fcb720"></stop>
                    <stop offset=".3" stopColor="#ff7950"></stop>
                    <stop offset=".5" stopColor="#ff1c74"></stop>
                    <stop offset="1" stopColor="#6c1cd1"></stop>
                  </linearGradient>
                  <g
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_2"
                    data-name="Layer 2"
                  >
                    <g id="Circle">
                      <g id="_03.Instagram" data-name="03.Instagram">
                        <rect
                          id="Background"
                          fill="url(#linearGradient)"
                          height="152"
                          rx="76"
                          width="152"
                          data-original="url(#linearGradient)"
                          className=""
                        ></rect>
                        <g fill="#fff">
                          <path
                            id="Shade"
                            d="m133.2 26c-11.08 20.34-26.75 41.32-46.33 60.9s-40.56 35.22-60.87 46.3q-1.91-1.66-3.71-3.46a76 76 0 1 1 107.45-107.48q1.8 1.8 3.46 3.74z"
                            opacity=".1"
                            fill="#ffffff"
                            data-original="#ffffff"
                            className=""
                          ></path>
                          <g id="Icon">
                            <path
                              d="m94 36h-36a22 22 0 0 0 -22 22v36a22 22 0 0 0 22 22h36a22 22 0 0 0 22-22v-36a22 22 0 0 0 -22-22zm15 54.84a18.16 18.16 0 0 1 -18.16 18.16h-29.68a18.16 18.16 0 0 1 -18.16-18.16v-29.68a18.16 18.16 0 0 1 18.16-18.16h29.68a18.16 18.16 0 0 1 18.16 18.16z"
                              fill="#000000"
                              data-original="#000000"
                              className=""
                            ></path>
                            <path
                              d="m90.59 61.56-.19-.19-.16-.16a20.16 20.16 0 0 0 -14.24-5.88 20.52 20.52 0 0 0 -20.38 20.67 20.75 20.75 0 0 0 6 14.61 20.19 20.19 0 0 0 14.42 6 20.73 20.73 0 0 0 14.55-35.05zm-14.59 28a13.56 13.56 0 1 1 13.37-13.56 13.46 13.46 0 0 1 -13.37 13.56z"
                              fill="#000000"
                              data-original="#000000"
                              className=""
                            ></path>
                            <path
                              d="m102.43 54.38a4.88 4.88 0 0 1 -4.85 4.92 4.81 4.81 0 0 1 -3.42-1.43 4.93 4.93 0 0 1 3.43-8.39 4.82 4.82 0 0 1 3.09 1.12l.1.1a3.05 3.05 0 0 1 .44.44l.11.12a4.92 4.92 0 0 1 1.1 3.12z"
                              fill="#000000"
                              data-original="#000000"
                              className=""
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlnssvgjs="http://svgjs.com/svgjs"
                width="28"
                height="28"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                style={{ enableBackground: 'new 0 0 512 512' }}
                xmlSpace="preserve"
                className=""
              >
                <g>
                  <linearGradient
                    xmlns="http://www.w3.org/2000/svg"
                    id="linear-gradient"
                    gradientUnits="userSpaceOnUse"
                    x1="186.516"
                    x2="566.38"
                    y1="161.751"
                    y2="541.615"
                  >
                    <stop offset="0" stopColor="#1d1d1b"></stop>
                    <stop
                      offset=".369"
                      stopColor="#1d1d1b"
                      stopOpacity=".856"
                    ></stop>
                    <stop
                      offset=".75"
                      stopColor="#1d1d1b"
                      stopOpacity=".429"
                    ></stop>
                    <stop offset="1" stopColor="#1d1d1b" stopOpacity="0"></stop>
                  </linearGradient>
                  <circle
                    xmlns="http://www.w3.org/2000/svg"
                    cx="256"
                    cy="256"
                    fill="#1877f2"
                    r="250"
                    data-original="#1877f2"
                  ></circle>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m483.689 359.371a22.7 22.7 0 0 1 3.035-6.966 249.219 249.219 0 0 0 19.276-96.405c0-1.789-.03-3.57-.068-5.35l-161.921-161.921a426.8 426.8 0 0 0 -46.539-2.379c-46.054 0-77.573 28.1-77.573 79.729v44.521h-51.91v60.5l51.911 51.9v102.65l77 77a250.317 250.317 0 0 0 186.789-143.279z"
                    fill="url(#linear-gradient)"
                    opacity=".49"
                    data-original="url(#linear-gradient)"
                    className=""
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m282.345 425.65v-154.55h52.1l7.806-60.5h-59.906v-38.529c0-17.475 4.851-29.382 29.908-29.382h31.757v-53.961a427.147 427.147 0 0 0 -46.539-2.378c-46.054 0-77.573 28.1-77.573 79.729v44.521h-51.909v60.5h51.911v154.55z"
                    fill="#ffffff"
                    data-original="#ffffff"
                    className=""
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
