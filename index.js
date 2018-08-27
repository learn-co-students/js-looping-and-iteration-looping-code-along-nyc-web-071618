// Code your solutions in this file

function printBadges(names){
    for(let i=0;i<names.length;i++){
        console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
    }
    return names
}

function tailsNeverFails(){
    let tails = 0 
    let run = true
    while(run){
        if(Math.floor(Math.random()*2)==1){
            tails++;
        } else {
            run = false;
        }
    }
    return `You got ${tails} tails in a row!`
}