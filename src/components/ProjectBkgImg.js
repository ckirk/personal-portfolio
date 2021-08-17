import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = {
    borderRadius: '0px',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }

  const objectPosition = 'left top'

  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} objectPosition={objectPosition} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} objectPosition={objectPosition} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} objectPosition={objectPosition} alt={alt} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
