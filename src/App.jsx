import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { albums } from "./albums.js";

function Auth0UrlBox() {
  const origin = window.location.origin;

  return (
    <section className="panel">
      <h2>Auth0 test settings for this site</h2>
      <p>These are the values you should add to your Auth0 Application settings.</p>
      <div className="url-grid">
        <div><span>Website URL</span><code>{origin}</code></div>
        <div><span>Allowed Callback URLs</span><code>{origin}</code></div>
        <div><span>Allowed Logout URLs</span><code>{origin}</code></div>
        <div><span>Allowed Web Origins</span><code>{origin}</code></div>
      </div>
      <p className="small-note">Local development URL: <code>http://localhost:5173</code></p>
    </section>
  );
}

function Header() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <header className="header">
      <div>
        <strong>DMB Album Explorer</strong>
        <span>Auth0 protected demo</span>
      </div>
      <nav>
        {isAuthenticated ? (
          <>
            <span className="user-pill">Logged in as {user?.email || user?.name}</span>
            <button
              className="secondary"
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            >
              Logout
            </button>
          </>
        ) : (
          <button onClick={() => loginWithRedirect()}>Login with Auth0</button>
        )}
      </nav>
    </header>
  );
}

function PublicLanding() {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <section className="hero">
        <p className="eyebrow">Protected by Auth0</p>
        <h1>Dave Matthews Band Album Explorer</h1>
        <p>
          Click login to unlock the album list and song titles. This is a simple
          test site for learning Auth0 login, logout, callback URLs, and protected content.
        </p>
        <button onClick={() => loginWithRedirect()}>Login to View Albums</button>
      </section>

      <Auth0UrlBox />

      <section className="panel locked">
        <h2>Albums are locked</h2>
        <p>Your family will see this page first. After they log in, the album explorer unlocks.</p>
        <div className="album-grid blurred">
          {albums.slice(0, 6).map((album) => (
            <div className="album-card" key={album.title}>
              <h3>{album.title}</h3>
              <p>{album.year} • {album.songs.length} songs</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ProtectedAlbums() {
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0]);

  return (
    <>
      <section className="hero compact">
        <p className="eyebrow">Unlocked</p>
        <h1>Dave Matthews Band Albums</h1>
        <p>Click an album to see the songs. Song titles only — no lyrics or audio are included.</p>
      </section>

      <section className="content-layout">
        <div className="album-grid">
          {albums.map((album) => (
            <button
              className={`album-card ${selectedAlbum.title === album.title ? "active" : ""}`}
              key={album.title}
              onClick={() => setSelectedAlbum(album)}
            >
              <h3>{album.title}</h3>
              <p>{album.year} • {album.type}</p>
              <span>{album.songs.length} songs</span>
            </button>
          ))}
        </div>

        <aside className="songs-panel">
          <p className="eyebrow">{selectedAlbum.year}</p>
          <h2>{selectedAlbum.title}</h2>
          <ol>
            {selectedAlbum.songs.map((song) => <li key={song}>{song}</li>)}
          </ol>
        </aside>
      </section>

      <Auth0UrlBox />
    </>
  );
}

function ProfilePanel() {
  const { user, isAuthenticated } = useAuth0();
  if (!isAuthenticated) return null;

  return (
    <section className="panel profile-panel">
      <h2>Your Auth0 user profile</h2>
      <p>This proves Auth0 returned user information to the website after login.</p>
      <pre>{JSON.stringify({
        name: user?.name,
        email: user?.email,
        email_verified: user?.email_verified,
        sub: user?.sub
      }, null, 2)}</pre>
    </section>
  );
}

export default function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <main className="page"><div className="loading">Loading Auth0 session...</div></main>;
  }

  return (
    <main className="page">
      <Header />
      {isAuthenticated ? <ProtectedAlbums /> : <PublicLanding />}
      <ProfilePanel />
    </main>
  );
}
