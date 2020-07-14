class Rain {
    constructor(theta) {
        this.x = random(-width, width * 2);
        this.length = random(10, 30);
        this.speed = random(5, 20);
        this.y = -this.length - random(0, 2);
        this.theta = theta;
        this.darkness = random(10, 50);
    }

    draw() {
        push();
        strokeWeight(2);
        stroke("hsl(216, " + this.darkness + "%, 50%)");
        line(this.x, this.y, this.x + this.length * cos(this.theta), this.y + this.length * sin(this.theta));
        this.x += this.speed * cos(this.theta);
        this.y += this.speed * sin(this.theta);
        pop();
    }
}