import React, { useState } from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert'; 
import "./Login.css";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const validate = (event) => {
      event.preventDefault();
if(username == "javascript" && password == "react"){
    swal("Zalogownano poprawnie", "Gratulacje", "success");
}else {
    swal("Błędne logowanie", "Sprawdź wprowadzone dane", "error");
}
    };

    return (
        <div>
            <div className="row justify-content-center">
            <div className='col-md-4'>
            <h1>Autoryzacja użytkownika</h1>
        <form onSubmit={validate}>
<input 
    type="text" 
    placeholder='Podaj nazwę użytkownika'
    className='form-control'
    value={username}
    onChange = {(e) => {
    setUsername(e.target.value);
}} 
/>
<input type="password" placeholder="Wpisz hasło"
className='form-control'
value={password}
    onChange = {(e) => {
    setPassword(e.target.value);
    }}
    />

<input type='submit' className='btn btn-primay' />
        </form>
        </div>
        </div>

        </div>
    );
};

export default Login;