import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getDateRangePickerDayUtilityClass, LoadingButton } from '@mui/lab';
import axios from "axios";
import SaveIcon from '@mui/icons-material/Save';
import "./Data.css"
import Boxx from "./Boxx";
import Databoxx from "./Databoxx";
const Data=({searchv})=>{
const [data,setdata]=useState([])
    const getdata= async(searchv)=>{
     try {
        const res = await axios.get(`https://tva.staging.b2brain.com/search/autocomplete_org_all/?q=${searchv}
            `)
        console.log(res.data) 
        setdata(res.data)   
     } catch (err) {
        console.log(err)
     }
    }
    
      useEffect(()=>{
        getdata(searchv)
      },[searchv])   
    
        
     

    console.log(data)
    const arr = [1,2,3,4,5,6,7]
    return (
        <Box
        className="data"
        >
            <Box
            className="infobox"
            >
                <Box className="titles">Similar accounts</Box>
                <Box className="datas">
                 {arr.map((x)=><Boxx/>)}
                 {searchv.split("").length>0 && data.map((x,index)=><Databoxx key={index} v = {x}/>)}
                </Box>
            </Box>
            <Box className="quickactions">
                <Box className="qat">Quick Actions</Box>
                <Box className="qa">Track new account</Box>
                <Box className="qa">Bulk track acounts</Box>
                <Box className="qa">Manage accounts</Box>
            </Box>
        </Box>
    )
}

export default Data;