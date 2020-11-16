class Box{
    constructor(x,y,width,height)
    {
        var Box_options ={
            restitution: 1.5,
            friction:0.8,
            density:1.0
        }
    
        this.body = Bodies.rectangle(x,y,width,height,Box_options);
        this.width=width;
        this.height=height;
    
        World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle)
    rectMode(CENTER);
    fill("lightblue");
    rect(pos.x,pos.y,this.width,this.height);
    pop(); 
}
    }