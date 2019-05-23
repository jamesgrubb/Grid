import styled from "styled-components";

const ArticleWrapper = styled.article.attrs({
  className: "vh-75"
})`
  display: grid;
  grid-template-columns: repeat(3, 25vw 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

const ArticleImage = styled.img.attrs({
  className: "w-100 h-100",
  src: `${props => [props.src]}`,
  alt: `${props => [props.alt]}`
})`
  grid-column: 1 / -1;
  grid-row: 1 / span 5;
  object-fit: cover;
`;

const ArticleTextWrapper = styled.div.attrs({
  className: "pa4 bg light-gray"
})`
  grid-column: 2 / span 5;
  grid-row: 4 / -1;
`;

export { ArticleImage, ArticleWrapper, ArticleTextWrapper };
