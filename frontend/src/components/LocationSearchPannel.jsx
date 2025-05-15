import React from 'react';

function LocationSearchPannel(props) {
  console.log(props)
  const locations = [
    "PES University RR Campus",
    "Maruti PG - Banashankari Stage 3, Veerabhadra Nagar",
    "Mysore Road"
  ];

  return (
    <div className='bg-white rounded-t-2xl overflow-hidden shadow-xl w-full'>
      <div className='p-4 flex flex-col gap-3'>
        {locations.map((location, index) => (
          <button
            key={index}
            onClick={() => {
              props.setvehiclePannel(true)
            }}
            className='text-left flex items-center gap-4 border-2 border-gray-800 p-3 rounded-lg hover:bg-gray-100 transition'
          >
            <i className="ri-map-pin-line text-xl"></i>
            <span className='text-lg font-medium'>{location}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default LocationSearchPannel;
