// app/not-found/page.tsx
export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      <a href="/" style={{ color: "#0070f3", textDecoration: "underline" }}>
        Retour à l'accueil
      </a>
    </div>
  );
}
