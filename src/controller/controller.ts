import User from '../models/userSchema';
import exporess, { Request, Response } from 'express';

const loadPage = async(req:Request, res:Response) => {
    try {
        const users = await User.find();
        res.render('index', {users});
    }catch (error){
        console.log(error);
    }
}

const addUser = async(req: Request, res: Response) => {
    try{
        const {name, email, age} = req.body;
        const existingUser = await User.findOne({email});

        if(existingUser) {
            res.status(404).json({message: 'user already exist'});
        }else{
            const newUser = new User({
                name,
                email,
                age
            });

            await newUser.save();
            res.status(200).json({message: 'user created'})
        }
    }catch(error){
        console.log(error);
    }
}

const editUser = async (req:Request, res:Response) => {
    try{
        await User.findByIdAndUpdate(req.params.userId, req.body);
        res.sendStatus(200);
    }catch(error){
        console.log(error);
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        await User.findByIdAndDelete(req.params.userId);
        res.send(200);
    }catch(error){
        console.log(error);
    }
}

export default {
    loadPage,
    addUser,
    editUser,
    deleteUser
}