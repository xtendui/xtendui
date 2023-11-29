import fs from 'fs'
import { glob } from 'glob'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import rehypeParse from 'rehype-parse'
import rehypeReact from 'rehype-react'
import addClasses from 'rehype-add-classes'
import * as production from 'react/jsx-runtime'
import rehypeExternalLinks from 'rehype-external-links'
import Demo from 'src/app/includes/demo'
import DemoInline from 'src/app/includes/demo-inline'

export const getPosts = async () => {
  const folder = 'src/app/markdown/'

  const files = await glob(`${folder}/**/*.md`)

  const markdownPosts = files.filter(file => file.endsWith('.md'))

  const posts = markdownPosts.map(filepath => {
    const content = fs.readFileSync(filepath, 'utf8')
    const matterResult = matter(content)
    return {
      filepath: filepath,
      slug: filepath.replace('src/app/markdown/', '').replace('/index.md', '').replace('.md', ''),
      post: {
        frontmatter: {
          type: matterResult.data.type,
          category: matterResult.data.category,
          parent: matterResult.data.parent,
          title: matterResult.data.title,
          description: matterResult.data.description,
          tags: matterResult.data.tags,
          date: matterResult.data.date,
          menu: matterResult.data.menu,
          demos: matterResult.data.demos,
        },
      },
      postsAdiacent: {},
      categories: {},
    }
  })

  return posts
}

export async function getPostData(post) {
  const content = fs.readFileSync(post.filepath, 'utf8')
  const matterResult = matter(content)

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkHtml, {
      // do not use remarkRehype and rehypeStringify or html tags are removed
      sanitize: false,
    })
    .process(matterResult.content)

  const html = unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(addClasses, {
      a: 'xt-link',
      table: 'docs_table my-4 xt-my-auto w-full',
      h1: 'xt-h1',
      h2: 'xt-h2',
      h3: 'xt-h3',
      h4: 'xt-h4',
      h5: 'xt-h5',
      h6: 'xt-h6',
      blockquote:
        'docs_note xt-card text-base leading-snug px-6 py-5 my-5 xt-my-auto font-normal rounded-md bg-gray-100',
    })
    .use(rehypeExternalLinks, {
      target: '_blank',
      rel: ['noopener noreferrer'],
    })
    .use(rehypeReact, {
      ...production,
      components: {
        demo: Demo,
        demoinline: DemoInline,
      },
    })
    .process(processedContent.toString())
    .then(file => {
      return file.result
    })
  return html
}

export async function getAssets() {
  if (
    process.env.NODE_ENV !== 'development' &&
    process.env.CONTENTFUL_SPACE_ID &&
    process.env.CONTENTFUL_ACCESS_TOKEN
  ) {
    const query = `
    query {
      assetCollection {
        items {
          title
          url
        }
      }
    }
    `
    return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }).then(response => response.json())
  } else {
    return {
      data: {
        assetCollection: {
          items: [],
        },
      },
    }
  }
}
