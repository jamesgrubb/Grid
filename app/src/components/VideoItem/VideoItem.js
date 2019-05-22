import React from 'react'
import styled from 'styled-components'

const Embed = styled.iframe.attrs({
    className: "mw-100"
})`
border: none;
margin: none;
display: inline-block;
`

const EmbedWrapper = (props) => {
    return(
    <Embed title="vimeo-player" src={`https://player.vimeo.com/video/${props.id}?autoplay=1&loop=1&autopause=0`} width="640" height="617"  frameborder="0" allowfullscreen ></Embed>
    )
}

export default EmbedWrapper