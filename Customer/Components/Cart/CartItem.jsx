import { Button } from '@headlessui/react'
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md mt-5'>
        <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[10rem] lg:h-[16rem]">
        <img className ="w-full h-full object-cover" src="https://th.bing.com/th?id=OLC.sf+tvMoxN8vk8w480x360&rs=1&pid=ImgDetMain" alt="" />

        </div>
        <div className="space-y-1 ml-5">
<p className='font-semibold'>Dress</p>
<p className='opacity-70'>Size:L,white</p>
<div className='space-x-3 flex pt-3 text-gray-900 items-center'>
            <p>499</p>
            <p className='line-through'>1990</p>
            <p className='text-green-600'>30%</p>
        </div>
      
      
        </div>
        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
<div className='flex items-center space-x-2'>
<IconButton>
    <RemoveCircleOutline/>
</IconButton>
<span className='py-1 px-7 border rounded-sm'>3</span>
<IconButton>
    <AddCircleOutline/>
</IconButton>
<Button>Remove </Button>
</div>

        </div>
    </div>
  )
}

export default CartItem