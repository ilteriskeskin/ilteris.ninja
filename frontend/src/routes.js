import Home from "./components/Home";
import About from "./components/About";
import Advices from "./components/Advices";
import Categories from "./components/Categories";
import Category from "./components/Category";
import Post from "./components/Post";
import PokemonWar from "./components/PokemonWar";

import Projects from "./components/weekend_projects/Projects";
import seyAyraci from "./components/weekend_projects/projects/seyAyraci";
import RandomFilm from "./components/weekend_projects/projects/RandomFilm";
import InfoIpAddr from "./components/weekend_projects/projects/InfoIpAddr";

import NotFoundComponent from "./components/NotFoundComponent";

export const routes = [
  {path: '/', component: Home, name: 'Home'},
  {path: '/about', component: About, name: 'About'},
  {path: '/advices', component: Advices, name: 'Advices'},
  {path: '/categories', component: Categories, name: 'Categories'},
  {path: '/category/:id', component: Category, name: 'Category'},
  {path: '/post/:id', component: Post, name: 'Post'},
  {path: '/pokemon-war', component: PokemonWar, name: 'PokemonWar'},
  {path: '/projects', component: Projects, name: 'projects'},

  {path: '/projects/sey-ayraci', component: seyAyraci, name: 'seyAyraci'},
  {path: '/random_film', component: RandomFilm, name: 'RandomFilm'},
  {path: '/info_ip_addr', component: InfoIpAddr, name: 'InfoIpAddr'},

  {path: '*', component: NotFoundComponent},
];
