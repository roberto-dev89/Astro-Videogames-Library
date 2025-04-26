// components/LikeButton.jsx
import { useState, useEffect } from 'react'
import { db } from '../lib/firebase' // Ejemplo con Firebase

export default function LikeButton({ videoId }) {
  const [likes, setLikes] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)

  useEffect(() => {
    const fetchLikes = async () => {
      const doc = await db.collection('videogame-likes').doc(videoId).get()
      setLikes(doc.exists ? doc.data().count : 0)
    }
    fetchLikes()
  }, [])

  const handleLike = async () => {
    if (hasLiked) return
    
    await db.collection('videogame-likes').doc(videoId).set({
      count: likes + 1
    }, { merge: true })
    
    setLikes(l => l + 1)
    setHasLiked(true)
    localStorage.setItem(`liked-${videoId}`, 'true')
  }

  return (
    <button onClick={handleLike} disabled={hasLiked}>
      👍 {likes}
    </button>
  )
}