```javascript
import axios from 'axios';

const holaplexHubAPI = axios.create({
  baseURL: 'https://holaplex.com/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const checkNFTOwnership = async (walletAddress, nftId) => {
  try {
    const response = await holaplexHubAPI.get(`/nft/${nftId}/owner/${walletAddress}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default holaplexHubAPI;
```