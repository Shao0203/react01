import React from 'react';

function BlogPostDetails({ title, content, likes, author, tags, onLike }) {
  function handleLike() {
    if (onLike) {
      onLike(likes + 1);
    }
  }
  return (
    <main className='container'>
      <h2>
        Title: {title}...{typeof title}
      </h2>
      <p>
        Content: {content}...{typeof content}
      </p>
      <p>
        Likes: {likes}...{typeof likes} <button onClick={handleLike}>+1</button>
      </p>
      <ul>
        <li>
          Author name: {author.name} / Author des: {author.description}
        </li>
        <li>{typeof author}</li>
      </ul>
      <p>11111111{Array.isArray(tags)}</p>
    </main>
  );
}

export default BlogPostDetails;
