class Umbrella {
	constructor(x, y){
		var options = {
			isStatic : true
		};
		
		this.x = x;
		this.y = y;
		this.body = Bodies.circle(this.x, this.y + 20, 70, options);
		World.add(world, this.body);
	}
	display(){
		if(frames < 40)
		{
			frames += 1;
		}
		if(frames < 5)
		{
			image(w1, this.x - 170, this.y - 100, this.x + 120, this.y - 20);
		}
		if(frames < 10 && frames >= 5)
		{
			image(w2, this.x - 170, this.y - 100, this.x + 120, this.y - 20);
		}
		if(frames < 15 && frames >= 10)
		{
			image(w3, this.x - 170, this.y - 100, this.x + 120, this.y - 20);
		}
		if(frames < 20 && frames >= 15)
		{
			image(w4, this.x - 170, this.y - 100, this.x + 120, this.y - 20);
		}
		if(frames < 25 && frames >= 20)
		{
			image(w5, this.x - 170, this.y - 100, this.x + 120, this.y - 20);
		}
		if(frames < 30 && frames >= 25)
		{
			image(w6, this.x - 170, this.y - 100, this.x + 120, this.y - 20);
		}
		if(frames < 35 && frames >= 30)
		{
			image(w7, this.x - 170, this.y - 100, this.x + 120, this.y - 20);
		}
		if(frames < 41 && frames >= 35)
		{
			image(w8, this.x - 170, this.y - 100, this.x + 120, this.y - 20);
		}
		if(frames == 40)
		{
			frames = 0;
		}
	}
};