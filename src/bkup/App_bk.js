import './App.css';
import { useState } from 'react';
import UserImage1 from './assets/images/user1.png';
import UserImage2 from './assets/images/user2.png';
import UserImage3 from './assets/images/user3.png';
import PostListItem from './components/PostListItem';

function App() {
  const [microBlogs, setMicroBlogs] = useState([
    {
      id: 1,
      author: {
        name: '张小丰',
        avatar: UserImage1,
      },
      content:
        '这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？',
      publishDate: '2022-10-25',
    },
    {
      id: 2,
      author: {
        name: '王小玲',
        avatar: UserImage2,
      },
      content:
        '这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？',
      publishDate: '2022-10-25',
    },
    {
      id: 3,
      author: {
        name: '李小明',
        avatar: UserImage3,
      },
      content:
        '这是一条微博信息，今天的天气真不错啊，出去玩啊？你们觉得怎么样？要不下午4 点出去？',
      publishDate: '2022-10-25',
    },
  ]);
  const [microBlog, setMicroBlog] = useState('');
  const title = 'Welcome!!!';
  // function handleContentInput(e) {
  //   console.log(e.target.value);
  // }

  // function handleWeiboClick(id) {
  //   return (e) => {
  //     console.log(id, e.target);
  //   };
  // }
  function handUserInput(e) {
    setMicroBlog(e.target.value);
  }
  function publishBlog() {
    console.log(microBlog);
    setMicroBlog('');
    const newBlog = {
      id: microBlogs.length + 1,
      author: {
        name: 'Bright',
        avatar: UserImage1,
      },
      content: microBlog,
      publishDate: new Date().toISOString().split('T')[0],
    };
    setMicroBlogs([...microBlogs, newBlog]);
  }

  function handleTest(e, obj) {
    console.log(e.target);
    console.log(obj.name, obj.age);
  }

  return (
    <main className='container'>
      <h1>{title}</h1>
      <div className='publishBlog'>
        <textarea
          placeholder='写点什么吧....'
          value={microBlog}
          cols='30'
          rows='5'
          onChange={handUserInput}
        ></textarea>
        <button onClick={publishBlog}>发布</button>
      </div>
      <div className='postList'>
        {microBlogs.map((blog) => (
          // <PostListItem blog={blog} key={blog.id} msg='hello'>
          <PostListItem {...blog} key={blog.id} msg='hello' onTest={handleTest}>
            <EditAndDelete
              onEdit={(action, e) => console.log(blog.id, action, e.target)}
            />
          </PostListItem>
        ))}
      </div>
    </main>
  );
}

function EditAndDelete({ onEdit }) {
  function handleEdit(e) {
    e.preventDefault();
    console.log('阻止了跳转');
    if (onEdit) {
      onEdit('点击了编辑按钮', e);
    }
  }
  return (
    <p>
      <a href='http://dfdf.com' onClick={handleEdit}>
        编辑
      </a>{' '}
      <a href='http://123.com'>删除</a>
    </p>
  );
}

export default App;
