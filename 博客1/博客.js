<script>
        // 移动端菜单切换
        const mobileMenu = document.getElementById('mobileMenu');
        const navLinks = document.getElementById('navLinks');

        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            // 切换菜单图标
            mobileMenu.innerHTML = navLinks.classList.contains('show') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // 平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    // 移动端点击后关闭菜单
                    if (navLinks.classList.contains('show')) {
                        navLinks.classList.remove('show');
                        mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });
    </script>