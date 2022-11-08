import React from "react";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SvgIcon from '@mui/material/SvgIcon';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import StyledTextField from "style/styleTextField";
import { Link } from "react-router-dom";
import logo from 'assets/image/header-logo.svg';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:380,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p:1,
};

const Header =()=>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    

    return(
        <Grid container py={2} px={8} sx={{height:"64px"}} >
            <Grid container item sx={{display:{xs : 'none' , md : 'flex'}, justifyContent:'space-between', }}>
                <Grid container item sx={{width:'40%',display:'flex', alignItems:'baseline',gap:'20px'}}>
                    <Typography>
                        <IconButton>
                            <MenuIcon/>
                        </IconButton>
                            منو
                    </Typography>
                    <Link to="/" sx={{textDecoration:'none', color:'#000'}}>
                        <Link underline="none">
                            خانه
                        </Link>
                    </Link>
                    <Link to="/currentPrice" underline='none' sx={{underline:'none', color:'#000'}}>
                        <Typography>
                            قیمت لحظه ای
                        </Typography>
                    </Link>
                </Grid>
                <Grid container item sx={{width:'60%',display:'flex', flexDirection:'row-reverse'}}>
                    <Grid  container item sx={{width:'100%' ,justifyContent:'flex-end',alignItems:'baseline'}}>
                        <Grid container sx={{ display:'flex', width:'35%', alignContent:'baseline'}}>
                            <Grid sx={{display:'flex' , gap:'5px'}} >
                                <Button onClick={handleOpen} sx={{width:'100px',height:'36px', color:'white', backgroundColor:'#3062b2', borderRadius:'3px'}} >
                                    <Typography>ورود</Typography>
                                    <Typography>/</Typography>
                                    <Typography> ثبت نام </Typography>
                                </Button>
                                <Grid sx={{width:'1.5px', height:'30px', backgroundColor:'grey',marginTop:'4px'}}></Grid>
                            </Grid>
                            <Grid container item sx={{width:'50%',justifyContent:'flex-start',alignItems:'baseline'}}>
                                <img src={logo} alt="logo" style={{width:'150px', height:'45px'}}/> 
                            </Grid>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                    <Box sx={style}>
                                        <Grid container sx={{width:'100%', height:'60px', display:'flex', justifyContent:'center'}}>
                                            <img src={logo} alt="logo" style={{width:'150px' , height:'50px'}}/>
                                        </Grid>
                                        <Grid container bgcolor='#f1f4f6'py={3} sx={{display:'flex' , flexDirection:'column', justifyContent:'center' ,textAlign:'center'}}>
                                            <Typography variant="h5" sx={{lineHeight:'35px'}}>
                                                به بیت برگ خوش آمدید.
                                            </Typography>
                                            <Typography sx={{marginBottom:'50px'}}>
                                                برای ورود یا ثبت نام، لطفا شماره موبایل خود را وارد کنید.
                                            </Typography>
                                            <TextField label="شماره تلفن" defaultValue={"۰۹xx xxx xxxx"}  variant='outlined' sx={{width:'90%', margin:'0 auto'}}/>
                                            <Button disabled sx={{width:'90%', backgroundColor:'#2e5da9', color:'#fff', margin:'0 auto',marginTop:'30px'}}>ادامه</Button>
                                        </Grid>
                                    </Box>
                                </Fade>
                            </Modal>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header;