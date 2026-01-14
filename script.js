function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
});

// Update market price based on selected product
function updateMarketPrice() {
    const productSelect = document.getElementById('productName');
    const selectedOption = productSelect.options[productSelect.selectedIndex];
    const price = selectedOption.getAttribute('data-price');
    const marketPriceInput = document.getElementById('marketPrice');

    if (price) {
        marketPriceInput.value = `₹${price}/kg`;
        // Auto-fill the final price with market price as suggestion
        document.getElementById('finalPrice').value = price;
    } else {
        marketPriceInput.value = '';
        document.getElementById('finalPrice').value = '';
    }
}

// Handle form submission
const produceForm = document.getElementById('produceForm');
if (produceForm) {
    produceForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const farmerName = document.getElementById('farmerName').value;
        const productName = document.getElementById('productName').value;
        const quantity = document.getElementById('quantity').value;

        // Show success message
        alert(`✅ Produce Listed Successfully!\n\nFarmer: ${farmerName}\nProduct: ${productName}\nQuantity: ${quantity} kg\n\nBuyers can now contact you directly!`);

        // Reset form
        this.reset();
        document.getElementById('marketPrice').value = '';
    });
}

// Contact farmer function
function contactFarmer(farmerName, contactNumber) {
    const message = `Contact ${farmerName}\n\n📞 Phone: ${contactNumber}\n\nClick OK to call or note down the number.`;

    if (confirm(message)) {
        // In a real app, this would open phone dialer
        // For demo, we just show another alert
        alert(`You can now call ${farmerName} at ${contactNumber} to discuss the deal!`);
    }
}