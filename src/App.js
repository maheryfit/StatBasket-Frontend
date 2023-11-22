import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Statistique from "./Component/Statistique";
import Header from "./Component/Header";

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route 
              path="/Statistique" 
              element={
                  <>
                    <Header/>
                    <Statistique
                        titre = {"Statistique individuelles"}
                        saison = {"2023-2024"}
                    />
                  </>
                }
              />
          </Routes>
        </Router>
    </>
  );
}

export default App;
