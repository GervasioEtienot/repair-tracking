import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const MainScreen = () => {
  
  const history = useHistory();
  
  const { state: { data } } = useLocation()
      
  const estado = () => {
    let repairStatus = "Recibido"
    switch(data?.status){
      case 'Reparando': repairStatus = "yellow";
                        break;
      case 'Listo':     repairStatus = "green";
                        break;
      default: break;
    }
    return (
      <>
        <div className={`border bg-${repairStatus}-500 px-4 py-1 max-w-max mx-auto mb-4 rounded-md text-black`}  >
          {data?.status}
        </div>
        { data?.status === "Listo" &&
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" >
            <div>
              <label className="flex-initial mr-2" >Lugar de retiro</label>
              <div className="border bg-white px-4 py-1 rounded-md text-black">
                {data?.place}
              </div> 
            </div>
            <div>
              <label className="flex-initial mr-2" >Fecha de retiro</label>
              <div className="border bg-white px-4 py-1 rounded-md text-black">
                {data?.date}
              </div> 
            </div>
          </div>
        }
      </>
    )
  }

  const logout = () => {
    sessionStorage.removeItem('dni');
    sessionStorage.removeItem('order');
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
          <label className="mr-2" >Observasiones</label>
          <div className="border bg-white px-4 py-1 min-h-20 rounded-md text-black">
            {data?.observations}
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="text-center" >
        <div className="mx-auto" >Estado</div>
        { estado() }
      </div>
      <hr className="my-4" />
      <div className="text-right">
        <button 
            className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
            onClick={ () => logout() }
        >
          Salir
        </button>
      </div>
    </div>
  )
}
