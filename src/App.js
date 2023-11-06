

// App.js
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import UploadRecipe from './components/UploadRecipe';
import RecipeList from './components/RecipeList';
import RateCommentPage from './components/RateCommentPage';
import Footer from './components/Footer';
import Features from './components/Features';
import ExampleComponent from './ExampleComponent';
function Home() {
    return (
        <div className="home">
            <div className='container'>
                <Features />
                {/* <UploadRecipe /> */}
                <Footer />
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/upload-recipe' element={<UploadRecipe />} />
                <Route path='/recipe-list' element={<RecipeList />} />
                <Route path='/rate-comment/:id' element={<RateCommentPage />} />
            </Routes>
                <ExampleComponent />
            {/* <Footer /> */}
        </Router>
    );
}

export default App;
