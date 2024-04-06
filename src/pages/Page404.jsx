import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <main className="main-404">
      <h1 className="title-404">404</h1>
      <p className="p-404">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="link-404" to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
};

export default Page404;
