document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".kitap-gorsel");
    const image = imageContainer.querySelector("img");

    imageContainer.addEventListener("mousemove", function (e) {
        const { left, top, width, height } = imageContainer.getBoundingClientRect();
        const x = (e.clientX - left) / width * 100;
        const y = (e.clientY - top) / height * 100;

        image.style.transformOrigin = `${x}% ${y}%`;
    });

    imageContainer.addEventListener("mouseenter", function () {
        image.style.transform = "scale(1.5)";
    });

    imageContainer.addEventListener("mouseleave", function () {
        image.style.transform = "scale(1)";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Modal elemanlarını seçelim
    const modal = document.getElementById("flipbookModal");
    const modalContent = document.querySelector(".modal-content");
    const modalClose = document.querySelector(".modal-close");
  
    // "Kitabı İncele" butonunu seçelim
    const inceleButton = document.querySelector(".btn-incele");
  
    // Butona tıklanınca modalı göster
    inceleButton.addEventListener("click", function(e) {
      e.preventDefault();
      modal.style.display = "flex";
    });
  
    // Kapatma butonuna tıklanınca modalı gizle
    modalClose.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    // Modal dışına tıklanınca da kapat
    window.addEventListener("click", function(e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");
  
    // Sekme tıklama işlemi
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const targetTab = tab.getAttribute("data-tab");
  
        // Aktif sekmeyi güncelle
        document.querySelector(".tab.active").classList.remove("active");
        tab.classList.add("active");
  
        // İçerik görünürlüğünü güncelle
        contents.forEach((content) => {
          if (content.id === targetTab) {
            content.classList.add("active");
          } else {
            content.classList.remove("active");
          }
        });
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const sssItems = document.querySelectorAll(".sss-item");
  
    sssItems.forEach((item) => {
      const question = item.querySelector(".sss-question");
  
      question.addEventListener("click", () => {
        // Diğer aktif soruları kapat
        sssItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
          }
        });
  
        // Tıklanan soruyu aç/kapat
        item.classList.toggle("active");
      });
    });
  });
  
  
 
 
 
 // Form gönderim dinleyicisi
 document.getElementById('subscription-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Formun otomatik gönderilmesini engelle
  
    // Hata popup'ını göster
    var popup = document.getElementById('error-popup');
    popup.classList.add('show');
  
    // 3 saniye sonra popup'ı gizle
    setTimeout(function() {
      popup.classList.remove('show');
    }, 3000);
  });
  
  // Eğer buton bir <div> olarak kullanılmışsa, tıklamayla form gönderimini tetikliyoruz
  document.querySelector('.subscribe-button').addEventListener('click', function() {
    document.getElementById('subscription-form').dispatchEvent(new Event('submit'));
  });
  