import React from "react";

class Hello extends React.Component
{
    constructor(props)
    {
        super(props) //super - базовый класс. В этой строке явно вызывается конструктор базового класса.
        this.state = { name: props.name } //this - это объект для которого вызывается метод, в данном случае конструктор
        this.state = {status:false}
    }
    buttonHandler = () => 
        this.setState(state => ({status: !state.status}));

    render()
    {
        return(
            <>
                <div>Привет {this.props.name} из PROPS!</div>
                <div>Привет {this.state.name} из STATE!</div>
                <button onClick={this.buttonHandler}>{this.state.status ? 'Остановить' : 'Запустить'}</button>
                <div>{this.state.status ? 'Запущен' : 'Остановлен'}</div>
                <hr />
            </>
        )
        //state
    }
}

export default Hello;