import React from 'react';
import Giscus from '@giscus/react';

export default function GitcusComment() {
  return (
    <div style={{marginTop: '20px'}}>
      <Giscus
        id="gitcus-comments"
        repo="scott-leung/scott-leung.github.io"
        repoId="MDEwOlJlcG9zaXRvcnk3MzM5NDg0Mg=="
        category="Announcements"
        categoryId="DIC_kwDOBF_qms4CUzPG"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        strict="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
}