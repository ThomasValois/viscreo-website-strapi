module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('BASEURL', '0.0.0.0'),
  app: {
    keys: env.array("APP_KEYS"),
  },
  admin: { autoOpen: false }
});
