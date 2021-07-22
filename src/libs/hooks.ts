import { useEffect, useState, useCallback } from 'react'

// インターセクション
export const useIntersecting = (targetRef) => {
  const [isIntersecting, setIntersecting] = useState(false);
  
  useEffect(() => {
    setIntersecting(false)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return
        setIntersecting(isIntersecting);
        observer.unobserve(target);
      })
    }, {rootMargin: "200px"});
    observer.observe(targetRef.current);
    
  }, [targetRef.current])

  return [ isIntersecting ]
}

// 画面サイズ
export const useWindowWidth = () => {
  const isClient = typeof window !== 'undefined'

  const [width, setWidth] = useState(0);
  
  const onResize = useCallback((event) => {
    setWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    if (isClient) {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return { width }
}