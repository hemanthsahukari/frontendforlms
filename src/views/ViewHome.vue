<template>
    <main>
        <NavbarUser />
        <div style="font-size: 35px;font-weight: 600;color: rgb(254, 254, 254);text-shadow: rgb(226 25 25) 8px 1px 5px, rgb(238 158 168) 0px 0px 10px, rgb(235 173 189) 0px 0px 10px, rgb(240 188 200) 0px 0px 20px;margin-left: 50px;margin-top: 30px;">Hey {{ this.username }} ,</div>
        <div style="font-size: 70px;font-weight: 600;color: rgb(254, 254, 254);text-shadow: rgb(226 25 25) 8px 1px 5px, rgb(238 158 168) 0px 0px 10px, rgb(235 173 189) 0px 0px 10px, rgb(240 188 200) 0px 0px 20px;margin-left: 50px;margin-top: 100px;"> Welcome To Library Management System </div>
        
    </main>
</template>


<script>
import NavbarUser from '../components/NavbarUser.vue'
    export default {
        components: {
            NavbarUser
        },
        data() {
        return {
            username:''
        }
    },
    beforeMount() {
        this.getUsername();
    },
    methods: {
            getUsername(){
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
            })
        }
    }
    }

</script>
