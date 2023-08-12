import { createRouter, createWebHistory } from 'vue-router'
import ViewStudents from '../views/ViewStudents.vue'
import ViewBooks from '../views/ViewBooks.vue'
import ViewHome from '../views/ViewHome.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewHome
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddStudent.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/UpdateStudent.vue')
    },


    // {
    //   path: '/',
    //   name: 'home',
    //   component: ViewBooks
    // },


    {
      path: '/view-books',
      name: 'view-books',
      component: ViewBooks
    },
    {
      path: '/view-students',
      name: 'view-students',
      component: ViewStudents
    },
    {
      path: '/add-book',
      name: 'add-book',
      component: () => import('../views/AddBook.vue')
    },
    {
      path: '/edit-book/:id',
      name: 'edit-book',
      component: () => import('../views/UpdateBook.vue')
    }

  ]
})

export default router