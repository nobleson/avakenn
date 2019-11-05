<template>
<div class="wrapper ">
  
  <div class="top mt-3">
    <h5 class="font-weight-bold " style="color:red">Welcome to World Wide Computers Business Center</h5>
  </div>
   <mdb-container>
    <div class="section" >
      <mdb-carousel :interval="8000" showControls showIndicators  height="300">
          <mdb-carousel-item img src="/static/WOLRDWIDE.jpg" alt="First slide" />
        </mdb-carousel>
    </div>
      <hr class="mt-4"/>
    <mdb-row>
    <mdb-col md="12" class="mx-auto ">
     <mdb-row>
       <mdb-col md="6">
          <h4 class="font-weight-bold"> Our Business Centre Services include:</h4>
           <ul class="list-unstyled">
                <li> <mdb-icon  icon="angle-double-right"/>   CyberCafe</li>
                <li> <mdb-icon  icon="angle-double-right"/>   Plastic I D card Making</li>
                <li> <mdb-icon  icon="angle-double-right"/>   Document Scanning – A4 to A0 paper sizes</li>
                <li> <mdb-icon  icon="angle-double-right"/>   Two Minutes Passport.</li>
                <li> <mdb-icon  icon="angle-double-right"/>   Photocopying</li>
                <li> <mdb-icon  icon="angle-double-right"/>   Lamination</li>
                <li> <mdb-icon  icon="angle-double-right"/>   Document Binding</li>
                <li> <mdb-icon  icon="angle-double-right"/>   Graphics Design</li>
                <li> <mdb-icon  icon="angle-double-right"/>   Plastic ID Cards</li>
                <li> <mdb-icon  icon="angle-double-right"/>   Word Processing</li>
        </ul>
         </mdb-col>
             <mdb-col  md="6">
          <h4 class="font-weight-bold">BUSINESS CENTRE:</h4>
            For your business needs when on the move, our business center provides a variety of computer services and facilities. Air conditioned for your comfort and conveniently furnitured, we are open at all hours, efficiency guaranteed and always at your service.
          <h4 class="font-weight-bold mt-1">Contact Us</h4>
          <p>
            ADDRESS: No. 6 Deremo Gbaa Street  
          </p>
          <p>
            Phone Number: +234 (1) 4625160 <br>Mobile: +234 (0) 9098586154, <br>7046121680, 9098586153  :
          </p>
         </mdb-col>
       </mdb-row>
    <mdb-jumbotron class="mb-0 text-center hoverable p-4 mt-4">
    <mdb-row>
      <mdb-col md="4" offsetMd="1" class="m-3 mt-3">
        <mdb-view src="/static/cafe.png" alt="Sample image for first version of blog listing">
          <a><mdb-mask waves overlay="white-slight"/></a>
        </mdb-view>
      </mdb-col>
     
      <mdb-col md="7" class="text-md-left ml-3 mt-3">
        <p class="font-weight-normal">
          <p class="font-weight-normal v-align-center">
         We provide business service and internet. We help customers publish content, reach out to customers and do smart businesses. we help customers find good resource online to improve their businesses
        </p>
        
      </mdb-col>
     
    </mdb-row>    
    </mdb-jumbotron>
    </mdb-col>
    </mdb-row>
    </mdb-container>
   
  </div>
</template>
<script>
import {mdbLightbox, mdbCarouselCaption, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbCard, mdbCardBody, mdbCardHeader, mdbCardTitle, mdbCardText, mdbJumbotron, mdbView, mdbMask, mdbBtn, mdbTestimonial, mdbAvatar, mdbListGroupItem, mdbCarousel, mdbCarouselItem, mdbContainer, mdbRow, mdbCol, mdbIcon, mdbListGroup, mdbNavItem } from 'mdbvue';

export default {
  name: 'BusinessCenter',
  
  components: {
    mdbLightbox,
    mdbCarouselCaption,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbNavItem,
    mdbCarousel,
    mdbCarouselItem,
    mdbListGroup,
    mdbListGroupItem,
    mdbTestimonial,
    mdbAvatar,
    mdbJumbotron,
    mdbView,
    mdbMask,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCardHeader,
    mdbCardTitle,
    mdbCardText
  }
};
</script>

<style scoped>
.font-weight-bold {
  padding-left: 10px;
}
.bot {
  padding-left: 10px;
}
 @media (min-width: 768px) {
    .carousel-multi-item-2 .col-md-3 {
      float: left;
      width: 25%;
      max-width: 100%; } }

    .carousel-multi-item-2 .card img {
      border-radius: 2px; }

    figure {
      cursor: pointer;
    }
.example-components-list {
  padding-top: 20px;
}

.example-components-list li {
  padding: 10px;
  background-color: white;
  border-bottom: 1px solid #f7f7f7;
  transition: .3s;
}

.example-components-list h6 {
  padding: 20px 10px 5px 10px;
  color: grey;
}

.example-components-list li:hover {
  background-color: #fafafa;
}

.example-components-list i {
  float: right;
  padding-top: 3px;
}

.nav-link.navbar-link h5 {
  color: #212529;
}

.top{
  margin-left: 15%;
}
.wrapper{
  overflow: hidden;
}
.bob{
 border-left: 1px solid #56b000;
}

</style>
