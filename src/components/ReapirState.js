import React from 'react'
import { Steps } from 'antd';
import 'antd/dist/antd.css';

export const ReapirState = ({ status, place, retirementDate }) => {
  
  const { Step } = Steps;

  let repairStatus = [ 'progress', 'wait', 'wait' ];
    switch(status){
      case 'Reparando': repairStatus = [ 'finish', 'progress', 'wait' ];
                        break;
      case 'Listo':     repairStatus = [ 'finish', 'finish', 'progress' ];
                        break;
      case 'Retirado':  repairStatus = [ 'finish', 'finish', 'finish' ];
                        break;
      default: break;
    }
  
  return (
    <>
        <div className="bg-white rounded p-4 mb-4">
          <Steps >
            <Step status={repairStatus[0]} title="Recibido" description=""  />
            <Step status={repairStatus[1]} title="Reparando"  />
            <Step status={repairStatus[2]} title="Listo" description="" />
          </Steps>
        </div>
        { status === "Listo" &&
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" >
            <div>
              <label className="flex-initial mr-2" >Lugar de retiro</label>
              <div className="border bg-white px-4 py-1 rounded-md text-black">
                {place}
              </div> 
            </div>
            <div>
              <label className="flex-initial mr-2" >Fecha de retiro</label>
              <div className="border bg-white px-4 py-1 rounded-md text-black">
                {retirementDate}
              </div> 
            </div>
          </div>
        }
      </>
  )
}
