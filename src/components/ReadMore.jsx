import { h } from 'preact';
import { useState, useRef, useEffect } from 'preact/hooks';

export default function ReadMore({ children }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState('max-h-[200px]');

  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      if (expanded) {
        el.style.maxHeight = el.scrollHeight + 'px';
      } else {
        el.style.maxHeight = '200px';
      }
    }
  }, [expanded]);

  return (
    <div>
      <div
        ref={contentRef}
        class="overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{ maxHeight: expanded ? '9999px' : '200px' }}
      >
        {children}
      </div>
      <a
        class="read-more-btn mt-2 text-fuchsia-500 hover:underline cursor-pointer"
        onClick={() => setExpanded(prev => !prev)}
      >
        {expanded ? 'Leer menos' : 'Leer más'}
      </a>
    </div>
  );
}
