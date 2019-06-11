# Ufinity-Assignment
## Steps to run Api locally
1. Download and extract latest version from Github 
2. Change directory to Project Folder
3. Run `npm install`
4. Run `npm install sequelize-cli -g`
5. Change the database , username , password in the ./config/config.json file
6. Run `sequelize db:migrate`
7. Run `sequelize db:seed:all`
8. Run `node server.js` or `npm run start`

## Steps to run the test cases
1. Run `npm run test`
