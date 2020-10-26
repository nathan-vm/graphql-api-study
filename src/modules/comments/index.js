import { GraphQLString, GraphQLList, GraphQLInputObjectType } from 'graphql'

import { geComments, saveComment } from './CommentLoader'
import CommentType from './CommentType'

export const querys = {
  getComments: {
    type:GraphQLList(CommentType),
    resolve: geComments
  }
}

export const mutations = {
  saveComment: {
    type: CommentType,
    resolve: saveComment,
    args: {
      input: {
        type: new GraphQLInputObjectType({
          name: "CommentInput",
          fields: {
            name: { type: GraphQLString },
            content: { type: GraphQLString },
          }
        })
      }
    }
  }
}
