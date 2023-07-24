```javascript
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { checkNFTOwnership } from '../utils/holaplexAPI';

export default function ProtectedRoute() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    async function checkOwnership() {
      const ownership = await checkNFTOwnership();
      setIsOwner(ownership);
      setLoading(false);
    }
    checkOwnership();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isOwner) {
    router.push('/');
    return null;
  }

  return (
    <div>
      <h1>Welcome to the protected route!</h1>
      <p>You are seeing this because you own the required NFT.</p>
    </div>
  );
}
```