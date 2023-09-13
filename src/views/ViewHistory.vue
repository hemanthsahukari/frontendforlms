<template>
    <main>
        <NavbarUser />

        <!-- Table-->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text-center">View History</h1>

                    <!-- Add button -->
                    <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">User Borrow History</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="history in histories" :key="history.id">
                            <td>{{history.message}}</td>
                          </tr>
                        </tbody>
                      </table>
                </div>
            </div>
        </div>
    <!---->
    
    </main>
</template>

<script>
import NavbarUser from '../components/NavbarUser.vue'
// import VueToast from 'vue-toast-notification'
export default {
    name: 'ViewHistory',
    components: {
        NavbarUser
    },
    data() {
        return {
            histories: [],
            username:''
        }
    },

    beforeMount() {
        const {username} = this.$route.query;
        console.log(this.$route.query);
        this.username= username;
        console.log("Username:", this.username);
        this.getHistory();
    },

    methods: {
        getHistory() {
            fetch(`http://localhost:8080/students/history/${this.username}`)
            .then(res => res.json())
            .then(data => {
                this.histories = data;
                // console.log("Username:", this.username);
                console.log(data);
            });
        }     
    }
};
</script>