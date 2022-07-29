numDice1 = (Math.floor(Math.random()*6)+1) ;

document.querySelector('.dice .img1').setAttribute("src" ,"images/dice" + numDice1 +".png" );

numDice2 = (Math.floor(Math.random()*6)+1) ;

document.querySelector('.dice .img2').setAttribute("src" ,"images/dice" + numDice2 +".png" );

if (numDice1 > numDice2) {
document.querySelector("h1").innerHTML="Player 1 Winnss";
}
else if (numDice1 < numDice2) {
    document.querySelector("h1").innerHTML="Player 2 Winnss";

}
else {
    document.querySelector("h1").innerHTML="Player 2 Winnss";

}


