'use strict';

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil((async () => {
    const pages = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const page of pages) {
      if ('focus' in page) return page.focus();
    }
    if (self.clients.openWindow) return self.clients.openWindow('./');
  })());
});
