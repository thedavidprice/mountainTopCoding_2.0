var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  handler: () => handler
});
var import_api = __toModule(require("@redwoodjs/api"));
var schemas_userExamples_sdl = __toModule(require("../graphql/userExamples.sdl"));
var import_db = __toModule(require("../lib/db"));
var services_userExamples_userExamples = __toModule(require("../services/userExamples/userExamples"));
var import_logger = __toModule(require("../lib/logger"));
let schemas = {};
schemas.userExamples_sdl = schemas_userExamples_sdl;
let services = {};
services.userExamples_userExamples = services_userExamples_userExamples;
const handler = (0, import_api.createGraphQLHandler)({
  loggerConfig: {
    logger: import_logger.logger,
    options: {}
  },
  schema: (0, import_api.makeMergedSchema)({
    schemas,
    services: (0, import_api.makeServices)({
      services
    })
  }),
  onException: () => {
    import_db.db.$disconnect();
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=graphql.js.map
