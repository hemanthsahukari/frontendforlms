<template>
    <main>
        <NavbarLogin />
        <div class="my-5">
            <div class="mx-auto w-25 " style="max-width:100%;">
              <h2 class="text-center mb-3">Add Student</h2>
              <form @submit.prevent="addStudent">
                <!--name-->
                <div class="row">
                  <div class="col-md-12 form-group mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input id="name"  type="text" name="name" class="form-control" placeholder="Name" required v-model="student.name">
                  </div>
                </div>

                
                <!--Email-->
                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input id="email" type="email"  name="email" class="form-control" placeholder="email" required v-model="student.email" >
                    </div>
                  </div>

                <!--Phone Number-->
                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                      <label for="pNo" class="form-label">Phone Number</label>
                      <input id="pNo" type="text"  name="pNo" class="form-control" placeholder="Phone Number" required v-model="student.pNo" >
                    </div>
                  </div>

                  <!-- password-->
                <div class="row">
                  <div class="col-md-12 form-group mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input id="password"  type="password" name="password" class="form-control" placeholder="Password" required v-model="student.password">
                  </div>
                </div>


                <div class="row">
                  <div class="col-md-12 form-group">
                    <input class="btn btn-primary w-100" type="submit" value="Submit">
                  </div>
                </div>

                <div>
                  
                </div>
              </form>
        
            </div>
          </div>
    </main>
</template>


<script>
import NavbarLogin from '../components/NavbarLogin.vue';

    export default {
        name: 'AddStudent',
        components: {
            NavbarLogin
        },

        data() {
            return {
                student : {
                    name: '',
                    email: '',
                    pNo: '',
                    password: ''
                }
            }
        },

        methods: {
            addStudent(){
                fetch('http://localhost:8080/students/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.student)
                })
                .then(data => {
                    console.log(data)
                    this.$router.push("/login");
                })

            }
        },
            
    }


</script>