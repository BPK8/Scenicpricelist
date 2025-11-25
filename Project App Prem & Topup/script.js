/* ============================
   CONFIG
============================ */
const CONFIG = {
  OWNER_WA_NUMBER: '6281573071206',
  SITE_NAME: 'Scenic Pricelist'
};

/* ============================
   PRODUK PREMIUM
============================ */
const PRODUCTS_APPS = [
  {
    id: "netflix",
    name: "Netflix",
    img: "Gambar/netflix.jpeg",
    variants: [
      { label: "SHARING 1P1U — 1 Hari", price: 4000 },
      { label: "SHARING 1P1U — 3 Hari", price: 8000 },
      { label: "SHARING 1P1U — 7 Hari", price: 20000 },
      { label: "SHARING 1P1U — 1 Bulan", price: 35000 },

      { label: "SHARING 1P2U — 1 Hari", price: 3000 },
      { label: "SHARING 1P2U — 3 Hari", price: 6000 },
      { label: "SHARING 1P2U — 7 Hari", price: 15000 },
      { label: "SHARING 1P2U — 1 Bulan", price: 29000 },

      { label: "SEMI PRIVATE — 7 Hari", price: 23000 },
      { label: "SEMI PRIVATE — 1 Bulan", price: 40000 }
    ]
  },

  {
    id: "applemusic",
    name: "Apple Music",
    img: "Gambar/apple music.png",
    variants: [
      { label: "SLOT IMESS — 1 Bulan", price: 7000 },
      { label: "SLOT IMESS — 2 Bulan", price: 10000 },
      { label: "SLOT IMESS — 3 Bulan", price: 15000 }
    ]
  },

  {
    id: "viu",
    name: "Viu",
    img: "Gambar/viu.jpeg",
    variants: [
      { label: "PRIVATE UNLIM — 1 Bulan", price: 7000 },
      { label: "PRIVATE UNLIM — 3 Bulan", price: 13000 },
      { label: "PRIVATE UNLIM — 6 Bulan", price: 18000 },
      { label: "PRIVATE UNLIM — 1 Tahun", price: 25000 },

      { label: "PRIVATE UNLIM — Lifetime", price: 29000 }
    ]
  },

  {
    id: "spotify",
    name: "Spotify",
    img: "Gambar/spotify.jpeg",
    variants: [
      { label: "FAMPLAN — 1 Bulan", price: 22000 },
      { label: "FAMPLAN — 2 Bulan", price: 30000 },
      { label: "FAMPLAN — 3 Bulan", price: 42000},

      { label: "INDPLAN — 1 Bulan", price: 25000 },
      { label: "INDPLAN — 2 Bulan", price: 35000 },
      { label: "INDPLAN — 3 Bulan", price: 47000 },
    ]
  },

  {
    id: "primevideo",
    name: "Prime Video",
    img: "Gambar/prime video.jpg",
    variants: [
      { label: "SHARING — 1 Bulan", price: 12000 },
      { label: "SHARING — 2 Bulan", price: 19000 },
      { label: "SHARING — 3 Bulan", price: 30000 },

      { label: "PRIVATE — 1 Bulan", price: 15000 },
      { label: "PRIVATE — 2 Bulan", price: 30000 },
      { label: "PRIVATE — 3 Bulan", price: 45000 }
    ]
  },

  {
    id: "youku",
    name: "Youku",
    img: "Gambar/youku movie box.jpeg",
    variants: [
      { label: "SHARING — 1 Bulan", price: 8000 },
      { label: "SHARING — 3 Bulan", price: 13000 },
      { label: "SHARING — 1 Tahun", price: 20000 }
    ]
  },

{
    id: "movie box",
    name: "Movie Box",
    img: "Gambar/movie box.jpeg",
    variants: [
      { label: "SHARING — 1 Bulan", price: 8000 },
      { label: "SHARING — 3 Bulan", price: 13000 },
      { label: "SHARING — 1 Tahun", price: 20000 }
    ]
  },

  {
    id: "vidio",
    name: "Vidio Platinum",
    img: "Gambar/vidio.jpeg",
    variants: [
      { label: "SHARING — 1 Bulan", price: 28000 },
      { label: "SHARING — 2 Bulan", price: 55000 },

      { label: "PRIVATE — 1 Bulan", price: 35000 },
      { label: "PRIVATE — 2 Bulan", price: 70000 }
    ]
  },

  {
    id: "wetv",
    name: "WeTV",
    img: "Gambar/we tv.jpeg",
    variants: [
      { label: "SHARING — 1 Bulan", price: 12000 },
      { label: "SHARING — 1 Tahun", price: 27000 },

      { label: "PRIVATE — 1 Bulan", price: 30000 },
      { label: "PRIVATE — 2 Bulan", price: 55000 }
    ]
  },

  {
    id: "disney",
    name: "Disney+",
    img: "Gambar/disney +.jpeg",
    variants: [
      { label: "SHARING — 1 Minggu", price: 14000 },
      { label: "SHARING — 1 Bulan", price: 28000 },
      { label: "SHARING — 2 Bulan", price: 55000 }
    ]
  },

  {
    id: "iqiyi",
    name: "IQIYI",
    img: "Gambar/iqiyi.jpeg",
    variants: [
      { label: "SHARING — 1 Bulan", price: 10000 },
      { label: "SHARING — 3 Bulan", price: 20000 },
      { label: "SHARING — 1 Tahun", price: 30000 },

      { label: "PRIVATE — 1 Bulan", price: 25000 },
      { label: "PRIVATE — 2 Bulan", price: 49000 }
    ]
  },

  {
    id: "bstation",
    name: "BStation",
    img: "Gambar/bstation.jpeg",
    variants: [
      { label: "SHARING — 1 Bulan", price: 12000 },
      { label: "SHARING — 1 Tahun", price: 23000 },

      { label: "PRIVATE — 1 Bulan", price: 35000 },
      { label: "PRIVATE — 3 Bulan", price: 80000 }
    ]
  },

  {
    id: "youtube",
    name: "YouTube",
    img: "Gambar/youtube.jpeg",
    variants: [
      { label: "FAMPLAN — 1 Bulan", price: 7000 },
      { label: "FAMPLAN — 2 Bulan", price: 15000 },
      { label: "FAMPLAN — 3 Bulan", price: 23000 },

      { label: "INDPLAN — 1 Bulan", price: 13000 },
      { label: "INDPLAN — 2 Bulan", price: 23000 },
      { label: "INDPLAN — 3 Bulan", price: 30000 }
    ]
  },

  {
    id: "picsart",
    name: "PicsArt Gold",
    img: "Gambar/piscsart.jpeg",
    variants: [
      { label: "GOLD SHAR — 1 Bulan", price: 12000 },
      { label: "GOLD SHAR — 2 Bulan", price: 19000 },

      { label: "GOLD PRIV — 1 Bulan", price: 19000 },
      { label: "GOLD PRIV — 2 Bulan", price: 35000 }
    ]
  },

  {
    id: "alight",
    name: "Alight Motion",
    img: "Gambar/alight motion.jpeg",
    variants: [
      { label: "SHARING — 1 Bulan", price: 7000 },
      { label: "SHARING — 3 Bulan", price: 12000 },
      { label: "SHARING — 6 Tahun", price: 20000 },
      { label: "SHARING — Lifetime", price: 26000 },

      { label: "PRIVATE — 1 Bulan", price: 10000 },
      { label: "PRIVATE — 6 Bulan", price: 25000 },
      { label: "PRIVATE — 1 Tahun", price: 38000 }
    ]
  },

  {
    id: "vsco",
    name: "VSCO",
    img: "Gambar/vsco.jpeg",
    variants: [
      { label: "SHARING — 1 Bulan", price: 12000 },
      { label: "SHARING — 1 Tahun", price: 25000 },

      { label: "PRIVATE — 1 Bulan", price: 20000 },
      { label: "PRIVATE — 1 Tahun", price: 40000 }
    ]
  },

  {
    id: "chatgpt",
    name: "ChatGPT PLUS",
    img: "Gambar/chatgpt.jpeg",
    variants: [
      { label: "GPT PLUS — 7 Hari", price: 13000 },
      { label: "GPT PLUS — 1 Bulan", price: 25000 }
    ]
  },

 {
    id: "gamma ai",
    name: "Gamma Ai PLUS",
    img: "Gambar/gamma ai.webp",
    variants: [
      { label: "GAMMA PLUS — 1 Bulan", price: 15000 },
      { label: "GAMMA PLUS — 2 Bulan", price: 25000 },
    ]
  },

{
    id: "perlexity",
    name: "Perlexity Ai PLUS",
    img: "Gambar/perlexity.jpeg",
    variants: [
      { label: "PERLEXITY PLUS — 7 Hari", price: 11000 },
      { label: "PERLEXITY PLUS — 1 Bulan", price: 23000 },
    ]
  },

{
    id: "you com",
    name: "You Com",
    img: "Gambar/you.com",
    variants: [
      { label: "YOU COM PLUS — 7 Hari", price: 11000 },
      { label: "YOU COM PLUS — 1 Bulan", price: 23000 },
    ]
  },

{
    id: "google gemini 2tb",
    name: "Google Gemini 2TB",
    img: "Gambar/gemini.jpeg",
    variants: [
      { label: "YOU COM PLUS — 1 Bulan", price: 10000 },
      { label: "YOU COM PLUS — 2 Bulan", price: 15000 },
    ]
  },

 {
    id: "canva",
    name: "Canva Member",
    img: "Gambar/canva.jpeg",
    variants: [
      { label: "MEMBER — 7 hari", price: 3000 },
      { label: "MEMBER — 1 Bulan", price: 7000 },
      { label: "MEMBER — 6 Bulan", price: 17000 },
      { label: "MEMBER — 1 Tahun", price: 23000 },
      { label: "MEMBER — Lifetime", price: 30000 }
    ]
  },

 {
    id: "capcut",
    name: "Capcut",
    img: "Gambar/capcut.jpeg",
    variants: [
      { label: "PRO SHAR — 1 Bulan", price: 15000 },
      { label: "PRO SHAR — 2 Bulan", price: 23000 },

      { label: "PRO PRIV — 1 Bulan", price: 25000 },
      { label: "PRO PRIV — 2 Bulan", price: 35000 }
    ]
  },

  {
    id: "meitu",
    name: "Meitu",
    img: "Gambar/meitu.jpeg",
    variants: [
      { label: "PRIVATE — 7 Hari", price: 14000 },
      { label: "PRIVATE — 1 Bulan", price: 29000 }
    ]
  },

  {
    id: "hbomax",
    name: "HBO Max",
    img: "Gambar/hbo max.jpeg",
    variants: [
      { label: "SHARING — 1 Bulan", price: 20000 },
      { label: "SHARING — 3 Bulan", price: 35000 }
    ]
  },

   {
    id: "wink",
    name: "Wink",
    img: "Gambar/wink.jpeg",
    variants: [
      { label: "PRIVATE — 7 Hari", price: 14000 },
      { label: "PRIVATE — 1 Bulan", price: 29000 }
    ]
  },

{
    id: "lumosity",
    name: "Lumosity Private",
    img: "Gambar/lumosity.jpeg",
    variants: [
      { label: "PRIVATE — 1 Bulan", price: 15000 },
      { label: "PRIVATE — 2 Bulan", price: 28000 },
    ]
  },

{
    id: "smallpfd",
    name: "SmallPDF Private",
    img: "Gambar/smallpdf.jpeg",
    variants: [
      { label: "PRIVATE — 1 Bulan", price: 15000 },
      { label: "PRIVATE — 2 Bulan", price: 28000 },
    ]
  },

{
    id: "zoom meeting",
    name: "Zoom Meeting",
    img: "Gambar/zoom.png",
    variants: [
      { label: "PRIVATE — 1 Mingggu", price: 5000 },
      { label: "PRIVATE — 2 Minggu", price: 9000 },
      { label: "PRIVATE — 1 Bulan", price: 15000 },
    ]
  },

{
    id: "duolingo",
    name: "Duolingo Private",
    img: "Gambar/duolingo.png",
    variants: [
      { label: "PRIVATE — 2 Minggu", price: 5000 },
      { label: "PRIVATE — 1 Bulan", price: 10000 },
      { label: "PRIVATE — 12 Bulan", price: 24000 },
    ]
  },

{
    id: "slot microsoft 365",
    name: "Slot Microsoft 365",
    img: "Gambar/m365.jpeg",
    variants: [
      { label: "PRIVATE — 1 Bulan", price: 3500 },
      { label: "PRIVATE — 2 Bulan", price: 6000 },
      { label: "PRIVATE — 3 Bulan", price: 9000 },
    ]
  },

{
    id: "wps",
    name: "WPS Private",
    img: "Gambar/wps.png",
    variants: [
      { label: "PRIVATE — 1 Minggu", price: 5000 },
      { label: "PRIVATE — 1 Bulan", price: 10000 },
    ]
  },

{
    id: "discord nitro",
    name: "Discord Nitro",
    img: "Gambar/dc.jpeg",
    variants: [
      { label: "PRIVATE — 1 Bulan", price: 35000 },
      { label: "PRIVATE — 2 Bulan", price: 65000 },
    ]
  },  

];

/* ============================
   PRODUK GAME
============================ */
const PRODUCTS_GAMES = [
  {id:'ml', name:'Mobile Legends Via Login', img:'Gambar/ml.jpeg', variants:[
    {label:'275 💎 ', price:65000},
    {label:'565 💎 ', price:125000},
    {label:'1155 💎 ', price:246000},
    {label:'1765 💎 ', price:358000},
    {label:'2975 💎 ', price:577000},
    {label:'6000 💎 ', price:1150000},

    {label:'Epic Bundle', price:69000},
    {label:'Elit Bundle', price:17000},
  ]},

{id:'ml-id', name:'Mobile Legends Via ID', img:'Gambar/ml.jpeg', variants:[
    {label:'28 💎 ', price:9000},
    {label:'56 💎 ', price:17000},
    {label:'85 💎 ', price:21000},
    {label:'113 💎 ', price:32000},
    {label:'140 💎 ', price:40000},
    {label:'170 💎 ', price:46000},
    {label:'240 💎 ', price:65000},
    {label:'296 💎 ', price:77500},
    {label:'355 💎 ', price:98000},
    {label:'405 💎 ', price:108000},
    {label:'568 💎 ', price:145000},
    {label:'875 💎 ', price:220000},
  ]},


{id:'ml-id', name:'Double Dm Via ID Region INA' , img:'Gambar/ml.jpeg', variants:[
    {label:'50 + 50 💎 ', price:16500},
    {label:'150 + 150 💎 ', price:47000},
    {label:'250 + 250 💎 ', price:77000},
    {label:'500 + 500 💎 ', price:147000},
  ]},

{id:'ml-br', name:'Double Dm Via ID Region Brazil', img:'Gambar/ml.jpeg', variants:[
    {label:'50 + 50 💎 ', price:14000},
    {label:'150 + 150 💎 ', price:33000},
    {label:'250 + 250 💎 ', price:52000},
    {label:'500 + 500 💎 ', price:103000},
  ]},

{id:'ml-my-sg', name:'Double Dm Via ID Region MY & SG', img:'Gambar/ml.jpeg', variants:[
    {label:'50 + 50 💎 ', price:18000},
    {label:'150 + 150 💎 ', price:43000},
    {label:'250 + 250 💎 ', price:66000},
    {label:'500 + 500 💎 ', price:130000},
  ]},

{id:'ml-ph', name:'Double Dm Via ID Region PH', img:'Gambar/ml.jpeg', variants:[
    {label:'50 + 50 💎 ', price:17000},
    {label:'150 + 150 💎 ', price:43000},
    {label:'250 + 250 💎 ', price:66000},
    {label:'500 + 500 💎 ', price:130000},
  ]},

  {id:'ff', name:'Free Fire', img:'Gambar/ff.jpeg', variants:[
    {label:'10 💎 ', price:2000},
    {label:'20 💎 ', price:4000},
    {label:'50 💎 ', price:11500},
    {label:'70 💎 ', price:12000},
    {label:'100 💎 ', price:16500},
    {label:'140 💎 ', price:21000},
    {label:'210 💎 ', price:31000},
    {label:'280 💎 ', price:39500},
    {label:'300 💎 ', price:41500},
    {label:'355 💎 ', price:48000},
    {label:'400 💎 ', price:52000},
    {label:'150 💎 ', price:66000},

    {label:'Weekly Card', price:29000},
    {label:'Monthly Card', price:82000},
    {label:'Bp Card', price:42000},
  ]},

  {id:'PUBG', name:'PUBG', img:'Gambar/pubg.jpeg', variants:[
    {label:'30 UC', price:9000},
    {label:'60 UC', price:17000},
    {label:'90 UC', price:24000},
    {label:'120 UC', price:32000},
    {label:'325 UC', price:75000},
    {label:'660 UC', price:145000},
    {label:'1800 UC', price:355000},
    {label:'3850 UC', price:710000},
    {label:'8100 UC', price:1400000},
  ]},

  {id:'Gensin', name:'Gensin Impact', img:'Gambar/gensin.jpeg', variants:[
    {label:'60 Crystal', price:15000},
    {label:'330 Crystal', price:62000},
    {label:'1090 Crystal', price:180000},

    {label:'Blessing Of The Welkin Moon', price:63000},
  ]},

  {id:'Roblox', name:'Roblox', img:'Gambar/roblox.jpeg', variants:[
    {label:'160 Robux', price:31000},
    {label:'240 Robux', price:45000},
    {label:'320 Robux', price:60000},
    {label:'400 Robux', price:70000},
    {label:'500 Robux', price:75000},
    {label:'1000 Robux', price:146000},
    {label:'1500 Robux', price:220000},
    {label:'1700 Robux', price:272000},
    {label:'2000 Robux', price:288000},
    {label:'4500 Robux', price:675000},

    {label:'450 Robux Prem', price:78000},
    {label:'1000 Robux Prem', price:150000},
  ]},

{id:'Roblox 2', name:'Voucher Roblox', img:'Gambar/roblox.jpeg', variants:[
    {label:'Gift Card 50K', price:55000},
    {label:'Gift Card 65K', price:73000},

    {label:'800 Robux Global', price:165000},
    {label:'2000 Robux Global', price:408000},
    {label:'4500 Robux Global', price:810000},
    {label:'10000 Robux Global', price:1650000},
  ]},

  {id:'COD Mobile', name:'COD Mobile', img:'Gambar/cod.png', variants:[
    {label:'63 CP', price:12000},
    {label:'128 CP', price:21000},
    {label:'321 CP', price:48000},
    {label:'645 CP', price:93000},
    {label:'800 CP', price:11000},
    {label:'1373 CP', price:182000},
    
  ]}

];

/* ============================
   GLOBAL VAR
============================ */
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const variantsBox = document.getElementById('variants');
const checkoutSummary = document.getElementById('checkoutSummary');
const btnCancel = document.getElementById('btnCancel');

let selectedProduct = null;
let selectedVariant = null;

/* ============================
   UTILITIES
============================ */
function money(n){ return 'Rp' + n.toLocaleString('id-ID'); }

/* ============================
   RENDER PRODUK
============================ */
function makeCard(p){
  const el = document.createElement('article');
  el.className = 'card';
  el.innerHTML = `
    <div class="service">
      <img src="${p.img}" alt="${p.name}">
      <div>
        <h3>${p.name}</h3>
        <div class="muted">Pilih varian di bawah</div>
      </div>
    </div>
    <div class="cta">
      <div class="muted">Mulai dari ${money(p.variants[0].price)}</div>
      <button class="btn ghost">Pilih</button>
    </div>
  `;
  el.querySelector('.btn').onclick = ()=>openModal(p);
  return el;
}

function renderProducts(list, containerId){
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  list.forEach(p=> container.appendChild(makeCard(p)));
}

renderProducts(PRODUCTS_APPS, 'products-apps');
renderProducts(PRODUCTS_GAMES, 'products-games');

/* ============================
   MODAL FUNCTION
============================ */
function openModal(product){
  selectedProduct = product;
  selectedVariant = null;

  modalImg.src = product.img;
  modalTitle.textContent = product.name;
  checkoutSummary.innerHTML = "Pilih varian terlebih dahulu.";
  variantsBox.innerHTML = "";

  product.variants.forEach((v)=>{
    const btn = document.createElement("button");
    btn.textContent = `${v.label} — ${money(v.price)}`;
    btn.onclick = ()=>selectVariant(v);
    variantsBox.appendChild(btn);
  });

  if (window.innerWidth <= 640){
    const original = [...variantsBox.querySelectorAll("button")];
    variantsBox.innerHTML = "";

    const title = document.createElement("div");
    title.className = "variant-accordion-title";
    title.textContent = "Pilih Varian";
    variantsBox.appendChild(title);

    const wrap = document.createElement("div");
    wrap.className = "variant-accordion-content";

    original.forEach(btn=>{
      const opt = document.createElement("div");
      opt.className = "variant-option-mobile";
      opt.textContent = btn.textContent;
      opt.onclick = ()=>{
        btn.click();
        title.textContent = opt.textContent;
        wrap.classList.remove("open");
      };
      wrap.appendChild(opt);
    });

    title.onclick = ()=>wrap.classList.toggle("open");
    variantsBox.appendChild(wrap);
  }

  modal.classList.remove('hidden');
}

function selectVariant(v){
  selectedVariant = v;
  checkoutSummary.innerHTML = `
    <strong>${selectedProduct.name}</strong><br>
    Varian: ${v.label}<br>
    Harga: <strong>${money(v.price)}</strong>
  `;
}

/* ============================
   EVENT
============================ */
closeModal.onclick = ()=>modal.classList.add('hidden');
btnCancel.onclick = ()=>modal.classList.add('hidden');

/* ============================
   TAB SWITCH
============================ */
document.querySelectorAll('.tab-btn').forEach(tab=>{
  tab.addEventListener('click', ()=>{
    document.querySelectorAll('.tab-btn').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    document.querySelectorAll('.products-grid').forEach(sec=>sec.classList.add('hidden'));
    document.getElementById('products-'+tab.dataset.tab).classList.remove('hidden');
  });
});

/* ============================
   WHATSAPP ORDER — FIXED
============================ */
document.getElementById("checkoutForm").addEventListener("submit", function(e){
  e.preventDefault();

  if(!selectedProduct){ alert("Pilih produk dulu!"); return; }
  if(!selectedVariant){ alert("Pilih varian dulu!"); return; }

  const buyerName = document.getElementById("buyerName").value.trim();
  const buyerWA = document.getElementById("buyerWA").value.trim();
  const buyerEmail = document.getElementById("buyerEmail").value.trim();
  const note = document.getElementById("note").value.trim() || "-";
  const pay = document.getElementById("paymentMethod").value;

  if(!buyerName || !buyerWA || !buyerEmail){
      alert("Isi semua data wajib!");
      return;
  }

  const msg = `
🔥 *${CONFIG.SITE_NAME} — Order Baru*

📦 Produk: *${selectedProduct.name}*
🔖 Varian: *${selectedVariant.label}*
💵 Harga: *${money(selectedVariant.price)}*

👤 *Data Pembeli*
Nama: ${buyerName}
WhatsApp: ${buyerWA}
Email: ${buyerEmail}
Catatan: ${note}

💳 Pembayaran: ${pay}

Terima kasih, admin!
`;

  const url = `https://wa.me/${CONFIG.OWNER_WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");

  modal.classList.add('hidden');

  const notif = document.createElement("div");
  notif.className = "notif-success";
  notif.textContent = "Pesan berhasil dikirim!";
  document.body.appendChild(notif);

  setTimeout(()=> notif.remove(), 2500);

  checkoutForm.reset();
});

/* ============================
   SCROLL TO PRODUCTS
============================ */
function scrollToProducts(){
  document.querySelector(".product-wrapper").scrollIntoView({ behavior: "smooth" });
}
