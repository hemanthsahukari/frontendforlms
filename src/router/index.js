import { createRouter, createWebHistory } from 'vue-router'
import ViewStudents from '../views/ViewStudents.vue'
import ViewBooks from '../views/ViewBooks.vue'
import ViewBooksAdmin from '../views/Admin/ViewBooksAdmin.vue'
import ViewHomeAdmin from '../views/Admin/ViewHomeAdmin.vue'
import AddStudentAdmin from '../views/Admin/AddStudentAdmin.vue'
import ViewHome from '../views/ViewHome.vue'
import ViewLogin from '../views/ViewLogin.vue'
import AdminLogin from '../views/AdminLogin.vue'
import UserLogin from '../views/UserLogin.vue'
import AdminLoginVue from '../views/AdminLogin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: ViewHome
    },
    {
      path: '/login',
      name: 'login',
      component: ViewLogin
    },
    {
      path: '/home-admin',
      name: 'home-admin',
      component: ViewHomeAdmin
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddStudent.vue')
    },
    {
      path: '/addStudent',
      name: 'addStudent',
      component: () => import('../views/Admin/AddStudentAdmin.vue')
    },
    {
      path: '/admin/login',
      name: 'admin-login',
      component: AdminLogin
    },
    {
      path: '/user/login',
      name: 'user-login',
      component: UserLogin
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/UpdateStudent.vue')
    },

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
    },
    {
      path: '/view-books-admin',
      name: 'view-books-admin',
      component: ViewBooksAdmin
    }

  ]
})

export default router