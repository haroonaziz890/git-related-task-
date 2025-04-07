import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Deals() {
  return (
    <div style={{ padding: '20px' , backgroundColor : "black" , color : "white" }}>
      <h2>WELCOME TO FIRST PAGE</h2>
      <p>
        Find the best deals on our products! Find the best deals on our products Find the best deals on our products Find the best deals on our products
      </p>

      {/* ✅ Image کو درست کیا */}
      <img src="/assest/logo.jpeg" alt="Haroon Aziz" style={{ width: '500px', height: 'auto', display: 'block', marginBottom: '10px' }} />
      <p>
      Find the best deals on our products! Find the best deals on our products Find the best deals on our products Find the best deals on our products<br/>      Find the best deals on our products! Find the best deals on our products Find the best deals on our products Find the best deals on our products<br/>      Find the best deals on our products! Find the best deals on our products Find the best deals on our products Find the best deals on our products
      </p>

      <button style={{ padding: '10px', backgroundColor: 'green', color: 'white', border: 'none' }}>Shop Now</button>
    </div>
  );
}

function CustomerService() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>welcome to coustumer servise </h2>
      <p>Find the best <br/>deals on our products! Find<br/> the best deals on our products Find the best deals on our products Find the best d<br/>eals on our products<br/>      Find the best deals on our products! Find the best deals on our products Find the best deals on our products Find the<br/> best deals on our products<br/>      Find the best deals on our <br/>products! Find the best deals on our products Find the best deals on our products Find the best deals on our products
      </p>
      <p>Find the best <br/>deals on our products! Find<br/> the best deals on our products Find the best deals on our products Find the best d<br/>eals on our products<br/>      Find the best deals on our products! Find the best deals on our products Find the best deals on our products Find the<br/> best deals on our products<br/>      Find the best deals on our <br/>products! Find the best deals on our products Find the best deals on our products Find the best deals on our products
      </p>    <p>Find the best <br/>deals on our products! Find<br/> the best deals on our products Find the best deals on our products Find the best d<br/>eals on our products<br/>      Find the best deals on our products! Find the best deals on our products Find the best deals on our products Find the<br/> best deals on our products<br/>      Find the best deals on our <br/>products! Find the best deals on our products Find the best deals on our products Find the best deals on our products
      </p>
      <img src="/assest/logo.jpeg" alt="Haroon Aziz" style={{ width: '500px', height: 'auto', display: 'block', marginBottom: '10px' }} />
      <ul>
        <li>Call us: 03430042510</li>
        <li>haroon Aziz</li>
      </ul>
    </div>
  );
}

function Registry() {
  return (
    <div style={{ padding: '20px' , backgroundColor :"yellowgreen" , color :"whitesmoke" }}>
        <img src="/assest/th.jpeg" alt="Haroon Aziz" style={{ width: '500px', height: 'auto', display: 'block', marginBottom: '10px' }} />
      <h2>Registry Page</h2>
      <p>Create or manage your gift registry.</p>
      <p>Find the best <br/>deals on our products! Find<br/> the best deals on our products Find the best deals on our products Find the best d<br/>eals on our products<br/>      Find the best deals on our products! Find the best deals on our products Find the best deals on our products Find the<br/> best deals on our products<br/>      Find the best deals on our <br/>products! Find the best deals on our products Find the best deals on our products Find the best deals on our products
      </p>    <p>Find the best <br/>deals on our products! Find<br/> the best deals on our products Find the best deals on our products Find the best d<br/>eals on our products<br/>      Find the best deals on our products! Find the best deals on our products Find the best deals on our products Find the<br/> best deals on our products<br/>      Find the best deals on our <br/>products! Find the best deals on our products Find the best deals on our products Find the best deals on our products
      </p>    <p>Find the best <br/>deals on our products! Find<br/> the best deals on our products Find the best deals on our products Find the best d<br/>eals on our products<br/>      Find the best deals on our products! Find the best deals on our products Find the best deals on our products Find the<br/> best deals on our products<br/>      Find the best deals on our <br/>products! Find the best deals on our products Find the best deals on our products Find the best deals on our products
      </p>    <p>Find the best <br/>deals on our products! Find<br/> the best deals on our products Find the best deals on our products Find the best d<br/>eals on our products<br/>      Find the best deals on our products! Find the best deals on our products Find the best deals on our products Find the<br/> best deals on our products<br/>      Find the best deals on our <br/>products! Find the best deals on our products Find the best deals on our products Find the best deals on our products
      </p>    <p>Find the best <br/>deals on our products! Find<br/> the best deals on our products Find the best deals on our products Find the best d<br/>eals on our products<br/>      Find the best deals on our products! Find the best deals on our products Find the best deals on our products Find the<br/> best deals on our products<br/>      Find the best deals on our <br/>products! Find the best deals on our products Find the best deals on our products Find the best deals on our products
      </p>    <p>Find the best <br/>deals on our products! Find<br/> the best deals on our products Find the best deals on our products Find the best d<br/>eals on our products<br/>      Find the best deals on our products! Find the best deals on our products Find the best deals on our products Find the<br/> best deals on our products<br/>      Find the best deals on our <br/>products! Find the best deals on our products Find the best deals on our products Find the best deals on our products
      </p>    <p>Find the best <br/>deals on our products! Find<br/> the best deals on our products Find the best deals on our products Find the best d<br/>eals on our products<br/>      Find the best deals on our products! Find the best deals on our products Find the best deals on our products Find the<br/> best deals on our products<br/>      Find the best deals on our <br/>products! Find the best deals on our products Find the best deals on our products Find the best deals on our products
      </p>
      <input type="text" placeholder="Search Registry" style={{ padding: '5px', width: '200px' }} />
      <button style={{ padding: '5px', marginLeft: '10px' }}>Search</button>
    </div>
  );
}

function GiftCards() {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Gift Cards</h2>
        <p>Buy a gift card for your loved ones.</p>
  
        {/* Image Grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          <img src="/assest/th.jpeg" alt="Haroon Aziz" style={{ width: '24%', height: 'auto' }} />
          <img src="/assest/th.jpeg" alt="Haroon Aziz" style={{ width: '24%', height: 'auto' }} />
          <img src="/assest/th.jpeg" alt="Haroon Aziz" style={{ width: '24%', height: 'auto' }} />
          <img src="/assest/th.jpeg" alt="Haroon Aziz" style={{ width: '24%', height: 'auto' }} />
          
          <img src="/assest/logo.jpeg" alt="Haroon Aziz" style={{ width: '24%', height: 'auto' }} />
          <img src="/assest/logo.jpeg" alt="Haroon Aziz" style={{ width: '24%', height: 'auto' }} />
          <img src="/assest/logo.jpeg" alt="Haroon Aziz" style={{ width: '24%', height: 'auto' }} />
          <img src="/assest/logo.jpeg" alt="Haroon Aziz" style={{ width: '24%', height: 'auto' }} />
        </div>
  
        <select style={{ padding: '5px', marginTop: '10px' }}>
          <option>$10</option>
          <option>$25</option>
          <option>$50</option>
          <option>$100</option>
        </select>
        <button style={{ padding: '5px', marginLeft: '10px' }}>Buy Now</button>
      </div>
    );
  }
  
function App() {
  return (
    <Router>
      <div>
        {/* Horizontal Menu */}
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', backgroundColor: '#007bff', padding: '10px' }}>
          <Link to="/deals" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }}>Today's Deals</Link>
          <Link to="/customer-service" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }}>Customer Service</Link>
          <Link to="/registry" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }}>Registry</Link>
          <Link to="/gift-cards" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }}>Gift Cards</Link>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/deals" element={<Deals />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/gift-cards" element={<GiftCards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
