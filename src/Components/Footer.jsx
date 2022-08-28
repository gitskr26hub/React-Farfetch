import { Box ,Heading,Image,Input,Text } from '@chakra-ui/react'

import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';

import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';




function GuideSection(){
    return (<Box style={{display:"flex",width:"60%",margin:"auto",gap:"20px"}}>

        <Box  style={{border:"box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"}} >
        
        <CheckroomOutlinedIcon/>
        <Text className="text-uppercase my-2">How to shop</Text>
        <p>Your guide to shopping and placing orders</p>
    </Box>
    <Box style={{border:"box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"}} >
           <HelpOutlineOutlinedIcon/>
        <p className="text-uppercase my-2">faqs</p>
        <p>Your questions answered</p>
    </Box>
    <Box style={{border:"box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"}} >
       <ChatBubbleOutlineOutlinedIcon/>
        <p className="text-uppercase my-2">need help?</p>
        <p>Contact our global Customer Service Team</p>
    </Box>
    </Box>);
    }
    


    function AppContainer(){
        return ( <Box style={{width:"40%",margin:"auto", marginTop:"100px",textAlign:"left"}}>
        <Box className="">
        <Heading className="text-uppercase">Download the farefetch app</Heading>
        <p>Enjoy exclusive content on our app, including personalized product edits as well as our Visual Search tool for iOS. <a href="">More about the app</a></p>
    </Box>
    <Box className="app-section d-flex" style={{display:"flex"}}>
        <Box className="email-input" >
        <p className="text-uppercase">Email Me</p>
        <p>Enter your email and we'll send you a link to download the free app</p>
        <form action="" style={{display:"flex"}}>
            <Input className="form-control" type="email" placeholder="Email address" required />
            <input className="mx-2" type="submit" value="Send" id="btn" 
            style={{backgroundColor:"black",color:"white",borderRadius:"10%"}}/>
        </form> 
    </Box>
        
         <Box className="QR" style={{paddingLeft:"20px"}}>
            <p className="text-uppercase">scan qr code</p>
            <Image 
        src="https://media.blackandwhite-ff.com/10000/2a0d5342-2544-4898-b2d4-8272235868d6_qr.png" alt="" 
           style={{height:"100px",width:"100px"}}  />
     </Box>
    </Box>
    </Box>)
    }
    
    function AboutContainer(){
        return(
        <Box style={{marginTop:"100px",backgroundColor:"#000009",color:"white",}}>

         <Box  style={{display:"flex",paddingTop:"20px",gap:"10%",paddingLeft:"50px",paddingRight:"50px"   }}>
         {/* box 1 */}
        <Box style={{width:"28%",textAlign:"left"}}>
            <Text >farfetch app</Text><br/>
            <Text>Farfetch App for iOS and Andriod</Text><br/>
           <Text> SHOP NEW IN</Text><br/>
            <Text  as='sub'>Dsquared2 logo print sweatshirt</Text><br/>
            <Text  as='sub'>Louis Vuitton pre-owned Cabas Mezzo tote bag</Text><br/>
            <Text  as='sub'>Koio Portofino canvas low-top sneakers</Text><br/>
 <Text  as='sub'>Thom Browne intarsia-knit cashmere vest top Chanel Pre-Owned 1995 CC diamond-quilted vanity bag
DISCOVER MORE Alberto Fasciani Shoes OpéraSPORT Dresses Patou Accessories PUCCI Soft Furnishings View More</Text>
        </Box>
 {/* box 2 */}
        <Box  style={{textAlign:"left"}}>
            <p className="text-uppercase">Destination/Region, currency and language</p>
            <p><Image className="mr-1" src="./icons/icons8-india-38.png" alt=""/>India, USD $</p>
            <p className="text-uppercase">follow us</p>

            <Box  style={{display:"flex",gap:"15px"}}>

        <a href="https://www.instagram.com/learnbuildteach">
          <Image src="https://img.icons8.com/color/344/instagram-new--v1.png" style={{width:"25px"}} alt=""/>
      </a> 

      <a href="https://www.facebook.com/learnbuildteach/" >
      <Image src="https://img.icons8.com/color/344/facebook-new.png" style={{width:"25px"}} alt=""/>
       
      </a>

      <a href="https://www.twitter.com/jamesqquick" >
      <Image src="https://img.icons8.com/color/344/twitter--v1.png" style={{width:"25px"}} alt=""/>
      </a>
      
      <a href="https://www.snapchat.com" >
           <Image src="https://img.icons8.com/doodle/344/snapchat.png" style={{width:"25px"}} alt=""/>
      </a>
      <a href="https://in.pinterest.com/" >
          <Image src="https://img.icons8.com/color/344/pinterest--v1.png" style={{width:"25px"}}/>
      </a>

      <a href="https://www.youtube.com/c/jamesqquick"
       >
           <Image src="https://img.icons8.com/color/344/youtube-play.png" style={{width:"25px"}} alt=""/>
      </a>
             
               
            
            </Box>
          </Box>
        
        <Box style={{textAlign:"left"}} >
            <br/><Text  >Customer Service</Text>
            <br/><Text  as='sub'>Contact us</Text>
            <br/><Text  as='sub'>Order & delivery</Text>
            <br/><Text  as='sub'>Payment & pricing</Text>
            <br/><Text  as='sub'>Returns & refunds</Text>
            <br/><Text  as='sub'>FAQs</Text>
            <br/><Text  as='sub'>Terms & conditions</Text>
            <br/><Text  as='sub'>Promotion terms & conditions</Text>
            <br/><Text  as='sub'>Privacy policy</Text>
            <br/><Text  as='sub'>Accessibility</Text>
        </Box>

        <Box style={{textAlign:"left"}}>
            <br/><Text >About Farfetch</Text>
            <br/><Text  as='sub'>About us</Text>
            <br/><Text  as='sub'>Investors</Text>
            <br/><Text  as='sub'>Boutique Partners</Text>
            <br/><Text  as='sub'>Affiliate Programme</Text>
            <br/><Text  as='sub'>Student discount UNiDAYS</Text>
            <br/><Text  as='sub'>Youth discount</Text>
            <br/><Text  as='sub'>Careers</Text>
            <br/><Text  as='sub'>Customer Promise</Text>

            <br/><Text  as='sub'>FARFETCH App</Text>
            <br/><Text  as='sub'>Sitemap</Text>
            <br/><Text  as='sub'>Positively FARFETCH</Text>
        </Box>
       

       </Box>



    <Box style={{paddingTop:"30px"}} >
        <Text style={{display:"block"}} as='sup'>'FARFETCH' and the 'FARFETCH' logo are trade marks of FARFETCH UK Limited and are registered in numerous jurisdictions around the world.</Text>
        <Text  as='sup'>© Copyright 2022 FARFETCH UK Limited. All rights reserved.</Text>
    </Box>

    </Box>)
    }




    
    


  export  function Footer(){
        return(
            <>
           <GuideSection/>
           <AppContainer/>
           <AboutContainer/>
                
                
            </>
        )
    }

