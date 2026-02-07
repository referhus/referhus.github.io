import { useState, useRef, useCallback } from 'react';

export function useCounter(options = {}) {
  const {
    initialValue = 0,
    duration = 500,
    precision = 0
  } = options;

  const [count, setCount] = useState(initialValue);
  const [isCounting, setIsCounting] = useState(false);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);
  const startValueRef = useRef(initialValue);
  const targetValueRef = useRef(initialValue);

  const easingFunction = {
    linear: (t) => t,
  };


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
      const easedProgress = easingFunction.linear(progress);

      const currentValue = startValueRef.current +
        (targetValueRef.current - startValueRef.current) * easedProgress;

      const roundedValue = precision === 0
        ? Math.floor(currentValue)
        : Number(currentValue.toFixed(precision));

      setCount(roundedValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsCounting(false);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [count, duration, isCounting, precision]);

  const stop = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      setIsCounting(false);
    }
  }, []);

  const reset = useCallback((value = initialValue) => {
    stop();
    setCount(value);
  }, [initialValue, stop]);

  return {
    count,
    isCounting,
    countTo,
    stop,
    reset,
    setCount
  };
}