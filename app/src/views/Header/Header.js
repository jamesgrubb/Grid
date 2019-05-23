import styled from "styled-components";

const HContainer = styled.header.attrs({ className: "vh-75" })`
  display: grid;
  grid-template-columns: repeat(3, 25vw 1fr);
  grid-template-rows: repeat(6, 1fr);
`;
const HImage = styled.img.attrs({
  src: `${props => props.src}`,
  alt: `${props => props.alt}`,
  className: "w-100 h-100 pa0 ma0"
})`
  object-fit: cover;
  z-index: ${props => props.z};
  grid-column: ${props => props.gc};
  grid-row: ${props => props.gr};
`;

const HLogo = styled.div`
  grid-column: 2 / span 2;
  grid-row-start: 2;
`;

const HTitle = styled.h1.attrs({
  className: "f2 lh-solid ttu"
})`
  z-index: ${props => props.z};
  grid-column: 3 / -1;
  grid-row: 3 / -1;
  color: hsl(64, 100%, 50%);
  @media (max-width: 400px) {
    grid-column: 2 / -1;
    grid-row: 3 / -1;
  }
`;

const HSubtitle = styled.h2.attrs({
  className: "f6 white"
})`
  grid-column: 3 / -1;
  grid-row-start: 5;
  @media (max-width: 400px) {
    grid-column: 2 / -1;
  }
`;

export { HContainer, HTitle, HImage, HLogo, HSubtitle };
