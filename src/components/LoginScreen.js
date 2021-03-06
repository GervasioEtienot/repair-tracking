import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom';
import "../styles/loginScreen.css"

export const LoginScreen = () => {

  const { document, order } = useState();
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = formValues => {
    if(formValues.document === "32861551" && formValues.order === "0813") {
      console.log(formValues)
      history.push('/')
    } else {
      alert("Datos incorrectos");
    }
    
  }

  return (
    <div>
      <h1 className="text-7xl font-bold text-white text-center pt-10" >WorldCel</h1>
      <div className="bg-white w-1/3 mx-auto mt-8 mb-4 shadow-md rounded px-8 pt-6 pb-8 place-content-center">
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2" >
                DNI
              </label>
              <input 
                  id="document"
                  name="document"
                  type="number"
                  defaultValue="32861551"
                  placeholder="Ingrese su DNI"
                  ref={register({ required: true })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  autoComplete="off"  
              />
              {errors.document?.type === 'required' && 
                <p className="text-red-500" >Debe ingresar su DNI</p>
              }
            </div>
            <div className="mb-6">
              <label className="block text-grey-darker text-sm font-bold mb-2" >
                Número de orden
              </label>
              <input 
                  id="order"
                  name="order"
                  type="number"
                  defaultValue="0813"
                  placeholder="Ingrese N° de orden"
                  ref={register({ required: true })}
                  className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" 
              />
              {errors.order?.type === 'required' && 
                <p className="text-red-500" >Debe ingresar el número de orden</p>
              }
            </div>
            <div className="flex items-center">
              <button 
                  type="submit"
                  className="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded flex-auto"
              >
                Entrar
              </button>
            </div>
          </form>
      </div>
    </div>
  )
}
