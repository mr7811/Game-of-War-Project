let suit = ["heart","clover","spade","diamond"];
let rank = ["Ace", "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "Jack", "Queen" , "King" ];
let score = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8, 9, 10 ,11 ,12, 13 ];
class Card {
    constructor(suit,rank,score){
    this.suit = suit;
    this.rank = rank;
    this.score = score;
}
}
class Deck{
    constructor()   {
    this.cards = []; 
    this.addCard(); 
    }
    addCard () {
        for (let i = 0; i < suit.length; i++){
            for (let j = 0; j < rank.length; j++){

         this.cards.push(new Card(suit[i],rank[j],score[j]));
                
            }
        }
    this.shuffle()
    }
    shuffle() {
    this.cards = this.cards.sort((a, b) => 0.5 - Math.random()); //Thank you Gil for helping find the shuffle code and sharing on slack
    }
} 
class warGame{
    constructor(){
 this.playerOne =[];
 this.playerTwo = [];
 this.center = [];
 this.gameSetup();
}
gameSetup(){
    const {cards} = new Deck();

    this.playerOne.push(...cards.slice(0,25))
    this.playerTwo.push(...cards.slice(26,51))

    //this.playerOne.push = warGame.cards.slice(0, 25);
}

gameStart(){
while(this.playerOne.length > 0 && this.playerTwo.length > 0){
    let p1Card = this.playerOne.pop();
    let p2Card = this.playerTwo.pop();

    if (p1Card.score > p2Card.score) 
    {// Winning logic
        //this.OkayerOne.shift(playerTwocard, PlayerOneCard)
        this.playerOne.unshift(p2Card, p1Card, ...this.center);
        this.center.length = 0;
        console.log( "player 1 card " +p1Card + "player 2 card " + p2Card + "Player 1 deck length" + this.playerOne.length + "Player 2 deck length " + this.playerTwo.length + "  Player 1 wins")
    }else if(p2Card.score > p1Card.score){
        //this.playerTwo.shift(playerOnecard, playerTwoCard)
        this.playerTwo.unshift(p1Card, p2Card, ...this.center);
        this.center.length = 0;
        console.log( "player 1 card  " +p1Card + "player 2 card  " + p2Card + "Player 1 deck length  " + this.playerOne.length + "Player 2 deck length  " + this.playerTwo.length + "  Player 2 wins")
    }else if(p1Card.score === p2Card.score) { 
        this.war(p1Card, p2Card)
        console.log( "player 1 card  " +p1Card + "player 2 card  " + p2Card + "Player 1 deck length  " + this.playerOne.length + "Player 2 deck length  " + this.playerTwo.length + "  Prepare for War!")
            }
        }
}
war(p1Card, p2Card){
    let p1WarCards = this.playerOne.splice(this.playerOne.length - 3, 3)
    let p2WarCards = this.playerTwo.splice(this.playerTwo.length - 3, 3)
    this.center.push(p1Card, ...p1WarCards, p2Card, ...p2WarCards)
}

}




//let deck = new Deck()
//console.log(deck.cards.length);
//console.log(deck) ;
let firstGame = new warGame
firstGame.gameStart()
console.log(firstGame)
//const playerOne = deck.cards.slice(0, 25);
//const playerTwo = deck.cards.slice(26, 52)
//console.log(playerTwo.length);

//draw () {
    //[Math.floor(Math.random()cards.52)];