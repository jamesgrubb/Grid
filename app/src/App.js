import React from "react";
import { Video } from "./views/Video";
import ResponsiveEmbed from "react-responsive-embed";
import {
  ArticleWrapper,
  ArticleImage,
  ArticleTextWrapper,
  ArticleHeader,
  ArticleBody,
  ArticleFigure,
  ArticleFigureImage,
  ArticleFigCaption,
  Article
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
        <Article>
          <ArticleImage
            src="https://res.cloudinary.com/makingthings/image/upload/v1558546514/samsung/FunRun.jpg"
            alt="fun run"
          />
          <ArticleTextWrapper>
            <ArticleHeader>A run London has never seen before</ArticleHeader>
            <ArticleBody>
              For the first time hundresds of key runners / pacers wil be
              wearing Sport motion tracking suits. As these runners pass pas key
              points augmented images of weird and wonderful night creatures
              will be projected . Their movements tracked by sensros in the
              suits.
            </ArticleBody>
            <ArticleFigure>
              <ArticleFigureImage
                src="https://res.cloudinary.com/makingthings/image/upload/v1558576457/samsung/Screen-Shot-2016-11-18-at-12.48.08-AM.png"
                alt="BodySuit"
              />
              <ArticleFigureImage
                src="https://res.cloudinary.com/makingthings/image/upload/v1558576456/samsung/rokoko-smartsuit-pro-9.jpg"
                alt="BodySuit"
              />
              <ArticleFigCaption>Caption</ArticleFigCaption>
            </ArticleFigure>
          </ArticleTextWrapper>
        </Article>
        <Article>
          <ArticleImage
            src="https://res.cloudinary.com/makingthings/image/upload/v1558582285/samsung/Stage.png"
            alt="Volumetric Stage"
          />
          <ArticleTextWrapper>
            <ArticleHeader>
              1st ever live volumtertically filmed event
            </ArticleHeader>
            <ArticleBody>
              The race will culminate with a party the banks of the river Where
              A star celebrity will performing on a floating stafge
            </ArticleBody>
            <ArticleFigure>
              <ResponsiveEmbed
                src={`https://www.youtube.com/embed/kNKRcYDeXxA`}
                ratio="16:9"
              />
              <ArticleFigureImage
                src="https://res.cloudinary.com/makingthings/image/upload/q_40/v1558592408/samsung/Fountains.png"
                alt="BodySuit"
              />
              <ArticleFigCaption>
                Motion is projectoed on to available surfaces along the banks of
                the river
              </ArticleFigCaption>
            </ArticleFigure>
          </ArticleTextWrapper>
        </Article>
        <Article>
          <ArticleImage
            src="https://res.cloudinary.com/makingthings/image/upload/v1558581168/samsung/Projections_deer.jpg"
            alt="Projection"
          />
          <ArticleTextWrapper>
            <ArticleHeader>Motion Tracking</ArticleHeader>
            <ArticleBody>
              Athletes are tracked their motions translated in to the movements
              of creatures galloping through the night{" "}
            </ArticleBody>
            <ArticleFigure>
              <ArticleFigureImage
                src="https://res.cloudinary.com/makingthings/image/upload/v1558581811/samsung/maxresdefault.jpg"
                alt="Creatures of the night"
              />
              <ArticleFigCaption>
                Motion is projectoed on to available surfaces along the banks of
                the river
              </ArticleFigCaption>
            </ArticleFigure>
          </ArticleTextWrapper>
        </Article>
      </ArticleWrapper>
    </div>
  );
}

export default App;
