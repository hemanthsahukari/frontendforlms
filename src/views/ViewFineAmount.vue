<template>

<NavbarUser />
     <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text-center">View Fine Amount</h1>
                    
                    <p style="font-size: 29px;
                    line-height: 1.5;
                    margin-bottom: 16px;
                    color: #111010;
                    ">Hey {{this.username }}, here is the fine amount to be paid...</p>

                    <div style="
    font-size: 50px;
    color: red;
">$ {{this.fineAmount}}</div>
                    <table class="table table-striped">
                        <thead>
                          
                        </thead>
                        <tbody>
                          
                        </tbody>
                      </table>
                </div>
            </div>
        </div>
   
</template>

<script>
import NavbarUser from '../components/NavbarUser.vue'
export default {
    name: 'ViewFineAmount',
    components: {
        NavbarUser
    },
    data() {
        return {
            fineAmount: '',
            username:''
        }
    },
    beforeMount() {
        this.getFineAmount();
    },
    methods: {
            getFineAmount(){
                var name;
            fetch('http://localhost:8080/students/getCurrentMomo')
            .then(response => {
                if(!response.ok) {
                    throw new Error('Network reponse was not OK');
                }
                return response.text();
            })
            .then(data => {
                this.username = data;
                console.log("username :" + this.username);
                
                fetch(`http://localhost:8080/students//StudentFine/${this.username}`)
                .then(res => res.json())
                .then(data => {
                    this.fineAmount = data
                    console.log(data)
                })
            })
            }
        }
}   
</script>
