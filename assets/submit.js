document.querySelector('.btn-login').addEventListener('click', function() {

    const nameInput = document.querySelector('.name');
    const name = nameInput.value;
    const emailInput = document.querySelector('.email');
    const email = emailInput.value;
    const agreementCheckbox = document.getElementById('agreement');
    const agreement = document.querySelector('.agreement');
    const overlay = document.querySelector('.overlay');
    var checked = true;

    if (nameInput.value.trim() === '') {
        checked = false;
        nameInput.classList.add('err-required');
    } else {
        nameInput.classList.remove('err-required');
    }

    if (emailInput.value.trim() === '') {
        checked = false;
        emailInput.classList.add('err-required');
    } else {

        if (email.includes('@')) {
            emailInput.classList.remove('err-required');
            } else {
            emailInput.classList.add('err-required');
            }

    }
    if (!agreementCheckbox.checked) {
        checked = false;
        agreement.classList.add('err-required');
    } else {
        agreement.classList.remove('err-required');

        if (checked == true) {

      fetch('https://6f47b9-7f.myshopify.com/admin/api/2024-07/customers.json', {
    method: 'POST',
    headers: { 
        'X-Shopify-Access-Token': '****', //kvôli GIT-u vymazaný token
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        customer: {
            first_name: name,
            email: email,
            verified_email: true,
            send_email_welcome: false
        }
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

          overlay.classList.add('hidden');

        }
    }


});