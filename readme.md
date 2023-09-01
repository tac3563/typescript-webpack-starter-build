## Setting up webpack:

- install NPM with npm init -y
- install webpack and webpack cli has dev dependencies with npm install -D webpack webpack-cli
- edit package.json scripts to run webpack with build command
- create src and dist folders with the index.html file moved to dist.
- create webpack.config.js file
    - Add module.exports object where you can set the mode (e.g. development or production), entry (e.g. src files), and output (e.g. dist files).
    - You can also create a path variable which allows you to specify the path of the files in the entry or output properties. 
    - Add the loaders for loading in sass files, images and fonts.  
        - run npm install -D sass style-loader css-loader sass-loader
        - Create modules object in webpack.config file which has a rules array.
        - inside the rules array, add an object which sets the file extension and then which loaders should be used e.g. scss uses style-loader, css-loader, and sass-loader. 
    - Add watch script to run build on changes
        - Add watch script to package.json
        - Create dev server object with required options such as localhost