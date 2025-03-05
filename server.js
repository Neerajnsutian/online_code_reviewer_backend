require('dotenv').config();
const app = require('./src/app');
const port = process.env.PORT || 8080;

app.listen(3000, () => {
  console.log('Server is running on http://localhost/3000');
});
