class Hole {
    constructor() {
        this.x = random(40, width - 40);
        this.y = random(height - 190, height - 40);
        this.activated = false;
        this.drip = 0;
    }

    draw() {
        fill(20);
        ellipse(this.x, this.y, 20, 20);
        fill(0, 67, 168, 0.9 * 255);
        rect(this.x - 10, this.y, 20, this.drip);
        this.drip++;
        if (this.drip > height - this.y && !this.activated) {
            this.activated = true;
            leaking++;
        }
    }

    click(x, y) {
        if (dist(x, y, this.x, this.y) < 20) {
            if (this.activated) leaking--;
            return true;
        }
        return false;
    }
}