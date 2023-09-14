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
import UserLogin from './UserLogin.vue';
export default {
    name: 'ViewHistory',
    components: {
        NavbarUser,
        UserLogin

    },
    data() {
        return {
            histories: [],
            username:''
        }
    },

    beforeMount() {
        this.getHistory();
    },

    methods: {
        getHistory() {
            var name;
            fetch('http://localhost:8080/students/getCurrentMomo')
            .then(response => {
                if(!response.ok) {
                    throw new Error('Network reponse was not OK');
                }
                return response.text();
            })
            .then(data => {
                name = data;
                console.log("username :" + name);
                fetch(`http://localhost:8080/students/history/${name}`)
                .then(res => res.json())
                .then(data => {
                    this.histories = data;
                    console.log(data);
                });
            });
        }     
    }
};
</script>