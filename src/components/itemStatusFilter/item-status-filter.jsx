import React, { Component } from "react";
import './item-status-filter.css'

export default class ItemStatusFilter extends Component {
    render(){
        const {searchStatus, setStatus} = this.props;
        const getClassName = (number) => {
            if (number === searchStatus) return "btn btn-info"
            return "btn btn-outline-secondary"
        }
        return (
            <div className="btn-group">
                <button type = "button"
                        className={getClassName(0)} 
                        onClick={() =>setStatus(0)}    
                >
                    All
                </button>   
    
                <button type = "button"
                        className={getClassName(1)}
                        onClick={() =>setStatus(1)} 
                >
                    Active
                </button>  
    
                <button type = "button"
                        className={getClassName(2)}
                        onClick={() =>setStatus(2)} 
                >
                    Dane
                </button>  
    
           
            </div>
        )
    }
}