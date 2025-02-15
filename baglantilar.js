document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.querySelector(".topography-canvas");
  const container = document.querySelector(".left-extra-box");
  const ctx = canvas.getContext("2d");

  // Canvas'ı kapsayıcı (.left-extra-box) elemanın boyutlarına göre ayarla
  function resizeCanvas() {
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Fare konumunu takip etmek için global değişkenler
  let isHovered = false;
  let mouseX = canvas.width / 2;
  let mouseY = canvas.height / 2;

  container.addEventListener("mousemove", function (e) {
    const rect = container.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    isHovered = true;
  });

  container.addEventListener("mouseleave", function () {
    isHovered = false;
  });

  // Kontur (izohips) parametreleri
  let phase = 0;
  const numContours = 15;  // Çizilecek toplam kontur sayısı
  const amplitude = 6;     // Dalgalanmanın maksimum sapma değeri (soft)
  const frequency = 0.02;  // Dalga frekansı
  const threshold = 100;   // Fare etkisinin yatay etki mesafesi (piksel cinsinden)
  const flowFactor = 0.2;  // Farenin etkisiyle eklenen y ofsetinin ölçeklendirme katsayısı

  function drawContours() {
    // Canvas içeriğini temizle; CSS'deki sarı gradient arka plan alt kısımda görünmeye devam eder
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Her kontur çizgisini çiz
    for (let i = 0; i < numContours; i++) {
      // Kontur çizgilerinin temel yüksekliği, kapsayıcının yüksekliğine eşit aralıklarla yerleştirilir
      const baseY = (i / (numContours - 1)) * canvas.height;
      ctx.beginPath();

      // X ekseni boyunca, 1px artışla noktaları hesaplayarak yumuşak bir çizgi oluşturuyoruz
      for (let x = 0; x <= canvas.width; x += 1) {
        let y = baseY + amplitude * Math.sin(x * frequency + phase + i);

        // Eğer fare etkinse ve bu nokta farenin yatay etki mesafesi (threshold) içinde ise,
        // farenin y konumuna göre, kontur çizgisinin y değeri yumuşakça ofsetlensin.
        if (isHovered && Math.abs(x - mouseX) < threshold) {
          let factor = 1 - Math.abs(x - mouseX) / threshold;  
          // Hesaplanan ofset: Konturun temel yüksekliği ile farenin y konumu arasındaki farkın
          // flowFactor oranında, ve farenin etkide ne kadar yakın olduğuna bağlı bir değeri.
          let offset = (baseY - mouseY) * factor * flowFactor;
          y += offset;
        }

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      // Kontur çizgilerinin rengi: #A21E7E, düşük opaklık (0.4) – soft görünüm
      ctx.strokeStyle = "rgba(162, 30, 126, 0.4)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Fazı ilerleterek animasyonu güncelle (yumuşak ve sürekli hareket)
    phase += 0.03;
    requestAnimationFrame(drawContours);
  }

  drawContours();
});


document.addEventListener("DOMContentLoaded", function () {
  // Zaten mevcut script kodlarınız varsa, bunların en altına veya uygun bir yere aşağıdaki kodu ekleyin:
  
  const container = document.querySelector(".left-extra-box");
  
  container.addEventListener("click", function () {
    // Tıklanınca yönlendirilecek URL'yi buraya yazın:
    window.location.href = "https://matsevdijital.com/";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Zaten mevcut script kodlarınız varsa, bunların en altına veya uygun bir yere aşağıdaki kodu ekleyin:
  
  const container = document.querySelector(".purple-box");
  
  container.addEventListener("click", function () {
    // Tıklanınca yönlendirilecek URL'yi buraya yazın:
    window.location.href = "bayiler.html";
  });
});

// KISAYOL İÇİN:
const kisayolBoxes = document.querySelectorAll('.kisayol-box');

  // Her bir kutuya tıklama olayı ekle
  kisayolBoxes.forEach((box, index) => {
    box.addEventListener('click', () => {
      // Tıklama işlemi sonrası yönlendirme
      switch (index) {
        case 0:
          window.location.href = 'https://egitim.matsevyayincilik.com/'; // 1. kutu için yönlendirme
          break;
        case 1:
          window.location.href = 'https://onlinesatis.matsevyayincilik.com/'; // 2. kutu için yönlendirme
          break;
        case 2:
          window.location.href = 'flipbook2025.html'; // 3. kutu için yönlendirme
          break;
        default:
          break;
      }
    });
  });


  //mail hata için 
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

