const {
  MYSQL_DATABASE
  , MYSQL_USER
  , MYSQL_PASSWORD
  , APPLICATION_PORT
} = process.env;

const config = {
  APPLICATION_PORT: parseInt(APPLICATION_PORT),
  
  MYSQL_DATABASE_CONFIG: {
    client: 'mysql',
    connection: {
      database: MYSQL_DATABASE,
      user: MYSQL_USER,
      password: MYSQL_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    }
  }
}

export { config };
