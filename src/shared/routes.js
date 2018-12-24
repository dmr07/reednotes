import Home from "./views/home/Home";
import News from "./views/news/News";
import InfoInvestor from "./views/info_investor/InfoInvestor";
// import InfoOverview from "./views/info_overview/InfoOverview";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/news",
    component: News,
    exact: true
  },
  {
    path: "/learn/investor",
    component: InfoInvestor,
    exact: true
  }
]

export default routes;