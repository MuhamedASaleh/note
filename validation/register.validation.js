const { check } = require(`express-validator`);

module.exports = [
  check(`name`).matches(/^[A-Za-z]+([\A-Za-z-]+)*$/),
  check(`email`).isEmail(),
  // check(`password`).matches(/^[A-Za-z]+([\A-Za-z-]+)*$/),
  check(`confirmPassword`,(`password and confirn oarrword doesnt match`)).custom((value, { req }) => {
    if (value === req.body.password) {
      return true;
    } else {
      return false;
    }
  }),
];
