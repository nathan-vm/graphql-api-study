import Comment from './CommentModel'

export async function saveComment(_,{input}){
  const comment = await Comment.create(input)
  return comment
}

export async function geComments(){
  const comments = await Comment.find()
  return comments
}