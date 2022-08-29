import {Button, Box} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import  "./manPage.css"

export  function ManNavbar(){
    return(
        <Box style={{display:"flex",gap:"20px",marginBottom:"30px"}}>
       <Link to="">    <Button> Sale</Button></Link>
            <Link to=""><Button>New In</Button></Link>
            <Link to=""><Button>Shop By</Button></Link>
            <Link to=""><Button>Brands</Button></Link>
            <Link to=""><Button>Clothing</Button></Link>
            <Link to=""><Button>Shoes</Button></Link>
            <Link to=""><Button>Sneakers</Button></Link>
            <Link to=""><Button>Bags</Button></Link>
            <Link to=""><Button>Accessories</Button></Link>
            <Link to=""><Button>Watch</Button></Link>
        </Box>

    )
 }



export default function ManHome(){

    return(<>
<Link to="/manproducts">
       <ManNavbar/>

    <Link to="/manproducts" id="fPart">
        <img src="https://cdn-static.farfetch-contents.com/cms-cm/in/media/2247770/data/a11b74d71d5abd74b65f8adbe785056a.png?ratio=1x1_messaging-side&minWidth=637"/>
        <div  id="fDisc">
            <img src="../images/sale.jpg"/>
            <button id="shopButton" class="firstButton hoverButton">Shop Now</button>
        </div>
    </Link>
    
    <Link to="/manproducts">
    <div  id="fPart">
        <div id="sDisc">
            <div id="sText">
                <h1>FARFETCH BEAT is here</h1>
                <p>Introducing BEAT: exclusively curated releases created in collaboration with the most progressive voices in fashion and culture, only on FARFETCH. For BEAT 001, Opening Ceremony’s iconic varsity jacket is reimagined by designer Peter Do using upcycled parachute material from his very first show — get yours now</p>
                <button id="shopButton" class="hoverButton">Shop Now</button>
            </div>
<img src="https://cdn-static.farfetch-contents.com/cms-cm/in/media/3597892/data/eb5c5cd180cb9f08a85fec52aaca5e80.png?ratio=1x1_messaging-side&minWidth=637"/>

</div>
    </div>
</Link>

    <div href="../navOptions/clothing.html" id="tPart">
        <div id="tDisc">
           
<img src="https://cdn-static.farfetch-contents.com/cms-cm/in/media/3598914/data/eea04de7c0a5e9256dbdf48cc6984280.jpg?ratio=1x1_two-columns&minWidth=637"/>
<p>FROM THE VALULT : THE WORLD'S MOST COVETED TIMEPIECES</p>
           <p>The designs you know, from the iconic names you love — this is your ultimate watch wish list. Our expert guest editor @dimepiece.co shares the attributes that make these timepieces so unique and why you should invest now</p>
        </div>
        <img id="johnHardy" src="../images/JohnHardy.png"/>
    </div>

    <h3 id="h3">New in: hand-picked daily from the world’s best brands and boutiques</h3>
    <div id="hoverProducts">
        
    </div>
   
    <button id="shopButton" class="hoverButton">Shop Now</button>
   
    <h3 id="h3">This week's highlights</h3>
   
    <div id="highlights">
        
    </div>

    <h3 id="h3">Trending new-season polo shirt</h3>

    <div id="container"></div>

     <button id="shopButton" class="hoverButton">Shop Now</button>

     <h3 id="h3">Shop the world’s best boutiques</h3>
     <div id="stoneIsland">
        <div>
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3598832/data/19399db0ae079fba34a64d650e8929b9/3x4_three-columns/480/data"/><p>STONE ISLAND</p>
            <p>Now in sunshine-ready hues</p>
        </div>
        <div>
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3598846/data/fca84059e1061e6f9cf7c1ef65c87844/3x4_three-columns/480/data"/> <p>THE MINIMALIST EDIT</p>
            <p>Clean lines and pared-back styles</p>
        </div>
        <div>
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3598868/data/ec1fb73b3dfea7ee573095d1101cb920/3x4_three-columns/480/data"/>
            <p>THE CULT EDIT</p>
            <p>Cutting-edge pieces and experimental design</p>
        </div>
    </div>

</Link>
        
    </>)
}




