const path = require('path');
   
module.exports = {
    mode : "development",
    devtool : "eval-source-map",
    entry : {
       path: path.resolve("./src/index.js"),
    },
    module : {
        rules : [
            {
            test : /\.js$/,
            include : [path.resolve(__dirname, 'src')],
            }
        ]
    },
    resolve : {
        extensions : ['.js' , '.js'],
    },
    output : {
      path : path.resolve(__dirname, "./build"),
    filename : "bundels.js",
    },
}