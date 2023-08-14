<template>
    <main>
        <!--Bootstrap Navbar-->
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link" href="/home">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/admin/login">Admin</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/view-books">View Books</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </main>
</template>

<style scoped>
/* Navbar Styling */
.navbar {
background-color: #333;
border-bottom: 2px solid #f39c12;
border-radius: 0;
}

.navbar-brand {
color: #f39c12;
font-size: 24px;
font-weight: bold;
}

.navbar-toggler-icon {
background-color: #f39c12;
}

.navbar-nav .nav-link {
color: #053e62;
font-size: 18px;
padding: 10px 15px;
transition: color 0.3s ease-in-out;
}

.navbar-nav .nav-link:hover {
color: #f39c12;
}

/* Active Link Styling */
.navbar-nav .nav-item.active .nav-link {
color: #f39c12;
background-color: transparent;
border-bottom: 2px solid #f39c12;
}

/* Mobile Collapse Styling */
.navbar-toggler {
border-color: #f39c12;
}

.navbar-toggler-icon {
background-color: #f39c12;
}

/* Container Padding */
.container-fluid {
padding: 20px;
}
</style>