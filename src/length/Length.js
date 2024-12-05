import React from "react";

class Length extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {lenght:17}

        this.add = this.add.bind(this);
        this.reset = this.reset.bind(this);
    }

    add()
    {
       this.setState({lenght: this.state.lenght + 5});
    }
    //add = () => this.setState({lenght: this.state.lenght + 5});//так работает тоже

    reset()
    {
        this.setState({lenght: 17});
    }

    render()
    {
        return(
            <>
                <div><input size={this.state.lenght}/></div>
                <button onClick={this.add}>Увеличить</button>
                <button onClick={this.reset}>Сбросить</button>   
                <hr />             
            </>
        )
    }
}

export default Length;