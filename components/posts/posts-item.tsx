import React, { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import postItemStyles from './postsItemStyles';
import { ISinglePost } from '@/types/posts';
import Image from 'next/image';

const PostsItem: FC<{ singlePost: ISinglePost }> = ({ singlePost }) => {
  const imagePath = `/images/posts/${singlePost.slug}/${singlePost.image}}`;
  return (
    <Grid container xs={12} sx={postItemStyles?.container}>
      <Grid item xs={4} sx={postItemStyles?.image}>
        <Image src={imagePath} width={300} height={300} alt='an image' />
      </Grid>
      <Grid item xs={8} sx={postItemStyles?.info}>
        <Typography sx={postItemStyles?.title}>{singlePost.name}</Typography>
        <br />
      </Grid>
    </Grid>
  );
};

export default PostsItem;
