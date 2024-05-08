import Header from "@/components/(main)/Header";
import Hero from "@/components/(main)/Hero";
import TrustedCompanies from "@/components/(main)/TrustedCompanies";
import ConnectTo from "@/components/(main)/ConnectTo";
import IntegrateCodebase from "@/components/(main)/Integrate-codebase";
import ExistingCardSection from "@/components/(main)/ExistingCardSection";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />  
    <TrustedCompanies />
    <ConnectTo />
    <IntegrateCodebase />
    <ExistingCardSection />
    </>
  );
}
