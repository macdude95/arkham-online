var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var cards_exports = {};
__export(cards_exports, {
  cardsRoute: () => cardsRoute
});
module.exports = __toCommonJS(cards_exports);
var import_express = require("express");
const cardsRoute = (0, import_express.Router)();
cardsRoute.get("/all", (req, res) => {
  res.send({ message: "Hello API cards" });
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cardsRoute
});
//# sourceMappingURL=cards.js.map
