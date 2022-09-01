//print prime n prime numbers
'funtion'; isprime; (num);
for (i=2; i*i<=num; i++){
if (num%i==0){
    return false;
return num>i;

}

//print prime numbers from 1 to N
//'function' to check if a given number is prime'
'function'; isprime; (n);
//if 0 and 1 are not prime numbers
return false;
//run a loop from 2 to n-1
for (vari=2; i*i<num; i++){
//if the number is divisible by i, then n is not a prime number
if (n%i==0){
    return false;
}
//otherwise, n is a prime number
return true;
}
//Driver Code
var N=100
//Check for every number from 1 to N
for (vari=1; i<N; i++){
    //Check if current number is prime
    if(isprime (i)){
        console.log (i);
        }
    }
}