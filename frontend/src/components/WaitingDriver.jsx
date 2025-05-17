import React from 'react'

function WaitingDriver() {
  return (
    <div className='h=[50%]'>
        <div className='flex justify-between '>
             <h3 className='text-l font-bold my-1'>Meet the PickUp Point</h3>
             <div className='h-[40px] w-[60px] bg-black text-white p-1 flex items-center justify-center'>
                2 mins
             </div>
        </div>
        <div className='flex gap-3 justify-between items-center flex-col'>
           <div className='flex justify-between'>
            <img className='h-10 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="" />
            <div className='text-right'>
                <h2 className='text-lg font-medium'>Karan</h2>
                <h2 className='text-xl font-semibold'>KA30 MX 2830</h2>
                <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
            </div>
           </div>
            <div className='w-full flex flex-col gap-0'>
                <div className='border-b-2 h-[60px] border-gray-200 flex items-center gap-1'><i className="ri-map-pin-line text-xl"></i> <div> <h3 className='text-lg font-bold'>Pes University</h3> <p className='text-sm text-gray-500'>Ring road</p></div></div>
                <div className='border-b-2 h-[60px] border-gray-200 flex items-center gap-1'><i className="ri-map-pin-line text-xl"></i> <div> <h3 className='text-lg font-bold'>Anand Rao Circle</h3> <p className='text-sm text-gray-500'>Majestic</p></div></div>
                <div className='flex justify-center'><i class="ri-bank-card-fill"></i> <h1 className='font-bold mr-2'>Pay:</h1> <h1>200</h1></div>
            </div>
            
        </div>
    </div>
  )
}

export default WaitingDriver