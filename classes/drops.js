class Drop {
	constructor(x, y){
		var options = {
			restitution:0.5,
			friction:0.1
		}

		this.x = x;
		this.y = y;
		this.body = Bodies.circle(this.x, this.y, 5, options);
		World.add(world, this.body);
	}

	update(){
		if(this.body.position.y > 810)
		{
			Matter.Body.setPosition(this.body, {x: random(0,400), y: random(0,10)});
		}
		if(this.body.position.x > 410)
		{
			Matter.Body.setPosition(this.body, {x: 0, y: this.body.position.y});
		}
		if(this.body.position.x < 0)
		{
			Matter.Body.setPosition(this.body, {x: 400, y: this.body.position.y});
		}
	}

	display(){
		var pos = this.body.position

    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    strokeWeight(2);
    fill("blue");
    ellipseMode(CENTER);
    ellipse(0, 0, 10);
    pop();
	}
};