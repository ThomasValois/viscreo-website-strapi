module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url: 'https://cms.viscreo.co.uk',
  port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
