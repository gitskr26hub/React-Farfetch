
import { Box, Image, Text } from "@chakra-ui/react"












export default function WomenProductBox({
 img1,img2,brand,category,type,desc,price
}){


   return(
       <>
       <Box style={{textAlign:"left"}}>
       <Image  src={img1}  style={{width:"200px",height:"300px"}}  />
       <Text>{brand}</Text>
       <Text>{category}</Text>
       <Text style={{color:"red"}}>$ {price}</Text>
        </Box>

       </>
   )
}