// constructor
var Enum = function(enums, options) {
  this.setDefaults();

  if (options) {
    this.setOptions(options);
  }

  this.enums = enums;
  this.createEnumerables();
}

// set settings passed by the user
Enum.prototype.setOptions = function(options) {
  for (attribute in options) {
    if (options.hasOwnProperty(attribute)){
      this[attribute] = options[attribute];
    }
  }
}

// set default properties
Enum.prototype.setDefaults = function () {
  this.finalize = true;
}

// get the name of a property
Enum.prototype.toString = function () {
  // simply return the property 'name' that
  // gets created in the forEach loop in createEnumerables()
  return this.name;
}

// shortcut to get a property by its name
Enum.prototype.getByName = function (name) {
  return this[name];
}

// get all enum names in an array
// does not return the actual reference
Enum.prototype.getNames = function () {
  return this.enums;
}

Enum.prototype.createEnumerables = function () {
  // get reference to this object
  // for later use in .forEach loop
  var root = this;

  // loop the input array and
  // create a new property for each enum
  // in the enum array. the empty object makes
  // each property individual.
  this.enums.forEach(function(enumName) {
    root[enumName] = { toString: root.toString, name: enumName };
  });

  // freeze the object to ensure type safety
  if (this.finalize) {
    Object.freeze(this);
  }
}