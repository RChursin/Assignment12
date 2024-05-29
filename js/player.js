class Jukebox {
    constructor(albums) {
      this.albums = albums;
    }
  
    addAlbum = function(album) {
      this.albums.push(album);
    }
  
    favoriteAlbum = function() {
      let max = -1, fav;
      for (let i = 0; i < this.albums.length; i++) {
        if (this.albums[i].played > max) {
          max = this.albums[i].played;
          fav = this.albums[i];
        }
      }
      return fav.display();
    }
  }
  
  class Album {
    constructor(artist, title) {
      this.artist = artist;
      this.title = title;
      this.played = 0;
    }
  
    play = function() {
      this.played += 1;
    }
  
    display = function() {
      return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
    }
  }
  
  // Store artists/albums within an array
  const albums = [
    new Album('Operation Ivy', 'Energy'),
    new Album('Blink 182', 'Dude Ranch'),
    new Album('New Found Glory', 'Sticks and Stones')
  ];
  
  // Create a new Jukebox instance with the albums array
  const jbox = new Jukebox(albums);
  
  // Function to populate the dropdown menu with albums
  function populateAlbumDropdown() {
    const dropdown = document.getElementById('albumDropdown');
    albums.forEach((album, index) => {
      const option = document.createElement('option');
      option.text = `${album.artist} - ${album.title}`;
      option.value = index;
      dropdown.add(option);
    });
  }
  
  // Function to play the selected album
  function playSelectedAlbum() {
    const dropdown = document.getElementById('albumDropdown');
    const selectedIndex = dropdown.value;
    const selectedAlbum = albums[selectedIndex];
    selectedAlbum.play();
  }
  
  // Function to display the favorite album
  function displayFavoriteAlbum() {
    const favoriteAlbumElement = document.getElementById('favoriteAlbum');
    favoriteAlbumElement.textContent = jbox.favoriteAlbum();
  }
  
  // Call the populateAlbumDropdown function when the page loads
  window.onload = populateAlbumDropdown;