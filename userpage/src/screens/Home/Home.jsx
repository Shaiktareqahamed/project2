import { useContext } from 'react';
import { StoreContext } from '../../context/storecontext';
import Header from '../../components/Header/Header';
import ServiceItem from '../../components/Serviceitem/Serviceitem';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = () => {
  const { food_list } = useContext(StoreContext);

  return (
    <>
      <Header />
      <section className="services-section">
        <h2>Bike Services</h2>
        <div className="services">
          {food_list.map(item => (
            <ServiceItem key={item._id} item={item} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;

