import React from 'react';
import styled from 'styled-components'

const HeroImage = styled.div.attrs({
    className: "vh-70 w-100"
})`
object-fit: cover;
`

const Img = styled.img.attrs({
    className : "w-100",
    src: `${props => props.src}`,
    alt: `${props => props.alt}`
})

const ImageWrapper = ({url, alt}) => {
    return(
<HeroImage>
    <Img url alt />
    </HeroImage>
    )
}

export default ImageWrapper