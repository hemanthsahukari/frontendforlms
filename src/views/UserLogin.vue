<template>
    <div>
        <div class="my-5">
            <div class="mx-auto w-25 " style="max-width:100%;">
              <h2 class="text-center mb-3">Login Form</h2>
                <form @submit.prevent="login">

                <div class="row">
                            <div class="col-md-12 form-group mb-3">
                                <label for="name" class="form-label">Username</label>
                                <input id="username"  type="text" name="name" class="form-control" placeholder="username" required v-model="username">
                            </div>
                            </div>


                <!-- <br> -->
                <div class="row">
                            <div class="col-md-12 form-group mb-3">
                                <label for="name" class="form-label">Password</label>
                                <input id="password"  type="text" name="name" class="form-control" placeholder="password" required v-model="password">
                            </div>
                            </div>


                <!-- <br> -->
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input class="btn btn-primary w-100" type="submit" value="Submit">
                  </div>
                </div>
                </form>
                <p v-if="loginError" style="color: red;">Invalid credentials. Please try again.</p>
            </div>
        </div>
    </div>
</template>
    
    <script>
    export default {
      data() {
        return {
          username: '',
          password: '',
          loginError: false,
        };
      },
      methods: {
        async login() {
          console.log("inside log");
            const data = {
            username: this.username,
            password: this.password,
            };
            
            try {
              const response = await fetch('http://localhost:8080/user/login', {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
              });
              
              if (response.ok) {
                this.loginError = false;
                alert('Login successful!');
                this.$router.push("/home");
              } else {
              this.loginError = true;
              }
            } catch (error) {
              console.error('An error occurred:', error);
              this.loginError = true;
            }
        },
      },
    };
    </script>