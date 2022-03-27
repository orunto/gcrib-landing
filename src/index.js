// Design Components
function Button (props) {
    return(
        <div className="Button"> {props.children} </div>
    );
}

function Cards () {
    return(
        <div className="Cards"></div>
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
            <div id="info"><Cards></Cards></div>
            <div id="stores"><Cards></Cards></div>
            <div id="middle"><Cards></Cards></div>
            <div id="connect"><Cards></Cards></div>
            <div id="auto"><Cards></Cards></div>

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