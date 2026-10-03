/* ============================================================
   NADAN ACHAR — Main JavaScript (Full Version with Images)
   Handles: products, cart, filters, forms, navigation
   ============================================================ */

/* ---------- PRODUCT DATABASE (Kerala Pickles) ---------- */
const PRODUCTS = [
  // ============ VEGETARIAN (8 items) ============
  { id: 1,  name: "Mango Achar",          malayalam: "മാങ്ങ അച്ചാർ",       image: "images/mango.jpg",              price: 249,  oldPrice: 320,  rating: 4.9, reviews: 1240, category: "veg",    badge: "bestseller", desc: "Sun-dried raw mangoes pickled in cold-pressed sesame oil with traditional Kerala spices. The taste of home.", weight: "500g" },
  { id: 2,  name: "Lime Achar",           malayalam: "നാരങ്ങ അച്ചാർ",      image: "images/lime.webp",              price: 199,  oldPrice: 260,  rating: 4.8, reviews: 890,  category: "veg",    badge: "bestseller", desc: "Tangy Kerala limes preserved in brine with green chillies and curry leaves. Perfect with kanji.", weight: "500g" },
  { id: 3,  name: "Kaduku Achar",         malayalam: "കടുക് അച്ചാർ",       image: "images/kaduk.png",              price: 279,  oldPrice: 350,  rating: 4.7, reviews: 560,  category: "veg",    badge: "",           desc: "Mustard-forward achar with a sharp, pungent kick. A Thrissur specialty passed down generations.", weight: "500g" },
  { id: 4,  name: "Garlic Achar",         malayalam: "വെളുത്തുള്ളി അച്ചാർ",  image: "images/garlic-pickle.jpeg",     price: 299,  oldPrice: 380,  rating: 4.9, reviews: 780,  category: "veg",    badge: "spicy",      desc: "Whole garlic cloves slow-pickled with red chilli and fenugreek. Bold, pungent, unforgettable.", weight: "500g" },
  { id: 5,  name: "Gooseberry Achar",     malayalam: "നെല്ലിക്ക അച്ചാർ",    image: "images/Gooseberry.jpg",         price: 259,  oldPrice: 320,  rating: 4.6, reviews: 340,  category: "veg",    badge: "",           desc: "Amla pickled with rock salt and traditional spices. Rich in Vitamin C, great for digestion.", weight: "500g" },
  { id: 6,  name: "Bitter Gourd Achar",   malayalam: "പാവയ്ക്ക അച്ചാർ",     image: "images/bitterguard.jpg",        price: 229,  oldPrice: 290,  rating: 4.5, reviews: 210,  category: "veg",    badge: "",           desc: "Kerala-style pavakka achar with tamarind and jaggery. Sweet, sour, and bitter — perfectly balanced.", weight: "500g" },
  { id: 7,  name: "Tomato Achar",         malayalam: "തക്കാളി അച്ചാർ",     image: "images/tomato.jpg",             price: 219,  oldPrice: 280,  rating: 4.6, reviews: 290,  category: "veg",    badge: "new",        desc: "Ripe Kerala tomatoes pickled with garlic and green chilli. A modern family favourite.", weight: "500g" },
  { id: 8,  name: "Ginger Achar",         malayalam: "ഇഞ്ചി അച്ചാർ",       image: "images/ginger.jpg",             price: 269,  oldPrice: 340,  rating: 4.7, reviews: 380,  category: "veg",    badge: "",           desc: "Spicy ginger achar with curry leaves and asafoetida. Warming and aromatic.", weight: "500g" },

  // ============ NON-VEG (5 items) ============
  { id: 9,  name: "Fish Achar",           malayalam: "മീൻ അച്ചാർ",         image: "images/fish.webp",         price: 449,  oldPrice: 550,  rating: 4.9, reviews: 980,  category: "nonveg", badge: "bestseller", desc: "Kerala seer fish marinated in spices, sun-dried, then pickled in sesame oil. A coastal delicacy.", weight: "400g" },
  { id: 10, name: "Prawn Achar",          malayalam: "ചെമ്മീൻ അച്ചാർ",    image: "images/prawns.jpeg",             price: 499,  oldPrice: 620,  rating: 4.8, reviews: 620,  category: "nonveg", badge: "spicy",      desc: "Fresh prawns from Kochi backwaters, pickled in fiery red masala. Not for the faint-hearted.", weight: "400g" },
  { id: 11, name: "Chicken Achar",        malayalam: "ചിക്കൻ അച്ചാർ",      image: "images/chicken.webp",           price: 429,  oldPrice: 540,  rating: 4.7, reviews: 410,  category: "nonveg", badge: "",           desc: "Boneless chicken pieces pickled in Kerala-style masala. A party favourite.", weight: "400g" },
  { id: 12, name: "Beef Achar",           malayalam: "ബീഫ് അച്ചാർ",        image: "images/beef.jpg",               price: 479,  oldPrice: 590,  rating: 4.8, reviews: 350,  category: "nonveg", badge: "new",        desc: "Slow-cooked beef pickled with black pepper and coconut oil. A Malabar specialty.", weight: "400g" },
  { id: 13, name: "Sardine Achar",        malayalam: "മത്തി അച്ചാർ",       image: "images/sardnine.jpg",           price: 369,  oldPrice: 460,  rating: 4.6, reviews: 280,  category: "nonveg", badge: "",           desc: "Tiny sardines pickled whole with kashmiri chilli and vinegar. Tangy and addictive.", weight: "400g" },

  // ============ COMBOS (4 items) ============
  { id: 14, name: "Kerala Trio Combo",    malayalam: "കേരള ട്രിയോ",       image: "images/trio.jpg",         price: 649,  oldPrice: 840,  rating: 4.9, reviews: 520,  category: "combo",  badge: "bestseller", desc: "Mango + Lime + Kaduku Achar in one beautiful gift box. The perfect introduction to Kerala pickles.", weight: "3 × 500g" },
  { id: 15, name: "Spice Lover's Box",    malayalam: "സ്പൈസ് ബോക്സ്",     image: "images/spicy.jpg",        price: 799,  oldPrice: 1050, rating: 4.8, reviews: 380,  category: "combo",  badge: "spicy",      desc: "Garlic + Prawn + Fish Achar for those who love heat. Comes in a premium wooden crate.", weight: "3 × 400g" },
  { id: 16, name: "Festival Gift Hamper", malayalam: "ഓണം ഹാംപർ",         image: "images/combo-festival.jpg",     price: 1299, oldPrice: 1699, rating: 5.0, reviews: 220,  category: "combo",  badge: "new",        desc: "5 assorted pickles in a handcrafted Kerala hamper. Perfect for Onam, Vishu, and weddings.", weight: "5 × 400g" },
  { id: 17, name: "Veg Lovers Combo",     malayalam: "വെജ് കോംബോ",        image: "images/combo-veg.jpg",          price: 599,  oldPrice: 780,  rating: 4.7, reviews: 290,  category: "combo",  badge: "",           desc: "Mango + Gooseberry + Bitter Gourd Achar. Pure vegetarian goodness.", weight: "3 × 500g" },
];

const ALL_PRODUCTS = [...PRODUCTS];

/* ---------- CART (localStorage) ---------- */
let cart = JSON.parse(localStorage.getItem('nadan_cart') || '[]');

function saveCart() {
  localStorage.setItem('nadan_cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('#cartCount, .cart-count').forEach(el => {
    el.textContent = count;
  });
}

function addToCart(id, qty = 1) {
  const product = ALL_PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty += qty;
  else cart.push({ id, qty });
  saveCart();
  showToast(`✅ ${product.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  if (document.getElementById('cartItems')) renderCart();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart();
  if (document.getElementById('cartItems')) renderCart();
}

/* ---------- TOAST ---------- */
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

/* ---------- PRODUCT CARD RENDERER ---------- */
function productCard(p) {
  const badgeClass = p.badge === 'spicy' ? 'spicy' : p.badge === 'new' ? 'new' : '';
  const badgeHTML = p.badge
    ? `<span class="product-badge ${badgeClass}">${p.badge}</span>`
    : '';
  return `
    <div class="product-card">
      <a href="product.html?id=${p.id}" class="product-image">
        ${badgeHTML}
        <img src="${p.image}" alt="${p.name} - Kerala Pickle" loading="lazy"
             onerror="this.onerror=null; this.style.display='none'; this.parentElement.insertAdjacentHTML('beforeend','<span style=\\'font-size:5rem;position:absolute;\\'>🥒</span>');">
      </a>
      <div class="product-body">
        <h3><a href="product.html?id=${p.id}">${p.name}</a></h3>
        <div class="malayalam">${p.malayalam}</div>
        <p class="product-desc">${p.desc}</p>
        <div class="product-rating">★★★★★ <span>${p.rating} (${p.reviews})</span></div>
        <div class="product-footer">
          <div class="product-price">₹${p.price} <small><s>₹${p.oldPrice}</s></small></div>
          <button class="add-btn" onclick="event.preventDefault(); addToCart(${p.id})">+ Add</button>
        </div>
      </div>
    </div>
  `;
}

/* ---------- HOME: BESTSELLERS ---------- */
function renderBestsellers() {
  const el = document.getElementById('bestsellers');
  if (!el) return;
  const best = ALL_PRODUCTS.filter(p => p.badge === 'bestseller').slice(0, 4);
  el.innerHTML = best.map(productCard).join('');
}

/* ---------- SHOP PAGE ---------- */
let shopState = { cat: 'all', price: 'all', sort: 'popular' };

function applyFilters() {
  let list = [...ALL_PRODUCTS];

  // category filter
  if (shopState.cat === 'spicy') {
    list = list.filter(p => p.badge === 'spicy');
  } else if (shopState.cat === 'veg') {
    list = list.filter(p => p.category === 'veg');
  } else if (shopState.cat === 'nonveg') {
    list = list.filter(p => p.category === 'nonveg');
  } else if (shopState.cat === 'combo') {
    list = list.filter(p => p.category === 'combo');
  }

  // price filter
  if (shopState.price === 'low')  list = list.filter(p => p.price < 300);
  if (shopState.price === 'mid')  list = list.filter(p => p.price >= 300 && p.price <= 600);
  if (shopState.price === 'high') list = list.filter(p => p.price > 600);

  // sort
  if (shopState.sort === 'low')    list.sort((a, b) => a.price - b.price);
  if (shopState.sort === 'high')   list.sort((a, b) => b.price - a.price);
  if (shopState.sort === 'rating') list.sort((a, b) => b.rating - a.rating);

  const grid  = document.getElementById('productGrid');
  const count = document.getElementById('resultCount');
  if (!grid) return;
  grid.innerHTML = list.length
    ? list.map(productCard).join('')
    : '<p style="grid-column:1/-1;text-align:center;color:#888;padding:40px;">No pickles match your filters.</p>';
  if (count) count.textContent = `Showing ${list.length} pickle${list.length !== 1 ? 's' : ''}`;
}

function resetFilters() {
  shopState = { cat: 'all', price: 'all', sort: 'popular' };
  document.querySelectorAll('input[name="cat"]').forEach(r => r.checked = r.value === 'all');
  document.querySelectorAll('input[name="price"]').forEach(r => r.checked = r.value === 'all');
  const s = document.getElementById('sortSelect');
  if (s) s.value = 'popular';
  applyFilters();
}

function initShop() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  // read query params
  const params = new URLSearchParams(location.search);
  const catParam = params.get('cat');
  if (catParam) {
    shopState.cat = catParam;
    const radio = document.querySelector(`input[name="cat"][value="${catParam}"]`);
    if (radio) radio.checked = true;

    // Update page heading for better UX
    const catNames = {
      veg:    'Vegetarian Pickles',
      nonveg: 'Non-Vegetarian Pickles',
      combo:  'Gift Combos',
      spicy:  'Extra Spicy Pickles'
    };
    const catSubs = {
      veg:    '8 delicious vegetarian pickles made the traditional Kerala way.',
      nonveg: '5 coastal non-veg pickles — fish, prawn, chicken, beef & sardine.',
      combo:  'Beautifully curated gift hampers for every occasion.',
      spicy:  'For those who love their pickles with a fiery kick.'
    };
    const heading = document.querySelector('.page-header h1');
    const subhead = document.querySelector('.page-header p');
    if (heading && catNames[catParam]) heading.textContent = catNames[catParam];
    if (subhead && catSubs[catParam])  subhead.textContent = catSubs[catParam];
  }
  applyFilters();

  document.querySelectorAll('input[name="cat"]').forEach(r => {
    r.addEventListener('change', e => { shopState.cat = e.target.value; applyFilters(); });
  });
  document.querySelectorAll('input[name="price"]').forEach(r => {
    r.addEventListener('change', e => { shopState.price = e.target.value; applyFilters(); });
  });
  const sortSel = document.getElementById('sortSelect');
  if (sortSel) sortSel.addEventListener('change', e => { shopState.sort = e.target.value; applyFilters(); });
}

/* ---------- PRODUCT DETAIL PAGE ---------- */
let currentQty = 1;

function renderProductDetail() {
  const wrap = document.getElementById('productDetail');
  if (!wrap) return;

  const id = parseInt(new URLSearchParams(location.search).get('id')) || 1;
  const p  = ALL_PRODUCTS.find(x => x.id === id) || ALL_PRODUCTS[0];

  document.title = `${p.name} · Nadan Achar`;
  const bc = document.getElementById('bcName');
  if (bc) bc.textContent = p.name;

  wrap.innerHTML = `
    <div class="detail-image">
      <img src="${p.image}" alt="${p.name}"
           onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='<span style=\\'font-size:12rem\\'>🥒</span>';">
    </div>
    <div class="detail-info">
      <h1>${p.name}</h1>
      <div class="detail-malayalam">${p.malayalam}</div>
      <div class="detail-rating">★★★★★ ${p.rating} · ${p.reviews} reviews</div>
      <div class="detail-price">₹${p.price} <small>₹${p.oldPrice}</small></div>
      <p class="detail-desc">${p.desc}</p>
      <div class="detail-meta">
        <div><strong>Weight</strong>${p.weight}</div>
        <div><strong>Category</strong>${
          p.category === 'veg' ? 'Vegetarian' :
          p.category === 'nonveg' ? 'Non-Vegetarian' : 'Gift Combo'
        }</div>
        <div><strong>Shelf Life</strong>12 months</div>
        <div><strong>Made In</strong>Thrissur, Kerala</div>
      </div>
      <div class="detail-actions">
        <div class="qty-selector">
          <button onclick="changeQty(-1)">−</button>
          <span id="qtyDisplay">1</span>
          <button onclick="changeQty(1)">+</button>
        </div>
        <button class="btn btn-primary" onclick="addToCart(${p.id}, currentQty)">Add to Cart 🛒</button>
        <button class="btn btn-outline" onclick="addToCart(${p.id}, currentQty); location.href='cart.html'">Buy Now</button>
      </div>
    </div>
  `;

  // related products
  const rel = document.getElementById('relatedGrid');
  if (rel) {
    const related  = ALL_PRODUCTS.filter(x => x.id !== p.id && x.category === p.category).slice(0, 4);
    const fallback = ALL_PRODUCTS.filter(x => x.id !== p.id).slice(0, 4);
    rel.innerHTML = (related.length ? related : fallback).map(productCard).join('');
  }
}

function changeQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  const el = document.getElementById('qtyDisplay');
  if (el) el.textContent = currentQty;
}

/* ---------- CART PAGE ---------- */
function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const sumEl   = document.getElementById('cartSummary');
  if (!itemsEl || !sumEl) return;

  if (!cart.length) {
    itemsEl.innerHTML = `
      <div class="empty-cart">
        <div class="emoji">🫙</div>
        <h3>Your cart is empty</h3>
        <p>Add some delicious Kerala pickles to get started!</p>
        <a href="shop.html" class="btn btn-primary">Browse Pickles →</a>
      </div>`;
    sumEl.innerHTML = '';
    return;
  }

  let subtotal = 0;
  itemsEl.innerHTML = cart.map(item => {
    const p = ALL_PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    const line = p.price * item.qty;
    subtotal += line;
    return `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${p.image}" alt="${p.name}"
               onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='<span style=\\'font-size:2.5rem\\'>🥒</span>';">
        </div>
        <div class="cart-item-info">
          <h4>${p.name}</h4>
          <div class="malayalam">${p.malayalam}</div>
          <div class="cart-item-price">₹${p.price} × ${item.qty} = ₹${line}</div>
        </div>
        <div class="cart-item-controls">
          <div class="qty-selector">
            <button onclick="updateQty(${p.id}, -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="updateQty(${p.id}, 1)">+</button>
          </div>
          <button class="remove-btn" onclick="removeFromCart(${p.id})" title="Remove">🗑️</button>
        </div>
      </div>`;
  }).join('');

  const shipping = subtotal >= 599 ? 0 : 60;
  const total    = subtotal + shipping;

  sumEl.innerHTML = `
    <h3>Order Summary</h3>
    <div class="summary-row"><span>Subtotal</span><span>₹${subtotal}</span></div>
    <div class="summary-row"><span>Shipping</span><span class="${shipping === 0 ? 'free' : ''}">${shipping === 0 ? 'FREE 🎉' : '₹' + shipping}</span></div>
    ${shipping > 0 ? `<div class="summary-row" style="font-size:0.8rem;color:var(--brown);">Add ₹${599 - subtotal} more for free shipping</div>` : ''}
    <div class="summary-row total"><span>Total</span><span>₹${total}</span></div>
    <button class="btn btn-primary btn-full" onclick="checkout()">Proceed to Checkout →</button>
    <a href="shop.html" class="btn btn-outline btn-full" style="margin-top:12px;">Continue Shopping</a>
    <p style="text-align:center;font-size:0.8rem;color:var(--gray);margin-top:16px;">🔒 Secure checkout · Free returns</p>
  `;
}

function checkout() {
  showToast('🎉 Order placed! Confirmation sent to your email.');
  cart = [];
  saveCart();
  setTimeout(() => { if (document.getElementById('cartItems')) renderCart(); }, 400);
}

/* ---------- FORMS ---------- */
function handleNewsletter(e) {
  e.preventDefault();
  const email = e.target.querySelector('input').value;
  showToast(`🎁 Thanks! 10% off code sent to ${email}`);
  e.target.reset();
}

function handleContact(e) {
  e.preventDefault();
  showToast("✅ Message sent! We'll reply within 24 hours.");
  e.target.reset();
}

/* ---------- MOBILE NAV ---------- */
function initNav() {
  const burger = document.getElementById('hamburger');
  const nav    = document.getElementById('nav');
  if (!burger || !nav) return;
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open');
    nav.classList.remove('open');
  }));
}

/* ---------- STICKY HEADER SHADOW ---------- */
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  initNav();
  initHeaderScroll();
  renderBestsellers();
  initShop();
  renderProductDetail();
  renderCart();
});