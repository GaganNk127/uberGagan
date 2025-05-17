import React from 'react'

function VehiclePanel(props) {
    
  return (
    <>
     <div className='w-full flex justify-between items-center border-black outline rounded-xl'  onClick={()=>{
            props.setConfirmedridepanel(true)
        }}>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium text-sm'>UberGo <span><i className="ri-user-fill"></i> 4</span></h4>
            <h5 className='font-medium text-sm'>2 mins Away</h5>
            <p className='font-normal text-xs'>Affordable Compact price</p>
          </div>
          <h2 className='text-lg mx-4 font-semibold'>₹120.20</h2>
        </div>

        {/* Bike */}
        <div className='w-full flex justify-between items-center border-black outline rounded-xl'
        onClick={()=>{
            props.setConfirmedridepanel(true)
        }}
        >
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1698944322/assets/92/00189a-71c0-4f6d-a9de-1b6a85239079/original/UberMoto-India-Orange.png" alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium text-sm'>Bike <span><i className="ri-user-fill"></i> 1</span></h4>
            <h5 className='font-medium text-sm'>2 mins Away</h5>
            <p className='font-normal text-xs'>Affordable Compact price</p>
          </div>
          <h2 className='text-lg mx-4 font-semibold'>₹42.00</h2>
        </div>

        {/* Auto */}
        <div className='w-full flex justify-between items-center border-black outline rounded-xl'  onClick={()=>{
            props.setConfirmedridepanel(true)
        }}>
          <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium text-sm'>Uber Auto <span><i className="ri-user-fill"></i> 3</span></h4>
            <h5 className='font-medium text-sm'>2 mins Away</h5>
            <p className='font-normal text-xs'>Affordable Auto price</p>
          </div>
          <h2 className='text-lg mx-4 font-semibold'>₹95.00</h2>
        </div>
        </>
  )
}

export default VehiclePanel