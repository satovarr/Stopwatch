function StopWatch() {
    let time = 0;
    let started = false;
    let interval;

    console.log('Stopwatch created');

    let increaseTime = function () {
        time += 1;
    };

    this.start = function () {
        if (!started) {
            interval = setInterval(increaseTime, 1000);
            console.log('started');
            started = true;
        } else {
            throw new Error('Stopwatch is already started');
        }
    };
    this.stop = function () {
        if (started) {
            clearInterval(interval)
            console.log('stopped. Time:');
            this.duration()
            started = false
        } else {
            console.error('Stopwatch is already stopped');
        }
    };
    this.duration = function () {
        console.log(time);
    }
    this.reset = function () {
        time = 0;
    }

};

const sw = new StopWatch();