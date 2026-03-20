import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Counter } from "./components/Counter/Counter";
import SpaceMission from "./components/SpaceMission";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import ProfileLayout from "./layouts/ProfileLayout";
import Settings from "./pages/Settings";
import PersonalInfo from "./pages/PersonalInfo";
import Greeting from "./components/Greeting/Greeting";
import ProductPage from "./pages/ProductPage";
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CategoriesPage from "./pages/CategoriesPage";
import { CreateCategoryPage } from "./pages/CreateCategoryPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/space-mission" element={<SpaceMission />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/products/:id" element={<ProductPage />} />

            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:id" element={<UserPage />} />

            <Route path="/signup" element={<RegisterPage />} />

            <Route path="/signin" element={<LoginPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/create" element={<CreateCategoryPage />} />

            <Route path="/profile" element={<ProfileLayout />}>
              <Route path="/profile" element={<Greeting name="John" />} />
              <Route path="/profile/settings" element={<Settings />} />
              <Route path="/profile/personal-info" element={<PersonalInfo />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
//<Route path="/products/:id/:categoryId" element={<ProductPage />} />
export default App;
