//1.a PrintOddNumbers using anonymous

let oddnum= function (arr){
    let tem=[]
    for(i=0;i<arr.length;i++){
        if(arr[i]%2 != 0){
        tem.push(arr[i])
        }
    } return tem
}
console.log(oddnum([1, 2, 3, 4, 5, 6, 7, 8, 9]))

//1.a printOddNumbers using IIFE

let odd=(function num (array){
let sample=[]
    for(i=0;i<array.length;i++){
        if(array[i]%2 != 0){
        sample.push(array[i])
        }
    } return sample
})([2,3,4,5,6,7,8,9])

console.log(odd)



//1.b convert strings to title caps using anonymous

let titlecaps=function name(string) {
  const capital =(word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  
  return string.map(word => capital(word));
}

console.log(titlecaps(["sky", "moon", "sun"]));

//1.b convert strings to title caps using IIFE

let titlecap= (function name(string) {
  const cap =(word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  
  return string.map(word => cap(word));
})(["apple","banana","orange"]);

console.log(titlecap); 



//1.c print sum of all numbers using anonymous

let sumval=function (arr){
    let sam=0
    for(i=0;i<arr.length;i++){
        sam+=arr[i]
    }
    return sam
}
console.log(sumval([11, 22, 33, 44, 55]))

//1.c sum of all numbers using IIFE

let sumof=(function name(arr){
    let dommy=0;
    for(i=0;i<arr.length;i++){
        dommy+=arr[i]
    }
    return dommy
})([10,20,30,40,50])

console.log(sumof)



//1.d print prime number using anonymous

let prime=function (arr) {
    let isprime=function (num){
    for(let fact=2;fact<num/2;fact++){
        if(num % fact ==0){
            return false;
        }
    }
    return true;
}
    let tem=[];
    for(i=0;i<arr.length;i++){
        if (isprime(arr[i])) {
            
            tem.push(arr[i])
        }
    }
    return tem;
}
console.log(prime([1, 3, 78, 977, 33, 11]))

//1.d print prime number using IIFE

let prim=(function name(arr) {
    function val(num) {
    for(let fact=2;fact<num/2;fact++){
        if(num % fact ==0){
            return false;
        }
    }
    return true;
}

    let tem=[];
    for(i=0;i<arr.length;i++){
        if(val(arr[i])){
            tem.push(arr[i])
        }
    }
    return tem;
})([1,3,78,977,33,11])
console.log(prim)



//1.e Return all palindroms using anonymous

let ispalindroms = function (arr) {
    let flag = [];
    for (let ind = 0; ind < arr.length; ind++) {
        let str = arr[ind];
        let ispalind = true;
        for (let i = 0, j = str.length - 1; i < j; i++, j--) {
            if (str[i] !== str[j]) {
                ispalind = false;
                break;
            }
        }
        if (ispalind) {
            flag.push(arr[ind]);
        }
    }
    return flag;
}
console.log(ispalindroms(["1221", "3443","8999","0990"]));

//1.e Return all palindroms using IIFE

let palindromes = (function (arr) {
    let flag = [];
    for (let ind = 0; ind < arr.length; ind++) {
        let str = arr[ind];
        let ispalind = true;
        for (let i = 0, j = str.length - 1; i < j; i++, j--) {
            if (str[i] !== str[j]) {
                ispalind = false;
                break;
            }
        }
        if (ispalind) {
            flag.push(arr[ind]);
        }
    }
    return flag;
})(["1221", "3443", "8999", "0990"]);

console.log(palindromes);



//1.f return median of two sorted array using anonymous

let findMedian=function(arr1, arr2) {
  var merged =arr1.concat(arr2).sort(function(a, b) {
    return a - b;
  });
  var length = merged.length;
  
  
  var mid = length / 2;
  
  if (length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid |0];
  }
}

console.log(findMedian([1, 9, 4], [2, 8, 7]));

//1.f return median of two sorted array using IIFE

let median=(function name(array1,array2){
    let addarr=array1.concat(array2).sort(function(a,b){
        return a - b;
    })
    let len=addarr.length
    let midd=len/2;
    if(len%2==0){
        return (addarr[midd-1]+addarr[midd])/2
    }
    else{
        return addarr[midd | 0]
    }
})([2,4,7,9],[8,5,1])

console.log(median)



//1.g remove duplicates from an array using

let removedup=function(arr){
    let newarr=[]
    for(let i=0;i<arr.length;i++){
        if(newarr.indexOf(arr[i]) === -1){
            newarr.push(arr[i])
        }
    }
    return newarr
}
console.log(removedup([1, 3, 4, 5, 3, 5, 1]))

//1.g remove duplicates from an array using

let removeduplicate=(function name(array){
    let newarray=[]
    for(let i=0;i<array.length;i++){
        if(newarray.indexOf(array[i])== -1){
            newarray.push(array[i])
        }
    }
    return newarray
})([11,22,33,44,22,66,55,33])

console.log(removeduplicate)



//1.h Rotate array by k times using anonymous

let rotateArray = function(arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr
};

console.log(rotateArray([1,2,3,4,5],2))
 
//1.h Rotate array by k times using IIFE

let rotate=(function name(arr,k){
    for (let i = 0; i < k; i++){
        arr.unshift(arr.pop());
     }
     return arr
 })([2,4,6,8],3)
 
 console.log(rotate)



