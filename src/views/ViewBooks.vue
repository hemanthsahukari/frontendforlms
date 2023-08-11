<template>
    <main>
        <Navbar />

        <!-- Table-->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text-center">View Books</h1>
                    <!-- Add button -->
                    <a href="/add-book" class="btn btn-primary">Add Book</a>
                    <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">Available</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="book in books" :key="book.id">
                            <th scope="row">{{book.id}}</th>
                            <td>{{book.title}}</td>
                            <td>{{book.author}}</td>
                            <td>{{book.available ? 'Yes':'No'}}</td>
                            <td>
                              <a class="btn btn-primary" :href="`/edit-book/${book.id}`">Edit</a>
                              <button class="btn btn-danger mx-2" @click="deleteBook(book.id)">Delete</button>
                              <button class="btn btn-primary" @click="borrowBook(book.id)">Borrow</button>
                              <button class="btn btn-success" @click="returnBook(book.id)">Return</button>
                            </td>
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
    name: 'ViewBooks',
    components: {
        Navbar
    },
    data() {
        return {
            books: []
        }
    },

    beforeMount() {
        this.getBooks();
    },

    methods: {
        getBooks() {
            fetch('http://localhost:8080/books')
            .then(res => res.json())
            .then(data => {
                this.books = data;
                console.log(data);
            });
        },
        deleteBook(id) {
            fetch(`http://localhost:8080/books/${id}`, {
                method: 'DELETE'
            })
            .then(data => {
                console.log(data);
                this.getBooks();
            });
        },
        borrowBook(bookid) {
            fetch(`http://localhost:8080/borrow-book/${bookid}`, {
                method: 'PUT'
            })
            .then(response => response.json())
            .then(data => {
                 
                console.log(data); 
                this.getBooks(); 
            })
            .catch(error => {
                console.error(error); 
            });
        },
        returnBook(bookId) {
            fetch(`http://localhost:8080/return-book/${bookId}`, {
                method: 'PUT'
            })
            .then(response => response.json())
            .then(data => {
                console.log(data); // Handle success response
                this.getBooks(); // Refresh the book list
            })
            .catch(error => {
                console.error(error); // Handle error
            });
        }
    }
};
</script>