class Cloud {
    constructor() {
        this.x = random(0, width);
        this.y = random(0, 50);
        this.radius = random(50, 100);
        this.hue = random(41, 65);
        this.deltaLeft = random(20, 30);
        this.deltaRight = random(20, 30);
        this.speed = random(this.radius - 20, this.radius) / 100;
        this.dir = random([-1, 1]);
    }

    draw() {
        push();
        fill(this.hue);
        ellipse(this.x, this.y, this.radius, this.radius);
        ellipse(this.x - (this.radius / 2), this.y, this.radius - this.deltaLeft, this.radius - this.deltaLeft);
        ellipse(this.x + (this.radius / 2), this.y, this.radius - this.deltaRight, this.radius - this.deltaRight);
        pop();
        this.x += this.dir * this.speed;
    }
}