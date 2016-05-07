This App is intended to serve the needs of Reggae (and in the future other caribbean genres) enthusiasts all around the world. The intention is for this app to be the centre point of interaction within the scope of caribbean music and entertainment by leveraging the existing JulyOne customer following and attracting more reggae fans to this virtual entertainment ecosystem.

The App is an hybrid app built upon the Angular.js & Ionic UI framework. The details of implementation for now can be found in the Slack group particularly the #app channel.

1. Download the zip file or save to your GIT client. 
2. Install Intel XDK and click open an existing project then browse for the file Reggae360.xdk file within the Reggae360 folder.
3. Create a Git branch and start coding
4. make your pull request and we as a group will assess the change then utlimately commit.

Architecture of the App 

The App uses a MVC pattern 
1. Controller and service providers are found in the JS directory
2. Html partials in the template directory
3. Models/Data will be sourced from IReggaeDay API and also a dedicated cloud service for the App will be implemented if necassary.

Description of files and folder withing th Reggae360/.. 

1. Contains a list of XML configuration files for the different platforms. Eg, intelxdk.config.android.xml is comparible to the typical android manifest in an native android application. Package.json contains the cofigurations for gulp, bower etc.


2. Bower (node.js) package manager. Bower offers a generic, unopinionated solution to the problem of front-end package management, while exposing the package dependency model via an API that can be consumed by a more opinionated build stack

    - to make use of bower, you'll need to install it globally to your system using the following command
        $ npm install -g bower
      (Bower depends on Node.js and npm, therefore ensure that those are already installed see https://nodejs.org/en/ for more details. Also make sure that git is installed as some bower packages require it to be fetched and   installed.)
      
    - Some bower packages are already extracted within project directory, but will only work properly if bower has been installed       globally on your system and the versions are compatible (bower verson 1.7.9 currently runs on my system, so it would be a good    place to start there)
    

3. Gulp build tool:
    This plugin in our case is currently used to build sass for full customization of the ionic UI framework
    - please run this command to install gulp globally.  
          npm install --global gulp-cli
    - gulp dependencies are already extracted within the directory. cd to project directory and run 'gulp sass' to build a modified     ionic.app.scss to see the effect
