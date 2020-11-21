import React from 'react';
import { useHistory } from 'react-router-dom';
import { data } from '../assets/data';

export const MainScreen = () => {
  
  const history = useHistory();

  if(!sessionStorage.getItem('dni') || !sessionStorage.getItem('order')) {
    history.push('/login');
  }
  console.log(data)
  return (
    <div className="container bg-gray-500 rounded-md p-4 w-2/3 mx-auto mt-10 h-80 text-white" >
      <div className="grid grid-rows-3">
        <div className="flex mb-1" >
          <label className="flex-initial mr-2" >Nombre:</label>
          <div className="border bg-white px-4 py-1 flex-initial rounded-md text-black"  >
            {`${data?.name} ${data?.surname}`}
          </div>
          <label className="flex-initial mr-2 ml-8" >DNI:</label>
          <div className="border bg-white px-4 py-1 flex-initial rounded-md text-black">
            {data?.dni}
          </div>
        </div>
        <hr/>
        <div className="flex mb-1" >
          <label className="flex-initial mr-2" >Marca:</label>
          <div className="border bg-white px-4 py-1 flex-initial rounded-md text-black"  >
            {data?.brand}
          </div>
          <label className="flex-initial mr-2 ml-8" >Modelo:</label>
          <div className="border bg-white px-4 py-1 flex-initial rounded-md text-black">
            {data?.model}
          </div>
          <label className="flex-initial mr-2 ml-8" >Color:</label>
          <div className="border bg-white px-4 py-1 flex-initial rounded-md text-black">
            {data?.color}
          </div>
        </div>
        <hr/>
        <div className="flex mb-1" >
          <label className="flex-initial mr-2" >Diagnóstico:</label>
          <div className="border bg-white px-4 py-1 flex-initial rounded-md text-black"  >
            {data?.diagnostic}
          </div>
          <label className="flex-initial mr-2 ml-8" >Observasiones:</label>
          <div className="border bg-white px-4 py-1 flex-initial rounded-md text-black">
            {data?.observations}
          </div>
          
        </div>
      </div>
      

    </div>
  )
}
