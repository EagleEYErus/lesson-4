/**
 * Created by Alex on 23.04.17.
 */

const router = require('express').Router();
const owjs = require('overwatch-js');

router.post('/', (req, res) => {
    owjs
        .getAll(req.body.platform, 'global', req.body.nickname)
        .then((data) => {
            let level = data.profile.level;
            if (data.profile.tier !== 0) {
                level = data.profile.tier * 100 + data.profile.level;
            }
            res.render('profile', {
                nick: data.profile.nick,
                level: level,
                avatar: data.profile.avatar,
                gamesWon: data.quickplay.global.games_won
            });
        });

});

module.exports = router;