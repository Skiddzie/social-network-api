const router = require('express').Router();
const { addThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controller.js');

router.route('/:userId').post(addThought);

router.route('/:userId/:thoughtId').delete(removeThought);

router
  .route('/:userId/:commentId')
  .put(addReaction)
  .delete(removeThought)

router.route('/:userId/::thoughtId/:reactionId').delete(removeReaction);

module.exports = router;