import topArrow from '../assets/top arrow navigation.png'
import user from '../assets/User.png'
import image4 from '../assets/image4.png'
import image3 from '../assets/image3.png'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image9 from '../assets/image9.png'
import image8 from '../assets/image8.png'
import image7 from '../assets/image7.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image10 from '../assets/image10.png'
import like from '../assets/Liked (2).png'
import './MainBody.css'

function MainBody(){

    //map -- short method to to code of elements having same css n styling
    const data=[
        {id:1, src: like, text: "Liked Songs"},
        {id:2, src: image4, text: "Neffex Playlist"},
        {id:3, src: image3, text: "K/DA"},
        {id:4, src: image1, text: "Liked Songs"},
        {id:5, src: image2, text: "Dance/Electronic Mix"},
        {id:6, src: image9, text: "Weekly Motivatio"},
        {id:7, src: image8, text: "MEDITATION SELF"},
        {id:8, src: image5, text: "MEDITATION SELF"},
    ];

    var evenId=data.filter(fetch=>fetch.id%2==0)  //using filter --> to fetch even id's element



    const shows = [
        { src: image9, title: "Weekly Motivatio...", author: "author" },
        { src: image8, title: "MEDITATION SELF", author: "author" },
        { src: image7, title: "Words beyond act...", author: "author" },
        { src: image6, title: "The Alexa Show", author: "author" },
        { src: image5, title: "The Stories of Ma...", author: "author" },
        { src: image10, title: "Motivation Daily b...", author: "author" },
      ];
         

    return(
        <>

        <div className="nav">
        <div><img src={topArrow} className="nav-i1" /></div>
        <div><img src={user} className="nav-i2" /></div>
      </div>

      <h2 className="mrng_text">Good morning</h2>

      

      <div className="morning">
        {/* <div className="mrng">
          <img src={like} className="m_img" />
          <div className="text">Liked Songs</div>
        </div>
        <div className="mrng">
          <img src={image4} className="m_img" />
          <div className="text1">Neffex Playlist</div>
        </div>
        <div className="mrng">
          <img src={image3} className="m_img" />
          <div className="text3">K/DA</div>
        </div>
        <div className="mrng">
          <img src={image1} className="m_img" />
          <div className="text">Liked Songs</div>
        </div>
        <div className="mrng">
          <img src={image2} className="m_img" />
          <div className="text2">Dance/Electronic Mix</div>
        </div> */}


        {/* map method continue - part2 */}
        {/* {data.map((detail) =>
       (
         <div className='mrng' key={detail.id}>
          <img className='m_img'src={detail.src}/>
          <div className='text'>{detail.text}</div>
         </div>
       )
      )} */}
      


        {/* filter method continue - part2 */}
        {evenId.map((detail) =>
       (
         <div className='mrng' key={detail.id}>
          <img className='m_img'src={detail.src}/>
          <div className='text'>{detail.text}</div>
         </div>
       )
      )}

      </div>

      <h2 className="shows_heading">Shows you might like</h2>

      <div className="shows">

        {shows.map((show_details) =>
        (
            <div className='show1'>
                <div><img src={show_details.src} className="s-img"/></div>
                <div className="txt1">{show_details.title}</div>
                <div className="txt2">{show_details.author}</div>

            </div>
        )
        )}


        {/* <div className="show1">
          <div><img src={image9} className="s-img" /></div>
          <div className="txt1">Weekly Motivatio...</div>
          <div className="txt2">author</div>
        </div>

        <div className="show1">
          <div><img src={image8} className="s-img" /></div>
          <div className="txt1">MEDITATION SELF</div>
          <div className="txt2">author</div>
        </div>

        <div className="show1">
          <div><img src={image7} className="s-img" /></div>
          <div className="txt1">Words beyond act...</div>
          <div className="txt2">author</div>
        </div>

        <div className="show1">
          <div><img src={image6} className="s-img" /></div>
          <div className="txt1">The Alexa Show</div>
          <div className="txt2">author</div>
        </div>

        <div className="show1">
          <div><img src={image5} className="s-img" /></div>
          <div className="txt1">The Stories of Ma...</div>
          <div className="txt2">author</div>
        </div>

        <div className="show1">
          <div><img src={image10} className="s-img" /></div>
          <div className="txt1">Motivation Daily b...</div>
          <div className="txt2">author</div>
        </div> */}
      </div>
        
        </>
    )
}
export default MainBody