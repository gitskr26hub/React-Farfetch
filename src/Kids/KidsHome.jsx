import {Button, Box} from "@chakra-ui/react"
import { Link } from "react-router-dom"

import "./kidshome.css"

function KidsNavbar(){

    return(
      
                <Box style={{display:"flex",gap:"20px",marginBottom:"30px"}}>
               <Link to="">    <Button> Sale</Button></Link>
                    <Link to=""><Button>New In</Button></Link>
                  
                    <Link to=""><Button>Brands</Button></Link>
                    <Link to=""><Button>Baby (0-36mths)</Button></Link>
                    <Link to=""><Button>Kids (2-12years)</Button></Link>
                    <Link to=""><Button>Teen (13-16years)</Button></Link>
                   
                </Box>)}



 export default function KidsHome(){

    return(
        <>
       
          <KidsNavbar/>


          <a href="../kidsOptions/teen.html" id="fPart" style="text-decoration:none;">
        <img src="https://cdn-static.farfetch-contents.com/cms-cm/in/media/2247770/data/a11b74d71d5abd74b65f8adbe785056a.png?ratio=1x1_messaging-side&minWidth=637"/>
        <div  id="fDisc">
            <img src="../images/sale.jpg"/>
            <button id="shopButton" class="firstButton hoverButton" style="text-decoration:none;">Shop Now</button>
        </div>
    </a>
    
    <div href="../kidsOptions/kids.html" id="fPart">
        <div id="sDisc">
            <div id="sText">
                <h1>
                    Big brands for big personalities
                    </h1>
                <p>Responsibly made pieces from iconic names, featuring Burberry, Stella  McCartney and more </p>
                <button id="shopButton" class="hoverButton">Shop Now</button>
            </div>
        <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3600044/data/bcb1ea5e0e1d45ba9a9b593e971bba17/1x1_messaging-side/637/data"/>
        </div>
    </div>

    <h3 id="h3">The best of new in</h3>
    <div id="hoverProducts">
        
    </div>
   
    <button id="shopButton" class="hoverButton">Shop Now</button>


    <div href="../kidsOptions/baby.html" id="tPart">
        <div id="tDisc">
           <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3600366/data/a53e8df38883c20412a193efc656002c/1x1_two-columns/637/data"/>
           <p>THE NURSERY EDIT</p>
           <p>From Gucci changing bags to Chloé bottles</p>
        </div>
        <img id="johnHardy" src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3600380/data/305d8f89e9388c09fc7954aa39b795d0/1x1_two-columns/637/data"/>
    </div>

  
   
    <h3 id="h3">Trending now</h3>
   
    <div id="highlights">
        
    </div>

   
    
    <div id="container"></div>

     <button id="shopButton" class="hoverButton">Shop Now</button>

     
     <div id="stoneIsland">
        <div>
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3600434/data/f8cdaae0a0d92dc1d36bc9c18ba40741/1x1_two-columns/637/data"/>
            <p>THE MODERN FEMININITY EDIT</p>
            <p>Dreamy silhouettes and muted palettes</p>
        </div>
        <div>
            <img src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3600442/data/8f7136c5c69897e127493571e70f7c46/1x1_two-columns/637/data"/>
            <p>TIME CLASSIC EDIT</p>
            <p>Timeless pieces to love forever</p>
        </div>
       
    </div>
\


        </>
    )
}