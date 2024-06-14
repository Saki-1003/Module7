// import {Outlet, useParams, Link} from "react-router-dom";
// import { useData } from "../hooks/useData"
// import PostsPage, { Post, PostList } from "../pages/PostsPage"


// export function PostsPage() {
//   return (
//     <div className="Posts">
//       <h1>Posts</h1>
//       <Outlet />
//     </div>
//     )
//   }

// export function PostList() {
//   const postsData =
//     useData('https://jsonplaceholder.typicode.com/posts?_limit=5');
    
//     const postList = postsData?.map(post => (
//       <li key={post.id}>
//         <Link to={"/posts/" + post.id}>
//           Post #{post.id}: {post.title}
//         </Link>
//       </li>
//   ));
//   return (
//   <ul>{postList}</ul>
//   )
// }

// export function Post() {
//   const { id } = useParams(); // custom hook to access dynamic params
//   const post =
//   useData('https://jsonplaceholder.typicode.com/posts/'+id);

//   return (
//     <div className="Post">
//       {post ?
//       <><h3>Post #{post.id}: {post.title}</h3>
//       <p>{post.body}</p></>
//       : "Loading ..." }
//     </div>
//   )
//   }