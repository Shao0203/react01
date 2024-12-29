import './style.css';

function PostListItem({ author = {}, content, publishDate, children, onTest }) {
  return (
    <div className='post'>
      <img
        src={author.avatar}
        alt=''
        onClick={(e) => onTest(e, { name: 'bright', age: 12 })}
      />
      <div className='postContainer'>
        <p className='postContent'>{content}</p>
        <div className='postMeta'>
          <p className='postAuthor'>{author.name}</p>
          <p className='postDate'>{publishDate}</p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

// function PostListItem({ blog = { author: {} }, children, onShowName }) {
// return (
//   <div className='post'>
//     <img src={blog.author.avatar} alt='' onClick={onShowName} />
//     <div className='postContainer'>
//       <p className='postContent'>{blog.content}</p>
//       <div className='postMeta'>
//         <p className='postAuthor'>{blog.author.name}</p>
//         <p className='postDate'>{blog.publishDate}</p>
//       </div>
//     </div>
//     <div>{children}</div>
//   </div>
// );
// }
export default PostListItem;
