import './App.css';
import { Fragment, useState } from 'react';

function App() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [repeatPassword, setRepeatPassword] = useState('');
  // const [gender, setGender] = useState('');
  // const [occupation, setOccupation] = useState('');
  // const [hobbies, setHobbies] = useState([]);
  // function handleUsernameChange(e) {
  //   setUsername(e.target.value);
  // }
  // function handlePasswordChange(e) {
  //   setPassword(e.target.value);
  // }
  // function handleRepeatPasswordChange(e) {
  //   setRepeatPassword(e.target.value);
  // }
  // function handleGenderChange(e) {
  //   setGender(e.target.value);
  // }
  // function handleOccupationChange(e) {
  //   setOccupation(e.target.value);
  // }
  // function handleHobbiesChange(e) {
  //   const { checked, value } = e.target;
  //   if (checked) {
  //     setHobbies([...hobbies, value]);
  //   } else {
  //     setHobbies(hobbies.filter((hobby) => hobby !== value));
  //   }
  // }
  const initialUser = {
    username: '',
    password: '',
    repeatPassword: '',
    gender: '',
    occupation: '',
    hobbies: [],
  };
  const [user, setUser] = useState(initialUser);
  const [formErrors, setFormErrors] = useState({});

  const gender = [
    { value: 'male', label: '男' },
    { value: 'female', label: '女' },
  ];
  const hobbies = [
    { value: 'programming', label: '编程' },
    { value: 'drawing', label: '绘画' },
    { value: 'music', label: '音乐' },
  ];
  const occupation = [
    { value: '', label: '请选择' },
    { value: 'frontend', label: '前端' },
    { value: 'backend', label: '后端' },
    { value: 'fullstack', label: '全栈' },
  ];
  // 表单验证规则
  const rules = {
    username: (value) => {
      if (value.length < 3 || value.length > 12) {
        return '账户名必须大于3 并小于12位';
      }
    },
    password: (value) => {
      if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
        return '密码必须大于8位, 且包含数字和字母';
      }
    },
    repeatPassword: (value) => {
      if (value !== user.password) {
        return '两次输入的密码不一样';
      }
    },
    gender: (value) => {
      if (!value) {
        return '性别不能为空';
      }
    },
    occupation: (value) => {
      if (!value) {
        return '职业不能为空';
      }
    },
  };

  function handleInputChange(e) {
    let { value, name, type } = e.target;
    if (type === 'checkbox') {
      const checked = e.target.checked;
      if (checked) {
        value = [...user.hobbies, value];
      } else {
        value = user.hobbies.filter((hobby) => hobby !== value);
      }
    }
    setUser({ ...user, [name]: value });

    const error = rules[name] && rules[name](value);
    setFormErrors({ ...formErrors, [name]: error });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    // 每个field单独提示错误
    for (let rule in rules) {
      const error = rules[rule](user[rule]);
      if (error) {
        setFormErrors({ ...formErrors, [rule]: error });
        return;
      }
    }
    console.log(user); // 发送表单信息
  }

  function handleFormReset() {
    setUser(initialUser);
  }

  return (
    <main className='container'>
      <h1>用户注册</h1>
      <form
        onSubmit={handleFormSubmit}
        onReset={handleFormReset}
        action='http://www.baidu.com'
      >
        <label htmlFor='username'>用户名</label>
        <input
          type='text'
          id='username'
          name='username'
          value={user.username}
          onChange={handleInputChange}
        />
        {formErrors.username && (
          <span className='formError'>{formErrors.username}</span>
        )}
        <label htmlFor='password'>密码</label>
        <input
          type='password'
          id='password'
          name='password'
          value={user.password}
          onChange={handleInputChange}
        />
        {formErrors.password && (
          <span className='formError'>{formErrors.password}</span>
        )}
        <label htmlFor='repeatPassword'>重复密码</label>
        <input
          type='password'
          id='repeatPassword'
          name='repeatPassword'
          value={user.repeatPassword}
          onChange={handleInputChange}
        />
        {formErrors.repeatPassword && (
          <span className='formError'>{formErrors.repeatPassword}</span>
        )}
        <label htmlFor='gender'>性别</label>
        <fieldset id='gender'>
          {gender.map((g) => (
            <Fragment key={g.value}>
              <input
                type='radio'
                name='gender'
                id={g.value}
                value={g.value}
                checked={user.gender === g.value}
                onChange={handleInputChange}
              />
              <label htmlFor={g.value}>{g.label}</label>
            </Fragment>
          ))}
        </fieldset>
        {formErrors.gender && (
          <span className='formError'>{formErrors.gender}</span>
        )}
        <label htmlFor='occupation'>职业</label>
        <select
          id='occupation'
          name='occupation'
          value={user.occupation}
          onChange={handleInputChange}
        >
          {occupation.map((occ) => (
            <option key={occ.value} value={occ.value}>
              {occ.label}
            </option>
          ))}
        </select>
        {formErrors.occupation && (
          <span className='formError'>{formErrors.occupation}</span>
        )}
        <label htmlFor='hobbies'>兴趣</label>
        <fieldset id='hobbies'>
          {hobbies.map((hobby) => (
            <Fragment key={hobby.value}>
              <input
                type='checkbox'
                name='hobbies'
                value={hobby.value}
                id={hobby.value}
                onChange={handleInputChange}
                checked={user.hobbies.includes(hobby.value)}
              />
              <label htmlFor={hobby.value}>{hobby.label}</label>
            </Fragment>
          ))}
        </fieldset>
        <button type='submit'>Submit</button>
        <button type='reset'>Reset</button>
      </form>
      <ul>
        <li>用户名：{user.username}</li>
        <li>密码：{user.password}</li>
        <li>重复密码：{user.repeatPassword}</li>
        <li>性别：{user.gender}</li>
        <li>职业：{user.occupation}</li>
        <li>兴趣：{user.hobbies.join(', ')}</li>
      </ul>
    </main>
  );
}

export default App;
