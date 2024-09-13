import { useEffect } from 'react';

function useTitleChangeOnBlur(activeTitle, inactiveTitle) {
  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.hidden ? inactiveTitle : activeTitle;
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Set initial title
    document.title = activeTitle;

    // Cleanup
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [activeTitle, inactiveTitle]);
}

export default useTitleChangeOnBlur;