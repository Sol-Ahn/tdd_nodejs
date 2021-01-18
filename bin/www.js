const app = require("../index");
const syncDb = require("./sync-db");

syncDb().then(() => {
  console.log("Sync DB!");
  app.listen(3000, () => {
    console.log("Server is running at 3000 port...");
  });
});
