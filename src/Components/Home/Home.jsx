import React, { Component } from 'react';
import dataGlass from '../../Data/dataGlass.json'

class Home extends Component {
    state ={
        glassItem:{
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }
    renderGlass = () => {
        return dataGlass.map((glass,index) => {
            return <img onClick={() => {this.changGlass(glass)}} src={glass.url} alt='Glass' className='col-2' key={index}  style={{cursor:"pointer"}} />
        })
         
    }
    changGlass = (glassCurrent) =>{
        this.setState({
            glassItem:glassCurrent
        })
    }
    render() {
        return (
            <div className='container-fluid'>
                <div className='heading-glass'>
                    <h1>TRY GLASS APP ONLINE</h1>
                </div>
                <div className='row model'>
                    <div className="col-3 content-change">
                        <div className="vglasses__model">
                           <img src={this.state.glassItem.url} alt="" />
                        </div>  
                        <div className="vglasses__info">
                        <div >
                            <span className='glass-name'> {this.state.glassItem.name}</span> <span style={{color:'green',fontWeight:'bold'}}>{this.state.glassItem.price}$</span>
                            <br />
                            <span className='glass-des'>{this.state.glassItem.desc}</span>
                         </div>
                        </div>
                    </div>              
                    <div className="col-3 content-change">
                        <div className=" vglasses__model ">                    
                         </div>
                    </div>
                </div>            
                <div className="glass-bottom container-fluid pt-4">
                        <div className="col-8 mx-auto b">
                            {this.renderGlass()}
                        </div>
                </div>
            </div>
        );
    }
}

export default Home;