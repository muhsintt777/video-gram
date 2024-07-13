import jwt from "jsonwebtoken";
const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY as string;
const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY as string;
const ACCESSTOKENKEY = process.env.ACCESS_TOKEN_KEY as string;
const REFRESHTOKENKEY = process.env.REFRESH_TOKEN_KEY as string;

interface AccessTokenPayloadType {
  id: number;
  email: string;
}
interface RefreshTokenTokenPayloadType {
  id: number;
}

export class Token {
  static createAccessToken(payload: AccessTokenPayloadType) {
    return jwt.sign(payload, ACCESSTOKENKEY, {
      expiresIn: ACCESS_TOKEN_EXPIRY,
    });
  }

  static createRefreshToken(payload: RefreshTokenTokenPayloadType) {
    return jwt.sign(payload, REFRESHTOKENKEY, {
      expiresIn: REFRESH_TOKEN_EXPIRY,
    });
  }
}
