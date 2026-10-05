const nav = [
  ["Overview", "01"],
  ["Profile", "02"],
  ["Content Studio", "03"],
  ["Calendar", "04"],
  ["Analytics", "05"],
  ["Knowledge Base", "06"],
  ["Connections", "07"]
];

const posts = [
  {
    title: "What I learned from creating content for different businesses",
    type: "Experience",
    time: "Today · 7:30 PM",
    detail: "Built from your agency-side experience in content creation, scripting and campaign execution."
  },
  {
    title: "A simple content mistake that can kill a sales campaign",
    type: "Marketing",
    time: "Tomorrow · 12:30 PM",
    detail: "A practical post designed to position you as a marketer who understands conversion."
  },
  {
    title: "Why good scripts matter more than fancy editing",
    type: "Creator",
    time: "Wed · 7:30 PM",
    detail: "A creator-focused insight connecting scripting, presentation and the editing process."
  }
];

export default function Home() {
  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">M</div>
          <div>
            <strong>Mahady AI</strong>
            <span>Personal Brand Agent</span>
          </div>
        </div>

        <nav className="nav">
          {nav.map(([label, number], index) => (
            <button key={label} className={index === 0 ? "nav-item active" : "nav-item"}>
              <span>{number}</span>
              <b>{label}</b>
            </button>
          ))}
        </nav>

        <div className="sidebar-card">
          <span className="eyebrow">Agent status</span>
          <div className="status-row">
            <i className="status-dot" />
            <strong>Foundation ready</strong>
          </div>
          <p>Professional context is loaded. Authorized LinkedIn publishing will be connected in the next phase.</p>
        </div>

        <div className="profile-mini">
          <div className="avatar">MH</div>
          <div>
            <strong>MD. Mahady Hasan Nayeem</strong>
            <span>Digital Marketing Executive</span>
          </div>
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <span className="eyebrow">Monday, October 5, 2026</span>
            <h1>Your LinkedIn command center</h1>
          </div>
          <button className="ghost-button">Connect LinkedIn →</button>
        </header>

        <section className="hero-grid">
          <div className="hero-card">
            <div className="hero-glow" />
            <div className="eyebrow">AI personal brand agent</div>
            <h2>Turn your real work into a stronger professional presence.</h2>
            <p>
              The agent will learn from your CV, experience, content style and career goals—then turn that
              knowledge into profile improvements, useful LinkedIn posts and a consistent publishing system.
            </p>
            <div className="hero-actions">
              <button className="primary-button">Generate today&apos;s post</button>
              <button className="secondary-button">Review profile</button>
            </div>
          </div>

          <div className="score-card">
            <div className="eyebrow">Profile health</div>
            <div className="score">82<span>/100</span></div>
            <div className="progress"><span style={{ width: "82%" }} /></div>
            <p>Strong experience foundation. Improve your headline, featured proof and measurable results.</p>
            <div className="mini-tags">
              <span>✓ Positioning</span>
              <span>✓ Experience</span>
              <span>+ Proof</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div>
              <span className="eyebrow">Today</span>
              <h3>Content pipeline</h3>
            </div>
            <span className="pill">3 posts queued</span>
          </div>

          <div className="post-grid">
            {posts.map((post, index) => (
              <article className="post-card" key={post.title}>
                <div className="post-top">
                  <span className="post-type">{post.type}</span>
                  <span className="post-index">0{index + 1}</span>
                </div>
                <h4>{post.title}</h4>
                <p>{post.detail}</p>
                <div className="post-footer">
                  <span>{post.time}</span>
                  <button>Edit →</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="lower-grid">
          <div className="panel">
            <div className="section-head compact">
              <div>
                <span className="eyebrow">Agent actions</span>
                <h3>What the agent will automate</h3>
              </div>
            </div>
            <div className="action-list">
              <div><span className="check">✓</span><div><strong>Understand your professional identity</strong><p>CV, role history, skills and creator positioning.</p></div></div>
              <div><span className="check">✓</span><div><strong>Generate original LinkedIn content</strong><p>Experience-led posts instead of generic AI filler.</p></div></div>
              <div><span className="check">✓</span><div><strong>Maintain a daily content calendar</strong><p>Topics, drafts, publishing times and content balance.</p></div></div>
              <div><span className="check pending">+</span><div><strong>Publish & measure performance</strong><p>Official LinkedIn authorization + analytics connection.</p></div></div>
            </div>
          </div>

          <div className="panel dark-panel">
            <div className="eyebrow">Your positioning</div>
            <h3>Creator + Marketing</h3>
            <p className="dark-copy">
              Your strongest story is the combination of marketer, scriptwriter and on-camera creator. The
              agent will keep that identity consistent across your profile and posts.
            </p>
            <div className="topic-cloud">
              <span>Digital Marketing</span>
              <span>Content Strategy</span>
              <span>Script Writing</span>
              <span>Social Media</span>
              <span>Creator Journey</span>
              <span>Sales Psychology</span>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>Mahady AI · v0.1 foundation</span>
          <span>Credentials are not stored in source control</span>
        </footer>
      </section>
    </main>
  );
}
