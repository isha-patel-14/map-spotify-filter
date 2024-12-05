import './Sidebar.css'
import logo from '../assets/Spotifylogo.png'
import home from '../assets/Home (2).png'
import search from '../assets/Search (2).png'
import lib from '../assets/Your library.png'
import create from '../assets/Create (2).png'
import like from '../assets/Liked (2).png'
import episode from '../assets/your episodes.png'
import icon from '../assets/grommet-icons_install-option.png'

function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="home">
                    <div className="logo">
                        <img src={logo} className='logo_spotify' />
                    </div>
                    <div className="home1">
                        <img src={home} className="h_img" />
                        Home
                    </div>
                    <div><img src={search} className="h_img" />Search</div>
                    <div><img src={lib} className="h_img" />Your Library</div>
                </div>

                <div className="playlist">
                    <div><img src={create} className="h_img" />Create Playlist</div>
                    <div><img src={like} className="h_img" />Liked Songs</div>
                    <div><img src={episode} className="h_img" />Your Episodes</div>
                </div>

                <div className="fav">
                    <div className="FAV">FAV</div>
                    <div className="f_img">DailyMix1</div>
                    <div className="f_img">DiscoverWeekly</div>
                    <div className="f_img">Malyalam</div>
                    <div className="f_img">Dance/ElectronicMix</div>
                    <div className="f_img">EDM/Popular</div>
                </div>

                <div className="install">
                    <div><img src={icon} className="i_img" />Install App</div>
                </div>
            </div>
        </>
    )
}
export default Sidebar