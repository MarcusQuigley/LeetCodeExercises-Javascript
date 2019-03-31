(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


const preorderTraversal = (inputArray)=>{
  var tree =   [111,121] ;

  // inputArray.forEach(element =>{
  //   console.log('element');
  // }); 
  

  return tree;
}

exports.preorderTraversal = preorderTraversal;
},{}],2:[function(require,module,exports){
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
},{"./BinaryTree/src/binaryTree":1}]},{},[2]);
