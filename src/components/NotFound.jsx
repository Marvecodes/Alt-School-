import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        marginTop: "20px",
      }}
    >
      <h2>404 | Not found</h2>
      <h1 style={{ marginBottom: "30px" }}>Oops, seems you lost your way</h1>
      <Link style={{ color: "red" }} to='/'>
        Back Home
      </Link>
    </div>
  );
}
