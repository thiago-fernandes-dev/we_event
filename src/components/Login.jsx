import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export function Login() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const handleChange = (event) => {
    const {name, value} = event.target

    if (name === 'email') setEmail(value)
    if (name === 'password') setPassword(value)
  }

  const handleSubmit = (event) => {
      event.preventDefault()
      let dados = {};
      if(!email || !password) {
        setError('Preencha os campos obrigatórios')
      } else{
          dados = {"email": email, "password": password};
          console.log('Dados enviados',dados);
          setError('');
          navigate('/');
      }
  }

  return(
    <form onSubmit={handleSubmit} className=" bg-white rouded-xl shadow-lg flex flex-col gap-3 p-8 mt-10 mx-auto max-w-xl " >
      <div className=" flex bg-gray-800 rounded-sm object-center"><img className="object-center" src="src/assets/Logo.svg" alt="Logo WE EVENT" width={150}/></div>
      <h2 className="text-center font-semibold">Login</h2>
      <input className="border rounded-sm border-gray-300" type="text" name="email" value={email} onChange={handleChange} placeholder="user@email.com" />
      
      <input className="border rounded-sm border-gray-300" type="password" name="password" value={password} placeholder="password" onChange={handleChange}/>
      
      <button id="login-botao-entrar" className=                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   " bg-gray-800  text-white border rounded-2xl p-2  self-center w-45 mt-2 hover:bg-gray-700  transition-colors cursor-pointer" type="submit">Entrar</button>
      {error && <p className="text-center text-red-500">{(error)}</p> }


    {/* Botão direcionado ao Cadastro */}
    <button type="button" onClick={()=>{
        navigate('/cadastro');
    }} className=" bg-gray-800  text-white border rounded-2xl p-2 self-center w-60 mt-2 hover:bg-gray-700  transition-colors cursor-pointer">Não possui conta? Clique aqui!</button>
    <button onClick={() =>{navigate('/');}} className= " bg-gray-800  text-white border rounded-2xl p-2 self-center w-50 mt-3 hover:bg-gray-700 transition-colors cursor-pointer" type="submit">Voltar</button>
    </form>
  )
}

