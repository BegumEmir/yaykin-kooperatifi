# S.S. Yaykın Köyü Tarımsal Kalkınma Kooperatifi — Web Sitesi

Çanakkale ili Çan ilçesine bağlı Yaykın Köyü Tarımsal Kalkınma Kooperatifi'nin resmi web sitesidir.

🌐 **Canlı Site:** [yaykinkooperatifi.org](https://yaykinkooperatifi.org)

---

## Hakkında

Bu proje, Yaykın Köyü Tarımsal Kalkınma Kooperatifi için geliştirilmiş resmi web sitesidir. İçerik yönetimi kod bilgisi gerektirmeden Sanity CMS üzerinden yapılabilmektedir.

---

## Teknolojiler

- **React** — Kullanıcı arayüzü
- **Vite** — Build aracı
- **Tailwind CSS** — Stillendirme
- **Sanity CMS** — İçerik yönetim sistemi
- **React Router** — Sayfa yönlendirme
- **Netlify** — Deploy ve hosting

---

## Öne Çıkan Özellikler

- **Sanity CMS entegrasyonu** — Haber, duyuru, galeri, yönetim kurulu gibi tüm içerikler kod yazmadan Studio üzerinden yönetilebiliyor
- **Medya slider** — Haberlere birden fazla fotoğraf ve video eklenebiliyor, sıralama Studio'dan ayarlanabiliyor
- **Haber popup** — Site açılışında son haber gösteriliyor, "bugün tekrar gösterme" seçeneği localStorage ile yönetiliyor
- **Mobil uyumlu tasarım** — Tüm sayfalar telefon ve masaüstü için optimize edildi
- **SEO** — Meta etiketleri, Open Graph ve Google Search Console sitemap entegrasyonu
- **Kooperatif üyeleri için kolay içerik girişi** — Teknik bilgi gerektirmeden haber, duyuru, galeri eklenebiliyor

---

## Sayfalar

- Ana Sayfa
- Hakkımızda
- Başkanlar
- Yönetim & Denetim Kurulu
- Ortaklarımız
- Faaliyetler
- Haberlerimiz & Haber Detay
- Duyurular
- Galeri
- İletişim

---

## Kurulum

```bash
git clone https://github.com/BegumEmir/yaykin-kooperatifi.git
cd yaykin-kooperatifi
npm install
```

`.env` dosyası oluştur:

```
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

```bash
npm run dev
```