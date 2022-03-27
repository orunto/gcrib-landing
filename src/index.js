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
                <span>Get Started</span>
            </Button>
        </section>
    );
}

function Dressed() {

}

function Socials() {

}
function Home (){
    return(
        <body>
            <Header/>
            <ForMen />
            <Simple />
        </body>
    )
}

ReactDOM.render(<Home />, document.getElementById("root"));