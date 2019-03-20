import Home from "./views/home/Home";
import Notes from "./views/notes/Notes";
import Memoir from "./views/memoir/Memoir";
// import ThingsILove from "./views/thingsilove/ThingsILove";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/notes",
    component: Notes,
    exact: true
  },
  // {
  //   path: "/thingsilove",
  //   component: ThingsILove,
  //   exact: true
  // },
  {
    path: "/memoir",
    component: Memoir,
    exact: true
  }
]

export default routes;