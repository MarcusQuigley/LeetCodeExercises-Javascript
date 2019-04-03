(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var missingNumber = (nums)=>{
  if (!nums) return 0;
  // var hasZero=false;
  // if (nums.length==1) {
  //   return nums[0]==0? 1: 0;
  // }

  var subtotal = 0;
  var n = nums.length;
  nums.forEach(element => {
    subtotal+=element;
   // if (hasZero==false && element==0) hasZero = true;
  });
 // if(!hasZero) return 0;
  var total = (n*(n+1))/2;
  return total-subtotal;
}

exports.missingNumber = missingNumber;
},{}],2:[function(require,module,exports){
class binaryNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
exports.binaryNode = binaryNode;
},{}],3:[function(require,module,exports){
require('./binaryNode');

var preorderTraversal = function (root) {
  if (!root) return [];
  var result = [];
  var stack = [root];
  while (stack.length) {
    var node = stack.pop();

    result.push(node.value);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
};



var inorderTraversal = function (root) {
  if (!root) return [];
  var result = [];
  var stack = [];
  var current = root;

  while (stack.length || current) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop();
      result.push(current.value);
      if (current.right) {
        stack.push(current.right);
        current = current.right.left;
      } else {
        current = null;
      }
    }
  }

  return result;
};

var postorderTraversal = function (root) {
  if (!root) return [];
  var results = [];
  var stack = [root];

  while (stack.length) {
    var current = stack.pop();
    results.unshift(current.value);

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);

  }
  return results;
}

var levelorderTraversal = function (root) {
  var results = [];
  var temp;
  var queue = [root];
  while (queue.length) {
    var size = queue.length;
    temp = [];
    for (var i = 0; i < size; i++) {
      var node = queue.shift();
      temp.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    results.push(temp);
  }
  return results;
}


var maximumDepthRecursive = function (current) {
  if (!current) return 0;
  var left = maximumDepthRecursive(current.left);
  var right = maximumDepthRecursive(current.right);
  return Math.max(left, right) + 1

};

var symmetricTree = function (root) {
  return (!root || symmetricTreeHelper(root.left, root.right));
}

var symmetricTreeHelper = function (left, right) {
  if (!left && !right) return true;
  if (left && right) {
    return (left.value === right.value) &&
      (symmetricTreeHelper(left.left, right.right) && symmetricTreeHelper(left.right, right.left));
  }
  else {
    return false;
  }
}

var pathSum = function (node, sum) {
  if (!node) return 0;
  if (!node.left && !node.right) return node.value == sum;
  return (pathSum(node.left, sum - node.value) || pathSum(node.right, sum - node.value));
}

function univalSubtreeCount(root) {
  if (!root) return 0;
  if (!root.left && !root.right) {
    return 1;
  }
  else {
    var cnt = 0;
    if (root.left && root.right) {
      if (root.value == root.left.value &&  root.value == root.right.value) {
        cnt = 1;
      }
    }
  }
  return univalSubtreeCount(root.left) + univalSubtreeCount(root.right) + cnt;
}

exports.preorderTraversal = preorderTraversal;
exports.inorderTraversal = inorderTraversal;
exports.postorderTraversal = postorderTraversal;
exports.levelorderTraversal = levelorderTraversal;
exports.maximumDepthRecursive = maximumDepthRecursive;
exports.symmetricTree = symmetricTree;
exports.pathSum = pathSum;
exports.univalSubtreeCount = univalSubtreeCount;
},{"./binaryNode":2}],4:[function(require,module,exports){
const { preorderTraversal, inorderTraversal ,postorderTraversal, univalSubtreeCount,
        levelorderTraversal, maximumDepthRecursive, symmetricTree,pathSum} 
        = require('./BinaryTree/src/binaryTree');
const { binaryNode } = require('./BinaryTree/src/binaryNode');
const {missingNumber} = require('./Arrays/src/array');

function init() {
  //runBinaryTreepreorderTraversal();
  //runBinaryTreeinorderTraversal();
  //runBinaryTreepostorderTraversal();
  //runlevelorderTraversal();
  //runmaximumDepth();
  //runsymetricTree();
  //runpathSum();
  //runmissingNumber();
  rununivalSubtreeCount();
}

function runBinaryTreepreorderTraversal() {

  // var root = new binaryNode(3);
  // root.left = new binaryNode(1);
  // root.right = new binaryNode(2);
  var root = new binaryNode(1);
  root.left = new binaryNode(4);
  root.right = new binaryNode(3);
  root.left.left = new binaryNode(2);
  var result = preorderTraversal(root)
  result.forEach(e => {
    console.log(e);
  });
}

function runBinaryTreeinorderTraversal() {
  var root = new binaryNode(20);
  root.left = new binaryNode(8);
  root.right = new binaryNode(22);
  root.left.left = new binaryNode(4);
  root.left.right = new binaryNode(12);
  root.left.right.left = new binaryNode(10);
  root.left.right.right = new binaryNode(14);
  var results = inorderTraversal(root)
  displayArray(results);
};

function runBinaryTreepostorderTraversal(){
  var root = new binaryNode(1);
  root.left = new binaryNode(2);
  root.right = new binaryNode(3);
  root.left.left = new binaryNode(4);
  root.right.right = new binaryNode(5);
  var results = postorderTraversal(root);
  displayArray(results);
}

function runlevelorderTraversal(){
  var root = new binaryNode(1);
  root.left = new binaryNode(2);
  root.right = new binaryNode(3);
  root.left.left = new binaryNode(4);
  root.left.right = new binaryNode(5);
  root.right.left = new binaryNode(6);
  var results = levelorderTraversal(root);
  displayArray(results);

}

function runmaximumDepth(){
  var root = new binaryNode(3);
  root.left = new binaryNode(9);
  root.right = new binaryNode(20);
  root.right.left = new binaryNode(9);
  root.right.right = new binaryNode(9);

  var depth = maximumDepthRecursive(root);
  console.log(`maximumDepth = ${depth}`);
}

function runsymetricTree(){
  root = new binaryNode(1);
  root.left = new binaryNode(2);
  root.right = new binaryNode(2);
  // root.left.left = new binaryNode(3);
  // root.left.right = new binaryNode(4);
  // root.right.left = new binaryNode(4);
  // root.right.right = new binaryNode(3);
  var actual = symmetricTree(root);
  console.log(`is Symmetric: ${actual}`);
}

function runpathSum(){
  root = new binaryNode(3);
  root.left = new binaryNode(4);
  root.right = new binaryNode(2);
  var actual = pathSum(root,5);
  console.log(`is pathSum: ${actual}`);
}

function runmissingNumber(){
  var nums = [0,3,2,1,5];
  var actual = missingNumber(nums);
  console.log(`missingNumber: ${actual}`);
}

function displayArray(result){
  result.forEach(e => {
    console.log(e);
  });
}

function rununivalSubtreeCount(){
  root = new binaryNode(0);
  root.left = new binaryNode(1);
  root.right = new binaryNode(0);
  root.right.left = new binaryNode(1);
  root.right.right = new binaryNode(0);
  // root.right.left.left = new binaryNode(1);
  // root.right.left.right = new binaryNode(1);
  var actual = univalSubtreeCount(root);
};



init();
},{"./Arrays/src/array":1,"./BinaryTree/src/binaryNode":2,"./BinaryTree/src/binaryTree":3}]},{},[4]);
