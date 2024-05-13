import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { ContainerCustom } from "@/custom/theme";
export default function App({ Component, pageProps }) {
  return (
    <ContainerCustom>
      <Header/>
      <hr style={{opacity: 0.3}}/>
      <Component {...pageProps} />
    </ContainerCustom>
  );
}
