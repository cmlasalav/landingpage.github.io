import { useEffect, useState } from "react";

export default function Loader({ duration }) {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-pulse"></div>
        <div className="absolute inset-0 border-t-4 border-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-4 bg-white rounded-full animate-ping"></div>
      </div>
    </div>
  );
}
