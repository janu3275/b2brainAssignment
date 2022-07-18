// import React from "react";
import "./Data.css"
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { LoadingButton } from '@mui/lab';

import SaveIcon from '@mui/icons-material/Save';
const Databoxx=({v})=>{
    const [showbtn,setshowbtn]=useState(1)
    console.log(showbtn)
    const convert=()=>{
        setshowbtn(3);
    }
    return(
        <Box className="bigboxes"><Box className="box">
        <Box className="imginfo">
         <Box sx={{backgroundColor:v.color||"green"}} className="cimages">
         {v.company.split("")[0]}
         </Box>
         <Box className="cinfo">
             <div>{v.company}</div>
             <div className="chota">{v.website}</div>
         </Box>
        </Box>
         {showbtn===1&&<Button 
         onClick={()=>{
            const date = new Date()
             console.log(`${v.company}(${v.slug}) tracked at ${date} ` )
             setshowbtn(2)
             setTimeout(convert,1000)
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

export default Databoxx;