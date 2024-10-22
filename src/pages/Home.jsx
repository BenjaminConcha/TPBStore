import Banner from "../components/Banner/Banner";
import NewCollections from "../components/NewCollections/NewCollections";
import SalesAndPayments from "../components/SalesAndPayments/SalesAndPayments";
import UserReview from "../components/UserReview/UserReview";

const Home = () => {
  return (
    <>
      <Banner />
      <NewCollections />
      <SalesAndPayments />
      <UserReview />
    </>
  );
};

export default Home;
