import bcrypt from "bcrypt"
import { User } from "../models/user.js";

export const registerUser  = async (req, res) => {    
    try {
        const { name, email, password, role} = req?.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = {
            name,
            email,
            password : hashedPassword,
            role
        }
        await User.insertOne(user);
        res.status(201).json({
            message: "User registration successful"
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req?.body;
        const user = await User.findOne({ email: email });

        if(!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Return user data without password
        const responseData = {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        };

        res.status(200).json({
            message: "Login Successful",
            data: responseData
        });

    } catch (error) {
        console.error("Login error:", error); // Log privately
        res.status(500).json({
            message: "Login failed"
        });
    }
}