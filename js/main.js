document.addEventListener('DOMContentLoaded', function() {
    // SweetAlert2 for welcome message
    Swal.fire({
        title: 'Selamat Datang!',
        text: 'Website Resmi TRPL C PAGI - Politeknik Negeri Batam',
        icon: 'info',
        confirmButtonText: 'Lanjut',
        background: '#1f2937',
        color: '#f3f4f6',
        confirmButtonColor: '#3b82f6',
    });

    // More projects button
    const moreProjectsBtn = document.getElementById('more-projects');
    if (moreProjectsBtn) {
        moreProjectsBtn.addEventListener('click', function() {
            Swal.fire({
                title: 'Project Lainnya',
                text: 'Kami sedang mengembangkan lebih banyak project menarik. Nantikan update terbaru!',
                icon: 'info',
                confirmButtonText: 'Mengerti',
                background: '#1f2937',
                color: '#f3f4f6',
                confirmButtonColor: '#3b82f6',
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close sidebar if open
                const sidebar = document.getElementById('sidebar');
                if (sidebar.classList.contains('translate-x-0')) {
                    sidebar.classList.remove('translate-x-0');
                    sidebar.classList.add('translate-x-full');
                }
            }
        });
    });

    // Add shadow to header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('shadow-lg');
        } else {
            header.classList.remove('shadow-lg');
        }
    });
});