
import { Box, Image, Text } from "@chakra-ui/react"
import { useState } from "react";












export default function WomenProductBox({
 img1,img2,brand,category,type,desc,price
}){

   
    const [oneImg,setIMAGE]=useState(img1)

    const handleMouseEnter = () => {
       
        setIMAGE(img2)
      };
    

  const handleMouseLeave = () => {
    setIMAGE(img1)
   
  };


   return(
       <>
       <Box style={{textAlign:"left", }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
       <Image  src={oneImg}  style={{width:"250px",height:"300px"}}  />
       <Text>{brand}</Text>
       <Text>{category}</Text>
       <Text style={{color:"red"}}>$ {price}</Text>
        </Box>

       </>
   )
}