import { NavLink } from 'react-router-dom';

const linkStyles = {
    display: "inline-block",
    width: "300px",
    padding: "12px",
    margin: "0 18px 6px",
    background: "black",
    textDecoration: "none",
    color: "orange",
};

function HomeNavBar() {
    return (
        <div className='home-nav-group'>
            <div className='top-group'>
                <NavLink className='nav-buttons'
                    to="/artist-intro"
                    exact
                    style={linkStyles}
                    activeStyle={{ background: "brown" }}
                >Artist Intro
                </NavLink>

                <NavLink className='nav-buttons'
                    to="/early-years"
                    exact
                    style={linkStyles}
                    activeStyle={{ background: "brown" }}
                >Early Years
                </NavLink>

                <NavLink className='nav-buttons'
                    to="/first-album"
                    exact
                    style={linkStyles}
                    activeStyle={{ background: "brown" }}
                >First Album
                </NavLink>

                <NavLink className='nav-buttons'
                    to="/yonkers"
                    exact
                    style={linkStyles}
                    activeStyle={{ background: "brown" }}
                >Yonkers Single
                </NavLink>
            </div>

            <br /><br />

            <div className='middle-group'>

                <NavLink className='nav-buttons'
                    to="/second-album"
                    exact
                    style={linkStyles}
                    activeStyle={{ background: "brown" }}
                >Second Album
                </NavLink>

                <NavLink className='nav-buttons'
                    to="/loiter-squad"
                    exact
                    style={linkStyles}
                    activeStyle={{ background: "brown" }}
                >Loiter Squad
                </NavLink>

                <NavLink className='nav-buttons'
                    to="/third-album"
                    exact
                    style={linkStyles}
                    activeStyle={{ background: "brown" }}
                >Third Album
                </NavLink>

                <NavLink className='nav-buttons'
                    to="/fourth-album"
                    exact
                    style={linkStyles}
                    activeStyle={{ background: "brown" }}
                >Fourth Album
                </NavLink>

                <NavLink className='nav-buttons'
                    to="/bill-nye"
                    exact
                    style={linkStyles}
                    activeStyle={{ background: "brown" }}
                >Bill Nye The Science Guy
                </NavLink>
            </div>

            <br /><br />

            <div className='bottom-group'>
                <NavLink className='nav-buttons'
                    to="/fifth-album"
                    exact
                    style={linkStyles}
                    activeStyle={{ background: "brown" }}
                >Fifth Album
                </NavLink>

                <NavLink className='nav-buttons'
                    to="/sixth-album"
                    exact
                    style={linkStyles}
                    activeStyle={{ background: "brown" }}
                >Sixth Album
                </NavLink>

                <NavLink className='nav-buttons'
                    to="/seventh-album"
                    exact
                    style={linkStyles}
                    activeStyle={{ background: "brown" }}
                >Seventh Album
                </NavLink>

                <NavLink className='nav-buttons'
                    to="/outro"
                    exact
                    style={linkStyles}
                    activeStyle={{ background: "brown" }}
                >Outro
                </NavLink>
            </div>

        </div>
    );
}

export default HomeNavBar