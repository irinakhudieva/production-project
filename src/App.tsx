import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutAsync } from './pages/AboutPage/About.async';
import { MainAsync } from './pages/MainPage/Main.async';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';


const App = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Link to='/'>На главную</Link>
        <Link to='/about'>О сайте</Link>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/about' element={<AboutAsync />} />
                <Route path='/' element={<MainAsync />} /> 
            </Routes>
        </Suspense>
    </div>
  )
}

export default App
