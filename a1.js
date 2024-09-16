const addProductButton = document.getElementById('add-product');
const sortPriceButton = document.getElementById('sort-price');
const sortRatingButton = document.getElementById('sort-rating');

const priceGraph = document.getElementById('price-graph');
const ratingGraph = document.getElementById('rating-graph');

let products = [];

addProductButton.addEventListener('click', () => {
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const rating = parseFloat(document.getElementById('product-rating').value);
    
    if (!name || isNaN(price) || isNaN(rating)) return;
    
    products.push({ name, price, rating });
    updateGraphs();
    
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-rating').value = '';
});

sortPriceButton.addEventListener('click', () => {
    products.sort((a, b) => a.price - b.price);
    updateGraphs();
});

sortRatingButton.addEventListener('click', () => {
    products.sort((a, b) => a.rating - b.rating);
    updateGraphs();
});

function updateGraphs() {
    priceGraph.innerHTML = '<h2>Price Graph</h2>';
    ratingGraph.innerHTML = '<h2>Rating Graph</h2>';
    
    products.forEach(product => {
        const priceBar = document.createElement('div');
        priceBar.className = 'bar';
        priceBar.style.width = `${product.price * 10}px`;
        priceBar.style.backgroundColor = 'blue';
        priceBar.textContent = `${product.name}: $${product.price}`;
        
        const ratingBar = document.createElement('div');
        ratingBar.className = 'bar';
        ratingBar.style.width = `${product.rating * 20}px`;
        ratingBar.style.backgroundColor = 'green';
        ratingBar.textContent = `${product.name}: ${product.rating}`;
        
        priceGraph.appendChild(priceBar);
        ratingGraph.appendChild(ratingBar);
    });
}
