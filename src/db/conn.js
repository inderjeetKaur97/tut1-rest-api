const mongoose = require('mongoose');

main().then(()=>console.log("Connection succesful | DB is connected ")).catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/students-api');
}