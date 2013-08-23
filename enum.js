var Enum = function(enums) {
  this.enums = enums;
  this.createEnumerables();
}

Enum.prototype.createEnumerables = function() {
  // get reference to this object
  // for later use in .forEach loop
  var root = this;

  // loop the input array and
  // create a new property for each enum
  // in the enum array. the empty object makes
  // each property individual.
  this.enums.forEach(function(enumName) {
    root[enumName] = {};
  });

  // freeze the object to ensure type safety
  Object.freeze(this);
}