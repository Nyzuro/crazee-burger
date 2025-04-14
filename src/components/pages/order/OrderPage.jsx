import { Link } from "react-router-dom";

export default function OrderPage() {
  return (
    <div>
      <Link to={"/login"}>
        <button>Deconnexion</button>
      </Link>
    </div>
  );
}
