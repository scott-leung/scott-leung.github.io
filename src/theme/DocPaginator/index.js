import React from 'react';
import DocPaginator from '@theme-original/DocPaginator';
import GitcusComment from '../GitcusComment';

export default function DocPaginatorWrapper(props) {
  return (
    <>
      <DocPaginator {...props} />
      <GitcusComment />
    </>
  );
}
