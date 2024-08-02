import React, { Component } from 'react';
import ListItem from './listItem/listItem';
import './TodoList.css'


export default class TodoList extends Component{

    render() {
        let todos = this.props.todos
        return (
            <ul className='list-group todo-list'>
                {todos.map((item) => {
                    const {id, ...itemProps} = item;
                    return (<li 
                                key={id} 
                                className='list-group-item'
                            >
                                <ListItem 
                                    {...itemProps}
                                    onDelTodo = {() => {this.props.delTodo(id)}}
                                    onTogleImpotant = {() => {this.props.onTogleImpotant(id)}}
                                    onTogleDone = {() => {this.props.onTogleDone(id)}}
                                />
                            </li>)
                } )}
            </ul>
        )
    }
}

