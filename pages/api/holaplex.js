```javascript
import { NextApiRequest, NextApiResponse } from 'next';
import { checkUserNFTOwnership } from '../../middleware/tokenGate';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userAddress } = req.body;

  if (!userAddress) {
    return res.status(400).json({ error: 'User address is required' });
  }

  try {
    const ownsNFT = await checkUserNFTOwnership(userAddress);

    if (ownsNFT) {
      return res.status(200).json({ ownsNFT: true });
    } else {
      return res.status(403).json({ ownsNFT: false });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error checking NFT ownership' });
  }
}
```