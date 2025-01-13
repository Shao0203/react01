import './App.css';
import { useCallback, useEffect, useState } from 'react';

// 把getWeather变成工具纯函数, 把useEffect的依赖变成了state(city的值)而不是函数
function getWeather(city) {
  if (city === '北京') return 20;
  if (city === '上海') return 25;
  if (city === '重庆') return 30;
}

function App() {
  const [dateTime, setDateTime] = useState(new Date());
  // const [seconds, setSeconds] = useState(0);
  // const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setDateTime(new Date());
      // setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const [city, setCity] = useState('北京');
  const [weather, setWeather] = useState(20);
  // 用useCallback避免上面的每秒钟刷新对getWeather函数的影响
  // const getWeather = useCallback(() => {
  //   if (city === '北京') return 20;
  //   if (city === '上海') return 25;
  //   if (city === '重庆') return 30;
  // }, [city]);
  useEffect(() => {
    console.log('running...');
    setWeather(getWeather(city));
  }, [city]);
  return (
    <main className='container'>
      <h1>{dateTime.toLocaleString()}</h1>
      <div>
        <p>
          {city}天气：{weather} 度
        </p>
        <label htmlFor='weather'>选择天气：</label>
        <select id='weather' onChange={(e) => setCity(e.target.value)}>
          <option value='北京'>北京</option>
          <option value='上海'>上海</option>
          <option value='重庆'>重庆</option>
        </select>
      </div>
    </main>
  );
  // useEffect(() => {
  //   updateTime();
  // }, [refresh]);

  // async function updateTime() {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  //   setDateTime(new Date());
  // }
  // function handleClick() {
  //   setRefresh(refresh + 1);
  // }

  // return (
  //   <main className='container'>
  //     <h1>{dateTime.toLocaleString('zh-CN')}</h1>
  //     {/* <h1>{seconds}</h1> */}
  //     <button onClick={handleClick}>Update</button>
  //     {refresh}
  //   </main>
  // );
}

export default App;
