//problem-1: reverse a string

let str = "hello"
const reverseFunction = (str)=>{
  let reverseStr = str.split('').reverse().join("")
  return reverseStr
}

reverseFunction(str)



// Problem 2: Count Vowels in a String


let str='khondaker'

function checkVowel(str){
  let count=0;
 
  let strArr=str.split("")
  
 for(let i = 0; i< strArr.length; i++){
   
   if(strArr[i] ==='a'|| strArr[i] ==='e'||strArr[i] ==='i'||strArr[i] ==='o'||strArr[i] ==='u' ){
     count++
   }
}
  return count
}

checkVowel(str)

//Problem-3: Palindrom checker

let input = 'foof'
const palindromChecker=(str)=>{
    let reverseInput = str.split('').reverse().join("")
    
  if(input === reverseInput){
    return true
  }else{
    return false
  }
}

palindromChecker(input)


// Problem 4: Find the Maximum Number

let arr = [5, 1, 9, 3,12,11,100,0]
const findMax=(arr)=>{
  let max = arr.sort((a,b)=> b - a)
  return max[0]
}
findMax(arr)


// Problem 5: Remove Duplicates from an Array
let arr = [1, 2, 2, 3, 4, 4]
const removeDuplicate=(arr)=>{
  let fixedArr = []
  for(let i = 0; i<arr.length; i++){
    if(!fixedArr.includes(arr[i])){
      fixedArr.push(arr[i])
    }
  }
  return fixedArr
}
removeDuplicate(arr)



// Problem 6: Sum of All Numbers in an Array

let arr =[1, 2, 3, 4,5,6,7,8]
const totalSUm =(arr)=>{
  let sum = 0;
  
  for(let i = 0; i<arr.length; i++ ){
    console.log(arr[i])
    sum+=arr[i]
  }
  return console.log(sum)
}

totalSUm(arr)


// Problem 7: Find Even Numbers in an Array

 let arr =[1, 2, 3, 4,5,6,7,8,1232]
const evenChecker = (arr) => {
  const even = [];
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      even.push(arr[i])
    }
  }
  return console.log(even)
}

evenChecker(arr)

// Problem 8: Capitalize First Letter of Each Word

let str = "hello world"
const capFirst = (str)=>{
  let strArr = []
  let splited = str.split(" ")
  for(let i = 0; i<splited.length; i++){
    let word = splited[i][0].toUpperCase() + splited[i].slice(1)
    
    strArr.push(word)
  }
  
  return console.log(strArr.join(" "))
  
}
capFirst(str)

// Problem 9: Find the Factorial of a Number

let num = 6
const factorial=(num)=>{
  let result = 1;
  for(let i = 1; i<=num; i++){
    result*=i
    console.log(result)
  }
  return console.log(result)
}

factorial(num)


// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.
// For multiples of 3, print "Ping"
// For multiples of 5, print "Pong"
// For multiples of both 3 and 5, print "PingPong"
// If the number is not a multiple of 3 or 5, print the number itself
// Example Output:
// 1, 2, Ping, 4, Pong, Ping, 7, 8, Ping, Pong, 11, Ping, 13, 14, PingPong, 16 …..

function pinkPong(){
  for(let i = 1; i<=20; i++){
  
    
    let a =(i)=>{
      if(i % 3 ===0){
        if(i % 5===0){
          return console.log("pingpong")
        }
        return console.log("ping")
      }
       if(i % 5 ===0){
         if(i % 3 ===0){
           return console.log("pingpong")
         }
        return console.log("pong")
      }
       if(i % 3 ===0 && i % 5 ===0){
        return console.log("pingpong")
      }
      
      return console.log(i) 
    }
    a(i)
  }
}

pinkPong()





