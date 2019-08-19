<template>
  <div id="app" class="flyout">
    <mdb-navbar id="main-navbar"  dark position="top" style="background-color:#3E4095" scrolling :scrollingOffset="20">
      
      <mdb-navbar-brand to="/" waves style="font-weight: bolder;">
      <img src="./assets/brand3.png"/>
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav center>
          <mdb-nav-item exact to="/"><h5>Home</h5></mdb-nav-item>
          <br>
          <mdb-nav-item to="/school"><h5>Computer School</h5></mdb-nav-item>
          <mdb-nav-item to="/printingpress"><h5>Printing Press</h5></mdb-nav-item>
          <mdb-nav-item to="/avakennbootcamp"><h5>Boot Camp</h5></mdb-nav-item>
          <mdb-nav-item to="/cafe"><h5>Cafe</h5></mdb-nav-item>
          <mdb-nav-item to="/studio"><h5>Studio</h5></mdb-nav-item>
          <mdb-nav-item to="/computerplaza"><h5>Computer Plaza</h5></mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
      
    </mdb-navbar>
    
    <main :style="{marginTop: '60px'}">
      <router-view></router-view>
    </main>
    <mdb-footer color="mdb-color">
          <div class="footer-copyright text-center py-3">
              <mdb-container fluid>
                    Copyright &copy; 2019 <a href="https://www.clmis.corbon.gov.ng">avakenn.com</a>
              </mdb-container>
            </div>
      </mdb-footer>
  </div>
</template>

<script>
import { mdbNavbar, mdbContainer, mdbRow, mdbCol, mdbIcon, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand, mdbFooter } from 'mdbvue';
export default {
  name: 'app',
  components: {
    mdbContainer,
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand,
    mdbFooter,
    mdbRow,
    mdbCol,
    mdbIcon
  }
};

</script>

<style>
.flyout {
	display:flex;
	flex-direction: column;
	min-height:100vh;
	justify-content: space-between;
}
.active{
  background-color: rgba(255, 255, 255, 0.1);
}
.demo-section {
  padding: 20px 0;
}
.demo-section > section {
  border: 1px solid #e0e0e0;
  padding: 15px;
}
.demo-section > h4 {
  font-weight: bold;
  margin-bottom: 20px;
}
.demo-title {
  color: #9e9e9e;
  font-weight: 700;
  margin-bottom: 0;
  padding-left: 15px;
}

</style>
