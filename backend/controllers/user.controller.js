import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res) => {
    try {

        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json({
            status: "success",
            payload: filteredUsers
        });

    } catch (error) {
        console.error(`Error in getUsersForSideBar controller: ${error.message}`);
        res.status(500).json({
            status: "failed",
            error: "Internal Serever Error"
        });
    }
}