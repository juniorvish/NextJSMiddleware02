```javascript
import { holaplexAPI } from '../utils/holaplexAPI';

const tokenGate = async (req, res, next) => {
  const { user } = req;
  const { projectSettings, dropSettings } = req.config;

  try {
    const userNFTs = await holaplexAPI.getUserNFTs(user);

    const hasRequiredNFT = userNFTs.some(nft => 
      nft.project === projectSettings && nft.drop === dropSettings
    );

    if (!hasRequiredNFT) {
      return res.status(403).json({ error: 'Access denied. User does not own the required NFT.' });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while checking user NFT ownership.' });
  }
};

export default tokenGate;
```