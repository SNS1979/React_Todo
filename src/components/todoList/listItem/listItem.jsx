import React, {Component} from "react";
import './listItem.css'

export default class ListItem extends Component {
 
    render () {
        const { done, important } = this.props;

        let className = "box";
        if (done) { className += ' done' }
        if (important) { className += ' impotant'}

        const { label, onDelTodo, onTogleDone, onTogleImpotant } = this.props;
        
        return (

            <div className = { className }>
                <span 
                    onClick = { onTogleDone }
                >
                        { label }
                </span>
                <div>
                    <button type="button"
                            className="btn  btn-outline-success btn-sm"
                            onClick={onDelTodo}
                    >
                        <i className="bi bi-trash"></i>
                    </button>
    
                    <button type="button"
                            className = "btn  btn-outline-success btn-sm"
                            onClick = { onTogleImpotant }
                    >
                        <i className = "bi bi-fire"></i>
                    </button>
                </div>
               
            </div>
            
        )
    }
}



