import { trefoil } from "ldrs";
import { useEffect, useState } from "react";

trefoil.register();

interface LoaderProps {
  isLoading?: boolean;
  delay?: number;
}

const Loading: React.FC<LoaderProps> = ({ isLoading = true, delay = 0 }) => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;

    if (isLoading) {
      timerId = setTimeout(() => {
        setShowLoader(true);
      }, delay);
    } else {
      setShowLoader(false);
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [isLoading, delay]);

  if (!showLoader) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100 bg-opacity-50 z-50">
      <div className="flex items-center justify-center translate-y-[-10vh]">
        <l-trefoil
          size="40"
          stroke="4"
          stroke-length="0.15"
          bg-opacity="0.1"
          speed="1.4"
          color="black"
        ></l-trefoil>
      </div>
    </div>
  );
};

export default Loading;
