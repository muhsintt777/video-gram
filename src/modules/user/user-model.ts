import { Schema, model } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import { Crypto } from "utils/crypto";
import { Token } from "utils/token";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    watchHistory: [{ type: Schema.Types.ObjectId, ref: "Video" }],
    password: {
      type: String,
      required: [true, "password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true },
);

userSchema.plugin(mongooseAggregatePaginate);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await Crypto.hashString(this.password);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password: string) {
  return Crypto.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function () {
  return Token.createAccessToken({ id: this._id, email: this.email });
};

userSchema.methods.generateRefreshToken = async function () {
  return Token.createRefreshToken({ id: this._id });
};

export const User = model("User", userSchema);
