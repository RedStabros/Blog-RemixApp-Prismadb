import { redirect } from '@remix-run/node'
import { db } from '../../services/db.js'

export const action = async ({ request }) => {
    const form = await request.formData()
    const title = form.get('title')
    const body = form.get('body')

    const data = { title, body }
    const post = await db.post.create({ data: { title, body } })

    console.log({ title, body })
    //Save to DB

    return redirect(`/posts/${post.id}`)
}

export function ErrorBoundary () {
    return (
        <div>
            <strong>😮 Algo salió mal</strong>
        </div>
    )
}

export default function CreatePost() {
  return (
    <>
      <h2>Create New Post</h2>
      <form method="POST">
        <div>
          <label htmlFor="title">Title</label>
          <input placeholder='Title of Post' type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <textarea placeholder='Content of Post' type="text" name="body" id="body" />
        </div>
        <button type="submit">Add new post</button>
      </form>
    </>
  );
}
