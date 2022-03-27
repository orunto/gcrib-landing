// Design Components
function Button (props) {
    return(
        <div className="Button"> {props.children} </div>
    );
}

function Cards (props) {
    return(
        <div className="Cards">{props.children}</div>
    );
}

function Slider (props) {
    return (
        <div className="Slider">
            <div id="back"></div>
            <div id="front"></div>
        </div>
    );
}

function TalkButton (props) {
    return (
        <div className="TalkButton"></div>
    )
}


function DataForm (props) {
    return (
        <form id="DataForm">
            <input type="tel" id="tel" placeholder="000-000-000-0000"></input>
            <input id="submit" value="Phone Number" type="submit"></input>
        </form>
    )
}



// Sections
function Header (){
    return(
        <nav>
            <img src="../images/Logo T.png" alt="logo"/>
            <ul>
                <li><a href="https://blog.gentlemenscrib.com">For You</a></li>
                <li>For Celebs</li>
                <li>For Companies</li>
                <li>Partners</li>
            </ul>

            <Button>
                <span>Visit Crib</span>
            </Button>
        </nav>
    );
}

function ForMen() {
    return(
        <section className="ForMen">
            <h1>Fashion for Men</h1>
            <p>Everything you need to feel good</p>

            <Button>
                <span>Get Started</span>
            </Button>
        </section>
    )
}

function Simple () {
    return (
        <section className="Simple">
            <h2>Fashion should not be difficult and we make it even simpler</h2>
            <div id="info">
                <Cards>
                    <p>Find the information you need, answers to any questions</p>
                </Cards>
            </div>
            <div id="stores">
                <Cards>
                <p>Find the best stores to shop from</p>
                </Cards>
            </div>
            <div id="middle">
                <Cards>
                <p>Use our AI to build up your styles</p>
                </Cards>
            </div>
            <div id="connect">
                <Cards>
                <p>Connect to the best of fashion talent in Nigeria</p>
                </Cards>
            </div>
            <div id="auto">
                <Cards>
                <p>Simple, automated wardrobe building plans.</p>
                </Cards>
            </div>
            <Button>
                <span>Let's Go</span>
            </Button>
        </section>
    );
}

function Dressed() {
    return(
        <section className="Dressed">
            <h2>Get dressed for your events</h2>
            <p>We offer affordable and almost free online and in-person support for you to look good during the 
                most important moments in your life.</p>

            <Slider></Slider>

            <Button>
                <span>I need this</span>
            </Button>
        </section>
        );
}

function Socials (){
    return (
        <section id="Socials">
            <h2>We like to talk a lot on social media about fashion</h2>
            <div className="Spread">
                <TalkButton></TalkButton>
                <TalkButton></TalkButton>
                <TalkButton></TalkButton>
                <TalkButton></TalkButton>
                <TalkButton></TalkButton>
            </div>
        </section>
    );
}

function OurApp () {
    return (
        <section className="OurApp">
            <h1>Our App is Coming</h1>
            <p>Would you like us to notify you when it is ready?</p>
            <DataForm></DataForm>
        </section>

    );
}

function Footer (){
    return(
        <footer>
            <span id="crib">Gentlemen's Crib</span>
            <span id="backtotop">Back to Top</span>
            <span id="visit">Visit Crib</span>
        </footer>
    );
}

function Home (){
    return(
        <body>
            <Header/>
            <ForMen />
            <Simple />
            <Dressed />
            <Socials />
            <OurApp />
            <Footer />
        </body>
    );
}

ReactDOM.render(<Home />, document.getElementById("root"));