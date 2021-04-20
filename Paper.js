class Paper{

    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);

        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }

    display(){
        var circlepos = this.body.position;
        push();
        translate(circlepos.x, circlepos.y);


        pop();

        imageMode(CENTER);
        image(this.image, circlepos.x, circlepos.y, this.r, this.r);


    }
}