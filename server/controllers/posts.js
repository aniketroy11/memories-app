import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

export const getPosts = async(req,resp)=>{
    try{
        const postMessages = await PostMessage.find();
        resp.status(200).json(postMessages)
    }catch(error){
        resp.status(404).json({message:error.message});
    }
}

export const getPostsBySearch =async(req,res)=>{

    const {searchQuery,tags} = req.query

    try {
        const title = new RegExp(searchQuery,'i');
        const posts = await PostMessage.find({$or:[{title},{tags :{$in:tags.split(',')}}]});

        res.json({data:posts});
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const createPost =async (req,resp)=>{
    const post = req.body;
    const newPost = new PostMessage( {...post , creator:req.userId , createAt:new Date().toISOString()});
    try{
        await newPost.save();
        resp.status(201).json(newPost);
    }catch(error){
        resp.status(409).json({message:error.message});
    }
}

export const updatePost = async(req,resp)=>{
    const {id : _id} = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return resp.status(404).send('No post with that id');
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(_id,{...post , _id},{new:true});
    resp.json(updatedPost);
}

export const deletePost = async(req,resp)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return resp.status(404).send('No post with that id');
    }
    await PostMessage.findByIdAndRemove(id);
    console.log('delete');
    resp.json({message:'Post deletd successfully'});


}

export const likePost = async(req,resp)=>{
    const {id}= req.params;

    if(!req.userId) return resp.json({message:'Unauthenticated'});

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return resp.status(404).send('No post with that id');
    }

    const post = await PostMessage.findById(id);

    const index = post.likes.findIndex((id) => id === String(req.userId));

    if(index === -1){
        //like the post
        post.likes.push(req.userId);
    }else{
        // dislike a post
        post.likes = post.likes.filter((id)=> id !== String(req.userId));
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id,post,{new :true})
    resp.json(updatedPost);
}