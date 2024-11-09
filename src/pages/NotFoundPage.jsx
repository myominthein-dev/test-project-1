'use client'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function NotFoundPage() {
  const [stars, setStars] = useState([])
  const nav = useNavigate();

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
      }))
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="min-h-screen bg-custom-gradient flex flex-col items-center justify-center overflow-hidden relative">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute bg-blue-PRIMARY rounded-full animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}
      <div className="text-center z-10">
        <h1 className="text-9xl font-bold text-white mb-4 animate-float">404</h1>
        <p className="text-2xl text-blue-PRIMARY mb-8">Oops! You've ventured into unknown space.</p>
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="absolute inset-0 bg-blue-PRIMARY rounded-full animate-pulse opacity-50" />
          
        </div>
        <button onClick={() => nav("/")}
          
          className="inline-block bg-blue-PRIMARY text-white font-semibold py-3 px-6 rounded-full transition-transform hover:scale-105 hover:shadow-lg"
        >
          Return to Earth
        </button>
      </div>
      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}