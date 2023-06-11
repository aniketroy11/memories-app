import axios from 'axios';  // use it to make api calss

const API = axios.create({baseURL:'http://localhost:5000'});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

// this will fetch all the post which present in the database

// all action toward s our backend are going to be done using redux
// we need to dispatch those actions

export  const fetchPosts = ()=> axios.get('/posts'); 
export  const fetchPostsBySearch = (searchQuery)=> axios.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags= ${searchQuery.tags}`); 
export const createPost = (newPost)=>API.post('/posts',newPost);
export const updatePost = (id,updatePost)=> API.patch(`/posts/${id}`,updatePost)
export const deletePost = (id)=>API.delete(`/posts/${id}`);
export const likePost = (id)=>API.patch(`/posts/${id}/likePost`);

export const signin = (formData) => API.post('/user/signin',formData);
export const signup = (formData) => API.post('/user/signup',formData);