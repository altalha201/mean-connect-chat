import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: reciverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participents: { $all: [senderId, reciverId] }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participents: [senderId, reciverId]
            });
        }

        const newMessage = new Message({
            senderId,
            reciverId,
            message
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // SOCKET.IO functionality 

        // await conversation.save();
        // await newMessage.save();

        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json({
            status: "success",
            payload: newMessage
        });

    } catch (error) {
        console.error(`Error in sendMessage controller: ${error.message}`);
        res.status(500).json({
            status: "failed",
            error: "Internal Serever Error"
        });
    }
};

export const getMessages = async (req, res) => {
    try {
        const { id: userToMessageID } = req.params;
        const userId = req.user._id;

        const conversation = await Conversation.findOne({
            participents: { $all: [userToMessageID, userId] }
        }).populate("messages");

        if(!conversation) {
            return res.status(200).json({
                status: "success",
                payload: []
            })
        }

        res.status(200).json({
            status: "success",
            payload: conversation.messages
        });

    } catch (error) {
        console.error(`Error in getMessages controller: ${error.message}`);
        res.status(500).json({
            status: "failed",
            error: "Internal Serever Error"
        });
    }
};