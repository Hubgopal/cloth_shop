// JavaScript for Featured Products Load More Button
let featuredPage = 1;
const featuredProducts = document.querySelectorAll('#featured-product-list .product');

document.getElementById('load-more-featured').addEventListener('click', () => {
    let visibleCount = document.querySelectorAll('#featured-product-list .product[style="display: block;"]').length;

    for (let i = visibleCount; i < visibleCount + 4 && i < featuredProducts.length; i++) {
        featuredProducts[i].style.display = 'block';
    }

    if (visibleCount + 4 >= featuredProducts.length) {
        document.getElementById('load-more-featured').style.display = 'none';
    }
});

// JavaScript for Latest Arrivals Load More Button
let latestPage = 1;
const latestProducts = document.querySelectorAll('#latest-product-list .product');

document.getElementById('load-more-latest').addEventListener('click', () => {
    let visibleCount = document.querySelectorAll('#latest-product-list .product[style="display: block;"]').length;

    for (let i = visibleCount; i < visibleCount + 4 && i < latestProducts.length; i++) {
        latestProducts[i].style.display = 'block';
    }

    if (visibleCount + 4 >= latestProducts.length) {
        document.getElementById('load-more-latest').style.display = 'none';
    }
});

// JavaScript for Accessories Section Load More Button
document.addEventListener("DOMContentLoaded", () => {
    const accessoriesProductList = document.getElementById("accessories-product-list");
    const loadMoreButton = document.getElementById("load-more-accessories");

    let productsPerPage = 4; // Number of products to show initially or per load
    let currentProductIndex = 0;

    const products = Array.from(accessoriesProductList.querySelectorAll(".product"));
    products.forEach((product, index) => {
        if (index >= productsPerPage) {
            product.style.display = "none";
        }
    });

    loadMoreButton.addEventListener("click", () => {
        const nextProductIndex = currentProductIndex + productsPerPage;

        for (let i = currentProductIndex; i < nextProductIndex && i < products.length; i++) {
            products[i].style.display = "block";
        }

        currentProductIndex = nextProductIndex;

        if (currentProductIndex >= products.length) {
            loadMoreButton.style.display = "none";
        }
    });
});

// JavaScript for Kids Section Load More Button
const kidsProducts = document.querySelectorAll('#kids-product-list .product');
const loadMoreButton = document.getElementById('load-more-kids');

kidsProducts.forEach((product, index) => {
    if (index >= 4) {
        product.style.display = 'none';
    }
});

loadMoreButton.addEventListener('click', () => {
    let visibleCount = Array.from(kidsProducts).filter(product => product.style.display === 'block').length;

    for (let i = visibleCount; i < visibleCount + 4 && i < kidsProducts.length; i++) {
        kidsProducts[i].style.display = 'block';
    }

    if (visibleCount + 4 >= kidsProducts.length) {
        loadMoreButton.style.display = 'none';
    }
});

// JavaScript for Modal Functionality
document.querySelector('[data-modal-close]').addEventListener('click', function () {
    document.querySelector('.modal-content').style.display = 'none';
});

document.querySelector('.modal-content').style.display = 'block';


