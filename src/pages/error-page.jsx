import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Error-page.css";
import "../styles/Layout.css";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div id="error-page">
      <div className="page-layout">
        <Header />
        <div className="flex-center">
          <h1 className="size-big">404</h1>
          <p className="size-medium">
            Oups ! La page que vous demandez n'existe pas.
          </p>
          <NavLink to="/">
            <p className="error-margin">Retourner sur la page d'accueil</p>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
}
