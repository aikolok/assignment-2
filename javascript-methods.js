/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
// The map() method creates a new array populated with the results 
// of calling a provided function on every element in the calling array. 
Array.prototype.myMap = function(callbackFn) {
  let new_array = [];
  for (let i = 0; i < this.length; i++) {   
    if (this[i] === undefined) continue;
    new_array.push(callbackFn(this[i], i, this));
  }
  return new_array;
};

// FILTER //
// The filter() method creates a new array with all elements 
// that pass the test implemented by the provided function
Array.prototype.myFilter = function(callbackFn) {
  let new_array = [];
  for (let i = 0; i < this.length; i++) {   
    if (this[i] === undefined) continue;
    if (callbackFn(this[i], i, this) == true) {
      new_array.push(this[i]);
    }
  }
  return new_array;
};

// SOME //
// The some() method tests whether at least one element 
// in the array passes the test implemented by the provided 
// function. It returns true if, in the array, it finds an 
// element for which the provided function returns true; 
// otherwise it returns false. It doesn't modify the array. 
Array.prototype.mySome = function(callbackFn) {
  for (let i = 0; i < this.length; i++) {   
    if (this[i] === undefined) continue;
    if (callbackFn(this[i], i, this) == true) {
      return true;
    }
  }
  return false;
};

// EVERY //
// The every() method tests whether all elements in the array 
// pass the test implemented by the provided function. 
// It returns a Boolean value. 
Array.prototype.myEvery = function(callbackFn) {
  for (let i = 0; i < this.length; i++) {   
    if (this[i] === undefined) continue;
    if (callbackFn(this[i], i, this) == false) {
      return false;
    }
  }
  return true;
};

// REDUCE //
// The reduce() method executes a user-supplied "reducer" 
// callback function on each element of the array, in order, 
// passing in the return value from the calculation on the 
// preceding element. The final result of running the reducer 
// across all elements of the array is a single value. 
Array.prototype.myReduce = function(callbackFn) {
  let result = callbackFn(this[0], this[1], 1, this);
  for (let i = 2; i < this.length; i++) {   
    if (this[i] === undefined) continue;
    result = callbackFn(result, this[i], i, this)
  }
  return result;
};

// INCLUDES //
// The includes() method determines whether an array includes 
// a certain value among its entries, returning true or false 
// as appropriate. 
Array.prototype.myIncludes = function(searchElement) {
  for (let i = 0; i < this.length; i++) {   
    if (this[i] === undefined) continue;
    if (this[i] == searchElement) {
      return true;
    }
  }
  return false;
};

// INDEXOF //
// The indexOf() method returns the first index at which a 
// given element can be found in the array, or -1 if it is not 
// present. 
Array.prototype.myIndexOf = function(searchElement) {
  for (let i = 0; i < this.length; i++) {   
    if (this[i] === undefined) continue;
    if (this[i] == searchElement) {
      return i;
    }
  }
  return -1;
};

// LASTINDEXOF //
// The lastIndexOf() method returns the last index at which 
// a given element can be found in the array, or -1 if it is 
// not present. The array is searched backwards.
Array.prototype.myLastIndexOf = function(searchElement) {
  for (let i = this.length - 1; i >= 0; i--) {   
    if (this[i] === undefined) continue;
    if (this[i] == searchElement) {
      return i;
    }
  }
  return -1;
};

// KEYS //
// The Object.keys() method returns an array of a given 
// object's own enumerable property names, iterated in the 
// same order that a normal loop would. 
Object.myKeys = function(object) {
  let keys = [];
  for(const property_name in object) {
    keys.push(String(property_name));
  }
  return keys;
};

// VALUES //
// The Object.values() method returns an array of a given 
// object's own enumerable property values, in the same order 
// as that provided by a for...in loop.  
Object.myValues = function(object) {
  let values = [];
  for(const property_name in object) {
    values.push(object[property_name]);
  }
  return values;
};
