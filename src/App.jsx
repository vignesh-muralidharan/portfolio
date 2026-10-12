
import './App.css'

function App() {
    return (
        <>
            <header className="site-header">
                <nav>
                    <a href="#work">
                        Work
                    </a>
                    <a href="#about">
                        About
                    </a>
                    <a href="#contact">
                        Contact
                    </a>
                </nav>
            </header>

            <main>
                <section className="hero">
                    <p className="name">
                        Vignesh Muralidharan
                    </p>
                    <p className="eyebrow">
                        GAME DESIGN | MUSIC | VOICE ACTING
                    </p>
                    <p className="intro">
                        I'm a creative working in Game Design, Composition, and Voice Acting!
                    </p>
                </section>
                <section id="work" className="section">
                    <h2>
                        Selected Work
                    </h2>
                    <p>
                        Top Projects here;
                    </p>
                    <a className="work-link" href="#work">
                        Explore my work!
                    </a> 
                </section>
                <section id="work" className="section">
                    <p className="eyebrow">
                        A SELECTION OF MY WORK
                    </p>
                    <h2>
                        Selected Projects
                    </h2>
                    <p className="section-intro">
                        Introduce Section Here
                    </p>

                    <div className="project-grid">
                        <article className="project-card">
                            <div className="project-image">
                                <span>PROJECT 01</span>
                            </div>

                            <div className="project-content">
                                <h3>Game Project</h3>

                                <div className="project-tags">
                                    <span className="tag-green">Game Design</span>
                                    <span className="tag-green">Programming</span>
                                    <span className="tag-gold">Narrative Design</span>
                                </div>

                                <p>
                                    some game project
                                </p>

                                <a href="#contact" className="project-link">
                                    Read More
                                </a>
                            </div>
                        </article>

                        <article className="project-card">
                            <div className="project-image">
                                <span>PROJECT 02</span>
                            </div>

                            <div className="project-content">
                                <h3>Composition Name</h3>

                                <div className="project-tags">
                                    <span className="tag-gold">Composition</span>
                                    <span className="tag-teal">Music Production</span>
                                    <span className="tag-purple">Foley</span>
                                </div>

                                <p>
                                    PROJECT DESCRIPTION
                                </p>

                                <a href="#contact" className="project-link">
                                    Read More
                                </a>
                            </div>
                        </article>

                        <article className="project-card">
                            <div className="project-image">
                                <span>PROJECT 03</span>
                            </div>

                            <div className="project-content">
                                <h3>Programming Project</h3>

                                <div className="project-tags">
                                    <span className="tag-gold">Programming</span>
                                    <span className="tag-gold">Genetic AI</span>
                                    <span className="tag-gold">Prototyping</span>
                                </div>

                                <p>
                                    PROJECT DESCRIPTION
                                </p>

                                <a href="#contact" className="project-link">
                                    Read More
                                </a>
                            </div>
                        </article>
                    </div>
                </section>
                <section id="about" className="section">
                    <h2>About Me</h2>
                    <p>Intro paragraph</p>
                </section>

                <section id="contact" className="section">
                    <h2>Contact</h2>
                    <p>contact information</p>
                </section>
            </main>
        </>
    )
}

export default App