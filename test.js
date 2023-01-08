var random =getrandom(10);
 var getcount =0;
 var guess;
var corret = false;

function getrandom(upper){
    var num = Math.floor(Math.random()*upper)+1;
    return num;
}

while(getcount<10){
    guess = prompt("i am thinking a nuber between 1 and 10");
    getcount +=1;
    if(parseInt(guess)=== random){
        corret=true;
        break;
    }
    document.write('<h1>You guess the number!</h1>');
    document.write("it took you"+getcount+'tire to guess'+random)
    

}