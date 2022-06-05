// PostList.js
import Link from 'next/link'

export default function PostList({ posts }) {
  if (posts === 'undefined') return null

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <div key={post.slug} className="container mx-auto">
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <div className="text-2xl mt-20 hover:underline hover:text-blue-800">
                    {post.frontmatter.title}
                  </div>
                </Link>
                <div className="flex items-center">
                  {post.frontmatter.author}
                </div>
                <div className="mt-8 mb-10 text-justify">
                  {post.frontmatter.excerpt}
                </div>
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <a className="underline hover:text-blue-800">続きを読む →</a>
                </Link>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}
