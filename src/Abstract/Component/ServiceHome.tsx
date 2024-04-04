import React from "react";
import { Layout } from '../../Abstract/Component/Layout';
import { VideoSection } from "../../Abstract/Section/VideoSection";
import { ServiceSection } from "../../Abstract/Section/ServiceSection";


export const ServiceHome = (): JSX.Element => {
    
      return (
            <Layout>
                <>
                   <VideoSection/>
                   <ServiceSection/>
                   {/* <StoreSection/>
                   <WalletSection />
                   <DeliverySection/>
                   <CreditSection /> */}
                </>
            </Layout>
    )
}