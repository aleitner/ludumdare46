function Clock(img, imgPressed, display1, alarmSound, hitbox) {
    this.img = img;
    this.imgPressed = imgPressed;
    this.display1 = display1;
    this.timer = new Timer(0, 500);
    this.done = false;
    this.hb = hitbox;
    this.alarmSound = alarmSound;
    this.transition = new Transition(-400, 0, 0, 0);
    console.log(img)


    this.update = function () {
        if (!this.done && !this.alarmSound.isPlaying()) {
            this.alarmSound.play();
        }

        this.timer.resume();

        if (this.transition.isTransitioning()) {
            this.transition.update();
        }
    }

    this.end = function () {
        this.transition.transitionOut();
        this.done = true;
        this.alarmSound.stop();
    }

    this.draw = function () {
        if (this.hb.isPressed()) {
            image(this.imgPressed, this.transition.current.x, this.transition.current.y);
        } else {
            image(this.img, this.transition.current.x, this.transition.current.y);
            if (this.timer.elapsed % 1000 == 0) {
                image(this.display1, this.transition.current.x, this.transition.current.y);
            }
        }
        // debug 
        // fill(204, 101, 192, 127);
        // stroke(127, 63, 120);
        // ellipse(this.hb.x, this.hb.y, this.hb.r)
    }
}