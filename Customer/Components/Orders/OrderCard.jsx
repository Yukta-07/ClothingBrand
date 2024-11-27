import { Grid2 } from '@mui/material'
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AdjustIcon from '@mui/icons-material/Adjust'; 
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
  return (
    <div onClick={() =>navigate(`/account/orders/${5}`)} className='p-5 shadow-md hover:shadow-2xl border'>
        <Grid2 container spacing={2} sx={{justifyContent:"space-between"}}>
<Grid2 item xs={6}>
<div className='flex cursor-pointer'>
<img className="w-[6rem] h-[8rem] object-cover" src="https://th.bing.com/th/id/OLC.6HNWzfuL1BTpKQ480x360?&rs=1&pid=ImgDetMain" />
<div className='ml-5 space-y-2'>
<p className='mb-2'>Dress</p>
<p className='opacity-50 text-xs font-semibold'>Size:M</p>
<p>Color:Black</p>
</div>
</div>
</Grid2>
<Grid2 item xs={2}>
<p>1099</p>
</Grid2>
<Grid2 item xs={4}>
    {true && 
<p>
    <AdjustIcon sx={{width:"15px" , height:"15px"}} className='text-green-600 space-x-4'/>
    <span>Delivered On Nov 15
    <span className='text-xs'>Your Item has been Delivered</span>
    </span>
   
    </p>
  
    }
    {false && 
        <p> <span>
        Expected Delivery On Nov 15
         </span>
     </p>
    }
   
</Grid2>
        </Grid2>
    </div>
  )
}

export default OrderCard