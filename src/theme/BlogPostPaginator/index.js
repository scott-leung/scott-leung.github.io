import React from 'react';
import BlogPostPaginator from '@theme-original/BlogPostPaginator';
// import GitalkComment from '../GitalkComment';
import GitcusComment from '../GitcusComment';

export default function BlogPostPaginatorWrapper(props) {
  return (
    <>
      <BlogPostPaginator {...props} />
      {/* <GitalkComment /> */}
      <GitcusComment />
    </>
  );
}
