import { createRouter, createWebHistory } from "vue-router";
import {
  Blog,
  Contact,
  Home,
  Portfolio,
  Project,
  Resume,
  User,
} from "@pages/index";

const routes = [
  {
    path: "",
    component: Home,
  },
  {
    path: "/:username",
    component: User,
    redirect: { name: "Portfolio" },
    children: [
      {
        path: "portfolio",
        name: "Portfolio",
        component: Portfolio,
      },
      {
        path: "project",
        name: "Project",
        component: Project,
      },
      {
        path: "resume",
        name: "Resume",
        component: Resume,
      },
      {
        path: "blog",
        name: "Blog",
        component: Blog,
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
