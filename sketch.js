let grid = 50;
let gap = 2;
let snake;
let food;
let direction;
let gameMode = 1;//0 = start, 1 = game, 2 = game over

function setup() {
  createCanvas(600, 600);
  frameRate(5);

  snake = new Snake(1,1,grid,gap);
  food = new Food(1,10,grid,gap);
  noStroke();

}

function draw(){
  background(240);
  drawGrid(grid);
  //rect(i*grid+gap,gap, grid-gap*2,grid-gap*2);
  
  food.show();

  if(gameMode==1){
    snake.move();
  } 
  snake.eat(food);
  snake.show();
  
  
  
  
  if(gameMode ==2){
    showGameOver();
  }
  
}


function drawGrid(tempGrid){
  //noStroke();
  fill(250);
  for(let i = 0; i<(width/tempGrid); i++){
    for(let j = 0; j<(height/tempGrid); j++){
      rect(i*tempGrid+gap,j*tempGrid+gap, tempGrid-gap*2,tempGrid-gap*2);
    }
  }
}



function keyPressed(){// checking arrow keys to change direction of snake
  if(gameMode==1){
    if(keyCode == LEFT_ARROW){
      direction = [-1,0];
      snake.updateDir(direction);
    }else if(keyCode==RIGHT_ARROW){
      direction = [1,0];
      snake.updateDir(direction);
    }else if(keyCode==UP_ARROW){
      direction = [0,-1];
      snake.updateDir(direction);
    }else if(keyCode==DOWN_ARROW){
      direction = [0,1];
      snake.updateDir(direction);
    }
  }
  else{
    if(keyCode ==32){
      gameMode = 1;
      print("new game")
      snake.reset();
    }
  }
  
}

function showGameOver(){
  fill(0,100);
  rect(0,0,width, height);
  textAlign(CENTER, CENTER);
  textSize(36);
  fill(255);
  text("Game Over",width/2, height/2-20);
  textSize(24);
  text("Score: "+snake.tail.length,width/2, height/2+30);
}