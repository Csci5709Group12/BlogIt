import axios from "axios";
import { SERVER_HOST } from "./Config";

export const getAllBlogs = async(getAllBlogsSuccessCb, getAllBlogsErrorCb) => {
    axios.get(`${SERVER_HOST}/blogs/get/all`)
        .then((response) => {
            getAllBlogsSuccessCb(response);
        })
        .catch((error) => {
            getAllBlogsErrorCb(error);
        })
}

export const getBlogById = async(id, getBlogSuccessCb, getBlogErrorCb) => {
    axios.get(`${SERVER_HOST}/blogs/get/${id}`)
        .then((response) => {
            getBlogSuccessCb(response);
        })
        .catch((error) => {
            getBlogErrorCb(error);
        })
}

export const createBlogPost = (blog_id, title, author, tags, image_url, content, apiSuccessCb, apiFailureCb) => {
    const video = {
        blog_post_id: blog_id,
        title,
        author,
        tags,
        image_url,
        content
    };
  
    axios.post(`${SERVER_HOST}/blogs/create`, video)
        .then((response) => {
            apiSuccessCb(response);
        })
        .catch((error) => {
            apiFailureCb(error);
        });
}

export const getMaxId = (apiSuccessCb, apiFailureCb) => {
    axios.get(`${SERVER_HOST}/blogs/get/all`)
        .then((response) => {
            if (response.data && response.data.blogs) {
                const maxId = response.data.blogs.reduce((max, blog) => {
                    return blog._id > max ? blog._id : max;
                }, response.data.blogs[0]._id);
                apiSuccessCb(maxId);
            } else {
                apiFailureCb("No blogs found");
            }
        })
        .catch((error) => {
            apiFailureCb(error.message);
        });
};