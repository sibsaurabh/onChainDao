import "@rainbow-me/rainbowkit/styles.css";
import "@/styles/globals.css";
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
// import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains([sepolia], [alchemyProvider({ apiKey: 'uiyjPLRv-LHSc_zDNq4jMTtVTwxLL8yo' })]);

const { connectors } = getDefaultWallets({
  appName: "CryptoDevs DAO",
  projectId: "efd5952ccf49bb62c90dfdc2bb47e307",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}