import { albums } from "./albums.js";

function Auth0UrlBox() {
  const origin = window.location.origin;

  return (
    <section className="panel">
      <h2>Auth0 URLs to copy</h2>
      <p>Use these in your Auth0 Single Page Application settings.</p>
      <div className="url-grid">
        <div><span>Allowed Callback URLs</span><code>{origin}</code></div>
        <div><span>Allowed Logout URLs</span><code>{origin}</code></div>
        <div><span>Allowed Web Origins</span><code>{origin}</code></div>
      </div>
      <p className="small-note">
        For local testing, also add <code>http://localhost:5173</code> to each field.
      </p>
    </section>
  );
}

export default function SetupOnlyApp() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Auth0 Test App</p>
        <h1>DMB Album Explorer</h1>
        <p>
          This starter app is created, but Auth0 is not configured yet.
          Add your Auth0 domain and client ID to a local <code>.env</code> file.
        </p>
      </section>

      <Auth0UrlBox />

      <section className="panel warning">
        <h2>What to do next</h2>
        <ol>
          <li>Create a Single Page Application in Auth0.</li>
          <li>Copy your Auth0 Domain and Client ID.</li>
          <li>Create a file named <code>.env</code> in this project.</li>
          <li>Paste the values from <code>.env.example</code> and replace the placeholders.</li>
          <li>Run <code>npm install</code>, then <code>npm run dev</code>.</li>
        </ol>
      </section>

      <section className="panel locked">
        <h2>Protected album content preview</h2>
        <p>Once Auth0 is configured and you log in, this section will unlock.</p>
        <div className="album-grid blurred">
          {albums.slice(0, 4).map((album) => (
            <div className="album-card" key={album.title}>
              <h3>{album.title}</h3>
              <p>{album.year} • {album.songs.length} songs</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
