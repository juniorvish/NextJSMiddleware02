```javascript
import axios from 'axios';

const holaplexHubAPI = axios.create({
  baseURL: 'https://holaplex.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const checkUserNFTOwnership = async (userAddress, projectId, dropId) => {
  try {
    const response = await holaplexHubAPI.get(`/nfts/${userAddress}`);
    const userNFTs = response.data;

    return userNFTs.some(nft => nft.projectId === projectId && nft.dropId === dropId);
  } catch (error) {
    console.error('Error checking user NFT ownership:', error);
    return false;
  }
};

export default holaplexHubAPI;
```