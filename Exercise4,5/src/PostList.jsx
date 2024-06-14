import { useEffect, useReducer } from "react" 
import axios from 'axios'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function PostListReducer() {

const [postsResult, dispatch] = useReducer(reducer, { 
loading: true, // true when loading and no data in posts
posts: [], // empty until data is fetched
error: '' // empty unless there was an error
})

useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts?_limit=20') 
    .then(response => {
      dispatch({ type: "FETCH_SUCCESS", payload: response.data })
    })
    .catch(error => {
      dispatch({ type: "FETCH_ERROR", payload: error.message })
    })
}, []);

return (

  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <div style={{display: 'flex', flexWrap: 'wrap'}}>

      {postsResult.loading ? <div>Loading posts...</div> :
      postsResult.posts.map(post => (
        <Grid item xs={2} sm={4} md={3} key={'g-' + post.id}>
          <Card sx={{ maxWidth: 275, maxHeight: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom key={post.id}> 'Post #' {post.id}</Typography>
              <Typography variant="h5" component="div" key={'t-' + post.id}>{post.title}</Typography>
              <Typography variant="div" key={'b-' + post.id}> {post.body}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </div>
  </Grid>
    

  // <div className="PostList componentBox">
  // {postsResult.loading ? <div>Loading posts...</div> :
  // postsResult.posts.map(post => ( // list of posts is just one of the things stored in the postsResult state object
  // <div className="post" key={post.id}><h3>Post #{post.id}: {post.title}</h3><p>{post.body}</p></div>
  // ))}
  // <div className="error">{postsResult.error}</div>
  // </div>
  )
  }

  function reducer (postsResult, action) {
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return { loading: false, posts: action.payload, error: '' }
      case 'FETCH_ERROR':
        return { loading: false, posts: [], error: action.payload }
      default:
        return { ...postsResult, loading: false }
  }
  }