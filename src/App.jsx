import React, { Component } from 'react';
import AppHeader from "./components/appHeader/AppHeader"
import SearchPanel from "./components/searchPanel/SearchPanel"
import TodoList from "./components/todoList/TodoList";
import AddTodo from './components/addTodo/add-todo';
import './App.css'

export default class App extends Component{
    maxId = 100;

    state = {
        todos : [
            this.createTodo('drink coffee'),
            this.createTodo('make app'),
            this.createTodo('have lanch'),
            this.createTodo('Go to work'),
        ],
        searchInput: '',
        searchStatus: 0,
    }
  
    createTodo(label){
        const id = this.maxId++;
        return {
            id,
            label,
            important : false,
            done : false,
        }
    }

    addTodo = (text) => {
       
            
        this.setState((state) => {
            return {
                todos: [...state.todos, this.createTodo(text)]
            };
        });
    }

    delTodo = (id) => {
        this.setState(({todos}) =>{
            return {
                todos: todos.filter(elem => elem.id !== id)
            }
        })
    }

    togleProperty(arr, id, propName){
        const idx = arr.findIndex((el) => el.id === id);
            const oldItem = arr[idx];
            const newItem = {...oldItem, [propName]: !oldItem[propName]};
            const newArray = [
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx + 1),
            ]

            return newArray
    
    }

    onTogleImpotant = (id) => {
        this.setState(({todos}) => {
            return {todos: this.togleProperty(todos, id, 'important')}
        })
    }

    onTogleDone = (id) => {
        this.setState(({todos}) => {
           return {todos: this.togleProperty(todos, id, 'done')}
        })
    }

    setSearchInput = (value)=> {
        this.setState({searchInput: value})
    }

    setStatus = (number) => {
        this.setState({searchStatus: number})
    }



    render(){
        const {todos, searchInput, searchStatus} = this.state;
        const doneTodo = todos.filter((el) => el.done).length;
        const activTodo = todos.length - doneTodo;

        const filterTodo = (todos) => {
            let newTodos = [...todos];
            if (this.state.searchStatus === 1){
                newTodos = newTodos.filter((el) => !el.done)
            }
            if (this.state.searchStatus === 2){
                newTodos = newTodos.filter((el) => el.done)
            }

            if (searchInput.length > 0){
                newTodos = newTodos.filter((el) => el.label.toLowerCase().includes(searchInput.toLowerCase()))
            }
            return newTodos;
        }

        return(
            <div className='block'>
                <AppHeader/>
                <SearchPanel activ={activTodo} 
                            done = {doneTodo}
                            searchInput = {searchInput}
                            searchStatus = {searchStatus}
                            setSearchInput = {this.setSearchInput}
                            setStatus = {this.setStatus}/>
                <TodoList 
                     todos = {filterTodo(todos)}
                     delTodo = {this.delTodo}
                     onTogleDone = {this.onTogleDone}
                     onTogleImpotant = {this.onTogleImpotant}
                />
                <AddTodo getNameTodo = {this.addTodo}/>
            </div>
            
        );
    }
}
