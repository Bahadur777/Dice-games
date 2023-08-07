import './home.css'
import dice from '../../assets/dice.png'
import Button from '../../component/button/Button'

const Home = ({toggle}) => {
  return (
    <div className="container">
        <div className="dice-container">
            <div className="dice-dive">
                <div className="dice-image">
                    <img src={dice} alt="" />
                </div>
                <div className="dice-text">
                    <div className="text">
                        <h1>DICE GAME</h1>
                    </div>
                    <div className="dice-btn">
                        <Button text="Play Now"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home