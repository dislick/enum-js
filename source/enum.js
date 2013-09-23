//     enum.js

//     (c) 2013 Patrick Muff
//     enum.js may be freely distributed under the MIT license.

(function() {

  // constructor
  this.Enum = function(enums, options) {
    this.setDefaults();

    if (options) {
      this.setOptions(options);
    }

    this.enums = enums;
    this.createEnumerables();
  }

  // set settings passed by the user
  this.Enum.prototype.setOptions = function(options) {
    // loop attributes in object 'options'
    for (attribute in options) {
      if (options.hasOwnProperty(attribute)) {
        this[attribute] = options[attribute];
      }
    }
  }

  // set default properties
  this.Enum.prototype.setDefaults = function() {
    this.finalize = true;
  }

  // get the name of a property
  this.Enum.prototype.toString = function() {
    // simply return the property 'name' that
    // gets created in the forEach loop in createEnumerables()
    return this.name;
  }

  // shortcut to get a property by its name
  this.Enum.prototype.getByName = function(name) {
    return this[name];
  }

  // get all enum names in an array
  // does not return the actual reference
  this.Enum.prototype.getNames = function() {
    return this.enums;
  }

  this.Enum.prototype.createEnumerables = function() {
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
    if (this.finalize && Object.freeze) {
      Object.freeze(this);
    } else if (!Object.freeze) {
      console.log('Enum.js: Finalizing objects not supported.');
    }
  }

})();