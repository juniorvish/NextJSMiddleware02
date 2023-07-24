```javascript
import { NextApiRequest, NextApiResponse } from 'next';
import { checkNFTOwnership } from '../../utils/holaplexAPI';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { walletAddress, nftId } = req.body;

  if (!walletAddress || !nftId) {
    return res.status(400).json({ error: 'Missing wallet address or NFT ID' });
  }

  try {
    const isOwner = await checkNFTOwnership(walletAddress, nftId);

    if (isOwner) {
      return res.status(200).json({ status: 'Access granted' });
    } else {
      return res.status(403).json({ status: 'Access denied' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
}
```