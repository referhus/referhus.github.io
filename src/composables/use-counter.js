import { useState, useRef, useCallback } from 'react';

export function useCounter(options = {}) {
  const {
    initialValue = 0,
    duration = 300,
    precision = 0
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
      const easedProgress = () => (progress);

      const currentValue = startValueRef.current +
        (targetValueRef.current - startValueRef.current) * easedProgress;

      const roundedValue = precision === 0
        ? Math.floor(currentValue)
        : Number(currentValue.toFixed(precision));

      setCount(Math.max(0, roundedValue));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsCounting(true);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [count, duration, isCounting, precision]);

  return {
    count,
    isCounting,
    countTo,
    setCount
  };
}