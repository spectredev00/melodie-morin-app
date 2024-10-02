// app/not-found/page.tsx
export default function NotFound() {
  return (
    <section className="section section-error">
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      <a href="/">Retour à l'accueil</a>
    </section>
  );
}
