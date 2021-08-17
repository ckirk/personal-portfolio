import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import ProjectBkgImg from './ProjectBkgImg'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

class ProjectsRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const Post = (props) => {
      const { post } = props
      console.log(props)

      return (
        <div className="is-parent column is-6">
          <Link to={post.fields.slug}>
            <div className={`is-child project-tile`}>
              {/* <header className='header'>
                <h2>{post.frontmatter.title}</h2>
                <p>{post.frontmatter.description}</p>
              </header> */}

              <div className="fill-div bkg-img-container">
                <ProjectBkgImg
                  imageInfo={{
                    image: post.frontmatter.featuredimage,
                    alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                  }}
                />
              </div>
            </div>
          </Link>
        </div>
      )
    }

    const OldPost = (props) => {
      const { post } = props

      return (
        <div className="is-parent column is-6" >
          <article
            className={`blog-list-item tile is-child box notification ${
              post.frontmatter.featuredpost ? 'is-featured' : ''
            }`}
          >
            <header>
              {post.frontmatter.featuredimage ? (
                <div className="featured-thumbnail">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                    }}
                  />
                </div>
              ) : null}
              <p className="post-meta">
                <Link
                  className="title has-text-primary is-size-4"
                  to={post.fields.slug}
                >
                  {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <span className="subtitle is-size-5 is-block">
                  {post.frontmatter.date}
                </span>
              </p>
            </header>
            <p>
              {post.excerpt}
              <br />
              <br />
              <Link className="button" to={post.fields.slug}>
                Keep Reading →
              </Link>
            </p>
          </article>
        </div>
      )
    }

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <Post post={post} key={post.id} />
          ))}
      </div>
    )
  }
}

ProjectsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectsRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "project-page" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 700, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ProjectsRoll data={data} count={count} />}
  />
)
