import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container2 = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  touch-action: none;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
}
`

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  touch-action: none;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  font-family: "Fascinate";

  svg {
    width: 10vw;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }

  @media (max-width: 48em) {
    svg {
      width: 20vw;
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.navColor};
  padding-top: 0.5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity, // repeats infinite times
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 1,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      delay: 3,
      duration: 5,
      ease: "easeInOut",
    },
  },
};

const Loader = () => {
  return (
    <>
    <Container2
    initial={{
      x: 0,
      opacity: 1,
    }}
    exit={{
      x: "-100%",
      opacity: 0,
    }}
    transition={{
      duration: 2,
      delay: 4
    }}
  ></Container2>
  
    <Container
      initial={{
        x: 0,
        opacity: 1,
      }}
      exit={{
        x: "100%",
        opacity: 0,
      }}
      transition={{
        duration: 2,
        delay: 4
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 512 512"
        height="48px"
        viewBox="0 0 512 512"
        width="48px"
        fill="none"
      >
        <g></g>
        <g>
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="m149.2159,490.9841c-1.68-.0187-3.3389-.1782-4.994-.2919-28.9644-2.0529-54.896-14.2796-74.9104-31.9846-11.4043-10.1217-20.8324-21.9477-28.0547-34.3214s-12.439-25.2261-15.7165-38.1187c-4.0695-16.0962-5.1244-31.8544-4.2596-46.1514s3.763-27.2232 7.6379-38.4108c4.3705-12.5783 9.9156-22.8342 15.5696-30.9623s11.3506-14.2213 16.304-18.5482 9.1137-6.9427 12.1913-8.3248 5.1849-1.5341 5.8753-.5842 .0735,2.9649-1.4688,5.988-4.048,7.1186-7.0504,12.4141-6.5436,11.9307-9.8411,19.8626-6.4117,17.138-8.3724,27.7492c-1.7542,9.4313-2.5368,19.9528-1.9095,31.1084s2.6258,22.934 6.7566,34.4674c3.294,9.2479 7.983,18.492 13.9539,27.019s13.2681,16.3314 21.7387,22.7836c14.822,11.3456 33.8183,18.7192 53.4655,18.9864 17.9594.2947 37.1187-5.4052 53.0249-16.9417 12.8709-9.2785 23.892-22.7226 31.2861-38.4108-7.3488-24.4956-9.0103-51.2775-4.1128-77.5518 1-5.3127 2.153-10.6032 3.6721-15.7733-4.6074-9.5318-10.4491-18.3079-17.3322-25.5585-10.9894-12.0338-26.1316-20.9762-42.1555-30.086-16.8676-9.2757-35.2933-18.4282-53.0248-30.6702-18.9689-12.7931-36.1904-30.5287-47.884-52.8696-6.0615-11.8715-10.0622-25.058-11.4568-38.7029-1.4593-14.2856.3755-28.6803 5.2877-41.916 7.0413-18.2014 19.2172-31.8912 33.1956-40.3094 15.0836-9.032 31.2749-12.211 46.1213-10.9536 16.4257,1.4085 30.7534,7.5063 42.4492,15.6272 3.6524,2.5368 7.1366,5.2224 10.2819,8.0326 15.0224-16.27 36.5517-26.5808 60.5158-26.5808 24.0386,0 45.6344,10.3684 60.6627,26.7269 3.1505-2.8345 6.4535-5.6217 10.1349-8.1787 11.6958-8.1209 26.1705-14.2187 42.5961-15.6272 14.8465-1.2574 30.8908,1.9216 45.9744,10.9536 13.9785,8.4182 26.1543,22.108 33.1957,40.3094 4.9124,13.2356 6.8939,27.6304 5.4347,41.916-1.3947,13.6449-5.3954,26.8314-11.457,38.7029-11.6934,22.3408-29.0619,40.0764-48.0307,52.8696-17.7315,12.2421-36.0104,21.3945-52.8779,30.6702-16.0238,9.1098-31.166,18.0522-42.1555,30.086-6.9307,7.3007-12.8583,16.0948-17.4791,25.7045-.0216.0425.0216.1038 0,.1457 1.4804,5.0743 2.8381,10.2701 3.819,15.4811 4.8975,26.2743 3.2361,53.0563-4.1128,77.5518 7.3942,15.6881 18.4151,29.1322 31.2862,38.4108 15.9061,11.5364 34.9184,17.2367 52.8779,16.9417 19.6472-.2674 38.7903-7.6408 53.6123-18.9863 8.4706-6.4523 15.7678-14.2566 21.7387-22.7836s10.513-17.771 13.807-27.019c4.1308-11.5335 6.2762-23.3119 6.9035-34.4674s-.1549-21.6771-1.9095-31.1084c-1.9605-10.6112-5.2217-19.8173-8.5192-27.7492s-6.6919-14.5672-9.6942-19.8626-5.5061-9.391-7.0505-12.4141-2.1592-5.0381-1.4687-5.988 2.6507-.7979 5.7283.5842 7.238,3.9978 12.1914,8.3248 10.7968,10.4201 16.4509,18.5482 11.199,18.384 15.5695,30.9623c3.8751,11.1876 6.6263,24.1138 7.4911,38.4108s-.1895,30.0551-4.2596,46.1514c-3.2775,12.8926-8.4942,25.7449-15.7164,38.1187s-16.5035,24.1997-27.9079,34.3214c-20.0145,17.705-45.946,29.9317-74.9104,31.9846-26.4811,1.8258-54.5168-5.0666-79.17-21.6152-12.074-8.1382-23.1781-18.5082-32.6081-30.6702-9.4434,12.1963-20.6549,22.5143-32.755,30.6702-21.5716,14.4801-45.5938,21.588-69.035,21.9073-1.6744.0238-3.4609.0187-5.1409,0zm-7.9317-87.3371c-34.5823,0-62.7191-27.8309-62.7191-62.2167s28.1368-62.3627 62.7191-62.3627 62.5722,27.9769 62.5722,62.3627-27.99,62.2167-62.5722,62.2167zm229.5783,0c-34.5823,0-62.7191-27.8309-62.7191-62.2167s28.1368-62.3627 62.7191-62.3627 62.5722,27.9769 62.5722,62.3627-27.9899,62.2167-62.5722,62.2167zm-114.8626-31.1083c5.0432,0 9.1068-13.9155 9.1068-31.1084s-4.0636-31.1084-9.1068-31.1084-9.1068,13.9155-9.1068,31.1084 4.0636,31.1084 9.1068,31.1084zm0-128.8149c3.3085-4.3031 6.7122-8.41 10.4287-12.2681 17.4092-17.6164 36.6217-29.2705 54.4936-38.4108 18.5048-9.7693 35.6945-17.523 49.9402-26.8729 14.8187-10.0213 27.4192-20.9604 34.3707-34.0293 3.7538-6.7696 6.5035-13.8327 7.4909-20.7389 1.024-7.1376.7306-14.4377-1.175-20.4468-2.3521-8.3128-8.1848-15.7925-14.9821-20.8849-7.4235-5.6045-16.9582-8.4341-25.9982-8.7629-10.1015-.3769-20.1222,2.6624-28.936,7.1564-3.1006,1.5819-5.9995,3.4348-8.813,5.4038 3.4191,8.987 5.4348,18.7399 5.4348,28.9176 0,45.1314-36.8653,81.6411-82.2546,81.6411s-82.2546-36.5098-82.2546-81.6411c0-10.1777 2.0156-19.9306 5.4347-28.9176-2.7843-1.9425-5.6012-3.8402-8.6661-5.4038-8.8138-4.494-18.8345-7.5336-28.936-7.1564-9.04.329-18.5747,3.1584-25.9983,8.7629-6.7972,5.0925-12.63,12.5721-14.982,20.8849-1.9057,6.0091-2.199,13.3093-1.1751,20.4468 .9876,6.9062 3.7372,13.9693 7.491,20.7389 6.9515,13.0689 19.552,24.0081 34.3707,34.0293 14.2456,9.3499 31.4355,17.1036 49.9402,26.8729 17.8719,9.1403 36.9376,20.7944 54.3467,38.4108 3.6951,3.8357 7.1369,7.9922 10.4288,12.2681zm0-77.4057c20.8934,0 37.8958-16.9058 37.8958-37.6805s-17.0024-37.5345-37.8958-37.5345-37.8959,16.7597-37.8959,37.5345 17.0024,37.6805 37.8959,37.6805z"
          />
        </g>
      </svg>
      <Text variants={textVariants} initial="hidden" animate="visible">
        N-Fashion
      </Text>
    </Container>
    </>
  );
};

export default Loader;
