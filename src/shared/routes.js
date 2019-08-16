import Home from "./views/home/Home";
import Notes from "./views/notes/Notes";
import Memoir from "./views/memoir/Memoir";
import ArtAndDesign from "./views/artanddesign/ArtAndDesign";
import Projects from "./views/projects/Projects";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/notes/:topic?", // ? says optional so /notes works.
    component: Notes,
    // exact: true // turn this off when you use params. otherwise match won't work.
  },
  {
    path: "/artanddesign",
    component: ArtAndDesign,
    // exact: true
  },
  {
    path: "/projects",
    component: Projects,
    exact: true
  },
  {
    path: "/memoir",
    component: Memoir,
    exact: true
  }
]

export default routes;