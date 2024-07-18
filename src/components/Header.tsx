import {useTheme } from '../context/ThemeContext';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg'

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={theme == 'dark-theme' ? 'flex text-slate-50 py-20': 'flex text-slate-900 py-20'}>
      <h1 className=''>devfinder</h1>
      <div>
        <p className=''>{theme === 'dark-theme' ? 'LIGHT' : 'DARK'}</p>
        <button onClick={toggleTheme}>
          {theme == 'dark-theme' ? 
            <img src={sun} alt='sun icon' /> : 
            <img src={moon} alt='moon icon'/>
          }
        </button>
      </div>    
    </header>
  )
}

export default Header