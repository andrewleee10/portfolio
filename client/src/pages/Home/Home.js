import './Home.css'
import img from './images/me.jpg'
import img1 from './images/me1.jpeg'
import Footer from '../../components/Footer'


const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row one">
          <div className="col-sm-6">
            <img src={img} alt="me"></img>
          </div>
          <div className="col-sm-6">
            <p className="center1">
              Hello World! My name is Andrew Lee and I am currently 23 years old. I graduated from the University of
              California, Riverside in 2020 with a degree in mechanical engineering.
            </p>
          </div>
        </div>
        <div className="row one">
          <div className="col-sm-6">
            <img src={img1} alt="me2"></img>
          </div>
          <div className="col-sm-6">
            <p className="center1">
              I am currently studying to become a web developer because I have always been intrigued with the process of
              building and creating. I hope one day I can combine my knowledge of web development with engineering.
              Some of my favorite pastimes are making music, gaming with friends, and watching a good movie.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
