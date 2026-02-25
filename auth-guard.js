// Auth Guard - Versión Compatibilidad

// Escuchar cambios en la autenticación usando la variable global 'auth' 
// (asume que firebase-app-compat.js, firebase-auth-compat.js y firebase-config.js ya fueron cargados)

auth.onAuthStateChanged((user) => {
    if (user) {
        // Usuario logueado
        console.log("Usuario autenticado:", user.email);
        
        // Guardar el nombre del usuario en localStorage si está disponible
        if (user.displayName) {
            localStorage.setItem('userName', user.displayName);
        } else {
            // Si no hay displayName, usar el email sin @dominio
            localStorage.setItem('userName', user.email.split('@')[0]);
        }
        
        // Actualizar UI
        const userProfile = document.querySelector('.user-profile span');
        const userAvatar = document.querySelector('.avatar');
        
        if (userProfile && user.displayName) {
            userProfile.textContent = user.displayName;
        } else if (userProfile) {
            userProfile.textContent = user.email.split('@')[0];
        }

        if (userAvatar && user.photoURL) {
            userAvatar.innerHTML = `<img src="${user.photoURL}" alt="Avatar" style="width: 100%; height: 100%; border-radius: 50%;">`;
        }

        setupLogout();

    } else {
        // Usuario no logueado
        console.log("Usuario no autenticado, redirigiendo...");
        window.location.href = 'login.html';
    }
});

function setupLogout() {
    let logoutBtn = document.getElementById('btn-logout');
    
    if (!logoutBtn) {
        const header = document.querySelector('header');
        if (header) {
            const profileDiv = header.querySelector('.user-profile');
            if (profileDiv) {
                logoutBtn = document.createElement('button');
                logoutBtn.id = 'btn-logout';
                logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i>';
                logoutBtn.title = 'Cerrar Sesión';
                logoutBtn.style.background = 'transparent';
                logoutBtn.style.border = 'none';
                logoutBtn.style.color = 'var(--secondary)';
                logoutBtn.style.fontSize = '1.2rem';
                logoutBtn.style.cursor = 'pointer';
                logoutBtn.style.marginLeft = '15px';
                
                profileDiv.appendChild(logoutBtn);
            }
        }
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            try {
                await auth.signOut();
                window.location.href = 'login.html';
            } catch (error) {
                console.error("Error al cerrar sesión", error);
            }
        });
    }
}
