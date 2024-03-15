import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req,res)=>{
    try {
        const { message } = req.body;
        const { id: receiverID} = req.params;
        const senderID = req.user._id;

        let conversation = await Conversation.findOne({
            participants:{$all:[senderID,receiverID]},
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderID,receiverID],
            });
        }

        const newMessage = new Message({
            senderID,
            receiverID,
            message,
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // Socket IO functionality

        // await conversation.save();
        // await newMessage.save();

        await Promise.all([conversation.save(),newMessage.save()]);
        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage controller",error.message);
        res.status(500).json({error:"Interval server error in msgcontroller"});
    }
};

export const getMessages = async (req,res)=>{
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants:{$all:[senderID,userToChatId]},
        }).populate("messages");

        res.status(200).json(conversation.messages);
    } catch (error) {
        console.log("Error in sendMessage controller",error.message);
        res.status(500).json({error:"Interval server error in msgcontroller"});
    }
};