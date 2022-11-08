import React from "react";
import Grid from "@mui/material/Grid";
import Typography  from "@mui/material/Typography";
import HomeIcon from '@mui/icons-material/Home';
import { grey } from "@mui/material/colors";

const Footer =()=>{
    return(
        <Grid container  sx={{display:{xs:'flex' , md: 'none'} , justifyContent:'flexStart',width:"100%", position:'fixed', bottom:'0', borderTop:'1px solid grey'}}>
            <Grid container item sx={{display:'flex' , flexDirection:'column', justifyContent:'space-evenly',width:'25%' , alignContent:'baseline',padding:'0 10px'}} >
                <HomeIcon sx={{color : grey[500] , fontSize: 30}}/>
                <Typography sx={{color:'grey'}}>
                    خانه
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer;