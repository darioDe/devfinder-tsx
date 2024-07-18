
import { useState } from 'react';
import { useUser } from '../context/UserContext'
import search from '../assets/search.svg';

const Nav: React.FC = () => {
  const { setUserData, setLoading, setError } = useUser();
  const [userName , setUserName  ] = useState('')

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${userName}`)
      if(!response.ok) {
        throw new Error ('Network response was not ok');
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An uknown error ocurred')
      }
    } finally {
      setLoading(false);
    }
  };


  return (
    <nav>
        <div>
            <form onSubmit={handleSearch}>
                <img src={search} alt="" />   
                <input 
                  type="search" 
                  value={userName}
                  name="" 
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder='Search Github username...' />
                <button type="submit">Search</button>
            </form>
        </div>
    </nav>
  )
}

export default Nav