<template>
  <div class="wrapper">
     <div class="main">
         <mdb-carousel :interval="8000" showControls showIndicators  height="300">
          <mdb-carousel-item img src="/static/Boot5.png" alt="First slide" />
          <mdb-carousel-item img src="/static/Boot1.png" alt="First slide" />
          <mdb-carousel-item img src="/static/boot2.png" alt="Second slide" />
          <mdb-carousel-item img src="/static/Boot3.png" alt="Third slide" />
          <mdb-carousel-item img src="/static/boot4.png" alt="First slide" />
    </mdb-carousel>
     
    <hr class="my-3"/>
  <section >
      <div class="py-3"></div>
   <mdb-row>
        <mdb-col md="6" >
           <mdb-card class="mb-2">
                <mdb-view hover>
                  <a href="#!">
                    <mdb-card-image
                      src="/static/inks.png"
                      alt="Card image cap"/>
                    <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                  </a>
                </mdb-view>
                <mdb-card-body cascade>
                  
                    <h1 class="font-weight-bold text-muted">Mobile-First Web Design Course</h1>
                
                  <mdb-card-text>Hands on Practical (75%)</mdb-card-text>
                  <br>
                  <mdb-card-text>Theory (25%)</mdb-card-text>
                  <br>
                  <mdb-card-text>Final Project Two weeks</mdb-card-text>   
                <h1 class="font-weight-bold text-muted">Bonus</h1>
                <mdb-card-text>Introduction to SPA Application</mdb-card-text>
                  <br>
                  <mdb-card-text>Angular</mdb-card-text>
                  <br>
                   <mdb-card-text>React</mdb-card-text>
                  <br>
                  <mdb-card-text>Vue</mdb-card-text>
                  <br>
                </mdb-card-body>
              </mdb-card>
        </mdb-col>
         
         <mdb-col md="6" >
            <mdb-card class="mb-2">
                <mdb-view hover>
                  <a href="#!">
                    <mdb-card-image
                      src="/static/drums.png"
                      alt="Card image cap"/>
                    <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                  </a>
                </mdb-view>
                <mdb-card-body cascade>
                
                <h1 class="font-weight-bold text-muted">Internet of Things (IoT)</h1>

                  
                   <mdb-card-text>Hands on Practical (75%)</mdb-card-text>
                  <br>
                  <mdb-card-text>Theory (25%)</mdb-card-text>
                  <br>
                  <mdb-card-text>Final Project Two weeks</mdb-card-text>  
                  
                </mdb-card-body>
              </mdb-card>
        </mdb-col>
        
      </mdb-row>
    <div class="py-5"></div>
  </section>
  <section style="background-color:#b2dfdb " class="py-5">
    <mdb-container>
     <mdb-edge-header class=" py-5" style="background-color:#3E4095"/>
        <div class="free-bird">
        <mdb-row>
          <mdb-col md="10" class="mx-auto float-none white z-depth-1 py-2 px-2">
            <mdb-card-body >
              <h1 class="h2-responsive pb-4 align-center"></h1>
                <h1 class="font-weight-bold text-center "><strong>Our</strong> <strong class="blue-text">Curriculum</strong></h1>
              <mdb-row class="d-flex flex-row justify-content-center">
                <div>
                <b-card no-body>
                    <b-tabs content-class="mt-3" fill>
                    <b-tab no-body title="Prepworks">
                        <h5 class="font-weight-bold">Prepwork</h5>
                        <p>
                            Our coding bootcamp is very intense and covers a wide range of coding topics. This can be intimidating if you're a newbie coder, but remember: our full-stack bootcamp is also made for absolute beginners. To ensure everyone starts on a similar level, our students must complete all Prepwork before the first day of the course. The Prepwork takes between 6 and 9 hours and gives students a basic knowledge of:
                        </p>
                        
                        <ul>
                            <li> Web 101 - how the web works</li>
                            <li> Command line basics</li>
                            <li> Install VS Code</li>
                            <li> Terminal - basic commands</li>
                            <li> Git - basic commands</li>
                            <li> HTML / CSS - foundations</li>
                            <li> JavaScript - foundations</li>
                            <li> Startup mindset - tech workflow</li>
                            
                        </ul>
                    </b-tab>
                    

                    <b-tab no-body title="Web Design">
                       <h5 class="font-weight-bold">Building web interfaces</h5>
                        <p>
                            Elaborate your UI with atomic design and code beautiful components & layouts by applying the latest CSS techniques.

                        </p>

                        <ul>
                            <li> Product Design, UX & UI principles</li>
                            <li> HTML (tags, id, classes, attributes)</li>
                            <li> CSS (selectors, properties, stylesheet organization)</li>
                            <li> Web-design tips for components & layouts</li>
                            <li> CSS techniques with flexbox & CSS grid</li>
                            <li> CSS media queries for Adaptive Design</li>
                            <li> Bootstrap basics & Responsive Grid System</li>
                        </ul>
                    </b-tab>

                     <b-tab no-body title="Final Project">
                       <h5 class="font-weight-bold">Final Project</h5>
                        <p>
                            The final projects are the culmination of the bootcamp. Students work together to put everything they have learnt (and more!) into practice: inventing, pitching, designing, coding and deploying an original project in teams of 3 or 4 over a two week period.

                        </p>

                        <ul>
                            <li> User need, user goal and unique value proposition</li>
                            <li> Splitting tasks into user stories</li>
                            <li> Coding an original web app from scratch</li>
                            <li> Deploy on a production environment</li>
                        </ul>
                    </b-tab>

                    </b-tabs>
                </b-card>
                </div>
              </mdb-row>
            </mdb-card-body>
          </mdb-col>
        </mdb-row>
      </div>
    </mdb-container>
    <div class="py-4"></div>
  </section>
  <section>
    <mdb-row>
      <mdb-container >
        <h1 class="font-weight-bold text-center mt-5 ml-2"></h1>
        <mdb-row>

        <mdb-jumbotron class="mb-0 text-center hoverable p-4">
            <mdb-row>
            <mdb-col  >
                <img src="/static/images (2).jpg" width="100%" height="100%"/>
            </mdb-col>
            <mdb-col md="7" class="text-md-left ml-3 mt-3">
               <div class="boot ml-2">
              <h1 class="boot" style="color:blue">Learn from the <strong class="red-text">best</strong></h1>
              
              We never stop learning. It’s why our teachers are the best! We are constantly updapting our syllabus as coding languages advance, to make sure we give students - including absolute beginners - the most relevant and cutting-edge training possible, while teaching them the best approach to problem solving.
              </div>
            </mdb-col>
            </mdb-row>
        </mdb-jumbotron>
         
        </mdb-row>
      </mdb-container>
    </mdb-row>
  </section>

 <hr class="my-5 mt-4"/>
    <section style="background-color:#3E4551 ">
      <div class="spacer">
          &nbsp;
      </div>
      <mdb-container>
         <mdb-edge-header class=" py-5" style="background-color:#3E4095"/>
        <div class="free-bird">
        <mdb-row>
          <mdb-col md="10" class="mx-auto float-none white z-depth-1 py-2 px-2">
            <mdb-card-body >
              <h1 class="h2-responsive pb-4 align-center"><strong>About Us</strong></h1>
              <mdb-row class="d-flex flex-row justify-content-center">
                <mdb-col>
                  <div class="bot">
                    <p>
                      Avakenn development Boot Camp is a place for Nigerian Youths and professionals. This Boot Camp features hight quality programs that inspire innovation create knowledge products, develop leadership skills, drive business success and transform economy.
                    </P>
                    <p>
                      The initiative of Avakenn Dev Boot Camp (ADB) is to prepare participants for goal development irrespective of their geograpgical location.
                      </p>
                      <p>
                        ADB is a buisness branded by Avakenn, it is a full-time conglomerate with it's adminstraition, management and other operation. The buisness is open to sponsorship, investment and partnership to enable limited tranformation of nIgerian economy.
                      </p>
                      <p>
                        ADB will seek to expand and create satelite campuses in various constituencies to mitigate challenges of participantion while the main campus remain in Gboko.
                      </p>
                  </div>
                    </mdb-col>
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
      <div class="spacer">
          &nbsp;
      </div>
    </section>
     </div>
  </div>
</template>
<script>
import {  mdbTabs, mdbEdgeHeader, mdbTestimonial, mdbCard, mdbCardBody, mdbCardUp, mdbAvatar, mdbGoogleMap, mdbCarousel, mdbCarouselItem, mdbContainer, mdbRow, mdbCol, mdbIcon, mdbJumbotron, mdbListGroup, mdbNavItem } from 'mdbvue';
export default {
  name: 'BootCampPage',
  components: {
    mdbTabs,
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
.main{
    margin-left: 10%;
    margin-right: 10%
}
.boot{
font-size: 30px;
margin-left:1px;

padding-left:20px;
border-left: 1px solid darkblue;
font-weight: bold;

font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

}
.boot1{
font-size: 30px;
margin-left:1px;
padding-top:20px;
padding-left:20px;
font-weight: bold;
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
.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}

</style>
