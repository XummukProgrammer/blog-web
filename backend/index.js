const express = require('express');
const ApiRouter = require("./routes/api-router.js");
const DbModule = require("./modules/db-module.js");

const PORT = process.env.PORT || 3010;
const app = express();
 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use("/api", ApiRouter.router);

DbModule.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
});
