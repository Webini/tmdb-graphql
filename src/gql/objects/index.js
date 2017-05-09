const fs        = require('fs');
const path      = require('path');
const basename  = path.basename(module.filename);

module.exports = function(resolvers) {
  const objects = {};

  function objectGetter(name) {
    if (objects[name] === undefined) {
      const objectFactory = require(path.join(__dirname, `${name}.js`));
      objects[name] = objectFactory(resolvers, objectGetter);
    }

    return objects[name]; 
  }

  fs
    .readdirSync(__dirname)
    .filter((file) => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach((file) => {
      objectGetter(path.basename(file, path.extname(file)));
    })
  ;
  
  return objects;
}
