import styled from "styled-components";

const VideoGallery = styled.div.attrs({
  className: ""
})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export default VideoGallery;
