```javascript
import { holaplexHubAPI } from '../utils/holaplexAPI';

const projectSettings = {
  // Add your project settings here
};

const dropSettings = {
  // Add your drop settings here
};

const checkUserNFTOwnership = async (userAddress) => {
  const userNFTs = await holaplexHubAPI.getNFTs(userAddress);
  return userNFTs.some(nft => nft.project === projectSettings.project && nft.drop === dropSettings.drop);
};

const tokenGate = async (req, res, next) => {
  const userAddress = req.headers['x-user-address'];
  if (!userAddress) {
    return res.status(401).json({ error: 'User address is required' });
  }

  const ownsNFT = await checkUserNFTOwnership(userAddress);
  if (!ownsNFT) {
    return res.status(403).json({ error: 'User does not own the required NFT' });
  }

  next();
};

export default tokenGate;
```