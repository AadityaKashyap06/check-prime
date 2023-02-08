let num=13;
let count=0;
for(let i=1;i<=num;i++){
if(num%i==0){
count++;//it shouls be 2 in case of prime
}
}
console.log(count==2?"prime":"not");//prime number check
