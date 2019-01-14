import Home from "../components/home.vue";
import About from "../components/about.vue";
import NotFound from "../components/not-found.vue";

export default [
  { path: "/", component: Home },
  { path: "about", component: About },
  { path: "*", component: NotFound }
];
