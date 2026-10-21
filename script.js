const form = document.getElementById('inquiryForm');
const inquiryList = document.getElementById('inquiryList');

let inquiries = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const newInquiry = {
        name: document.getElementById('customerName').value,
        product: document.getElementById('productName').value,
        type: document.getElementById('inquiryType').value,
        message: document.getElementById('message').value,
        date: new Date().toLocaleString()
    };

    inquiries.unshift(newInquiry);
    displayInquiries();
    form.reset();

    alert('Inquiry Submitted Successfully! - Assisting customer request maintained.');
});

function displayInquiries() {
    if (inquiries.length === 0) {
        inquiryList.innerHTML = '<p class="empty">No inquiries yet. Submit a new one!</p>';
        return;
    }

    inquiryList.innerHTML = inquiries.map(item => `
        <div class="inquiry-card">
            <h4>${item.name} - ${item.product}</h4>
            <p><strong>Type:</strong> ${item.type}</p>
            <p>${item.message}</p>
            <small>${item.date} | Status: Inquiry Handled</small>
        </div>
    `).join('');
}