import React from 'react'
import { Grid2 } from '@mui/material'
import OrderCard from './OrderCard'
const orderStatus = [
    {label:"on the way" , value:"on_the-way"},
    {label:"Delivered" , value:"delivered"},
    {label:"Cancelled" , value:"cancelled"},
    {label:"Returned", value:"returned"}
]
const Orders = () => {
  return (
    <div className='mt-5 items-center flex' sx={{justifyContent:"space-betwwen"}}>
        {/* <Grid2 container sx={{justifyContent:"space-betwwen"}}>
            <Grid2 item xs={3}>
<div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
<h1 className='font-bold text-lg text-gray-600'>Filter</h1>
<div className='space-y-4 mt-10'>
<h1 className='font-semibold'>Order Status</h1>
{orderStatus.map((option) =>
<div className='flex items-center'>
    <input defaultValue= {option.value} 
    type="checkbox" 
    className='h-4 w-4 text-indigo-600
     border-gray-300
      focus:ring-indigo-500'/>
      <label className="ml-3 text-sm text-gray-600" htmlFor={option.value}>{option.label}</label>
</div>
)}
</div>
</div>
            </Grid2>
            <Grid2 item xs={8}>
<OrderCard/>
            </Grid2>
        </Grid2> */}

        <div className='px-5 lg:grid lg:grid-cols-2 lg:px-20 space-x-10'  sx={{justifyContent:"space-betwwen"}}>
        <div className='h-[18rem] shadow-lg bg-white p-5 top-5'>
<h1 className='font-bold text-lg text-gray-600'>Filter</h1>
<div className='space-y-4 mt-10'>
<h1 className='font-semibold'>Order Status</h1>
{orderStatus.map((option) =>
<div className='flex items-center'>
    <input defaultValue= {option.value} 
    type="checkbox" 
    className='h-4 w-4 text-indigo-600
     border-gray-300
      focus:ring-indigo-500'/>
      <label className="ml-3 text-sm text-gray-600" htmlFor={option.value}>{option.label}</label>
</div>
)}

        </div>
    </div>
    <div className='space-y-5'>
        {[1,1,1,1,1].map((item) =>  <OrderCard/> )}
  
    </div>

    </div>
    </div>
)
}
export default Orders