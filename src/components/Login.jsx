import React, { Fragment } from "react";
import { useState } from "react";

export default function Login() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const {name, value} = event.target

    if (name === 'email') setEmail(value)
    if (name == 'password') setPassword(value)
  }

  const handleSubmit = (event) => {
      event.preventDefault()
      if(!email || !password) {
        setError('Preencha os campos obrigatórios')
      } else{
        setError('')
      }
  }

  return(
    <form onSubmit={handleSubmit}className=" bg-white rouded-xl shadow-lg flex flex-col gap-3 p-8 mt-10 mx-auto max-w-xl " >
      <div className="bg-gray-800 rounded-sm "><img src="src/assets/Logo.svg" alt="Logo WE EVENT" width={150}/></div>
      <h2 className="text-center font-semibold">Login</h2>
      <input className="border rounded-sm border-gray-300" type="text" name="email" value={email} onChange={handleChange} placeholder="user@email.com" />
      
      <input className="border rounded-sm border-gray-300" type="password" name="password" value={password} placeholder="password" onChange={handleChange}/>
      
      <button className= "className= bg-gray-800  text-white border rounded-2xl p-2  self-center w-45 mt-2 hover:bg-gray-700  transition-colors cursor-pointer" type="submit">Entrar</button>
      {error && <p className="text-center text-red-500">{(error)}</p> }


    {/* Botão direcionado ao Cadastro */}
    <button type="button" className=" bg-gray-800  text-white border rounded-2xl p-2 self-center w-60 mt-2 hover:bg-gray-700  transition-colors cursor-pointer">Não possui conta? Clique aqui!</button>

    </form>
  )
}

