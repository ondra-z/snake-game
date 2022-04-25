
class Snake{
    constructor(tX,tY,tGr, tGa){
        this.x = tX;
        this.y = tY;
        this.grid = tGr;
        this.gap = tGa;
        this.dir = [1,0];
        this.status = true;
        this.tail = [];
        
    }

    show(){ 
        fill(50);
        rect(this.x*this.grid, this.y*this.grid,this.grid,this.grid)
        for(let i = 0;i<this.tail.length;i++){
            rect(this.tail[i][0]*this.grid, this.tail[i][1]*this.grid,this.grid,this.grid)
        }
    }
    move(){
        if(!this.checkIfOutOfBoundaries() && !this.checkClash()){
            this.updateTail();
            this.x += this.dir[0];
            this.y += this.dir[1];
        }else{
            print("out of boundaries");
            gameMode = 2;

        }
        
        
        
    }
    updateDir(tDir){
        this.dir = tDir
    }
    checkIfOutOfBoundaries(){
        if(this.x+this.dir[0]<0){
            return true;
        }else if(this.x + this.dir[0] > width/this.grid-1){
            return true;
        }else if(this.y + this.dir[1] <0){
            return true;
        }else if(this.y + this.dir[1] >height/this.grid-1){
            return true;
        }
        else{
            return false;
        }
        //|| this.x>width/this.grid
    }
    reset(){
        this.x = 1;
        this.y = 1;
        this.dir = [1,0];
        this.tail = [];
    }
    eat(food){
        if(this.x == food.x && this.y == food.y){
            print("eating");
            food.relocate(this);
            this.tail.unshift([this.x,this.y]);
        }
    }

    updateTail(){
        for(let i = 0;i<this.tail.length;i++){
            if(i == this.tail.length-1){
                this.tail[i] = [this.x,this.y];
            }
            else{
                this.tail[i] = this.tail[i+1]
            }
        }

    }
    checkClash(){
        for(let i = 0; i<this.tail.length; i++){
            if(this.x+this.dir[0] == this.tail[i][0] && this.y+this.dir[1] == this.tail[i][1]){
                return true;
            }
        }
        return false;
    }
}

