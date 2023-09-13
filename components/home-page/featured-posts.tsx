import { useEffect, useState } from 'react';
import PostsGrid from '../posts/posts-grid';
import { posts } from '@/data/posts';
import { ISinglePost } from '@/types/posts';

const FeaturedPosts = () => {
  if (posts?.length > 0) {
    return <PostsGrid postsData={posts} />;
  } else {
    return <>Loading...</>;
  }
};

export default FeaturedPosts;
