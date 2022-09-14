//first one
function sum(el1,el2) {
  
  let sum= 0 ;
  for(let i = el1 ; i <= el2 ; i++){
    sum += i
  }
  return sum
}
console.log(sum(1,4));
console.log(sum(0,1));
console.log(sum(1,1));
console.log(sum(-1,0));

//second one
function dif(arr){
  for(let i = 0 ; i < arr.length ; i++){
    for(let j = 1 ; j < arr.length; j++){
      if(arr[i] !== arr[j]){
        return arr[j]
      }
    }
  }
  
}


console.log(dif([ 1, 1, 1, 2, 1, 1 ]))// 2
console.log(dif([ 0, 0, 0.55, 0, 0 ])) // 0.55

//third one
function anagram(word1,word2){
  
  let arr= word1.split('');
  let arr2= word2.split('');

  if(word1.length !== word2.length){
    return false

  }else{
    for(let i = 0 ; i < arr.length; i++){
      if(arr.includes(arr2[i])){
        return true
      };
    };
  };

};

console.log(anagram('abba','baab'));
console.log(anagram('abba','bbaa'));
console.log(anagram('abba','abbba'));

