import bcryptjs from 'bcryptjs'

import User from './../models/user.model.js'
import genarateTokenAndSetCookie from '../utils/genarateToken.js';

export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({
                status: "failed",
                error: "Passwords dosen't match"
            });
        }
        const user = await User.findOne({ userName });
        if (user) {
            return res.status(400).json({
                status: "failed",
                error: "Username already taken"
            });
        }
        // Password hassing
        const salt = await bcryptjs.genSalt(10);
        const hashPass = await bcryptjs.hash(password, salt);

        // Profile pic selection`
        const boyProPic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProPic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const newUser = new User({
            fullName,
            userName,
            password: hashPass,
            gender,
            profilePic: gender === 'male' ? boyProPic : girlProPic
        });

        if (newUser) {
            // Genarate JWT token here
            genarateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                status: "success",
                payload: {
                    _id: newUser._id,
                    userName: newUser.userName,
                    fullName: newUser.fullName,
                    profilePic: newUser.profilePic
                }
            });
        } else {
            return res.status(400).json({
                status: "failed",
                error: "Invalid User data"
            });
        }

    } catch (error) {
        console.error(`Error in signup controller: ${error.message}`);
        res.status(500).json({
            status: "failed",
            error: "Internal Serever Error"
        });
    }
};

export const login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });

        const isPassCorrect = await bcryptjs.compare(password, user?.password || "");

        if (!user || !isPassCorrect) {
            return res.status(400).json({
                status: "failed",
                error: "Invalid username or password"
            });
        }

        genarateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            status: "success",
            payload: {
                id: user._id,
                userName: user.userName,
                fullName: user.fullName,
                profilePic: user.profilePic,
            }
        })

    } catch (error) {
        console.error(`Error in login controller: ${error.message}`);
        res.status(500).json({
            status: "failed",
            error: "Internal Serever Error"
        });
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("token", "", {maxAge: 0});
        res.status(200).json({
            status: "success",
            message: "Logout Successful!"
        })
    } catch (error) {
        console.error(`Error in logout controller: ${error.message}`);
        res.status(500).json({
            status: "failed",
            error: "Internal Serever Error"
        });
    }
};