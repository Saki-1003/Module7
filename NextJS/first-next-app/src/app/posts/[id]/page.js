import Link from "next/link";

async function getPostData(id) {

  const res = await fetch("https://jsonplaceholder.typicode.com/" + "posts/" + id);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch post #" + id);
  }
  return res.json();
}

// Uses params prop to get value of [id] from path segment. so for /posts/3/, params will be { id:3 }
export default async function Post({ params }) {

  const post = await getPostData(params.id);
  
  return (
    <>
      <div className="post">
        {post ? (
          <>
            <h3>
              Post #{post.id}: {post.title}
            </h3>
            <p>{post.body}</p>
          </>
        ) : (
          "Loading ..."
        )}
      </div>
      <Link href="/posts">All Posts</Link>
    </>
  );
}
