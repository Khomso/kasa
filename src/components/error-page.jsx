import { useRouteError } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/error-page.css";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div  id="error-page">
      <Header />
      <div className="flex-center">
        <h1 className="size-big">404</h1>
        <p className="size-medium">Oups ! La page que vous demandez n'existe pas.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <p>Retourner sur la page d'accueil</p>
      </div> 
      <Footer/>
    </div>
  );
}
