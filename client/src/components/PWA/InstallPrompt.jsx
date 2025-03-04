import { useState, useEffect } from 'react';

const InstallPrompt = () => {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Store the install prompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowPrompt(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = () => {
    if (!installPrompt) return;

    // Show the install prompt
    installPrompt.prompt();

    // Wait for the user to respond to the prompt
    installPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      
      // Reset the install prompt
      setInstallPrompt(null);
      setShowPrompt(false);
    });
  };

  if (!showPrompt) return null;

  return (
    <div
      className="fixed bottom-5 left-5 bg-green-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs"
    >
      <p className="mb-3">
        Install LibreChat to your device for quick access!
      </p>
      <div className="flex justify-between">
        <button
          onClick={() => setShowPrompt(false)}
          className="bg-transparent border border-white text-white px-3 py-1 rounded hover:bg-white hover:bg-opacity-10 transition-colors"
        >
          Not now
        </button>
        <button
          onClick={handleInstall}
          className="ml-3 bg-white text-green-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors"
        >
          Install
        </button>
      </div>
    </div>
  );
};

export default InstallPrompt; 