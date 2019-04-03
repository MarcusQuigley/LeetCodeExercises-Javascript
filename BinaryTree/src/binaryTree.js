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
  while(queue.length){
    var size = queue.length;
    temp = [];
    for(var i=0;i<size;i++){
      var node = queue.shift();
      temp.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    results.push(temp);
  }
  return results;
}

 
var maximumDepthRecursive = function(current){
  if(!current) return 0;
  var left =  maximumDepthRecursive(current.left);
  var right =  maximumDepthRecursive(current.right);
  return Math.max(left,right)+1
  
};

var symmetricTree = function(root){
  return (!root || symmetricTreeHelper(root.left,root.right));
}

var symmetricTreeHelper = function(left,right){
  if(!left && !right) return true;
  if(left && right){
    return(left.value === right.value) &&
      (symmetricTreeHelper(left.left,right.right) && symmetricTreeHelper(left.right,right.left));
  }
  else {
    return false;
  }
}

 
 
var pathSum = function(node, sum){
  if(!node) return 0;
  if (!node.left && !node.right) return node.value==sum;
  return (pathSum(node.left,sum-node.value) || pathSum(node.right,sum-node.value) ); 
  }

exports.preorderTraversal = preorderTraversal;
exports.inorderTraversal = inorderTraversal;
exports.postorderTraversal = postorderTraversal;
exports.levelorderTraversal = levelorderTraversal;
exports.maximumDepthRecursive = maximumDepthRecursive;
exports.symmetricTree = symmetricTree;
exports.pathSum = pathSum;
