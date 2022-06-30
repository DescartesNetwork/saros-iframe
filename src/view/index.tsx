import { useEffect } from 'react'
import { useUI } from '@sentre/senhub'

import EmbededView from '@sentre/embeded-view'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  const { setBackground } = useUI()

  useEffect(() => {
    setBackground({ light: '#ffffff', dark: '#3c3b3b' })
  }, [setBackground])

  return (
    <EmbededView
      wallet={window.sentre.wallet}
      appId={appId}
      src={
        'https://saros.finance/swap?base=C98A4nkJXhpVZNAZdHUA95RpTF3T4whtQubL3YobiUX9&pair=SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M'
      }
      title="Saros: A DeFi Super-Network Built on S◎lana."
    />
  )
}

export default View
