import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import "./styles.css";

const albums = [
  {
    title: "Under the Table and Dreaming",
    year: 1994,
    songs: [
      "The Best of What's Around",
      "What Would You Say",
      "Satellite",
      "Rhyme & Reason",
      "Typical Situation",
      "Dancing Nancies",
      "Ants Marching",
      "Lover Lay Down",
      "Jimi Thing",
      "Warehouse",
      "Pay for What You Get",
      "#34"
    ]
  },
  {
    title: "Crash",
    year: 1996,
    songs: [
      "So Much to Say",
      "Two Step",
      "Crash into Me",
      "Too Much",
      "#41",
      "Say Goodbye",
      "Drive In Drive Out",
      "Let You Down",
      "Lie in Our Graves",
      "Cry Freedom",
      "Tripping Billies",
      "Proudest Monkey"
    ]
  },
  {
    title: "Before These Crowded Streets",
    year: 1998,
    songs: [
      "Pantala Naga Pampa",
      "Rapunzel",
      "The Last Stop",
      "Don't Drink the Water",
      "Stay (Wasting Time)",
      "Halloween",
      "The Stone",
      "Crush",
      "The Dreaming Tree",
      "Pig",
      "Spoon"
    ]
  },
  {
    title: "Everyday",
    year: 2001,
    songs: [
      "I Did It",
      "When the World Ends",
      "The Space Between",
      "Dreams of Our Fathers",
      "So Right",
      "If I Had It All",
      "What You Are",
      "Angel",
      "Fool to Think",
      "Sleep to Dream Her",
      "Mother Father",
      "Everyday"
    ]
  },
  {
    title: "Busted Stuff",
    year: 2002,
    songs: [
      "Busted Stuff",
      "Grey Street",
      "Where Are You Going",
      "You Never Know",
      "Captain",
      "Raven",
      "Grace Is Gone",
      "Kit Kat Jam",
      "Digging a Ditch",
      "Big Eyed Fish",
      "Bartender"
    ]
  },
  {
    title: "Stand Up",
    year: 2005,
    songs: [
      "Dreamgirl",
      "Old Dirt Hill (Bring That Beat Back)",
      "Stand Up (For It)",
      "American Baby Intro",
      "American Baby",
      "Smooth Rider",
      "Everybody Wake Up",
      "Out of My Hands",
      "Hello Again",
      "Louisiana Bayou",
      "Stolen Away on 55th & 3rd",
      "You Might Die Trying",
      "Steady as We Go",
      "Hunger for the Great Light"
    ]
  },
  {
    title: "Big Whiskey & the GrooGrux King",
    year: 2009,
    songs: [
      "Grux",
      "Shake Me Like a Monkey",
      "Funny the Way It Is",
      "Lying in the Hands of God",
      "Why I Am",
      "Dive In",
      "Spaceman",
      "Squirm",
      "Alligator Pie",
      "Seven",
      "Time Bomb",
      "Baby Blue",
      "You & Me"
    ]
  },
  {
    title: "Away from the World",
    year: 2012,
    songs: [
      "Broken Things",
      "Belly Belly Nice",
      "Mercy",
      "Gaucho",
      "Sweet",
      "The Riff",
      "Belly Full",
      "If Only",
      "Rooftop",
      "Snow Outside",
      "Drunken Soldier"
    ]
  },
  {
    title: "Come Tomorrow",
    year: 2018,
    songs: [
      "Samurai Cop (Oh Joy Begin)",
      "Can't Stop",
      "Here On Out",
      "That Girl Is You",
      "She",
      "Idea of You",
      "Virginia in the Rain",
      "Again and Again",
      "bkdkdkdd",
      "Black and Blue Bird",
      "Come On Come On",
      "Do You Remember",
      "Come Tomorrow",
      "When I'm Weary"
    ]
  },
  {
    title: "Walk Around the Moon",
    year: 2023,
    songs: [
      "Walk Around the Moon",
      "Madman's Eyes",
      "Looking for a Vein",
      "The Ocean and the Butterfly",
      "It Could Happen",
      "Something to Tell My Baby",
      "After Everything",
      "All You Wanted Was Tomorrow",
      "The Only Thing",
      "Break Free",
      "Monsters",
      "Singing From the Windows"
    ]
  }
];

function SetupPage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Auth0 Test App</p>
        <h1>DMB Album Explorer</h1>
        <p>
          The website works. Now add your real Auth0 Domain and Client ID inside the .env file.
        </p>
      </section>

      <section className="panel">
        <h2>Auth0 URLs to copy</h2>
        <p>Add this URL to your Auth0 app settings:</p>

        <div className="url-grid">
          <div>
            <span>Allowed Callback URLs</span>
            <code>{window.location.origin}</code>
          </div>
          <div>
            <span>Allowed Logout URLs</span>
            <code>{window.location.origin}</code>
          </div>
          <div>
            <span>Allowed Web Origins</span>
            <code>{window.location.origin}</code>
          </div>
        </div>
      </section>
    </main>
  );
}

function DmbApp() {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } = useAuth0();
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0]);

  if (isLoading) {
    return (
      <main className="page">
        <section className="hero">
          <h1>Loading Auth0...</h1>
        </section>
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <main className="page">
        <section className="hero">
          <p className="eyebrow">Protected by Auth0</p>
          <h1>Dave Matthews Band Album Explorer</h1>
          <p>
            Login to unlock the album list and song titles.
          </p>
          <button onClick={() => loginWithRedirect()}>
            Login with Auth0
          </button>
        </section>

        <section className="panel">
          <h2>What this tests</h2>
          <p>
            This tests Auth0 login, callback URLs, logout URLs, web origins, and protected content.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <header className="header">
        <div>
          <strong>DMB Album Explorer</strong>
          <span>Logged in as {user?.email || user?.name}</span>
        </div>

        <button
          className="secondary"
          onClick={() =>
            logout({
              logoutParams: {
                returnTo: window.location.origin
              }
            })
          }
        >
          Logout
        </button>
      </header>

      <section className="hero compact">
        <p className="eyebrow">Unlocked</p>
        <h1>Dave Matthews Band Albums</h1>
        <p>Click an album to see the songs.</p>
      </section>

      <section className="content-layout">
        <div className="album-grid">
          {albums.map((album) => (
            <button
              key={album.title}
              className={`album-card ${
                selectedAlbum.title === album.title ? "active" : ""
              }`}
              onClick={() => setSelectedAlbum(album)}
            >
              <h3>{album.title}</h3>
              <p>{album.year}</p>
              <span>{album.songs.length} songs</span>
            </button>
          ))}
        </div>

        <aside className="songs-panel">
          <p className="eyebrow">{selectedAlbum.year}</p>
          <h2>{selectedAlbum.title}</h2>
          <ol>
            {selectedAlbum.songs.map((song) => (
              <li key={song}>{song}</li>
            ))}
          </ol>
        </aside>
      </section>
    </main>
  );
}

const domain = "dev-nbsatrzqnfxe6wuu.us.auth0.com";
const clientId = "kFcQGqnXHwNDKUaRmiZ1TzxBTAIpuU0o";

const auth0IsConfigured = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {auth0IsConfigured ? (
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
        cacheLocation="localstorage"
      >
        <DmbApp />
      </Auth0Provider>
    ) : (
      <SetupPage />
    )}
  </React.StrictMode>
);