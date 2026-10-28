const systemInfoElement = document.getElementById('system-info');
const systemInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform
};
localStorage.setItem('cvSystemInfo', JSON.stringify(systemInfo));
const savedSystemInfo = JSON.parse(localStorage.getItem('cvSystemInfo') || '{}');
systemInfoElement.textContent = `Браузер: ${savedSystemInfo.userAgent || 'невідомо'} | Платформа: ${savedSystemInfo.platform || 'невідомо'}`;

const page = document.querySelector('.page');
const themeButton = document.getElementById('theme-toggle');
function setTheme(theme) {
    page.classList.toggle('dark-mode', theme === 'dark');
    themeButton.textContent = theme === 'dark' ? 'Увімкнути денну тему' : 'Увімкнути нічну тему';
    localStorage.setItem('cvTheme', theme);
}
const currentHour = new Date().getHours();
setTheme(currentHour >= 7 && currentHour < 21 ? 'light' : 'dark');
themeButton.addEventListener('click', () => {
    setTheme(page.classList.contains('dark-mode') ? 'light' : 'dark');
});

const reviewsStatus = document.getElementById('reviews-status');
const reviewsList = document.getElementById('reviews-list');
fetch('https://jsonplaceholder.typicode.com/posts/22/comments')
    .then(response => {
        if (!response.ok) throw new Error('Не вдалося отримати відгуки');
        return response.json();
    })
    .then(comments => {
        reviewsStatus.textContent = comments.length ? 'Відгуки попередніх роботодавців (демонстраційні дані):' : 'Відгуків поки немає.';
        comments.forEach(comment => {
            const card = document.createElement('article');
            card.className = 'review-card';
            const title = document.createElement('h3');
            title.textContent = comment.name;
            const email = document.createElement('p');
            email.textContent = comment.email;
            const body = document.createElement('p');
            body.textContent = comment.body;
            card.append(title, email, body);
            reviewsList.append(card);
        });
    })
    .catch(() => { reviewsStatus.textContent = 'Не вдалося завантажити відгуки. Перевірте підключення до інтернету.'; });

const modal = document.getElementById('contact-modal');
const closeModal = document.getElementById('close-modal');
if (sessionStorage.getItem('contactModalClosed') !== 'true') {
    window.setTimeout(() => {
        if (sessionStorage.getItem('contactModalClosed') !== 'true') modal.hidden = false;
    }, 60000);
}
closeModal.addEventListener('click', () => {
    modal.hidden = true;
    sessionStorage.setItem('contactModalClosed', 'true');
});
modal.addEventListener('click', event => {
    if (event.target === modal) {
        modal.hidden = true;
        sessionStorage.setItem('contactModalClosed', 'true');
    }
});
