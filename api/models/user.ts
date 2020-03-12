import { Document, model, Schema } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isVolunteer: Boolean,
  name: String,
  availability: {
    L: [Number],
    M: [Number],
    X: [Number],
    J: [Number],
    V: [Number],
    S: [Number],
    D: [Number]
  },
  request: {
    L: [Number],
    M: [Number],
    X: [Number],
    J: [Number],
    V: [Number],
    S: [Number],
    D: [Number]
  }
});

export const UserModel = model("User", UserSchema);
