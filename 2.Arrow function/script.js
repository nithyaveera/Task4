//2.a PrintOddNumbers using arrow

let findodd = (arrayy) => {
let dup=[]
    for(i=0;i<arrayy.length;i++){
        if(arrayy[i]%2 != 0){
        dup.push(arrayy[i])
        }
    } return dup
    
}
console.log(findodd([11, 22, 33, 44, 55, 66]))

//2.b convert strings to title caps using arrow

let titlecapstr=(string)=> {
  const firstletter =(word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  
  return string.map(word => firstletter(word));
}

console.log(titlecapstr(["bus","bike","car"])); 

//2.c sum of all numbers using arrow

let sum=(arr) => {
    let tem=0;
    for(i=0;i<arr.length;i++){
        tem+=arr[i]
    }
    return tem
}
console.log(sum([100, 200, 300, 400]))

//2.d Reurn all prime number using arrow

let findprime= (arr) =>{
    let find= (num) => {
    for(let fact=2;fact<num/2;fact++){
        if(num % fact ==0){
            return false;
        }
    }
    return true;
}
    let tem=[];
    for(i=0;i<arr.length;i++){
        if(find(arr[i])){
            tem.push(arr[i])
        }
    }
    return tem;
}
console.log(findprime([1,2,78,977,33,997,11]))

//2.e Return all palindroms using arrow

let ispalindrom = (arr) => {
    let flag = [];
    for (let ind = 0; ind < arr.length; ind++) { // Fixed incrementing the loop variable
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
console.log(ispalindrom(["1221", "3443", "8999", "0990"]))







