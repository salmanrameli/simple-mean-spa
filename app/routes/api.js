const User = require('../model/user');

module.exports = function(app, express) {
    const apiRouter = express.Router();

    apiRouter.get('/', function(req, res) {
        res.json({
            message: 'welcome to our app'
        });
    });

    apiRouter.route('/users').post(function(req, res) {
        const user = new User();

        user.name = req.body.name;
        user.username = req.body.username;

        user.save(function(err) {
            if(err)
                res.send(err);

            res.json({
                message: 'user created'
            });
        });
    }).get(function(req, res) {
        User.find(function(err, users) {
            if(err)
                res.send(err);

            res.json(users);
        });
    });

    apiRouter.route('/users/:user_id').get(function(req, res) {
        User.findById(req.params.user_id, function(err, user) {
            if(err)
                res.send(err);

            res.json(user);
        });
    }).put(function(req, res) {
        User.findById(req.params.user_id, function(err, user) {
            if(err)
                res.send(err);

            if(req.body.name)
                user.name = req.body.name;
            if(req.body.username)
                user.username = req.body.username;

            user.save(function(err) {
                if(err)
                    res.send(err);

                res.json({
                    message: 'user updated'
                });
            });
        });
    }).delete(function(req, res) {
        User.remove({
            _id: req.params.user_id
        } , function(err, user) {
            if(err)
                res.send(err);

            res.json({
                message: 'successfully deleted'
            });
        });
    });

    return apiRouter;
};