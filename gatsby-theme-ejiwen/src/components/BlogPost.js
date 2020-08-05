import React from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const BlogPost = ({post}) => {
   // Embedded images images in our blog post
    const options = {
        renderNode : {
            "embedded-asset-block" : (node) => {
                const alt= node.data.target.fields.file['en-US'].title;
                const url= node.data.target.fields.file['en-US'].url;
                return <img alt={alt} src={url} />
            }
        }
    }
    // END ... Embedded images images in our blog post

    return (
        <article>
            <h2> {post.title} </h2>
            <span> {post.dp} </span>
            <div> { documentToReactComponents(post.body.json, options) } </div>
        </article> 
    )
}

export default BlogPost