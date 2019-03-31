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