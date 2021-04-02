class Bob{
    constructor(x, y, r){
        var options = {
            restitution: 0.6,
            friction: 0.5,
            density: 1.2,
            isStatic: true
        }
        this.body = Bodies.circle(x, y, r ,options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0, this.r, this.r);
        fill("purple");
        pop();
    }
}