import { net } from '@sentre/senhub'

import EmbededView from '@sentre/embeded-view'
import MainnetOnly from './mainnetOnly'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  if (net !== 'mainnet') return <MainnetOnly />
  return (
    <EmbededView
      wallet={window.sentre.solana}
      appId={appId}
      src={
        'https://saros.finance/swap?base=C98A4nkJXhpVZNAZdHUA95RpTF3T4whtQubL3YobiUX9&pair=SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M'
      }
      title="Saros: A DeFi Super-Network Built on S◎lana."
    />
  )
}

export default View
