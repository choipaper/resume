import React from 'react';
import CardBase from './CardBase';
import textData from './data/textData';
import paperImg from './Sprites/paper.png';
class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div>
                    <img src={paperImg} alt={'paper'} width={'100px'} />
                </div>
                <div></div>
                <CardBase infoTxt={textData} />
            </div>
        );
    }
}

export default Header;
