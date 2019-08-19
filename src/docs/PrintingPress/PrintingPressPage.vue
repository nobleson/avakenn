<template>
<div class="wrapper " style="background-color:#eceff1">
  <div class="top mt-3">
    <h1 class="font-weight-bold " style="color:red">Welcome to World Wide Computers Printing Press</h1>
  </div>
   <mdb-container class="sect ">
    <div class="section mt-3">
      <mdb-carousel :interval="8000" showControls showIndicators  height="300">
          <mdb-carousel-item img src="/static/p1.png" alt="First slide" />
          <mdb-carousel-item img src="/static/p1.png" alt="Second slide" />
          <mdb-carousel-item img src="/static/p1.png" alt="Third slide" />
        </mdb-carousel>
    
    <div ><h3 class="font-weight-bold mt-3" style="color:red">Contact our Printing team on: <mdb-icon icon="phone-square"/> 09078575463, 0807958595</h3></div>
      <hr class="mt-4"/>
    <mdb-row>
    <mdb-col md="12" class="mx-auto ">
      <h1 class="font-weight-bold">Our Service</h1>
      <p class="font-weight-normal infor">
        We provide high quality content that meet business need. Our printing press include modern equiptment that produce industrial standard print using state of art tools that put smiles in the face of our customers.      </p>
    <mdb-jumbotron class="mb-0 text-center hoverable p-4 mt-4">
    <mdb-row>
      <mdb-col md="4" offsetMd="1" class="m-3 mt-3">
        <mdb-view src="/static/th.jpg" alt="Sample image for first version of blog listing">
          <a><mdb-mask waves overlay="white-slight"/></a>
        </mdb-view>
      </mdb-col>
      <mdb-col md="7" class="text-md-left ml-3 mt-3">
        <p class="font-weight-normal infor">
          This is made possible due to use of all-digital innovative printing solutions and the latest printing infrastructure available with Press.
          All printing services feature high quality finishings and paper stocks. We undertake and execute orders for commercial printing for all the segments of the industry. We are also fortunate to have one of the best Marketing teams who in the past have served many of the major Companies and Advertising 
        </p>
      </mdb-col>
      <mdb-col md="7" class="text-md-left ml-3 mt-3">
        <p class="font-weight-normal infor">
          Our roller printer machine is one of the best of it's kind printer machine with high speed production, and it also produce quality printing of four color plate. 
        </p>
      </mdb-col>
      <mdb-col md="4" offsetMd="1" class="m-3 mt-3">
        <h6 class="font-weight-bold" style="color:blue">Our Roller printer machine</h6>
        <mdb-view  src="/static/IMG_20190816_111038_4.jpg" alt="Sample image for first version of blog listing">
          <a><mdb-mask waves overlay="white-slight"/></a>
        </mdb-view>
      </mdb-col>
    </mdb-row>    
    </mdb-jumbotron>
    <h1 class="font-weight-bold mt-5">Some of Our Works</h1>
      <mdb-row class="mdb-lightbox">
        <mdb-col md="4" @click.native="showLightbox2(0)">
          <figure>
            <img src="/static/1 (1).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
        <mdb-col md="4" @click.native="showLightbox2(1)">
          <figure>
            <img src="/static/1 (2).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
        <mdb-col md="4" @click.native="showLightbox2(2)">
          <figure>
            <img src="/static/1 (3).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
        <mdb-col md="4" @click.native="showLightbox2(3)">
          <figure>
            <img src="/static/1 (4).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
        <mdb-col md="4" @click.native="showLightbox2(4)">
          <figure>
            <img src="/static/1 (5).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
        <mdb-col md="4" @click.native="showLightbox2(5)">
          <figure>
            <img src="/static/1 (6).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
        <mdb-col md="4" @click.native="showLightbox2(6)">
          <figure>
            <img src="/static/1 (7).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
        <mdb-col md="4" @click.native="showLightbox2(7)">
          <figure>
            <img src="/static/1 (8).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
        <mdb-col md="4" @click.native="showLightbox2(8)">
          <figure>
            <img src="/static/1 (9).jpg" class="img-fluid" alt="">
          </figure>
        </mdb-col>
      </mdb-row>
       <mdb-lightbox
      :visible="visible2"
      :imgs="imgs2"
      :index="index2"
      @hide="handleHide2">
    </mdb-lightbox>
    <h1 class="font-weight-bold mt-5">About Us</h1>
     <mdb-row>
        
      <mdb-col>
      
        <p class="infor">
          Our PRINTING PRESS is a well-acclaimed company successfully delivering unmatched quality printing services, is among the most trusted names in the printing industry.
        </p>
        <p class="infor">
          In offset and digital printing, Our PRINTING PRESS offers the most comprehensive printing solutions and specializes in printing Books, Magazines, Catalogue, Leaflets/Flyers, Brochures, Calendars, Posters, Mailers, Journals/News Letters, Wedding/Invitation Cards, Post Cards, Carry Bags, Labels, Corporate Stationery, Diaries and Digital Banners printing and innumerable other printing jobs.
        </P>

        <p class="infor">
          A combination of intelligent people, cutting edge print technology and impeccable standards allows us to deliver outstanding production within budget and on time, always. Choose Our PRINTING PRESS as your printing service provider and experience the best in prints!
        </p>
    
      </mdb-col>
      <mdb-col>
     <div class="bob">
        <h4 class="font-weight-bold" style="color:blue">Some of Our latest Prints</h4>
     <div class="bot">
        <img src="/static/works.gif"/>
     </div>
       </div>
      </mdb-col>  
     </mdb-row>
    </mdb-col>
    </mdb-row>
    </div>
    </mdb-container>
   
  </div>
</template>
<script>
import {mdbLightbox, mdbCarouselCaption, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbCard, mdbCardBody, mdbCardHeader, mdbCardTitle, mdbCardText, mdbJumbotron, mdbView, mdbMask, mdbBtn, mdbTestimonial, mdbAvatar, mdbListGroupItem, mdbCarousel, mdbCarouselItem, mdbContainer, mdbRow, mdbCol, mdbIcon, mdbListGroup, mdbNavItem } from 'mdbvue';

export default {
  name: 'PrintinPressPage',
  data() {
    return {
      imgs2: [
        '/static/1 (1).jpg',
        '/static/1 (2).jpg',
        '/static/1 (3).jpg',
        '/static/1 (4).jpg',
        '/static/1 (5).jpg',
        '/static/1 (6).jpg',
        '/static/1 (7).jpg',
        '/static/1 (8).jpg',
        '/static/1 (9).jpg'
      ],
      visible2: false,
      index2: 0
    };
  },
  methods: {
    showLightbox2(index2) {
      this.index2 = index2;
      this.visible2 = true;
    },
    handleHide2() {
      this.visible2 = false;
    }
  },
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
.infor{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 19px;
  justify-content: center;
  text-justify: newspaper;
}
.sect{
  box-shadow:2px, 2px, 1px, 1px solid#56b000;
  background-color: white;
}

</style>
