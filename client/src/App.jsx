import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import AppRouter from './components/AppRouter'
import { AuthContext } from './context'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('isAuth')) {
      setIsAuth(true)
    }
  }, [])
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
