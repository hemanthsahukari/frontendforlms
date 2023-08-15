<template>
    <main>
        <!-- <NavbarUser /> -->
        <NavbarLogin />
        <div style="font-size: 70px;font-weight: 600;color: rgb(254, 254, 254);text-shadow: rgb(226 25 25) 8px 1px 5px, rgb(238 158 168) 0px 0px 10px, rgb(235 173 189) 0px 0px 10px, rgb(240 188 200) 0px 0px 20px;margin-left: 50px;margin-top: 200px;"> Welcome To Library Management System </div>
        
    </main>
</template>


<script>
// import NavbarUser from '../components/NavbarUser.vue'
import NavbarLogin from '../components/NavbarLogin.vue'
    export default {
        components: {
            // NavbarUser
            NavbarLogin
}
    }

</script>
