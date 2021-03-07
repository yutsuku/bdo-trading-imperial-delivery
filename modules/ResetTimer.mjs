'use strict';

// parts stolen from http://www.somethinglovely.net/bdo/
class ResetTimer
{
    secsUntilTradeReset = 0;
    el = [];

    /**
     * @param {array} nodes
     */
    constructor(nodes) {
        this.el = nodes;
        this.updateClocks();

        setInterval(this.updateClocks.bind(this), 20 * 1000);
    }

    updateCountdown() {
        let d = new Date();
        let startHour = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), 0, 0, 0, 0);
        let rlDayElapsedS = (Date.now() - startHour) / 1000;

        // Imperial delivery (trade) reset is every 4 hours from reset
        this.secsUntilTradeReset = 4 * 60 * 60 - rlDayElapsedS % (60 * 60 * 4);
    }

    updateClocks() {
        this.updateCountdown();
        this.el.forEach(e => {
            e.innerHTML = this.clocktime(this.secsUntilTradeReset);
        })
    }

    clocktime(secs) {
        if (secs < 60) {
            return '<1 min';
        } else if (secs < 60 * 60) {
            return (secs / 60 >> 0) + 'm';
        } else {
            return (secs / 3600 >> 0) + 'h' + (secs % 3600 / 60 >> 0) + 'm';
        }
    }
}

export { ResetTimer as default };