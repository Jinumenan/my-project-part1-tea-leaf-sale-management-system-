import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function 
() {
  return (
    <>
        <div className=''>{/**Header */}
       <Navbar/>
        </div>

        <div className=' flex flex-row'>
            <div className='className= bg-lime-950 w-[175px] h-[450px]text-center rounded-md'>
                <button value="staff_payment" className='btn'> Owner </button>
                <button value = "supplier info" className='btn'> Supplier info</button>
                <button vlau ='inventry info' className='btn'>Staff inform</button>
                <button value ='staff info'className=' btn'>In</button>
            </div>
            <div className='bg-lime-300 w-[20%] h-[450px] flex-grow border'>

            </div>
        </div>

        {/*footer */}
        <div className=' w-auto h-[100px] items-end'> 
            <Footer/>
        </div>
    </>
  )
}
