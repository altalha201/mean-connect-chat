import Jwt from "jsonwebtoken";

import User from "../models/user.model.js"

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return req.status(401).json({
                status: "failed",
                error: "Unauthorized - No Token Provided"
            });
        }

        const decoded = Jwt.verify(token, process.env.JWT_KEY);
        if (!decoded) {
            return req.status(401).json({
                status: "failed",
                error: "Unauthorized - Invalid token"
            });
        }

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return req.status(404).json({
                status: "failed",
                error: "User not found"
            });
        }

        req.user = user;
        next();

    } catch (error) {
        console.error(`Error in protectRoute middleware: ${error.message}`);
        res.status(500).json({
            status: "failed",
            error: "Internal Serever Error"
        });
    }
};

export default protectRoute;