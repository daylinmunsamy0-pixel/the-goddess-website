const PRODUCTS = [
  // Hair Care
  {
    id: 'hair-growth-oil',
    name: 'Hair Growth Oil',
    category: 'hair-care',
    badge: 'Best Seller',
    tagline: 'Promotes hair growth, strengthens roots and reduces hair fall',
    priceText: 'R 180.00 – R 320.00',
    priceNumber: 180,
    sizes: ['50ml - R 180.00', '100ml - R 320.00'],
    image: 'assets/products-motion/Hair Growth Oil 100ml.png',
    fallbackImage: 'assets/products-motion/Hair Growth Oil 50ml.png',
    description: 'A nourishing herbal hair oil blend infused with Castor Oil, Garlic Oil, Fenugreek Seeds, Coconut Oil, Rosemary, Mustard Oil, Curry Leaves & Black Seed Oil to support a healthy scalp and stronger, fuller-looking hair.',
    ingredients: ['Castor Oil', 'Garlic Oil', 'Fenugreek Seeds', 'Coconut Oil', 'Rosemary', 'Mustard Oil', 'Curry Leaves', 'Black Seed Oil'],
    benefits: ['Promotes Hair Growth', 'Reduces Hair Fall', 'Strengthens Roots', 'Nourishes the Scalp', 'Stronger Healthier Hair']
  },
  // Spiritual Oils
  {
    id: 'rich-ritual-abundance-oil',
    name: 'Rich Ritual Abundance Oil',
    category: 'spiritual-oils',
    badge: 'Best Seller',
    tagline: 'Welcoming opportunities, prosperity and success',
    priceText: 'R 220.00',
    priceNumber: 220,
    size: '10ml',
    image: 'assets/products-motion/Rich Rituals.png',
    fallbackImage: 'assets/products-motion/Rich Rituals.png',
    description: 'A rich fragrance blend inspired by Deep Red, Miss Dior & Euphoria, infused with Citrine, Green Aventurine & Pyrite crystals for magnetic wealth, prosperity, and confidence.',
    crystals: ['Citrine', 'Green Aventurine', 'Pyrite'],
    intention: 'I am worthy of abundance. I attract prosperity, opportunities and success with ease.',
    benefits: ['Abundance', 'Prosperity', 'Confidence', 'Welcoming Opportunities']
  },
  {
    id: 'inner-grace-oil',
    name: 'Inner Grace Self Love & Healing Oil',
    category: 'spiritual-oils',
    badge: 'New Ritual',
    tagline: 'Reconnect with your inner softness, compassion and healing',
    priceText: 'R 220.00',
    priceNumber: 220,
    size: '10ml',
    image: 'assets/products-motion/Inner grace.png',
    fallbackImage: 'assets/products-motion/Inner grace.png',
    description: 'A beautiful Nag Champa blend infused with Rose Quartz, Rhodonite & Moonstone crystals designed to honour emotional healing and unconditional self-love.',
    crystals: ['Rose Quartz', 'Rhodonite', 'Moonstone'],
    intention: 'I choose myself with love. I honour my healing. I am worthy of the love I give to others.',
    benefits: ['Self Love', 'Emotional Healing', 'Compassion', 'Reconnecting with Inner Softness']
  },
  {
    id: 'cloaked-protection-oil',
    name: 'Cloaked Protection Oil',
    category: 'spiritual-oils',
    badge: 'Essential',
    tagline: 'Shield your energy and establish sacred boundaries',
    priceText: 'R 220.00',
    priceNumber: 220,
    size: '10ml',
    image: 'assets/products-motion/Cloaked.png',
    fallbackImage: 'assets/products-motion/Cloaked.png',
    description: 'A powerful blend of Euphoria, Vanilla, Palo Santo, Frankincense & Dragon\'s Blood, infused with Black Obsidian, Smoky Quartz & Clear Quartz crystals to ward off unwanted energies.',
    crystals: ['Black Obsidian', 'Smoky Quartz', 'Clear Quartz'],
    intention: 'My energy is protected. My boundaries are strong. I am untouchable.',
    benefits: ['Shield Your Energy', 'Strengthen Spirit', 'Ward Off Unwanted Energy', 'Protect Altar & Space']
  },
  {
    id: 'serenity-wellness-oil',
    name: 'Serenity Emotional Wellness Oil',
    category: 'spiritual-oils',
    badge: 'New Ritual',
    tagline: 'Inner peace, calmness, and grounding emotional release',
    priceText: 'R 220.00',
    priceNumber: 220,
    size: '10ml',
    image: 'assets/products-motion/Serenity.png',
    fallbackImage: 'assets/products-motion/Serenity.png',
    description: 'A soothing blend of Lemongrass & Lavender infused with Amethyst, Howlite & Labradorite crystals to restore emotional equilibrium and quiet the mind.',
    crystals: ['Amethyst', 'Howlite', 'Labradorite'],
    intention: 'I choose peace. I release what weighs on me. I am calm, grounded and at ease.',
    benefits: ['Emotional Balance', 'Inner Peace', 'Calmness', 'Deep Serenity']
  },
  {
    id: 'unapologetic-oil',
    name: 'Unapologetic Main Character Oil',
    category: 'spiritual-oils',
    badge: 'Best Seller',
    tagline: 'Bold magnetism, confidence, and stepping into your power',
    priceText: 'R 220.00',
    priceNumber: 220,
    size: '10ml',
    image: 'assets/products-motion/Unappologetic.png',
    fallbackImage: 'assets/products-motion/Unappologetic.png',
    description: 'A captivating blend inspired by Kim Kardashian, Heat, Downtown & Vanilla, infused with Sunstone, Carnelian, Tiger\'s Eye & Clear Quartz crystals for undeniable magnetism.',
    crystals: ['Sunstone', 'Carnelian', 'Tiger\'s Eye', 'Clear Quartz'],
    intention: 'I take up space. I trust my power. I am confident, magnetic and unapologetically me.',
    benefits: ['Confidence', 'Personal Power', 'Bold Energy', 'Main Character Alignment']
  },
  // Mists
  {
    id: 'dispel-cleansing-mist',
    name: 'Dispel Cleansing Mist',
    category: 'mists',
    badge: 'Best Seller',
    tagline: 'Clear stagnant energies from your aura, home, and sacred altar',
    priceText: 'R 180.00',
    priceNumber: 180,
    image: 'assets/products-motion/Dispel Cleansing Mist.png',
    fallbackImage: 'assets/products-motion/Dispel Cleansing Mist.png',
    description: 'A powerful cleansing mist infused with Palo Santo, Frankincense, White Sage & Dragon\'s Blood with an Evil Eye-inspired scent for instant auric and space clearing.',
    ingredients: ['Palo Santo', 'Frankincense', 'White Sage', 'Dragon\'s Blood', 'Evil Eye Scent'],
    benefits: ['Aura Cleansing', 'Energetic Cleanse', 'Space Clearing', 'Energetic Reset', 'Immediate Refresh']
  },
  {
    id: 'love-attraction-mist',
    name: 'Love Attraction Mist',
    category: 'mists',
    badge: 'Popular',
    tagline: 'Cultivate open-hearted harmony and magnetic warmth',
    priceText: 'R 180.00',
    priceNumber: 180,
    image: 'assets/love-attraction-mist.jpg',
    fallbackImage: 'assets/love-attraction-mist.jpg',
    description: 'A delicate botanical mist formulated to uplift frequency, inspire affectionate feelings, and invite sweet romantic and self-love vibrations.',
    benefits: ['Heart Harmony', 'Aura Softening', 'Loving Connections', 'Uplifting Scent']
  },
  // Ritual Goods
  {
    id: 'manifestation-candle',
    name: 'Manifestation Candle',
    category: 'ritual-goods',
    badge: 'Essential',
    tagline: 'Hand-poured candle charged with intention and sacred herbs',
    priceText: 'R 150.00',
    priceNumber: 150,
    image: 'assets/manifestation-candle.jpg',
    fallbackImage: 'assets/manifestation-candle.jpg',
    description: 'Created to anchor focus during prayers, intention-setting, or moon ceremonies. Burns cleanly with soothing natural aromatics.',
    benefits: ['Focus Anchor', 'Ceremonial Atmosphere', 'Intentional Space']
  },
  {
    id: 'protection-crystal-set',
    name: 'Protection Crystal Set',
    category: 'ritual-goods',
    badge: 'Essential',
    tagline: 'Curated cleansing & shielding tumbled gemstones',
    priceText: 'R 250.00',
    priceNumber: 250,
    image: 'assets/protection-crystal-set.jpg',
    fallbackImage: 'assets/protection-crystal-set.jpg',
    description: 'A harmonious collection of grounding stones selected to purify electromagnetic and emotional environments, keeping personal boundaries impenetrable.',
    benefits: ['Grounding Energy', 'Aura Shielding', 'Sacred Altar Placement']
  }
];

const CART_KEY = 'goddess-cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function cartCount() {
  return getCart().reduce((sum, item) => sum + (item.qty || 1), 0);
}

function calculateSubtotal(cart) {
  return cart.reduce((sum, item) => sum + ((item.priceNumber || 0) * (item.qty || 1)), 0);
}

function updateCartUI() {
  // Update cart badge counters across the site
  const count = cartCount();
  document.querySelectorAll('[data-cart-count]').forEach(el => {
    el.textContent = count;
  });

  const cartList = document.querySelector('[data-cart-list]');
  const cartSummary = document.querySelector('[data-cart-summary]');
  if (!cartList) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartList.innerHTML = `
      <div class="empty-cart-state" style="text-align: center; padding: 40px 20px;">
        <div style="font-size: 3rem; margin-bottom: 15px;">🏺</div>
        <h3>Your ritual basket is empty</h3>
        <p style="color: #666; max-width: 420px; margin: 10px auto 25px;">Explore our botanical hair care, intentional spiritual oils, and sacred mists to nourish your crown and spirit.</p>
        <a class="btn" href="shop.html">Explore Offerings</a>
      </div>
    `;
    if (cartSummary) cartSummary.style.display = 'none';
    return;
  }

  const subtotal = calculateSubtotal(cart);
  const freeShippingThreshold = 700;
  const qualifiesForFreeShipping = subtotal >= freeShippingThreshold;

  cartList.innerHTML = cart.map(item => `
    <div class="cart-row" data-id="${item.id}" data-key="${item.key || item.id}">
      <img src="${item.image || item.fallbackImage}" width="75" height="75" alt="${item.name}" onerror="this.src='${item.fallbackImage || 'assets/hero.jpg'}'">
      <div class="cart-details" style="flex: 1;">
        <strong>${item.name}${item.variant ? ` <span class="cart-variant">(${item.variant})</span>` : ''}</strong>
        <div class="price" style="margin: 4px 0;">${item.priceText || ('R ' + item.priceNumber + '.00')}</div>
        <div class="qty-control" style="display: flex; align-items: center; gap: 8px; margin-top: 8px;">
          <button type="button" class="qty-btn" onclick="decrementCartItem('${item.key || item.id}')" aria-label="Decrease quantity">−</button>
          <span class="qty-val" style="font-weight: 600; min-width: 20px; text-align: center;">${item.qty}</span>
          <button type="button" class="qty-btn" onclick="incrementCartItem('${item.key || item.id}')" aria-label="Increase quantity">+</button>
          <button type="button" class="remove-btn" onclick="removeCartItem('${item.key || item.id}')" style="margin-left: 14px; background: none; border: 0; color: #805914; text-decoration: underline; cursor: pointer; font-size: 11px;">Remove</button>
        </div>
      </div>
      <div class="cart-item-total" style="font-weight: 600; font-size: 15px;">
        R ${(item.priceNumber * item.qty).toFixed(2)}
      </div>
    </div>
  `).join('');

  if (cartSummary) {
    cartSummary.style.display = 'block';
    
    // Build prefilled WhatsApp checkout message
    const lines = cart.map(i => `• ${i.name}${i.variant ? ` (${i.variant})` : ''} (Qty: ${i.qty}) - R ${(i.priceNumber * i.qty).toFixed(2)}`);
    const waText = encodeURIComponent(
      `Hello The Goddess, I would like to place an order:\n\n${lines.join('\n')}\n\nEstimated Subtotal: R ${subtotal.toFixed(2)}\n\nPlease advise on payment and delivery.`
    );

    cartSummary.innerHTML = `
      <div class="cart-totals-box">
        <div class="summary-row" style="display:flex; justify-content:space-between; margin-bottom: 10px;"><span>Basket Subtotal:</span> <strong>R ${subtotal.toFixed(2)}</strong></div>
        <div class="summary-row" style="display:flex; justify-content:space-between; margin-bottom: 10px;">
          <span>Shipping:</span> 
          <span>${qualifiesForFreeShipping ? '<strong style="color: #2e7d32;">FREE</strong>' : 'Calculated at checkout (Free over R700)'}</span>
        </div>
        ${!qualifiesForFreeShipping ? `<p class="shipping-hint" style="font-size: 11px; color: #805914; margin: 8px 0;">Add R ${(freeShippingThreshold - subtotal).toFixed(2)} more to qualify for <strong>Free Shipping</strong>!</p>` : ''}
        <hr style="border: 0; border-top: 1px solid var(--line); margin: 15px 0;">
        <div class="summary-row total-row" style="display:flex; justify-content:space-between; font-size: 18px; font-weight: 700; margin-bottom: 20px;">
          <span>Total:</span>
          <span class="total-amount" style="color: var(--gold);">R ${subtotal.toFixed(2)}</span>
        </div>
        <div class="cart-actions-group" style="display: flex; flex-direction: column; gap: 10px;">
          <a class="btn" style="background: #25D366; border-color: #25D366; text-align: center;" href="https://wa.me/27622660210?text=${waText}" target="_blank" rel="noopener">
            💬 Order via WhatsApp (062 266 0210)
          </a>
          <button class="btn alt" onclick="clearCart()" style="cursor: pointer;">Clear Basket</button>
          <a class="btn alt" style="text-align: center;" href="shop.html">Continue Shopping</a>
        </div>
      </div>
    `;
  }
}

function getProductVariant(product, variantValue) {
  if (!product.sizes || !product.sizes.length) return null;
  const index = Math.max(0, Math.min(product.sizes.length - 1, Number(variantValue || 0)));
  const label = product.sizes[index] || product.sizes[0];
  const match = label.match(/^(.*?)\s*-\s*R\s*([\d.]+)/i);
  return {
    index,
    label: match ? match[1].trim() : label,
    price: match ? Number(match[2]) : product.priceNumber
  };
}

function addToCart(id, variantValue) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const variant = getProductVariant(p, variantValue);
  const variantKey = variant ? `${p.id}::${variant.index}` : p.id;
  const cart = getCart();
  const existing = cart.find(x => (x.key || x.id) === variantKey);
  const priceNumber = variant ? variant.price : p.priceNumber;
  const variantLabel = variant ? variant.label : '';

  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({
      key: variantKey,
      id: p.id,
      name: p.name,
      variant: variantLabel,
      priceText: variant ? `R ${priceNumber.toFixed(2)}` : p.priceText,
      priceNumber,
      image: variant && variant.index === 0 ? (p.fallbackImage || p.image) : p.image,
      fallbackImage: p.fallbackImage,
      qty: 1
    });
  }
  saveCart(cart);
  updateCartUI();
  showToast(`${p.name}${variantLabel ? ` (${variantLabel})` : ''} added to your ritual basket.`);
}

function incrementCartItem(id) {
  const cart = getCart();
  const item = cart.find(x => (x.key || x.id) === id);
  if (item) {
    item.qty++;
    saveCart(cart);
    updateCartUI();
  }
}

function decrementCartItem(id) {
  let cart = getCart();
  const item = cart.find(x => (x.key || x.id) === id);
  if (item) {
    item.qty--;
    if (item.qty <= 0) {
      cart = cart.filter(x => (x.key || x.id) !== id);
    }
    saveCart(cart);
    updateCartUI();
  }
}

function removeCartItem(id) {
  let cart = getCart();
  cart = cart.filter(x => (x.key || x.id) !== id);
  saveCart(cart);
  updateCartUI();
  showToast('Item removed from basket.');
}

function clearCart() {
  if (confirm('Clear all items from your basket?')) {
    saveCart([]);
    updateCartUI();
    showToast('Basket cleared.');
  }
}

function showToast(msg) {
  let t = document.querySelector('[data-toast]');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    t.setAttribute('data-toast', '');
    t.setAttribute('aria-live', 'polite');
    t.setAttribute('role', 'status');
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2600);
}

function renderProductCard(p) {
  const detailLabel = p.category === 'hair-care' ? 'Botanicals & Guide' :
    p.category === 'mists' ? 'Botanicals & Usage' :
    p.category === 'ritual-goods' ? 'Ritual Guide' : 'Intention & Details';

  return `
    <article class="product" data-product-card data-badge="${p.badge || ''}" data-category="${p.category}">
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      <img class="product-image" src="${p.image}" alt="${p.name}" loading="lazy" decoding="async" onerror="this.src='${p.fallbackImage || 'assets/hero.jpg'}'">
      <div class="product-body">
        <h3>${p.name}</h3>
        <div class="price">${p.priceText}</div>
        <div class="product-tagline">${p.tagline}</div>
        ${p.sizes ? `<label class="product-size-select">
          <span>Size</span>
          <select data-product-size="${p.id}" aria-label="Choose ${p.name} size">
            ${p.sizes.map((size, index) => `<option value="${index}">${size}</option>`).join('')}
          </select>
        </label>` : ''}
        <div class="product-actions">
          <button type="button" class="btn-detail" data-view-product="${p.id}">
            ${detailLabel}
          </button>
          <button type="button" class="btn" data-add="${p.id}">
            Add to basket
          </button>
        </div>
      </div>
    </article>`;
}

function setupCategoryProducts() {
  const grid = document.querySelector('[data-category-page]');
  if (!grid) return;

  const category = grid.dataset.categoryPage;
  const products = PRODUCTS.filter(p => p.category === category);
  grid.innerHTML = products.map(renderProductCard).join('');

  const countEl = document.querySelector('[data-product-count]');
  if (countEl) {
    countEl.textContent = `${products.length} ritual offering${products.length === 1 ? '' : 's'}`;
  }
}

function setupFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  if (!buttons.length) return;
  
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = (btn.dataset.filter || btn.textContent.trim()).toLowerCase();
      
      const productCards = document.querySelectorAll('[data-product-card]');
      let visibleCount = 0;
      productCards.forEach(card => {
        const badge = (card.dataset.badge || '').toLowerCase();
        const category = (card.dataset.category || '').toLowerCase();
        
        let match = false;
        if (filter === 'all' || filter.includes('all')) {
          match = true;
        } else if (filter.includes('best') || filter.includes('sellers')) {
          match = badge.includes('best');
        } else if (filter.includes('new')) {
          match = badge.includes('new');
        } else if (category.includes(filter)) {
          match = true;
        }
        
        card.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });

      const countEl = document.querySelector('[data-product-count]');
      if (countEl) {
        countEl.textContent = `${visibleCount} ritual offering${visibleCount === 1 ? '' : 's'}`;
      }
    });
  });
}

function setupSharedLayout() {
  const headerHost = document.querySelector('[data-site-header]');
  const footerHost = document.querySelector('[data-site-footer]');
  const page = document.body.dataset.page || '';

  // Keep the shared layout in JavaScript rather than loading it with fetch().
  // This makes the site work when opened directly from index.html (file://)
  // as well as when served from a normal web server.
  const headerHTML = "    <div class=\"topbar\">\n      <div class=\"container inner\">\n        <div class=\"chips\">\n          <span>\n            Natural\n          </span>\n          <span>\n            Botanical\n          </span>\n          <span>\n            Spiritual\n          </span>\n          <span>\n            Intentional\n          </span>\n        </div>\n        <div>\n          Free shipping over R700 | WhatsApp Orders:\n          <a href=\"https://wa.me/27622660210\" style=\"color: inherit; text-decoration: underline;\">\n            062 266 0210\n          </a>\n        </div>\n      </div>\n    </div>\n    <header class=\"header\">\n      <div class=\"container nav\">\n        <a class=\"brand\" href=\"index.html\">\n          <img src=\"assets/the-goddess-logo.webp\" alt=\"The Goddess\" style=\"width: 50px; height: 50px; object-fit: contain;\">\n          <div>\n            <div class=\"brand-name\">\n              THE GODDESS\n            </div>\n            <div class=\"brand-sub\">\n              RITUALS FOR YOUR CROWN, SPIRIT &amp; SPACE\n            </div>\n          </div>\n        </a>\n        <button class=\"menu-toggle\" data-menu-toggle aria-label=\"Open menu\" aria-expanded=\"false\" aria-controls=\"site-navigation\" type=\"button\">\n          \u2630\n        </button>\n        <nav class=\"navlinks\" data-nav id=\"site-navigation\" aria-label=\"Primary navigation\">\n          <a href=\"index.html\" data-nav-link=\"home\">\n            Home\n          </a>\n          <a href=\"shop.html\" data-nav-link=\"shop\">\n            Shop All\n          </a>\n          <a href=\"hair-care.html\" data-nav-link=\"hair-care\">\n            Hair Care\n          </a>\n          <a href=\"spiritual-oils.html\" data-nav-link=\"spiritual-oils\">\n            Spiritual Oils\n          </a>\n          <a href=\"mists.html\" data-nav-link=\"mists\">\n            Mists\n          </a>\n          <a href=\"ritual-goods.html\" data-nav-link=\"ritual-goods\">\n            Ritual Goods\n          </a>\n          <a href=\"rituals.html\" data-nav-link=\"rituals\">\n            Rituals\n          </a>\n          <a href=\"our-story.html\" data-nav-link=\"our-story\">\n            Our Story\n          </a>\n        </nav>\n        <div class=\"actions\">\n          <a href=\"shop.html\" data-nav-link=\"shop\" title=\"Browse offerings\" aria-label=\"Browse offerings\">\n            \u2315\n          </a>\n          <a href=\"our-story.html\" data-nav-link=\"our-story\" title=\"Our Story\" aria-label=\"Our Story\">\n            \u2659\n          </a>\n          <a class=\"cart\" href=\"cart.html\" title=\"View Ritual Basket\" aria-label=\"View Ritual Basket\">\n            \ud83d\uded2\n            <span class=\"cart-badge\" data-cart-count>\n              0\n            </span>\n          </a>\n        </div>\n      </div>\n    </header>\n";
  const footerHTML = "    <footer class=\"footer\">\n      <div class=\"container footer-grid\">\n        <div>\n          <img src=\"assets/the-goddess-logo.webp\" width=\"70\" alt=\"The Goddess\">\n          <div class=\"brand-name\">\n            THE GODDESS\n          </div>\n          <div class=\"brand-sub\">\n            RITUALS FOR YOUR CROWN, SPIRIT &amp; SPACE\n          </div>\n        </div>\n        <div>\n          <h4>\n            Quick Links\n          </h4>\n          <a href=\"shop.html\">\n            Shop All\n          </a>\n          <br>\n          <a href=\"hair-care.html\">\n            Hair Care\n          </a>\n          <br>\n          <a href=\"spiritual-oils.html\">\n            Spiritual Oils\n          </a>\n          <br>\n          <a href=\"mists.html\">\n            Mists\n          </a>\n          <br>\n          <a href=\"ritual-goods.html\">\n            Ritual Goods\n          </a>\n          <br>\n          <a href=\"our-story.html\">\n            Our Story\n          </a>\n          <br>\n          <a href=\"rituals.html\">\n            Rituals\n          </a>\n        </div>\n        <div>\n          <h4>\n            Customer Care\n          </h4>\n          <p style=\"font-size: 11px; line-height: 1.8; color: #5a4b3c;\">\n            Free delivery on orders over R700.\n            <br>\n            Direct WhatsApp assistance &amp; custom recommendations.\n            <br>\n            Natural \u2726 Cruelty-Free \u2726 Mindfully Handcrafted\n          </p>\n        </div>\n        <div>\n          <h4>\n            Stay Connected\n          </h4>\n          <div class=\"social-links\" aria-label=\"Social media and contact links\">\n            <span class=\"social-icon facebook\" role=\"img\" aria-label=\"Facebook: The Goddess\" title=\"Facebook: The Goddess\">\n              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M14 8h3V4h-3c-3.1 0-5 1.9-5 5v3H6v4h3v4h4v-4h3.2l.8-4H13V9c0-.6.4-1 1-1Z\"/></svg>\n            </span>\n            <a class=\"social-icon whatsapp\" href=\"https://wa.me/27622660210\" target=\"_blank\" rel=\"noopener\" aria-label=\"WhatsApp: 062 266 0210\" title=\"WhatsApp: 062 266 0210\">\n              <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M12 3.2a8.7 8.7 0 0 0-7.5 13.1L3.2 21l4.8-1.3A8.8 8.8 0 1 0 12 3.2Zm0 15.8a7 7 0 0 1-3.6-1l-.3-.2-2.8.8.8-2.7-.2-.3A7 7 0 1 1 12 19Zm3.9-5.2c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.7 1-.1.2-.3.2-.5.1-.2-.1-.9-.3-1.7-1-.6-.5-1-1.1-1.1-1.3-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3 0-.5l-.7-1.7c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.8.6.3 1.1.4 1.5.5.6.2 1.1.1 1.5.1.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1-.2-.3-.2-.5-.3Z\"/></svg>\n            </a>\n          </div>\n          <a class=\"whatsapp\" href=\"https://wa.me/27622660210\" target=\"_blank\" rel=\"noopener\">\n            Order via WhatsApp\n            <br>\n            <strong>\n              062 266 0210\n            </strong>\n          </a>\n        </div>\n      </div>\n      <div class=\"copyright\">\n        <div class=\"container\">\n          \u00a9 2026 The Goddess. All rights reserved.\n          <span style=\"float:right\">\n            Natural \u2726 Spiritual \u2726 Powerful \u2726 Intentional\n          </span>\n        </div>\n      </div>\n    </footer>\n";

  if (headerHost) headerHost.innerHTML = headerHTML;
  if (footerHost) footerHost.innerHTML = footerHTML;

  document.querySelectorAll('[data-nav-link]').forEach(link => {
    const isActive = link.dataset.navLink === page;
    if (isActive) {
      link.style.fontWeight = '700';
      link.style.color = 'var(--gold)';
      link.setAttribute('aria-current', 'page');
    }
  });
}

function setupMenu() {
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (!toggle || !nav) return;

  let lastFocused = null;
  const focusable = () => [...nav.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')];

  const setMenuState = (open) => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('menu-open', open);
    if (open) {
      lastFocused = document.activeElement;
      const first = focusable()[0];
      if (first && window.matchMedia('(max-width: 700px)').matches) requestAnimationFrame(() => first.focus());
    } else if (lastFocused && typeof lastFocused.focus === 'function') {
      if (window.matchMedia('(max-width: 700px)').matches) lastFocused.focus();
    }
  };

  setMenuState(false);

  toggle.addEventListener('click', () => setMenuState(!nav.classList.contains('open')));

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenuState(false));
  });

  document.addEventListener('keydown', (event) => {
    if (!nav.classList.contains('open')) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      setMenuState(false);
      return;
    }
    if (event.key === 'Tab' && window.matchMedia('(max-width: 700px)').matches) {
      const items = focusable();
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    }
  });

  window.addEventListener('resize', () => {
    if (!window.matchMedia('(max-width: 700px)').matches && nav.classList.contains('open')) setMenuState(false);
  }, {passive:true});
}

// Modal for viewing product intention & details
function openProductModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  let modal = document.getElementById('product-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'product-modal';
    modal.className = 'modal-backdrop';
    document.body.appendChild(modal);
  }

  const crystalsHtml = p.crystals ? `
    <div class="modal-chip-group">
      <strong>Infused Crystals:</strong>
      <div class="modal-chips">${p.crystals.map(c => `<span>✦ ${c}</span>`).join('')}</div>
    </div>` : '';

  const ingredientsHtml = p.ingredients ? `
    <div class="modal-chip-group">
      <strong>Herbal Botanicals:</strong>
      <div class="modal-chips">${p.ingredients.map(i => `<span>🌿 ${i}</span>`).join('')}</div>
    </div>` : '';

  const intentionHtml = p.intention ? `
    <blockquote class="modal-intention">
      <div class="intention-label">RITUAL INTENTION</div>
      “${p.intention}”
    </blockquote>` : '';

  modal.innerHTML = `
    <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
      <button class="modal-close" type="button" onclick="closeProductModal()" aria-label="Close product details">✕</button>
      <div class="modal-grid">
        <div class="modal-img-wrap">
          <img class="product-image" src="${p.image}" alt="${p.name}" loading="lazy" decoding="async" onerror="this.src='${p.fallbackImage || 'assets/hero.jpg'}'">
        </div>
        <div class="modal-content">
          <span class="eyebrow">${p.category ? p.category.replace('-', ' ').toUpperCase() : 'RITUAL OFFERING'}</span>
          <h2 id="product-modal-title">${p.name}</h2>
          <div class="modal-price">${p.priceText} ${p.size ? `• <span class="size-tag">${p.size}</span>` : ''}</div>
          <p class="modal-desc">${p.description || p.tagline}</p>
          ${crystalsHtml}
          ${ingredientsHtml}
          ${intentionHtml}
          ${p.sizes ? `<label class="product-size-select modal-size-select">
            <span>Choose size</span>
            <select data-modal-size="${p.id}" aria-label="Choose ${p.name} size">
              ${p.sizes.map((size, index) => `<option value="${index}">${size}</option>`).join('')}
            </select>
          </label>` : ''}
          <div class="modal-actions">
            <button type="button" class="btn" data-modal-add="${p.id}">Add To Ritual Basket</button>
            <a class="btn alt" href="https://wa.me/27622660210?text=${encodeURIComponent('Hi The Goddess, I want to inquire about ' + p.name)}" target="_blank" rel="noopener">Inquire via WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.classList.add('modal-open');
  const close = modal.querySelector('.modal-close');
  if (close) requestAnimationFrame(() => close.focus());
  modal._previousFocus = document.activeElement;
}


function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
    if (modal._previousFocus && typeof modal._previousFocus.focus === 'function') modal._previousFocus.focus();
  }
}

// Bind event handlers
function bindEvents() {
  document.addEventListener('click', e => {
    const addBtn = e.target.closest('[data-add]');
    if (addBtn) {
      e.preventDefault();
      const sizeSelect = document.querySelector(`[data-product-size=\"${addBtn.dataset.add}\"]`);
      addToCart(addBtn.dataset.add, sizeSelect ? sizeSelect.value : undefined);
      return;
    }

    const modalAddBtn = e.target.closest('[data-modal-add]');
    if (modalAddBtn) {
      e.preventDefault();
      const id = modalAddBtn.dataset.modalAdd;
      const select = document.querySelector(`[data-modal-size=\"${id}\"]`);
      addToCart(id, select ? select.value : undefined);
      closeProductModal();
      return;
    }

    const detailBtn = e.target.closest('[data-view-product]');
    if (detailBtn) {
      e.preventDefault();
      openProductModal(detailBtn.dataset.viewProduct);
      return;
    }

    if (e.target.id === 'product-modal') {
      closeProductModal();
    }
  });

  document.addEventListener('keydown', e => {
    const modal = document.getElementById('product-modal');
    if (!modal || !modal.classList.contains('open')) return;
    if (e.key === 'Escape') { closeProductModal(); return; }
    if (e.key === 'Tab') {
      const items = [...modal.querySelectorAll('button, a[href], select, input, [tabindex]:not([tabindex=\"-1\"])')].filter(el => !el.disabled);
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
}

function setupImagePerformance() {
  document.querySelectorAll('img').forEach(img => {
    if (img.closest('.hero-motion') || img.closest('.header')) {
      img.loading = 'eager';
      img.decoding = 'async';
      return;
    }
    if (!img.hasAttribute('loading')) img.loading = 'lazy';
    if (!img.hasAttribute('decoding')) img.decoding = 'async';
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await setupSharedLayout();
  setupMenu();
  setupCategoryProducts();
  setupFilters();
  bindEvents();
  setupImagePerformance();
  updateCartUI();
});


/* Motion hero interaction */
(function(){
  const hero=document.querySelector('.hero-motion');
  if(!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const stage=hero.querySelector('.hero-stage');
  const depthEls=hero.querySelectorAll('[data-hero-depth]');
  let raf=0, tx=0, ty=0, mx=0, my=0;

  hero.addEventListener('pointermove', function(e){
    const r=hero.getBoundingClientRect();
    mx=((e.clientX-r.left)/r.width-.5);
    my=((e.clientY-r.top)/r.height-.5);
    if(!raf) raf=requestAnimationFrame(render);
  }, {passive:true});

  hero.addEventListener('pointerleave', function(){
    mx=0; my=0;
    if(!raf) raf=requestAnimationFrame(render);
  });

  function render(){
    raf=0;
    depthEls.forEach(el=>{
      const d=parseFloat(el.dataset.heroDepth)||.5;
      const x=mx*d*20, y=my*d*14;
      if(el.classList.contains('hero-copy')){
        el.style.setProperty('--hero-y', (my*-8)+'px');
      }else{
        el.style.translate=x+'px '+y+'px';
      }
    });
  }

  let last=0;
  window.addEventListener('scroll',function(){
    const now=performance.now();
    if(now-last<30) return;
    last=now;
    const r=hero.getBoundingClientRect();
    if(r.bottom<0 || r.top>innerHeight) return;
    const progress=Math.max(-1,Math.min(1,(innerHeight/2-(r.top+r.height/2))/(r.height/2)));
    stage.style.transform='translate3d(0,'+(progress*-12)+'px,0)';
  },{passive:true});
})();


/* Scroll-driven ritual journey */
(function(){
  const root=document.querySelector('[data-motion-journey]');
  if(!root) return;
  const data=[
    {intent:'ABUNDANCE',title:'Rich Rituals',text:'Citrine, green aventurine & pyrite — a ritual made for expansion, magnetism and receiving more of what you desire.',image:'assets/products-motion/Rich Rituals.png',href:'spiritual-oils.html'},
    {intent:'GROWTH',title:'Hair Growth Oil',text:'Castor oil, garlic, fenugreek & black seed — a botanical crown ritual created to nourish, strengthen and support healthy-looking hair.',image:'assets/products-motion/Hair Growth Oil 100ml.png',href:'hair-care.html'},
    {intent:'PROTECTION',title:'Cloaked',text:'Obsidian, smoky quartz & palo santo — a grounding ritual for boundaries, energetic reset and sacred space.',image:'assets/products-motion/Cloaked.png',href:'spiritual-oils.html'},
    {intent:'GRACE',title:'Inner Grace',text:'Rose quartz, rhodonite & moonstone — a soft, heart-led ritual for tenderness, self-connection and emotional ease.',image:'assets/products-motion/Inner grace.png',href:'spiritual-oils.html'}
  ];
  const img=root.querySelector('[data-journey-image]');
  const intent=root.querySelector('[data-journey-intent]');
  const title=root.querySelector('[data-journey-title]');
  const text=root.querySelector('[data-journey-text]');
  const link=root.querySelector('[data-journey-link]');
  const index=root.querySelector('.journey-index');
  const progress=root.querySelector('.journey-progress i');
  const steps=[...root.querySelectorAll('[data-journey-step]')];
  let active=0, switching=false;
  function paint(i,instant=false){
    if(i===active && !instant) return;
    active=i;
    const d=data[i];
    steps.forEach((s,n)=>{s.classList.toggle('is-active',n===i);s.setAttribute('aria-selected',n===i?'true':'false')});
    progress.style.transform=`scaleX(${(i+1)/data.length})`;
    if(instant){img.src=d.image;intent.textContent=d.intent;title.textContent=d.title;text.textContent=d.text;link.href=d.href;index.textContent=`0${i+1} / 04`;return;}
    switching=true;img.classList.add('is-changing');
    window.setTimeout(()=>{img.src=d.image;img.alt=d.title;intent.textContent=d.intent;title.textContent=d.title;text.textContent=d.text;link.href=d.href;index.textContent=`0${i+1} / 04`;img.classList.remove('is-changing');switching=false},220);
  }
  steps.forEach((s,i)=>s.addEventListener('click',()=>paint(i)));
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
  if(!reduce.matches && 'IntersectionObserver' in window){
    const obs=new IntersectionObserver(entries=>{
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(!visible || switching) return;
      const rect=root.getBoundingClientRect();
      const travel=Math.max(1,root.offsetHeight-window.innerHeight);
      const p=Math.max(0,Math.min(.999,(-rect.top)/travel));
      paint(Math.min(data.length-1,Math.floor(p*data.length)));
    },{threshold:[0,.25,.5,.75,1]});
    obs.observe(root);
    let ticking=false;
    window.addEventListener('scroll',()=>{
      if(ticking) return;ticking=true;
      requestAnimationFrame(()=>{
        const rect=root.getBoundingClientRect();
        const travel=Math.max(1,root.offsetHeight-window.innerHeight);
        const p=Math.max(0,Math.min(.999,(-rect.top)/travel));
        const i=Math.min(data.length-1,Math.floor(p*data.length));
        if(i!==active) paint(i);
        ticking=false;
      });
    },{passive:true});
  }
  if(!reduce.matches){
    const stage=root.querySelector('.journey-stage');
    stage.addEventListener('pointermove',e=>{const r=stage.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;img.style.transform=`translate3d(${x*10}px,${y*8}px,0) rotate(${x*-3-3}deg)`},{passive:true});
    stage.addEventListener('pointerleave',()=>{img.style.transform='translate3d(0,0,0) rotate(-3deg)'},{passive:true});
  }
})();


/* Lightweight section reveal observer */
(function(){
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets=[...document.querySelectorAll('body[data-page="home"] .category, body[data-page="home"] .product, body[data-page="home"] .intent, body[data-page="home"] .ritual, body[data-page="home"] .testimonials')];
  targets.forEach((el,i)=>{el.setAttribute('data-reveal','');el.style.transitionDelay=reduce?'0ms':`${Math.min(i%5,4)*70}ms`});
  if(reduce || !('IntersectionObserver' in window)){targets.forEach(el=>el.classList.add('is-revealed'));return;}
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-revealed');io.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -8% 0px'});
  targets.forEach(el=>io.observe(el));
})();
