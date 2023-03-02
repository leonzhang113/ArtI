import mongoose, { Schema } from 'mongoose'

const boardsSchema = new Schema({
  username: {
    type: String,
    required: true,
  },

  boardName: {
    type: String,
    required: true,
  },

  images: {
    type: [],
    requierd: true,
  },

  thumbnail: {
    type: String,
    required: false,
  },
})
