import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracking from './OrderTracking'
import { Box,Grid2 } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';


const OrderDetails = () => {
  return (
    <div className='lg:px-20 px-5'>
        <div className=''>
            <h1 className='font-bold '>Delivery Address</h1>
        <AddressCard/>
        </div>
        <div className='py-20'>
            <OrderTracking/>
        </div>
        {/* <Grid2 container className="space-x-5">
            <Grid2 item container className="shadow-xl 
            rounded-md 
            p-5 border" 
            sx={{alignItems:"center",justifyContent:"space-between"}}>

                <Grid2 item xs={6}>
     <div>
        <img className="w-[5rem] h-[5rem] object-cover object-top " src="https://th.bing.com/th?id=OLC.sf+tvMoxN8vk8w480x360&rs=1&pid=ImgDetMain" alt="" />
        <div className='space-y-2 ml-5'>
            <p>Dressss</p>
           <p><span>Color:Red</span>
           <span>Size:M</span></p>
            <p>1099</p>
        </div>
     </div>
                </Grid2>


            </Grid2>
        </Grid2> */}
        <div className='lg:grid lg:grid-cols-1 lg:px-24'>
            {[1,1,1,1,1].map((item) =>
                <div className='shadow-xl flex mt-5
                rounded-md 
                p-5 border  justify-between'>
            <div className='flex items-center'>
            <img className="w-[5rem] h-[7rem] object-cover object-top " src="https://th.bing.com/th?id=OLC.sf+tvMoxN8vk8w480x360&rs=1&pid=ImgDetMain" alt="" />
            <div className='space-y-2 ml-5'>
                <p className='font-semibold'>Dressss</p>
               <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color:Red</span>
               <span>Size:M</span></p>
                <p>1099</p>
            </div>
         </div>
         <Grid2 item>
            <Box sx={{color:"#fr265e"}}>
    <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-2xl'/>
    <span>Rate & Review Product</span>
            </Box>
    
        </Grid2>
            </div> )}
        
    </div>
 
    </div>
  )
}

export default OrderDetails