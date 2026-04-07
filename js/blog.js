document.addEventListener('DOMContentLoaded', () => {


    document.addEventListener('click', (e) => {
        const target = e.target;

        if (target.tagName.toLowerCase() === 'button' &&
            target.textContent.trim() === 'Add to Cart' &&
            target.classList.contains('btn')) {
            alert('Item added to cart successfully!');
        }

        if (target.tagName.toLowerCase() === 'button' &&
            target.textContent.trim() === 'Add Bundle to Cart' &&
            target.classList.contains('btn')) {
            alert('Bundle added to cart successfully!');
        }
    });
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(btn => {
        btn.addEventListener('click', () => {
            const faqItem = btn.closest('.faq-item');
            document.querySelectorAll('.faq-item.active').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
            faqItem.classList.toggle('active');
        });
    });

    const searchInput = document.querySelector('.blog-search-input');
    const discoverBtn = document.querySelector('.discover-btn');

    function performBlogSearch() {
        if (!searchInput) return;
        const query = searchInput.value.toLowerCase().trim();
        if (!query) {
            alert('Please enter a search term.');
            return;
        }
        const spotlightTitle = document.querySelector('.spotlight-title');
        if (spotlightTitle && (query.includes('1964') || query.includes('heritage') || query.includes('odyssey') ||
            spotlightTitle.textContent.toLowerCase().includes(query))) {
            spotlightTitle.scrollIntoView({ behavior: 'smooth', block: 'center' });
            const section = spotlightTitle.closest('.spotlight-section') || spotlightTitle.closest('.spotlight-content');
            if (section) {
                section.style.outline = '3px solid #b05e3f';
                section.style.outlineOffset = '8px';
                section.style.borderRadius = '8px';
                setTimeout(() => { section.style.outline = 'none'; }, 2500);
            }
            return;
        }
        const blogCards = document.querySelectorAll('.blog-card');
        let found = false;
        blogCards.forEach(card => {
            const titleEl = card.querySelector('.blog-card-title');
            const descEl = card.querySelector('.blog-card-desc');
            if (titleEl) {
                const title = titleEl.textContent.toLowerCase();
                const desc = descEl ? descEl.textContent.toLowerCase() : '';
                if (title.includes(query) || desc.includes(query)) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    card.style.outline = '3px solid #b05e3f';
                    card.style.outlineOffset = '4px';
                    setTimeout(() => { card.style.outline = 'none'; }, 2500);
                    found = true;
                }
            }
        });

        if (!found) {
            alert('No articles found matching "' + query + '".');
        }
    }

    if (discoverBtn) {
        discoverBtn.addEventListener('click', performBlogSearch);
    }
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performBlogSearch();
            }
        });
    }
});
