import { Suspense, type FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { MainPageAsync } from './pages/MainPage/MainPageAsync';
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync';
import { useTheme } from './theme/ThemeContext';
import { classNames } from './helpers/classNames';

const App: FC = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <Link to='/'>Главная </Link>
      <Link to='/about'>О нас </Link>

      <button onClick={setTheme}>Поменять тему</button>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPageAsync />} />
          <Route path='/about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
