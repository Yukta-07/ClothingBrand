import React from 'react'
import { Step,StepLabel,Stepper } from '@mui/material'

const steps = [
    "Order Placed" , "OrderConfirmed" , "Shipped" , "Out for Delivery" , "Delivered"
]
const OrderTracking = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
{steps.map((label) => <Step>
    <StepLabel>{label}</StepLabel>
</Step>)}
        </Stepper>

    </div>
  )
}

export default OrderTracking