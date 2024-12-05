import image11 from '../assets/image11.png'
import heart from '../assets/bx_bxs-heart.png'
import music from '../assets/Music Player Options.png'
import rightOpt from '../assets/Right options.png'
import './Controls.css'

function Controls(){
    return(
        <>
        <div className="bottom-bar">
        <div className="img_1"><img src={image11} className='image11' />
          <div className="dream_on">Dreaming On <br />NEFFEX</div>
          <div><img src={heart} className="heart" /></div>
        </div>
        <div>
          <img src={music} className='music' />
        </div>
        <div>
          <img src={rightOpt} className="img_2" />
        </div>
      </div>

      <div className="green">
        <div className="listenOn"><img src={''} />Listening on ASUS-ROG-G531GT</div>
      </div>
        </>
    )
}
export default Controls