import React from 'react';
import logo from './images/profpic.jpg';

class Header extends React.Component {
   render() {
	  var mainNavStyle = {
         marginBottom:0
      }
	  var loginTxtStyle1 = {
		color: 'white'
	  }
	  var searchIconStyle1 = {
		color: 'white'
	  }
      return (
		  <div>		    
		    <div class="jumbotron text-center" style={mainNavStyle}>
			  <h1>Example Project on ReactJS 16.8.5 with Bootstrap 4.3.1</h1>
			  <p>Resize this responsive page to see the effect!</p> 
			</div>

			<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
			  <a class="navbar-brand" href={logo}><img src={logo} alt="logo"/></a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
				<span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="collapsibleNavbar">
				<ul class="navbar-nav">
				  <li class="nav-item">
					<a class="nav-link" href="home.html">HOME</a>				
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">ABOUT</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">PRODUCTS</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">SERVICES</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">DOWNLOADS</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">CUSTOMERS</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">CONTACTS</a>
				  </li>
				  <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
				  <li class="nav-item">
					<input type="text" name="search" value="" placeholder="Search ..."/>&nbsp;
					<i class="fa fa-search" style={searchIconStyle1}></i>
				  </li>
  				  <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
				  <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
				  <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
				  <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
				  <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
				  <li class="nav-item">
					<a href="#" class="nav-link"> <i class="fa fa-sign-in" style={searchIconStyle1}></i> Login</a>
				  </li>
				</ul>
			  </div>  
			</nav>
         </div>		 
      );
   }
}

class AboutMyself extends React.Component {
   render() {
	  var myStyle = {
         fontSize: 15,
	     textAlign: "right"
      }
      return (
         <div style={myStyle}>
            <u>Rahamath S</u> - <a href = "mailto:rahamath18@yahoo.com?subject = Feedback&body = Message">rahamath18@yahoo.com</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         </div>
      );
   }
}

export default Header;