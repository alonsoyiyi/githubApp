import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario'
import UserCard from './components/UserCard'

const App = () => {
    const [user,setUser]=useState(null);
   
  return (
    <div className="content">
      <h1>GitHub App</h1>
      <p>Muestranos la informacion de un usuario en GitHub.</p>
      <Formulario setUser={setUser} />
      {user && (<UserCard user={user} />)}
    </div>
  );
};

export default App;
