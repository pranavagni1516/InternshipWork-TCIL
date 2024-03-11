//import th model
const Todo = require("../models/Todo");

//define route handler

exports.createTodo = async(req,res) => {
    try {
            //extract title and desxcription from reauest body
            const {title,description} = req.body;
            //create a new Todo Obj and insert in DB
            
            const res = await Todo.create({title,description});

            //send a json response with a success flag

            res.status(200).json(
                {
                    success:true,
                    data:res,
                    message:'Entry Created Successfully'
                }
            );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}