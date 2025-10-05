import { useEffect, useRef, useState } from "react";

export default function CountUpOnView({ end, duration = 2000 }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / end), 20);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-2xl font-bold text-white">
      {count}
    </div>
  );
}
