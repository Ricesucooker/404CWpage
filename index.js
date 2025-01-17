
//board
let board;
let boardWith = 750;
let boardHeight = 500; 
let context;

//owl

let owlWidth = 88;
let owlHeight = 94;
let owlX = boardWith /2.5 ;
let owlY = boardHeight - owlHeight;
let owlJPG;


let owl={
    x : owlX,
    y : owlY,
    width: owlWidth,
    height: owlHeight,
};

//product 
let cwproArray = [];

let logoWith= 50;
let logoHeight= 50;

let logoX = boardWith /1;
let logoY = boardHeight -logoHeight;  


let cwAuto;
let cwScreen;
let cwRMM;
let cwPSA;



window.onload = function(){
    board = document.getElementById("board")
    board.height = boardHeight;
    board.width = boardWith;

    context = board.getContext("2d"); //drawing-board
    
    
    //test
    context.fillStyle="green";
    context.fillRect(owl.x, owl.y, owl.width, owl.height);

    

    //owlJPG = new Image();
   // owlJPG.src ="./cwasset/owl.jpg";
   // owlJPG.onload =function(){
   //     context.drawImage(owlJPG, owl.x, owl.y, owl.width, owl.height);
   // }

  //  requestAnimationFrame(update);
    
};

function update(){
    requestAnimationFrame(update);
    context.drawImage(owlJPG, owl.x, owl.y, owl.width, owl.height);
};

