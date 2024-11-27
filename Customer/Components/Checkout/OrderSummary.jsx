import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'

const OrderSummary = () => {
  return (
    <div>
      
    <div className='p-5 shadow-lg rounded-s-md border'> 
<AddressCard/>

    </div>
    <div className='lg:grid grid-cols-3 lg:px-16 relative'>
    <div className='col-span-2'>        
       {[1,1,1,1].map((item) =>  <CartItem/>)}
    </div>
           <div className='mt-5 sticky px-5 top-0 h-[100vh] pb-4'>
           <div className='border px-5'>
            <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>

          <div className='space-y-3 font-semibold mb-10'>
 <div className='flex justify-between pt-3 text-black'>
  <span>Price</span>
  <span>499</span>

 </div>
 <div className='flex justify-between pt-3 text-black '>
  <span>Discount</span>
  <span>-1990</span>

 </div>
 <div className='flex justify-between pt-3 text-black'>
  <span>Delivery Charges</span>
  <span>Free</span>

 </div>
 <div className='flex justify-between pt-3 text-black font-bold'>
  <span>Total Amount</span>
  <span>499</span>

 </div>
          </div>
          <Button variant="contained"className='w-full' sx={{px:"2.5rem",py:".7rem", bgcolor:"f4f54fr"}}>
          Payment
           </Button>
           </div>
          
                   </div>
                   
</div>
    </div>
  )
}

export default OrderSummary