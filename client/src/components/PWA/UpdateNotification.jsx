import { useRegisterSW } from 'virtual:pwa-register/react';

const UpdateNotification = () => {
  const {
    needRefresh,
    updateServiceWorker,
  } = useRegisterSW();

  if (!needRefresh) return null;

  return (
    <div
      className="fixed bottom-5 right-5 bg-green-600 text-white p-3 rounded-lg shadow-lg z-50 flex items-center justify-between"
    >
      <span>New version available!</span>
      <button
        onClick={() => updateServiceWorker(true)}
        className="ml-3 bg-white text-green-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors"
      >
        Update
      </button>
    </div>
  );
};

export default UpdateNotification; 