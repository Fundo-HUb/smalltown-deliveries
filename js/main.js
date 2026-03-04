// Load HTML sections
async function loadSection(id, file) {
    const response = await fetch(`sections/${file}`);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

loadSection('hero', 'hero.html');
loadSection('registration', 'registration.html');
loadSection('categories', 'categories.html');
loadSection('tracking', 'tracking.html');
loadSection('investors', 'investors.html');
loadSection('footer', 'footer.html');

// Registration form validation
document.addEventListener('submit', function(e){
    if(e.target.id === 'registration-form'){
        e.preventDefault();
        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value;
        const confirm = form['confirm-password'].value;

        if(password !== confirm){
            alert('Passwords do not match!');
            return;
        }

        alert(`Welcome, ${name}! Registration successful.`);
        form.reset();
    }
});

// Smooth scroll
document.addEventListener('click', function(e){
    if(e.target.tagName === 'A' && e.target.href.includes('#')){
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    }
});
