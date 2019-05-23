import React from "react";
import { Video } from "./views/Video";
import {
  ArticleWrapper,
  ArticleImage,
  ArticleTextWrapper
} from "./components/Article/Article";
import {
  HContainer,
  HImage,
  HTitle,
  HLogo,
  HSubtitle
} from "./views/Header/Header";
import { ReactComponent as Logo } from "./Samsung_Logo.svg";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <HContainer>
        <HImage
          gc="1 / -1"
          gr="1 / -1"
          src="https://res.cloudinary.com/makingthings/image/upload/v1558566764/samsung/DwkdhjgUUAAt7bN.jpg"
          alt="Samsung's Seriously Fun Runap"
        />
        <HLogo>
          <Logo />
        </HLogo>

        <HTitle>Samsung's Seriously Sick Fun Run</HTitle>
        <HSubtitle>
          Londons First Gyroscopic suit mass event, along the banks of the
          Thames culminating in The first ever Volumetrically boadcast live
          concert
        </HSubtitle>
      </HContainer>

      <Video />
      <ArticleWrapper>
        <ArticleImage
          src="https://res.cloudinary.com/makingthings/image/upload/v1558546514/samsung/FunRun.jpg"
          alt="fun run"
        />
        <ArticleTextWrapper>Some bodyCopy</ArticleTextWrapper>
      </ArticleWrapper>
    </div>
  );
}

export default App;
