import styled from 'styled-components'

const ImageParent = styled.div.attrs({
    className: "w-50 vh-60"
})``

const Image = styled.img.attrs({
    className: "w-50",
    src: `${props => [props.src]}`,
    alt: `${props => [props.alt]}`
})``

export { ImageParent, Image }