



const container=document.querySelector(".container");

for(let i=1;i<=100;i++){

    // 1 -controllo che sia multiplo di 3 e di 5 
    if(i % 3==0 && i % 5==0){
        console.log("FizzBuzz");

        // creo un div con la classe box e  buzzfizz e ci inserisco il numero
        container.innerHTML+=`<div class="box buzzfizz">${i}`;
    }
    
    //2 - se è multiplo di 3 stampo Fizz
    else if(i%3==0){
        console.log("Fizz");

        // creo un div con la classe box e  fizz e ci inserisco il numero
        container.innerHTML+=`<div class="box fizz">${i}`;
       
    }
    //3 - se è multiplo di 5 stampo Buzz
    else if(i%5==0){
        console.log("Buzz");
        
        // creo un div con la classe box e  buzz e ci inserisco il numero
        container.innerHTML+=`<div class="box buzz">${i}`;
    }
    // altrimenti stampo il numero 
    else{
        console.log(`${i}`);

        //div con classe di default
        container.innerHTML+=`<div class="box">${i}`;
    }
}





