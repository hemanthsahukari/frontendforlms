<template>
    <NavbarUser /> 
    <div>
        <h2>Borrowed Books</h2>
        <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <!-- <th scope="col">BorrowedBy</th> -->
                            <th scope="col">Borrow Date</th>
                            <th scope="col">Return Date</th> 
                            
        

                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="book in borrowedBooks" :key="book.id">
                            <th scope="row">{{book.id}}</th>
                            <td>{{book.title}}</td>
                            <td>{{book.author}}</td>
                            <!-- <td>{{ book.borrowBy }}</td> -->
                            <td>{{ book.borrowDate }}</td>
                            <td>{{ book.returnDate }}</td>    
                    
                          </tr>
                        </tbody>
                      </table>
    </div>
</template>


<script>
import NavbarUser from '../components/NavbarUser.vue';
 export default{
    name: 'ViewBorrowedBooks',
    components: {
        NavbarUser
    },
    data() {
        return {
            borrowedBooks: []
        };
    },
    mounted(){
        this.getBorrowedBooks();
    },
    methods: {
        getBorrowedBooks() {
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
            fetch(`http://localhost:8080/books/borrowed/${name}`)
            .then((res)=>res.json())
            .then((data)=>{
                this.borrowedBooks = data;
                console.log(this.borrowedBooks);
            })
            .catch((error)=>{
                console.log(error);
            })
        })
        }
    }
 }  
</script>
