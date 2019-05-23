import styled from "styled-components";
import { yellow } from "../../data";

const ArticleWrapper = styled.div.attrs({
  className: "w-100"
})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
`;

const Article = styled.div.attrs({
  className: "pb2 pb4-ns bg-dark-blue"
})`
  display: grid;
  grid-template-columns: repeat(3, 3fr 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-auto-rows: 1fr;
`;

const ArticleImage = styled.img.attrs({
  className: "w-100 h-100",
  src: `${props => [props.src]}`,
  alt: `${props => [props.alt]}`
})`
  grid-column: 1 / -1;
  grid-row: 1 / span 2;
  object-fit: cover;
`;

const ArticleTextWrapper = styled.div.attrs({
  className: "pa4 bg-light-gray dark-blue o-90"
})`
  grid-column: 2 / span 4;
  grid-row: 2 / -1;
  box-shadow: -4px -4px 0px hsl(64, 100%, 50%);
  @media (max-width: 400px){
    grid-column: 1 / span 4;
  }
`;

const ArticleHeader = styled.h1.attrs({
  className: "f4 f1-ns dar-blue ttu"
})``;

const ArticleBody = styled.p.attrs({
  className: "dark-gray f5 f3-ns"
})``;

const ArticleFigure = styled.figure.attrs({
  className: "m0"
})`
  margin: 0;
`;

const ArticleFigureImage = styled.img.attrs({
  className: "w-100",
  src: `${props => [props.src]}`,
  alt: `${props => [props.alt]}`
})`
  object-fit: cover;
`;

const ArticleFigCaption = styled.figcaption.attrs({
  className: "f6 f5-ns "
})``;

export {
  ArticleImage,
  ArticleWrapper,
  ArticleTextWrapper,
  ArticleHeader,
  ArticleBody,
  ArticleFigure,
  ArticleFigCaption,
  ArticleFigureImage,
  Article
};
