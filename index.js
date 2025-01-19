
//board
let board;
let boardWidth = 750;
let boardHeight = 500; 
let context;

//owl

let owlWidth = 100;
let owlHeight = 125;
let owlX = boardWidth / owlWidth ;
let owlY = boardHeight - owlHeight;
let owlJPG;


let owl={
    x : owlX,
    y : owlY,
    width: owlWidth,
    height: owlHeight,
};


//product 
let cwArray = [];

let logoWidth= 100;
let logoHeight= 100;
let logoX =  boardWidth -logoWidth;
let logoY =  10;  


let logoAuto;
let logoScreen;
let logoRmm;
let logoPsa;


//physic and game
let velocityX = 0;
let velocityY = 0;
let owlVX =0;

let gameOver = false;
let score =0;


window.onload = function(){
    board = document.getElementById("board")
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d"); 
    

    owlJPG = new Image();
    owlJPG.src ="./cwasset/owl.jpg";
    owlJPG.onload =function(){
           context.drawImage(owlJPG, owl.x, owl.y, owl.width, owl.height);

    }


    logoAuto = new Image();
    logoAuto.src="./cwasset/automate.png";

    logoScreen = new Image();
    logoScreen.src="./cwasset/control.png";

    logoRmm = new Image();
    logoRmm.src ="./cwasset/rmm.png";

    logoPsa = new Image();
    logoPsa.src="./cwasset/psa.png";

    


   requestAnimationFrame(update);
   setInterval(placeLogo, 1000);
   document.addEventListener("keydown", moveOwl);

};

function update(){
    if(gameOver){
        return;
    }
    requestAnimationFrame(update);
   
    context.clearRect(0,0,board.width, board.height);

    //owl
    //owl.x=Math.mid(owl.x - owlVX, owlX)
    context.drawImage(owlJPG, owl.x, owl.y, owl.width, owl.height);

    //logo
    for(let i =0; i < cwArray.length; i++){
        if(gameOver){
            window.alert("game over")
            return;
        }
        let logo = cwArray[i];
        logo.y += velocityY +3;
        context.drawImage(logo.img, logo.x, logo.y, logo.width, logo.height);

        if (dectCollision(owl,logo)){
            gameOver =true;
        }
    }

    //score 
    context.fillStyle="black";
    context.font="20px courier";
    score ++;
    context.fillText(score, 5,20);
};


function moveOwl(e){
    if(gameOver){
        return;
    }

    if (e.code == "KeyD" || e.code == "ArrowRight"){
         owlVX =+50;
         owl.x =Math.max(owl.x + owlVX, owlX );}
    if(e.code == "KeyA" || e.code =="ArrowLeft"){
        owlVX =-50 
        owl.x =Math.max(owl.x + owlVX, 10);;}
}



function getRandomInt(max){
    return Math.floor(Math.random() * max);
}


function placeLogo(){
   
    let logo ={
        img : null,
        x : getRandomInt(logoX),
        y : logoY,
        width: logoWidth,
        height: logoHeight,
    }

    let placeLogochance = Math.random();

    if(placeLogochance > .76){
        logo.img = logoAuto;
        cwArray.push(logo);
    }else if (placeLogochance > .51){
        logo.img =logoRmm;
        cwArray.push(logo);
    }else if (placeLogochance > .26){
        logo.img =logoScreen;
        cwArray.push(logo);
    }else if (placeLogo > .10){
        logo.img =logoPsa;
        cwArray.push(logo);
    }

    // if(cwArray.length > 15 ){
    //     cwArray.shift();
    // }

}



function dectCollision (a,b){
    return a.x < a.x +  b.width && 
            a.x +  a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y;
}


// x0 
// y0 top left 

//x 750 top right 
//y 500 bottom right