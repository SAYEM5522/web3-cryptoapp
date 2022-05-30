import { Provider } from 'react-redux'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'
import './Css/styles.css'
import 'raf/polyfill'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import store from './app/store'
const Api_Key='fCugtIrzg2cPNoeojBNavirutcLb3bt9'
const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ alchemyId: Api_Key }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})
function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
    <Head>
      <title>Crypto App</title>
      <meta
        name="description"
        content="Expo + Next.js with Solito. By Fernando Rojo."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Provider store={store}>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} 
       theme={darkTheme({
        accentColor: '#7b3fe4',
        accentColorForeground: 'white',
        borderRadius: 'medium',
      })}
      >
      <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
    </Provider>
    </>
  );
}

export default MyApp
