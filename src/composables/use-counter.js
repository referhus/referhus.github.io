import { useCallback, useRef, useState } from 'react';

export function useCounter(options = {}) {
  const {
    initialValue = 0,
    duration = 300,
  } = options;

  const [count, setCount] = useState(initialValue);
  const [isCounting, setIsCounting] = useState(false);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);
  const startValueRef = useRef(initialValue);
  const targetValueRef = useRef(initialValue);

  const countTo = useCallback((target, customDuration = duration) => {
    if (isCounting) {
      cancelAnimationFrame(animationRef.current);
    }

    setIsCounting(true);
    startValueRef.current = count;
    targetValueRef.current = target;
    startTimeRef.current = performance.now();

    const animate = (currentTime) => {
      if (!startTimeRef.current) return;

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / customDuration, 1);

      const currentValue = startValueRef.current +
        (targetValueRef.current - startValueRef.current) * progress;

      const roundedValue = Math.floor(currentValue)

      setCount(Math.max(0, roundedValue));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsCounting(true);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [count, duration, isCounting]);

  return {
    count,
    isCounting,
    countTo,
    setCount
  };
}