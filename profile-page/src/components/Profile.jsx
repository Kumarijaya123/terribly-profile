import './profile.css'
import Image from '../assets/profile.jpg'
import Image1 from '../assets/profile1.jpeg'
import { VerifiedUser, Star,ThumbUp,Visibility,Favorite } from '@material-ui/icons'

function Profile() {
  return (
    <div className="container-profile">
      <div className='profile'>
          <img src={Image} alt="" className="profile-img" />
          <img src={Image1} alt="" className="profile-img1" />
          <h2 className="name">Kumari Jaya <VerifiedUser style={{ fontSize: 19 , color: 'rgb(10, 140, 149)'}} /></h2>
          <div className="button-container">
          <button className="follow">6482</button>
          <button className="follow">245</button>
        </div>
        <div className="follower-container">
        <h2 className="follower">Followers</h2>
        <h2 className="follower">Following</h2>
        </div>
        
        <h2 className="text1">Co-founder & CEO at Terribly Tiny Tales</h2>
        <a href="https://www.instagram.com/_kumarijaya056" className="link">https://www.instagram.com/_kumarijaya056</a>
        <div className="shareOption">
        <div className="share">
        <Star className='shareIcon' style={{ fontSize: 20, color: 'rgb(17, 171, 158)' }} />
          <span className="sharetxt">125</span>
        </div>
        <div className="share">
        <ThumbUp className='shareIcon' style={{ fontSize: 20, color: 'orange' }} />
          <span className="sharetxt">12</span>
        </div>
        <div className="share">
        <Visibility className='shareIcon' style={{ fontSize: 20, color: 'rgb(93, 95, 95)' }} />
          <span className="sharetxt">57.8K</span>
        </div>
        <div className="share">
        <Favorite className='shareIcon' style={{ fontSize: 20, color: 'red' }} />
          <span className="sharetxt">26.0K</span>
        </div>
        </div>
        <div className="button1-container">
          <button className="post">134 Posts</button>
          <div className="line1"></div>
        </div>
        <div className="line1"></div>
        <h2 className="text-2">A Changing World Order<ThumbUp className='shareIcon1' style={{ fontSize: 25, color: 'orange'}} /></h2>
        <h3 className="text-3">The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge word are beginning to sense this, including ...</h3>
        <p className='text-4'><span style={{color:'rgb(10, 145, 134)'}}>musing</span>   by anujgosalia</p>
        <p className="text-5">August 2 .&nbsp;&nbsp;2 mins Read .&nbsp;&nbsp;102&nbsp;&nbsp;Views</p>
        <div className="line"></div>

        <h2 className="text-2">Indian v/s Australia<ThumbUp className='shareIcon2' style={{ fontSize: 25, color: 'orange'}} /></h2>
        <h3 className="text-3">Think about it - this cricket series was akin to therapy. <br/><br/>Laying our childhood trauma up top, working with it slowly and surely over two m...</h3>
        <p className='text-4'><span style={{color:'rgb(10, 145, 134)'}}>thought</span>   by anujgosalia</p>
        <p className="text-5">January 21 .&nbsp;&nbsp;1 mins Read .&nbsp;&nbsp;156&nbsp;&nbsp;Views</p>
        <div className="line"></div>

        <h2 className="text-2">Write To Build<ThumbUp className='shareIcon3' style={{ fontSize: 25, color: 'orange'}} /></h2>
        <h3 className="text-3">Writing is the first step to create <br/><br/> - stories <br/> - products <br/> - companies</h3>
        <p className='text-4'><span style={{color:'rgb(10, 145, 134)'}}>thought</span>   by anujgosalia</p>
        <p className="text-5">Nov 18 .&nbsp;&nbsp;1 mins Read .&nbsp;&nbsp;228&nbsp;&nbsp;Views</p>
        
        </div>
      </div>
  )
}

export default Profile;
