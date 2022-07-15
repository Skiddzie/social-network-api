const router = require('express').Router();
const { getAllThoughts, getThoughtById, addThought, updateThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controller.js');

router.route('/').get(getAllThoughts)
router.route('/:thoughtId').get(getThoughtById)

router.route('/:userId').post(addThought);

router.route('/:userId/:thoughtId').delete(removeThought).put(updateThought);

router
  .route('/:userId/:thoughtId/r')
  .put(addReaction)
  .delete(removeThought)

router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;