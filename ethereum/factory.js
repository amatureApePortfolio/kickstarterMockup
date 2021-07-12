import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xF1629C7315242C769FefB1Ba7A5e4Ad0aD402e2f'
)

export default instance;