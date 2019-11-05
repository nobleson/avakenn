<template>
<div class="wrapper">
  <div>
 
     <section >
        <mdb-carousel :interval="8000" showControls showIndicators>
           <mdb-carousel-item img src="/static/WOLRDWIDE.jpg" alt="First slide" />
          <mdb-carousel-item img src="../../static/Banner2.png" mask="black-slight" alt="Third slide">
            <mdb-carousel-caption animation="fadeInDown" title="WorldWide Computers Printing Press" text="Printing Press Section"></mdb-carousel-caption>
          </mdb-carousel-item>
        </mdb-carousel>
      </section>
    </div>

    <mdb-container>
      <div>
  <hr class="my-5">
    <div class="mb-4">
        <h1 class="text-center mt-5 font-weight-bold">Our services</h1>
    </div>
        <mdb-row>
          <mdb-col  md="4" class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon fas icon="school" size="2x" class="pink-text" />
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h5 class="font-weight-bold">Computer School</h5>
              <p class="blue-text">We train our students with hands on practical skills using application packages such as Microsoft Office, Coreldraw, Photoshop etc. We run Certificate and Diploma programmes</p>
              <mdb-nav-item to="/school" waves-fixed><mdb-btn size="sm" color="blue">Explore more</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
          <mdb-col md="4"  class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon icon="business-time" size="2x" class="blue-text" />
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h4 class="font-weight-bold">Cyber Cafe</h4>
              <p class="blue-text">We provide business service and internet. We help customers publish content, reach out to customers and do smart businesses. we help customers find good resource online to improve their businesses</p>
          
              <mdb-nav-item to="/cafe" waves-fixed><mdb-btn size="sm" color="blue">Explore more</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
          <mdb-col md="4" class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon icon="print" size="2x" class="green-text" />
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h4 class="font-weight-bold">Printing Press</h4>
              <p class="blue-text">We provide high quality content that meet business need. Our printing press include modern equiptment that produce industrial standard print using state of art tools that put smiles in the face of our customers.</p>
              <mdb-nav-item to="/printingpress" waves-fixed><mdb-btn size="sm" color="blue">Explore more</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
        </mdb-row>
        <hr>
        <div class="mt-4">
            <mdb-row>
           <mdb-col md="4" class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon icon="building" size="2x" class="pink-text" />
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h4 class="font-weight-bold">BootCamp</h4>
              <p class="blue-text">We develop interlectual capital and provide modern skills for global career seeker. Our Bootcamp stream line to ICT, Leadership, Enterprenuership, Creative Industry, Strategic Thinking, Continue Education. </p>
              <mdb-nav-item to="/avakennbootcamp" waves-fixed><mdb-btn size="sm" color="blue">Explore more</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
       
         <mdb-col md="4" class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon icon="microphone-alt" size="2x" class="pink-text" />
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h4 class="font-weight-bold">Studio</h4>
              <p class="blue-text">We make Audio and Movie Production. We make movie makers to create high quality multimedia contents to spice up local content to meet global standard. We provide golden opportunity for career seekers. </p>
              <mdb-nav-item to="/avakennbootcamp" waves-fixed><mdb-btn size="sm" color="blue">Explore more</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
    
         <mdb-col md="4" class="mb-5">
            <mdb-col col="2" md="2" class="float-left">
              <mdb-icon icon="laptop" size="2x" class="pink-text" />
            </mdb-col>
            <mdb-col col="10" md="8" lg="10" class="float-right">
              <h4 class="font-weight-bold">Computer Plaza</h4>
              <p class="blue-text">We are the leading provider of high grade computer systems and accessories at whole price, we also provide retail services and repairs of machines such as printers/photocopier, stabilers, PC/Servers</p>
              <mdb-nav-item to="/computerplaza" waves-fixed><mdb-btn size="sm" color="blue">Explore more</mdb-btn></mdb-nav-item>
            </mdb-col>
          </mdb-col>
        </mdb-row>
        </div>
      </div>
   
    </mdb-container>
    <mdb-container>
     <mdb-edge-header class="mt-5" style="background-color:#3E4095"/>
     </mdb-container>
      <div class="container free-bird">
        <mdb-row>
          <mdb-col md="10" class="mx-auto float-none white z-depth-1 py-2 px-2">
            <mdb-card-body>
              <h1 class="font-weight-bold h2-responsive pb-4 text-center"><strong>AVAKENN</strong></h1>
             
            </mdb-card-body>
          </mdb-col>
        </mdb-row>

      </div>
      <mdb-container>
        <div>
          <h2 class="text-center mt-5 font-weight-bold">Why is avakenn unique?</h2>
          <mdb-col md="10" class="mx-auto text-center">
            <p class="pt-4">Our company is unique because of our human resource.Companies can have the same product but not the same human resource.</p>
          </mdb-col>
        </div>
  
         <mdb-container class="mt-5">
    <mdb-carousel :interval="4000" showControls multi slide leftIcon="angle-left fa-3x pr-3" rightIcon="angle-right fa-3x pl-3" :floating="false" >
       
        <mdb-carousel-item>
          <h2 class=" text-center h1-responsive font-weight-bold my-3">Our Executives</h2>
          <mdb-row>
              <mdb-col md="3">
              <mdb-testimonial>
            <mdb-avatar class="mx-auto mb-4">
              <img src="/static/moses.jpg" class="rounded-circle img-fluid" alt="First sample avatar image"/>
            </mdb-avatar>
            <h4 class="text-center font-weight-bold">Mr. Iornav Moses T. </h4>
            <h6 class="text-center font-weight-bold my-3">Manager</h6>
          </mdb-testimonial>
            </mdb-col>
            
            <mdb-col md="3">
              <mdb-testimonial>
            <mdb-avatar class="mx-auto mb-4">
              <img src="/static/mr.png" class="rounded-circle img-fluid" alt="First sample avatar image"/>
            </mdb-avatar>
            <h4 class="text-center font-weight-bold">Mr. Isaiah Tervershima Devkaa</h4>
            <h6 class="text-center font-weight-bold my-3">Manager</h6>
          </mdb-testimonial>
            </mdb-col>
           <mdb-col md="3">
              <mdb-testimonial>
            <mdb-avatar class="mx-auto mb-4">
              <img src="/static/pr.png" class="rounded-circle img-fluid" alt="First sample avatar image"/>
            </mdb-avatar>
            <h4 class="text-center font-weight-bold">Mr. Depkough Samuel Saaniyol</h4>
            <h6 class="text-center font-weight-bold my-3">Manager</h6>
          </mdb-testimonial>
            </mdb-col>
            <mdb-col md="3">
              <mdb-testimonial>
            <mdb-avatar class="mx-auto mb-4">
              <img src="/static/avatar.png" class="rounded-circle img-fluid" alt="First sample avatar image"/>
            </mdb-avatar>
            <h4 class="text-center font-weight-bold">Mrs. Faith Iveren Sough Terzungwe</h4>
            <h6 class="text-center font-weight-bold my-3">Manager</h6>
          </mdb-testimonial>
            </mdb-col>
          </mdb-row>
         
        </mdb-carousel-item>
       
       <mdb-carousel-item>
          <h2 class=" text-center h1-responsive font-weight-bold my-3">Our Executives</h2>
          <mdb-testimonial>
            <mdb-avatar class="mx-auto mb-4">
              <img src="/static/Dr.png" class="rounded-circle img-fluid" alt="First sample avatar image"/>
            </mdb-avatar>
            <h4 class="text-center font-weight-bold">Mr. Sough Terzungwe Joseph</h4>
            <h6 class="text-center font-weight-bold my-3">C E O / Chairman</h6>

          </mdb-testimonial>
        </mdb-carousel-item>
         <mdb-carousel-item>
          <h2 class=" text-center h1-responsive font-weight-bold my-3">Our Excutives</h2>
          <mdb-row>
             <mdb-col md="3">
              <mdb-testimonial>
            <mdb-avatar class="mx-auto mb-4">
              <img src="/static/moses.jpg" class="rounded-circle img-fluid" alt="First sample avatar image"/>
            </mdb-avatar>
            <h4 class="text-center font-weight-bold">Mr. Iornav Moses T. </h4>
            <h6 class="text-center font-weight-bold my-3">Manager</h6>
          </mdb-testimonial>
            </mdb-col>
            
            <mdb-col  md="3">
              <mdb-testimonial>
            <mdb-avatar class="mx-auto mb-4">
              <img src="/static/mr.png" class="rounded-circle img-fluid" alt="First sample avatar image"/>
            </mdb-avatar>
            <h4 class="text-center font-weight-bold">Mr. Isaiah Tervershima Devkaa</h4>
            <h6 class="text-center font-weight-bold my-3">Manager</h6>
          </mdb-testimonial>
            </mdb-col>
           <mdb-col  md="3">
              <mdb-testimonial>
            <mdb-avatar class="mx-auto mb-4">
              <img src="/static/pr.png" class="rounded-circle img-fluid" alt="First sample avatar image"/>
            </mdb-avatar>
            <h4 class="text-center font-weight-bold">Mr. Depkough Samuel Saaniyol</h4>
            <h6 class="text-center font-weight-bold my-3">Manager</h6>
          </mdb-testimonial>
            </mdb-col>
            <mdb-col  md="3">
              <mdb-testimonial>
            <mdb-avatar class="mx-auto mb-4">
              <img src="/static/avatar.png" class="rounded-circle img-fluid" alt="First sample avatar image"/>
            </mdb-avatar>
            <h4 class="text-center font-weight-bold">Mrs. Faith Iveren Sough Terzungwe</h4>
            <h6 class="text-center font-weight-bold my-3">Manager</h6>
          </mdb-testimonial>
            </mdb-col>
          </mdb-row>
         
        </mdb-carousel-item>

      
    </mdb-carousel>
  </mdb-container>
  <div class="mb-4">
      <h1 class="text-center mt-5 font-weight-bold">Our Event</h1>
    </div>
   <div class="mb-4">
            <p class="text-center blue-text ">
              We celebrate annnual events such as cultural day. Our cultural day is one of the good 
              work days that we appear in our cultural attires as happy people free of ethnicity, tribal
              biases. The great event is celebrated every first Thursday of October. 
            </p>
     </div>
     <mdb-container>
            <img src="/static/culture/01 (14).JPG" class="image-fluid" width="100%" height="600px"/>
     </mdb-container>
          <mdb-row class="mdb-lightbox mt-2">
            <mdb-col md="2" @click.native="showLightbox2(0)">
              <figure>
                <img src="/static/culture/01 (1).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col>
            <mdb-col md="2" @click.native="showLightbox2(1)">
              <figure>
                <img src="/static/culture/01 (14).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col> 
            <mdb-col md="2" @click.native="showLightbox2(2)">
              <figure>
                <img src="/static/culture/01 (15).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col> 
            <mdb-col md="2" @click.native="showLightbox2(3)">
              <figure>
                <img src="/static/culture/01 (2).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col>
            <mdb-col md="2" @click.native="showLightbox2(4)">
              <figure>
                <img src="/static/culture/01 (3).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col>

            <mdb-col md="2" @click.native="showLightbox2(5)">
              <figure>
                <img src="/static/culture/66 (10).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col>
           
            <mdb-col md="2" @click.native="showLightbox2(7)">
              <figure>
                <img src="/static/culture/01 (7).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col>

             <mdb-col md="2" @click.native="showLightbox2(8)">
              <figure>
                <img src="/static/culture/01 (17).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col>
             <mdb-col md="2" @click.native="showLightbox2(9)">
              <figure>
                <img src="/static/culture/44 (3).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col>
            <mdb-col md="2" @click.native="showLightbox2(9)">
              <figure>
                <img src="/static/culture/44 (4).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col>
              <mdb-col md="2" @click.native="showLightbox2(10)">
              <figure>
                <img src="/static/culture/44 (1).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col>
            <mdb-col md="2" @click.native="showLightbox2(11)">
              <figure>
                <img src="/static/culture/44 (2).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col> 
           <mdb-col md="2" @click.native="showLightbox2(12)">
              <figure>
                <img src="/static/culture/01 (4).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col>
            
 	         <mdb-col md="2" @click.native="showLightbox2(13)">
              <figure>
                <img src="/static/culture/01 (6).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col>
          <mdb-col md="2" @click.native="showLightbox2(14)">
              <figure>
                <img src="/static/culture/01 (8).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col>

            <mdb-col md="2" @click.native="showLightbox2(15)">
              <figure>
                <img src="/static/culture/01 (11).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col> 
            <mdb-col md="2" @click.native="showLightbox2(16)">
              <figure>
                <img src="/static/culture/01 (12).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col>

           <mdb-col md="2" @click.native="showLightbox2(17)">
              <figure>
                <img src="/static/culture/01 (16).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col> 
            <mdb-col md="2" @click.native="showLightbox2(18)">
              <figure>
                <img src="/static/culture/11 (1).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col> 
            <mdb-col md="2" @click.native="showLightbox2(19)">
              <figure>
                <img src="/static/culture/11 (2).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col> 
            <mdb-col md="2" @click.native="showLightbox2(20)">
              <figure>
                <img src="/static/culture/11 (3).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col> 
          
            <mdb-col md="2" @click.native="showLightbox2(23)">
              <figure>
                <img src="/static/culture/11 (6).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col> 
           
            <mdb-col md="2" @click.native="showLightbox2(26)">
              <figure>
                <img src="/static/culture/1010 (2).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col>
            <mdb-col md="2" @click.native="showLightbox2(26)">
              <figure>
                <img src="/static/culture/1010 (2).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col>
           
            <mdb-col md="2" @click.native="showLightbox2(29)">
              <figure>
                <img src="/static/culture/1010 (6).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col>
              <mdb-col md="2" @click.native="showLightbox2(21)">
              <figure>
                <img src="/static/culture/11 (4).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col> 
            <mdb-col md="2" @click.native="showLightbox2(22)">
              <figure>
                <img src="/static/culture/11 (5).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col> 

            <mdb-col md="2" @click.native="showLightbox2(24)">
              <figure>
                <img src="/static/culture/1010 (1).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col> 
            <mdb-col md="2" @click.native="showLightbox2(32)">
              <figure>
                <img src="/static/culture/66 (13).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col> 
            <mdb-col md="2" @click.native="showLightbox2(33)">
              <figure>
                <img src="/static/culture/99 (3).JPG" class="img-fluid" alt="">
              </figure>
            </mdb-col> 
          
          </mdb-row>
          <mdb-lightbox
          :visible="visible2"
          :imgs="imgs2"
          :index="index2"
          @hide="handleHide2">
        </mdb-lightbox>
          <div class="mb-4">
            <h1 class="text-center mt-5 font-weight-bold">Contact Us</h1>
            </div>
      <mdb-row class="mt-3">
          <mdb-col>
            <section class="contact-section my-5 mx-4">
          <mdb-card>
            <mdb-row>
              <mdb-col lg="6">
                <mdb-card-body class="form">
                  <h3 class="mt-4">
                    <mdb-icon icon="map" class="pr-2"/>Location:
                  </h3>
                  <mdb-row>
                   <mdb-col>
                    <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Gboko%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
                   </mdb-col>
                  </mdb-row>
                 
                </mdb-card-body>
              </mdb-col>
              <mdb-col lg="4">
                <mdb-card-body class="text-center h-100">
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
                </mdb-card-body>
              </mdb-col>
            </mdb-row>
          </mdb-card>
        </section>
     </mdb-col>
      </mdb-row>
      </mdb-container>
    </div>
</template>

<script>
import {  mdbTestimonial, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbAvatar, mdbTextarea, mdbCard, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbLightbox, mdbCarousel, mdbCarouselItem, mdbCarouselCaption, mdbContainer, mdbCol, mdbRow, mdbIcon, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbBtn, mdbEdgeHeader, mdbCardBody, mdbInput } from 'mdbvue';

export default {
  name: 'HomePage',
  data() {
    return {
      imgs2: [
        '/static/culture/01 (1).JPG',
        '/static/culture/01 (14).JPG',
        '/static/culture/01 (15).JPG',
        '/static/culture/01 (2).JPG',
        '/static/culture/01 (3).JPG',
        '/static/culture/66 (10).JPG',
        '/static/culture/44 (3).JPG',
        '/static/culture/01 (7).JPG',
        '/static/culture/01 (17).JPG',
        '/static/culture/44 (4).JPG',
        '/static/culture/44 (1).JPG',
        '/static/culture/44 (2).JPG',
        '/static/culture/01 (4).JPG',
        '/static/culture/01 (6).JPG',
        '/static/culture/01 (8).JPG',
        '/static/culture/01 (11).JPG',
        '/static/culture/01 (12).JPG',
        '/static/culture/01 (16).JPG',
        '/static/culture/11 (1).JPG',
        '/static/culture/11 (2).JPG',
        '/static/culture/11 (3).JPG',
        '/static/culture/11 (4).JPG',
        '/static/culture/11 (5).JPG',
        '/static/culture/11 (6).JPG',
        '/static/culture/1010 (1).JPG',
        '/static/culture/1010 (2).JPG',
        '/static/culture/1010 (3).JPG',
        '/static/culture/1010 (4).JPG',
        '/static/culture/1010 (5).JPG',
        '/static/culture/1010 (6).JPG',
        '/static/culture/66 (1).JPG',
        '/static/culture/66 (10).JPG',
        '/static/culture/66 (13).JPG',
        '/static/culture/99 (3).JPG'
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
    
    mdbTestimonial,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardUp,
    mdbCardAvatar,
    mdbCardGroup,
    mdbContainer,
    mdbAvatar,
    mdbInput,
    mdbCol,
    mdbRow,
    mdbIcon,
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbBtn,
    mdbEdgeHeader,
    mdbCardBody,
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption,
    mdbCard, 
    mdbModal, 
    mdbModalHeader, 
    mdbModalTitle, 
    mdbModalBody, 
    mdbModalFooter,
    mdbLightbox,
    mdbTextarea
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.avatar {
    max-width: 200px;
  }
h1, h2 {
  font-weight: normal;
}

.home-feature-box {
  padding: 40px 0;
}

.home-feature-box i {
  font-size: 6rem;
}

.home-feature-box span {
  display: block;
  color: black;
  font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  color: #008751;
}

.wrapper{
  overflow-x:hidden;
}

</style>
