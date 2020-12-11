const {
  index,
  show,
  create,
  update,
  destroy
} = require('../controllers/quotes');
const passport = require('passport');

module.exports = router => {
  // localhost:4000/quotes
  router.get('/quotes', index);

  // localhost:4000/quotes/12345
  router.get('/quotes/:id', show);

  // localhost:4000/quotes
  router.post('/quotes', passport.authenticate('jwt', { session: false }), create);

  // localhost:4000/quotes/update
  router.post('/quotes/update', passport.authenticate('jwt', { session: false }), update);

  // localhost:4000/quotes/destroy
  router.post('/quotes/destroy', passport.authenticate('jwt', { session: false }), destroy);
};