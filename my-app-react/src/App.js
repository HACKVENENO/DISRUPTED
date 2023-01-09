import React from 'react'

import "./assets/css/app.css";


//COMPONENTES
import RouterApp from "./components/RouterApp";

function App() {
  return <RouterApp />;
}

export default App;







// app.use(cors())
// function App() {

//   return (
//     <BrowserRouter>
//       <MainNavigation>
//         <Routes>
//                 <Route path={"/lastUser"} element={<Usuario/>} />
//                 <Route path={"/products/total"} element={<ProductsTotal/>} />
//                 <Route path={"/products/categorias"} element={<Categorias/>} />
//         </Routes>
//       </MainNavigation>
//     </BrowserRouter>
//   )
// }

// export default App;
