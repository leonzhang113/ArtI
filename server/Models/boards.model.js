import mongoose, { Schema, mongo } from 'mongoose'

const imageSchema = new Schema({
  id: String,
  data: Buffer,
  contentType: String,
  prompt: String
})

const boardsSchema = new Schema({
  //user's username to identify specific boards
  username: {
    type: String,
    required: true,
  },

  //The name of a board, default will be Board 1, Board 2, etc... but user can customly change this
  boardName: {
    type: String,
    required: true,
  },

  //An array that holds all the image urls of photos in a board
  images: {
    type: [imageSchema],
    required: true,
  },

  //the thumbnail of the board, users can customly set it as any image that is inside the board
  //if have time, let user make the thumbnail any photo (even from file system)
  thumbnail: {
    type: imageSchema,
    required: false,
  },

  // boolean variable that is true when user has set a specific image to be the thumbnail, false when thumbnail is default
  customThumbnail: {
    type: Boolean,
    required: false,
  },
})

const Board = mongoose.model('boards', boardsSchema)
const Image = mongoose.model('image', imageSchema)
export { Board, Image }
