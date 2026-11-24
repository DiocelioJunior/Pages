(() => {
    'use strict';
    const config = window.DEMO_CONFIG?.[document.body.dataset.demo];
    if (!config) return;
    const find = (selector) => document.querySelector(selector);
    const make = (tag, cls, text) => { const node = document.createElement(tag); if (cls) node.className = cls; if (text !== undefined) node.textContent = String(text); return node; };
    function bookingUrl(index) {
        if (!config.bookingUrl) return '#contato';
        try {
            const url = new URL(config.bookingUrl);
            if (!['https:', 'http:'].includes(url.protocol)) return '#contato';
            const id = config.services?.[index]?.id;
            if (Number.isInteger(Number(id)) && Number(id) > 0) url.searchParams.set('service', String(Number(id)));
            return url.href;
        } catch { return '#contato'; }
    }
    document.title = config.seoTitle || config.name + ' | Demonstra\u00e7\u00e3o';
    const brand = find('.demo-brand'); brand.textContent = config.name; brand.append(make('span', 'demo-brand-dot', '.'));
    find('.demo-hero-copy .demo-eyebrow').textContent = config.eyebrow;
    find('h1').textContent = config.title;
    find('.demo-hero-copy > p').textContent = config.intro;
    find('meta[name="description"]').content = config.seoDescription || config.intro;
    find('.demo-about h2').textContent = config.aboutTitle;
    find('.demo-about-text').replaceChildren(...config.about.map((text) => make('p', '', text)));
    find('.demo-services h2').textContent = config.sectionTitle;
    const image = find('.demo-hero-image img'); image.src = 'assets/images/' + config.image; image.alt = config.imageAlt;
    const grid = find('.demo-service-grid'); grid.replaceChildren();
    config.services.forEach((service, index) => {
        const card = make('article', 'demo-service');
        const meta = make('div', 'demo-service-meta');
        meta.append(make('span', '', Number(service.duration) + ' min'), make('strong', '', new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(Number(service.price))));
        const link = make('a', '', 'Consultar hor\u00e1rio'); link.href = bookingUrl(index); link.dataset.bookingLink = ''; link.dataset.serviceIndex = String(index);
        const arrow = make('span', '', '\u2197'); arrow.setAttribute('aria-hidden', 'true'); link.append(arrow);
        card.append(make('span', 'demo-service-number', String(index + 1).padStart(2, '0')), make('h3', '', service.name), make('p', '', service.description), meta, link);
        grid.append(card);
    });
    if (!config.services.length) grid.append(make('p', 'demo-empty', 'Nenhum servi\u00e7o dispon\u00edvel no momento.'));
    document.querySelectorAll('[data-booking-link]').forEach((link) => { link.href = bookingUrl(Number(link.dataset.serviceIndex)); });
    if (bookingUrl() !== '#contato') {
        const action = find('.demo-contact-action'); action.href = bookingUrl(); action.textContent = 'Consultar hor\u00e1rios';
    }
})();
