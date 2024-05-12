import React, {Component} from "react";

class Fieldset extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            email: "",
            comment: "",
            showData: false
        }
    }
    
    handleChange = (event) => {        
        const {id, value} = event.target;      
        this.setState({...this.state, [id]: value});
    }

    handleClick = (event) => {
            this.setState({...this.state, showData: true})            
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate Working");
    }

    render() {        
        return (
            <>
                <fieldset style={{padding: "20px"}}>
                    <legend>Agrega un comentario</legend>
                    <div>
                        <label htmlFor="name">Nombre:</label>                    
                        <input id="name" type="text"  onChange={this.handleChange}/>
                    </div> <br/>
                    <div>
                        <label htmlFor="age">Edad:</label>
                        <input id="age" type="number" onChange={this.handleChange}/>
                    </div> <br/>
                    <div>
                        <label htmlFor="email">Correo:</label>
                        <input id="email" type="email" onChange={this.handleChange}/>
                    </div> <br/>
                    <div>
                        <label htmlFor="comment" >Comentario:</label>
                        <textarea id="comment" onChange={this.handleChange}/>
                    </div> <br/>                                                  
                </fieldset><br/>
                <div>
                                   
                          
                    {this.state.showData ? <p>{this.state.name}</p> : <p></p>} 
                    {this.state.showData ? <p>{this.state.age}</p> : <p></p> } 
                    {this.state.showData ? <p>{this.state.email}</p> : <p></p>}
                    {this.state.showData ? <p>{this.state.comment}</p> : <p></p>  } 
                                                   
                </div>
                <input type="button" value="Desplegar" onClick={this.handleClick}/> 
            </>
                    
        )
    }
}

export default Fieldset;