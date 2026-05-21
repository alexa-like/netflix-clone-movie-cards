document.addEventListener('DOMContentLoaded', () => {
    // Mock movie data
    const movies = [
        {
            id: 1,
            title: "Inception",
            rating: 4.8,
            genre: ["Sci-Fi", "Action"],
            category: "trending",
            image: "https://images.unsplash.com/photo-1489599843091-30c0b5d7ce48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        },
        {
            id: 2,
            title: "The Dark Knight",
            rating: 4.9,
            genre: ["Action", "Crime"],
            category: "trending",
            image: "https://images.unsplash.com/photo-1489599843091-30c0b5d7ce48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        },
        {
            id: 3,
            title: "Interstellar",
            rating: 4.7,
            genre: ["Sci-Fi", "Drama"],
            category: "trending",
            image: "https://images.unsplash.com/photo-1489599843091-30c0b5d7ce48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        },
        {
            id: 4,
            title: "Parasite",
            rating: 4.6,
            genre: ["Drama", "Thriller"],
            category: "new",
            image: "https://images.unsplash.com/photo-1489599843091-30c0b5d7ce48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        },
        {
            id: 5,
            title: "The Shawshank Redemption",
            rating: 4.9,
            genre: ["Drama"],
            category: "popular",
            image: "https://images.unsplash.com/photo-1489599843091-30c0b5d7ce48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        },
        {
            id: 6,
            title: "La La Land",
            rating: 4.5,
            genre: ["Musical", "Romance"],
            category: "new",
            image: "https://images.unsplash.com/photo-1489599843091-30c0b5d7ce48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        },
        {
            id: 7,
            title: "The Matrix",
            rating: 4.7,
            genre: ["Sci-Fi", "Action"],
            category: "popular",
            image: "https://images.unsplash.com/photo-1489599843091-30c0b5d7ce48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        },
        {
            id: 8,
            title: "Pulp Fiction",
            rating: 4.8,
            genre: ["Crime", "Drama"],
            category: "popular",
            image: "https://images.unsplash.com/photo-1489599843091-30c0b5d7ce48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        },
        {
            id: 9,
            title: "The Grand Budapest Hotel",
            rating: 4.4,
            genre: ["Comedy", "Adventure"],
            category: "new",
            image: "https://images.unsplash.com/photo-1489599843091-30c0b5d7ce48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        }
    ];

    // DOM elements
    const trendingContainer = document.getElementById('trendingContainer');
    const newReleasesContainer = document.getElementById('newReleasesContainer');
    const popularContainer = document.getElementById('popularContainer');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const exploreBtn = document.getElementById('exploreBtn');

    // Render movies
    function renderMovies(category, container) {
        const filteredMovies = movies.filter(movie => movie.category === category);
        
        container.innerHTML = '';
        
        filteredMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            
            movieCard.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                    <div class="movie-rating">
                        <i class="fas fa-star"></i>
                        <span>${movie.rating}</span>
                    </div>
                    <div class="movie-genre">
                        ${movie.genre.map(g => `<span class="genre-tag">${g}</span>`).join('')}
                    </div>
                </div>
            `;
            
            container.appendChild(movieCard);
        });
    }

    // Initial render
    renderMovies('trending', trendingContainer);
    renderMovies('new', newReleasesContainer);
    renderMovies('popular', popularContainer);

    // Search functionality
    function searchMovies() {
        const searchTerm = searchInput.value.toLowerCase();
        
        if (searchTerm === '') {
            renderMovies('trending', trendingContainer);
            renderMovies('new', newReleasesContainer);
            renderMovies('popular', popularContainer);
            return;
        }
        
        const allContainers = [trendingContainer, newReleasesContainer, popularContainer];
        
        allContainers.forEach(container => {
            container.innerHTML = '';
        });
        
        const searchResults = movies.filter(movie => 
            movie.title.toLowerCase().includes(searchTerm) ||
            movie.genre.some(g => g.toLowerCase().includes(searchTerm))
        );
        
        if (searchResults.length === 0) {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.textContent = 'No movies found. Try another search.';
            noResults.style.gridColumn = '1 / -1';
            noResults.style.textAlign = 'center';
            noResults.style.padding = '2rem';
            trendingContainer.appendChild(noResults);
            return;
        }
        
        searchResults.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            
            movieCard.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                    <div class="movie-rating">
                        <i class="fas fa-star"></i>
                        <span>${movie.rating}</span>
                    </div>
                    <div class="movie-genre">
                        ${movie.genre.map(g => `<span class="genre-tag">${g}</span>`).join('')}
                    </div>
                </div>
            `;
            
            trendingContainer.appendChild(movieCard);
        });
    }

    // Event listeners
    searchBtn.addEventListener('click', searchMovies);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchMovies();
        }
    });

    exploreBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector('.movie-section').offsetTop - 80,
            behavior: 'smooth'
        });
    });

    // Profile button functionality
    document.getElementById('profileBtn').addEventListener('click', () => {
        alert('Profile functionality would be implemented here');
    });
});
