import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import "./styles.css";

const albums = [
  {
    title: "Remember Two Things",
    year: 1993,
    type: "Independent / Live-influenced Release",
    funFact:
      "This early release helped introduce many fans to the band before their major-label breakout.",
    songs: [
      "Ants Marching",
      "Tripping Billies",
      "Recently",
      "Satellite",
      "One Sweet World",
      "The Song That Jane Likes",
      "Minarets",
      "Seek Up",
      "I'll Back You Up",
      "Christmas Song"
    ]
  },
  {
    title: "Under the Table and Dreaming",
    year: 1994,
    type: "Studio Album",
    funFact:
      "This was the band's major-label breakthrough and helped bring songs like Ants Marching and Satellite to a much wider audience.",
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
    type: "Studio Album",
    funFact:
      "Crash became one of the band's most recognized albums and includes several long-running concert favorites.",
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
    type: "Studio Album",
    funFact:
      "Many fans consider this one of the band's most ambitious studio albums because of its darker sound and bigger arrangements.",
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
    type: "Studio Album",
    funFact:
      "Everyday has a more polished radio-friendly sound compared with some of the band's earlier jam-heavy records.",
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
    type: "Studio Album",
    funFact:
      "Busted Stuff includes polished versions of songs that many fans had already heard in earlier unreleased or live forms.",
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
    type: "Studio Album",
    funFact:
      "Stand Up has a brighter, more direct sound and includes several songs that became regular live-show material.",
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
    type: "Studio Album",
    funFact:
      "The album title honors saxophonist LeRoi Moore, whose nickname was GrooGrux King.",
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
    type: "Studio Album",
    funFact:
      "This album reunited the band with producer Steve Lillywhite, who had worked on several early DMB records.",
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
    type: "Studio Album",
    funFact:
      "Come Tomorrow arrived after a long gap between studio albums and includes songs developed across different periods of the band's career.",
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
    type: "Studio Album",
    funFact:
      "Walk Around the Moon continued the band's mix of reflective songs, social commentary, and live-ready arrangements.",
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
  },
  {
    title: "Live at Red Rocks 8.15.95",
    year: 1997,
    type: "Live Album",
    funFact:
      "This live album helped capture the band's reputation as a major touring act.",
    songs: [
      "Seek Up",
      "Proudest Monkey",
      "Satellite",
      "Two Step",
      "The Best of What's Around",
      "Recently",
      "Lie in Our Graves",
      "Dancing Nancies",
      "Warehouse",
      "Tripping Billies"
    ]
  },
  {
    title: "Listener Supported",
    year: 1999,
    type: "Live Album",
    funFact:
      "Listener Supported was recorded during a PBS television special and became a well-known live release for fans.",
    songs: [
      "Pantala Naga Pampa",
      "Rapunzel",
      "Rhyme & Reason",
      "The Stone",
      "#41",
      "Crash into Me",
      "Jimi Thing",
      "Two Step",
      "Too Much",
      "Warehouse"
    ]
  },
  {
    title: "Live in Chicago 12.19.98",
    year: 2001,
    type: "Live Album",
    funFact:
      "This release captures the band during the late-1990s period when many fans feel they were at a live-performance peak.",
    songs: [
      "Last Stop",
      "Don't Drink the Water",
      "#41",
      "The Maker",
      "Too Much",
      "Christmas Song",
      "Watchtower",
      "Crash into Me",
      "Jimi Thing",
      "Pantala Naga Pampa"
    ]
  },
  {
    title: "The Central Park Concert",
    year: 2003,
    type: "Live Album",
    funFact:
      "This concert was performed in New York City's Central Park and is one of the band's most famous live releases.",
    songs: [
      "Don't Drink the Water",
      "So Much to Say",
      "Anyone Seen the Bridge",
      "Too Much",
      "Granny",
      "Crush",
      "When the World Ends",
      "Dancing Nancies",
      "Warehouse",
      "Ants Marching"
    ]
  },
  {
    title: "Weekend on the Rocks",
    year: 2005,
    type: "Live Album",
    funFact:
      "This release documents a multi-night run at the famous Red Rocks Amphitheatre.",
    songs: [
      "The Stone",
      "American Baby",
      "Dreamgirl",
      "Lie in Our Graves",
      "Bartender",
      "Jimi Thing",
      "Time of the Season",
      "Two Step",
      "Ants Marching"
    ]
  }
];
const queenAlbums = [
  {
    title: "Queen II",
    year: 1974,
    type: "Studio Album",
    funFact:
      "Queen II helped establish the band's dramatic, layered sound and fantasy-inspired style.",
    songs: [
      "Procession",
      "Father to Son",
      "White Queen",
      "Some Day One Day",
      "The Loser in the End",
      "Ogre Battle",
      "The Fairy Feller's Master-Stroke",
      "Nevermore",
      "The March of the Black Queen",
      "Funny How Love Is",
      "Seven Seas of Rhye"
    ]
  },
  {
    title: "Sheer Heart Attack",
    year: 1974,
    type: "Studio Album",
    funFact:
      "This album helped Queen break through internationally and showed how flexible their sound could be.",
    songs: [
      "Brighton Rock",
      "Killer Queen",
      "Tenement Funster",
      "Flick of the Wrist",
      "Lily of the Valley",
      "Now I'm Here",
      "In the Lap of the Gods",
      "Stone Cold Crazy",
      "Dear Friends",
      "Misfire",
      "Bring Back That Leroy Brown",
      "She Makes Me",
      "In the Lap of the Gods... Revisited"
    ]
  },
  {
    title: "A Night at the Opera",
    year: 1975,
    type: "Studio Album",
    funFact:
      "This album includes Bohemian Rhapsody and is one of Queen's most famous and theatrical releases.",
    songs: [
      "Death on Two Legs",
      "Lazing on a Sunday Afternoon",
      "I'm in Love with My Car",
      "You're My Best Friend",
      "'39",
      "Sweet Lady",
      "Seaside Rendezvous",
      "The Prophet's Song",
      "Love of My Life",
      "Good Company",
      "Bohemian Rhapsody",
      "God Save the Queen"
    ]
  },
  {
    title: "News of the World",
    year: 1977,
    type: "Studio Album",
    funFact:
      "News of the World opens with two of Queen's biggest stadium anthems: We Will Rock You and We Are the Champions.",
    songs: [
      "We Will Rock You",
      "We Are the Champions",
      "Sheer Heart Attack",
      "All Dead, All Dead",
      "Spread Your Wings",
      "Fight from the Inside",
      "Get Down, Make Love",
      "Sleeping on the Sidewalk",
      "Who Needs You",
      "It's Late",
      "My Melancholy Blues"
    ]
  },
  {
    title: "Jazz",
    year: 1978,
    type: "Studio Album",
    funFact:
      "Jazz includes Don't Stop Me Now, which later became one of Queen's most beloved songs.",
    songs: [
      "Mustapha",
      "Fat Bottomed Girls",
      "Jealousy",
      "Bicycle Race",
      "If You Can't Beat Them",
      "Let Me Entertain You",
      "Dead on Time",
      "In Only Seven Days",
      "Dreamer's Ball",
      "Fun It",
      "Leaving Home Ain't Easy",
      "Don't Stop Me Now",
      "More of That Jazz"
    ]
  },
  {
    title: "The Game",
    year: 1980,
    type: "Studio Album",
    funFact:
      "The Game gave Queen major hits with Another One Bites the Dust and Crazy Little Thing Called Love.",
    songs: [
      "Play the Game",
      "Dragon Attack",
      "Another One Bites the Dust",
      "Need Your Loving Tonight",
      "Crazy Little Thing Called Love",
      "Rock It",
      "Don't Try Suicide",
      "Sail Away Sweet Sister",
      "Coming Soon",
      "Save Me"
    ]
  },
  {
    title: "The Works",
    year: 1984,
    type: "Studio Album",
    funFact:
      "The Works includes Radio Ga Ga and I Want to Break Free, two of Queen's most recognizable 1980s songs.",
    songs: [
      "Radio Ga Ga",
      "Tear It Up",
      "It's a Hard Life",
      "Man on the Prowl",
      "Machines",
      "I Want to Break Free",
      "Keep Passing the Open Windows",
      "Hammer to Fall",
      "Is This the World We Created...?"
    ]
  },
  {
    title: "A Kind of Magic",
    year: 1986,
    type: "Studio Album",
    funFact:
      "Several songs from this album were connected to the movie Highlander.",
    songs: [
      "One Vision",
      "A Kind of Magic",
      "One Year of Love",
      "Pain Is So Close to Pleasure",
      "Friends Will Be Friends",
      "Who Wants to Live Forever",
      "Gimme the Prize",
      "Don't Lose Your Head",
      "Princes of the Universe"
    ]
  }
];

function getStreamLinks(albumTitle) {
  const query = encodeURIComponent(`Dave Matthews Band ${albumTitle}`);

  return [
    {
      label: "Spotify Search",
      url: `https://open.spotify.com/search/${query}`
    },
    {
      label: "Apple Music Search",
      url: `https://music.apple.com/us/search?term=${query}`
    },
    {
      label: "YouTube Search",
      url: `https://www.youtube.com/results?search_query=${query}`
    }
  ];
}
function getArtistStreamLinks(artistName, albumTitle) {
  const query = encodeURIComponent(`${artistName} ${albumTitle}`);

  return [
    {
      label: "Spotify Search",
      url: `https://open.spotify.com/search/${query}`
    },
    {
      label: "Apple Music Search",
      url: `https://music.apple.com/us/search?term=${query}`
    },
    {
      label: "YouTube Search",
      url: `https://www.youtube.com/results?search_query=${query}`
    }
  ];
}

function LockedAlbumCard({ album }) {
  return (
    <div className="album-card locked-card">
      <h3>{album.title}</h3>
      <p>{album.year} • {album.type}</p>
      <span>Login to unlock details</span>
    </div>
  );
}

function DmbApp() {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } =
    useAuth0();

  const [selectedAlbum, setSelectedAlbum] = useState(albums[0]);
  const [selectedQueenAlbum, setSelectedQueenAlbum] = useState(queenAlbums[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [exclusivePage, setExclusivePage] = useState("dmb");
    
  function handleSearchChange(event) {
    const value = event.target.value;
    
    if (isAuthenticated && value.trim().toLowerCase() === "queenfan") {
      setExclusivePage("queen");
      setSearchTerm("");
      return;
    }
    
    setSearchTerm(value);
  }

  const filteredAlbums = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    if (!search) {
      return albums;
    }

    return albums.filter((album) => {
      const searchableText = [
        album.title,
        album.year,
        album.type,
        album.funFact,
        ...album.songs
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(search);
    });
  }, [searchTerm]);

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
            Preview a couple albums below. Login with Auth0 to unlock the full
            album list, songs, fun facts, and streaming links.
          </p>
          <button onClick={() => loginWithRedirect()}>Login with Auth0</button>
        </section>

        <section className="panel">
          <h2>Search preview</h2>
          <input
            className="search-input"
            type="text"
            placeholder="Search albums, years, or songs..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <p className="small-note">
            Search works, but full album details are locked until login.
          </p>
        </section>

        <section className="content-layout">
          <div className="album-grid">
            {filteredAlbums.map((album) => {
              const originalIndex = albums.findIndex(
                (item) => item.title === album.title
              );
              const canPreview = originalIndex < 2;

              if (!canPreview) {
                return <LockedAlbumCard key={album.title} album={album} />;
              }

              return (
                <button
                  key={album.title}
                  className={`album-card ${
                    selectedAlbum.title === album.title ? "active" : ""
                  }`}
                  onClick={() => setSelectedAlbum(album)}
                >
                  <h3>{album.title}</h3>
                  <p>{album.year} • {album.type}</p>
                  <span>Preview only</span>
                </button>
              );
            })}
          </div>

          <aside className="songs-panel locked-details">
            <p className="eyebrow">Preview Mode</p>
            <h2>{selectedAlbum.title}</h2>
            <p>
              This album is visible as a preview, but songs, fun facts, and
              streaming links are locked until you log in.
            </p>
            <button onClick={() => loginWithRedirect()}>
              Login to Unlock Details
            </button>
          </aside>
        </section>
      </main>
    );
  }
  const queenFilteredAlbums = queenAlbums.filter((album) => {
    const search = searchTerm.toLowerCase().trim();
  
    if (!search) {
      return true;
    }
  
    const searchableText = [
      album.title,
      album.year,
      album.type,
      album.funFact,
      ...album.songs
    ]
      .join(" ")
      .toLowerCase();
  
    return searchableText.includes(search);
  });
  
  if (exclusivePage === "queen") {
    return (
      <main className="page">
        <header className="header">
          <div>
            <strong>Queen Album Explorer</strong>
            <span>Exclusive page unlocked</span>
          </div>
  
          <button
            className="secondary"
            onClick={() => {
              setExclusivePage("dmb");
              setSearchTerm("");
            }}
          >
            Back to DMB
          </button>
        </header>
  
        <section className="hero compact">
          <p className="eyebrow">Exclusive Page</p>
          <h1>Queen Albums</h1>
          <p>
            You found the hidden Queen page. Search albums, click one, and explore
            songs, fun facts, and streaming links.
          </p>
        </section>
  
        <section className="panel">
          <h2>Search Queen albums</h2>
          <input
            className="search-input"
            type="text"
            placeholder="Search Queen albums, songs, years, or type..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <p className="small-note">
            Showing {queenFilteredAlbums.length} of {queenAlbums.length} Queen albums.
          </p>
        </section>
  
        <section className="content-layout">
          <div className="album-grid">
            {queenFilteredAlbums.map((album) => (
              <button
                key={album.title}
                className={`album-card ${
                  selectedQueenAlbum.title === album.title ? "active" : ""
                }`}
                onClick={() => setSelectedQueenAlbum(album)}
              >
                <h3>{album.title}</h3>
                <p>
                  {album.year} • {album.type}
                </p>
                <span>{album.songs.length} songs</span>
              </button>
            ))}
          </div>
  
          <aside className="songs-panel">
            <p className="eyebrow">
              {selectedQueenAlbum.year} • {selectedQueenAlbum.type}
            </p>
            <h2>{selectedQueenAlbum.title}</h2>
  
            <h3>Fun fact</h3>
            <p>{selectedQueenAlbum.funFact}</p>
  
            <h3>Song list</h3>
            <ol>
              {selectedQueenAlbum.songs.map((song) => (
                <li key={song}>{song}</li>
              ))}
            </ol>
  
            <h3>Streams</h3>
            <div className="stream-links">
              {getArtistStreamLinks("Queen", selectedQueenAlbum.title).map(
                (link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </aside>
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
        <p>
          Search albums, click one, and explore song titles, a fun fact, and
          streaming search links.
        </p>
      </section>

      <section className="panel">
        <h2>Search albums</h2>
        <input
          className="search-input"
          type="text"
          placeholder="Search by album, song, year, or type..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <p className="small-note">
          Showing {filteredAlbums.length} of {albums.length} albums.
        </p>
      </section>

      <section className="content-layout">
        <div className="album-grid">
          {filteredAlbums.map((album) => (
            <button
              key={album.title}
              className={`album-card ${
                selectedAlbum.title === album.title ? "active" : ""
              }`}
              onClick={() => setSelectedAlbum(album)}
            >
              <h3>{album.title}</h3>
              <p>{album.year} • {album.type}</p>
              <span>{album.songs.length} songs</span>
            </button>
          ))}
        </div>

        <aside className="songs-panel">
          <p className="eyebrow">{selectedAlbum.year} • {selectedAlbum.type}</p>
          <h2>{selectedAlbum.title}</h2>

          <h3>Fun fact</h3>
          <p>{selectedAlbum.funFact}</p>

          <h3>Song list</h3>
          <ol>
            {selectedAlbum.songs.map((song) => (
              <li key={song}>{song}</li>
            ))}
          </ol>

          <h3>Streams</h3>
          <div className="stream-links">
            {getStreamLinks(selectedAlbum.title).map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
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
      <main className="page">
        <section className="hero">
          <h1>Auth0 is not configured yet</h1>
          <p>Add your Auth0 domain and client ID in main.jsx.</p>
        </section>
      </main>
    )}
  </React.StrictMode>
);