1. Create a new repository in Github, e.g. https://github.com/dipina/Arab2RomanServer 
2. Clone the created repository in your hard drive
3. Store the contents of this directory under the local copy of your remote repository
4. Edit file docs/index.html
	a. Edit the line witht the constant PREFIX_URL. Ensure that it maps to a valid back-end deployed in HEROKU of your app
		var PREFIX_URL = "https://cryptic-reaches-27527.herokuapp.com/";
5. Ensure contents are pushed into your remote repository. For example:
	git add .
	git commit -m "updated PREFIX_URL variable to point to my back-end"
	git push
6. Edit the settings of your repository in Github
	a. In section Github Pages
		- Indicate as source: master
		- Indicate as directory: docs
		- Hit save
7. Go to the Github pages site made available, e.g. https://dipina.github.io/Arab2RomanServer/
