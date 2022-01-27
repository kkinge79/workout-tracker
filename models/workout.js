import mongoose from 'mongoose'

const Schema = mongoose.Schema

const workoutSchema = new Schema ({
  name: String,
  date: Date,
  time: Number,
  bodyweight: Number,
  focus: String,
  regime: [String],
  owner: {type: Schema.Types.ObjectId, 'ref': "Profile"}
})

const Workout = mongoose.model('Workout', workoutSchema)

export {
  Workout
}