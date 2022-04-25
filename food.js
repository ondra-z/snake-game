class Food{
    constructor(tX,tY,tGr,tGa){
        this.x = tX;
        this.y = tY;
        this.grid = tGr;
        this.gap = tGa;
        this.flag = true;
        //this.status = true;
    }

    show(){
        fill(255,100,100);
        rect(this.x*this.grid, this.y*this.grid,this.grid,this.grid)
    }
    relocate(snake){
        while(this.checkCollision(snake)){
            this.newCoor();
            
        }
         
    }
    newCoor(){
        this.x = floor(random(0,width/this.grid-1));
        this.y = floor(random(0,height/this.grid-1));
    }
    checkCollision(snake){
        if(this.x == snake.x && this.y == snake.y){
            print("food overlap");
            return true;//yes, while loop should continue to generate new random position
        }
        for(let i = 0; i<snake.tail.length; i++){
            if(this.x == snake.tail[i][0] && this.y == snake.tail[i][1]){
                print("food overlap");
                return true;//yes, while loop should continue to generate new random position
            }
        }
        return false;//no, while loop doesnt need to continue to generate new random position, because its not overlapping
    }
    


}