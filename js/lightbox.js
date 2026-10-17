/**
 * Lightbox Manager Submodule
 */

export class Lightbox {
  constructor(options = {}) {
    this.modal = document.getElementById('lightboxModal');
    this.overlay = document.getElementById('lightboxOverlay');
    this.image = document.getElementById('lightboxImage');
    this.spinner = document.getElementById('lightboxSpinner');
    this.closeBtn = document.getElementById('lightboxCloseBtn');
    this.prevBtn = document.getElementById('prevBtn');
    this.nextBtn = document.getElementById('nextBtn');
    this.counter = document.getElementById('lightboxCounter');
    this.title = document.getElementById('lightboxTitle');
    this.desc = document.getElementById('lightboxDescription');
    this.category = document.getElementById('lightboxCategory');
    this.location = document.getElementById('lightboxLocation');
    this.photographer = document.getElementById('lightboxPhotographer');
    this.zoomBtn = document.getElementById('lightboxZoomBtn');
    this.fullscreenBtn = document.getElementById('lightboxFullscreenBtn');
    this.slideshowBtn = document.getElementById('lightboxSlideshowBtn');
    this.likeBtn = document.getElementById('lightboxLikeBtn');
    this.downloadBtn = document.getElementById('lightboxDownloadBtn');
    this.likesVal = document.getElementById('likesVal');
    this.thumbnailsStrip = document.getElementById('thumbnailsStrip');

    this.items = [];
    this.currentIndex = 0;
    this.isZoomed = false;
    this.slideshowInterval = null;
    this.filterClass = 'filter-none';
    this.onFavoriteToggle = options.onFavoriteToggle || (() => {});
    this.isFavoriteFn = options.isFavoriteFn || (() => false);

    this.initEvents();
  }

  setItems(items, filterClass = 'filter-none') {
    this.items = items;
    this.filterClass = filterClass;
  }

  open(index) {
    if (index < 0 || index >= this.items.length) return;
    this.currentIndex = index;
    this.isZoomed = false;
    this.image.classList.remove('zoomed');

    this.modal.classList.add('active');
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    this.updateView();
    this.renderThumbnails();
    this.modal.focus();
  }

  close() {
    this.modal.classList.remove('active');
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    this.isZoomed = false;
    this.image.classList.remove('zoomed');
    this.stopSlideshow();
  }

  updateView() {
    const item = this.items[this.currentIndex];
    if (!item) return;

    this.spinner.classList.add('loading');
    this.image.style.opacity = '0';

    const preload = new Image();
    preload.src = item.src;
    preload.onload = () => {
      this.image.src = item.src;
      this.image.alt = item.title;
      this.image.className = `lightbox-img ${this.filterClass}` + (this.isZoomed ? ' zoomed' : '');
      this.spinner.classList.remove('loading');
      this.image.style.opacity = '1';
    };
    preload.onerror = () => {
      this.spinner.classList.remove('loading');
      this.image.style.opacity = '1';
    };

    this.counter.textContent = `${this.currentIndex + 1} / ${this.items.length}`;
    this.title.textContent = item.title;
    this.desc.textContent = item.description;
    this.category.innerHTML = `<i class="fa-solid fa-tag"></i> ${item.category}`;
    this.location.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${item.location}`;
    this.photographer.innerHTML = `<i class="fa-solid fa-camera"></i> By ${item.photographer}`;

    const isFav = this.isFavoriteFn(item.id);
    this.likesVal.textContent = isFav ? '1' : '0';
    if (isFav) {
      this.likeBtn.innerHTML = '<i class="fa-solid fa-heart" style="color: #ec4899;"></i>';
      this.likeBtn.classList.add('active-like');
    } else {
      this.likeBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
      this.likeBtn.classList.remove('active-like');
    }

    this.highlightActiveThumbnail();
  }

  next() {
    if (this.items.length <= 1) return;
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.resetZoom();
    this.updateView();
  }

  prev() {
    if (this.items.length <= 1) return;
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.resetZoom();
    this.updateView();
  }

  toggleZoom() {
    this.isZoomed = !this.isZoomed;
    if (this.isZoomed) {
      this.image.classList.add('zoomed');
      this.zoomBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass-minus"></i>';
    } else {
      this.image.classList.remove('zoomed');
      this.zoomBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass-plus"></i>';
    }
  }

  resetZoom() {
    this.isZoomed = false;
    this.image.classList.remove('zoomed');
    this.zoomBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass-plus"></i>';
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      this.modal.requestFullscreen().catch(() => {});
      this.fullscreenBtn.innerHTML = '<i class="fa-solid fa-compress"></i>';
    } else {
      document.exitFullscreen();
      this.fullscreenBtn.innerHTML = '<i class="fa-solid fa-expand"></i>';
    }
  }

  toggleSlideshow() {
    if (this.slideshowInterval) {
      this.stopSlideshow();
    } else {
      this.startSlideshow();
    }
  }

  startSlideshow() {
    this.slideshowBtn.classList.add('slideshow-playing');
    this.slideshowBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    this.slideshowInterval = setInterval(() => this.next(), 3500);
  }

  stopSlideshow() {
    if (this.slideshowInterval) {
      clearInterval(this.slideshowInterval);
      this.slideshowInterval = null;
      this.slideshowBtn.classList.remove('slideshow-playing');
      this.slideshowBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
  }

  async downloadCurrent() {
    const item = this.items[this.currentIndex];
    if (!item) return;
    try {
      const response = await fetch(item.src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${item.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch {
      window.open(item.src, '_blank');
    }
  }

  renderThumbnails() {
    this.thumbnailsStrip.innerHTML = this.items.map((item, idx) => `
      <div class="thumb-item ${idx === this.currentIndex ? 'active' : ''}" data-index="${idx}">
        <img src="${item.thumb}" alt="${item.title}" class="${this.filterClass}">
      </div>
    `).join('');

    this.thumbnailsStrip.querySelectorAll('.thumb-item').forEach(el => {
      el.addEventListener('click', () => {
        this.currentIndex = parseInt(el.getAttribute('data-index'), 10);
        this.resetZoom();
        this.updateView();
      });
    });
  }

  highlightActiveThumbnail() {
    this.thumbnailsStrip.querySelectorAll('.thumb-item').forEach((thumb, idx) => {
      if (idx === this.currentIndex) {
        thumb.classList.add('active');
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        thumb.classList.remove('active');
      }
    });
  }

  initEvents() {
    this.nextBtn.addEventListener('click', (e) => { e.stopPropagation(); this.next(); });
    this.prevBtn.addEventListener('click', (e) => { e.stopPropagation(); this.prev(); });
    this.closeBtn.addEventListener('click', () => this.close());
    this.overlay.addEventListener('click', () => this.close());
    this.zoomBtn.addEventListener('click', () => this.toggleZoom());
    this.image.addEventListener('click', () => this.toggleZoom());
    this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
    this.slideshowBtn.addEventListener('click', () => this.toggleSlideshow());
    this.downloadBtn.addEventListener('click', () => this.downloadCurrent());

    this.likeBtn.addEventListener('click', () => {
      const item = this.items[this.currentIndex];
      if (item) {
        this.onFavoriteToggle(item);
        this.updateView();
      }
    });

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
      if (!this.modal.classList.contains('active')) return;
      if (e.key === 'Escape') this.close();
      else if (e.key === 'ArrowRight') this.next();
      else if (e.key === 'ArrowLeft') this.prev();
      else if (e.key === 'f' || e.key === 'F') this.toggleFullscreen();
      else if (e.key === 'z' || e.key === 'Z') this.toggleZoom();
      else if (e.key === ' ') { e.preventDefault(); this.toggleSlideshow(); }
      else if (e.key === 'l' || e.key === 'L') {
        const item = this.items[this.currentIndex];
        if (item) {
          this.onFavoriteToggle(item);
          this.updateView();
        }
      }
    });

    // Mobile touch swipe
    let startX = 0;
    this.modal.addEventListener('touchstart', (e) => {
      startX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.modal.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].screenX;
      if (endX < startX - 50) this.next();
      if (endX > startX + 50) this.prev();
    }, { passive: true });
  }
}
