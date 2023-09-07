<template>
    <main>
        <Navbar />
        <div class="my-5">
            <div class="mx-auto w-25 " style="max-width:100%;">
                <h2 class="text-center mb-3">Update Book</h2>
                <form @submit.prevent="updateBook">
                    <!-- Title -->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="title" class="form-label">Title</label>
                            <input id="title" type="text" name="title" class="form-control" placeholder="Title" required v-model="book.title">
                        </div>
                    </div>

                    <!-- Author -->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="author" class="form-label">Author</label>
                            <input id="author" type="text" name="author" class="form-control" placeholder="Author" required v-model="book.author">
                        </div>
                    </div>

                    <!-- Availability -->
                    <div class="row">
                        <div class="col-md-12 form-check mb-3">
                            <input id="available" type="checkbox" name="available" class="form-check-input" v-model="book.available">
                            <label for="available" class="form-check-label">Available</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 form-group">
                            <input class="btn btn-primary w-100" type="submit" value="Update">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
    name: 'UpdateBook',
    components: {
        Navbar
    },

    data() {
        return {
            book: {
                id: '',
                title: '',
                author: '',
                available: true
            }
        }
    },

    beforeMount() {
        this.getBook();
    },

    methods: {
        getBook() {
            fetch(`http://localhost:8080/books/${this.$route.params.id}`)
                .then(res => res.json())
                .then(data => {
                    this.book = data;
                    console.log(this.book);
                });
        },
        updateBook() {
            fetch(`http://localhost:8080/books`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.book)
            })
            .then(data => {
                console.log(data);
                this.$router.push('/view-books-admin');
            });
        }
    }
};
</script>