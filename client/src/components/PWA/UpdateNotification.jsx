import { useState, useEffect } from 'react';

const UpdateNotification = () => {
  const [showUpdate, setShowUpdate] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        setShowUpdate(true);
      });
    }
  }, []);

  const refreshApp = () => {
    window.location.reload();
  };

  if (!showUpdate) return null;

  return (
    <div
      className="fixed bottom-5 right-5 bg-green-600 text-white p-3 rounded-lg shadow-lg z-50 flex items-center justify-between"
    >
      <span>New version available!</span>
      <button
        onClick={refreshApp}
        className="ml-3 bg-white text-green-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors"
      >
        Update
      </button>
    </div>
  );
};

export default UpdateNotification; 