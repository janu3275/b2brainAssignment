// import React from "react";
import "./Data.css"
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { LoadingButton } from '@mui/lab';

import SaveIcon from '@mui/icons-material/Save';
const Boxx=()=>{
    const [showbtn,setshowbtn]=useState(1)
    console.log(showbtn)
    const convert=()=>{
        setshowbtn(3);
    }
    return(
        <Box className="bigbox"><Box className="box">
        <Box className="imginfo">
         <Box className="cimg">
         <img src="logo.png" alt="logo"/>
         </Box>
         <Box className="cinfo">
             <div>Harrow Inc</div>
             <div className="chota">www.harrow.com</div>
         </Box>
        </Box>
         {showbtn===1&&<Button 
         onClick={()=>{
            const date = new Date()
             console.log("constant.. so no data on " + date)
             setshowbtn(2)

     const timeout=setTimeout(convert,1000)
             }}
         className="databtn">
         
         Track</Button>}
         {showbtn===2&&<LoadingButton
           
           className="databtn"
           loading
           loadingPosition="start"
           startIcon={<SaveIcon />}
           variant="outlined"
              >
            Track
            </LoadingButton>}

         {showbtn===3&&<Button
          onClick={()=>setshowbtn(1)}
          className="databtns">Tracking</Button>} 
      </Box>
      </Box>
    )
}

export default Boxx;