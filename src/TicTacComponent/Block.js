import React from "react";
import '../index.css';

/*class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null
        }

    }

    render() {
        return (
            <button className="square"
                    onClick={() => this.props.emit()}>{this.props.number
            }
            </button>
            //here onclick we are calling props of square (which are populated from parent(Board component)
            //Props of square (emit) again have method call which is of parent
        );
    }
}*/


//Above SQUARE class component  can also written in below way which is called as FUNCTION COMPONENT


function Block(props) {
    return (<button className="square"
                    onClick={props.emit}>{props.value}
    </button>)
}

export default Block;
