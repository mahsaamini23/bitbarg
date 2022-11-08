import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";


type cardType={
    key:number,
    name:string,
    image:string,
    price:number,
    change:number,
    color:string,
}

const Card =({key, name , image , price, change , color}:cardType):JSX.Element=>{
    return(
        <Grid key={key} container p={2} sx={{width:'240px', height:'180px', border:'1px solid #a6a6a6', borderRadius:'10px', display:'flex' ,flexDirection:'column',gap:'10px',justifyContent:'space-between' }}>
            <Grid container item my={1} sx={{display:'flex' , justifyContent:'space-between', alignItems:'baseline'}}>
                <Grid item sx={{display:'flex',}}>
                    <img src={image} alt="logo"/>
                    <Typography>{name}نام</Typography>
                </Grid>
                <Grid bgcolor="#f5fbf7" p={.5} sx={{ width:'105px', height:'30px',color:`${color}`, border:'1px solid #d9efdf',borderRadius:'20px', display:'flex', justifyContent:'center',alignContent:'baseline'}}>{change}تغییرات</Grid>
            </Grid>
            <Grid>
                <Grid sx={{borderBottom:'1px solid #a6a6a6'}}>
                    <Grid container item sx={{display:'flex', justifyContent:'space-between', marginBottom:'6px'}}>
                        <Typography>خرید</Typography>
                        <Typography>{price} دلار</Typography>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid container item sx={{display:'flex', justifyContent:'space-between', marginTop:'6px'}}>
                        <Typography>فروش</Typography>
                        <Typography>{price} دلار</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Card;