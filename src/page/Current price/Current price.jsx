import React,{useState, useEffect} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {handleGetDataCoins} from "../../api/api";


const CurrentPrice=()=>{
    const [coins , setCoins] = useState([])
    const [star, setStar] = useState(false)
    const [search , setSearch] = useState("")

    const handleGetData = async () => {
        const data = await handleGetDataCoins()
        setCoins(data.data) 
    }
    
    useEffect(()=>{
        handleGetData()
    },[])

    const handleStar = ()=>{
        setStar(current=>!current)
    }

    return(
        <Grid container bgcolor='#eeeeee'>
            <Grid container item p={2} sx={{ width:'80%',height:'200px',margin:'30px auto', backgroundColor:'#fff', borderRadius:'8px',display:'flex', flexDirection:'column'}}>
                <Grid my={2} sx={{display:'flex', alignItems:'baseline', gap:'15px',}}>
                    <Typography variant={'h5'}>قیمت لحظه ای</Typography>
                    <Typography>ارز دیجیتال</Typography>
                </Grid>
                <Grid container sx={{display:'flex',width:'100%', gap:'10px', justifyContent:{sx:'column', md:'row'}}}>
                    <Grid sx={{display:'flex', alignContent:'baseline',gap:'5px', border:'1px solid #bdbdbd', width:{xs:'90%',md:'30%'}, height:'40px', borderRadius:'3px'}}>
                        <SearchIcon sx={{color:'#bdbdbd', margin:'6px 3px'}}/>
                        <input type="search" onChange={(e)=>setSearch(e.target.value)} placeholder="جستجو" style={{border:'none'}} />
                    </Grid>
                    <Grid container sx={{display:'flex', alignContent:'baseline' , border:'1px solid #bdbdbd', width:'30%', height:'40px',borderRadius:'3px'}}>
                        <StarBorderIcon sx={{color:'#bdbdbd', margin:'6px 3px'}}/>
                        <Typography p={1}>
                            نشان شده ها
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <TableContainer>
                <Table>
                <TableHead>
                        <TableRow sx={{backgroundColor:"#e0e0e0"}}>
                            <TableCell align="right">ارز دیجیتال</TableCell>
                            <TableCell align="right">قیمت خرید</TableCell>
                            <TableCell align="right">قیمت فروش</TableCell>
                            <TableCell align="right">تغییرات</TableCell>
                            <TableCell align="right">نشان کردن</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {coins.filter(coin => search === "" ? coin : coin.name.toLowercase().includes(search.toLowercase()))
                        .map((coin , index)=>(
                            <TableRow key={index}>
                                <TableCell align="right">{coin.name}</TableCell>
                                <TableCell align="right" sx={{display:{sx:'block', md:'none'}}}>
                                    <Grid sx={{display:'flex', flexDirection:'column'}}>
                                        <Typography>{coin.current_price}</Typography>
                                        <Typography>{coin.current_price}</Typography>
                                    </Grid>
                                </TableCell>
                                <TableCell align="right" sx={{display:{xs:'none', md:'block'}}}>{coin.current_price}</TableCell>
                                <TableCell align="right" sx={{display:{xs:'none' , md:'block'}}}>{coin.current_price}</TableCell>
                                <TableCell align="right" sx={{display:{xs:'none',md:'block'}}}>{coin.price_change_percentage_24h}</TableCell>
                                <TableCell align="right" onClick={()=>handleStar}>{star === true ? <StarBorderIcon sx={{color:'#ffff00'}}/>:<StarBorderIcon/>}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

export default CurrentPrice;