
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
                                <img src="/liminality.png" alt="Poster of the game Liminality" className="project-thumbnail" />
                            </div>

                            <div className="project-content">
                                <h3>Liminality</h3>

                                <div className="project-tags">
                                    <span className="tag-teal">Game Design</span>
                                    <span className="tag-green">Programming</span>
                                    <span className="tag-gold">Pygame</span>
                                </div>

                                <p>
                                    A game I made in my undergrad to learn pygame.
                                </p>

                                <a href="#contact" className="project-link">
                                    Read More
                                </a>
                            </div>
                        </article>

                        <article className="project-card">
                            <div className="project-image">
                                <img src="/dr-clueblin-flyer.png" alt="Flyer Depicting dr clueblin and the catchphrase 'its about to get funky'" className="project-thumbnail" />
                            </div>

                            <div className="project-content">
                                <h3>Dr. Clueblin, QC</h3>

                                <div className="project-tags">
                                    <span className="tag-teal">Game Design</span>
                                    <span className="tag-green">Programming</span>
                                    <span className="tag-purple">Audio Design</span>
                                </div>

                                <p>
                                    Dr. Clueblin, QC is a top-down, grid-based puzzle game where you play a goblin detective searching for his lost sister.
                                </p>

                                <a href="#contact" className="project-link">
                                    Read More
                                </a>
                            </div>
                        </article>

                        <article className="project-card">
                            <div className="project-image">
                                <img src = "/ooga-booga.png" alt="Poster of Ooga Booga" className="project-thumbnail"/>
                            </div>

                            <div className="project-content">
                                <h3>Ooga Booga</h3>

                                <div className="project-tags">
                                    <span className="tag-teal">Game Design</span>
                                    <span className="tag-gold">Board Game Development</span>
                                    <span className="tag-peach">Prototyping</span>
                                </div>

                                <p>
                                     Ooga Booga game where you caveperson and become chief. You chief when have all rock. Rock make head no round. Head round good. Make everyone else head not round and be chief.
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