import { Box, IconButton, Typography } from "@mui/material";
import style from "./DesignThree.module.css";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const DesignThree = () => {
  const slides = [
    {
      name: "XPECTRA",
      avtar: "avtar-red.png",
      smoke: "red.png",
      color: "#fa1618",
    },
    {
      name: "WHISPER",
      avtar: "green.png",
      smoke: "widesmoke.png",
      color: "#31e98e",
    },
    // {
    //   name: "NOVANOVA",
    //   avtar: "blue-avtar.png",
    //   smoke: "blue.png",
    //   color: '#002eb7'
    // },
    {
      name: "LYNX",
      avtar: "yellow-avtar.png",
      smoke: "yellow.png",
      color: "#ffc900",
    },
    {
      name: "CRYOCRYO",
      avtar: "cyan-avtar.png",
      smoke: "cyan.png",
      color: "#e1fffd",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);

    const timer = setTimeout(() => {
      setAnimation(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentSlide]);



  const slideChange = (prop) => {
    if (prop === "pre") {
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    }

    if (prop === "next") {
      if (slides.length > currentSlide + 1) {
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  return (
    <Box
      className={style.fullContainer}
      sx={{
        backgroundImage: `linear-gradient(to bottom, #000000cc 14%, ${slides[currentSlide].color} 200%)`,
      }}
    >
      <Typography className={style.topText}>GAME</Typography>

      <Typography
        className={`${style.mainText} ${
          animation === true && style.NameSlideFromRight
        }`}
        color={slides[currentSlide].color}
      >
        {slides[currentSlide].name}
      </Typography>

      <Typography className={style.lowerText}>GAME</Typography>
      <Typography className={style.lowerTextReverse}>GAME</Typography>

      <Box className={style.haxaGon}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            points="50,5 95,25 95,75 50,95 5,75 5,25"
            className={style.polygonOuter}
            stroke={slides[currentSlide].color}
          />
        </svg>
      </Box>

      <Box className={style.haxaGonInner}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            points="50,5 95,25 95,75 50,95 5,75 5,25"
            className={style.polygonInner}
            stroke={slides[currentSlide].color}
          />
        </svg>
      </Box>

      <Box
        className={`${style.Avatar} ${
          animation === true && style.AvatarSlideFromLeft
        }`}
      >
        <img src={`/image/hero-images-3/${slides[currentSlide].avtar}`}></img>
      </Box>

      <Box
        className={`${style.bottomSmoke} ${
          animation === true && style.animationForSmoke
        }`}
      >
        <img src={`/image/hero-images-3/${slides[currentSlide].smoke}`} />
      </Box>

      <Box className={style.bottomSmokeCopy}>
        <img src={`/image/hero-images-3/${slides[currentSlide].smoke}`} />
      </Box>

      <Box className={style.bottomLeftText}>
        <Box className={animation === true && style.boxForAnimation}>
          <Typography variant="h1">{slides[currentSlide].name}</Typography>
          <Typography variant="body2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </Box>
      </Box>

      <Box className={style.controles}>
        <IconButton
          style={{
            borderRadius: "50%",
            backgroundColor: "#ffffff3d",
            margin: "0 10px",
          }}
          onClick={() => slideChange("pre")}
        >
          <ChevronLeft style={{ color: "fff" }} />
        </IconButton>

        <IconButton
          style={{
            borderRadius: "50%",
            backgroundColor: "#ffffff3d",
            margin: "0 10px",
          }}
          onClick={() => slideChange("next")}
        >
          <ChevronRight style={{ color: "fff" }} />
        </IconButton>
      </Box>
    </Box>
  );
};
export default DesignThree;
