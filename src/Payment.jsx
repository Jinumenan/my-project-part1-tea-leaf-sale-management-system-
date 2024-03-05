import React from 'react'
import headerimg from '../src/assets/Logo.png'
import Footer from './Footer'
import Navbar from './Navbar'
export default function() {
  return (
    <>
        {/* header code */}
        <div className=' items-center'>
            {/* <div className='bg-green-950 w-auto h-[90px] flex justify-between'>
                <div className=' flex justify-center'>
                    <img src={headerimg} alt="logo" className='w-[250px] h-[100px] justify-start' />
                </div>
                <div className='flex gap-5 mt-4'>
                    <h1 className='text-white text-3xl justify-center pt-4 font-serif'>Payment Dash Board</h1>
                </div>
                <div className=' justify-center mt-10'>
                    <buttonb className=' bg-slate-300 rounded-xl cursor-pointer hover:scale-[1.1] active:bg-slate-500 p-2 mx-4 pl-5 pr-5 font-serif'>LogOut</buttonb>
                </div>
            </div> */}
            <Navbar/>
        </div>
{/*** l***/}
        <div className='flex flex-row'>
            <div className='bg-lime-950 w-[180px] h-[450px] mb-10 text-center'>
                <button value="staff_payment" className='btn'>Staff payment </button>
                <button value = "supplier info" className='btn'> Supplier info</button>
                <button vlau ='inventry info' className='btn'>Inventry info</button>
                <button value ='staff info'className=' btn'>Staff inform</button>
                <button value= 'shipment info'className='btn'>Shipment info</button>
                <button value = 'member info'className='btn'>Member info</button>
                <button value = 'payment info'className='btn'>Payment info</button>
                <button value = 'feedback info'className='btn'>Feedback info</button>

            </div>
            <div className='bg-lime-500 w-[20%] h-[400px] mb-10 flex-grow'>
                <div className='flex-row '>
                    <div className='bg-black h-[225px] flex-grow text-center'>
                      <hi className='text-white text-2xl font-serif'>PAYMENT DETAILS</hi>
                    </div>
                    <div className='bg-sky-800 h-[225px] flex-grow text-center'>
                      <hi className='text-white text-2xl font-serif'>NOTIFICATION</hi>
                    </div>
                </div>
            </div>    
        </div>
        <div className='items-end -my-10'>
            <Footer/>
        </div>
    </>
  )
}
