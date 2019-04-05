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
class binaryNodeNext {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}
exports.binaryNodeNext = binaryNodeNext;
},{}],4:[function(require,module,exports){
const { binaryNode } = require('./binaryNode');
const { binaryNodeNext } = require('./binaryNodeNext');


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
      if (root.value == root.left.value && root.value == root.right.value) {
        cnt = 1;
      }
    }
  }
  return univalSubtreeCount(root.left) + univalSubtreeCount(root.right) + cnt;
}



function createTree(inorder, postorder) {
  //if (!inorder || ! postorder) return null;
  if (inorder.length == 0 && postorder.length == 0) return null;

  var rootval = postorder[postorder.length - 1];
  var rootIndex = inorder.indexOf(rootval);
  var leftIn = inorder.slice(0, rootIndex);
  var rightIn = inorder.slice(rootIndex + 1);

  var leftPo = postorder.slice(0, rootIndex);
  var rightPo = postorder.slice(rootIndex, postorder.length - 1);

  var root = new binaryNode(rootval);
  root.left = createTree(leftIn, leftPo);
  root.right = createTree(rightIn, rightPo);
  return root;
}

function createTree2(preorder, inorder) {
  if (inorder.length == 0 && preorder.length == 0) return null;

  var rootval = preorder[0];
  var rootindex = inorder.indexOf(rootval);

  var leftIn = inorder.slice(0, rootindex);
  var rightIn = inorder.slice(rootindex + 1);

  var leftPre = preorder.slice(1, rootindex + 1);
  var rightPre = preorder.slice(rootindex + 1);

  var root = new binaryNode(rootval);
  root.left = createTree2(leftPre, leftIn);
  root.right = createTree2(rightPre, rightIn);

  return root;
}

function lca(root, p, q) {
  if (!root) return null;
  if (root.value == p.value || root.value == q.value) return root;

  var leftsidevalue = lca(root.left, p, q);
  var rightsidevalue = lca(root.right, p, q);

  if (!leftsidevalue) return rightsidevalue;
  if (!rightsidevalue) return leftsidevalue;
  return root;
}

function recursiveTraversal(root) {
  if (!root) return null;
  console.log(root.value);
  recursiveTraversal(root.left);
  recursiveTraversal(root.right);
  //console.log("               finished");
}

function binaryTreeSame(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.value != q.value) return false;

  return (binaryTreeSame(p.left, q.left) && binaryTreeSame(p.right, q.right));

  // if (binaryTreeSame(p.left,q.left)==false) return false;
  // if (binaryTreeSame(p.right,q.right)==false) return false;

  // return true;

}
//perfect binary tree
function nextrightpointer1(root) {
  if (!root) return null;

  if (root.left) root.left.next = root.right;
  if (root.right && root.next) root.right.next = root.next.left;

  nextrightpointer1(root.left);
  nextrightpointer1(root.right);

  return root;
}

function nextrightpointer2(root) {
  if (!root) return null;
  var queue = [root];
  while (queue.length) {
    var size = queue.length;
    for (var i = 0; i < size; i++) {
      var node = queue[i];
      node.next = ((i + 1) < size) ? queue[i + 1] : null;
    }
    for (var i = 0; i < size; i++) {
      var n = queue.shift();
      if (n.left) queue.push(n.left);
      if (n.right) queue.push(n.right);
    }
  }
  return root;
}

function nextrightpointer3(root) {
  if (!root) return null;
  var queue = [root];
  while (queue.length) {
    var size = queue.length;
    for (var i = 0; i < size; i++) {
      var n = queue.shift();
      n.next = i < (size-1) ? queue[0] : null;
      if (n.left) queue.push(n.left);
      if (n.right) queue.push(n.right);
    }
  }
  return root;
}


exports.preorderTraversal = preorderTraversal;
exports.inorderTraversal = inorderTraversal;
exports.postorderTraversal = postorderTraversal;
exports.levelorderTraversal = levelorderTraversal;
exports.maximumDepthRecursive = maximumDepthRecursive;
exports.symmetricTree = symmetricTree;
exports.pathSum = pathSum;
exports.univalSubtreeCount = univalSubtreeCount;
exports.createTree = createTree;
exports.createTree2 = createTree2;
exports.lca = lca;
exports.recursiveTraversal = recursiveTraversal;
exports.binaryTreeSame = binaryTreeSame;
exports.nextrightpointer1 = nextrightpointer1;
exports.nextrightpointer2 = nextrightpointer2;
exports.nextrightpointer3=nextrightpointer3;

















},{"./binaryNode":2,"./binaryNodeNext":3}],5:[function(require,module,exports){
const { preorderTraversal, inorderTraversal ,postorderTraversal, univalSubtreeCount,
        levelorderTraversal, maximumDepthRecursive, symmetricTree,pathSum,createTree, createTree2,
         lca, recursiveTraversal, binaryTreeSame, nextrightpointer1,nextrightpointer2, nextrightpointer3
      } 
        = require('./BinaryTree/src/binaryTree');
const { binaryNode } = require('./BinaryTree/src/binaryNode');
const {binaryNodeNext} = require('./BinaryTree/src/binaryNodeNext');
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
  //rununivalSubtreeCount();
  //runcreateBinaryTreeFromInOrderAndPostOrder2();
  //runCreateTree2();
  //runprintBinaryTreeUp();
  //runlca();
  //runrecursiveTraversal();
  //runbinaryTreeSame();
  //runnextrightpointer1();
  runnextrightpointer2();
}

function displayArray(result){
  result.forEach(e => {
    console.log(e);
  });
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

function runcreateBinaryTreeFromInOrderAndPostOrder(){
  //var inorder = [9,3,20];
  //var postorder = [9,20,3];
  var inorder = [9,3,15,20,7];
  var postorder = [9,15,7,20,3];
  var tree =createTree(inorder,postorder);// createBinaryTreeFromInOrderAndPostOrder(inorder,postorder);

  var expectedRoot = new binaryNode(3);
  expectedRoot.left = new binaryNode(9);
  expectedRoot.right = new binaryNode(20);
  expectedRoot.right.left = new binaryNode(15);
  expectedRoot.right.right = new binaryNode(7);
  console.log(tree);
 
};

function runcreateBinaryTreeFromInOrderAndPostOrder2(){
  //var inorder = [9,3,20];
  //var postorder = [9,20,3];
  // var inorder = [];
  // var postorder = [];
  // var inorder = [2,4,6];
  // var postorder = [2,6,4];
  var inorder = [1,2,3,4,5];
  var postorder = [2,1,5,4,3];
    
  var tree =createTree(inorder,postorder);// createBinaryTreeFromInOrderAndPostOrder(inorder,postorder);

   
  console.log(tree);
 
};

function runCreateTree2(){
  // var inorder = [1,2,3,4];
  // var preorder = [1,4,2,3];
  var preorder = [1,2,3,4];
  var inorder = [1,4,2,3];

  var tree =createTree2(preorder, inorder);
  console.log(tree);
  // var expectedRoot = new binaryNode(1);
 
  // expectedRoot.right = new binaryNode(2);
 
  // expectedRoot.right.right = new binaryNode(3);
  // expectedRoot.right.right.right = new binaryNode(4);
}
 
var buildTree = function(inorderList, postorderList) {
  if (!postorderList.length) return null;
  
  const root = postorderList.pop();
  //const node = new TreeNode(root);
  const node = new binaryNode(root);
  const rootIndex = inorderList.indexOf(root);
  
  const leftInorderList = inorderList.slice(0, rootIndex);
  const rightInorderList = inorderList.slice(rootIndex + 1);
  
  const leftPostOrderList = postorderList.slice(0, leftInorderList.length);
  const rightPostOrderList = postorderList.slice(leftPostOrderList.length);

  node.left = leftInorderList.length ? buildTree(leftInorderList, leftPostOrderList) : null;
  node.right = rightInorderList.length ? buildTree(rightInorderList, rightPostOrderList) : null;

  return node;
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

function runprintBinaryTreeUp(){
  var root = new binaryNode(3);
  root.left = new binaryNode(9);
  root.right = new binaryNode(20);
    root.left.left = new binaryNode(15);
  // root.left.left.left = new binaryNode(19);
   root.left.right = new binaryNode(7);
  // root.right.left = new binaryNode(15);
  // root.right.right = new binaryNode(17);
}

function runlca(){
  var root = new binaryNode(3);
  root.left = new binaryNode(5);
  root.right = new binaryNode(1);
  root.left.left = new binaryNode(6);
  root.left.right = new binaryNode(2);
  root.right.left = new binaryNode(0);
  // root.right.right = new binaryNode(8);
  // root.left.left.left = new binaryNode(9);
  // root.left.right.left = new binaryNode(7);
  // root.left.right.right = new binaryNode(4);
  var actual = lca(root, new binaryNode(5),new binaryNode(1));
  console.log(`lca: ${actual.value}`);
}

function runrecursiveTraversal(){
  var root = new binaryNode(3);
  root.left = new binaryNode(5);
  root.right = new binaryNode(1);
  // root.left.left = new binaryNode(6);
  // root.left.right = new binaryNode(2);
  // root.right.left = new binaryNode(0);
  // root.right.right = new binaryNode(8);
  // root.left.left.left = new binaryNode(9);
  // root.left.right.left = new binaryNode(7);
  // root.left.right.right = new binaryNode(4);
    recursiveTraversal(root);
  //console.log(`lca: ${actual.value}`);
}

function runbinaryTreeSame(){
  var p = new binaryNode(3);
  
  p.right = new binaryNode(1);
  p.right.left = new binaryNode(5);
  //root.left.left = new binaryNode(6);
  var q = new binaryNode(3);
  //q.left = new binaryNode(5);
  q.right = new binaryNode(1);
  q.right.left = new binaryNode(5);

  var answer = binaryTreeSame(p,q);
  console.log(answer);
}

function runnextrightpointer1(){
  var root = new binaryNodeNext(1);
  root.left = new binaryNodeNext(2);
  root.right = new binaryNodeNext(3);
  root.left.left = new binaryNodeNext(4);
  root.left.right = new binaryNodeNext(5);
  root.right.left = new binaryNodeNext(6);
  root.right.right = new binaryNodeNext(7);

  var result = nextrightpointer1(root);
console.log(result);
}

function runnextrightpointer2(){
  var root = new binaryNodeNext(1);
  root.left = new binaryNodeNext(2);
  root.right = new binaryNodeNext(3);
  root.left.left = new binaryNodeNext(4);
  root.left.right = new binaryNodeNext(5);
   
  root.right.right = new binaryNodeNext(7);

  //var result = nextrightpointer2(root);
  var result = nextrightpointer3(root);
console.log(result);
}


init();
},{"./Arrays/src/array":1,"./BinaryTree/src/binaryNode":2,"./BinaryTree/src/binaryNodeNext":3,"./BinaryTree/src/binaryTree":4}]},{},[5]);
