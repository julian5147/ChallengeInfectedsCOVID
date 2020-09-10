const { asClass, createContainer, asFunction, asValue } = require("awilix");

// app start
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments");

// routes
const Routes = require("../api/routes");
const InfectedRoutes = require("../api/routes/infected.routes");

// business
const { InfectedBusiness } = require("../domain");

// controllers
const { InfectedController } = require("../api/controllers");

// services
const { InfectedService } = require("../services");

// repositories
const { InfectedRepository } = require("../dal/repositories");

// db
const db = require("../dal/models");

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
    InfectedController: asClass(InfectedController).singleton(),
    InfectedRoutes: asFunction(InfectedRoutes).singleton(),
  })
  .register({
    config: asValue(config),
  })
  .register({
    db: asValue(db),
  })
  .register({})
  .register({
    InfectedService: asClass(InfectedService).singleton(),
  })
  .register({
    InfectedRepository: asClass(InfectedRepository).singleton(),
  })
  .register({
    InfectedBusiness: asClass(InfectedBusiness).singleton(),
  });

module.exports = container;
