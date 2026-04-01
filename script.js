// Configuración de proyectos
const projects = [
    {
        name: "VitaFrut",
        description: "Sistema web dedicado para ver frutas a tiempo completo con dashboard, productos y búsqueda rápida.",
        url: "https://vitafrut.vercel.app/",
        github: "https://github.com/RenzoOcu/vitafrut",
        tech: ["Next.js", "TypeScript", "React", "Tailwind"],
        screenshot: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fvitafrut.vercel.app%2F/opengraph"
    },
    {
        name: "Redflix",
        description: "Plataforma de streaming con sistema de login seguro, reproductor de películas y base de datos.",
        url: "https://redflix-rust.vercel.app/",
        github: "https://github.com/RenzoOcu/Redflix",
        tech: ["React", "Prisma", "TypeScript", "Next.js"],
        screenshot: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fredflix-rust.vercel.app%2F/opengraph"
    },
    {
        name: "LISTO Ovalo La Marina",
        description: "Sistema completo de gestión de inventario para negocio de hamburguesas con alertas, recetas y control de temperatura.",
        url: "https://nuevo-sistema.vercel.app/",
        github: "https://github.com/RenzoOcu/nuevoSistema",
        tech: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
        screenshot: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fnuevo-sistema.vercel.app%2F/opengraph"
    },
    {
        name: "Emoape",
        description: "Tienda en línea de skincare y belleza con carrito de compras, categorías y sistema de cuentas.",
        url: "https://emoape.com/?v=dd07de856139",
        github: "https://github.com/RenzoOcu",
        tech: ["WooCommerce", "WordPress", "PHP", "MySQL"],
        screenshot: "https://v1.screenshot.11ty.dev/https%3A%2F%2Femoape.com%2F%3Fv%3Ddd07de856139/opengraph"
    },
    {
        name: "Sistema de Inventario Pollería",
        description: "Sistema hecho en React junto a Node.js y Zustand utilizando base de datos Supabase para gestión de inventario.",
        url: "https://github.com/RenzoOcu/Sistema-de-inventario-para-una-polleria-",
        github: "https://github.com/RenzoOcu/Sistema-de-inventario-para-una-polleria-",
        tech: ["React", "Node.js", "Zustand", "Supabase"],
        screenshot: "https://lh3.googleusercontent.com/d/13DiiPKVDsoGD9s1O-eeYmwEAsz7OTOF4=s800"
    },
    {
        name: "Spotyfan",
        description: "Página web de streaming musical con componentes shadcn y Astro, base de datos local.",
        url: "https://github.com/RenzoOcu/spotyfan-",
        github: "https://github.com/RenzoOcu/spotyfan-",
        tech: ["Astro", "React", "shadcn", "Local JSON"],
        screenshot: "https://lh3.googleusercontent.com/d/1X_hg9EJt6AFdSPdtX5MBXr5z6Bncfpxx=s800"
    }
];

// Otros proyectos de GitHub
const otherProjects = [
    {
        name: "Web Form para Negocio Hospital",
        description: "Formulario web para negocio hospitalario",
        url: "https://github.com/RenzoOcu/web-form-para-negocio-hospital",
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Juego del Gusanito",
        description: "Juego clásico de la viborita con música incluida",
        url: "https://github.com/RenzoOcu/juego-del-gusanito-",
        tech: ["JavaScript", "HTML5", "CSS3"]
    },
    {
        name: "Práctica React Funcionalidades",
        description: "Bloq de notas básico con React y CSS",
        url: "https://github.com/RenzoOcu/practica-basica-1-de-funcionalidades-react",
        tech: ["React", "CSS"]
    },
    {
        name: "Testimonios React",
        description: "Componente de testimonios con React",
        url: "https://github.com/RenzoOcu/testimonios-react",
        tech: ["React", "CSS"]
    },
    {
        name: "Webtoon API Sheet",
        description: "Integración con API de webtoons",
        url: "https://github.com/RenzoOcu/webtoon__api-sheet",
        tech: ["JavaScript", "API"]
    },
    {
        name: "Página Web Prueba Frontend",
        description: "Página web básica con HTML y CSS",
        url: "https://github.com/RenzoOcu/pagina_web-de-prueba-frontend",
        tech: ["HTML", "CSS"]
    },
    {
        name: "Aplicación Web Prueba Acecas",
        description: "Prueba de modificación con PHP y JavaScript",
        url: "https://github.com/RenzoOcu/aplicacion-web-prueba_acecas",
        tech: ["PHP", "JavaScript"]
    },
    {
        name: "API en PHP con MySQL",
        description: "API de modificación y manejo con PHP y MySQL",
        url: "https://github.com/RenzoOcu/Api-modificacion-y-manejo-de-una-api-en-php-con-mysql",
        tech: ["PHP", "MySQL"]
    },
    {
        name: "Juego Naves HTML/JavaScript",
        description: "Juego básico de nave espacial con sonido",
        url: "https://github.com/RenzoOcu/juego-naves-html.javascript",
        tech: ["HTML", "JavaScript"]
    },
    {
        name: "Sistema de Ventas Java con MySQL",
        description: "Sistema de ventas en Java con base de datos MySQL",
        url: "https://github.com/RenzoOcu/sistema-de-ventas-java-con-Mysql",
        tech: ["Java", "MySQL"]
    },
    {
        name: "CRUD de Python y MySQL",
        description: "CRUD conectado con MySQL ejecutado en Python",
        url: "https://github.com/RenzoOcu/CRUD-de-python-y-msql",
        tech: ["Python", "MySQL"]
    },
    {
        name: "Aplicación Web Python y MySQL",
        description: "Aplicación web con Python y base de datos MySQL",
        url: "https://github.com/RenzoOcu/aplicacio-web-python-y-Mysql",
        tech: ["Python", "MySQL"]
    }
];

// Cargar proyectos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadOtherProjects();
    setupForm();
    setupSmoothScroll();
});

// Mapeo de tecnologías a iconos
const techIcons = {
    'React': 'fab fa-react',
    'Next.js': 'fas fa-n',
    'TypeScript': 'fab fa-js',
    'JavaScript': 'fab fa-js',
    'HTML5': 'fab fa-html5',
    'HTML': 'fab fa-html5',
    'CSS3': 'fab fa-css3-alt',
    'CSS': 'fab fa-css3-alt',
    'Tailwind': 'fas fa-wind',
    'Node.js': 'fab fa-node-js',
    'Express': 'fas fa-bolt',
    'Python': 'fab fa-python',
    'PHP': 'fab fa-php',
    'MySQL': 'fas fa-database',
    'Prisma': 'fas fa-database',
    'Supabase': 'fas fa-bolt',
    'Astro': 'fas fa-rocket',
    'Local Storage': 'fas fa-hdd',
    'Zustand': 'fas fa-database',
    'WooCommerce': 'fab fa-wordpress',
    'WordPress': 'fab fa-wordpress',
    'shadcn': 'fas fa-palette',
    'Local JSON': 'fas fa-file-code',
    'API': 'fas fa-network-wired',
    'Java': 'fab fa-java'
};

// Cargar proyectos en el grid
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map((project, index) => {
        let imageHTML = '';
        
        if (project.screenshot) {
            imageHTML = `
                <img src="${project.screenshot}" alt="${project.name}" loading="lazy" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" 
                     onload="this.classList.add('loaded')">
                <div class="placeholder-retro" style="display: none;">
                    <div class="placeholder-content">
                        <div class="placeholder-icon">🖥️</div>
                        <div class="placeholder-title">${project.name}</div>
                        <div class="placeholder-subtitle">Vista previa no disponible</div>
                    </div>
                </div>
            `;
        } else {
            imageHTML = `
                <div class="placeholder-retro">
                    <div class="placeholder-content">
                        <div class="placeholder-icon">📁</div>
                        <div class="placeholder-title">${project.name}</div>
                        <div class="placeholder-subtitle">Repositorio GitHub</div>
                    </div>
                </div>
            `;
        }
        
        return `
            <div class="project-card" style="animation-delay: ${index * 0.1}s">
                <div class="project-image ${project.screenshot ? '' : 'loading'}">
                    ${imageHTML}
                    <div class="scan-overlay"></div>
                </div>
                <div class="project-content">
                    <h3 class="glitch-text">${project.name}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map(tech => {
                            const icon = techIcons[tech] || 'fas fa-code';
                            return `<span><i class="${icon}"></i> ${tech}</span>`;
                        }).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.url}" target="_blank" class="btn">Ver Proyecto</a>
                        <a href="${project.github}" target="_blank" class="btn btn-outline">Código</a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Agregar animación de entrada
    setTimeout(() => {
        document.querySelectorAll('.project-card').forEach(card => {
            card.classList.add('visible');
        });
    }, 100);
}

// Cargar otros proyectos
function loadOtherProjects() {
    const otherGrid = document.getElementById('otherProjectsGrid');
    if (!otherGrid) return;
    
    otherGrid.innerHTML = otherProjects.map((project, index) => {
        return `
            <div class="other-project-card" style="animation-delay: ${index * 0.1}s">
                <h4>${project.name}</h4>
                <p>${project.description}</p>
                <div class="other-project-tech">
                    ${project.tech.map(tech => {
                        const icon = techIcons[tech] || 'fas fa-code';
                        return `<span><i class="${icon}"></i> ${tech}</span>`;
                    }).join('')}
                </div>
                <a href="${project.url}" target="_blank" class="other-project-link">
                    <i class="fab fa-github"></i> Ver en GitHub
                </a>
            </div>
        `;
    }).join('');
    
    // Agregar animación de entrada
    setTimeout(() => {
        document.querySelectorAll('.other-project-card').forEach(card => {
            card.classList.add('visible');
        });
    }, 100);
}

// Configurar formulario de contacto para WhatsApp
function setupForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactMessage').value;
        
        if (!name || !email || !message) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        
        // Crear mensaje para WhatsApp
        const whatsappMessage = `*Nuevo mensaje desde Portafolio*%0A%0A*Nombre:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A%0A*Mensaje:*%0A${encodeURIComponent(message)}`;
        
        // Número de WhatsApp (con código de país)
        const phoneNumber = '51923649915'; // +51 923649915
        
        // URL de WhatsApp
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
        
        // Redirigir a WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Limpiar formulario
        contactForm.reset();
        
        // Mostrar confirmación
        alert('¡Redirigiendo a WhatsApp! Se abrirá una nueva pestaña para enviar tu mensaje.');
    });
}

// Smooth scroll para enlaces internos
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Efecto para el navbar al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = 'var(--shadow)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }
});

// Animación del terminal
function animateTerminal() {
    const terminalContent = document.getElementById('terminalContent');
    if (!terminalContent) return;
    
    const lines = [
        { prompt: '$', text: 'whoami', output: 'renzo_ocupa' },
        { prompt: '$', text: 'cat skills.txt', output: 'React, Next.js, Node.js, TypeScript, Python, PHP, MySQL' },
        { prompt: '$', text: 'echo "¡Trabajemos juntos!"', output: '¡Trabajemos juntos!' }
    ];
    
    let currentLine = 0;
    let currentChar = 0;
    let isOutput = false;
    
    function type() {
        if (currentLine >= lines.length) {
            // Mostrar cursor al final
            terminalContent.innerHTML += '<p><span class="terminal-prompt">$</span> <span class="cursor">_</span></p>';
            return;
        }
        
        const line = lines[currentLine];
        
        if (!isOutput) {
            // Escribiendo el comando
            if (currentChar < line.text.length) {
                const currentText = line.text.substring(0, currentChar + 1);
                terminalContent.innerHTML = `
                    <p><span class="terminal-prompt">${line.prompt}</span> ${currentText}<span class="cursor">_</span></p>
                `;
                currentChar++;
                setTimeout(type, 100);
            } else {
                // Comando terminado, mostrar output
                isOutput = true;
                currentChar = 0;
                setTimeout(type, 500);
            }
        } else {
            // Escribiendo el output
            if (currentChar < line.output.length) {
                const currentOutput = line.output.substring(0, currentChar + 1);
                terminalContent.innerHTML = `
                    <p><span class="terminal-prompt">${line.prompt}</span> ${line.text}</p>
                    <p class="terminal-output">${currentOutput}<span class="cursor">_</span></p>
                `;
                currentChar++;
                setTimeout(type, 50);
            } else {
                // Output terminado, siguiente línea
                currentLine++;
                currentChar = 0;
                isOutput = false;
                setTimeout(type, 1000);
            }
        }
    }
    
    // Iniciar animación después de un retraso
    setTimeout(type, 1000);
}

// Reproductor de música de fondo (llamado después de overlay)
function initMusicPlayer() {
    const videoId = '6VA-_T-NlSY';
    const playerContainer = document.getElementById('playerContainer');
    const toggleBtn = document.getElementById('togglePlay');
    let isPlaying = false;
    let player;
    let isReady = false;
    
    // Cargar API de YouTube
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    // Crear iframe cuando la API esté lista
    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('playerContainer', {
            videoId: videoId,
            playerVars: {
                autoplay: 1,
                loop: 1,
                playlist: videoId,
                controls: 0,
                showinfo: 0,
                rel: 0,
                modestbranding: 1,
                iv_load_policy: 3,
                mute: 0 // Sin mute porque el usuario ya hizo click en overlay
            },
            events: {
                onReady: function(event) {
                    isReady = true;
                    event.target.setVolume(10); // Volumen al 10%
                    // Reproducir inmediatamente sin mute
                    event.target.playVideo().then(() => {
                        isPlaying = true;
                        toggleBtn.textContent = '⏸️';
                        playerContainer.classList.add('active');
                        console.log('Música iniciada después de click en overlay.');
                    }).catch((error) => {
                        console.log('Error al reproducir:', error);
                        isPlaying = false;
                        toggleBtn.textContent = '▶️';
                        playerContainer.classList.remove('active');
                    });
                },
                onStateChange: function(event) {
                    // Actualizar botón según estado del video
                    if (event.data === YT.PlayerState.PLAYING) {
                        isPlaying = true;
                        toggleBtn.textContent = '⏸️';
                        playerContainer.classList.add('active');
                    } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
                        isPlaying = false;
                        toggleBtn.textContent = '▶️';
                        playerContainer.classList.remove('active');
                    }
                }
            }
        });
    };
    
    // Controlar reproducción con botón
    toggleBtn.addEventListener('click', function() {
        if (!player || !isReady) return;
        
        if (isPlaying) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    });
    
    // Inicialmente oculto hasta que se inicie la reproducción
    playerContainer.classList.remove('active');
}

// Efectos de sonido al hover
function initSoundEffects() {
    // Crear AudioContext
    let audioContext;
    
    // Función para reproducir un tono retro
    function playRetroSound(frequency = 440, duration = 80, type = 'square', vibrato = false) {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Configurar oscilador
        oscillator.type = type;
        oscillator.frequency.value = frequency;
        
        // Efecto de vibrato opcional
        if (vibrato) {
            const vibratoOsc = audioContext.createOscillator();
            const vibratoGain = audioContext.createGain();
            vibratoOsc.frequency.value = 5; // 5 Hz
            vibratoGain.gain.value = frequency * 0.02; // 2% de modulación
            vibratoOsc.connect(vibratoGain);
            vibratoGain.connect(oscillator.frequency);
            vibratoOsc.start();
            vibratoOsc.stop(audioContext.currentTime + duration / 1000);
        }
        
        // Envolvente de volumen (ataque rápido, liberación lenta)
        const now = audioContext.currentTime;
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.15, now + 0.01); // Ataque rápido
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration / 1000); // Liberación
        
        oscillator.start(now);
        oscillator.stop(now + duration / 1000);
    }
    
    // Función para reproducir un arpegio retro (acorde rápido)
    function playRetroArpeggio(baseFreq = 220, duration = 100) {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        // Acorde mayor (raíz, tercera, quinta)
        const notes = [baseFreq, baseFreq * 1.25, baseFreq * 1.5]; // Acorde mayor
        const noteDuration = duration / notes.length;
        
        notes.forEach((freq, i) => {
            setTimeout(() => {
                playRetroSound(freq, noteDuration, 'square', false);
            }, i * (noteDuration * 0.8));
        });
    }
    
    // Lista de elementos que deben tener sonido
    const soundElements = [
        '.project-card',
        '.tech-tag',
        '.nav-link',
        '.btn',
        '.other-project-card',
        '.tech-category h3',
        '.contact-item',
        '.social-links a'
    ];
    
    // Agregar event listeners
    soundElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.addEventListener('mouseenter', () => {
                // Diferentes sonidos retro para diferentes elementos
                if (element.classList.contains('project-card') || element.classList.contains('other-project-card')) {
                    playRetroArpeggio(220, 100); // Acorde grave para tarjetas
                } else if (element.classList.contains('tech-tag')) {
                    playRetroSound(880, 60, 'square', true); // Tono agudo con vibrato para tecnologías
                } else if (element.classList.contains('nav-link')) {
                    playRetroSound(440, 80, 'triangle'); // Tono medio para navegación
                } else if (element.classList.contains('btn')) {
                    playRetroSound(660, 70, 'square'); // Tono para botones
                } else if (element.classList.contains('tech-category h3')) {
                    playRetroArpeggio(330, 120); // Acorde medio para títulos
                } else {
                    playRetroSound(550, 50, 'sawtooth'); // Tono por defecto
                }
            });
        });
    });
}

// Iniciar animación del terminal cuando cargue la página
document.addEventListener('DOMContentLoaded', () => {
    animateTerminal();
    initSoundEffects();
    
    // Mostrar overlay para activar música
    const overlay = document.getElementById('musicOverlay');
    overlay.addEventListener('click', () => {
        // Ocultar overlay
        overlay.classList.add('hidden');
        // Iniciar música después de un breve retraso
        setTimeout(() => {
            initMusicPlayer();
        }, 500);
    });
});