// Bayi bilgileri
const bayiler = {
  adana: [
    {
      isim: "MERKEZ – AKKAYA DAĞITIM",
      adres: "Güzelevler Mahallesi, 2067/2 Sokak, No: 1/AG Yüreğir/ADANA",
      il: "Adana",
      ilce: "Yüreğir",
      telefon: "📞 0543 893 2121",
      googleMaps:
        "https://www.google.com/maps?q=Güzelevler+Mahallesi,+2067/2+Sokak,+No:+1/AG+Yüreğir/ADANA"
    },
    {
      isim: "KOZAN – TUFAN KİTAP",
      adres:
        "Karacaoğlan Mahallesi, Şehit Hüseyin Soydan Caddesi, 44 TN Sk. No.:1 Kozan/ADANA",
      il: "Adana",
      ilce: "Kozan",
      telefon: "📞 0322 515 7934",
      googleMaps:
        "https://www.google.com/maps?q=Karacaoğlan+Mahallesi,+Şehit+Hüseyin+Soydan+Caddesi,+44+TN+Sk.+No.:1+Kozan/ADANA"
    },
    {
      isim: "CEYHAN – CEYHAN KİTABEVİ",
      adres:
        "Namık Kemal Mahallesi, Seyit Ahmet Arvasi Bulvarı, No: 32C/01 Ceyhan/ADANA",
      il: "Adana",
      ilce: "Ceyhan",
      telefon: "📞 0544 773 2995",
      googleMaps:
        "https://www.google.com/maps?q=Namık+Kemal+Mahallesi,+Seyit+Ahmet+Arvasi+Bulvarı,+No:+32C/01+Ceyhan/ADANA"
    }
  ],
  aksaray: [
    {
      isim: "HALUK KIRTASİYE",
      adres: "adres bilgisi mevcut değil",
      il: "Aksaray",
      ilce: "Belirtilmemiş",
      telefon: "📞 0554 982 7115, 0546 941 3427",
      googleMaps: "https://www.google.com/maps?q=adres+bilgisi+mevcut+değil"
    }
  ],
  afyonkarahisar: [
    {
      isim: "DEĞİŞİM KİTAP",
      adres:
        "Dumlupınar Mahallesi, Halil Ağa Caddesi, No: 15/A Beyaz Apartmanı Merkez/AFYONKARAHİSAR",
      il: "Afyonkarahisar",
      ilce: "Merkez",
      telefon: "📞 0544 774 1417",
      googleMaps:
        "https://www.google.com/maps?q=Dumlupınar+Mahallesi,+Halil+Ağa+Caddesi,+No:+15/A+Beyaz+Apartmanı+Merkez/AFYONKARAHİSAR"
    }
  ],
  amasya: [
    {
      isim: "ÇİZGİ KIRTASİYE",
      adres: "adres bilgisi mevcut değil",
      il: "Amasya",
      ilce: "Belirtilmemiş",
      telefon: "telefon numarası mevcut değil",
      googleMaps:
        "https://www.google.com/maps?q=adres+bilgisi+mevcut+değil"
    }
  ],
  ankara: [
    {
      isim: "KEÇİÖREN – ÜSTÜN KİTAP",
      adres:
        "Kuşçağız Mahallesi, Gazaller Caddesi, No: 30/B Keçiören/ANKARA",
      il: "Ankara",
      ilce: "Keçiören",
      telefon: "📞 0533 047 2448",
      googleMaps:
        "https://www.google.com/maps?q=Kuşçağız+Mahallesi,+Gazaller+Caddesi,+No:+30/B+Keçiören/ANKARA"
    },
    {
      isim: "MAVİ KALEM KİTAP KIRTASİYE",
      adres:
        "Yeni Bağlıca Mahallesi, Eski Bağlar Caddesi, No:4/B Etimesgut/ANKARA",
      il: "Ankara",
      ilce: "Etimesgut",
      telefon: "📞 0506 683 4892",
      googleMaps:
        "https://www.google.com/maps?q=Yeni+Bağlıca+Mahallesi,+Eski+Bağlar+Caddesi,+No:4/B+Etimesgut/ANKARA"
    },
    {
      isim: "DİES YAYIN DAĞITIM",
      adres:
        "Aşağı Eğlence Mahallesi, Temizel Caddesi, No:1/C Keçiören/ANKARA",
      il: "Ankara",
      ilce: "Keçiören",
      telefon: "📞 0554 561 6485",
      googleMaps:
        "https://www.google.com/maps?q=Aşağı+Eğlence+Mahallesi,+Temizel+Caddesi,+No:1/C+Keçiören/ANKARA"
    }
  ],
  antalya: [
    {
      isim: "MERKEZ – KİTAP SAATİ",
      adres:
        "Üçgen Mahallesi, 107. Sokak, No: 4/A Muratpaşa/ANTALYA",
      il: "Antalya",
      ilce: "Muratpaşa",
      telefon: "📞 0532 524 99 22",
      googleMaps:
        "https://www.google.com/maps?q=Üçgen+Mahallesi,+107.+Sokak,+No:+4/A+Muratpaşa/ANTALYA"
    },
    {
      isim: "MANAVGAT – ARSLAN KIRTASİYE",
      adres:
        "Aşağıhisar Mahallesi, 4501. Sokak NO:29 Manavgat/ANTALYA",
      il: "Antalya",
      ilce: "Manavgat",
      telefon: "📞 0532 596 78 97",
      googleMaps:
        "https://www.google.com/maps?q=Aşağıhisar+Mahallesi,+4501.+Sokak+NO:29+Manavgat/ANTALYA"
    },
    {
      isim: "ALANYA – ANGORA KIRTASİYE",
      adres:
        "Şekerhane Mahallesi, Küllüoğlu Sokak, 6/D Alanya/ANTALYA",
      il: "Antalya",
      ilce: "Alanya",
      telefon: "📞 0554 934 31 62",
      googleMaps:
        "https://www.google.com/maps?q=Şekerhane+Mahallesi,+Küllüoğlu+Sokak,+6/D+Alanya/ANTALYA"
    },
    {
      isim: "SERİK – KANSU KİTABEVİ",
      adres:
        "Merkez, 2137. Sokak, No: 6/2, Serik/ANTALYA",
      il: "Antalya",
      ilce: "Serik",
      telefon: "📞 0507 872 4464",
      googleMaps:
        "https://www.google.com/maps?q=Merkez,+2137.+Sokak,+No:+6/2,+Serik/ANTALYA"
    }
  ],
  artvin: [
    {
      isim: "UFUK ARDA KİTAP",
      adres:
        "Turgay Ciner Cad. Vergi Dairesi Altı No:17/C Hopa/Artvin",
      il: "Artvin",
      ilce: "Hopa",
      telefon: "📞 0505 748 36 06",
      googleMaps:
        "https://www.google.com/maps?q=Turgay+Ciner+Cad.+Vergi+Dairesi+Altı+No:17/C+Hopa/Artvin"
    }
  ],
  aydin: [
    {
      isim: "SİM KIRTASİYE",
      adres:
        "Hasan Efendi Mahallesi, Gençlik Caddesi, No: 15 Efeler/AYDIN",
      il: "Aydın",
      ilce: "Efeler",
      telefon: "📞 0256 214 6515 – 0505 806 3206",
      googleMaps:
        "https://www.google.com/maps?q=Hasan+Efendi+Mahallesi,+Gençlik+Caddesi,+No:+15+Efeler/AYDIN"
    }
  ],
  balikesir: [
    {
      isim: "MERKEZ KİTAP",
      adres:
        "Dumlupınar Mahallesi, Kocaokul Sokak, No:2 Karesi/BALIKESİR",
      il: "Balıkesir",
      ilce: "Karesi",
      telefon: "📞 0266 243 5046",
      googleMaps:
        "https://www.google.com/maps?q=Dumlupınar+Mahallesi,+Kocaokul+Sokak,+No:2+Karesi/BALIKESİR"
    }
  ],
  batman: [
    {
      isim: "MODEL KİTAP KIRTASİYE",
      adres:
        "Gap Mahallesi, Av. Sedat Özvin Caddesi, Baklavacı Şemsettin Karşısı, No: 9/B Merkez/BATMAN",
      il: "Batman",
      ilce: "Merkez",
      telefon: "📞 0488 502 44 21 – 0555 076 49 72",
      googleMaps:
        "https://www.google.com/maps?q=Gap+Mahallesi,+Av.+Sedat+Özvin+Caddesi,+Baklavacı+Şemsettin+Karşısı,+No:+9/B+Merkez/BATMAN"
    }
  ],
  bolu: [
    {
      isim: "ATLAS KIRTASİYE",
      adres:
        "Karaçayır Mah. Kutucular Sok. Öğretmenler Apt No:19/B Bolu",
      il: "Bolu",
      ilce: "Merkez",
      telefon: "📞 0507 059 18 70",
      googleMaps:
        "https://www.google.com/maps?q=Karaçayır+Mah.+Kutucular+Sok.+Öğretmenler+Apt+No:19/B+Bolu"
    }
  ],
  burdur: [
    {
      isim: "ÜMRAN KIRTASİYE",
      adres:
        "Burç Mahallesi, Kışla Caddesi, No: 11/5 BURDUR",
      il: "Burdur",
      ilce: "Merkez",
      telefon: "📞 0544 761 0729",
      googleMaps:
        "https://www.google.com/maps?q=Burç+Mahallesi,+Kışla+Caddesi,+No:+11/5+BURDUR"
    }
  ],
  bursa: [
    {
      isim: "ENTE KİTAPÇILIK",
      adres:
        "Barış Mahallesi, Defne (140) Sokak, Demir İş Merkezi No: 24/A Nilüfer/BURSA",
      il: "Bursa",
      ilce: "Nilüfer",
      telefon: "📞 0224 272 0031",
      googleMaps:
        "https://www.google.com/maps?q=Barış+Mahallesi,+Defne+(140)+Sokak,+Demir+İş+Merkezi+No:+24/A+Nilüfer/BURSA"
    }
  ],
  canakkale: [
    {
      isim: "ATLAS KİTAP KIRTASİYE",
      adres:
        "Hamidiye Mahallesi, Sahra Sokak, Bulvar İç Konutları B Blok, No: 20/2/12 Kepez/ÇANAKKALE",
      il: "Çanakkale",
      ilce: "Kepez",
      telefon: "📞 0546 965 6316",
      googleMaps:
        "https://www.google.com/maps?q=Hamidiye+Mahallesi,+Sahra+Sokak,+Bulvar+İç+Konutları+B+Blok,+No:+20/2/12+Kepez/ÇANAKKALE"
    }
  ],
  corum: [
    {
      isim: "MERKEZ – Bİ’ KİTAPEVİ",
      adres:
        "Üçtutlar, Eşref Hoca Cd. No:46, 19200 Çorum Merkez/Çorum",
      il: "Çorum",
      ilce: "Merkez",
      telefon: "📞 0505 797 7492",
      googleMaps:
        "https://www.google.com/maps?q=Üçtutlar,+Eşref+Hoca+Cd.+No:46,+19200+Çorum+Merkez/Çorum"
    },
    {
      isim: "SUNGURLU – ÖĞRETMENİM KIRTASİYE",
      adres:
        "Fatih Mahallesi, Muhsin Yazıcıoğlu Caddesi, No:141/A Sungurlu/ÇORUM",
      il: "Çorum",
      ilce: "Sungurlu",
      telefon: "📞 0554 327 7067",
      googleMaps:
        "https://www.google.com/maps?q=Fatih+Mahallesi,+Muhsin+Yazıcıoğlu+Caddesi,+No:141/A+Sungurlu/ÇORUM"
    }
  ],
  denizli: [
    {
      isim: "BAŞARIRLAR YAYIN DAĞITIM",
      adres:
        "Saraylar 497 sk. No: 22 Merkezefendi / DENİZLİ",
      il: "Denizli",
      ilce: "Merkezefendi",
      telefon: "📞 0546 667 61 34",
      googleMaps:
        "https://www.google.com/maps?q=Saraylar+497+sk.+No:+22+Merkezefendi+/+DENİZLİ"
    }
  ],
  duzce: [
    {
      isim: "AYDIN (SİNERJİ) KİTABEVİ",
      adres:
        "Şerefiye, Rasim Betir Paşa Blv. No: 4/E, 81060 Merkez/Düzce",
      il: "Düzce",
      ilce: "Merkez",
      telefon: "📞 0554 814 5861",
      googleMaps:
        "https://www.google.com/maps?q=Şerefiye,+Rasim+Betir+Paşa+Blv.+No:+4/E,+81060+Merkez/Düzce"
    }
  ],
  diyarbakir: [
    {
      isim: "BAŞARI KİTAP",
      adres:
        "Diclekent Mah.Selahattin Eyyubi Bulv. Fidan Sitesi A/Blok Altı No:34, 240. Sk. No:5 B BLOK, 21070 Kayapınar/Diyarbakır",
      il: "Diyarbakır",
      ilce: "Kayapınar",
      telefon: "📞 0533 136 7404",
      googleMaps:
        "https://www.google.com/maps?q=Diclekent+Mah.Selahattin+Eyyubi+Bulv.+Fidan+Sitesi+A/Blok+Altı+No:34,+240.+Sk.+No:5+B+BLOK,+21070+Kayapınar/Diyarbakır"
    }
  ],
  edirne: [
    {
      isim: "ARTI KİTABEVİ",
      adres:
        "Şükrüpaşa Mahallesi, Şehit Lütfü Küçükyoğurtlu Caddesi, Özlem Oğuz Apartmanı, No: 11, İç Kapı No:1 Merkez/EDİRNE",
      il: "Edirne",
      ilce: "Merkez",
      telefon: "📞 0284 212 5858",
      googleMaps:
        "https://www.google.com/maps?q=Şükrüpaşa+Mahallesi,+Şehit+Lütfü+Küçükyoğurtlu+Caddesi,+Özlem+Oğuz+Apartmanı,+No:+11,+İç+Kapı+No:1+Merkez/EDİRNE"
    }
  ],
  erzurum: [
    {
      isim: "KOTANOĞULLARI KIRTASİYE",
      adres:
        "Muratpaşa Mahallesi, Yakutiye Bulvarı Karizma 2 Apt. Altı No:4, 25100 Yakutiye",
      il: "Erzurum",
      ilce: "Yakutiye",
      telefon: "📞 0532 447 7025",
      googleMaps:
        "https://www.google.com/maps?q=Muratpaşa+Mahallesi,+Yakutiye+Bulvarı+Karizma+2+Apt.+Altı+No:4,+25100+Yakutiye"
    }
  ],
  eskisehir: [
    {
      isim: "BAŞKENT KİTAP",
      adres:
        "Arifiye, İnhisar Sk. 6/B, 26010 Odunpazarı/Eskişehir",
      il: "Eskişehir",
      ilce: "Odunpazarı",
      telefon: "📞 0506 330 3712",
      googleMaps:
        "https://www.google.com/maps?q=Arifiye,+İnhisar+Sk.+6/B,+26010+Odunpazarı/Eskişehir"
    }
  ],
  gaziantep: [
    {
      isim: "MAVİ KİTAP",
      adres:
        "Başkent Mahallesi, Kürşat Tüzmen Blv. Huzur Sitesi, C Blok No: 45 Şehitkamil/GAZİANTEP",
      il: "Gaziantep",
      ilce: "Şehitkamil",
      telefon: "📞 Telefon bilgisi mevcut değil",
      googleMaps:
        "https://www.google.com/maps?q=Başkent+Mahallesi,+Kürşat+Tüzmen+Blv.+Huzur+Sitesi,+C+Blok+No:+45+Şehitkamil/GAZİANTEP"
    }
  ],
  giresun: [
    {
      isim: "HIZ KİTAP",
      adres:
        "Nizamiye, Orhan Yılmaz Cd. No:67/B, 28000 Merkez/Giresun",
      il: "Giresun",
      ilce: "Merkez",
      telefon: "📞 0532 787 3287",
      googleMaps:
        "https://www.google.com/maps?q=Nizamiye,+Orhan+Yılmaz+Cd.+No:67/B,+28000+Merkez/Giresun"
    }
  ],
  gümüshane: [
    {
      isim: "SOTE KİTAP KIRTASIYE",
      adres: "Karaer Mah. Hürriyet Cad.No:15/14 Gümüşhane",
      il: "Gümüşhane",
      ilce: "Merkez",
      telefon: "📞 0530 595 08 29",
      googleMaps:
        "https://www.google.com/maps?q=Karaer+Mah.+Hürriyet+Cad.No:15/14+Gümüşhane"
    }
  ],
  hakkari: [
    {
      isim: "ADA AKDAMAR KİTAP",
      adres:
        "Güngör mah anafartalar cad milano iş merkezi kat2 ada akdamar kitap evi, D:5, 30300 Yüksekova/Hakkari",
      il: "Hakkari",
      ilce: "Yüksekova",
      telefon: "📞 0541 228 6630",
      googleMaps:
        "https://www.google.com/maps?q=Güngör+mah+anafartalar+cad+milano+iş+merkezi+kat2+ada+akdamar+kitap+evi,+D:5,+30300+Yüksekova/Hakkari"
    }
  ],
  isparta: [
    {
      isim: "AYRAÇ KIRTASİYE",
      adres: "Kutlubey Mah. Çınar sok. No. 8 Merkez / ISPARTA",
      il: "Isparta",
      ilce: "Merkez",
      telefon: "📞 0544 463 7030",
      googleMaps:
        "https://www.google.com/maps?q=Kutlubey+Mah.+Çınar+sok.+No.+8+Merkez+/+ISPARTA"
    }
  ],
  mersin: [
    {
      isim: "MERKEZ – YONCA KİTAP KIRTASİYE",
      adres:
        "Sağlık Mahallesi, Çiftçiler Caddesi, No :47 Toroslar/MERSİN",
      il: "Mersin",
      ilce: "Toroslar",
      telefon: "📞 0531 553 5692",
      googleMaps:
        "https://www.google.com/maps?q=Sağlık+Mahallesi,+Çiftçiler+Caddesi,+No+:47+Toroslar/MERSİN"
    },
    {
      isim: "TARSUS – AKKUŞ KİTAP",
      adres:
        "Ergenekon Mahallesi, Fatih Sultan Bulvarı, Tarık Apartmanı, Alt No: 17 Tarsus/MERSİN",
      il: "Mersin",
      ilce: "Tarsus",
      telefon: "📞 0324 627 2772",
      googleMaps:
        "https://www.google.com/maps?q=Ergenekon+Mahallesi,+Fatih+Sultan+Bulvarı,+Tarık+Apartmanı,+Alt+No:+17+Tarsus/MERSİN"
    }
  ],
  "istanbul-asya": [
    {
      isim: "TUZLA – PLATO KİTAP KİTABEVİ",
      adres: "Yayla, Gürsel Sok. 47/B, 34944 Tuzla/Istanbul",
      il: "İstanbul (Asya)",
      ilce: "Tuzla",
      telefon: "📞 0553 300 1223",
      googleMaps:
        "https://www.google.com/maps?q=Yayla,+Gürsel+Sok.+47/B,+34944+Tuzla/Istanbul"
    },
    {
      isim: "–NAZIM KİTABEVİ",
      adres:
        "Caferağa Mah. Mühürdar cad. Akmar Pasajı No.70/28-B Kadıköy – İSTANBUL",
      il: "İstanbul (Asya)",
      ilce: "Kadıköy",
      telefon: "📞 0538 871 61 56",
      googleMaps:
        "https://www.google.com/maps?q=Caferağa+Mah.+Mühürdar+cad.+Akmar+Pasajı+No.70/28-B+Kadıköy+–+İSTANBUL"
    },
    {
      isim: "–NAZIM KİTABEVİ",
      adres: "Örnek mah. Edip sok. No.2-4/A Ataşehir/İSTANBUL",
      il: "İstanbul (Asya)",
      ilce: "Ataşehir",
      telefon: "📞 0530 263 82 44 – 0538 871 61 56",
      googleMaps:
        "https://www.google.com/maps?q=Örnek+mah.+Edip+sok.+No.2-4/A+Ataşehir/İSTANBUL"
    },
    {
      isim: "BUYAKA KİTABEVİ",
      adres:
        "Osmangazi Mahllaesi, Battal Gazi Caddesi, No:2/4B Samadıra/Sancaktepe/İSTANBUL",
      il: "İstanbul (Asya)",
      ilce: "Sancaktepe",
      telefon: "📞 0505 701 0070",
      googleMaps:
        "https://www.google.com/maps?q=Osmangazi+Mahllaesi,+Battal+Gazi+Caddesi,+No:2/4B+Samadıra/Sancaktepe/İSTANBUL"
    },
    {
      isim: "BEYKOZ – UZMAN KİTABEVLERİ",
      adres:
        "Kavacık Çubuklu Mahallesi, Orhan Veli Kanık Caddesi, Mensup Sokak, No:4/D Beykoz/İSTANBUL",
      il: "İstanbul (Asya)",
      ilce: "Beykoz",
      telefon: "📞 0545 530 7984",
      googleMaps:
        "https://www.google.com/maps?q=Kavacık+Çubuklu+Mahallesi,+Orhan+Veli+Kanık+Caddesi,+Mensup+Sokak,+No:4/D+Beykoz/İSTANBUL"
    }
  ],
  "istanbul-avrupa": [
    {
      isim: "CEMAL GÜNEŞ KİTAP",
      adres:
        "Karadolap mah. Çırçır cd. No.6/8 Eyüp / Alibeyköy – İSTANBUL",
      il: "İstanbul (Avrupa)",
      ilce: "Eyüp",
      telefon: "📞 0536 461 72 45",
      googleMaps:
        "https://www.google.com/maps?q=Karadolap+mah.+Çırçır+cd.+No.6/8+Eyüp+/+Alibeyköy+–+İSTANBUL"
    },
    {
      isim: "SANAT KİTAPEVİ",
      adres: "Adres belirtilmemiş",
      il: "İstanbul (Avrupa)",
      ilce: "Belirtilmemiş",
      telefon: "📞 0505 265 7763",
      googleMaps:
        "https://www.google.com/maps?q=Adres+belirtilmemiş"
    },
    {
      isim: "ŞEHİR KİTAP",
      adres: "Adres belirtilmemiş",
      il: "İstanbul (Avrupa)",
      ilce: "Belirtilmemiş",
      telefon: "📞 0507 399 6818",
      googleMaps:
        "https://www.google.com/maps?q=Adres+belirtilmemiş"
    },
    {
      isim: "AVCILAR – DENİZATI KİTAP",
      adres:
        "Merkez Mahallesi, Evcil İş Hanı Marmara Caddesi, No:1 Avcılar/İSTANBUL",
      il: "İstanbul (Avrupa)",
      ilce: "Avcılar",
      telefon: "📞 0533 394 7660",
      googleMaps:
        "https://www.google.com/maps?q=Merkez+Mahallesi,+Evcil+İş+Hanı+Marmara+Caddesi,+No:1+Avcılar/İSTANBUL"
    },
    {
      isim: "BAĞCILAR – ŞEHİR KİTAP",
      adres:
        "100. Yıl Mahallesi, 2202 Sokak, No:11/A Bağcılar/İSTANBUL",
      il: "İstanbul (Avrupa)",
      ilce: "Bağcılar",
      telefon: "📞 0506 448 6128",
      googleMaps:
        "https://www.google.com/maps?q=100.+Yıl+Mahallesi,+2202+Sokak,+No:11/A+Bağcılar/İSTANBUL"
    },
    {
      isim: "BAŞAKŞEHİR – ŞEHİR KİTAP KIRTASİYE",
      adres:
        "100. Yıl Mahallesi, 2202 Sokak, No:11/A Bağcılar/İSTANBUL",
      il: "İstanbul (Avrupa)",
      ilce: "Bağcılar",
      telefon: "📞 0506 448 6128",
      googleMaps:
        "https://www.google.com/maps?q=100.+Yıl+Mahallesi,+2202+Sokak,+No:11/A+Bağcılar/İSTANBUL"
    },
    {
      isim: "SERHAT KIRTASIYE",
      adres: "Adres belirtilmemiş",
      il: "İstanbul (Avrupa)",
      ilce: "Belirtilmemiş",
      telefon: "📞 0538 649 4961",
      googleMaps:
        "https://www.google.com/maps?q=Adres+belirtilmemiş"
    },
    {
      isim: "BEYLİSYUM",
      adres: "Adres belirtilmemiş",
      il: "İstanbul (Avrupa)",
      ilce: "Belirtilmemiş",
      telefon: "📞 0543 270 6059",
      googleMaps:
        "https://www.google.com/maps?q=Adres+belirtilmemiş"
    },
    {
      isim: "GÜNGÖREN – MERTER KİTABEVİ",
      adres:
        "A.Nafiz Gürmün Mah. Gündoğdu Sokak, Köşeoğlu Apt. No:20/A Merter/Güngören/İSTANBUL",
      il: "İstanbul (Avrupa)",
      ilce: "Güngören",
      telefon: "📞 0535 298 5152",
      googleMaps:
        "https://www.google.com/maps?q=A.Nafiz+Gürmün+Mah.+Gündoğdu+Sokak,+Köşeoğlu+Apt.+No:20/A+Merter/Güngören/İSTANBUL"
    },
    {
      isim: "BAYRAMPAŞA – YENİGÜN KİTABEVİ",
      adres:
        "Yenidoğan Mah. Abdi İpekçi Cad. No:63-65/A Bayrampaşa/İSTANBUL",
      il: "İstanbul (Avrupa)",
      ilce: "Bayrampaşa",
      telefon: "📞 0533 477 2349",
      googleMaps:
        "https://www.google.com/maps?q=Yenidoğan+Mah.+Abdi+İpekçi+Cad.+No:63-65/A+Bayrampaşa/İSTANBUL"
    },
    {
      isim: "KAĞITHANE – ŞİŞLİ- SARIYER – VENÜS KİTAP DAĞITIM",
      adres:
        "Hamidiye Mah. Karlar Sokak, No:1/A Kağıthane/İSTANBUL",
      il: "İstanbul (Avrupa)",
      ilce: "Kağıthane",
      telefon: "📞 0533 629 3722",
      googleMaps:
        "https://www.google.com/maps?q=Hamidiye+Mah.+Karlar+Sokak,+No:1/A+Kağıthane/İSTANBUL"
    },
    {
      isim: "BEYLİKDÜZÜ – BÜYÜKÇEKMECE – MURAT KİTAP DAĞITIM",
      adres:
        "Marmara Mah., Kocatepe Cad. No:216/1 Menekşe Evleri A1-26 Beylikdüzü/İSTANBUL",
      il: "İstanbul (Avrupa)",
      ilce: "Beylikdüzü",
      telefon: "📞 0538 400 2757",
      googleMaps:
        "https://www.google.com/maps?q=Marmara+Mah.,+Kocatepe+Cad.+No:216/1+Menekşe+Evleri+A1-26+Beylikdüzü/İSTANBUL"
    },
    {
      isim: "ESENYURT – AVRUPA KİTAP KIRTASİYE",
      adres:
        "Cumhuriyet Mah., Hürriyet Cad., Safir Residence 1/D Esenyurt/İSTANBUL",
      il: "İstanbul (Avrupa)",
      ilce: "Esenyurt",
      telefon: "📞 0532 212 9829",
      googleMaps:
        "https://www.google.com/maps?q=Cumhuriyet+Mah.,+Hürriyet+Cad.,+Safir+Residence+1/D+Esenyurt/İSTANBUL"
    },
    {
      isim: "BAHÇELİEVLER – GÜVEN KIRTASİYE",
      adres:
        "Çobançeşme Mah., Fatih Cad., No:9/3 Yenibosna/İSTANBUL",
      il: "İstanbul (Avrupa)",
      ilce: "Yenibosna",
      telefon: "📞 0533 482 5020",
      googleMaps:
        "https://www.google.com/maps?q=Çobançeşme+Mah.,+Fatih+Cad.,+No:9/3+Yenibosna/İSTANBUL"
    },
    {
      isim: "ESENLER- KENAN ÇELEBİ GİYİM KENT",
      adres: "Adres belirtilmemiş",
      il: "İstanbul (Avrupa)",
      ilce: "Belirtilmemiş",
      telefon: "📞 0554 533 8500",
      googleMaps:
        "https://www.google.com/maps?q=Adres+belirtilmemiş"
    }
  ],
  izmir: [
    {
      isim: "ADRES KİTABEVİ",
      adres: "Adres belirtilmemiş",
      il: "İzmir",
      ilce: "Belirtilmemiş",
      telefon: "📞 0539 844 3836",
      googleMaps:
        "https://www.google.com/maps?q=Adres+belirtilmemiş"
    },
    {
      isim: "–ÇAĞAN KİTAP",
      adres: "Adres belirtilmemiş",
      il: "İzmir",
      ilce: "Belirtilmemiş",
      telefon: "📞 0531 635 4343",
      googleMaps:
        "https://www.google.com/maps?q=Adres+belirtilmemiş"
    },
    {
      isim: "KARŞIYAKA – FIRAT KİTAPEVİ",
      adres: "1720 Sokak No:43/B Karşıyaka/ İZMİR",
      il: "İzmir",
      ilce: "Karşıyaka",
      telefon: "📞 0532 383 6568",
      googleMaps:
        "https://www.google.com/maps?q=1720+Sokak+No:43/B+Karşıyaka/İZMİR"
    }
  ],
  kayseri: [
    {
      isim: "GARANTİ KİTAP",
      adres:
        "Camikebir Mahllesi, Mehmet Tarman Cad., No:5 Final Halısaha Altı, Kocasinan/KAYSERİ",
      il: "Kayseri",
      ilce: "Kocasinan",
      telefon: "📞 0507 540 8374",
      googleMaps:
        "https://www.google.com/maps?q=Camikebir+Mahllesi,+Mehmet+Tarman+Cad.,+No:5+Final+Halısaha+Altı,+Kocasinan/KAYSERİ"
    }
  ],
  kocaeli: [
    {
      isim: "KİTAPÇI TACİ",
      adres: "4 Temmuz Mahallesi, Cumhuriyet Caddesi, No:34 Karamürsel/KOCAELİ",
      il: "Kocaeli",
      ilce: "Karamürsel",
      telefon: "📞 0532 681 2060",
      googleMaps:
        "https://www.google.com/maps?q=4+Temmuz+Mahallesi,+Cumhuriyet+Caddesi,+No:34+Karamürsel/KOCAELİ"
    },
    {
      isim: "BEYZA KİTAPEVİ",
      adres: "Adres belirtilmemiş",
      il: "Kocaeli",
      ilce: "Belirtilmemiş",
      telefon: "📞 Bilgi mevcut değil",
      googleMaps:
        "https://www.google.com/maps?q=Adres+belirtilmemiş"
    }
  ],
  kahramanmaras: [
    {
      isim: "TANIR KIRTASİYE",
      adres:
        "Şehit Abdullah Çavuş Mah. Mustafa Or cd. Derya Sitesi A Blok No:24 12 Şubat/KAHRAMANMARAŞ",
      il: "Kahramanmaraş",
      ilce: "12 Şubat",
      telefon: "📞 0505 294 86 18",
      googleMaps:
        "https://www.google.com/maps?q=Şehit+Abdullah+Çavuş+Mah.+Mustafa+Or+cd.+Derya+Sitesi+A+Blok+No:24+12+Şubat/KAHRAMANMARAŞ"
    }
  ],
  konya: [
    {
      isim: "KALITIM BASIM YAYIN DAĞITIM",
      adres:
        "Fevzi Çakmak Mah. 10456. Sk. No: 6 D: A Blok Karatay/KONYA",
      il: "Konya",
      ilce: "Karatay",
      telefon: "📞 0332 342 0102",
      googleMaps:
        "https://www.google.com/maps?q=Fevzi+Çakmak+Mah.+10456.+Sk.+No:+6+D:+A+Blok+Karatay/KONYA"
    }
  ],
  kutahya: [
    {
      isim: "ZİRVE KIRTASİYE",
      adres:
        "Alipaşa Mah. Sebilerenler Cad. Üsküdar Apt No:37/A Kütahya",
      il: "Kütahya",
      ilce: "Merkez",
      telefon: "📞 0554 623 41 74",
      googleMaps:
        "https://www.google.com/maps?q=Alipaşa+Mah.+Sebilerenler+Cad.+Üsküdar+Apt+No:37/A+Kütahya"
    }
  ],
  kirikkale: [
    {
      isim: "EFE KİTAP",
      adres: "Yaylacık Mah Hürriyet Cad 25:A, 71200 Merkez/Kırıkkale",
      il: "Kırıkkale",
      ilce: "Merkez",
      telefon: "📞 0506 408 5036",
      googleMaps:
        "https://www.google.com/maps?q=Yaylacık+Mah+Hürriyet+Cad+25:A,+71200+Merkez/Kırıkkale"
    }
  ],
  kirklareli: [
    {
      isim: "KÜLTÜR KİTAPEVİ",
      adres: "Adres belirtilmemiş",
      il: "Kırklareli",
      ilce: "Belirtilmemiş",
      telefon: "📞 0545 862 5744",
      googleMaps:
        "https://www.google.com/maps?q=Adres+belirtilmemiş"
    }
  ],
  manisa: [
    {
      isim: "İLKADIM KİTAPEVİ",
      adres: "Adres belirtilmemiş",
      il: "Manisa",
      ilce: "Belirtilmemiş",
      telefon: "📞 0537 955 1136",
      googleMaps:
        "https://www.google.com/maps?q=Adres+belirtilmemiş"
    }
  ],
  malatya: [
    {
      isim: "ŞENER YAYIN DAĞITIM",
      adres: "Adres belirtilmemiş",
      il: "Malatya",
      ilce: "Belirtilmemiş",
      telefon: "📞 0505 561 6043",
      googleMaps:
        "https://www.google.com/maps?q=Adres+belirtilmemiş"
    }
  ],
  mugla: [
    {
      isim: "ERAY KIRTASİYE",
      adres:
        "Emirbeyazıt Mah. Etem Serim Sok. Titiz Apt. No:24/A Menteşe/Muğla",
      il: "Muğla",
      ilce: "Menteşe",
      telefon: "📞 0546 897 62 32",
      googleMaps:
        "https://www.google.com/maps?q=Emirbeyazıt+Mah.+Etem+Serim+Sok.+Titiz+Apt.+No:24/A+Menteşe/Muğla"
    },
    {
      isim: "ERAY KIRTASİYE",
      adres: "Kesikkapı Mah. Atatürk Cad. No:90 Fethiye/Muğla",
      il: "Muğla",
      ilce: "Fethiye",
      telefon: "📞 0546 897 62 32",
      googleMaps:
        "https://www.google.com/maps?q=Kesikkapı+Mah.+Atatürk+Cad.+No:90+Fethiye/Muğla"
    },
    {
      isim: "ERAY KIRTASİYE",
      adres: "Atatürk Mah. Atatürk Bulv. Osman Nuri Ocak 117/B Ortaca/Muğla",
      il: "Muğla",
      ilce: "Ortaca",
      telefon: "📞 0546 897 62 32",
      googleMaps:
        "https://www.google.com/maps?q=Atatürk+Mah.+Atatürk+Bulv.+Osman+Nuri+Ocak+117/B+Ortaca/Muğla"
    }
  ],
  mus: [
    {
      isim: "MİRAÇ KIRTASİYE",
      adres:
        "hürriyet mahallesi 156. sokak, Emir Yapı, No 6/4-A İstasyon Cd., 49120 merkez",
      il: "Muş",
      ilce: "Merkez",
      telefon: "📞 0536 432 4849",
      googleMaps:
        "https://www.google.com/maps?q=hürriyet+mahallesi+156.+sokak,+Emir+Yapı,+No+6/4-A+İstasyon+Cd.,+49120+merkez"
    }
  ],
  nevsehir: [
    {
      isim: "AKDENİZ KİTAP KIRTASİYE",
      adres:
        "4 Temmuz Mahallesi Muhsin Yazıcıoğlu Cad. No:11/2 Nevşehir",
      il: "Nevşehir",
      ilce: "Merkez",
      telefon: "📞 0535 348 90 67",
      googleMaps:
        "https://www.google.com/maps?q=4+Temmuz+Mahallesi+Muhsin+Yazıcıoğlu+Cad.+No:11/2+Nevşehir"
    }
  ],
  nigde: [
    {
      isim: "PUSULA KİTAP KIRTASİYE",
      adres:
        "Yenice Mahallesi, Lise Sokak, Naci Özdemir 2/12  Merkez/NİĞDE",
      il: "Niğde",
      ilce: "Merkez",
      telefon: "📞 0388 213 1733 – 0533 344 6770",
      googleMaps:
        "https://www.google.com/maps?q=Yenice+Mahallesi,+Lise+Sokak,+Naci+Özdemir+2/12+Merkez/NİĞDE"
    }
  ],
  osmaniye: [
    {
      isim: "MERKEZ – NURCAN KİTAP KIRTASİYE",
      adres:
        "R. Hatun Mah. Dr. S. Ahmet Cad. 9077 sk. Münire Hanım Ap. Altı No: 3/A OSMANİYE",
      il: "Osmaniye",
      ilce: "Merkez",
      telefon: "📞 0328 813 79 96",
      googleMaps:
        "https://www.google.com/maps?q=R.+Hatun+Mah.+Dr.+S.+Ahmet+Cad.+9077+sk.+Münire+Hanım+Ap.+Altı+No:+3/A+OSMANİYE"
    },
    {
      isim: "KADİRLİ – YENİ KEŞİF KİTABEVİ",
      adres:
        "Ş. Kansu Küçükateş Mh. 1818 Sk. No: 3/A Kadirli/OSMANİYE",
      il: "Osmaniye",
      ilce: "Kadirli",
      telefon: "📞 0544 922 0180",
      googleMaps:
        "https://www.google.com/maps?q=Ş.+Kansu+Küçükateş+Mh.+1818+Sk.+No:3/A+Kadirli/OSMANİYE"
    }
  ],
  ordu: [
    {
      isim: "KİTAPÇI DAYIM",
      adres:
        "Şarkiye Mah. Küçük Sk. No:5/A Altınordu / ORDU",
      il: "Ordu",
      ilce: "Altınordu",
      telefon: "📞 0534 070 4864",
      googleMaps:
        "https://www.google.com/maps?q=Şarkiye+Mah.+Küçük+Sk.+No:5/A+Altınordu+/+ORDU"
    },
    {
      isim: "FATSA – ÖZGEN KİTAPEVİ",
      adres:
        "Mustafakemalpaşa, Meydan Sok. No:9, 52400 Fatsa/Ordu",
      il: "Ordu",
      ilce: "Fatsa",
      telefon: "📞 0532 454 2127",
      googleMaps:
        "https://www.google.com/maps?q=Mustafakemalpaşa,+Meydan+Sok.+No:9,+52400+Fatsa/Ordu"
    }
  ],
  rize: [
    {
      isim: "EMİN KİTABEVİ",
      adres:
        "Piriçelebi Mahallesi, Atatürk Caddesi, No:271/F Rize",
      il: "Rize",
      ilce: "Merkez",
      telefon: "📞 0464 213 2168",
      googleMaps:
        "https://www.google.com/maps?q=Piriçelebi+Mahallesi,+Atatürk+Caddesi,+No:271/F+Rize"
    }
  ],
  sakarya: [
    {
      isim: "SAKARYA KİTAP SARAYI",
      adres:
        "Atatürk Bulvarı Pasaj, 2000 Kitapçılar Çarşısı, No:6 Adapazarı/SAKARYA",
      il: "Sakarya",
      ilce: "Adapazarı",
      telefon: "📞 0505 779 2730",
      googleMaps:
        "https://www.google.com/maps?q=Atatürk+Bulvarı+Pasaj,+2000+Kitapçılar+Çarşısı,+No:6+Adapazarı/SAKARYA"
    },
    {
      isim: "DAHİ KİTAP- HENDEK",
      adres:
        "Kemaliye Mahallesi,Muammer Sencer Caddesi, No:4/A Hendek/Sakarya",
      il: "Sakarya",
      ilce: "Hendek",
      telefon: "📞 0532 367 8036",
      googleMaps:
        "https://www.google.com/maps?q=Kemaliye+Mahallesi,Muammer+Sencer+Caddesi,+No:4/A+Hendek/Sakarya"
    }
  ],
  samsun: [
    {
      isim: "İLKE DAĞITIM",
      adres: "Adres belirtilmemiş",
      il: "Samsun",
      ilce: "Belirtilmemiş",
      telefon: "📞 0505 387 2700",
      googleMaps:
        "https://www.google.com/maps?q=Adres+belirtilmemiş"
    },
    {
      isim: "ÇARŞAMBA – EĞİTİM COPY",
      adres:
        "Sungurlu Mahallesi, Tayyar Paşa Sokak, No:3/A Çarşamba/SAMSUN",
      il: "Samsun",
      ilce: "Çarşamba",
      telefon: "📞 0541 244 1555",
      googleMaps:
        "https://www.google.com/maps?q=Sungurlu+Mahallesi,+Tayyar+Paşa+Sokak,+No:3/A+Çarşamba/SAMSUN"
    }
  ],
  siirt: [
    {
      isim: "GELİŞİM KIRTASİYE",
      adres: "Adres belirtilmemiş",
      il: "Siirt",
      ilce: "Belirtilmemiş",
      telefon: "📞 0546 250 3095",
      googleMaps:
        "https://www.google.com/maps?q=Adres+belirtilmemiş"
    }
  ],
  sanliurfa: [
    {
      isim: "İLK SEVİYEM KİTAPEVİ",
      adres:
        "Merkez Mahallesi, 35. Metre Yol Üzeriz, M.Ali Apartmanı Altı (Salı Pazarı Karşısı) Karaköprü/ŞANLIURFA",
      il: "Şanlıurfa",
      ilce: "Karaköprü",
      telefon: "📞 0505 773 0011",
      googleMaps:
        "https://www.google.com/maps?q=Merkez+Mahallesi,+35.+Metre+Yol+Üzeriz,+M.Ali+Apartmanı+Altı+(Salı+Pazarı+Karşısı)+Karaköprü/ŞANLIURFA"
    }
  ],
  tekirdag: [
    {
      isim: "ÇORLU – MOSTAR KİTAP KIRTASİYE",
      adres:
        "Muhittin Mahallesi, Tütün Sokak, No:2 Çorlu/TEKİRDAĞ",
      il: "Tekirdağ",
      ilce: "Çorlu",
      telefon: "📞 0282 653 7191",
      googleMaps:
        "https://www.google.com/maps?q=Muhittin+Mahallesi,+Tütün+Sokak,+No:2+Çorlu/TEKİRDAĞ"
    }
  ],
  tokat: [
    {
      isim: "İPEK KIRTASİYE – ERBAA",
      adres:
        "Cumhuriyet Mahallesi, Dr. Sermet Durmuşoğlu Caddesi No:39/B Erbaa/TOKAT",
      il: "Tokat",
      ilce: "Erbaa",
      telefon: "📞 0356 715 8715",
      googleMaps:
        "https://www.google.com/maps?q=Cumhuriyet+Mahallesi,+Dr.+Sermet+Durmuşoğlu+Caddesi+No:39/B+Erbaa/TOKAT"
    }
  ],
  trabzon: [
    {
      isim: "ORTAHİSAR – AKOLUK KİTAP KIRTASİYE",
      adres:
        "Gazipaşa Mahallesi, Kızılay Sokak, No: 5/20 Ortahisar/TRABZON",
      il: "Trabzon",
      ilce: "Ortahisar",
      telefon: "📞 Bilgi mevcut değil",
      googleMaps:
        "https://www.google.com/maps?q=Gazipaşa+Mahallesi,+Kızılay+Sokak,+No:+5/20+Ortahisar/TRABZON"
    },
    {
      isim: "AKÇAABAT – AKOLUK KİTAP KIRTASİYE",
      adres:
        "Dürbinar Mahallesi, Tütüncü Sokak No:7 Akçaabat/TRABZON",
      il: "Trabzon",
      ilce: "Akçaabat",
      telefon: "📞 Bilgi mevcut değil",
      googleMaps:
        "https://www.google.com/maps?q=Dürbinar+Mahallesi,+Tütüncü+Sokak+No:7+Akçaabat/TRABZON"
    }
  ],
  zonguldak: [
    {
      isim: "ŞİRİN ÇOCUK KİTAP KIRTASİYE",
      adres:
        "Meşrutiyet Mah. Tahir Karaoğuz cd. Demirci Çarşısı No: 21 İç kapı 21 ZONGULDAK",
      il: "Zonguldak",
      ilce: "Merkez",
      telefon: "📞 0532 320 8642",
      googleMaps:
        "https://www.google.com/maps?q=Meşrutiyet+Mah.+Tahir+Karaoğuz+cd.+Demirci+Çarşısı+No:+21+İç+kapı+21+ZONGULDAK"
    }
  ]
};

// Harita işlemleri
function svgturkiyeharitasi() {
  const element = document.querySelector("#svg-turkiye-haritasi");
  const info = document.querySelector(".il-isimleri");
  const bayiDiv = document.getElementById("bayi-bilgisi");

  // İl tıklanınca bayi bilgisi göster
  element.addEventListener("click", function (event) {
    if (event.target.tagName === "path") {
      const parent = event.target.parentNode;
      const id = parent.getAttribute("id");

      if (id === "guney-kibris") {
        return;
      }

      // Bayi bilgilerini al
      const bayiListesi = bayiler[id] || [];
      if (bayiListesi.length === 0) {
        bayiDiv.innerHTML = `<strong>${parent.getAttribute("data-iladi")}:</strong> Bu ilde bayi bulunmamaktadır.`;
        return;
      }

      // Bayi bilgilerini HTML'e yaz
      let bayiHTML = `<strong>${parent.getAttribute("data-iladi")}</strong><div class="bayi-container">`;
      bayiListesi.forEach(bayi => {
        bayiHTML += `
                  <div class="bayi-card">
      <strong>${bayi.isim}</strong>
      <p>📍 ${bayi.adres}</p>
      <p>📍 ${bayi.il} / ${bayi.ilce}</p>
      <p>${bayi.telefon}</p>
      <a href="${bayi.googleMaps}" target="_blank">📍 Google Maps'te Aç</a>
    </div>`;
      });
      bayiHTML += `</div>`;
      bayiDiv.innerHTML = bayiHTML;
    }
  });
}

// Sayfa yüklendiğinde haritayı çalıştır
document.addEventListener("DOMContentLoaded", svgturkiyeharitasi);

//wp script
const whatsappButton = document.getElementById('whatsapp-button');
const whatsappContainer = document.getElementById('whatsapp-container');

// Butona tıklandığında 'open' sınıfını ekleyip çıkararak
// kartın görünmesini ve animasyonun tetiklenmesini sağlıyoruz
whatsappButton.addEventListener('click', () => {
  whatsappContainer.classList.toggle('open');
});

function initDealerSearch() {
  const provinceSelect = document.getElementById("province-select");
  const districtSelect = document.getElementById("district-select");
  const dealerResults = document.getElementById("dealer-results");

  // Bayiler nesnesindeki illerle il dropdown'unu dolduralım
  for (const provinceKey in bayiler) {
    if (bayiler.hasOwnProperty(provinceKey)) {
      const option = document.createElement("option");
      option.value = provinceKey;
      // Görünür metin olarak, ilgili ildeki bayi kayıtlarından ilk kaydın "il" alanını kullanalım
      option.textContent = bayiler[provinceKey].length ? bayiler[provinceKey][0].il : provinceKey;
      provinceSelect.appendChild(option);
    }
  }

  // İl seçildiğinde: ilçe dropdown'unu güncelle ve önceki sonuçları temizle
  provinceSelect.addEventListener("change", function() {
    const selectedProvince = this.value;
    districtSelect.innerHTML = `<option value="">İlçe seçiniz</option>`;
    dealerResults.innerHTML = "";
    if (!selectedProvince) return;

    // Seçilen ildeki bayi kayıtlarından benzersiz ilçeleri toplayalım
    const districts = new Set();
    bayiler[selectedProvince].forEach(dealer => {
      districts.add(dealer.ilce);
    });

    // İlçe dropdown'unu dolduralım
    districts.forEach(district => {
      const option = document.createElement("option");
      option.value = district;
      option.textContent = district;
      districtSelect.appendChild(option);
    });
  });

  // İlçe seçildiğinde: bayi kartlarını hemen gösterelim
  districtSelect.addEventListener("change", function() {
    const selectedProvince = provinceSelect.value;
    const selectedDistrict = this.value;
    dealerResults.innerHTML = "";
    
    if (!selectedProvince || !selectedDistrict) {
      return;
    }

    // Seçilen ile ait bayi kayıtlarını, seçilen ilçeye göre filtreleyelim
    const dealers = bayiler[selectedProvince].filter(dealer => dealer.ilce === selectedDistrict);
    if (dealers.length === 0) {
      dealerResults.innerHTML = `<p>Seçtiğiniz kriterlere uygun bayi bulunamadı.</p>`;
      return;
    }

    // Bayi kartlarını oluşturuyoruz (mevcut .bayi-container ve .bayi-card tasarımını kullanarak)
    let dealerHTML = `<h3 style="text-align: center; margin-bottom: 20px;">${dealers[0].il} / ${selectedDistrict}</h3>
                        <div class="bayi-container">`;
    dealers.forEach(dealer => {
      dealerHTML += `
        <div class="bayi-card">
          <strong>${dealer.isim}</strong>
          <p>📍 ${dealer.adres}</p>
          <p>📍 ${dealer.il} / ${dealer.ilce}</p>
          <p>${dealer.telefon}</p>
          <a href="${dealer.googleMaps}" target="_blank">📍 Google Maps'te Aç</a>
        </div>
      `;
    });
    dealerHTML += "</div>";
    dealerResults.innerHTML = dealerHTML;
  });
}

document.addEventListener("DOMContentLoaded", initDealerSearch);

