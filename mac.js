document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.mac-video');
    const muteToggleButton = document.querySelector('.mac-mute-toggle');
    let currentVideoIndex = 0;
    let isMuted = true; // Başlangıçta tüm videolar sessiz
    const youtubeLink = "https://www.youtube.com/@matsevyaynclk9273";
  
    // Tüm videoları başlangıçta gizle, sessiz moda al
    videos.forEach(video => {
      video.muted = isMuted;
      video.playsInline = true;  // Mobilde autoplay için
      video.style.display = "none";
  
      // Videoya tıklanınca YouTube kanalına yönlendir
      video.addEventListener('click', () => {
        window.location.href = youtubeLink;
      });
  
      // Video bittiğinde otomatik olarak sonraki videoya geç
      video.addEventListener('ended', () => {
        scrollRight();
      });
    });
  
    // İlk videoyu başlat
    if (videos.length > 0) {
      playVideo(0);
    }
  
    // Videoyu oynatma (index'e göre)
    function playVideo(index) {
      // Önce tüm videoları durdurup gizleyelim
      videos.forEach(vid => {
        vid.pause();
        vid.style.display = "none";
        vid.classList.remove('active');
      });
      
      // Yeni videoyu görünür yap, oynat
      const nextVid = videos[index];
      nextVid.muted = isMuted;
      nextVid.style.display = "block";
      nextVid.classList.add('active');
      nextVid.play();
  
      currentVideoIndex = index;
      updateMuteButtonText();
    }
  
    // Ses butonu metnini güncelle
    function updateMuteButtonText() {
      muteToggleButton.textContent = isMuted ? "Ses Aç" : "Ses Kapat";
    }
  
    // Sol buton (önceki video)
    window.goLeft = function() {
      const prevIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
      playVideo(prevIndex);
    };
  
    // Sağ buton (sonraki video)
    window.scrollRight = function() {
      const nextIndex = (currentVideoIndex + 1) % videos.length;
      playVideo(nextIndex);
    };
  
    // Ses Aç/Kapat butonu
    muteToggleButton.addEventListener('click', function(e) {
      e.stopPropagation();
      isMuted = !isMuted;
  
      // Mevcut videonun sesini anında değiştir
      const currentVideo = videos[currentVideoIndex];
      currentVideo.muted = isMuted;
  
      // Eğer sesi açtıysak tarayıcılarda sorunsuz çalması için volume=1 ve .play() ekleyebiliriz
      if (!isMuted) {
        currentVideo.volume = 1;
        currentVideo.play();
      }
  
      updateMuteButtonText();
    });
  });
  