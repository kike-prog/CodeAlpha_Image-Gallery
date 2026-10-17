/**
 * LUMINA — Stories worth seeing
 * Main Application Orchestrator & Interactions
 */

// Premium High-Fidelity Photography Dataset with Tested Real Imagery
const galleryDataset = [
  {
    id: 1,
    title: "Misty Alpine Silence",
    category: "nature",
    description: "First morning light piercing through rolling fog above the jagged Swiss alpine ridges.",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85",
    thumb: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    location: "Swiss Alps, Switzerland",
    photographer: "Elena Vance",
    timestamp: "Captured at 06:14 AM",
    spanClass: "span-hero-large"
  },
  {
    id: 2,
    title: "Tokyo Cyber Dusk",
    category: "travel",
    description: "Glistening asphalt mirroring midnight neon towers and dynamic metropolitan energy.",
    src: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1920&q=85",
    thumb: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80",
    location: "Shinjuku, Tokyo",
    photographer: "Kenji Sato",
    timestamp: "Captured at 11:48 PM",
    spanClass: "span-tall"
  },
  {
    id: 3,
    title: "Golden Hour Reverie",
    category: "people",
    description: "An intimate portrait bathed in natural sunset rim-lighting and warm atmospheric grain.",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1920&q=85",
    thumb: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    location: "Lisbon, Portugal",
    photographer: "Mateo Silva",
    timestamp: "Captured at 06:42 PM",
    spanClass: "span-medium"
  },
  {
    id: 4,
    title: "Spiral Geometry",
    category: "architecture",
    description: "Futuristic spiral staircase interior boasting minimalist architectural symmetry and curved shadow play.",
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=85",
    thumb: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80",
    location: "Copenhagen, Denmark",
    photographer: "Astrid Lind",
    timestamp: "Captured at 02:15 PM",
    spanClass: "span-wide"
  },
  {
    id: 5,
    title: "Dolomite Solitude",
    category: "nature",
    description: "Jagged limestone peaks piercing a quiet sea of low-hanging autumn clouds.",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85",
    thumb: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80",
    location: "Dolomites, Italy",
    photographer: "Bjorn Hansen",
    timestamp: "Captured at 07:20 AM",
    spanClass: "span-portrait"
  },
  {
    id: 6,
    title: "Prismatic Liquid Flow",
    category: "abstract",
    description: "Macro photographic capture of iridescent fluid textures and refraction gradients.",
    src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1920&q=85",
    thumb: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=400&q=80",
    location: "Studio Laboratory",
    photographer: "Clara Dubois",
    timestamp: "Captured at 04:30 PM",
    spanClass: "span-portrait"
  },
  {
    id: 7,
    title: "Futuristic Glass Facade",
    category: "architecture",
    description: "Angular glass skyscrapers reflecting clean blue skies in sharp geometric alignment.",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85",
    thumb: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
    location: "Frankfurt, Germany",
    photographer: "Lukas Weber",
    timestamp: "Captured at 08:45 AM",
    spanClass: "span-medium"
  },
  {
    id: 8,
    title: "Cinematic Chiaroscuro",
    category: "people",
    description: "Dramatic split studio lighting accentuating contour, focus, and quiet intensity.",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1920&q=85",
    thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    location: "Berlin, Germany",
    photographer: "Sophie Meyer",
    timestamp: "Captured at 05:10 PM",
    spanClass: "span-tall"
  },
  {
    id: 9,
    title: "Emerald Waterfall Cascades",
    category: "nature",
    description: "Lush mossy waterfalls plunging into crystalline turquoise pools deep in pristine forest.",
    src: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1920&q=85",
    thumb: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=400&q=80",
    location: "Plitvice Lakes, Croatia",
    photographer: "Marko Horvat",
    timestamp: "Captured at 01:18 PM",
    spanClass: "span-hero-large"
  },
  {
    id: 10,
    title: "Santorini Sunset Serenade",
    category: "travel",
    description: "White-washed cliffside architecture looking out across the deep azure Aegean Sea.",
    src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1920&q=85",
    thumb: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80",
    location: "Oia, Santorini, Greece",
    photographer: "Freja Larsson",
    timestamp: "Captured at 07:45 PM",
    spanClass: "span-wide"
  },
  {
    id: 11,
    title: "Golden Hour in Manhattan",
    category: "travel",
    description: "Sun rays cutting through skyscraper canyons and sunset haze along iconic avenue grid.",
    src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=85",
    thumb: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=400&q=80",
    location: "New York City, USA",
    photographer: "Marcus Brody",
    timestamp: "Captured at 06:30 PM",
    spanClass: "span-medium"
  },
  {
    id: 12,
    title: "Holographic Wave Distortion",
    category: "abstract",
    description: "Vibrant neon color fields swirling in seamless organic gradient waves.",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=85",
    thumb: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
    location: "Digital Realm",
    photographer: "Aria Thorne",
    timestamp: "Captured at 03:00 AM",
    spanClass: "span-portrait"
  }
];

class LuminaGalleryApp {
  constructor() {
    this.artworks = [...galleryDataset];
    this.currentCategory = 'all';
    this.searchQuery = '';
    this.currentFilterClass = 'filter-none';
    this.filteredArtworks = [...this.artworks];
    this.currentLbIndex = 0;
    this.isZoomed = false;
    this.slideshowTimer = null;
    this.favorites = this.loadFavorites();

    // DOM References
    this.editorialGrid = document.getElementById('editorialGrid');
    this.emptyState = document.getElementById('emptyState');
    this.filterTabs = document.querySelectorAll('.filter-tab');
    this.searchInput = document.getElementById('gallerySearchInput');
    this.clearSearchBtn = document.getElementById('clearSearch');
    this.imageFxSelect = document.getElementById('imageFxSelect');
    this.resetFiltersBtn = document.getElementById('resetFilters');
    this.mainNav = document.getElementById('mainNav');
    this.themeToggle = document.getElementById('themeToggle');
    this.hamburgerBtn = document.getElementById('hamburgerBtn');
    this.mobileDrawer = document.getElementById('mobileDrawer');
    this.heroExploreBtn = document.getElementById('heroExploreBtn');
    this.backToTopBtn = document.getElementById('backToTopBtn');
    this.scrollProgressBar = document.getElementById('scrollProgressBar');

    // Lightbox DOM
    this.lightboxModal = document.getElementById('lightboxModal');
    this.lightboxBackdrop = document.getElementById('lightboxBackdrop');
    this.lbActiveImage = document.getElementById('lbActiveImage');
    this.lbSkeleton = document.getElementById('lbSkeleton');
    this.lbCloseBtn = document.getElementById('lbCloseBtn');
    this.lbPrevBtn = document.getElementById('lbPrevBtn');
    this.lbNextBtn = document.getElementById('lbNextBtn');
    this.lbCurrentIndex = document.getElementById('lbCurrentIndex');
    this.lbTotalCount = document.getElementById('lbTotalCount');
    this.lbTitle = document.getElementById('lbTitle');
    this.lbDescription = document.getElementById('lbDescription');
    this.lbCategory = document.getElementById('lbCategory');
    this.lbLocation = document.getElementById('lbLocation');
    this.lbTimestamp = document.getElementById('lbTimestamp');
    this.lbPhotographer = document.getElementById('lbPhotographer');
    this.lbZoomBtn = document.getElementById('lbZoomBtn');
    this.lbFullscreenBtn = document.getElementById('lbFullscreenBtn');
    this.lbSlideshowBtn = document.getElementById('lbSlideshowBtn');
    this.lbFavoriteBtn = document.getElementById('lbFavoriteBtn');
    this.lbThumbsTrack = document.getElementById('lbThumbsTrack');

    this.init();
  }

  init() {
    this.renderGallery();
    this.setupScrollObserver();
    this.setupEventListeners();
    this.setupTheme();
  }

  loadFavorites() {
    try {
      const data = localStorage.getItem('lumina_favs');
      return data ? new Set(JSON.parse(data)) : new Set();
    } catch {
      return new Set();
    }
  }

  saveFavorites() {
    try {
      localStorage.setItem('lumina_favs', JSON.stringify([...this.favorites]));
    } catch (e) {
      console.warn('Storage warning:', e);
    }
  }

  // ==========================================================================
  // Gallery Rendering & Filtering
  // ==========================================================================
  renderGallery() {
    this.filteredArtworks = this.artworks.filter(item => {
      const matchesCategory = (this.currentCategory === 'all') || (item.category === this.currentCategory);
      const q = this.searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.photographer.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });

    if (this.filteredArtworks.length === 0) {
      this.editorialGrid.innerHTML = '';
      this.emptyState.style.display = 'block';
      return;
    }

    this.emptyState.style.display = 'none';

    this.editorialGrid.innerHTML = this.filteredArtworks.map((item, index) => {
      const isFav = this.favorites.has(item.id);
      return `
        <article class="editorial-card ${item.spanClass} reveal-elem" data-index="${index}" tabindex="0" role="button" aria-label="View ${item.title}">
          <div class="card-image-layer">
            <img 
              src="${item.src}" 
              alt="${item.title}" 
              class="editorial-img ${this.currentFilterClass}"
              loading="lazy"
            />
          </div>
          <div class="card-editorial-overlay">
            <div class="card-top-tags">
              <span class="card-category-tag">${item.category}</span>
              ${isFav ? '<span class="card-fav-indicator"><i class="fa-solid fa-heart"></i></span>' : ''}
            </div>
            <div class="card-bottom-details">
              <h3 class="card-title-text">${item.title}</h3>
              <div class="card-meta-line">
                <span><i class="fa-solid fa-location-dot"></i> ${item.location}</span>
                <span>•</span>
                <span>${item.photographer}</span>
              </div>
              <span class="card-view-cta">
                <span>View Story</span>
                <i class="fa-solid fa-arrow-right-long"></i>
              </span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach click and accessibility enter keys to card
    this.editorialGrid.querySelectorAll('.editorial-card').forEach(card => {
      const open = () => {
        const idx = parseInt(card.getAttribute('data-index'), 10);
        this.openLightbox(idx);
      };
      card.addEventListener('click', open);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open();
        }
      });
    });

    this.observeNewElements();
  }

  // ==========================================================================
  // Lightbox Viewer
  // ==========================================================================
  openLightbox(index) {
    if (index < 0 || index >= this.filteredArtworks.length) return;
    this.currentLbIndex = index;
    this.isZoomed = false;
    this.lbActiveImage.classList.remove('zoomed');

    this.lightboxModal.classList.add('active');
    this.lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    this.updateLightboxView();
    this.renderLightboxThumbnails();
    this.lightboxModal.focus();
  }

  closeLightbox() {
    this.lightboxModal.classList.remove('active');
    this.lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    this.isZoomed = false;
    this.lbActiveImage.classList.remove('zoomed');
    this.stopSlideshow();
  }

  updateLightboxView() {
    const item = this.filteredArtworks[this.currentLbIndex];
    if (!item) return;

    this.lbSkeleton.classList.add('loading');
    this.lbActiveImage.style.opacity = '0';

    const preloader = new Image();
    preloader.src = item.src;
    preloader.onload = () => {
      this.lbActiveImage.src = item.src;
      this.lbActiveImage.alt = item.title;
      this.lbActiveImage.className = `lb-active-img ${this.currentFilterClass}` + (this.isZoomed ? ' zoomed' : '');
      this.lbSkeleton.classList.remove('loading');
      this.lbActiveImage.style.opacity = '1';
    };
    preloader.onerror = () => {
      this.lbSkeleton.classList.remove('loading');
      this.lbActiveImage.style.opacity = '1';
    };

    // Metadata
    const formattedIdx = String(this.currentLbIndex + 1).padStart(2, '0');
    const formattedTotal = String(this.filteredArtworks.length).padStart(2, '0');
    this.lbCurrentIndex.textContent = formattedIdx;
    this.lbTotalCount.textContent = formattedTotal;

    this.lbTitle.textContent = item.title;
    this.lbDescription.textContent = item.description;
    this.lbCategory.textContent = `${item.category.toUpperCase()} • PHOTOGRAPHY`;
    this.lbLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${item.location}`;
    this.lbTimestamp.innerHTML = `<i class="fa-regular fa-clock"></i> ${item.timestamp || 'Edition Exclusive'}`;
    this.lbPhotographer.textContent = item.photographer;

    // Favorite status
    const isFav = this.favorites.has(item.id);
    if (isFav) {
      this.lbFavoriteBtn.innerHTML = '<i class="fa-solid fa-heart" style="color: #f43f5e;"></i>';
      this.lbFavoriteBtn.classList.add('active-fav');
    } else {
      this.lbFavoriteBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
      this.lbFavoriteBtn.classList.remove('active-fav');
    }

    this.highlightActiveThumbnail();
  }

  nextArtwork() {
    if (this.filteredArtworks.length <= 1) return;
    this.currentLbIndex = (this.currentLbIndex + 1) % this.filteredArtworks.length;
    this.resetZoom();
    this.updateLightboxView();
  }

  prevArtwork() {
    if (this.filteredArtworks.length <= 1) return;
    this.currentLbIndex = (this.currentLbIndex - 1 + this.filteredArtworks.length) % this.filteredArtworks.length;
    this.resetZoom();
    this.updateLightboxView();
  }

  toggleZoom() {
    this.isZoomed = !this.isZoomed;
    if (this.isZoomed) {
      this.lbActiveImage.classList.add('zoomed');
      this.lbZoomBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass-minus"></i>';
    } else {
      this.lbActiveImage.classList.remove('zoomed');
      this.lbZoomBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass-plus"></i>';
    }
  }

  resetZoom() {
    this.isZoomed = false;
    this.lbActiveImage.classList.remove('zoomed');
    this.lbZoomBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass-plus"></i>';
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      this.lightboxModal.requestFullscreen().catch(() => {});
      this.lbFullscreenBtn.innerHTML = '<i class="fa-solid fa-compress"></i>';
    } else {
      document.exitFullscreen();
      this.lbFullscreenBtn.innerHTML = '<i class="fa-solid fa-expand"></i>';
    }
  }

  toggleSlideshow() {
    if (this.slideshowTimer) {
      this.stopSlideshow();
    } else {
      this.startSlideshow();
    }
  }

  startSlideshow() {
    this.lbSlideshowBtn.classList.add('slideshow-active');
    this.lbSlideshowBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    this.slideshowTimer = setInterval(() => {
      this.nextArtwork();
    }, 4000);
  }

  stopSlideshow() {
    if (this.slideshowTimer) {
      clearInterval(this.slideshowTimer);
      this.slideshowTimer = null;
      this.lbSlideshowBtn.classList.remove('slideshow-active');
      this.lbSlideshowBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
  }

  toggleFavoriteCurrent() {
    const item = this.filteredArtworks[this.currentLbIndex];
    if (!item) return;

    if (this.favorites.has(item.id)) {
      this.favorites.delete(item.id);
    } else {
      this.favorites.add(item.id);
    }

    this.saveFavorites();
    this.updateLightboxView();
    this.renderGallery();
  }

  renderLightboxThumbnails() {
    this.lbThumbsTrack.innerHTML = this.filteredArtworks.map((item, idx) => `
      <div class="lb-thumb-item ${idx === this.currentLbIndex ? 'active' : ''}" data-index="${idx}">
        <img src="${item.thumb}" alt="${item.title}" class="${this.currentFilterClass}">
      </div>
    `).join('');

    this.lbThumbsTrack.querySelectorAll('.lb-thumb-item').forEach(thumb => {
      thumb.addEventListener('click', () => {
        this.currentLbIndex = parseInt(thumb.getAttribute('data-index'), 10);
        this.resetZoom();
        this.updateLightboxView();
      });
    });
  }

  highlightActiveThumbnail() {
    this.lbThumbsTrack.querySelectorAll('.lb-thumb-item').forEach((thumb, idx) => {
      if (idx === this.currentLbIndex) {
        thumb.classList.add('active');
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        thumb.classList.remove('active');
      }
    });
  }

  // ==========================================================================
  // Custom Smooth Cursor Tracking
  // ==========================================================================
  setupCustomCursor() {
    if (!this.cursorDot || !this.cursorCircle) return;

    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      this.cursorDot.style.left = `${mouseX}px`;
      this.cursorDot.style.top = `${mouseY}px`;
    });

    const loop = () => {
      circleX += (mouseX - circleX) * 0.15;
      circleY += (mouseY - circleY) * 0.15;
      this.cursorCircle.style.left = `${circleX}px`;
      this.cursorCircle.style.top = `${circleY}px`;
      requestAnimationFrame(loop);
    };
    loop();

    // Hover effect on links and cards
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, .editorial-card, .collection-card, select, input')) {
        document.body.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button, .editorial-card, .collection-card, select, input')) {
        document.body.classList.remove('cursor-hover');
      }
    });
  }

  // ==========================================================================
  // Scroll Reveal, Smooth Progress & Active Section Spy
  // ==========================================================================
  setupScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal-elem').forEach(el => observer.observe(el));
    this.revealObserver = observer;

    // Active Section Spy & Scroll Monitoring
    const sections = ['hero', 'gallery', 'collections', 'about'].map(id => document.getElementById(id)).filter(Boolean);
    const navLinks = document.querySelectorAll('.nav-link');

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          // 1. Sticky Nav Transition
          if (scrollY > 60) {
            this.mainNav.classList.add('scrolled');
          } else {
            this.mainNav.classList.remove('scrolled');
          }

          // 2. Reading / Scroll Progress Bar
          if (this.scrollProgressBar) {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
            this.scrollProgressBar.style.width = `${progress}%`;
          }

          // 3. Back to Top Floating Button visibility
          if (this.backToTopBtn) {
            if (scrollY > 400) {
              this.backToTopBtn.classList.add('visible');
            } else {
              this.backToTopBtn.classList.remove('visible');
            }
          }

          // 4. Smooth Active Section Indicator in Navigation
          const scrollPos = scrollY + 180;
          sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollPos >= top && scrollPos < top + height) {
              navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
              });
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Smooth Back To Top Click
    if (this.backToTopBtn) {
      this.backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // Smooth Anchor Navigation click enhancement
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElem = document.querySelector(targetId);
          if (targetElem) {
            e.preventDefault();
            targetElem.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }

  observeNewElements() {
    if (this.revealObserver) {
      document.querySelectorAll('.editorial-card.reveal-elem').forEach(el => {
        this.revealObserver.observe(el);
      });
    }
  }

  // ==========================================================================
  // Theme Toggle (Dark / Light)
  // ==========================================================================
  setupTheme() {
    const savedTheme = localStorage.getItem('lumina_theme') || 'dark';
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.classList.add('light-theme');
      this.themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    this.themeToggle.addEventListener('click', () => {
      const isLight = document.documentElement.classList.contains('light-theme');
      if (isLight) {
        document.documentElement.classList.remove('light-theme');
        document.documentElement.classList.add('dark-theme');
        this.themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('lumina_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark-theme');
        document.documentElement.classList.add('light-theme');
        this.themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('lumina_theme', 'light');
      }
    });
  }

  // ==========================================================================
  // Event Listeners
  // ==========================================================================
  setupEventListeners() {
    // Category Tabs Filtering
    this.filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.filterTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        this.currentCategory = tab.getAttribute('data-category');
        this.renderGallery();
      });
    });

    // Featured Collections click triggers category filter & scroll
    document.querySelectorAll('.collection-card').forEach(card => {
      card.addEventListener('click', () => {
        const cat = card.getAttribute('data-filter');
        const targetTab = Array.from(this.filterTabs).find(t => t.getAttribute('data-category') === cat);
        if (targetTab) {
          targetTab.click();
          document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Search Input
    this.searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      this.clearSearchBtn.style.display = this.searchQuery.length > 0 ? 'block' : 'none';
      this.renderGallery();
    });

    this.clearSearchBtn.addEventListener('click', () => {
      this.searchInput.value = '';
      this.searchQuery = '';
      this.clearSearchBtn.style.display = 'none';
      this.searchInput.focus();
      this.renderGallery();
    });

    // Live CSS Filter Effects
    this.imageFxSelect.addEventListener('change', (e) => {
      this.currentFilterClass = `filter-${e.target.value}`;
      
      document.querySelectorAll('.editorial-img').forEach(img => {
        img.className = `editorial-img ${this.currentFilterClass}`;
      });

      if (this.lightboxModal.classList.contains('active')) {
        this.lbActiveImage.className = `lb-active-img ${this.currentFilterClass}` + (this.isZoomed ? ' zoomed' : '');
        this.lbThumbsTrack.querySelectorAll('img').forEach(img => {
          img.className = this.currentFilterClass;
        });
      }
    });

    // Reset Filters Button
    this.resetFiltersBtn.addEventListener('click', () => {
      this.currentCategory = 'all';
      this.searchQuery = '';
      this.searchInput.value = '';
      this.clearSearchBtn.style.display = 'none';
      this.imageFxSelect.value = 'none';
      this.currentFilterClass = 'filter-none';

      this.filterTabs.forEach(tab => {
        const isAll = tab.getAttribute('data-category') === 'all';
        tab.classList.toggle('active', isAll);
        tab.setAttribute('aria-selected', isAll ? 'true' : 'false');
      });

      this.renderGallery();
    });

    // Lightbox Control Buttons
    this.lbNextBtn.addEventListener('click', (e) => { e.stopPropagation(); this.nextArtwork(); });
    this.lbPrevBtn.addEventListener('click', (e) => { e.stopPropagation(); this.prevArtwork(); });
    this.lbCloseBtn.addEventListener('click', () => this.closeLightbox());
    this.lightboxBackdrop.addEventListener('click', () => this.closeLightbox());
    this.lbZoomBtn.addEventListener('click', () => this.toggleZoom());
    this.lbActiveImage.addEventListener('click', () => this.toggleZoom());
    this.lbFullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
    this.lbSlideshowBtn.addEventListener('click', () => this.toggleSlideshow());
    this.lbFavoriteBtn.addEventListener('click', () => this.toggleFavoriteCurrent());

    // Mobile Hamburger Toggle
    this.hamburgerBtn.addEventListener('click', () => {
      const isOpen = this.mobileDrawer.classList.contains('open');
      this.mobileDrawer.classList.toggle('open', !isOpen);
      this.hamburgerBtn.setAttribute('aria-expanded', !isOpen);
    });

    document.querySelectorAll('.drawer-link').forEach(link => {
      link.addEventListener('click', () => {
        this.mobileDrawer.classList.remove('open');
        this.hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (!this.lightboxModal.classList.contains('active')) return;

      if (e.key === 'Escape') this.closeLightbox();
      else if (e.key === 'ArrowRight') this.nextArtwork();
      else if (e.key === 'ArrowLeft') this.prevArtwork();
      else if (e.key === 'f' || e.key === 'F') this.toggleFullscreen();
      else if (e.key === 'z' || e.key === 'Z') this.toggleZoom();
      else if (e.key === ' ') { e.preventDefault(); this.toggleSlideshow(); }
      else if (e.key === 'l' || e.key === 'L') this.toggleFavoriteCurrent();
    });

    // Touch Swipe Gestures for Mobile
    let touchStartX = 0;
    this.lightboxModal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.lightboxModal.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) this.nextArtwork(); // Swipe Left
      if (touchEndX > touchStartX + 50) this.prevArtwork(); // Swipe Right
    }, { passive: true });
  }
}

// Instantiate application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new LuminaGalleryApp();
});
