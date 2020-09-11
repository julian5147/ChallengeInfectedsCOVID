const container = require("./api/container");

const application = container.resolve("app");
const db = container.resolve("db");
const service = container.resolve("InfectedService");

setInterval(() => service.getOrCreateInfected(), 600000);

application
  .start()
  .then(async () => {
    await db.sequelize.sync();
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
