  
console.log('process.env.DATABASEE_URL :>> ', process.env.DATABASE_URL);
module.exports = {
  "type": "postgres",
  "url": "postgres://tcijhwkgebdfce:01a78e40f2d18353a52647ffdbfc4df5833fc6352e407609f5cac42e64927ee8@ec2-52-203-27-62.compute-1.amazonaws.com:5432/d557c074a39837",
  "entities": [
    "dist/models/**/*.js"
 ],
 "migrations": [
  "dist/database/migrations/**/*.js"
],
 "cli":{
  "migrationsDir": [
    "src/database/migrations/"
  ],
  "entitiesDir": "src/models"
  }
}