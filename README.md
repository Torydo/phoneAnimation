## Bootstrap Web Theme using ReactJS 16.8.5 and Bootstrap 4.3.1 (nav-top-menu, left/right nav, main content & footer) including following packages

1. ReactJS 16.8.5
2. Bootstrap 4.3.1
3. JQuery 3.4.1
4. popper.js 1.15.0
5. font-awesome 4.7.0


## Step-By-Step Guide

Download node-v10.16.1-win-x64.zip from https://nodejs.org/en/download/

Unzip node-v10.16.1-win-x64.zip

### Add following path in Environment Variable's Path, if you have downloaded Node.js Windows Binary (.zip)

	\node-v10.16.1-win-x64\

	\node-v10.16.1-win-x64\node_modules\npm\bin\

### Then test following command in command prompt

	node -v

	nmp -v
	
### Create folder 'D:\ReactJS-16.8.5-Bootstrap-4.3.1-Example-2'	

### With "create-react-app" Command

	Instead of using webpack and babel, using the create-react-app command, you can install ReactJS
	
	D:\ > npx create-react-app reactjs-16.8.5-bootstrap-4.3.1-example-2
	D:\ReactJS-16.8.5-Bootstrap-4.3.1-Example-2 > npm install bootstrap
	D:\ReactJS-16.8.5-Bootstrap-4.3.1-Example-2 > npm install jquery
	D:\ReactJS-16.8.5-Bootstrap-4.3.1-Example-2 > npm install popper.js
	D:\ReactJS-16.8.5-Bootstrap-4.3.1-Example-2 > npm install font-awesome

### Run application
	D:\ReactJS-16.8.5-Bootstrap-4.3.1-Example-2 > npm start
	(Browser opens http://localhost:3000/)
	
### To generate the production build
	D:\ReactJS-16.8.5-Bootstrap-4.3.1-Example-2 > npm run build
	goto ...\ReactJS-16.8.5-Bootstrap-4.3.1-Example-2\bundle