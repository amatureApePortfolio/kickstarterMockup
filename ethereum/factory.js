import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x76a446279D8bF978b11bF21D8640895BEB1833c1'
)

export default instance;