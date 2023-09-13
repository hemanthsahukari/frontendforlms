<template>
    <main>
        <NavbarUser />

        <!-- Table-->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text-center">View Books</h1>

                    <!-- search bar -->
                    <div class="input-group mb-3">
                        <input name="title" type="text"
                        class="form-control"
                        v-model="searchQuery"
                        placeholder="Search By Title, Author"/>
                        <div class="input-group-append" style="    padding-left: 10px;">
                            <button class="btn btn-outline-secondary" type="button" @click="searchBooks">search</button>
                        </div>
                    </div>

                    <!-- Add button -->
                    <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">Copies</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="book in books" :key="book.id">
                            <th scope="row">{{book.id}}</th>
                            <td>{{book.title}}</td>
                            <td>{{book.author}}</td>
                            <td>{{book.copiesAvailable}}</td>
                            <td>
                              <button class="btn btn-primary" @click="borrowBook(book.id)" :disabled="book.copiesAvailable===0">Borrow</button>
                              <button class="btn btn-success" style="border-left-width: 1px;
                              margin-left: 11px;
                              " @click="returnBook(book.id)" :disabled="book.copiesAvailable===book.firstCopy">Return</button>
                            </td>
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
    name: 'ViewBooks',
    components: {
        NavbarUser
    },
    data() {
        return {
            books: [],
            username:'',
            searchQuery:''
        }
    },

    beforeMount() {
        const {username} = this.$route.query;
        console.log(this.$route.query);
        this.username= username;
        console.log("Username:", this.username);
        this.getBooks();
    },

    methods: {
        getBooks() {
            fetch('http://localhost:8080/books/all')
            .then(res => res.json())
            .then(data => {
                this.books = data;
                // console.log("Username:", this.username);
                console.log(data);
            });
        },
        
        searchBooks() {
            const query = this.searchQuery.trim();
            let author;
            if (/^\d+$/.test(query)) {
                this.searchById(query);
            } else if (query.toLowerCase().startsWith('author:')) {
                author = query.slice(7);
                this.searchByAuthor(author);
            } else {
                this.searchByTitle(query);
        }
    },
    //         searchById(id) {
    //             fetch(`http://localhost:8080/books/search?id=${id}`)
    //            .then(res => res.json())
    //            .then(data => {
    //            this.books = data;
    //         })
    //            .catch(error => {
    //            console.error('Error searching books by ID:', error);
    //     });
    // },
            searchByAuthor(author) {
                fetch(`http://localhost:8080/books/search?author=${author}`)
                .then(res => res.json())
                .then(data => {
                this.books = data;
           })
                .catch(error => {
                console.error('Error searching books by author:', error);
        });
    },
            searchByTitle(title) {
                fetch(`http://localhost:8080/books/search?title=${title}`)
                .then(res => res.json())
                .then(data => {
                this.books = data;
            })
                .catch(error => {
                 console.error('Error searching books by title:', error);
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
            fetch(`http://localhost:8080/books/borrow/${bookid}/${this.username}`, {
                method: 'PUT'
            })
            // .then(response => response.json())
            .then(data => {
                console.log("data print:" , data); 
                if(data.status == 200) {
                    alert( "Book borrowed successfully!");
                }
                else if(data.status == 202){
                    alert("Pay the fine amount to borrow another book!");
                }
                this.getBooks(); 
            })
            .catch(error => {
                console.log(error); 
                console.error(error);
            });
        },
        returnBook(bookId) {
            fetch(`http://localhost:8080/books/return/${bookId}/${this.username}`, {
                method: 'PUT'
            })
            // .then(response => response.json())
            .then(data => {
                console.log(data); 
                
                if(data.status == 200) {
                    alert("Book return successfully!");
                }
                else {
                    alert("Error while returning book!");
                }
                
                this.getBooks();
            })
            .catch(error => {
                console.log(error); 
            });
        }
    }
};
</script>