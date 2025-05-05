import User from "../models/authModel.js";
import { decodedToken } from "../utility/token.js";

export const authverification = async (req, res, next) => {
  try {

    const token = req?.cookies?.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated"
      });
    }

    const data = await decodedToken(token);
    if (!data || !data.id) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token"
      });
    }
    req.id = data.id
    next();

  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};
