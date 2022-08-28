import { Box, Heading,Select,Text,Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


 

 
 
 
 export default function Home(){




    return (<>


<div id="allDepartments">
    <Heading>Choose a Department</Heading>
</div>
  <div id="departments" style={{display:"flex",gap:"40px",margin:"auto",width:"90%"}}>

  <Link to="/womenhome"> 
    <div id="women">
        <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/1358584/data/3e1fa8601c3b054126db727190907134/16x9_three-columns/480/data" alt=""/>
        <Heading>SHOP WOMEN</Heading>
    </div></Link>


    <Link to="/manhome"> 
    <div id="men">
        <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/1358582/data/79d650ec078a16ebb376d1b3e0c982d3/16x9_three-columns/480/data" alt=""/>
        <Heading>SHOP MEN</Heading>
    </div></Link>


    <Link to="/kidshome"> 
    <div id="kids"><a >
        <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3485568/data/f7dda851843a12916bada7c705c0e823/16x9_three-columns/480/data" alt=""/>
        <Heading>SHOP KIDS</Heading>
    </a></div></Link>
</div>


<Box style={{display:"flex",width:"60%",margin:"auto",marginTop:"100px",marginBottom:"100px",gap:"100px",textAlign:"left"}}>
    <Box>
     <Text><Heading>Featured brands</Heading></Text>
     <Stack style={{width:"500px"}}>
     <Select placeholder='MEN' size='lg'  >
                    <option>Comme Des Garçons Play</option>
                    <option>Brunello Cucinelli</option>
                    <option>TOM FORD Eyewear</option>
                    <option>Thom Browne</option>
                    <option>visvim</option>
                    <option>Buscemi</option>
                    <option>Raf Simons</option>
                    <option>Axel Arigato</option>
                    <option>Greg Lauren</option>
                    <option>Homme Plissé Issey Miyake</option>
                    <option>Casablanca</option>
                    <option>Pringle of Scotland</option>
                    <option>Mastermind Japan</option>
                    <option>MCM</option>
                    <option>Maison Kitsuné</option>
                    <option>Grenson</option>

     </Select>
     <Select placeholder='WOMEN' size='lg' >
     <option>Paris Texas</option>
                    <option>Canada Goose</option>
                    <option>Amina Muaddi</option>
                    <option>Self-Portrait</option>
                    <option>Amen</option>
                    <option>MCM</option>
                    <option>Stella McCartney</option>
                    <option>Issey Miyake</option>
                    <option>Jacquemus</option>
                    <option>Comme Des Garçons</option>
                    <option>Aquazzura</option>
                    <option>Herno</option>
                    <option>Gianvito Rossi</option>
                    <option>LoveShackFancy</option>
                    <option>Valextra</option>
                    <option>ETRO</option>

     </Select>
     <Select placeholder='KIDS' size='lg' >
     <option>Fendi Kids</option>
                    <option>Gucci Kids</option>
                    <option>Golden Goose Kids</option>
                    <option>Givenchy Kids</option>
                    <option>Moschino Kids</option>
                    <option>Dolce & Gabbana Kids</option>
                    <option>Burberry Kids</option>
                    <option>Balmain Kids</option>
                    <option>Il Gufo</option>
                    <option>Versace Kids</option>
                    <option>The Marc Jacobs Kids</option>
                    <option>Alexander McQueen Kids</option>
                    <option>Adidas Yeezy Kids</option>
                    <option>Balenciaga Kids</option>
     </Select>
     </Stack>



    </Box>
    <Box>
    <Text><Heading>Trending now</Heading></Text>
    <Stack style={{width:"500px"}}>
     <Select placeholder='MEN' size='lg' >
     <option>Jordan Low-Tops</option>
                    <option>Off-White T-Shirts</option>
                    <option>Common Projects Shoes</option>
                    <option>Fendi Belts</option>
                    <option>Rick Owens Shoes</option>
                    <option>Brioni Glasses & Frames</option>
                    <option>Versace Shirts</option>
                    <option>Palm Angels Hoodies</option>
                    <option>Lanvin Sneakers</option>
                    <option>Represent Clothing</option>
                    <option>Maison Margiela Shoes</option>
                    <option>MCM Backpacks</option>
                    <option>Sebago Shoes</option>
                    <option>Supreme Hoodies</option>
                    <option>Palm Angels Pants</option>
                    <option>Moncler T-Shirts</option>

     </Select>
     <Select placeholder='WOMEN' size='lg' >
     <option>Gucci Belts</option>
                    <option>ZIMMERMANN Skirts</option>
                    <option>Vivienne Westwood Jewelry</option>
                    <option>Prada Shoulder Bags</option>
                    <option>Jimmy Choo Clutch Bags</option>
                    <option>ZIMMERMANN Blouses</option>
                    <option>Isabel Marant Sneakers</option>
                    <option>GANNI Boots</option>
                    <option>Hogan Shoes</option>
                    <option>Stella McCartney Tote Bags</option>
                    <option>Emilio Pucci Dresses</option>
                    <option>Moncler Shoes</option>
                    <option>Fendi Beachwear</option>
                    <option>Proenza Schouler Dresses</option>
                    <option>Fendi Bag Accessories</option>
                    <option>Cinq A Sept Dresses</option>

     </Select>
     <Select placeholder='KIDS' size='lg' >
                    <option>Moncler Enfant Clothing for Baby Boys</option>
                    <option>Gucci Kids T-Shirts for Boys</option>
                    <option>Moschino Kids Clothing for Baby Girls</option>
                    <option>Moncler Enfant Hats for Boys</option>
                    <option>Gucci Kids Shoes for Boys</option>
                    <option>Gucci Kids Clothing for Baby Girls</option>
                    <option>Givenchy Kids Clothing for Baby Boys</option>
                    <option>Versace Kids Shoes for Boys</option>
                    <option>Gucci Kids Jackets for Boys</option>
                    <option>Moon Boot Kids Shoes for Girls</option>
                    <option>Burberry Baby Boy Clothing</option>
                    <option>Gucci Kids Clothing for Baby Boys</option>
                   <option>Moschino Kids Girls Shoes</option>
                    <option>Burberry Baby Girl Clothing</option>
                    <option>KENZO Kids Clothing for Baby Boys</option>
                    <option>Burberry Girls' Shoes</option>

     </Select>
     </Stack>
    </Box>



</Box>






    </>)
 }