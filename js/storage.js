/**
 * Local Storage & State Management Helper
 */

const STORAGE_KEYS = {
  FAVORITES: 'lumina_favorites',
  CUSTOM_ARTWORKS: 'lumina_custom_artworks',
  VIEW_MODE: 'lumina_view_mode'
};

export class StorageManager {
  static getFavorites() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return data ? new Set(JSON.parse(data)) : new Set();
    } catch {
      return new Set();
    }
  }

  static saveFavorites(favoritesSet) {
    try {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify([...favoritesSet]));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  static getCustomArtworks() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_ARTWORKS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  static saveCustomArtwork(artworkItem) {
    try {
      const existing = this.getCustomArtworks();
      existing.unshift(artworkItem);
      localStorage.setItem(STORAGE_KEYS.CUSTOM_ARTWORKS, JSON.stringify(existing));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  static getViewMode() {
    return localStorage.getItem(STORAGE_KEYS.VIEW_MODE) || 'standard';
  }

  static saveViewMode(mode) {
    localStorage.setItem(STORAGE_KEYS.VIEW_MODE, mode);
  }
}
