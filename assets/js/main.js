/* Site institucional estatico: apenas JavaScript nativo e dados publicos. */
(() => {
    'use strict';
    const config = window.SITE_CONFIG || {};
    const query = (selector) => document.querySelector(selector);
    const all = (selector) => document.querySelectorAll(selector);
    const text = (selector, value) => all(selector).forEach((node) => { node.textContent = String(value ?? ''); });
    const element = (tag, className, content) => {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (content !== undefined) node.textContent = String(content);
        return node;
    };

    function bookingHref(serviceId) {
        if (!config.bookingUrl) return '#contato';
        try {
            const url = new URL(config.bookingUrl);
            if (!['https:', 'http:'].includes(url.protocol)) return '#contato';
            if (Number.isInteger(Number(serviceId)) && Number(serviceId) > 0) {
                url.searchParams.set('service', String(Number(serviceId)));
            }
            return url.href;
        } catch { return '#contato'; }
    }

    function renderIdentity() {
        if (config.name) {
            document.title = config.seoTitle || config.name;
            text('.institution-brand span, .institution-contact-company, #institution-about-title', config.name);
        }
        if (config.logo) {
            all('.institution-brand img').forEach((image) => { image.src = config.logo; });
            const favicon = query('link[rel="icon"]');
            if (favicon) favicon.href = config.logo;
        }
        if (typeof config.title === 'string') {
            const parts = config.title.trim().split(/(?<=[.!?])\s+/u);
            text('#institution-title', parts.shift() || '');
            let secondary = query('.institution-title-secondary');
            const remaining = parts.join(' ');
            if (remaining && !secondary) {
                secondary = element('p', 'institution-title-secondary');
                query('.institution-intro').after(secondary);
            }
            if (secondary) { secondary.textContent = remaining; secondary.hidden = !remaining; }
        }
        if (typeof config.intro === 'string') {
            text('.institution-intro', config.intro);
            query('meta[name="description"]').content = config.seoDescription || config.intro;
        }
        if (Array.isArray(config.history)) {
            const about = query('.institution-about-text');
            about.replaceChildren(...config.history.filter((value) => String(value).trim()).map((paragraph) => element('p', '', paragraph)));
        }
    }

    function renderServices() {
        if (!Array.isArray(config.services)) return;
        const list = query('.institution-service-grid');
        list.replaceChildren();
        config.services.forEach((service, index) => {
            const row = element('article', 'institution-service');
            const thumbnail = element('div', 'institution-service-thumbnail');
            thumbnail.setAttribute('aria-hidden', 'true');
            const image = element('img');
            image.src = 'assets/images/editorial-portrait.webp'; image.alt = ''; image.width = 64; image.height = 64; image.loading = 'lazy';
            thumbnail.append(image, element('span', '', String(index + 1).padStart(2, '0')));
            const details = element('div', 'institution-service-body');
            details.append(element('h3', '', service.name || ''), element('p', '', service.description || 'Consulte a disponibilidade e escolha o melhor hor\u00e1rio para voc\u00ea.'));
            const facts = element('dl', 'institution-service-facts');
            const duration = element('div');
            duration.append(element('dt', '', 'Dura\u00e7\u00e3o'), element('dd', '', (Number(service.duration) || 0) + ' min'));
            const price = element('div');
            const amount = Number(service.price);
            const formatted = Number.isFinite(amount) ? new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(amount) : 'Consulte';
            const value = element('dd', '', formatted + ' ');
            value.append(element('span', '', service.currency || ''));
            price.append(element('dt', '', 'Valor'), value);
            facts.append(duration, price);
            const link = element('a', 'institution-service-link', 'Agendar agora');
            link.setAttribute('data-booking-link', '');
            link.dataset.serviceId = String(service.id || '');
            link.href = bookingHref(service.id);
            row.append(thumbnail, details, facts, link);
            list.append(row);
        });
        if (!config.services.length) list.append(element('p', 'institution-empty', 'Nenhum servi\u00e7o dispon\u00edvel para agendamento no momento.'));
    }

    function renderContact() {
        const contact = query('.institution-contact-details');
        contact.replaceChildren(element('span', 'institution-contact-company', config.name || document.title));
        const addContact = (label, value, href) => {
            const group = element('div', 'institution-contact-detail');
            group.append(element('span', '', label));
            const content = element(href ? 'a' : 'p', href ? '' : 'institution-address', value);
            if (href) content.href = href;
            group.append(content); contact.append(group);
        };
        if (config.address) addContact('Onde estamos', config.address);
        let address = query('.institution-hero-address');
        if (config.address && !address) {
            address = element('p', 'institution-hero-address'); query('.institution-hero-copy').append(address);
        }
        if (address) { address.textContent = config.address || ''; address.hidden = !config.address; }
        const email = String(config.email || '').trim();
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) addContact('E-mail', email, 'mailto:' + encodeURIComponent(email));
        const phone = String(config.phone || '').trim();
        const digits = phone.replace(/\D/g, '');
        if (digits) addContact('Telefone', phone, 'tel:' + (phone.startsWith('+') ? '+' : '') + digits);
    }

    renderIdentity();
    renderServices();
    renderContact();
    all('[data-booking-link]').forEach((link) => { link.href = bookingHref(link.dataset.serviceId); });
})();
