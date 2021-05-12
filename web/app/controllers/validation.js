const { check, validationResult } = require('express-validator');

const checks = {
  id: check('id')
    .isUUID()
    .withMessage('ID not valid, please go back and try again.'),
  title: check('title')
    .exists()
    .withMessage('Decision title is required.')
    .isLength(3)
    .withMessage(
      'Decision title is required to be at least 3 characters long.'
    ),
  type: check('type')
    .exists()
    .withMessage('Decision type is required.')
    .isIn(['public', 'private'])
    .withMessage('Decisions must be public or private.'),
};

const checkForErrors = (req, res, next) => {
  // get any errors
  const errors = validationResult(req);

  // if there are errors go to the next error handler middleware with the errors from the validation
  if (!errors.isEmpty()) return next(errors.mapped());
  // if there are NO errors, go to the next middleware function
  return next();
};

exports.validate = (method) => {
  switch (method) {
    case 'createDecisions': {
      return [checks.title, checks.type, checkForErrors];
    }

    case 'editDecision': {
      return [checks.id, checks.title, checks.type, checkForErrors];
    }

    case 'deleteDecision': {
      return [checks.id, checkForErrors];
    }

    default: {
      return [];
    }
  }
};
