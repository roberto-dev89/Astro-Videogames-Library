import { useState, useRef, useEffect } from 'preact/hooks';

export default function Rating() {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center space-x-4 mb-6">
      <div
        className="flex"
        onMouseLeave={() => setHovered(0)}
      >
        {stars.map((star) => {
          const filled = hovered >= star || (!hovered && selected >= star);
          return (
            <button
              key={star}
              type="button"
              onMouseEnter={() => setHovered(star)}
              onClick={() => setSelected(star)}
              className="focus:outline-none cursor-pointer"
            >
              {filled ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-8 w-8 text-white transition-transform transform hover:scale-125"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.947c.3.92-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.286-3.947a1 1 0 00-.364-1.118L2.064 9.373c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.946z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  className="h-8 w-8 text-gray-400 transition-transform transform hover:scale-125"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.947c.3.92-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.286-3.947a1 1 0 00-.364-1.118L2.064 9.373c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.946z"
                  />
                </svg>
              )}
            </button>
          );
        })}
      </div>
      <span className="text-2xl font-bold">
        {selected || hovered} / 5
      </span>
    </div>
  );
}
