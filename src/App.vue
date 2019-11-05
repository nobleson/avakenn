<template>
  <div id="app" class="flyout">
    <mdb-navbar id="main-navbar"  dark position="top" style="background-color:#3E4095" scrolling :scrollingOffset="20">
      
      <mdb-navbar-brand to="/" waves style="font-weight: bolder;">
      <img src="./assets/brand3.png"/>
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav center>
          <mdb-nav-item exact to="/"><span style="font-size:16px">Home </span></mdb-nav-item>
          <mdb-nav-item to="/school"><span style="font-size:16px">Computer School</span></mdb-nav-item>
          <mdb-nav-item to="/printingpress"><span style="font-size:16px">Printing Press</span></mdb-nav-item>
          <mdb-nav-item to="/cafe"><span style="font-size:16px">Cafe</span></mdb-nav-item>
          <mdb-nav-item to="/studio"><span style="font-size:16px">Studio</span></mdb-nav-item>
          <mdb-nav-item to="/computerplaza"><span style="font-size:16px">Plaza</span></mdb-nav-item>
         <mdb-dropdown tag="li" class="nav-item">
            <mdb-dropdown-toggle slot="toggle" tag="a" waves-fixed>BootCamp</mdb-dropdown-toggle>
             <mdb-dropdown-menu>
              <mdb-dropdown-item to="/avakennbootcamp">Avk Dev Bootcamp</mdb-dropdown-item>
              <mdb-dropdown-item to="/course">Courses</mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
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
import {    mdbDropdown, mdbDropdownItem, mdbDropdownMenu,mdbDropdownToggle, mdbNavbar, mdbContainer, mdbRow, mdbCol, mdbIcon, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand, mdbFooter } from 'mdbvue';
export default {
  name: 'app',
  components: {
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
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
