<template>
<div class="wrapper " style="background-color:#fafafa">
  
  <div class="top mt-3">
    <h4 class="font-weight-bold " style="color:blue">Welcome to World Wide Computer Training Center</h4>
  </div>
    <div class="section" >
      <mdb-carousel :interval="8000" showControls showIndicators  height="300">
          <mdb-carousel-item img src="/static/bg1.png" alt="First slide" />
          <mdb-carousel-item img src="/static/B2.png" alt="Second slide" />
          <mdb-carousel-item img src="/static/bg3.png" alt="Third slide" />
        </mdb-carousel> 
    </div>
    <div class="main">
       <mdb-row>
    <mdb-col md="8" class="mx-auto ">
   <div class="about mt-4">
        <p class="font-weight-normal">
          <h5 class="font-weight-bold">BRIEF HISTORY OF WORLDWIDE COMPUTER TRAINING INSTITUTE GBOKO</h5>
          Worldwide computer was established in the year 2000. The place started as a computer Business Centre with the aim of rendering computer service to those in need. At the staring, the place was having the following machines to run its business activities: 2 sets of computers, 1 photocopier, 1 scanning machine, 1 laminating machine and 1 spiral binding machine.
          The improvement and growth in the business life of the place as well as the need to educate people on the knowledge of computer gave birth to computer Training School in the year 2003. Both the business centre and the training school were sharing a single room which initially was for business centre alone. As the interest for computer knowledge as well as activities day by day, people started trooping in to seek admission and in a short while; the place grew up and deserved a separate location which eventually took place in the 2004.
          </div>

        <div class="mt-3">
          <hr class="mb-4" />
         <div role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-1 variant="info">Aims and Objectives</b-button>
              </b-card-header>
              <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                      The computer training institute was established with a target of achieving the following aims:
                  </b-card-text>
                  <b-card-text>
                      1.	To update the knowledge of people by imparting the knowledge of computer as a sense of belonging into them so as to help them meet the standard of the modern world.
                  </b-card-text>
                  <b-card-text>
                      2.	To reduce the problem of unemployment confronting the youth.
                  </b-card-text>
                  <b-card-text>
                      3.	To adequately prepare people for computer literacy/job.
                  </b-card-text>
                  <b-card-text>
                      4.	To serve as a motive of encouraging self-employment to fellow citizens that are capable of starting up something of their own.
                  </b-card-text>
                  <b-card-text>
                      5.	To wipe away shame from the face of people and bring hope to those who are deprive of jobs and opportunities for lack of computer knowledge.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-2 variant="info">PROGRAMME DURATIONS AND COURSES</b-button>
              </b-card-header>
              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text class="font-weight-bold">
                    Worldwide computer training institute offers computer training to people in three durations with each having a rewarding certificate that will be issued to the graduate. Below is detail the durations and courses.
                  </b-card-text>
                  Areas of Study (Course Units)
                  <b-card-text class="font-weight-bold">
                    Three Months (Certificate of attendance is rewarded to graduate)
                  </b-card-text>
                  <b-card-text>
                    1.	Computer appreciation
                  </b-card-text>
                  <b-card-text>
                     2.	Windows Operation system
                  </b-card-text>
                  <b-card-text>
                     3.	Microsoft Office word
                  </b-card-text>
                  <b-card-text>
                     4.	Corel Draw
                  </b-card-text>
                  <b-card-text>
                     5.	Internet
                  </b-card-text>
                  <b-card-text class="font-weight-bold">
                    	Six Months (Diploma certificate is rewarded to graduate)
                  </b-card-text>
                  Areas of Study (Course Units)
                  <b-card-text  class="font-weight-bold">
                   Desktop Publishing and Data Processing
                  </b-card-text>
                  <b-card-text>
                     1.	Computer appreciation 
                  </b-card-text>
                  <b-card-text>
                     2.	Windows operating system
                  </b-card-text>
                  <b-card-text>
                    3.	Microsoft office word 
                  </b-card-text>
                  <b-card-text>
                    4.	Microsoft office Excel
                  </b-card-text>
                  <b-card-text>
                    5.	Microsoft office Access
                  </b-card-text>
                  <b-card-text>
                   6.	Corel Draw 
                  </b-card-text>
                  <b-card-text>
                   7.	Internet
                  </b-card-text>
                  <b-card-text class="font-weight-bold">
                    	Nine Months (Diploma Certificate is rewarded to graduate)
                  </b-card-text>
                  <b-card-text  class="font-weight-bold">
                  Desktop Publishing and Data Processing
                  </b-card-text>
                  Areas of Study (Course Units)
                  <b-card-text>
                     1.	Computer appreciation 
                  </b-card-text>
                  <b-card-text>
                     2.	Windows operating system
                  </b-card-text>
                  <b-card-text>
                    3.	Microsoft office word 
                  </b-card-text>
                  <b-card-text>
                    4.	Microsoft office Excel
                  </b-card-text>
                  <b-card-text>
                    5.	Microsoft office Access
                  </b-card-text>
                  <b-card-text>
                   6.	Corel Draw 
                  </b-card-text>
                  <b-card-text>
                   7.	Internet
                  </b-card-text>
                  <b-card-text>
                    8.	Installation of application software
                  </b-card-text>
                 
                </b-card-body>
              </b-collapse>
            </b-card>

           <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-3 variant="info">CERTIFICATE VALUE </b-button>
              </b-card-header>
              <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                      The value of a certificate depends on the duration as well as the number of application software taught to a grandaunt. The grade to be obtained in a certificate is usually determined by the owner’s performances (i.e. in assessments and examination)
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-4 variant="info">ENTRY REQUIREMENTS </b-button>
              </b-card-header>
              <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    a.	Candidates seeking admission into worldwide computer school must have the ability to read and write. That is, it should be at least people who sat for JSSCE examination.
                  </b-card-text>
                  <b-card-text>
                     b.	It should be people that are God fearing.
                  </b-card-text>
                  <b-card-text></b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-5 variant="info">SCHOOL FEES </b-button>
              </b-card-header>
              <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                      The amount of school fees to be paid is determined by the preferred duration.                  </b-card-text>
                  <b-card-text></b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

             <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-6 variant="info">METHOD OF SCHOOL FEES PAYMENT</b-button>
              </b-card-header>
              <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                  The management of the institution prefers the school fees should be paid at once; but considering the economic melt dawn that has caused the financial imbalance everywhere in the society, the fees can still is paid in installment must be bigger than the remaining amount which will also be as soon as possible.
                  </b-card-text>
                  <b-card-text>
                      <strong>Important Note:</strong>
                  With the above stated factors that determine the value of a certificate, you are therefore, advised to take your studies serious and always endeavor to participate in assessments to avoid devaluing your certificate by yourself.
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-7 variant="info">SCHOOL RULES AND REGULATIONS</b-button>
              </b-card-header>
              <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text class="font-weight-bold">
                    Worldwide computer Training School can offer satisfactory training to students who sought for their services. Meanwhile, all the students are advised to abide by the rule and regulation guiding the smooth running/conduct of the institution on order to achieve the above stated aims the rules includes:                  </b-card-text>
                  <b-card-text>
                     1.	Students are placed in three sessions
                            <b-card-text>
                                i)	Morning Session			8:00am-11:00am
                            </b-card-text>
                            <b-card-text>
                                ii)	Afternoon session			11:00am-2:00am
                            </b-card-text>
                            <b-card-text>
                                iii)	Evening session			2:00am-5:00pm
                            </b-card-text>
                  </b-card-text>
                  <b-card-text>
                    2.	Any student that obtained the average below forty percent (40%) cannot be issued a certificate until he/she will come back and make up the crossing average marks.
                  </b-card-text>
                  <b-card-text>
                      3.	All students are expected to report to school and close from school at the appropriate time.
                  </b-card-text>
                  <b-card-text>
                      4.	Students should ensure the neatness id maintained in the institution.
                  </b-card-text>
                  <b-card-text>
                    5.	Dress code: all students both male and female should always appear decant in their dressing.
                  </b-card-text>
                  <b-card-text>
                      6.	Students should sweep the school hall and dust the computers before lessons commence.
                  </b-card-text>
                  <b-card-text>
                    7.	Complaints should be directed to the computer instructor/coordinator who shall take it to the managing Director in charge if possible.
                  </b-card-text>
                  <b-card-text>
                      8.	Students should Endeavour to buy their handout to enable their effective learning.
                  </b-card-text>
                  <b-card-text>
                    9.	There should be no fighting among students, if found, he/she will be penalize.
                  </b-card-text>
                  <b-card-text>
                    10.	Students should endeavor to attend school regularly and be punctual in attendance.
                  </b-card-text>
                  <b-card-text>
                    11.	Any damage caused by a student shall be paid.
                  </b-card-text>
                  <b-card-text>
                    12.	Students should not open programs they are yet be taught.
                  </b-card-text>
                  <b-card-text>
                   13.	Students should always call the attention of the computer instructor where ever they are hooked up or confused.
                  </b-card-text>
                  <b-card-text>
                   14.	Student should not eat food or drink water in the training hall.
                  </b-card-text>
                  <b-card-text>
                   15.	Students should not receive visitors during lesson hours, except with permission. Take note and inform all your relatives.
                  </b-card-text>
                  <b-card-text>
                   16.	Students should maintain absolute silence while in the training hall.
                  </b-card-text>
                  <b-card-text>
                   17.	Students should not speak vernacular language in the school.
                  </b-card-text>
                  <b-card-text>
                   18.	Students should not charge/plug handset on the sockets mainly for systems.
                  </b-card-text>

                   <b-card-text>
                    19.	Above all, law and order should be maintained in the institution.
                   </b-card-text>
                 
                </b-card-body>
              </b-collapse>
            </b-card>

          </div>
          </div>
  <h1 class="font-weight-bold mt-3">Our Students</h1> 
 <mdb-carousel :interval="8000" showControls multi slide leftIcon="angle-left fa-3x pr-3" rightIcon="angle-right fa-3x pl-3" :floating="false">
      <mdb-carousel-item>
        <mdb-row>
          <mdb-col md="3" class="mb-3">
            <mdb-card>
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(38).jpg"
          alt="Card image cap"/>
            </mdb-card>
          </mdb-col>
          <mdb-col md="3" class="mb-3">
            <mdb-card>
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(19).jpg"
          alt="Card image cap"/>
            </mdb-card>
          </mdb-col>
          <mdb-col md="3" class="mb-3">
            <mdb-card>
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(42).jpg"
          alt="Card image cap"/>
            </mdb-card>
          </mdb-col>
          <mdb-col md="3" class="mb-3">
            <mdb-card>
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(8).jpg"
          alt="Card image cap"/>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </mdb-carousel-item>
      <mdb-carousel-item>
        <mdb-row>
          <mdb-col md="3" class="mb-3">
            <mdb-card>
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
          alt="Card image cap"/>
            </mdb-card>
          </mdb-col>
          <mdb-col md="3" class="mb-3">
            <mdb-card>
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(25).jpg"
          alt="Card image cap"/>
            </mdb-card>
          </mdb-col>
          <mdb-col md="3" class="mb-3">
            <mdb-card>
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg"
          alt="Card image cap"/>
            </mdb-card>
          </mdb-col>
          <mdb-col md="3" class="mb-3">
            <mdb-card>
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(26).jpg"
          alt="Card image cap"/>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </mdb-carousel-item>
      <mdb-carousel-item>
        <mdb-row>
          <mdb-col md="3" class="mb-3">
            <mdb-card>
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(64).jpg"
          alt="Card image cap"/>
            </mdb-card>
          </mdb-col>
          <mdb-col md="3" class="mb-3">
            <mdb-card>
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(51).jpg"
          alt="Card image cap"/>
            </mdb-card>
          </mdb-col>
          <mdb-col md="3" class="mb-3">
            <mdb-card>
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(59).jpg"
          alt="Card image cap"/>
            </mdb-card>
          </mdb-col>
          <mdb-col md="3" class="mb-3">
            <mdb-card>
              <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(63).jpg"
          alt="Card image cap"/>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </mdb-carousel-item>
    </mdb-carousel>
      <h1 class="font-weight-bold mt-2">Students Testimonies</h1>
      <section class="text-center my-5">
      <mdb-carousel :interval="8000" showControls multi slide>
        <mdb-carousel-item>
          <mdb-row>
            <mdb-col md="4">
              <mdb-testimonial>
                <mdb-avatar class="mx-auto">
                  <img src="/static/avatar.png" class="rounded-circle img-fluid"/>
                </mdb-avatar>
                <h4 class="font-weight-bold mt-4">Anna Deynah</h4>
                <p class="font-weight-normal"><mdb-icon icon="quote-left" class="pr-2"></mdb-icon>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p>
              </mdb-testimonial>
            </mdb-col>
            <mdb-col md="4" class="clearfix d-none d-md-block">
              <mdb-testimonial>
                <mdb-avatar class="mx-auto">
                  <img src="/static/avatar.png" class="rounded-circle img-fluid"/>
                </mdb-avatar>
                <h4 class="font-weight-bold mt-4">John Doe</h4>
                <p class="font-weight-normal"><mdb-icon icon="quote-left" class="pr-2"></mdb-icon>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis laboriosam.</p>
               
              </mdb-testimonial>
            </mdb-col>
            <mdb-col md="4" class="clearfix d-none d-md-block">
              <mdb-testimonial>
                <mdb-avatar class="mx-auto">
                  <img src="/static/avatar.png" class="rounded-circle img-fluid"/>
                </mdb-avatar>
                <h4 class="font-weight-bold mt-4">Abbey Clark</h4>
                <p class="font-weight-normal"><mdb-icon icon="quote-left" class="pr-2"></mdb-icon>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>
              </mdb-testimonial>
            </mdb-col>
          </mdb-row>
        </mdb-carousel-item>
      </mdb-carousel>
    </section>
    
      </mdb-col>
       <mdb-col md="4" class="mx-auto mt-2">
          <mdb-card class="card-image" style="background-image: url(/static/55.jpg)">
          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 class="white-text" >
                <mdb-icon icon="graduation-cap fa fa-4x" style="color:white" /> </h5>
              <p>
                Three Months (Certificate is rewarded to graduate)  
              </p>
            </div>
          </div>
        </mdb-card>
        
        <mdb-card class="card-image mt-4" style="background-image: url(/static/55.jpg)">
          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 class="white-text" >
                <mdb-icon icon="graduation-cap fa fa-4x" style="color:white" /> </h5>
              <p>
               Six Months (Diploma certificate is rewarded to graduate)  
              </p>
            </div>
          </div>
        </mdb-card>


        <mdb-card class="card-image mt-4" style="background-image: url(/static/55.jpg)">
          <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
            <div>
              <h5 class="white-text" >
                <mdb-icon icon="graduation-cap fa fa-4x" style="color:white" /> </h5>
              <p>
               Nine Months (Diploma Certificate is rewarded to graduate)
              </p>
            </div>
          </div>
        </mdb-card>
     
      </mdb-col>
    </mdb-row>
   
    </div>
   
  </div>
</template>
<script>
import { mdbCard, mdbAccordion, mdbJumbotron, mdbView, mdbMask, mdbBtn, mdbTestimonial, mdbAvatar, mdbListGroupItem, mdbCarousel, mdbCarouselItem, mdbContainer, mdbRow, mdbCol, mdbIcon, mdbListGroup, mdbNavItem } from 'mdbvue';

export default {
  name: 'TrainingSchoolPage',
  components: {
    mdbCard,
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
    mdbAccordion,
    mdbBtn
  },
  data() {
    return {
      panes: [
        {
          title: 'AIMS AND OBJECTIVES',
          content: 'The computer training institute was established with a target of achieving the following aims: 1.	To update the knowledge of people by imparting the knowledge of computer as a sense of belonging into them so as to help them meet the standard of the modern world.',

        },{
          title: 'Collapsible Group Item #2',
          content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable.'
        },
        {
          title: 'Collapsible Group Item #3',
          content: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable.'
        }
      ]
    };
  }
};
</script>

<style scoped>
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
.about{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
}
.main{
    margin-left: 10%;
    margin-right: 10%
}
</style>
