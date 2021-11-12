
import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner'
import Features from './components/features/Features';
import Products from './components/products/Products';
import Categories from './components/categories/Categories';
import Reviews from './components/reviews/Reviews';
import Blogs from './components/blogs/Blogs';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
     <Header />
      <Banner />
      <Features />
      <Products />
      <Categories />
      <Reviews />
      <Blogs />
      <Footer />
    
    </div>
  );
}

export default App;
