class Drop{
    constructor(x,y){
        var options ={
            friction:0.1,
            restitution:0.3,
            density:0.3,
        }
        this.r = 5
        this.rain = Bodies.circle(x,y,this.r,options)
    }
    
    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400),y:random(0,400)})
        }
    }

    display() {

        var pos = this.rain.position;
        var angle = this.rain.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
    }
}