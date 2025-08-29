import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    email: ''
  })

  const [error, setError] = useState('')

  const handleChange = (event) =>{
    const {name, value} = event.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.userName || !formData.email || !formData.password ) {
      setError('Por favor, preencha todos os campos.')
      
    } else {
      //virifica envio no console
      console.log('Dados enviados',formData)
      setError('')

      setFormData({
        userName:'',
        password:'',
        email:''
      })
      navigate('/');
    }
  }

 return(
  <form onSubmit={handleSubmit} className=" bg-white rouded-xl shadow-lg flex flex-col gap-3 p-8 mt-10 mx-auto max-w-xl " >
    <div className="bg-gray-800 "><img src="src/assets/Logo.svg" alt="Logo WE EVENT" width={150}  /></div>
    <h2 className="text-center">Cadastro de Usuário</h2>
      <label >Usuário:</label>
      <input className="border border-gray-300" name="userName" value={formData.userName} onChange={handleChange} placeholder="Nome Completo"/>
      <label >Senha:</label>
      <input className="border border-gray-300" name="password" type="password" value={formData.password} onChange={handleChange} />
      <label >E-mail:</label>
      <input className="border border-gray-300" name="email" value={formData.email} onChange={handleChange} placeholder="user@email.com" />

      <button className= " bg-gray-800  text-white border rounded-2xl p-2 self-center w-50 mt-8 hover:bg-gray-700 transition-colors cursor-pointer" type="submit">Cadastrar</button>

      {error && (<p className="text-center text-red-500" >Erro: {error}</p>)}
      

      {/* Botão direcionado ao Login */}     
      <button type="button" onClick={()=>{ navigate('/login');}} className=" bg-gray-800  text-white border rounded-2xl p-2 self-center w-60 mt-2 hover:bg-gray-700  transition-colors cursor-pointer">Possui conta? Clique aqui!</button>
      <button onClick={() =>{navigate('/');}} className= " bg-gray-800  text-white border rounded-2xl p-2 self-center w-50 mt-3 hover:bg-gray-700 transition-colors cursor-pointer" type="submit">Voltar</button>
    </form>

)

}