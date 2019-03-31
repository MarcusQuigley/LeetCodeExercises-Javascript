 const{preorderTraversal} = require('./BinaryTree/src/binaryTree');
 
//import { preorderTraversal } from './BinaryTree/src/binaryTree';

function init(){
  runBinaryTree();
}

function runBinaryTree(){

  const inputArray = [1,null,2,3];  
  var result = preorderTraversal(inputArray)
  result.forEach(e=>{
    console.log(e);
  });
}

init();