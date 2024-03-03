import jwt from 'jsonwebtoken';

const genarateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_KEY, {
        expiresIn: "15d"
    });

    res.cookie("token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // Milisec
        httpOnly: true, // prevent XSS attacks cross-site scripting attacks
        sameSite: "strict", // CSRF attacks cross-site request forgery attacks
        sequre: process.env.NODE_ENV !== "development",
    });
};

export default genarateTokenAndSetCookie;