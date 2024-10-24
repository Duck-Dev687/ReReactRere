import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import Feed from './Feed';

function Home() {
const { searchResults, fetchError, isLoading } = useContext(DataContext)
  return (
    <main className='Home'>
      {isLoading && <p className='statusMsg'>Loading Posts...</p>}

      {!isLoading && fetchError && <p className='statusMsg' style={{ color: 'red' }}>{fetchError}</p>}

      {!isLoading && !fetchError && searchResults.length ? (
        <Feed posts={searchResults} />
      ) : (
        !isLoading && !fetchError && <p className='statusMsg'>No posts to display.</p>
      )}
    </main>
  );
}


export default Home