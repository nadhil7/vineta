import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import MarqueeStrip from "./components/MarqueeStrip";
import CategoryHighlights from "./components/CategoryHighlights";
import NewArrivals from "./components/NewArrivals";
import TimelessGraceBanner from "./components/TimelessGraceBanner";
import BestSellers from "./components/BestSellers";
import CustomerReviews from "./components/CustomerReviews";
import ServiceFeatures from "./components/ServiceFeatures";
import CommunityStories from "./components/CommunityStories";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <MarqueeStrip />
        <CategoryHighlights />
        <NewArrivals />
        <TimelessGraceBanner />
        <BestSellers />
        <CustomerReviews />
        <ServiceFeatures />
        <CommunityStories />
      </main>
      <Footer />
    </>
  );
}
