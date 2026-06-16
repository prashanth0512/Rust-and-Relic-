
document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
    const productCards = Array.from(document.querySelectorAll('.product-card'));
    const sortSelect = document.querySelector('.sort-select');
    const priceRange = document.querySelector('.price-range');
    const currentPriceText = document.querySelector('.current-price');
    const categoryCheckboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
    const itemCountElement = document.querySelector('.item-count');

    let currentFilters = { categories: [], maxPrice: 1000 };

    function applyFilters() {
        let visibleCount = 0;
        productCards.forEach(card => {
            const dataCat = (card.getAttribute('data-category') || '').toLowerCase();
            const categoryEl = card.querySelector('.category');
            const textCat = categoryEl ? categoryEl.textContent.trim().toLowerCase() : '';
            const cat = dataCat || textCat;

            const priceEl = card.querySelector('.price');
            const price = priceEl ? parseFloat(priceEl.textContent.replace('$', '')) : 0;

            const checkboxMatch = currentFilters.categories.length === 0 ||
                currentFilters.categories.includes(cat);

            const priceMatch = price <= currentFilters.maxPrice;

            if (checkboxMatch && priceMatch) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        if (itemCountElement) {
            itemCountElement.textContent = `Showing ${visibleCount} Results`;
        }
    }

    function applySort(order) {
        const sortedCards = [...productCards].sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.price')?.textContent.replace('$', '') || 0);
            const priceB = parseFloat(b.querySelector('.price')?.textContent.replace('$', '') || 0);
            if (order.includes('Low to High')) return priceA - priceB;
            if (order.includes('High to Low')) return priceB - priceA;
            return 0;
        });
        productGrid.innerHTML = '';
        sortedCards.forEach(card => productGrid.appendChild(card));
        applyFilters();
    }

    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            currentFilters.categories = Array.from(categoryCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.parentElement.textContent.trim().toLowerCase());
            applyFilters();
        });
    });

    if (priceRange) {
        const maxProductPrice = Math.max(...productCards.map(c =>
            parseFloat(c.querySelector('.price')?.textContent.replace('$', '') || 0)));
        priceRange.max = Math.ceil(maxProductPrice / 50) * 50;
        priceRange.value = priceRange.max;
        if (currentPriceText) currentPriceText.textContent = `$${priceRange.value}`;
        currentFilters.maxPrice = parseFloat(priceRange.value);
        priceRange.addEventListener('input', e => {
            const val = e.target.value;
            if (currentPriceText) currentPriceText.textContent = `$${val}`;
            currentFilters.maxPrice = parseFloat(val);
            applyFilters();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', e => applySort(e.target.value));
    }
    applyFilters();
});
