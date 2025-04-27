const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_URI; 

mongoose.connect(mongo_url)
  .then(() => {
    console.log('MongoDB Connected...');
  })
  .catch((err) => {
    console.error(' MongoDB Connection Failed:', err);
  });
