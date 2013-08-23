var Enum = function(enums) {
  this.enums = enums;
  this.createEnumerables();
}

Enum.prototype.createEnumerables = function() {
  var root = this;

  this.enums.forEach(function(enumName) {
    this[enumName] = {};
  });

  Object.freeze(this);
}