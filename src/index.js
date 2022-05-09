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
            <img src="./images/image2.png" id="back"></img>
            <img src="./images/image1.png" id="front"></img>
        </div>
    );
}

function TalkButton (props) {
    return (
        <div className="TalkButton">
            {props.children}
        </div>
    )
}


function DataForm (props) {
    return (
        <form id="DataForm" action="https://submit-form.com/KSHU6qfv">
            <input type="tel" id="tel" placeholder="000-000-000-0000"></input>
            <input id="submit" value="Phone Number" type="submit"></input>
        </form>
    )
}


// Interactions

function Drop () {
    navbar.style.height = "500px";
    menu1.style.display = "none";
}

function Retract () {
    navbar.style.height = "50px";
    menu1.style.display = "block";
}

// Sections
function Header (){
    return(
        <nav id="navbar">
            <img src="https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/Logo.png" id="logo"></img>
            <img src="https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/Icon.png" id="logo2"></img>
        </nav>
    );
}

function ForMen() {
    return(
        <section className="ForMen">
            <img src="https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/dapper.png" id="chef"></img>
            <img src="https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/dapper.png" id="chef2"></img>
            <h1>Fashion for Men</h1>
            <p>Everything you need to look good</p>

        </section>
    )
}

function Simple () {
    return (
        <section className="Simple">
            <h2>Fashion should not be difficult</h2>
            <p className="simpler">...and we make it even simpler</p>
            <div id="info">
                <Cards>
                    <img src="/images/search.svg"></img>
                    <p>Find the information you need, answers to any questions</p>
                </Cards>
            </div>
            <div id="stores">
                <Cards>
                <img src="/images/Location.svg"></img>
                <p>Find the best stores to shop from</p>
                </Cards>
            </div>
            <div id="middle">
                <Cards>
                <img src="/images/AI.svg"></img>
                <p>Use our AI to build up your styles</p>
                </Cards>
            </div>
            <div id="connect">
                <Cards>
                <img src="/images/Needle.svg"></img>
                <p>Connect to the best of fashion talent in Nigeria</p>
                </Cards>
            </div>
            <div id="auto">
                <Cards>
                <img src="/images/Hanger.svg"></img>
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
                <div id="insta"><a href="https://www.instagram.com/gentlemens_crib_ng/">
                    <TalkButton>
                        <img src="./images/Instagram.svg"/>
                        <p>@gentlemans_crib_ng</p>
                        <span>Visit Page</span>
                    </TalkButton></a>
                </div>
                <div id="facebook"><a href="https://www.facebook.com/pages/category/E-commerce-Website/Gentlemens-Crib-101456768779286/"><TalkButton><img src="./images/Facebook.svg"/>
                <p>Gentlemen's Crib</p>
                        <span>Visit Page</span>
                </TalkButton></a></div>
                <div id="twitter"><a href="https://twitter.com/gentlemenscrib"><TalkButton><img src="./images/Twitter.svg"/>
                <p>@GentlemensCrib</p>
                        <span>Visit Page</span>
                </TalkButton></a></div>
                <div id="whatsapp"><a href="https://wa.me/2348027132741"><TalkButton><img src="./images/Whatsapp.svg"/>
                <p>wa.me/2348027132741</p>
                        <span>Send a Text</span>
                </TalkButton></a></div>
                <div id="linkedin"><a href="https://linkedin.com/"><TalkButton><img src="./images/LinkedIn.svg"/>
                <p>Gentlemen's Crib</p>
                        <span>Visit Profile</span>
                </TalkButton></a></div>
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
            <a href="#here"><span id="backtotop">Back to Top</span></a>
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
            {/* <Footer /> */}
        </body>
    );
}

ReactDOM.render(<Home />, document.getElementById("root"));