const servicesData = {
    1: {
        title: "Vintage T-Shirt Restoration",
        shortDesc: "Bring your favorite faded tees back to life with our expert restoration.",
        bannerImage: "../images/ab tshirt.jpeg",
        overviewImage: "../images/restoration.png",
        overview: "Our Vintage T-Shirt Restoration service focuses on preserving the authentic feel and history of well-loved garments while repairing damage, revitalizing colors, and stabilizing the fabric. From repairing micro-holes to gentle stain removal without harsh chemicals, we ensure your favorite tees last another generation.\n\nWe utilize specialized vintage stitching machines and source period-correct threads to repair seams, reinforce thin spots, and preserve the original cotton texture. Our team is trained in historical textile conservation, meaning we treat every graphic print and single-stitch hem with museum-grade precision.",
        features: [
            "Gentle eco-friendly stain removal",
            "Micro-hole and tear stabilization",
            "Color revitalization treatments",
            "Collar and hem reshaping"
        ],
        benefits: [
            "Extends the lifespan of rare items",
            "Maintains the vintage wash and feel",
            "Increases resale value of collector tees",
            "Eco-friendly process reduces textile waste"
        ],
        pricing: [
            { plan: "Basic", desc: "Wash & minor hole repair", price: "$45" },
            { plan: "Standard", desc: "Includes stain removal & reshaping", price: "$85" },
            { plan: "Premium", desc: "Full restoration & color correction", price: "$150" }
        ],
        process: [
            { step: "1", title: "Inspection", desc: "Detailed assessment of the fabric's condition." },
            { step: "2", title: "Treatment", desc: "Targeted cleaning and structural repairs." },
            { step: "3", title: "Finishing", desc: "Final pressing and stabilization process." }
        ],
        gallery: [
            "../images/vintage-tee-1.png",
            "../images/vintage-tee-2.png",
            "../images/vintage-tee-3.png"
        ]
    },
    2: {
        title: "Custom Vintage Design",
        shortDesc: "Transform existing vintage pieces into unique, modern, custom garments.",
        bannerImage: "../images/services1.jpeg",
        overviewImage: "../images/services2.jpeg",
        overview: "Our Custom Vintage Design service takes high-quality vintage textiles or garments and reworks them into entirely new silhouettes. Whether it's turning a 70s dress into a modern two-piece set, or combining multiple fabrics into a patchwork jacket, our tailors create bespoke pieces that no one else has.\n\nThis process is highly collaborative. We start by analyzing the materials of the source garments, identifying strength points, and drafting a custom pattern. We integrate modern hardware (such as solid brass zippers or reinforced buttons) while keeping the original labels and historical highlights intact.",
        features: [
            "Complete garment reshaping and tailoring",
            "Fabric splicing and patchwork",
            "Modern hardware integration",
            "Custom dyeing and distressing"
        ],
        benefits: [
            "Own a 1-of-1 unique piece",
            "Sustainable approach to new fashion",
            "Perfect fit customized to your body",
            "Story and provenance of the original garment preserved"
        ],
        pricing: [
            { plan: "Basic", desc: "Simple alterations and modernizing", price: "$95" },
            { plan: "Standard", desc: "Silhouette changes & hardware updates", price: "$180" },
            { plan: "Premium", desc: "Full redesign & fabric combination", price: "$350+" }
        ],
        process: [
            { step: "1", title: "Consultation", desc: "Discussing vision and measurements." },
            { step: "2", title: "Deconstruction", desc: "Taking apart the original garment." },
            { step: "3", title: "Reconstruction", desc: "Sewing the new bespoke piece together." }
        ],
        gallery: [
            "../images/services1.jpeg",
            "../images/ser4.webp",
            "../images/ser5.jpeg"
        ]
    },
    3: {
        title: "Denim Repair",
        shortDesc: "Expert darning, patching, and reviving of your raw and vintage denim.",
        bannerImage: "../images/ser3.jpeg",
        overviewImage: "../images/ser3.jpeg",
        overview: "Denim only gets better with age, but blowouts and tears are inevitable. Our Denim Repair service utilizes authentic vintage machinery and traditional Sashiko darning techniques to repair your jeans seamlessly or add visible, artistic mending patches that enhance the character of the denim.\n\nWe use a vintage chainstitch hemmer and raw cotton thread matching the indigo wash of your piece. By reinforcing pocket bags, darning the crotch area, and reconstructing frayed buttonholes, we restore structural integrity without sacrificing the natural wear patterns and honeycombs.",
        features: [
            "Invisible crotch blowout repair",
            "Traditional Sashiko hand-mending",
            "Hardware replacement (rivets/buttons)",
            "Hemming with original chainstitch"
        ],
        benefits: [
            "Save your perfectly broken-in jeans",
            "Prevent small tears from expanding",
            "Add unique character with visible mending",
            "Dramatically lower cost vs. replacement"
        ],
        pricing: [
            { plan: "Basic", desc: "Small tear darning or simple hem", price: "$35" },
            { plan: "Standard", desc: "Crotch blowout repair", price: "$75" },
            { plan: "Premium", desc: "Full revamp with Sashiko & hardware", price: "$140" }
        ],
        process: [
            { step: "1", title: "Assessment", desc: "Identifying all weak points in the denim." },
            { step: "2", title: "Stabilization", desc: "Reinforcing areas around the tear." },
            { step: "3", title: "Darning", desc: "Weaving new threads into the damaged area." }
        ],
        gallery: [
            "../images/ser3.jpeg",
            "../images/ser6.jpeg",
            "../images/ser7.webp"
        ]
    },
    4: {
        title: "Retro Outfit Styling",
        shortDesc: "Personalized styling sessions to create the perfect authentic retro look.",
        bannerImage: "../images/ser4.webp",
        overviewImage: "../images/ser4.webp",
        overview: "Struggling to put together a cohesive vintage look? Our Retro Outfit Styling connects you with expert stylists who understand the nuances of 60s, 70s, 80s, and 90s fashion. We curate full outfits from our archive that match your personal taste, body type, and the specific era you want to channel.\n\nEach styling project begins with a deep dive into your personal brand and preferred fashion eras. We build a comprehensive style board, select archival pieces, and style them with modern footwear or accessories to create a look that feels authentic, high-end, and completely timeless.",
        features: [
            "1-on-1 virtual or in-person consultation",
            "Era-specific wardrobe curation",
            "Accessory integration",
            "Personalized style lookbook"
        ],
        benefits: [
            "Save time searching through racks",
            "Achieve an authentic, not costume, look",
            "Discover new silhouettes that flatter you",
            "Grow your eye for future vintage shopping"
        ],
        pricing: [
            { plan: "Basic", desc: "1 Look curated online", price: "$50" },
            { plan: "Standard", desc: "3 Looks + 1-hour consultation", price: "$150" },
            { plan: "Premium", desc: "Full wardrobe overhaul + Lookbook", price: "$400" }
        ],
        process: [
            { step: "1", title: "Discovery", desc: "Filling out a style questionnaire." },
            { step: "2", title: "Curation", desc: "Stylists pull pieces from the archive." },
            { step: "3", title: "Fitting", desc: "Trying on and finalizing the outfits." }
        ],
        gallery: [
            "../images/ser4.webp",
            "../images/urban archmist.webp",
            "../images/kit1.webp"
        ]
    },
    5: {
        title: "Vintage Collection Supply",
        shortDesc: "Wholesale sourcing of premium vintage lots for retailers and designers.",
        bannerImage: "../images/ser5.jpeg",
        overviewImage: "../images/archive-display.png",
        overview: "For boutique owners and designers, finding high-quality vintage at scale is difficult. Our Vintage Collection Supply leverages our global network of pickers to provide curated wholesale bundles. Whether you need 50 perfect condition band tees or 100 pairs of Grade-A Levi's, we handle the sourcing, grading, and authentication.\n\nWe offer tailored collection supply services for film sets, fashion editorials, and retail boutiques. Every lot is graded, washed, and authenticated. We catalog each item's era, origin, and design details, providing you with a complete provenance document that adds unique value to your inventory.",
        features: [
            "Category-specific bulk sourcing",
            "Rigorous authentication and grading",
            "Washed and ready-for-sale inventory",
            "Continuous supply chain management"
        ],
        benefits: [
            "Skip the grueling hand-picking process",
            "Guaranteed authenticity and grade",
            "Exclusive access to rare untouched collections",
            "Flexible order quantities to match your budget"
        ],
        pricing: [
            { plan: "Basic", desc: "Small bundle (20 items)", price: "$500+" },
            { plan: "Standard", desc: "Medium lot (50 items)", price: "$1200+" },
            { plan: "Premium", desc: "Category buyout (100+ items)", price: "$2500+" }
        ],
        process: [
            { step: "1", title: "Briefing", desc: "Defining the exact items, sizes, and eras needed." },
            { step: "2", title: "Sourcing", desc: "Our network hunts for the requested pieces." },
            { step: "3", title: "Processing", desc: "Grading, washing, and shipping the lot." }
        ],
        gallery: [
            "../images/ser5.jpeg",
            "../images/services1.jpeg",
            "../images/ser4.webp"
        ]
    },
    6: {
        title: "Premium Fabric Care",
        shortDesc: "Specialized cleaning and preservation for delicate and historic textiles.",
        bannerImage: "../images/ser6.jpeg",
        overviewImage: "../images/ser6.jpeg",
        overview: "Certain garments are too fragile for dry cleaners. Our Premium Fabric Care specializes in the preservation and cleaning of historic textiles, delicate silks, 1920s beadwork, and sensitive dyes. We use museum-grade archival practices to clean, neutralize odors, and safely store your most precious fashion investments.\n\nOur specialists test dye stability, fiber strength, and material composition before beginning any treatment. Using eco-friendly solvents, natural fiber conditioners, and controlled drying techniques, we extract stubborn stains and remove decades of storage odor without damaging the delicate structure.",
        features: [
            "Archival wet cleaning techniques",
            "Ozone chamber odor removal",
            "Museum-box acid-free packing",
            "Moth hole prevention treatments"
        ],
        benefits: [
            "Prevents deterioration of natural fibers",
            "Safely removes decades-old stains",
            "Protects high-value investment pieces",
            "Prolongs wearable life of museum-quality items"
        ],
        pricing: [
            { plan: "Basic", desc: "Ozone odor removal", price: "$40" },
            { plan: "Standard", desc: "Archival hand wash & press", price: "$90" },
            { plan: "Premium", desc: "Stain extraction & museum boxing", price: "$180" }
        ],
        process: [
            { step: "1", title: "Testing", desc: "Testing fabric strength and dye fastness." },
            { step: "2", title: "Treatment", desc: "Gentle cleaning in controlled baths." },
            { step: "3", title: "Preservation", desc: "Drying flat and packing in acid-free tissue." }
        ],
        gallery: [
            "../images/ser6.jpeg",
            "../images/ser5.jpeg",
            "../images/conatct2.jpeg"
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id');

    if (serviceId && servicesData[serviceId]) {
        renderService(servicesData[serviceId], serviceId);
    } else {
        document.querySelector('main').innerHTML = '<div class="container" style="padding:100px 0;text-align:center;"><h2>Service not found.</h2><a href="services.html" class="btn-contact">Back to Services</a></div>';
    }
});

function renderService(data, id) {
    const wrapper = document.querySelector('.service-details-wrapper');
    if (wrapper) {
        wrapper.setAttribute('data-service-id', id);
    }

    document.getElementById('sd-title').innerText = data.title;
    document.getElementById('sd-desc').innerText = data.shortDesc;
    document.getElementById('sd-banner-img').src = data.bannerImage;
    document.getElementById('sd-banner-img').alt = data.title;

    const overviewContainer = document.getElementById('sd-overview-text-container');
    if (overviewContainer) {
        overviewContainer.innerHTML = data.overview.split('\n\n').map(pText => `<p>${pText}</p>`).join('');
    }

    const overviewImg = document.getElementById('sd-overview-img');
    if (overviewImg) {
        overviewImg.src = data.overviewImage;
        overviewImg.alt = data.title;
    }

    const featuresContainer = document.getElementById('sd-features-list');
    featuresContainer.innerHTML = '';
    data.features.forEach(feature => {
        featuresContainer.innerHTML += `
            <div class="sd-list-item">
                <svg class="sd-list-item-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>${feature}</span>
            </div>
        `;
    });
    const benefitsContainer = document.getElementById('sd-benefits-list');
    benefitsContainer.innerHTML = '';
    data.benefits.forEach(benefit => {
        benefitsContainer.innerHTML += `
            <div class="sd-list-item">
                <svg class="sd-list-item-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>${benefit}</span>
            </div>
        `;
    });

    const pricingBody = document.getElementById('sd-pricing-body');
    pricingBody.innerHTML = '';
    data.pricing.forEach(tier => {
        pricingBody.innerHTML += `
            <tr>
                <td class="plan-name" data-label="Plan">${tier.plan}</td>
                <td data-label="Details">${tier.desc}</td>
                <td class="plan-price" data-label="Price">${tier.price}</td>
            </tr>
        `;
    });
    const processContainer = document.getElementById('sd-process-steps');
    processContainer.innerHTML = '';
    data.process.forEach(p => {
        processContainer.innerHTML += `
            <div class="sd-process-step">
                <div class="sd-process-number">${p.step}</div>
                <h4>${p.title}</h4>
                <p>${p.desc}</p>
            </div>
        `;
    });
    const galleryContainer = document.getElementById('sd-gallery-grid');
    galleryContainer.innerHTML = '';
    data.gallery.forEach(imgSrc => {
        galleryContainer.innerHTML += `
            <img src="${imgSrc}" alt="${data.title} Gallery Image">
        `;
    });
}
