(() => {
    'use strict';
    const buttons = document.querySelectorAll('[data-filter]');
    const projects = document.querySelectorAll('[data-category]');
    buttons.forEach((button) => button.addEventListener('click', () => {
        let count = 0;
        buttons.forEach((item) => { const active = item === button; item.classList.toggle('is-active', active); item.setAttribute('aria-pressed', String(active)); });
        projects.forEach((project) => { project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter; if (!project.hidden) count++; });
        document.getElementById('portfolio-filter-status').textContent = count + (count === 1 ? ' projeto dispon\u00edvel.' : ' projetos dispon\u00edveis.');
    }));
})();
