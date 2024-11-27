import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation} from 'react-router-dom';
import DeliveryAddress from './DeliveryAddress';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Add Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const location = useLocation();

  
  // Extract the step from the query string or default to 0
  const querySearch = new URLSearchParams(location.search);
  const stepFromQuery = parseInt(querySearch.get("step"), 10) || 0;
  
  // Sync the activeStep with the stepFromQuery
  React.useEffect(() => {
    setActiveStep(stepFromQuery);
  }, [stepFromQuery]);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      const nextStep = activeStep + 1;
      setActiveStep(nextStep);
     
     
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      const prevStep = activeStep - 1;
      setActiveStep(prevStep);
   
    }
  };

  return (
    <div className='lg:px-16'>
  <Box sx={{ width: '100%', marginTop: "20px" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you're finished
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>

    

          {/* Display the appropriate component based on the active step */}
          <div>
            {activeStep === 1 ? <DeliveryAddress /> : <OrderSummary />}
          </div>
        </React.Fragment>
      )}
    </Box>
    </div>
  
  );
}
