'use strict';

let skillRanks = {
    Beginner: { min: 1, max: 10 },
    Apprentice: { min: 1, max: 10 },
    Skilled: { min: 1, max: 10 },
    Professional: { min: 1, max: 10 },
    Artisan: { min: 1, max: 10 },
    Master: { min: 1, max: 30 },
    Guru: { min: 1, max: 50 }
};

let ranks = [];


Object.keys(skillRanks).forEach( key => {
    for (let i = skillRanks[key].min; i <= skillRanks[key].max; i++) {
        ranks.push(key + ' ' + i);
    }
})

export { ranks };