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
import { Intro } from "./components/Intro/Intro";
import { ReactComponent as Logo } from "./Samsung_Logo.svg";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <HContainer>
        <HImage
          gc="1 / -1"
          gr="1 / -1"
          src="https://res.cloudinary.com/makingthings/image/upload/v1558546514/samsung/FunRun.jpg"
          alt="Samsung's Seriously Fun Run"
        />
        <HLogo>
          <Logo />
        </HLogo>

        <HTitle>Samsung's Seriously Fun Run</HTitle>
        <HSubtitle />
      </HContainer>
      <Intro>
        London's 1st mass Gyroscopic Suit sports event. A Night Run along the
        banks of the Thames where runners are shadowed by extraordinary
        creatures, culminating in the first ever Volumetrically broadcast live
        concert
      </Intro>
      <Video />

      <ArticleWrapper>
        <Article>
          <ArticleImage
            src="https://res.cloudinary.com/makingthings/image/upload/v1558546514/samsung/FunRun.jpg"
            alt="fun run"
          />

          <ArticleTextWrapper>
            <ArticleHeader>
              A Fun Run unlike any other
            </ArticleHeader>
            <ArticleBody>
              For the first time thousands of runners wearing Sport motion
              tracking suits will race through the night accompanied by
              projected creatures mapped to the motion of the body suits.
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
              <ArticleFigCaption>
                Motion mapping from body suit to cgi character
              </ArticleFigCaption>
            </ArticleFigure>
          </ArticleTextWrapper>
        </Article>

        <Article>
          <ArticleImage
            src="https://res.cloudinary.com/makingthings/image/upload/q_50/v1558609684/samsung/beyonce-hero-487073444_copy.jpg"
            alt="Volumetric Stage"
          />
          <ArticleTextWrapper>
            <ArticleHeader>1st ever live 360 degree filmed event</ArticleHeader>
            <ArticleBody>
              The race will culminate at party on the banks of the river, where
              Beyoncé will perform on a floating stage. For the 1st time the
              show will be filmed Volumetrically. Allowing 360 degree
              projections and streams to Samsung devices
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
                Motion is projected on to available surfaces along the banks of
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
              of creatures galloping through the night
            </ArticleBody>
            <ArticleFigure>
              <ArticleFigureImage
                src="https://res.cloudinary.com/makingthings/image/upload/v1558598317/samsung/Screenshot_2019-05-23_08.57.34.png"
                alt="Creatures of the night"
              />
              <ArticleFigCaption>
                Some of the weird and wonderful creatures runners will encounter
                along the duration of the course
              </ArticleFigCaption>
            </ArticleFigure>
          </ArticleTextWrapper>
        </Article>
        <Article>
          <ArticleImage
            src="https://res.cloudinary.com/makingthings/image/upload/v1558463061/samsung/Samsung.gif"
            alt="Projection"
          />
          <ArticleTextWrapper>
            <ArticleHeader>
              <span className="db">Beyoncé Sung</span>
              <span className="db">Timberlake Sung.</span>
              <span className="db">Bieber Sung.</span>
              <span className="db">Samsung.</span>
            </ArticleHeader>
            <ArticleBody>
              The floating stage will be enhanced by projections on water spray
              created by stunt water-jet pilots
            </ArticleBody>
            <ArticleFigure>
              <ArticleFigureImage
                src="https://res.cloudinary.com/makingthings/image/upload/q_40/v1558592408/samsung/Fountains.png"
                alt="Stage"
              />
              <ArticleFigCaption>Floating Stage</ArticleFigCaption>
            </ArticleFigure>
            <ArticleFigure>
              <ArticleFigureImage
                src="https://res.cloudinary.com/makingthings/image/upload/q_40/v1558599931/samsung/000087a1_medium.jpg"
                alt="Beats"
              />
              <ArticleFigureImage
                src="https://res.cloudinary.com/makingthings/image/upload/q_40/v1558599945/samsung/big_1416216817flycaptain-flyboard-show-cannes-13.jpg"
                alt="Stunt Jet"
              />
              <ArticleFigCaption>
                Stunt artits create backdrop for projections
              </ArticleFigCaption>
            </ArticleFigure>
          </ArticleTextWrapper>
        </Article>
      </ArticleWrapper>
    </div>
  );
}

export default App;
