import CMS from 'netlify-cms-app'
// import uploadcare from 'netlify-cms-media-library-uploadcare' // remove?
// import cloudinary from 'netlify-cms-media-library-cloudinary' // remove?

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

// CMS.registerMediaLibrary(uploadcare) // remove?
// CMS.registerMediaLibrary(cloudinary) // remove?

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
