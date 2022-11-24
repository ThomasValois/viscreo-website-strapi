module.exports = ({ env }) => ({
  host: env('${process.env.SERVER_HOST}', '0.0.0.0'),
  port: env.int('${process.env.SERVER_PORT}', 1337),
  url: 'https://cms.viscreo.co.uk',
  app: {
    keys: env.array("APP_KEYS"),
  },
  admin: { autoOpen: false }
});
