const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const studioRoutes = require('./routes/studio');
const projectRoutes = require('./routes/projects');
const awardRoutes = require('./routes/awards');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/studio', studioRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/awards', awardRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
  .catch(err => console.log(err));
