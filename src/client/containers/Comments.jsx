<<<<<<< HEAD
import React from 'React'; 
import Container from '@material-ui/core/Container'; 
import Typography from '@material-ui/core/Typography'; 
import Button from '@material-ui/core/Button'; 
import Comment from '../components/Comment';

const Comments = ({ comments }) => {
  // map comments data onto each comment
  const commentsList = comments.map(comment => {
    return (
      <Comment 
        id={comment._id} 
        body={comment.body} 
        avatar={comment.avatar} 
        author={comment.user_name} 
        edited={comment.edited} 
        createdAt = {comment.created_at} 
        lastUpdated = {comment.last_updated} />
    )
  })
  return (
    <Container>
      {commentsList}
    </Container>
  )
}
=======
// import React from 'React'; 
// import Container from '@material-ui/core/Container'; 
// import Typography from '@material-ui/core/Typography'; 
// import Button from '@material-ui/core/Button'; 
// import Comment from ''

// const Comments = ({ comments }) => {
//   // map comments data onto each comment
//   const commentsList = comments.map(comment => {
//     return (
//       <Comment 
//         id={comment._id} 
//         body={comment.body} 
//         avatar={comment.avatar} 
//         author={comment.user_name} 
//         edited={comment.edited} 
//         createdAt = {comment.created_at} 
//         lastUpdated = {comment.last_updated} />
//     )
//   })
//   return (
//     <div> will have comments here....</div>
//   )
// }
>>>>>>> f15bd8dc3512177a2a4ff709ab74704ffb4365b7

// export default Comments; 