document.addEventListener('DOMContentLoaded', () => {
    
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const rtlToggle = document.getElementById('rtl-toggle');
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');


    const headerInner = document.querySelector('.header-inner');
    const logo = document.querySelector('.logo');
    const desktopNav = document.querySelector('.desktop-nav');
    const headerActions = document.querySelector('.header-actions');
    
    let originalStructure = null;

    function storeOriginalStructure() {
        if (originalStructure || !headerInner || !logo || !headerActions || !desktopNav) return;
        originalStructure = {
            logo: { next: logo.nextSibling },
            actions: { next: headerActions.nextSibling },
            nav: { next: desktopNav.nextSibling }
        };
    }

    const savedDir = localStorage.getItem('dir') || 'ltr';
    storeOriginalStructure();
    setDirection(savedDir);

    if (rtlToggle) {
        rtlToggle.addEventListener('click', () => {
            const currentDir = bodyElement.dir || 'ltr';
            const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
            setDirection(newDir);
        });
    }

    function setDirection(dir) {
        bodyElement.dir = dir;
        localStorage.setItem('dir', dir);
        if (rtlToggle) rtlToggle.innerText = dir === 'rtl' ? 'LTR' : 'RTL';
        const drawerRtlBtn = document.getElementById('drawer-rtl-btn');
        if (drawerRtlBtn) drawerRtlBtn.innerText = dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL';

        if (dir === 'rtl') {
            document.body.style.direction = "rtl";
            document.body.style.textAlign = "right";
            applyRTL();
        } else {
            document.body.style.direction = "ltr";
            document.body.style.textAlign = "left";
            restoreLTR();
        }
    }

    function applyRTL() {
        if (!originalStructure) return;

        headerInner.insertBefore(headerActions, headerInner.firstChild);
        headerInner.appendChild(logo);

        const toggle = document.getElementById('theme-toggle');
        const rtl = document.getElementById('rtl-toggle');
        const signup = headerActions.querySelector('[aria-label="Account"]') || headerActions.querySelector('[href*="signup"]');
        const dashboard = headerActions.querySelector('[aria-label="Dashboard"]') || headerActions.querySelector('[href*="dashboard"]');
        const hamburger = document.getElementById('mobile-menu-btn');

        if (toggle) headerActions.appendChild(toggle);
        if (rtl) headerActions.appendChild(rtl);
        if (signup) headerActions.appendChild(signup);
        if (dashboard) headerActions.appendChild(dashboard);
        if (hamburger) headerActions.appendChild(hamburger);
    }

    function restoreLTR() {
        if (!originalStructure) return;
        headerInner.insertBefore(logo, originalStructure.logo.next);
        headerInner.insertBefore(desktopNav, originalStructure.nav.next);
        headerInner.insertBefore(headerActions, originalStructure.actions.next);
    }


    const passwordToggles = document.querySelectorAll('.password-toggle-btn');
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.closest('.password-toggle-wrapper').querySelector('input');
            if (input) {
                const isPassword = input.type === 'password';
                input.type = isPassword ? 'text' : 'password';
                this.classList.toggle('showing', !isPassword);
                

                const svg = this.querySelector('svg');
                if (svg) {
                    if (input.type === 'text') {
                        svg.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
                    } else {
                        svg.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
                    }
                }
            }
        });
    });


    window.showInputError = function(input, message) {
        let errorMsg = input.nextElementSibling;
        if (!errorMsg || !errorMsg.classList.contains('error-message')) {
            errorMsg = document.createElement('div');
            errorMsg.className = 'error-message';
            input.parentNode.insertBefore(errorMsg, input.nextSibling);
        }
        errorMsg.textContent = message;
        errorMsg.classList.add('show');
        input.classList.add('invalid');
    };

    window.clearInputError = function(input) {
        const errorMsg = input.nextElementSibling;
        if (errorMsg && errorMsg.classList.contains('error-message')) {
            errorMsg.classList.remove('show');
        }
        input.classList.remove('invalid');
    };

    document.addEventListener('click', function(e) {
        const faqBtn = e.target.closest('.faq-question');
        if (faqBtn) {
            const item = faqBtn.closest('.faq-item');
            if (item) {
                const isOpen = item.classList.contains('open');
                
                document.querySelectorAll('.faq-item').forEach(faq => {
                    faq.classList.remove('open');
                });
                
                if (!isOpen) {
                    item.classList.add('open');
                }
            }
        }
    });


    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (theme === 'dark') {
            if (moonIcon) moonIcon.style.display = 'none';
            if (sunIcon) sunIcon.style.display = 'block';
        } else {
            if (moonIcon) moonIcon.style.display = 'block';
            if (sunIcon) sunIcon.style.display = 'none';
        }
    }


    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const drawerRtlBtn = document.getElementById('drawer-rtl-btn');

    if (mobileMenuBtn && mobileDrawer) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileDrawer.classList.add('open');
        });
    }

    const closeDrawer = () => {
        if (mobileDrawer) mobileDrawer.classList.remove('open');
    };

    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

    if (drawerRtlBtn) {
        drawerRtlBtn.addEventListener('click', () => {
            const currentDir = bodyElement.dir || 'ltr';
            const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
            setDirection(newDir);
        });
    }
    const drawerThemeToggle = document.getElementById('drawer-theme-toggle');
    if (drawerThemeToggle) {
        drawerThemeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
            const drawerMoon = drawerThemeToggle.querySelector('.moon-icon');
            const drawerSun = drawerThemeToggle.querySelector('.sun-icon');
            if (newTheme === 'dark') {
                if (drawerMoon) drawerMoon.style.display = 'none';
                if (drawerSun) drawerSun.style.display = 'block';
            } else {
                if (drawerMoon) drawerMoon.style.display = 'block';
                if (drawerSun) drawerSun.style.display = 'none';
            }
        });
    }

    const drawerRtlToggle = document.getElementById('drawer-rtl-toggle');
    if (drawerRtlToggle) {
        drawerRtlToggle.addEventListener('click', () => {
            const currentDir = bodyElement.dir || 'ltr';
            const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
            setDirection(newDir);
            drawerRtlToggle.textContent = newDir === 'rtl' ? 'LTR' : 'RTL';
        });
    }

    const dropdownLinks = document.querySelectorAll('.nav-item.dropdown > .nav-link');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const parent = this.parentElement;
            const isOpen = parent.classList.contains('show-dropdown');
            
            document.querySelectorAll('.nav-item.dropdown').forEach(item => {
                item.classList.remove('show-dropdown');
            });
            
            if (!isOpen) {
                parent.classList.add('show-dropdown');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-item.dropdown')) {
            document.querySelectorAll('.nav-item.dropdown').forEach(item => {
                item.classList.remove('show-dropdown');
            });
        }
    });


    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    wishlistButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btn.classList.toggle('active');
            btn.classList.add('pop');
            setTimeout(() => btn.classList.remove('pop'), 300);

            if (btn.classList.contains('active')) {
                showNotification('Item added to your wishlist!');
            } else {
                showNotification('Removed from wishlist.');
            }
        });
    });

    const newsletterForms = document.querySelectorAll('.newsletter-form, .simple-subscribe');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Notifications are enabled');
            form.reset();
        });
    });

    const subscribeAlertsBtn = document.getElementById('subscribe-alerts-btn');
    if (subscribeAlertsBtn) {
        subscribeAlertsBtn.addEventListener('click', () => {
            showNotification('Alerts are enabled. Welcome to Vintage Clothing Store');
        });
    }

    const layawayBtn = document.getElementById('start-layaway-btn');
    if (layawayBtn) {
        layawayBtn.addEventListener('click', () => {
            showNotification('Welcome to Start Layaway Plan on Vintage Clothing Store');
        });
    }

    const genericButtons = document.querySelectorAll('.btn:not([type="submit"]):not(#subscribe-alerts-btn):not(#start-layaway-btn), .button, .icon-btn:not(#theme-toggle):not(#rtl-toggle)');
    genericButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const href = btn.getAttribute('href');
            if (!href || href === '#' || href === 'index.html') {
                e.preventDefault();
                showNotification('This feature will be available in the full release!');
            }
        });
    });

    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    const categoryCheckboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
    const productCards = document.querySelectorAll('.product-card');

    if (!document.body.classList.contains('home2-isolated') && categoryCheckboxes.length > 0 && productCards.length > 0) {
        categoryCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const activeCategories = Array.from(categoryCheckboxes)
                    .filter(cb => cb.checked)
                    .map(cb => cb.parentElement.textContent.trim().toLowerCase());

                productCards.forEach(card => {
                    const categoryElement = card.querySelector('.category');
                    if (!categoryElement) return;
                    const cardCategory = categoryElement.textContent.trim().toLowerCase();
                    if (activeCategories.length === 0 || activeCategories.includes(cardCategory)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
                
                const visibleCount = Array.from(productCards).filter(c => c.style.display !== 'none').length;
                const countElement = document.querySelector('.item-count');
                if (countElement) countElement.textContent = `Showing ${visibleCount} Results`;
            });
        });
    }


    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'custom-alert';
        notification.innerHTML = `<div class="alert-content"><p>${message}</p></div>`;

        Object.assign(notification.style, {
            position: 'fixed',
            bottom: '30px',
            right: bodyElement.dir === 'rtl' ? 'auto' : '30px',
            left: bodyElement.dir === 'rtl' ? '30px' : 'auto',
            backgroundColor: '#3d3b32',
            color: '#f9f1e1',
            padding: '16px 24px',
            borderRadius: '8px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            zIndex: '1000',
            opacity: '0',
            transform: 'translateY(20px)',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            borderLeft: '4px solid var(--clr-accent)'
        });

        bodyElement.appendChild(notification);
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);

        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(20px)';
            setTimeout(() => notification.remove(), 400);
        }, 3000);
    }

    const interactiveSelectors = [
        '.product-card', '.service-card', '.blog-card', '.step-card', 
        '.collection-card', '.bundle-card', '.pricing-example', 
        '.curation-card', '.team-card', '.testimonial-card',
        '.archive-item', '.contact-review-card', '.visit-archive-card',
        '.sourcing-item', '.resource-card', '.sd-section', '.bd-section',
        '.process-card', '.spotlight-section', '.registry-box', '.stat-card'
    ];

    function initTouchEffects() {
        const elements = document.querySelectorAll(interactiveSelectors.join(','));
        elements.forEach(el => {
            el.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            }, { passive: true });
            
            el.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('touch-active');
                }, 400);
            }, { passive: true });
        });
    }

    initTouchEffects();
});

function hardReverseNav(dir) {
    const nav = document.querySelector('.desktop-nav ul');
    if (!nav) return;

    const items = Array.from(nav.children);

    if (dir === 'rtl' && !nav.classList.contains('rtl-applied')) {
        items.reverse().forEach(el => nav.appendChild(el));
        nav.classList.add('rtl-applied');
    }

    if (dir === 'ltr' && nav.classList.contains('rtl-applied')) {
        items.reverse().forEach(el => nav.appendChild(el));
        nav.classList.remove('rtl-applied');
    }
}

  document.addEventListener('DOMContentLoaded', function() {
            const modal = document.getElementById('image-modal');
            const modalImg = document.getElementById('modal-img');
            const captionText = document.getElementById('modal-caption');
            const teamImages = document.querySelectorAll('.team-img-wrapper img');
            const closeBtn = document.querySelector('.modal-close');

            teamImages.forEach(img => {
                img.style.cursor = 'zoom-in';
                img.addEventListener('click', function() {
                    const modal = document.getElementById('image-modal');
                    const modalImg = document.getElementById('modal-img');
                    const captionText = document.getElementById('modal-caption');
                    
                    if (modal) modal.style.display = "flex";
                    if (modalImg) modalImg.src = this.src;
                    if (captionText) captionText.innerHTML = this.alt;
                    document.body.style.overflow = 'hidden'; 
                });
            });

            const closeModal = function() {
                const modal = document.getElementById('image-modal');
                if (modal) modal.style.display = "none";
                document.body.style.overflow = 'auto';
            };

            if (closeBtn) closeBtn.onclick = closeModal;
            if (modal) {
                modal.onclick = (e) => {
                    if(e.target === modal) closeModal();
                };
            }
            
            document.addEventListener('keydown', (e) => {
                if (e.key === "Escape") {
                    if (modal && modal.style.display === "flex") closeModal();
                }
            });
            const scrollContainer = document.querySelector('.testimonials-scroll');
            const cards = document.querySelectorAll('.testimonial-card');
            const nextBtn = document.querySelector('.scroll-btn.next');
            const prevBtn = document.querySelector('.scroll-btn.prev');
            const dotsContainer = document.querySelector('.testimonial-dots');

            if (scrollContainer && cards.length > 0) {
                cards.forEach((_, i) => {
                    const dot = document.createElement('div');
                    dot.classList.add('dot');
                    if (i === 0) dot.classList.add('active');
                    
                    const dotBtn = document.createElement('button');
                    dotBtn.classList.add('dot-btn');
                    dotBtn.setAttribute('aria-label', `Go to slide ${i + 1}`);
                    dotBtn.appendChild(dot);
                    
                    dotBtn.addEventListener('click', () => {
                        const scrollPos = cards[i].offsetLeft - (scrollContainer.clientWidth - cards[i].clientWidth) / 2;
                        scrollContainer.scrollTo({
                            left: scrollPos,
                            behavior: 'smooth'
                        });
                    });
                    
                    dotsContainer.appendChild(dotBtn);
                });

                const dots = document.querySelectorAll('.dot');
                const updateActiveState = () => {
                    const scrollLeft = scrollContainer.scrollLeft;
                    const containerWidth = scrollContainer.clientWidth;
                    
                    let activeIndex = 0;
                    let minDiff = Infinity;

                    cards.forEach((card, i) => {
                        const cardCenter = card.offsetLeft + card.clientWidth / 2;
                        const containerCenter = scrollLeft + containerWidth / 2;
                        const diff = Math.abs(cardCenter - containerCenter);
                        
                        if (diff < minDiff) {
                            minDiff = diff;
                            activeIndex = i;
                        }
                    });

                    dots.forEach((dot, i) => {
                        dot.classList.toggle('active', i === activeIndex);
                    });
                    if (prevBtn) prevBtn.style.opacity = scrollLeft <= 10 ? '0.3' : '1';
                    if (nextBtn) nextBtn.style.opacity = (scrollLeft + containerWidth) >= (scrollContainer.scrollWidth - 10) ? '0.3' : '1';
                };

                scrollContainer.addEventListener('scroll', updateActiveState);
                window.addEventListener('resize', updateActiveState);
                updateActiveState();
                if (nextBtn) {
                    nextBtn.addEventListener('click', () => {
                        scrollContainer.scrollBy({ left: scrollContainer.clientWidth, behavior: 'smooth' });
                    });
                }

                if (prevBtn) {
                    prevBtn.addEventListener('click', () => {
                        scrollContainer.scrollBy({ left: -scrollContainer.clientWidth, behavior: 'smooth' });
                    });
                }
            }
        });


         document.addEventListener('DOMContentLoaded', () => {
             const signupFormEl = document.getElementById('signupForm');
             if (signupFormEl) {
                 signupFormEl.onsubmit = function(e) {
                     e.preventDefault();
                     window.location.href = "../index.html";
                 };
             }

             const loginFormEl = document.getElementById('loginForm');
             if (loginFormEl) {
                 loginFormEl.onsubmit = function(e) {
                     e.preventDefault();
                     window.location.href = "../index.html";
                 };
             }

                const statsElements = document.querySelectorAll('.stat-number');
             if (statsElements.length > 0) {
                 const countUp = (element) => {
                     if (element.classList.contains('counted')) return;
                     element.classList.add('counted');

                     const target = parseInt(element.getAttribute('data-target'), 10);
                     const suffix = element.getAttribute('data-suffix') || '';
                     const duration = 2000; 
                     const startTime = performance.now();

                     const animate = (currentTime) => {
                         const elapsed = currentTime - startTime;
                         const progress = Math.min(elapsed / duration, 1);
                         
                         const easeProgress = progress * (2 - progress);
                         const currentValue = Math.floor(easeProgress * target);
                         element.innerText = currentValue.toLocaleString() + suffix;

                         if (progress < 1) {
                             requestAnimationFrame(animate);
                         } else {
                             element.innerText = target.toLocaleString() + suffix;
                         }
                     };
                     requestAnimationFrame(animate);
                 };

                  const checkStats = () => {
                      const statsSection = document.querySelector('.stats-section, .hero-stats-grid');
                      if (!statsSection) return;
 
                      const rect = statsSection.getBoundingClientRect();
                      const inViewport = (
                          rect.top >= 0 &&
                          rect.top <= (window.innerHeight || document.documentElement.clientHeight)
                      ) || (
                          rect.bottom >= 0 &&
                          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                      ) || (
                          rect.top < 0 && rect.bottom > (window.innerHeight || document.documentElement.clientHeight)
                      );
 
                      if (inViewport) {
                          statsElements.forEach(el => countUp(el));
                          window.removeEventListener('scroll', checkStats);
                          window.removeEventListener('resize', checkStats);
                      }
                  };
 
                  window.addEventListener('scroll', checkStats);
                  window.addEventListener('resize', checkStats);
                  setTimeout(checkStats, 200);
              }

              
              const heroSection = document.querySelector('.premium-hero');
              if (heroSection) {
                  
                  setTimeout(() => {
                      heroSection.classList.add('loaded');
                  }, 150);

                
                  const shirt = document.getElementById('item-shirt');
                  const jacket = document.getElementById('item-jacket');
                  const coat = document.getElementById('item-coat');
                  
                  const accWatch = document.getElementById('acc-watch');
                  const accGlasses = document.getElementById('acc-glasses');
                  const accBag = document.getElementById('acc-bag');
                  const accHat = document.getElementById('acc-hat');

                 
                  setTimeout(() => {
                      if (shirt) shirt.classList.add('active');
                  }, 1200);

                 
                  setTimeout(() => {
                      if (jacket) jacket.classList.add('active');
                  }, 2400);

                  
                  setTimeout(() => {
                      if (coat) coat.classList.add('active');
                  }, 3600);

                 
                  setTimeout(() => {
                      if (accWatch) accWatch.classList.add('active');
                      if (accGlasses) accGlasses.classList.add('active');
                      if (accBag) accBag.classList.add('active');
                      if (accHat) accHat.classList.add('active');
                      
                     
                      setTimeout(() => {
                          if (shirt) shirt.classList.add('sway');
                          if (jacket) jacket.classList.add('sway');
                          if (coat) coat.classList.add('sway');
                      }, 1000);
                  }, 4500);

                  
                  const showcaseContainer = document.querySelector('.fashion-showcase-container');
                  if (showcaseContainer) {
                      showcaseContainer.addEventListener('mousemove', (e) => {
                          const rect = showcaseContainer.getBoundingClientRect();
                          const x = e.clientX - rect.left;
                          const y = e.clientY - rect.top;
                          showcaseContainer.style.setProperty('--spot-x', `${x}px`);
                          showcaseContainer.style.setProperty('--spot-y', `${y}px`);
                      });
                      
                      showcaseContainer.addEventListener('mouseleave', () => {
                          showcaseContainer.style.setProperty('--spot-x', '50%');
                          showcaseContainer.style.setProperty('--spot-y', '50%');
                      });
                  }

            
                  const parallaxWrapper = document.getElementById('mannequin-parallax-wrapper');
                  if (parallaxWrapper && showcaseContainer) {
                      showcaseContainer.addEventListener('mousemove', (e) => {
                          const rect = showcaseContainer.getBoundingClientRect();
                          const x = e.clientX - rect.left;
                          const y = e.clientY - rect.top;
                          
                          const centerX = rect.width / 2;
                          const centerY = rect.height / 2;
                          const rotateX = -(y - centerY) / 10; 
                          const rotateY = (x - centerX) / 10;  
                          
                          parallaxWrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                      });
                      
                      showcaseContainer.addEventListener('mouseleave', () => {
                          parallaxWrapper.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
                      });
                  }

                  const magneticBtns = document.querySelectorAll('.magnetic-btn');
                  magneticBtns.forEach(btn => {
                      btn.addEventListener('mousemove', (e) => {
                          const rect = btn.getBoundingClientRect();
                          const x = e.clientX - rect.left - rect.width / 2;
                          const y = e.clientY - rect.top - rect.height / 2;
                          
                          btn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px) scale(1.02)`;
                      });
                      
                      btn.addEventListener('mouseleave', () => {
                          btn.style.transform = 'translate(0px, 0px) scale(1)';
                      });
                  });

                  const dustContainer = document.getElementById('dust-particles');
                  if (dustContainer) {
                      const particleCount = 20;
                      for (let i = 0; i < particleCount; i++) {
                          const particle = document.createElement('div');
                          particle.className = 'dust-particle';
                          
                          const size = Math.random() * 2.5 + 1.5;
                          const startX = Math.random() * 100;
                          const startY = Math.random() * 100;
                          const duration = Math.random() * 18 + 12;
                          const delay = Math.random() * -20;
                          
                          Object.assign(particle.style, {
                              width: `${size}px`,
                              height: `${size}px`,
                              left: `${startX}%`,
                              top: `${startY}%`,
                              position: 'absolute',
                              backgroundColor: 'var(--clr-accent)',
                              borderRadius: '50%',
                              opacity: Math.random() * 0.3 + 0.1,
                              pointerEvents: 'none',
                              animation: `float-dust ${duration}s linear infinite`,
                              animationDelay: `${delay}s`
                          });
                          
                          dustContainer.appendChild(particle);
                      }
                  }
              }

              const timelineItems = document.querySelectorAll('.timeline-item');
              if (timelineItems.length > 0) {
                  const observerOptions = {
                      root: null,
                      rootMargin: '0px 0px -50px 0px',
                      threshold: 0.15
                  };

                  const timelineObserver = new IntersectionObserver((entries, observer) => {
                      entries.forEach(entry => {
                          if (entry.isIntersecting) {
                              entry.target.classList.add('revealed');
                              observer.unobserve(entry.target);
                          }
                      });
                  }, observerOptions);

                  timelineItems.forEach(item => {
                      timelineObserver.observe(item);
                  });
              }
          });