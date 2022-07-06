import { Link, Outlet, useLoaderData } from "@remix-run/react"
import { db } from '../../services/db.js'

export const loader = async () => {
  //info of DB
  const posts = await db.post.findMany()

  return {
    posts
  }
}

export default function Index () {
  const { posts } = useLoaderData()

  return (
    <div>
      <h2>Lista de posts</h2>
      <aside>
        <Outlet />
      </aside>
      <nav>
        <ul>
          <li>
            <Link to="/about">Ir a About</Link>
          </li>
          <li>
            <Link to="/posts/create">Crear un post</Link>
          </li>
        </ul>
      </nav>

      {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </div>
        ))}
    </div>
  )
}
