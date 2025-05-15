import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useCountdownRedirect = (seconds, path) => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(seconds);

  useEffect(() => {
    if (countdown <= 0) {
      navigate(path);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate, path]);

  return countdown;
};

export default useCountdownRedirect;