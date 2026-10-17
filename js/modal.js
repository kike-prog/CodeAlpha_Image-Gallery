/**
 * Modal Manager Submodule
 */

export class ModalManager {
  constructor(options = {}) {
    this.modal = document.getElementById('uploadModal');
    this.overlay = document.getElementById('uploadModalOverlay');
    this.openBtn = document.getElementById('openUploadModalBtn');
    this.closeBtn = document.getElementById('closeUploadModalBtn');
    this.cancelBtn = document.getElementById('cancelUploadBtn');
    this.form = document.getElementById('addImageForm');
    this.fileInput = document.getElementById('newImgFile');
    this.urlInput = document.getElementById('newImgUrl');
    this.onAddArtwork = options.onAddArtwork || (() => {});

    this.init();
  }

  init() {
    this.openBtn.addEventListener('click', () => this.open());
    this.closeBtn.addEventListener('click', () => this.close());
    this.cancelBtn.addEventListener('click', () => this.close());
    this.overlay.addEventListener('click', () => this.close());

    this.fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.urlInput.value = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    });

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('newImgTitle').value.trim();
      const category = document.getElementById('newImgCategory').value;
      const url = this.urlInput.value.trim();
      const photographer = document.getElementById('newImgPhotographer').value.trim() || 'Anonymous';
      const location = document.getElementById('newImgLocation').value.trim() || 'Global';
      const description = document.getElementById('newImgDesc').value.trim() || 'Custom community upload';

      if (!url || !title) return;

      const newArtwork = {
        id: Date.now(),
        title,
        category,
        description,
        src: url,
        thumb: url,
        location,
        photographer,
        views: '1'
      };

      this.onAddArtwork(newArtwork);
      this.close();
    });
  }

  open() {
    this.modal.classList.add('active');
    this.modal.setAttribute('aria-hidden', 'false');
  }

  close() {
    this.modal.classList.remove('active');
    this.modal.setAttribute('aria-hidden', 'true');
    this.form.reset();
  }
}
