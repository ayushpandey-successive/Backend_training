const validaton = {
    "/signup": {
      POST: {
        username: {
          required: true,
          minLength: 4,
        },
        password: {
          required: true,
          minLength: 5,
        },
      },
    },
    "/login": {
      GET: {
        username: {
          required: true,
          minLength: 4,
        },
        password: {
          required: true,
          minLength: 5,
        },
      },
    },
  };
  module.exports = validaton;