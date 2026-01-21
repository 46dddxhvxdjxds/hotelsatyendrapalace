// Main Application Entry Point
// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Register all routes
    router.register('/', renderHomePage);
    router.register('/gallery', renderGalleryPage);
    router.register('/book', renderBookingPage);
    router.register('/login', renderLoginPage);
    router.register('/admin', renderAdminPage);
    router.register('/privacy', renderPrivacyPage);
    router.register('/terms', renderTermsPage);

    // Initialize router
    router.init();

    // Update navbar on user change
    window.addEventListener('userChanged', updateNavbar);

    // Initial navbar update
    updateNavbar();
});

// Update navbar based on user state
function updateNavbar() {
    const user = authService.getCurrentUser();
    const userSection = document.getElementById('user-section');
    const mobileUserSection = document.getElementById('mobile-user-section');

    if (user) {
        // Desktop navbar
        if (userSection) {
            userSection.innerHTML = `
        <div class="flex items-center gap-4 border-l pl-8 border-stone-200">
          <a 
            href="${user.isAdmin ? '#/admin' : '#/'}" 
            class="text-sm font-semibold text-stone-800"
          >
            Hi, ${user.name} ${user.isAdmin ? '(Admin)' : ''}
          </a>
          <button
            id="logout-btn"
            class="px-4 py-2 text-sm font-medium text-white bg-[#FF002B] rounded-full hover:opacity-90 transition-all shadow-md hover:shadow-lg"
          >
            Logout
          </button>
        </div>
      `;

            document.getElementById('logout-btn').addEventListener('click', () => {
                authService.logout();
                router.navigate('/');
            });
        }

        // Mobile navbar
        if (mobileUserSection) {
            mobileUserSection.innerHTML = `
        <button 
          id="mobile-user-btn"
          class="flex-shrink-0 w-10 h-10 flex items-center justify-center text-[#FF002B] border border-[#FF002B] rounded-full transition-all hover:bg-red-50"
        >
          <i class="fa-solid fa-user text-[14px]"></i>
        </button>
      `;

            let isMenuOpen = false;
            document.getElementById('mobile-user-btn').addEventListener('click', () => {
                isMenuOpen = !isMenuOpen;
                toggleMobileMenu(isMenuOpen, user);
            });
        }
    } else {
        // Desktop navbar - not logged in
        if (userSection) {
            userSection.innerHTML = `
        <a
          href="#/login"
          class="px-6 py-2 text-sm font-medium text-[#FF002B] border border-[#FF002B] rounded-full hover:bg-red-50 transition-all"
        >
          Login
        </a>
      `;
        }

        // Mobile navbar - not logged in
        if (mobileUserSection) {
            mobileUserSection.innerHTML = `
        <a
          href="#/login"
          class="px-5 py-2 border border-[#FF002B] rounded-full text-[14px] font-medium transition-all whitespace-nowrap ${window.location.hash === '#/login' ? 'bg-[#FF002B] text-white' : 'text-[#FF002B] hover:bg-red-50'
                }"
        >
          Login
        </a>
      `;
        }
    }
}

function toggleMobileMenu(isOpen, user) {
    const existingMenu = document.getElementById('mobile-user-menu');

    if (existingMenu) {
        existingMenu.remove();
    }

    if (isOpen) {
        const menu = document.createElement('div');
        menu.id = 'mobile-user-menu';
        menu.className = 'absolute bottom-full mb-4 left-0 right-0 bg-white/95 backdrop-blur-xl rounded-[2rem] p-6 shadow-2xl border border-stone-100 animate-in slide-in-from-bottom-4 zoom-in-95 duration-300';
        menu.innerHTML = `
      <div class="space-y-4">
        <div class="pb-3 border-b border-stone-100 flex items-center justify-between">
          <div>
            <p class="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-0.5">Account</p>
            <p class="font-bold text-stone-900">${user.name}</p>
          </div>
          <i class="fa-solid fa-circle-user text-[#FF002B] text-xl"></i>
        </div>
        ${user.isAdmin ? `
          <a 
            href="#/admin" 
            class="flex items-center gap-3 py-3.5 px-4 bg-red-50 rounded-2xl text-red-900 font-bold text-sm transition-colors hover:bg-red-100"
          >
            <i class="fa-solid fa-gauge-high"></i>
            Admin Dashboard
          </a>
        ` : ''}
        <button 
          id="mobile-logout-btn"
          class="w-full flex items-center gap-3 py-3.5 px-4 text-red-600 font-bold text-sm hover:bg-red-50 rounded-2xl transition-colors"
        >
          <i class="fa-solid fa-right-from-bracket"></i>
          Sign Out
        </button>
      </div>
    `;

        const mobileNav = document.querySelector('.mobile-nav-container');
        if (mobileNav) {
            mobileNav.appendChild(menu);

            document.getElementById('mobile-logout-btn').addEventListener('click', () => {
                authService.logout();
                router.navigate('/');
                menu.remove();
            });

            // Close menu when clicking outside
            setTimeout(() => {
                document.addEventListener('click', function closeMenu(e) {
                    if (!menu.contains(e.target) && !document.getElementById('mobile-user-btn').contains(e.target)) {
                        menu.remove();
                        document.removeEventListener('click', closeMenu);
                    }
                });
            }, 100);
        }
    }
}
