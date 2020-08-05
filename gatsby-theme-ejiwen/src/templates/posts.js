import React from "react";
import PostList from "../components/post-list";
import { graphql, useStaticQuery} from 'gatsby';
import Layout from "../components/Layout";

const Posts = () => {
    const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
        nodes {
          title
          slug
          publishedDate
        }
      }
    }
  `)

  const posts = data.allContentfulBlogPost.nodes;
  return <Layout><PostList posts={posts} /></Layout> 
}



export default Posts