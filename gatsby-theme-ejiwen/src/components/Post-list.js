import React from "react";
import { Link } from 'gatsby';

const PostList = ({posts}) => {
    return (
        <div>
         {
             posts.map(post => (
                 <div>
                  <Link to={post.slug} > <h3> {post.title} </h3> </Link>
                  <span>{post.publishedDate}</span> 
                  </div> 
             ))
         }
        </div>
    )
} 
export default PostList;