import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate(value: string) {
        if (!validator.isEmail(value)) {
          throw new Error("email is Invalid");
        }
      },
      password: {
        type: String,
        required: true,
        minLength: 7,
        trim: true,
        validate(value) {
          if (value.toLowerCase().includes("password")) {
            throw new Error("password error");
          }
        },
      },
      tokens: [
        {
          token: {
            type: String,
            required: true,
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("user_model", userSchema);
