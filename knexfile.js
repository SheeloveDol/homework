// Update with your config settings.

module.exports = {

  development: {
    client: 'pg', //changed from 'sqlite3'
    connection: {
      database: 'superteam_picker', // changed from  filename: './dev.sqlite3' 
    },
    //added the following:
    migrations: {
      tableName: 'migrations',
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

};
