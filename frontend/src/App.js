
import {BrowserRouter,Routes, Route,Link} from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header >
          <Navbar bg="dark" variant="dark">
            <Container>
              
            </Container>
          </Navbar>
          <Link to="/">amazona</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
          </Routes>
            
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
