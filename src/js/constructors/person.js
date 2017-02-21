function Person (obtions) {
  obtions = obtions || {};
  this.pet = function(sadie){ sadie.status = "happy" }
};

export { Person };
