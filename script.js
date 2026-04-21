// Registrazione del Service Worker per PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('✅ Service Worker registrato:', reg.scope))
      .catch(err => console.log('❌ Errore Service Worker:', err));
  });
}

// Messaggio di benvenuto
console.log('🥗 App Nutrizione - Riccardo Pinna Nutrizionista');