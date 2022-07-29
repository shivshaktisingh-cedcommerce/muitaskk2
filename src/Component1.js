import React from 'react'
import "./Component1.css"

import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { TextareaAutosize } from '@mui/material';




export default function Component1() {
  return (
    <div id="component1">
        <div id ="navbar">
            <div id="navlogo"><img src="../2.png" alt="" id="logo"/></div>
            <div id="navpages">
             <div id="solutionsnav"><Typography variant='body'  style={{fontWeight:"300"}}>Home</Typography></div>
             <div id="productnav"><Typography variant='body' style={{fontWeight:"300"}}>About Us</Typography></div>
             <div id="resourcesnav"><Typography variant='body' style={{fontWeight:"300"}}>Service</Typography></div>
             <div id="companynav"><Typography variant='body' style={{fontWeight:"300"}}>Contact</Typography></div>
             <div id="getnav"><Typography variant="body" style={{fontWeight:"300"}}>Login</Typography></div>

            </div>
        </div>
        <div id="contentandinput">
            <div id="content">
              <div id="content1"><Typography variant="h2" style={{fontWeight:"bold",color:"#0096AB",letterSpacing:"1px"}}>ONLINE </Typography></div>
              <div id="content2"><Typography variant="h3" style={{fontWeight:"200",color:"#0C3753",letterSpacing:"1px"}}>EDUCATION </Typography></div>
              <div id="content3"><Typography variant="body" style={{fontWeight:"300",color:"#0C3753 ",letterSpacing:"1px"}}>Talk to an Apptio expert about your</Typography></div>
              <div id="content4"><Typography variant="body" style={{fontWeight:"300",color:"#0C3753 ",letterSpacing:"1px"}}>specific needs and see a live product</Typography></div>
              <div id="content5"><Typography variant="body" style={{fontWeight:"300",color:"#0C3753 ",letterSpacing:"1px"}}>demonstration. Discuss current</Typography></div>
              <div id="content6"><Button variant="contained" style={{backgroundColor:"#0096AB",width:"50%",color:'white',borderRadius:"20px"}}>Learn More</Button></div>
            </div>
            <div id="input">
              <div id="input1"><img src="../5.png" alt="" id="image"/></div>
            </div>
        </div>
        
    </div>
  )
}
