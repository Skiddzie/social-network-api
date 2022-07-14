const router = require('express').Router();

const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
