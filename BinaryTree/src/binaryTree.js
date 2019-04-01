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

 var postorderTraversal =function (root){
   if (!root) return [];
   var results = [];
   var stack = [root];
   
   while(stack.length){
    var current = stack.pop();
    results.unshift(current.value);
   
    if(current.left) stack.push(current.left);
    if(current.right) stack.push(current.right);

   }
   return results;
 }
exports.preorderTraversal = preorderTraversal;
exports.inorderTraversal = inorderTraversal;
exports.postorderTraversal = postorderTraversal;






