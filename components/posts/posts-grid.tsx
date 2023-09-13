import React, { FC } from 'react';
import { Grid } from '@mui/material';
import PostsItem from './posts-item';
import { ISinglePost } from '@/types/posts';

const PostsGrid: FC<{ postsData: ISinglePost[] }> = ({ postsData }) => {
  const dummyPost: ISinglePost = {
    id: 'p1',
    name: 'A new post',
    image: 'https://images.unsplash.com/photo-1589473260524-c0d6',
    featured: false,
  };

  return (
    <Grid container xs={12}>
      {postsData?.map((post: ISinglePost) => {
        return (
          <Grid key={post.id as string} item xs={12}>
            <PostsItem singlePost={dummyPost} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PostsGrid;
