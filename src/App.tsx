import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import './index.css'

function App() {
  return (
    <ThemeProvider >
    <div className='h-screen w-screen bg-slate-900'>
      <div className=''>
       <Header />
        <nav>
          <div>
            <form action="">
              <input type='search' />
              <button type='submit'></button>
            </form>
          </div>
        </nav>
        <main>
          <img src="" alt="" />
          <h2>Name</h2>
          <h3>User Name</h3>
          <legend>Bio</legend>
          <section>
            <ul>
              <li>Repos</li>
              <p>0</p>
              <li>Followers</li>
              <p>0</p>
              <li>Following</li>
              <p>0</p>
            </ul>
          </section>
          <p></p>
          <p></p>
        </main>
        <footer>
        </footer>
      </div>  
    </div>
    </ ThemeProvider >
  )
}

export default App

