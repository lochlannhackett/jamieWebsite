// Works data structure
const works = [
    {
        folder: "cat & girl",
        title: "cat & girl",
        imageCount: 3,
        basePath: "works/jamie-20260512T202735Z-3-001/jamie/cat & girl/",
        images: [
            "cat & girl 1.jpeg",
            "cat & girl 2.jpeg",
            "cat & girl 3.JPG"
        ]
    },
    {
        folder: "one more plateful of you",
        title: "One more plateful of you",
        imageCount: 5,
        basePath: "works/jamie-20260512T202735Z-3-001/jamie/one more plateful of you/",
        images: [
            "One more plateful of you 1.JPG",
            "One more plateful of you 2.PNG",
            "One more plateful of you 3.PNG",
            "One more plateful of you 4.PNG",
            "One more plateful of you 5.PNG"
        ]
    },
    {
        folder: "Say yes",
        title: "Say yes",
        imageCount: 2,
        basePath: "works/jamie-20260512T202735Z-3-001/jamie/Say yes/",
        images: [
            "Say yes 1.jpg",
            "Say yes 2.PNG"
        ]
    },
    {
        folder: "dig down",
        title: "Dig Down",
        imageCount: 3,
        basePath: "works/jamie-20260512T202735Z-3-001/jamie/dig down/",
        images: [
            "dig down 1.PNG",
            "dig down 2.PNG",
            "dig down 3.PNG"
        ]
    },
    {
        folder: "everything",
        title: "everything I love, everything I hate, everything I need, everything I want to leave behind all in one place",
        imageCount: 1,
        basePath: "works/jamie-20260512T202735Z-3-001/jamie/everything/",
        images: [
            "everything I love, everything I hate, everything I need, everything I want to leave behind all in one place.PNG"
        ]
    },
    {
        folder: "BLAH! BLAH! BLAH!",
        title: "BLAH BLAH BLAH!",
        imageCount: 1,
        basePath: "works/jamie-20260512T202735Z-3-001/jamie/BLAH! BLAH! BLAH!/",
        images: [
            "BLAH BLAH BLAH!.JPG"
        ]
    },
    {
        folder: "something's in there",
        title: "something's in there",
        imageCount: 1,
        basePath: "works/jamie-20260512T202735Z-3-001/jamie/something's in there/",
        images: [
            "something's in there.JPG"
        ]
    },
    {
        folder: "she's messing with me",
        title: "she's messing with me",
        imageCount: 1,
        basePath: "works/jamie-20260512T202735Z-3-001/jamie/she's messing with me/",
        images: [
            "she's messing with me.PNG"
        ]
    },
    {
        folder: "dear me,,,,love me",
        title: "dear me,,,,love me",
        imageCount: 1,
        basePath: "works/jamie-20260512T202735Z-3-001/jamie/dear me,,,,love me/",
        images: [
            "dear me,,,,love me.jpg"
        ]
    },
    {
        folder: "i am who i am",
        title: "i am who i am",
        imageCount: 1,
        basePath: "works/jamie-20260512T202735Z-3-001/jamie/i am who i am/",
        images: [
            "i am who i am.jpeg"
        ]
    }
];

// Load works gallery
function loadWorksGallery() {
    const gridContainer = document.getElementById('works-grid');
    gridContainer.innerHTML = '';

    console.log('Loading works gallery with', works.length, 'works');

    works.forEach(work => {
        const workItem = document.createElement('div');
        workItem.className = 'work-item';
        workItem.onclick = () => {
            const url = `work-detail?work=${encodeURIComponent(work.folder)}`;
            console.log('Navigating to:', url);
            window.location.href = url;
        };

        const img = document.createElement('img');
        img.src = work.basePath + work.images[0];
        img.alt = work.title;
        img.onerror = () => {
            console.error(`Failed to load image: ${img.src}`);
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2YwZjBmMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+PC9zdmc+';
        };

        const title = document.createElement('div');
        title.className = 'work-title';
        title.textContent = work.title;

        workItem.appendChild(img);
        workItem.appendChild(title);
        gridContainer.appendChild(workItem);
    });

    console.log('Gallery loaded');
}

// Load work detail page
function loadWorkDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const workFolder = urlParams.get('work');

    console.log('URL:', window.location.href);
    console.log('Work folder from URL:', workFolder);
    console.log('Available works:', works.map(w => w.folder));

    if (!workFolder) {
        document.getElementById('work-content').innerHTML = '<div class="loading">No work specified. URL: ' + window.location.href + '</div>';
        return;
    }

    const work = works.find(w => w.folder === workFolder);

    console.log('Found work:', work);

    if (!work) {
        document.getElementById('work-content').innerHTML = '<div class="loading">Work not found: "' + workFolder + '"</div>';
        return;
    }

    // Load description
    fetch(work.basePath + 'description.txt')
        .then(response => response.text())
        .then(description => {
            renderWorkDetail(work, description);
        })
        .catch(error => {
            console.error('Error loading description:', error);
            renderWorkDetail(work, 'Description not available.');
        });
}

// Render work detail with carousel
function renderWorkDetail(work, description) {
    const contentContainer = document.getElementById('work-content');
    
    let html = `
        <h1 class="work-title">${work.title}</h1>
        <div class="carousel-container">
    `;

    if (work.imageCount === 1) {
        // Single image display
        html += `<img src="${work.basePath}${work.images[0]}" alt="${work.title}" class="carousel-image">`;
    } else {
        // Carousel for multiple images
        html += `
            <img id="carousel-image" src="${work.basePath}${work.images[0]}" alt="${work.title}" class="carousel-image">
            <button class="carousel-nav prev" id="carousel-prev">‹</button>
            <button class="carousel-nav next" id="carousel-next">›</button>
            <div class="carousel-indicators" id="carousel-indicators">
                ${work.images.map((_, index) => `
                    <div class="indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
                `).join('')}
            </div>
        `;
    }

    html += `
        </div>
        <div class="work-description">${description}</div>
    `;

    contentContainer.innerHTML = html;

    // Initialize carousel state and attach event listeners
    if (work.imageCount > 1) {
        window.currentWork = work;
        window.currentImageIndex = 0;
        
        // Use setTimeout to ensure DOM is ready
        setTimeout(() => {
            // Attach event listeners
            const prevBtn = document.getElementById('carousel-prev');
            const nextBtn = document.getElementById('carousel-next');
            
            console.log('Attaching event listeners. prevBtn:', prevBtn, 'nextBtn:', nextBtn);
            
            if (prevBtn) {
                prevBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log('Prev button clicked');
                    changeImage(-1);
                });
            }
            if (nextBtn) {
                nextBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log('Next button clicked');
                    changeImage(1);
                });
            }
            
            // Attach indicator click handlers
            const indicators = document.querySelectorAll('.indicator');
            console.log('Found indicators:', indicators.length);
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log('Indicator clicked:', index);
                    goToImage(index);
                });
            });
            
            updateCarouselButtons();
        }, 10);
    }
}

// Carousel navigation
let currentImageIndex = 0;
let currentWork = null;

function changeImage(direction) {
    console.log('changeImage called with direction:', direction);
    if (!window.currentWork) {
        console.error('No currentWork set');
        return;
    }

    window.currentImageIndex += direction;

    if (window.currentImageIndex < 0) {
        window.currentImageIndex = 0;
    } else if (window.currentImageIndex >= window.currentWork.imageCount) {
        window.currentImageIndex = window.currentWork.imageCount - 1;
    }

    console.log('New index:', window.currentImageIndex);
    updateCarousel();
}

function goToImage(index) {
    console.log('goToImage called with index:', index);
    if (!window.currentWork) {
        console.error('No currentWork set');
        return;
    }
    
    window.currentImageIndex = index;
    updateCarousel();
}

function updateCarousel() {
    console.log('updateCarousel called, index:', window.currentImageIndex);
    const img = document.getElementById('carousel-image');
    if (img && window.currentWork) {
        const newSrc = window.currentWork.basePath + window.currentWork.images[window.currentImageIndex];
        console.log('Setting image src to:', newSrc);
        img.src = newSrc;
    }

    // Update indicators
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === window.currentImageIndex);
    });

    updateCarouselButtons();
}

function updateCarouselButtons() {
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    if (prevBtn) {
        prevBtn.disabled = window.currentImageIndex === 0;
    }

    if (nextBtn) {
        nextBtn.disabled = window.currentImageIndex === window.currentWork.imageCount - 1;
    }
}