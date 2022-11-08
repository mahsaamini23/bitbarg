import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Grid } from "@mui/material";
// import iconBitBarg from "assets/svg/icon-bitbard.svg";
import SvgIcon from '@mui/material/SvgIcon';
// import Icon from '@material-ui/core/Icon';


const Header =()=>{

    return(
        <Grid container sx={{height:"64px" , }} >
            <Grid container item sx={{display:{xs : 'none' , md : 'flex'}, justifyContent:'space-between', }}>
                <Grid container item sx={{width:'60%',alignItems:'baseline',gap:'20px'}}>
                    <Typography>
                        <IconButton>
                            <MenuIcon/>
                        </IconButton>
                        منو
                    </Typography>
                    <Typography>
                        خانه
                    </Typography>
                    <Typography>
                        قیمت لحظه ای
                    </Typography>
                    <Typography>
                        کارمزدها
                    </Typography>
                </Grid>
                <Grid container item sx={{width:'40%',flexDirection:'row-reverse'}}>
                    <Grid container item sx={{width:'50%',justifyContent:'flex-start',alignItems:'baseline'}}>
                        <SvgIcon>
                            {/* {iconBitBarg} */}
                        </SvgIcon>
                    </Grid>
                    <Grid  container item sx={{width:'50%' ,justifyContent:'flex-end',alignItems:'baseline'}}>
                        <Grid container sx={{width:'25%'}}>
                            <Button>
                                <Typography>ورود</Typography>
                            </Button>
                        </Grid>
                        <Typography>/</Typography>
                        <Grid>
                            <Button>
                                <Typography> ثبت نام </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header;