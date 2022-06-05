
import './App.css';

import { useEffect, useReducer } from 'react';
import { authReducer } from './auth/reducers/AuthReducer';
import { AuthContext } from './auth/context/AuthContext';
import { AppRouter } from './routes/AppRouter';

const init = () =>{
  return JSON.parse(localStorage.getItem('user')) || {logged:false}
}



function App() {
  const [user, dispach] = useReducer(authReducer,{}, init)

  useEffect(()=>{
    if(user) return localStorage.setItem('user', JSON.stringify(user))
  }, [user])
  return (
    <AuthContext.Provider value={{
      user, dispach
    }}>

    <div className="App bg-dark text-white">
   
   
     <AppRouter/>
      
    </div>
    
    </AuthContext.Provider>
  );
}

export default App;
