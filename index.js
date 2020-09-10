const container = require("./api/container");

const application = container.resolve("app");
const db = container.resolve("db");
const service = container.resolve("InfectedService");

application
  .start()
  .then(async () => {
    await db.sequelize.sync();
    await service.getOrCreateInfected();
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
