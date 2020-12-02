import React from 'react';
import { useHistory } from 'react-router-dom';

import { dataClient } from '../assets/data';
import { ReapirState } from './ReapirState';

export const MainScreen = () => {
  
  const history = useHistory();
  
  const data = dataClient[sessionStorage.getItem('data')];
  
  const logout = () => {
    sessionStorage.removeItem('dni');
    sessionStorage.removeItem('order');
    sessionStorage.removeItem('data');
    history.push('/');
  }

  return (
    <div className="container bg-gray-500 rounded-md p-4 w-2/3 mx-auto mt-10 min-h-full text-white" >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="flex-initial mr-2" >Nombre</label>
          <div className="border bg-white px-4 py-1 rounded-md text-black"  >
            {`${data?.name} ${data?.surname}`}
          </div>
        </div>
        <div>
          <label className="flex-initial mr-2" >DNI</label>
          <div className="border bg-white px-4 py-1 rounded-md text-black">
            {data?.dni}
          </div>
        </div>
        <div>
          <label className="flex-initial mr-2" >N° de orden</label>
          <div className="border bg-white px-4 py-1 rounded-md text-black">
            {data?.orderNum}
          </div>
        </div>
        <div>
          <label className="flex-initial mr-2" >Fecha de ingreso</label>
          <div className="border bg-white px-4 py-1 rounded-md text-black">
            {data?.ingressDate}
          </div>
        </div>
        <div>
          <label className="flex-initial mr-2" >Marca</label>
          <div className="border bg-white px-4 py-1 rounded-md text-black"  >
            {data?.brand}
          </div>
        </div>
        <div>
          <label className="flex-initial mr-2" >Modelo</label>
          <div className="border bg-white px-4 py-1 rounded-md text-black">
            {data?.model}
          </div>
        </div>
        <div>
          <label className="flex-initial mr-2" >Color</label>
          <div className="border bg-white px-4 py-1 rounded-md text-black">
            {data?.color}
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2" >
          <label className="flex-initial mr-2" >Diagnóstico</label>
          <div className="border bg-white px-4 py-1 rounded-md text-black"  >
            {data?.diagnostic}
          </div>
        </div>
        <div>
          <label className="mr-2" >Observaciones</label>
          <div className="border bg-white px-4 py-1 min-h-20 rounded-md text-black">
            {data?.observations}
          </div>
        </div>
      </div>
      <hr className="my-4" />
      
      { data && <ReapirState 
                    status={data.status} 
                    place={data.place} 
                    retirementDate={data.retirementDate} 
                /> 
      }
      
      <hr className="my-4" />
      <div className="text-right">
        <button 
            className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
            onClick={ () => logout() }
        >
          Salir
        </button>
      </div>
    </div>
  )
}
