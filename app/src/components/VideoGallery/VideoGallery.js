import styled from 'styled-components'

const VideoGallery = styled.div.attrs({
    className: ""
})`
display: grid;
grid-template-columns: 2vmin repeat(3, 1fr) 2vmin
`

export default VideoGallery