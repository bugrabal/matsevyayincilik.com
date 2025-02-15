// Kitap Listesi (Başlık, Resim, Link)
const books = [
    {
      title: "5. Sınıf Matematik Öğreniyorum Serisi",
      img: "images/5ogreniyorum.png",
      link: "5ogreniyorum.html" 
    },
    {
      title: "6. Sınıf Matematik Öğreniyorum Serisi",
      img: "images/6ogreniyorum.png",
      link: "6ogreniyorum.html"
    },
    {
      title: "7. Sınıf Matematik Öğreniyorum Serisi",
      img: "images/7ogreniyorum.png",
      link: "7ogreniyorum.html"
    },
    {
      title: "8. Sınıf Matematik Öğreniyorum Serisi",
      img: "images/8ogreniyorum.png",
      link: "8ogreniyorum.html"
    },
    {
      title: "6. Sınıf Matematik Soru Bankası",
      img: "images/6sb.png",
      link: "6matematiksorubankasi.html"
    },
    {
      title: "7. Sınıf Matematik Soru Bankası",
      img: "images/7sb.png",
      link: "7matematiksorubankasi.html"
    },
    {
      title: "8. Sınıf Matematik Soru Bankası",
      img: "images/8sb.png",
      link: "8matematiksorubankasi.html"
    },
    {
      title: "24'lü Matematik Denemesi",
      img: "images/24deneme.png",
      link: "24deneme.html"
    }
  ];

// Tüm fotoğrafları (".photo") ve noktaları (".dot") seçiyoruz
const photos = document.querySelectorAll(".photo");
const dots = document.querySelectorAll(".dot");

// Mevcut aktif fotoğrafın index'i
let currentIndex = 0;

function currentSlide(index) {
  // index'i 1 tabandan 0 tabana çevir
  currentIndex = index - 1;

  // Tüm fotoğrafları pasif yap, yalnızca seçileni aktif yap
  photos.forEach(photo => photo.classList.remove("active"));
  if (photos[currentIndex]) {
    photos[currentIndex].classList.add("active");
  }

  // Noktaları güncelle
  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[currentIndex]) {
    dots[currentIndex].classList.add("active");
  }

  // Kullanıcı etkileşimi sayılacağı için auto-slide sıfırla
  resetAutoSlide();
}

function nextSlide() {
  let newIndex = currentIndex + 1;
  if (newIndex >= photos.length) {
    newIndex = 0;
  }
  currentSlide(newIndex + 1);
}

// 10 sn sonra otomatik diğer görsel gelsin
let autoSlideTimer;

function startAutoSlide() {
  autoSlideTimer = setInterval(() => {
    nextSlide();
  }, 10000); // 10 saniye
}

function resetAutoSlide() {
  clearInterval(autoSlideTimer);
  startAutoSlide();
}

// Slider başlangıcı
startAutoSlide();
currentSlide(1);

// ***** ARAMA FONKSİYONU ***** //
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// Her input değiştiğinde listeyi filtreliyoruz
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();
  
  // Eğer input boşsa sonuçları gizle
  if (!query) {
    searchResults.style.display = "none";
    return;
  }

  // Uygun sonuçları filtrele
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query)
  );

  // Listeyi sıfırla
  searchResults.innerHTML = "";

  // Bulunan kitap sayısı > 0 ise listeyi göster
  if (filteredBooks.length > 0) {
    searchResults.style.display = "block";
    filteredBooks.forEach(book => {
      const item = document.createElement("div");
      item.className = "search-result-item";
      item.innerHTML = `\n        <img src="${book.img}" alt="Kapak">\n        <span class="search-result-title">${book.title}</span>\n      `;
      // Sonuca tıklayınca ilgili linke git
      item.addEventListener("click", () => {
        window.location.href = book.link;
      });
      searchResults.appendChild(item);
    });
  } else {
    // Eşleşme yoksa da listeyi gösterelim, 'Sonuç yok' gibi bir mesaj yazılabilir
    searchResults.style.display = "block";
    const noResult = document.createElement("div");
    noResult.className = "search-result-item";
    noResult.textContent = "Sonuç bulunamadı.";
    searchResults.appendChild(noResult);
  }
});

// Tıklama dışı bir yere basınca sonuç listesini kapatmak için (Opsiyonel)
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-bar")) {
    searchResults.style.display = "none";
  }
});

// Kullanıcı tıklarsa veya klavye kullanırsa da autoSlide sıfırlıyoruz
document.addEventListener("click", resetAutoSlide);
document.addEventListener("keydown", resetAutoSlide);


