import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import NetArtGallery from '../views/NetArtGallery.vue'
import AboutUs from '../views/AboutUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'HOMMIE'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: 'BLOG'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'LOGIN'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'REGISTER'
    }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      title: 'FORGOT.PASSWORD'
    }
  },
  {
    path: '/net-art-gallery',
    name: 'NetArtGallery',
    component: NetArtGallery,
    meta: {
      title: 'NET.ART GALLERY'
    }
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs,
    meta: {
      title: 'ABOUT.US'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | E6Y`;
  next();
});

export default router
