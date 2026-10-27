const WA_NUMBER = "6282269190930";
const currency = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });
const translations = {
  id: {
    announcement:"A little comfort, a lot of love ✦ Gratis ongkir untuk pesanan tertentu",lookbookEyebrow:"THE BSTAR LOOKBOOK",lookbookTitle:"Lima cara kecil untuk <em>merasa nyaman.</em>",navHome:"Home",navCollection:"Collection",navAbout:"About",navPromo:"Promo",navContact:"Contact",cart:"Tas",
    heroTitle:"Malam nyaman,<br><em>dimulai dari sini.</em>",heroText:"Sleepwear lembut yang bikin waktu istirahat terasa lebih istimewa. Karena kamu pantas merasa nyaman, bahkan di hari paling biasa.",shopNow:"Jelajahi koleksi",ourStory:"Cerita BStar",softness:"Softness you can feel",madeForRest:"Dibuat untuk waktu istirahatmu",
    benefit1:"Nyaman seharian",benefit2:"Bahan pilihan",benefit3:"Style effortless",benefit4:"Lembut di kulit",curated:"CURATED FOR YOUR COMFORT",collectionTitle:"Temukan mood <em>nyamanmu.</em>",collectionText:"Pilihan kecil untuk ritual istirahat yang terasa lebih spesial.",searchLabel:"Cari koleksi favoritmu",searchPlaceholder:"Cari piyama, set satin...",filterAll:"Semua koleksi",filterSatin:"Satin",filterCotton:"Cotton",filterSet:"Matching set",labelBestseller:"TERLARIS",labelNew:"BARU",labelSoftPick:"PILIHAN LEMBUT",labelLimited:"EDISI TERBATAS",quickAdd:"+ Tambah",product1Desc:"Satin · Potongan santai",product2Desc:"Cotton · Adem",product3Desc:"Lounge set · Easy fit",product4Desc:"Sentuhan lembut · Feminin",product5Desc:"Cotton blend · Ringan",product6Desc:"Set serasi · Cozy",noResults:"Belum ada produk yang cocok. Coba kata kunci lain, ya.",photoNote:"Foto inspirasi dari Unsplash. Ganti dengan foto produk asli BStar sebelum mulai berjualan.",
    littleTreat:"A LITTLE TREAT FOR YOU",promoTitle:"Self-care starts<br>with <em>soft things.</em>",promoText:"Jadikan waktu istirahat sebagai momen paling kamu tunggu.",seeCollection:"Lihat koleksi",ourPhilosophy:"OUR LITTLE PHILOSOPHY",aboutTitle:"Nyaman bukan<br>sekadar <em>pilihan.</em>",aboutText:"BStar percaya bahwa istirahat yang baik dimulai dari hal sederhana. Potongan yang santai, sentuhan lembut, dan desain yang bikin kamu merasa jadi diri sendiri.",aboutText2:"Kami ingin menemani momen kecilmu — dari slow morning, movie night, sampai waktu recharge setelah hari yang panjang.",sayHello:"Kenalan dengan BStar",stayCozy:"LET'S STAY COZY",newsletterTitle:"Kabar manis, langsung<br><em>ke inbox kamu.</em>",emailLabel:"Alamat email kamu",newsletterNote:"Dengan mendaftar, kamu setuju menerima kabar terbaru dari BStar.",footerTagline:"Comfort looks good on you. ♡",footerExplore:"Jelajahi",footerHelp:"Butuh bantuan?",sizeGuide:"Panduan ukuran",shipping:"Pengiriman & retur",faq:"FAQ",footerSayHi:"Sapa kami",replaceNote:"Ganti email contoh dengan email tokomu.",footerMade:"Dibuat untuk hari-harimu yang lebih nyaman ♡",backTop:"Kembali ke atas ↑",chatWhatsApp:"Chat WhatsApp",cartTitle:"Keranjang belanja",emptyCart:"Keranjangmu masih kosong. Yuk, cari yang nyaman! ♡",subtotal:"Subtotal",checkout:"Pesan via WhatsApp ↗",checkoutNote:"Pesanan akan dikonfirmasi melalui WhatsApp.",added:"ditambahkan ke keranjang ♡",removed:"Produk dihapus dari keranjang.",emptyCheckout:"Keranjangmu masih kosong, yuk pilih produk dulu.",newsletterSuccess:"Terima kasih! Fitur newsletter demo ini belum terhubung ke layanan email.",searching:"Hasil pencarian"
  },
  en: {
    announcement:"A little comfort, a lot of love ✦ Free shipping on selected orders",lookbookEyebrow:"THE BSTAR LOOKBOOK",lookbookTitle:"Five little ways to <em>feel cozy.</em>",navHome:"Home",navCollection:"Collection",navAbout:"About",navPromo:"Promo",navContact:"Contact",cart:"Bag",
    heroTitle:"Cozy nights,<br><em>start right here.</em>",heroText:"Soft sleepwear to make your downtime feel a little more special. You deserve comfort, even on the most ordinary days.",shopNow:"Explore collection",ourStory:"Our BStar story",softness:"Softness you can feel",madeForRest:"Made for your moments of rest",
    benefit1:"Comfort all day",benefit2:"Thoughtful fabrics",benefit3:"Effortless style",benefit4:"Soft on your skin",curated:"CURATED FOR YOUR COMFORT",collectionTitle:"Find your kind of <em>cozy.</em>",collectionText:"Little essentials for a more special wind-down ritual.",searchLabel:"Find your favorite",searchPlaceholder:"Search pajamas, satin sets...",filterAll:"All collection",filterSatin:"Satin",filterCotton:"Cotton",filterSet:"Matching sets",labelBestseller:"BESTSELLER",labelNew:"NEW IN",labelSoftPick:"SOFT PICK",labelLimited:"LIMITED EDITION",quickAdd:"+ Add to bag",product1Desc:"Satin · Relaxed fit",product2Desc:"Cotton · Breathable",product3Desc:"Lounge set · Easy fit",product4Desc:"Soft touch · Feminine",product5Desc:"Cotton blend · Airy",product6Desc:"Matching set · Cozy",noResults:"No matching products yet. Try another keyword.",photoNote:"Inspirational photos from Unsplash. Replace with BStar's own product photos before selling.",
    littleTreat:"A LITTLE TREAT FOR YOU",promoTitle:"Self-care starts<br>with <em>soft things.</em>",promoText:"Make your downtime the moment you look forward to most.",seeCollection:"View collection",ourPhilosophy:"OUR LITTLE PHILOSOPHY",aboutTitle:"Comfort is more<br>than a <em>choice.</em>",aboutText:"At BStar, we believe better rest starts with simple things. Relaxed silhouettes, soft touches, and designs that let you feel like yourself.",aboutText2:"We want to be part of your little moments — from slow mornings and movie nights to recharging after a long day.",sayHello:"Get to know BStar",stayCozy:"LET'S STAY COZY",newsletterTitle:"Sweet little updates,<br><em>straight to your inbox.</em>",emailLabel:"Your email address",newsletterNote:"By subscribing, you agree to receive BStar updates.",footerTagline:"Comfort looks good on you. ♡",footerExplore:"Explore",footerHelp:"Need a hand?",sizeGuide:"Size guide",shipping:"Shipping & returns",faq:"FAQ",footerSayHi:"Say hello",replaceNote:"Replace the sample email with your store email.",footerMade:"Made for your softer days ♡",backTop:"Back to top ↑",chatWhatsApp:"Chat on WhatsApp",cartTitle:"Shopping bag",emptyCart:"Your bag is empty. Find something cozy! ♡",subtotal:"Subtotal",checkout:"Order via WhatsApp ↗",checkoutNote:"Your order will be confirmed on WhatsApp.",added:"added to your bag ♡",removed:"Item removed from your bag.",emptyCheckout:"Your bag is empty. Add a product first.",newsletterSuccess:"Thanks! This demo newsletter is not connected to an email service.",searching:"Search results"
  }
};
let currentLang = "id";
let cart = [];
let activeFilter = "all";
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  $$("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });
  renderCart();
  applyFilters();
}
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  toast.classList.toggle("with-wa", window.innerWidth < 760);
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
}
function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) existing.qty += 1;
  else cart.push({ name, price: Number(price), qty: 1 });
  renderCart();
  showToast(`${name} ${translations[currentLang].added}`);
}
function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  $("#cartCount").textContent = count;
  const items = $("#cartItems");
  if (!cart.length) {
    items.innerHTML = `<p class="empty-cart">${translations[currentLang].emptyCart}</p>`;
  } else {
    items.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
        <div><h4>${escapeHTML(item.name)}</h4><p>${currency.format(item.price)}</p><button class="remove-item" data-remove="${index}">${currentLang === "id" ? "Hapus" : "Remove"}</button></div>
        <div class="qty-controls"><button data-qty="${index}" data-delta="-1" aria-label="Decrease quantity">−</button><span>${item.qty}</span><button data-qty="${index}" data-delta="1" aria-label="Increase quantity">+</button></div>
      </div>`).join("");
  }
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  $("#cartTotal").textContent = currency.format(total);
}
function escapeHTML(text) {
  return text.replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[char]));
}
function openCart() {
  $("#cartDrawer").classList.add("open");
  $("#drawerBackdrop").classList.add("open");
  $("#cartDrawer").setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
}
function closeCart() {
  $("#cartDrawer").classList.remove("open");
  $("#drawerBackdrop").classList.remove("open");
  $("#cartDrawer").setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
}
function applyFilters() {
  const query = $("#searchInput").value.trim().toLowerCase();
  let shown = 0;
  $$(".product-card").forEach(card => {
    const categoryMatch = activeFilter === "all" || card.dataset.category === activeFilter;
    const queryMatch = !query || (card.dataset.name + " " + card.textContent).toLowerCase().includes(query);
    const visible = categoryMatch && queryMatch;
    card.hidden = !visible;
    if (visible) shown++;
  });
  $("#noResults").hidden = shown > 0;
}
function openSearch() {
  $("#searchPanel").classList.add("visible");
  $("#searchInput").focus();
  $("#searchPanel").scrollIntoView({ behavior: "smooth", block: "center" });
}
function orderOnWhatsApp() {
  if (!cart.length) {
    showToast(translations[currentLang].emptyCheckout);
    return;
  }
  const lines = cart.map(item => `- ${item.name} x${item.qty} — ${currency.format(item.price * item.qty)}`);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const intro = currentLang === "id" ? "Halo kak, aku mau pesan baju:" : "Hi, I'd like to order sleepwear:";
  const message = `${intro}\n${lines.join("\n")}\nTotal sementara: ${currency.format(total)}\n\nMohon info ketersediaan ukuran dan cara pembayarannya ya.`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
}
$("#languageSelect").addEventListener("change", event => setLanguage(event.target.value));
$("#searchToggle").addEventListener("click", openSearch);
$("#searchInput").addEventListener("input", applyFilters);
$("#clearSearch").addEventListener("click", () => { $("#searchInput").value = ""; applyFilters(); $("#searchInput").focus(); });
$("#filterRow").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  $$(".filter-chip").forEach(chip => chip.classList.toggle("active", chip === button));
  applyFilters();
});
$("#productGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-product]");
  if (button) addToCart(button.dataset.product, button.dataset.price);
});
$("#cartToggle").addEventListener("click", openCart);
$("#cartClose").addEventListener("click", closeCart);
$("#drawerBackdrop").addEventListener("click", closeCart);
$("#cartItems").addEventListener("click", event => {
  const qtyButton = event.target.closest("[data-qty]");
  const removeButton = event.target.closest("[data-remove]");
  if (qtyButton) {
    const item = cart[Number(qtyButton.dataset.qty)];
    item.qty += Number(qtyButton.dataset.delta);
    if (item.qty <= 0) cart = cart.filter(entry => entry !== item);
    renderCart();
  }
  if (removeButton) {
    cart.splice(Number(removeButton.dataset.remove), 1);
    renderCart();
    showToast(translations[currentLang].removed);
  }
});
$("#checkoutButton").addEventListener("click", orderOnWhatsApp);
$("#menuToggle").addEventListener("click", () => {
  const open = $("#nav").classList.toggle("open");
  $("#menuToggle").setAttribute("aria-expanded", String(open));
  $("#menuToggle").textContent = open ? "×" : "☰";
});
$("#nav").addEventListener("click", event => {
  if (event.target.closest("a")) {
    $("#nav").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
    $("#menuToggle").textContent = "☰";
  }
});
$("#newsletterForm").addEventListener("submit", event => {
  event.preventDefault();
  showToast(translations[currentLang].newsletterSuccess);
  $("#newsletterMessage").textContent = translations[currentLang].newsletterSuccess;
  $("#emailInput").value = "";
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeCart();
});

// Five-image responsive lookbook slider
let currentSlide = 0;
const lookbookTrack = $("#lookbookTrack");
const lookbookSlides = $$(".lookbook-slide");
const sliderDots = $("#sliderDots");
function visibleSlides() {
  if (window.innerWidth <= 420) return 1;
  if (window.innerWidth <= 760) return 2;
  return 3;
}
function maxSlideIndex() {
  return Math.max(0, lookbookSlides.length - visibleSlides());
}
function renderSlider() {
  if (!lookbookTrack || !lookbookSlides.length) return;
  currentSlide = Math.min(currentSlide, maxSlideIndex());
  const slideWidth = lookbookSlides[0].getBoundingClientRect().width;
  const gap = parseFloat(getComputedStyle(lookbookTrack).gap) || 0;
  lookbookTrack.style.transform = `translateX(-${currentSlide * (slideWidth + gap)}px)`;
  $("#slideCounter").textContent = `${String(currentSlide + 1).padStart(2, "0")} / ${String(lookbookSlides.length).padStart(2, "0")}`;
  $$(".slider-dot").forEach((dot, index) => dot.classList.toggle("active", index === currentSlide));
}
if (sliderDots && lookbookSlides.length) {
  lookbookSlides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "slider-dot" + (index === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Tampilkan foto ${index + 1}`);
    dot.addEventListener("click", () => { currentSlide = Math.min(index, maxSlideIndex()); renderSlider(); });
    sliderDots.appendChild(dot);
  });
  $("#slidePrev").addEventListener("click", () => { currentSlide = currentSlide <= 0 ? maxSlideIndex() : currentSlide - 1; renderSlider(); });
  $("#slideNext").addEventListener("click", () => { currentSlide = currentSlide >= maxSlideIndex() ? 0 : currentSlide + 1; renderSlider(); });
  window.addEventListener("resize", renderSlider);
  renderSlider();
}

$("#year").textContent = new Date().getFullYear();
setLanguage("id");
