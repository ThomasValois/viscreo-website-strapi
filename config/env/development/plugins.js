module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  seo: {
    enabled: true,
  },
  placeholder: {
    enabled: true,
    config: {
      size: 10,
    }
  },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID"),
      },
      settings: {
        defaultFrom: "noreply@viscreo.co.uk",
        defaultReplyTo: "support@viscreo.co.uk",
      },
    },
  },
});
