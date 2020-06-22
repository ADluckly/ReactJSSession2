import React from 'react';
import './Title.scss';

class Title extends React.Component{

    render(){
        return (
            <div className='title'>
                {this.props.title}
                <div className='tip'>{this.props.tip}</div>
            </div>
            
        );
    }

}

export default Title;