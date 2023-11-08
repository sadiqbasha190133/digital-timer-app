
import { Component } from "react";
import "./index.css"
class DigitalTimer extends Component{

    state = {
        limit:2,
        minutes:2,
        seconds:0,
        pause:true,
        timerUniqueId:null
    }

    onStartTimer = () =>{
        const {pause, timerUniqueId} = this.state
       this.setState((prevState)=>({pause:!prevState.pause}))
        if(pause === true){
            const timerId = setInterval(this.tick, 1000)
            this.setState({timerUniqueId:timerId})
        }
        else{
            clearInterval(timerUniqueId)
        }
       
    }

    onResetTimer = () =>{
        this.setState({minutes:2, seconds:0, limit:2})
    }

    tick = () =>{
        const {seconds, timerUniqueId, minutes} = this.state
        if(seconds === 0 && minutes!==0){
           this.setState((prevState)=>({minutes:prevState.minutes-1, seconds:59}))
        }
        else if(minutes===0 && seconds===0){
            clearInterval(timerUniqueId)
        }
        else{
            console.log(seconds, minutes)
            this.setState((prevState)=>({seconds:prevState.seconds-1}))
        }
        
    }

    onIncreaseTimer = () =>{
        this.setState((prevState)=>({limit:prevState.limit+1, minutes:prevState.limit+1}))
    }
    onDecreaseTimer = () =>{
        this.setState((prevState)=>({limit:prevState.limit-1, minutes:prevState.limit-1}))
    }

    render(){
        let {limit, minutes, seconds, pause} = this.state
        const imgUrl = pause?"https://assets.ccbp.in/frontend/react-js/play-icon-img.png":"https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
        const imgAltName = pause?"pause":"play"
        if(seconds<10){
            seconds = "0"+ seconds.toString()
        }    
        if(minutes<10){
            minutes = "0"+ minutes.toString() 
        }
        return(
            <div className="main-container">
                    <h1 className="heading">Set Your Timer</h1>
                <div className="flex-container-bigScreen">    
                    <div>    
                        <img 
                            src="https://cdn.mos.cms.futurecdn.net/jJ6HdsBcM9JPQ2CmLA2eDU.png"
                            alt = "timer"
                            className="timer-image"
                        />
                    </div>

                    <div>
                        <div className="flex-container1">
                            <div className="timer-box">
                                <p className="time">{minutes}</p>
                                <p className="time">:</p>
                                <p className="time">{seconds}</p>
                            </div>
                                <div className="icons-container">
                                    <img 
                                        src = {imgUrl} 
                                        className="pause-icon-image"
                                        alt={imgAltName}
                                        onClick={this.onStartTimer}
                                        
                                    />
                                    <img 
                                        src = "https://assets.ccbp.in/frontend/react-js/reset-icon-img.png" 
                                        className="pause-icon-image"
                                        alt="reset"
                                        onClick={this.onResetTimer}
                                    />
                                    
                                </div>

                        </div>
                        <div className="timer-limit-container">
                            <p className="limits" onClick={this.onDecreaseTimer}>-</p>
                            <p className="limit-value">{limit}</p>
                            <p className="limits" onClick={this.onIncreaseTimer}>+</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default DigitalTimer