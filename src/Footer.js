import React from 'react';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';
import github from './images/github.png';
import google from './images/google-play.png';

class Footer extends React.Component {
   render() {
	   var FooterStyle1 = {
         marginBottom:0
       }
	   var linkedinURL = "https://in.linkedin.com/in/rahamathullah-s-18a12816";
	   var twitterURL = "https://twitter.com/Rahamat87523498";
	   var githubURL = "https://github.com/rahamath18";
	   var googleURL = "https://play.google.com/store/apps/developer?id=Rahamathullah+S";
	   var persCommunityURL = "https://rahamaths.appspot.com/";
      return (

			<div class="jumbotron text-center" style={FooterStyle1}>
				<a href={linkedinURL}><img src={linkedin} width="32" height="30" /></a>&nbsp;&nbsp;
				<a href={twitterURL}><img src={twitter} width="32" height="30" /></a>&nbsp;&nbsp;
				<a href={githubURL}><img src={github} width="32" height="30" /></a>&nbsp;&nbsp;
				<a href={googleURL}><img src={google} width="32" height="30" /></a>	
				<p>Copyright © 2003-2019 <a href={persCommunityURL}>rahamaths.appspot.com</a>, all rights reserved.</p>
			</div>
      );
   }
}

export default Footer;