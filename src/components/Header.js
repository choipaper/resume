import React from 'react';
import CardBase from './CardBase';
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

const textData = {
    greeting: "Hello! I'm Jonghee Choi",
    interestTech:
        '-Interest_Technology: Unity, Hardware, Graphics, Website, Application for daily use',
    interest:
        '-Interest_General: culture, history, cooking, watching skies, pixar, ghibli, simpsons',
    detail:
        'Are you interest in finding passionate junior developer?\n' +
        'You are very lucky this time!\n' +
        'Here you have a passionate and endrance person!',
};

export default Header;
