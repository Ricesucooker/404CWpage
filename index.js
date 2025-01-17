
//board
let board;
let boardWidth = 750;
let boardHeight = 500; 
let context;

//owl

let owlWidth = 100;
let owlHeight = 125;
let owlX = 350 ;
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
let velocityY = +6;
let gravity = 0;
let owlVX =1;

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
    requestAnimationFrame(update);
   

    context.clearRect(0,0,board.width, board.height);

    //owl
    //owl.x=Math.mid(owl.x - owlVX, owlX)
    owlVX += gravity;
    owl.x += owlVX, owlX; 
    context.drawImage(owlJPG, owl.x, owl.y, owl.width, owl.height);

    //logo
    for(let i =0; i < cwArray.length; i++){
        let logo = cwArray[i];
        logo.y += velocityY;
        context.drawImage(logo.img, logo.x, logo.y, logo.width, logo.height);
    }
};


function moveOwl(e){
    if(gameOver){
        return;
    }

    if (e.code == "KeyD" || e.code == "ArrowRight"){
         owlVX = +3 ;}

    if(e.code == "KeyA" || e.code =="ArrowLeft"){
        owlVX =-3 ;}
    
        console.log(e.code)
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



// x0 
// y0 top left 

//x 750 top right 
//y 500 bottom right