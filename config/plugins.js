
module.exports = ({ env }) => {
  return {
  // ...
  email: {
    provider: 'amazon-ses',
    providerOptions: {
      key: env('AWS_SES_KEY'),
      secret: env('AWS_SES_SECRET'),
      amazon: 'https://email.ap-southeast-1.amazonaws.com',
    },
    settings: {
      defaultFrom: 'strapi@palmerstaiwan.com.tw',
      defaultReplyTo: 'strapi@palmerstaiwan.com.tw',
    },
  },
  // ...
}};