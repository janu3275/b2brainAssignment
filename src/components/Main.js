import React, { useState } from "react";
import {Box,TextField} from "@mui/material"
import "./Main.css"
import Data from "./Data";
const Main =()=>{
  const [showbox,setshowbox] = useState(false)
  const [showsearch,setshowsearch]=useState(true)
  const [search,setsearch] = useState("")
  console.log(showbox)
  console.log(showsearch)
  console.log(search)
    return(
        <Box className="fullpage">
        {showsearch?<Box className="wallpaper">
          <img className="wallimg" src="hero-image.png" alt="kl"/>
          <img className="wallimg" src="Screenshot 2022-07-01 at 1.46.png" alt="kl"/>
          <img className="wallimg" src="Screenshot 2022-07-01 at 1.46 (1).png" alt="kl"/>
        </Box>:<Box className="wallpaper">
          <Data searchv = {search} />
        </Box>}
        <Box className="main">
        <Box className="sidebar">
         <Box className="logo">
          <img className="b2image" src="B2Brain.png" alt="b2"/><Box className="title">B2Brain</Box>
         </Box>
         <Box className="sideboxone"><img
          className="sideimg" src="home.png" alt="d"
         />
         <Box className="options">Dashboard</Box></Box>
         <Box className="sidebox"><img
          className="sideimg" src="star.png" alt="d"
         />
         <Box className="options">Intels<Box className="redelement">4 unread</Box></Box></Box>
         <Box className="sidebox"><img
          className="sideimg" src="user.png" alt="d"
         />
         <Box className="options">Leads<Box className="redelements">4 unseen</Box></Box></Box>
         <Box className="sidebox"><img
          className="sideimg" src="building.png" alt="d"
         />
         <Box className="options">Accounts
         <img className="ups" src="chevron-down.png" alt="x"/></Box></Box>
         <Box className="menu">
          <Box className="menubox">Manage all</Box>
          <Box className="menubox">Track new accounts</Box>
          <Box className="menubox">Bulk import</Box>
         </Box>
         {showbox?<>
          <Box
          onClick={()=>setshowbox(!showbox)} 
          className="sidebox"><img
          className="sideimg" src="cog.png" alt="d"
         />
         <Box className="options">Preferences <img className="up" src="chevron-down.png" alt="x"/></Box></Box>
         <Box className="menu">
          <Box className="menubox">Product Focus</Box>
          <Box className="menubox">Intel Preferences  </Box>
          <Box className="menubox">Lead Persona</Box>
         </Box>
         </>:<>         
         <Box
          onClick={()=>setshowbox(!showbox)}
          className="sideboxone"><img
          className="sideimg" src="cog.png" alt="d"
         />
         <Box className="options">Preferences  <img className="up" src="chevron-up.png" alt="x"/></Box></Box>
</>}
<Box className="sidebox"><img
          className="sideimg" src="link.png" alt="d"
         />
         <Box className="options">Integrations</Box></Box>
         <Box className="sidebox"><img
          className="sideimg" src="users.png" alt="d"
         />
         <Box className="options">Team</Box></Box>
         <Box className="sidebox"><img
          className="sideimg" src="comments-alt.png" alt="d"
         />
         <Box className="options help">Help/Support</Box></Box>
        </Box>
        {showsearch?<Box
         onClick={()=>setshowsearch(false)}
         className="searchbar">
           <img className="searchimg" src="search.png" alt="k"/>
          <TextField
           value={search}
           placeholder="Search"
           fullWidth
           className="search"
           sx={{
    "& .MuiOutlinedInput-root": {
      "& > fieldset": {
        border: "none"
      }
    }
  }}


          />  
        </Box>:<Box
        className="searchbar">
           <img 
           onClick={()=>{
            setshowsearch(true)
            setsearch("")}} className="searchimg" src="cross.png" alt="k"/>
          <TextField
           onChange={(e)=>setsearch(e.target.value)}
           value={search}
           placeholder="Search"
           fullWidth
           className="search"
           sx={{
    "& .MuiOutlinedInput-root": {
      "& > fieldset": {
        border: "none"
      }
    }
  }}


          />  
        </Box>}
         
        
        </Box>
        {/* <Box className="wallpaper">
          <img src="hero-image.png" alt="kl"/>
          <img src="Screenshot 2022-07-01 at 1.46.png" alt="kl"/>
          <img src="Screenshot 2022-07-01 at 1.46 (1).png" alt="kl"/>
        </Box> */}
       
        </Box>
    )
}

export default Main;