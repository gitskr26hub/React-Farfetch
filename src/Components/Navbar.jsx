import { Box,Input,Image, Button, Heading } from "@chakra-ui/react";

import PermIdentityIcon from '@mui/icons-material/PermIdentity';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import { Link } from "react-router-dom";


export default  function Navbar(){
    return     (<>
    <Box >
    <Box style={{display:"flex",justifyContent:"space-between",margin:"auto",gap:"10px",width:"80%",top:"0",position:"sticky",height:"70px",marginTop:"20px"}}>
    <Box id="category">
         <Link to="/womenhome"><Button > <Heading as='h5' size='sm'>
    Women
  </Heading></Button></Link>
         <Link to="/manhome"><Button > <Heading as='h5' size='sm'>
    Men
  </Heading></Button></Link>


         <Link to="/kidshome"><Button > <Heading as='h5' size='sm'>
    Kids
  </Heading></Button></Link>
         
    </Box>
    <Box id="title">
     <Link to="/"><Heading as='h2' size='2xl'>FARFETCH</Heading>   </Link>
    </Box>

    <Box id="navigation" style={{display:"flex",gap:"50px",marginLeft:"100px"}}>
         <Box class="icons"><FlagCircleIcon/></Box>
         <Box class="icons"><Link to="/login"><PermIdentityIcon/></Link></Box>
         <Box class="icons"><Link to=""><FavoriteBorderIcon/></Link>
         <span id="countFav"></span></Box>
         <Box class="icons"><a href="../../Cart Page/cart/cart.html"><WorkOutlineIcon/></a>
         <span id="countCart"></span></Box>
    </Box>
 </Box>
 <Box id="search-bar" style={{paddingLeft:"70%",paddingRight:"10%",position:"sticky"}}>
     <Input style={{marginRight:"30%"}} type="text" id="search" placeholder="Search" class="form-control"/>
    
 </Box>

</Box>


 </>);
}