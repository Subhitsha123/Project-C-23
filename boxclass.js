class Box{
    constructor(x,y,width,height){
        var options = {
            'friction':1,
            'density' :1

        }
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
    }
}