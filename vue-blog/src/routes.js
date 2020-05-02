import Home from "./components/Home";
import About from "./components/About";
import Advices from "./components/Advices";
import Categories from "./components/Categories";
import Category from "./components/Category";
import Post from "./components/Post";
import PokemonWar from "./components/PokemonWar";
import NotFoundComponent from "./components/NotFoundComponent";

export const routes = [
  {path: '/', component: Home, name: 'Home'},
  {path: '/about', component: About, name: 'About'},
  {path: '/advices', component: Advices, name: 'Advices'},
  {path: '/categories', component: Categories, name: 'Categories'},
  {path: '/category/:id', component: Category, name: 'Category'},
  {path: '/post/:id', component: Post, name: 'Post'},
  {path: '/pokemon-war', component: PokemonWar, name: 'PokemonWar'},
  {path: '*', component: NotFoundComponent},
];
