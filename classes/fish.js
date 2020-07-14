class Fish {
    constructor(rise) {
        this.x = random(0, width / 2);
        this.y = random(height - (rise - 15), height - 10);
        this.size = random(10, 20);
        this.delta = random([-1, 1]);
        this.color = color(random(125, 255), random(200, 250), random(0, 125));
    }

    draw() {
        fill(this.color);
        ellipse(this.x, this.y, this.size * 2, this.size);
        if (this.delta < 0) {
            triangle(this.x, this.y, this.x - this.size * 1.5, this.y - 10, this.x - this.size * 1.5, this.y + 10);
            fill(0);
            ellipse(this.x + this.size / 2, this.y, 5, 5);
        }
        if (this.delta > 0) {
            triangle(this.x + this.size / 2, this.y, this.x + this.size * 1.5, this.y - 10, this.x + this.size * 1.5, this.y + 10);
            fill(0);
            ellipse(this.x - this.size / 2, this.y, 5, 5);
        }
        this.x -= this.delta;
    }
}