/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '400px'
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundSize : {
        "hq7-big":"500% 500%"
      },
      boxShadow: {
        "hq7-normal":
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        "hq7-neumorphism":
          "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
        "hq7-neumorphism-concave":
          "inset -5px -5px 9px rgba(255,255,255,0.45), inset 5px 5px 9px rgba(94,104,121,0.3)",
      },
      animation: {
        gradientAnimation: "gradient 3s linear infinite",
        sendCardToBackDesktop: "sendCardToBackDesktop 1s ease forwards",
        sendCardToBackMobile: "sendCardToBackMobile 1s ease forwards",
        sendCardToFrontDesktop: "sendCardToFrontDesktop 1s forwards",
        sendCardToFrontMobile: "sendCardToFrontMobile 1s forwards"
      },
      keyframes: {
        gradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          }
        },
        sendCardToBackDesktop: {
          "0%": {
            zIndex: '10'
          },
          "49%": {
            transform: 'translateY(-55%)',
            zIndex: '10'
          },
          "50%": {
            transform: 'translateY(-55%)',
            boxShadow: 'none',
            zIndex: '0'
          },
          "99%": {
            transform: 'translateY(0%)',
            boxShadow: 'none',
            zIndex: '0'
          },
          "100%": {
            transform: 'translateY(0%)',
            display: 'none',
            boxShadow: 'none',
            zIndex: '0'
          }
        },
        sendCardToBackMobile: {
          "0%": {
            zIndex: '10'
          },
          "49%": {
            transform: 'translateX(55%)',
            zIndex: '10'
          },
          "50%": {
            transform: 'translateX(55%)',
            boxShadow: 'none',
            zIndex: '0'
          },
          "99%": {
            transform: 'translateX(0%)',
            boxShadow: 'none',
            zIndex: '0',
          },
          "100%": {
            transform: 'translateX(0%)',
            display: 'none',
            boxShadow: 'none',
            zIndex: '0'
          }
        },
        sendCardToFrontDesktop: {
          "0%": {
            boxShadow: `none`,
            zIndex: '0'
          },
          "49%": {
            transform: 'translateY(55%)',
            boxShadow: `rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px`,
            zIndex: '0'
          },
          "50%": {
            transform: 'translateY(55%)',
            boxShadow: `rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px`,
            zIndex: '10'
          },
          "100%": {
            transform: 'translateY(0%)',
            boxShadow: `rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px`,
            zIndex: '10',
          }
        },
        sendCardToFrontMobile: {
          "0%": {
            boxShadow: `none`,
            zIndex: '0'
          },
          "49%": {
            transform: 'translateX(-55%)',
            boxShadow: `rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px`,
            zIndex: '0'
          },
          "50%": {
            transform: 'translateX(-55%)',
            boxShadow: `rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px`,
            zIndex: '10'
          },
          "100%": {
            transform: 'translateX(0%)',
            boxShadow: `rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px`,
            zIndex: '10'
          }
        }
      },
    },
  },
  plugins: [],
};
