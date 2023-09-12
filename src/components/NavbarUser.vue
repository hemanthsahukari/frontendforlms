<template>
    <main>
        <!--Bootstrap Navbar-->
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid" style="
    padding-bottom: 2px;
    padding-top: 2px;">
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
                    <a class="nav-link" href="/view-books">View Books</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/ViewBorrowedBooks">ViewBorrowedBooks</a>
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
background-image: linear-gradient(to right, #2c3e50, #34495e);
border-bottom: 2px solid #e74c3c;
border-radius: 0;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.navbar-brand {
color: #e74c3c;
font-size: 32px;
font-weight: bold;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.navbar-toggler-icon {
background-color: #e74c3c;
}

.navbar-nav .nav-item {
position: relative;
}

.navbar-nav .nav-link {
color: #fff;
font-size: 18px;
padding: 10px 15px;
transition: color 0.3s ease-in-out;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.navbar-nav .nav-link:hover {
color: #e74c3c;
transform: scale(1.1);
}

/* Seperator Styling */
.navbar-nav .nav-item:not(:last-child)::after {
content: "";
position: absolute;
top: 50%;
right: 0;
transform: translateY(-50%);
width: 1px;
height: 80%;
background-color: rgba(255, 255, 255, 0.1);
}

/* Active Link Styling */
.navbar-nav .nav-item.active .nav-link {
color: #e74c3c;
background-color: transparent;
border-bottom: 2px solid #e74c3c;
transform: translateY(-2px);
}

/* Mobile Collapse Styling */
.navbar-toggler {
border-color: #e74c3c;
}

.navbar-toggler-icon {
background-color: #e74c3c;
}

/* Container Padding */
.container-fluid {
padding: 20px;
}

</style>