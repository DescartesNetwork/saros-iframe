import EmbededView from 'shared/antd/embededView'

import configs from 'app/configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  return (
    <EmbededView
      appId={appId}
      src={
        'https://saros.finance/swap?base=C98A4nkJXhpVZNAZdHUA95RpTF3T4whtQubL3YobiUX9&pair=SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M'
      }
      title="Saros: A DeFi Super-Network Built on S◎lana."
      background={{ light: '#ffffff', dark: '#3c3b3b' }}
    />
  )
}

export default View
