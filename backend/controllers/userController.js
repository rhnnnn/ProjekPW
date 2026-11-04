import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// login user
const loginUser = async (req, res) => {}

// register user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
  // cek apakah user sudah ada
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" })
        }
        // validasi format email dan password kuat
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
  }

    } catch (error) {
    }
}

export { loginUser, registerUser }