import Link from 'next/link'
import { notFound } from 'next/navigation'
import Post from 'src/app/includes/post'
import Demo from 'src/app/includes/demo'
import Video from 'src/app/includes/video'
import { markdownSlug } from 'src/app/snippets/markdown-slug'
import { getPosts, getPostData, getAssets } from 'src/app/snippets/getPosts'
import { postSort } from 'src/app/snippets/post-sort'
import { typeSort } from 'src/app/snippets/type-sort'
const classes = require('src/app/snippets/classes').classes

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map(post => ({
    slug: [...post.slug.split('/')],
  }))
}

export async function generateMetadata(props) {
  const slug = props.params.slug.join('/')
  const posts = await getPosts()
  const post = posts.filter(x => x.slug === slug)[0]

  if (!post) {
    return {
      title: '404',
      description: 'Page not found',
    }
  }

  let title = post.post.frontmatter.title
  title =
    post.post.frontmatter.parent && post.post.frontmatter.parent !== post.post.frontmatter.title
      ? `${post.post.frontmatter.parent} ${title}`
      : title
  title +=
    post.post.frontmatter.type && post.post.frontmatter.type !== post.post.frontmatter.title
      ? ` ${post.post.frontmatter.type}`
      : ''
  const description = post.post.frontmatter.description
    ? post.post.frontmatter.description
    : post.post.frontmatter.description

  const titleSuffix = 'UI library with Tailwind CSS and Vanilla JS'

  return {
    title: `${title} - ${titleSuffix}`,
    description: description,
  }
}

export default async function Page(props) {
  const slug = props.params.slug.join('/')
  const assets = await getAssets()
  const posts = await getPosts()
  const post = posts.filter(x => x.slug === slug)[0]

  if (!post) {
    notFound()
  }

  const data = await getPostData(post)

  const category = []
  for (const post of posts) {
    const title = post.post.frontmatter.category
    if (title) {
      let object = category.filter(x => x.title === title)
      if (!object.length) {
        object = {}
        object.title = title
        object.type = post.post.frontmatter.type
        object.posts = []
        category.push(object)
      } else {
        object = object[0]
      }
      object.posts.push(post)
    }
  }
  for (const cat of category) {
    cat.posts = cat.posts.sort(postSort)
  }
  post.categories.category = category

  if (post) {
    post.categories.category = post.categories.category
      .filter(x => x.type === post.post.frontmatter.type)
      .sort((a, b) => a.title.localeCompare(b.title))
    post.postsAdiacent.posts = posts
      .filter(
        x =>
          x.post.frontmatter.type === post.post.frontmatter.type &&
          x.post.frontmatter.category === post.post.frontmatter.category &&
          x.post.frontmatter.parent === post.post.frontmatter.parent,
      )
      .sort(postSort)
  }

  return (
    <>
      {post.post.frontmatter.parent ? (
        <>
          <Post data={data} />
          {post.post.frontmatter.parent === post.post.frontmatter.title ? (
            post.postsAdiacent.posts.length > 1 ? (
              <div className="docs_listing">
                <div className="xt-row xt-row-6">
                  {post.post.frontmatter.type === 'Components' ? (
                    <h2 className={`${classes.hBlock()}`}>{'Sub Pages'}</h2>
                  ) : null}
                  <div className="docs_listing-group">
                    <div className="docs_listing-items">
                      <div className="xt-row xt-row-stretch">
                        {post.postsAdiacent.posts.map(({ post: adiacent }, i) =>
                          adiacent.frontmatter.parent !== adiacent.frontmatter.title ? (
                            adiacent.frontmatter.demos ? (
                              <div
                                className={`docs_listing-column w-2/4 md:w-2/6 lg:w-2/4 xl:w-2/6 docs_access_hidden ${
                                  (typeof window === 'undefined' || window.access !== 'admin') &&
                                  adiacent.frontmatter.tags &&
                                  adiacent.frontmatter.tags.includes('hidden')
                                    ? 'hidden'
                                    : ''
                                }`}
                                suppressHydrationWarning={true}
                                key={i}>
                                <button
                                  type="button"
                                  className={`xt-card flex-col p-3.5 sm:p-5 lg:p-6 ${classes.docsFloat()}`}
                                  data-docs-listing-toggle>
                                  <div className="xt-h5 mb-auto text-base leading-tight md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight">
                                    {adiacent.frontmatter.title
                                      .split(/[\s-]+/)
                                      .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                                      .join(' ')}
                                  </div>
                                  <Video assets={assets} title={adiacent.frontmatter.title} />
                                </button>
                                <Demo>
                                  {adiacent.frontmatter.demos.map((demo, i) => {
                                    return (
                                      <div
                                        className="docs_demo_item"
                                        data-iframe-fullscreen={`demos/${demo}`}
                                        key={i}></div>
                                    )
                                  })}
                                </Demo>
                              </div>
                            ) : (
                              <div className="docs_listing-column w-2/4 md:w-2/6 lg:w-2/4 xl:w-2/6" key={i}>
                                <Link
                                  href={markdownSlug(adiacent)}
                                  className={`xt-card p-3.5 sm:p-5 lg:p-6 ${classes.docsFloat()}`}>
                                  <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                                    {adiacent.frontmatter.title}
                                  </div>
                                  <p className="xt-p text-sm leading-snug opacity-70">
                                    {adiacent.frontmatter.description
                                      ? adiacent.frontmatter.description
                                      : `${adiacent.frontmatter.parent}'s ${adiacent.frontmatter.title}`}
                                  </p>
                                </Link>
                              </div>
                            )
                          ) : null,
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          ) : null}
        </>
      ) : (
        <div className="docs_listing">
          <div className="xt-row xt-row-6">
            {post.categories.category.sort(typeSort).map((category, i) => (
              <div className="docs_listing-group" key={i}>
                <h2 className="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md bg-gray-100 text-center">
                  {category.title.split('-').pop()}
                </h2>
                <div className="docs_listing-items">
                  <div className="xt-row xt-row-stretch">
                    {category.posts.map(({ post }, z) =>
                      post.frontmatter.parent === post.frontmatter.title ? (
                        <div
                          className={`docs_listing-column w-2/4 md:w-2/6 lg:w-2/4 xl:w-2/6 docs_access_hidden ${
                            (typeof window === 'undefined' || window.access !== 'admin') &&
                            post.frontmatter.tags &&
                            post.frontmatter.tags.includes('hidden')
                              ? 'hidden'
                              : ''
                          }`}
                          suppressHydrationWarning={true}
                          key={z}>
                          <Link
                            href={markdownSlug(post)}
                            className={`xt-card p-3.5 sm:p-5 lg:p-6 ${classes.docsFloat()}`}>
                            <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                              {post.frontmatter.title}
                            </div>
                            <p className="xt-p text-sm leading-snug opacity-70">{post.frontmatter.description}</p>
                          </Link>
                        </div>
                      ) : null,
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
