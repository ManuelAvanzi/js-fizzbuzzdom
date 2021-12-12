// Milestone 1 
// stampo i numeri da uno a cento con eccezioni per i multipli di 3 e di 5 

for(let i=1;i<=100;i++){

    // 1 -controllo che sia multiplo di 3 e di 5 
    if(i % 3==0 && i % 5==0){
        console.log("FizzBuzz");
    }
    
    //2 - se è multiplo di 3 stampo Fizz
    else if(i%3==0){
        console.log("Fizz");
    }
    //3 - se è multiplo di 5 stampo Buzz
    else if(i%5==0){
        console.log("Buzz");
    }
    // altrimenti stampo il numero 
    else{
    console.log(`N == ${i}`);
    }
}