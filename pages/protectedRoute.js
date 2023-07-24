```javascript
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { checkUserNFTOwnership } from '../middleware/tokenGate'

export default function ProtectedRoute() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkOwnership() {
      const ownsNFT = await checkUserNFTOwnership()
      if (!ownsNFT) {
        router.push('/')
      }
      setLoading(false)
    }
    checkOwnership()
  }, [router])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Welcome to the protected route!</h1>
      <p>You are seeing this because you own the required NFT.</p>
    </div>
  )
}
```