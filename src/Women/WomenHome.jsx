
import "./womenHome.css"

import {Button, Box, } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export  function WomenNavbar(){
    return(
        <Box style={{display:"flex",gap:"15px",marginBottom:"30px"}}>
            <Link to=""><Button> Sale</Button></Link>
            <Link to=""><Button>New In</Button></Link>
            <Link to=""><Button>Shop By</Button></Link>
            <Link to=""><Button>Brands</Button></Link>
            <Link to=""><Button>Clothing</Button></Link>
            <Link to=""><Button>Shoes</Button></Link>
            <Link to=""><Button>Jewelry</Button></Link>
            <Link to=""><Button>Bags</Button></Link>
            <Link to=""><Button>Accessories</Button></Link>
            <Link to=""><Button>Pre-Owned</Button></Link>
        </Box>

    )
 }








export default function WomenHome(){
    return(
        <>
 <WomenNavbar/>


<Link to="/womenproducts" id="fPart">
        <img src="https://cdn-static.farfetch-contents.com/cms-cm/in/media/2247770/data/a11b74d71d5abd74b65f8adbe785056a.png?ratio=1x1_messaging-side&minWidth=637"/>
        <div  id="fDisc">
            <img src="../images/sale.jpg"/>
            <button id="shopButton" class="firstButton hoverButton">Shop Now</button>
        </div>
    </Link>
    
  <Link  to="/womenproducts"  >
    <div  id="fPart">
        <div id="sDisc">
            <div id="sText">
                <h1>New accessory alert: sandals, shades, bags and more</h1>
                <p>Introducing BEAT: exclusively curated releases created in collaboration with the most progressive voices in fashion and culture, only on FARFETCH. For BEAT 001, Opening Ceremony’s iconic varsity jacket is reimagined by designer Peter Do using upcycled parachute material from his very first show — get yours now</p>
                <button id="shopButton" class="hoverButton">Shop Now</button>
            </div>
        <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3611612/data/7f5788667bed7893291e7dafa62859f3/1x1_messaging-side/637/data"/>
         </div>
    </div>
</Link>  


<Link  to="/womenproducts"  >
    <div  id="tPart">
        <div id="tDisc">
           <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3611674/data/cd5c29ae57c80140b12abd0ab5c24c0c/1x1_two-columns/637/data"/>
           <p>THIS JUST IN: OFF-WHITE X GINORI 1735 HOMEWARE</p>
           <p>Off-White’s signature cult logos. Ginori 1735’s centuries-old craftsmanship. A limited-edition homeware collection to elevate your space</p>
        </div>
        <img id="johnHardy" src=".." />
    </div>
</Link> 



    <h3 id="h3">New in: hand-picked daily from the world’s best brands and boutiques</h3>
    <div id="hoverProducts">
        
    </div>
   
    <button id="shopButton" class="hoverButton">Shop Now</button>
   
    <h3 id="h3">This week's highlights</h3>
   
    <div id="highlights">
        
    </div>

    <h3 id="h3">Trending new-season polo shirt</h3>

    <div id="container"></div>

 <Link to="/womenproducts"><button id="shopButton" class="hoverButton">Shop Now</button></Link>

     <h3 id="h3">Shop the world’s best boutiques</h3>
     <div id="stoneIsland">
        <div>
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3611708/data/2d598fad064433d2bc95f02c2b0382a2/3x4_three-columns/480/data"/>
            <p>THE MODERN FEMININITY EDIT</p>
            <p>Dreamy silhouettes and muted palettes</p>
        </div>
        <div>
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3598846/data/fca84059e1061e6f9cf7c1ef65c87844/3x4_three-columns/480/data"/>
            <p>TIME CLASSIC EDIT</p>
            <p>Timeless pieces to love forever</p>
        </div>
        <div>
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3598868/data/ec1fb73b3dfea7ee573095d1101cb920/3x4_three-columns/480/data"/>
            <p>THE EXPRESSIONST EDIT</p>
            <p>Cult collaborations and exciting launches</p>
        </div>
    </div>




        </>
    )
}