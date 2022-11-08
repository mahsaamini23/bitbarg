import React from 'react';
import {useState , useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import {handleGetDataCoins} from "../../api/api";
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import Typography from '@mui/material/Typography';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const MainTable=()=>{

    const [coins , setCoins] = useState([])

    const handleGetData = async () => {
        const data = await handleGetDataCoins()
        setCoins(data.data) 
    }
    console.log(coins)
    
    useEffect(()=>{
        handleGetData()
    },[])

    return(
    <div>
        <Grid container sx={{width:'80%', margin:"0 auto", display:'flex', flexDirection:'column'}}>
            <Grid   sx={{display:'flex', flexDirection:'row', gap:'5px'}}>
                <Grid >
                    <InsertChartOutlinedIcon color="success" sx={{fontSize:40}}/>
                </Grid>
                <Grid >
                    <Typography>قیمت لحظه ای</Typography>
                    <Typography>در ۲۴ ساعت گذشته</Typography>
                </Grid>
            </Grid>
            <Grid sx={{margin:'30px 0'}}>
                <Grid sx={{width:'35%',height:'43px', borderRadius:'5px', backgroundColor:'#fafafa', display:'flex', flexDirection:'row'}}>
                    <Grid container sx={{width:'48%',height:'36px', borderRadius:'3px', backgroundColor:'#FFF',margin:'3px auto',justifyContent:'center', alignContent:'baseline',paddingTop:'6px'}}>
                        <TrendingUpIcon color="success"/>
                        <Typography sx={{textAlign:'center'}}>
                            بیشترین رشد
                        </Typography>
                    </Grid>
                    <Grid container sx={{width:'48%',height:'36px', borderRadius:'3px', backgroundColor:'#FFF',margin:'3px auto',justifyContent:'center', alignContent:'baseline',paddingTop:'6px'}}>
                        <TrendingDownIcon color="warning" />
                        <Typography sx={{textAlign:'center',}}>
                            کمترین رشد
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
           
            <TableContainer >
                <Table>
                    <TableHead>
                        <TableRow sx={{backgroundColor:"#fafafa"}}>
                            <TableCell align="right">ارز دیجیتال</TableCell>
                            <TableCell align="right">قیمت خرید</TableCell>
                            <TableCell align="right">قیمت فروش</TableCell>
                            <TableCell align="right">تغییرات</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {coins.map((coin,index)=>(
                            <TableRow key={index}>
                                <TableCell align="right">{coin.name}</TableCell>
                                <TableCell align="right">{coin.current_price}</TableCell>
                                <TableCell align="right">{coin.current_price}</TableCell>
                                <TableCell align="right">{coin.price_change_percentage_24h}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    </div>
)}

export default MainTable;