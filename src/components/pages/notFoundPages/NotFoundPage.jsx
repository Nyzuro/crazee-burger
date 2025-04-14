import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>NotFoundPage</h1>
      <Link to={"/"}>
        <button>Retouner vers la page d'accueil</button>
      </Link>
    </div>
  );
}
