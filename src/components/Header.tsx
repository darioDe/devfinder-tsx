import {useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={theme == 'dark-theme' ? 'flex text-slate-50 py-20': 'text-slate-900 py-20'}>
      <h1 className=''>devfinder</h1>
      <div>
        <p className=''>{theme === 'dark-theme' ? 'LIGHT' : 'DARK'}</p>
        <button onClick={toggleTheme}>on</button>
      </div>    
    </header>
  )
}

export default Header