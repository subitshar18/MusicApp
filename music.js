// // Select elements
// const audioPlayer = document.getElementById('audio-player');
// const playButton = document.getElementById('play');
// const prevButton = document.getElementById('pre');
// const nextButton = document.getElementById('next');
// const songTitle = document.getElementById('song-title');
// const songList = document.getElementById('song-list');
// const songCover=document.getElementById('song_cover');
// const songListButton=document.getElementById();

// // Playlist array
// const songs = [
//   { title: 'Amaran Song', src:'data/Amaran.mp3',cover:'data/amaran_cover.jpg' },
//   { title: 'Nerukku ner Bgm', src:'data/Nerukku.mp3', cover:'data/nerukku_ner.jpg' },
//   { title: 'Murugan-song', src: 'data/Murugan.mp3', cover:'data/murugan.jpg' },
//   {title:'Master Bgm', src:'data/masterBgm.mp3', cover:'data/masterCover.jpg'},
//   {title:'Leo Song', src:'data/Leo.mp3', cover:'data/leoCover.jpg'}
// ];

// let currentSongIndex = 0;
// let index=0;

// // Load playlist into the UI
// function loadPlaylist() {
//   playlistContainer.innerHTML = "";
//   songs.forEach((song) => {
//     const li = document.createElement('li');
//     li.textContent = song.title;
//     // li.addEventListener('click', () => playSong(index));
//     //songList.appendChild(li);
//   });
// }

// // Play the current song
// function playSong(index) {
//   currentSongIndex = index;
//   songCover.src=songs[index].cover;
//   audioPlayer.src = songs[index].src;
//   songTitle.textContent = songs[index].title;
//   audioPlayer.play();
// }

// // Toggle play/pause
// function togglePlay() {
//   if (audioPlayer.paused) {
//     audioPlayer.play();
//     // playButton.textContent = 'Pause';
//   } else {
//     audioPlayer.pause();
//     // playButton.textContent = 'Play';
//   }
// }

// // Play next song
// function playNext() {
//   currentSongIndex = (currentSongIndex + 1) % songs.length;
//   playSong(currentSongIndex);
// }

// // Play previous song
// function playPrev() {
//   currentSongIndex =
//     (currentSongIndex - 1 + songs.length) % songs.length;
//   playSong(currentSongIndex);
// }

// // Event listeners
// playButton.addEventListener('click', togglePlay);
// nextButton.addEventListener('click', playNext);
// prevButton.addEventListener('click', playPrev);

// // Load playlist on page load
//  loadPlaylist();
// Select elements
const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('pre');
const nextButton = document.getElementById('next');
const songTitle = document.getElementById('song-title');
const songList = document.getElementById('song-list');  // Make sure this element exists in your HTML
const songCover = document.getElementById('song_cover');
const songListButton=document.getElementById('show-playlist')

// Playlist array
const songs = [
  { title: 'Amaran Song', src:'data/Amaran.mp3', cover:'data/amaran_cover.jpg' },
  { title: 'Nerukku Ner Bgm', src:'data/Nerukku.mp3', cover:'data/nerukku_ner.jpg' },
  { title: 'Murugan Song', src: 'data/Murugan.mp3', cover:'data/murugan.jpg' },
  { title: 'Master Bgm', src:'data/masterBgm.mp3', cover:'data/masterCover.jpg' },
  { title: 'Leo Song', src:'data/Leo.mp3', cover:'data/leoCover.jpg' }
];

let currentSongIndex = 0;

// Load playlist into the UI
function loadPlaylist() {
  songList.innerHTML = ""; // Clear the existing list first
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = song.title;
    songList.appendChild(li);
    li.addEventListener('click', () => playSong(index));
    
  });
}

// Play the current song
function playSong(index) {
  currentSongIndex = index;
  songCover.src = songs[index].cover;
  audioPlayer.src = songs[index].src;
  songTitle.textContent = songs[index].title;
  togglePlay();
  songList.innerHTML="";
}

// Toggle play/pause
function togglePlay() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.classList.remove('fa-play-circle');
    playButton.classList.add('fa-pause-circle');
    
  } else {
    audioPlayer.pause();
    playButton.classList.remove('fa-pause-circle');
    playButton.classList.add('fa-play-circle');
  }
}

// Play next song
function playNext() {
  currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop back to the first song
  playSong(currentSongIndex);
}

// Play previous song
function playPrev() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Loop to the last song
  playSong(currentSongIndex);
}

// Event listeners for buttons
playButton.addEventListener('click', togglePlay);
nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrev);
songListButton.addEventListener('click',loadPlaylist);

window.onload=playSong(currentSongIndex);
// Load the playlist on page load
// window.onload = loadPlaylist;

