import React from 'react';
import CardBase from './CardBase';
import VisitStat from './VisitStat';

class SideBody extends React.Component {
    render() {
        return (
            <div className="sidebody">
                <CardBase infoTxt={detailsTxt[0]} />
                <CardBase infoTxt={detailsTxt[1]} />
                <CardBase infoTxt={detailsTxt[2]} />
                <VisitStat />
            </div>
        );
    }
}

const detailsTxt = [
    {
        greeting: 'Like 1',
        interestTech:
            'If you like this project, click the button below to cheer Jonghee',
        interest: '',
        link: '',
    },
    {
        greeting: 'Like 2',
        interestTech:
            "If you like this project, click the button below to get Jonghee's contact information",
        interest: '',
        link: '',
    },
    {
        greeting: 'Like 3',
        interestTech:
            "If you like this project, click the button below to get Jonghee's resume",
        interest: '',
        link: '',
    },
];

export default SideBody;
