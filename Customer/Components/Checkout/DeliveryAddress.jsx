import React from 'react'
import { Grid2 } from '@mui/material'
import AddressCard from '../AddressCard/AddressCard'
import Button from '@mui/material/Button';
import {Box,TextField} from "@mui/material"

const DeliveryAddress = () => {
  return (
<div className='lg:px-16 relative'>
    <Grid2 container spacing={4} direction="row">
        <Grid2 xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
            <div className="p-5 py-7 border-b cursor-pointer lg:px-16">
                <AddressCard />
                <Button sx={{ mt: 2, bgcolor: "#f4rrfe" }} size="large" variant="contained">
                    Deliver Here
                </Button>
            </div>
        </Grid2>

        <Grid2 item xs={12} lg={7}>
            <Box className="border rounded-s-md shadow-md p-5">
                <form>
                    <Grid2 container spacing={3}>
                        <Grid2 item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                fullWidth
                                autoComplete="given-name"
                            />
                        </Grid2>
                    <Grid2 item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last Name"
                                fullWidth
                                autoComplete="given-name"
                            />
                        </Grid2> 
                        <Grid2 container spacing={3}>
                        <Grid2 item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                fullWidth
                                autoComplete="given-name"
                            />
                        </Grid2>
                    <Grid2 item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last Name"
                                fullWidth
                                autoComplete="given-name"
                            />
                        </Grid2> 
                        </Grid2>
{/* 
                        <Grid2 item xs={12}>
                            <TextField
                                required
                                id="address"
                                name="address"
                                label="Address"
                                fullWidth
                                multiline
                                rows={6}
                                autoComplete="given-name"
                            />
                        </Grid2> */}

                        {/* <Grid2 item xs={12}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                            
                                autoComplete="given-name"
                            />
                        </Grid2> */}

                        {/* <Grid2 item xs={12} sm={6}>
                            <TextField
                                required
                                id="state"
                                name="state"
                                label="State"
                                fullWidth
                                autoComplete="given-name"
                            />
                        </Grid2> */}

                        {/* <Grid2 item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label="Pincode"
                                fullWidth
                                autoComplete="shipping postal-code"
                            />
                        </Grid2> */}

                        {/* <Grid2 item xs={12} sm={6}>
                            <TextField
                                required
                                id="phone"
                                name="phone"
                                label="Phone"
                                fullWidth
                                autoComplete="given-name"
                            />
                        </Grid2> */}

                        {/* <Grid2 item xs={12}>
                            <Button sx={{ mt: 2, bgcolor: "blue" }} size="large" variant="contained" type="submit">
                                Deliver Here
                            </Button>
                        </Grid2> */}
                    </Grid2>
                </form>
            </Box>
        </Grid2>
    </Grid2>
</div>

  )
}

export default DeliveryAddress