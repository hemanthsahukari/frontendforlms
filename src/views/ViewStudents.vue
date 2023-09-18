<template>
    <main>
        <Navbar />

        <!-- Table-->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text-center">View student</h1>
                    <!--Add button -->
                    <a href="/add" class="btn btn-primary">Add Student</a>
                    <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Action</th>
                            <th scope="col">Fine amount</th>


                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="student in students" :key="student.id">
                            <th scope="row">{{student.id}}</th>
                            <td>{{student.name}}</td>
                            <td>{{student.email}}</td>
                            <td>{{student.pNo}}</td>
                           


                            <td>
                              <a class="btn btn-primary" :href="`/edit/${student.id}`">Edit</a>
                              <button class="btn btn-danger mx-2" @click="deleteStudent(student.id)">Delete</button>
                            </td>
                            <td>{{ student.fineAmount }}</td>
                          </tr>
                        </tbody>
                      </table>
                </div>
            </div>
        </div>
        
    </main>
</template>


<script>
import Navbar from '../components/Navbar.vue'

    export default {
        name: 'ViewStudents',
        components: {
            Navbar
        },
        data() {
            return {
                students: []
            }
        },

        beforeMount(){
            this.getStudents()
        },

        methods: {
            getStudents(){
                fetch('http://localhost:8080/students/')
                .then(res => res.json())
                .then(data => {
                    this.students = data
                    console.log(data)
                })
            },
            deleteStudent(id){
                fetch(`http://localhost:8080/students/${id}`, {
                    method: 'DELETE'
                })
                .then(data => {
                    console.log(data)
                    this.getStudents()
                })
            }
        },
        beforeMount(){
            this.getStudents()
        }


    }

</script>