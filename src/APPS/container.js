import IndividualApp from "./individual";
import CommercialApp from "./commercial";
import VueContainer from "@/modular";

export default new VueContainer([
  {
    app: IndividualApp,
    route: "/ind",
    store: "individual"
  },
  {
    app: CommercialApp,
    route: "/com",
    store: "commercial"
  }
]);
