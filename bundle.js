(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class binaryNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
exports.binaryNode = binaryNode;
},{}],2:[function(require,module,exports){
require('./binaryNode');

var preorderTraversal = function (root) {
  if (!root) return [];
  var result = [];
  var stack = [root];
  while (stack.length) {
    var node = stack.pop();
    result.push(node.value);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }


  return result;
};

exports.preorderTraversal = preorderTraversal;
},{"./binaryNode":1}],3:[function(require,module,exports){
const { preorderTraversal } = require('./BinaryTree/src/binaryTree');
const { binaryNode } = require('./BinaryTree/src/binaryNode')

function init() {
  runBinaryTree();
}

function runBinaryTree() {
  var root = new binaryNode(1);
  root.right = new binaryNode(2);
  root.right.left = new binaryNode(3);

  var result = preorderTraversal(root)
  result.forEach(e => {
    console.log(e);
  });
}

init();
},{"./BinaryTree/src/binaryNode":1,"./BinaryTree/src/binaryTree":2}]},{},[3]);
