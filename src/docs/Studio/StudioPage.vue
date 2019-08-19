<template>
  <div class="wrapper">
       <mdb-carousel :interval="8000" showControls showIndicators  height="300">
          <mdb-carousel-item img src="/static/studio2.png" alt="First slide" />
         <mdb-carousel-item img src="/static/studio3.png" alt="First slide" />
         <mdb-carousel-item img src="/static/studio4.png" alt="First slide" />
         <mdb-carousel-item img src="/static/studio5.png" alt="First slide" />
         <mdb-carousel-item img src="/static/studio6.png" alt="First slide" />
       
     </mdb-carousel>

    <hr class="my-3"/>
  <div style="background-color:#ffffff">
    <section class=" container mt-2">
   <h1 class="font-weight-bold  text-center py-3  " >Our Services</h1>
   <p class="black-text text-center" style="font-size:30px">
     Our primary focus is to create an uplifting customer experience through exceptional service.
     Avakenn Studio Services provides rigging equipment to the entertainment industry in Film, TV, Commercial, Live Event or Trade Show. Our unique perspective is our continued hands-on guidance.
     </p> 
    <mdb-row class="mt-4">
      
     <mdb-container>
       <mdb-row>
      <mdb-col md="4">
   
        <mdb-card class="card-image" style="background-image: url(/static/Audio.jpg)">
          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 class="white-text" >
                <mdb-icon icon="file-audio fa fa-4x" style="color:white" /> </h5>
               <ul class="list-unstyled">
                <li>  <mdb-icon  icon="angle-double-right"/> Audio Mixing</li>
                <li>  <mdb-icon  icon="angle-double-right"/> CD / DVD Plate Burning</li>
                <li>  <mdb-icon  icon="angle-double-right"/> Audio Recording</li>
              </ul>
            </div>
          </div>
        </mdb-card>
       
      </mdb-col>
       <mdb-col md="4">
           <mdb-card class="card-image" style="background-image: url(/static/video.jpg)">
          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 class="white-text" style="color:white">
                <mdb-icon icon="file-video fa fa-4x" style="color:white" /> </h5>
             <ul class="list-unstyled">
                <li> <mdb-icon  icon="angle-double-right"/>   Video Editing</li>
                <li> <mdb-icon  icon="angle-double-right"/>  Enhanced Video Editing</li>
                <li> <mdb-icon  icon="angle-double-right"/> video coverage</li>
              </ul>
              
            </div>
          </div>
        </mdb-card>
        
      </mdb-col>
       <mdb-col md="4">
           <mdb-card class="card-image" style="background-image: url(/static/lab.jpg)">
          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 class="white-text" style="color:white">
                <mdb-icon icon="camera fa fa-4x" style="color:white"/> </h5>
                <ul class="list-unstyled">
                  <li> <mdb-icon  icon="angle-double-right"/> Photo Lab Services</li>
                  <li> <mdb-icon  icon="angle-double-right"/> Pix mix </li>
                  <li> <mdb-icon  icon="angle-double-right"/>  Album Cover Design</li>
                </ul>
             
            </div>
          </div>
        </mdb-card>
       
      </mdb-col>
      </mdb-row>
     </mdb-container>
    </mdb-row>
  </section>
    </div>
  <div class="spacer">
    &nbsp;
  </div>
     <section style="background-color:#b2dfdb ">
   <h3 class="font-weight-bold text-center py-5 ">Contact Us</h3>
   <mdb-container>
         <mdb-edge-header class=" py-5" style="background-color:#3E4095"/>
        <div class="free-bird">
        <mdb-row>
          <mdb-col md="10" class="mx-auto float-none white z-depth-1 py-2 px-2">
            <mdb-card-body >
              
              <mdb-row class="d-flex flex-row justify-content-center">
               
                <mdb-col>
                  <div class="boot">
                     <h3 class="my-4 pb-2">Contact information</h3>
                  <ul class="list-unstyled ml-4">
                    <li>
                      <mdb-icon icon="map-marker" class="pr-2"/>
                      <p>No. 6 Dzeremo Gbaa Street Gboko Benue State</p>
                    </li>
                    <li>
                      <mdb-icon icon="phone" class="pr-2"/>
                      <p>
                        + 234 7034994623
                        <br/>
                        + 234 8138848003
                        </p>
                     
                    </li>
                    <li>
                      <mdb-icon icon="envelope" class="pr-2"/>
                      <p>infor@avakenn.com</p>
                    </li>
                  </ul>
                  <hr class="hr-light my-4"/>
                  <ul class="list-inline text-center list-unstyled">
                    <li class="list-inline-item">
                      <a class="p-2 fa-lg w-ic">
                        <mdb-icon fab icon="twitter"/>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="p-2 fa-lg w-ic">
                        <mdb-icon fab icon="linkedin"/>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="p-2 fa-lg w-ic">
                        <mdb-icon fab icon="instagram"/>
                      </a>
                    </li>
                  </ul>
                    </div>
                </mdb-col>
              </mdb-row>
            </mdb-card-body>
          </mdb-col>
        </mdb-row>
      </div>
      </mdb-container>
  </section>
  
 <hr class="my-5 mt-4"/>
   
  </div>
</template>
<script>
import {  mdbEdgeHeader, mdbTestimonial, mdbCard, mdbCardBody, mdbCardUp, mdbAvatar, mdbGoogleMap, mdbCarousel, mdbCarouselItem, mdbContainer, mdbRow, mdbCol, mdbIcon, mdbJumbotron, mdbListGroup, mdbNavItem } from 'mdbvue';

export default {
  name: 'BootCampPage',
  components: {
    mdbGoogleMap,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbJumbotron,
    mdbListGroup,
    mdbNavItem,
    mdbCarousel,
    mdbCarouselItem,
    mdbCard,
    mdbCardBody,
    mdbCardUp,
    mdbAvatar,
    mdbIcon,
    mdbEdgeHeader,
    mdbTestimonial
  },
};
</script>
<style scoped>
.wrapper{
  overflow-x: hidden;
}
.list-unstyled{
  font-style: oblique;
  font-size: 20px;
  font-weight: bold;
}
.boot{
font-size: 30px;
padding-top:20px;
padding-left:20px;
border-left: 1px solid darkblue;
font-weight: bold;
text-align:center;
font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

}
.spacer
{
    width: 100%;
    height: 70px;
}
.col-sm-4 col-xs-12{
  font-size: 20px;
  
}
</style>
