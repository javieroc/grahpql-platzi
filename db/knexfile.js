// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/db.sqlite`
    },
    useNullAsDefault: true
  },

  production: {
    // Production settings
  }

};
