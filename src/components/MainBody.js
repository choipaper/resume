import React from 'react';
import CardBase from './CardBase';
import ProjectCard from './ProjectCard';
import './style.css';

class MainBody extends React.Component {
    showProjectCard() {
        let objs = [];
        for (let i = 0; i < ytResources.length; i++) {
            objs.push(<ProjectCard object={ytResources[i]} />);
        }
        return objs;
    }
    render() {
        return (
            <div className="mainbody main-card">
                {this.showProjectCard()}
                <CardBase infoTxt={detailsTxt} id="bio" />
            </div>
        );
    }
}
const detailsTxt = {
    greeting: "Hello! I'm Jonghee Choi ",
    interestTech: 'I am from Korea living in Canada.',
    interest:
        'I like making daily usage applications and game.And I support ‘No hatred but love’ world.:) ',
    detail:
        'Thank you very much for visiting my website. This website will be updated. ',
};

export default MainBody;
const ytResources = [
    {
        title: 'Top down game demo',
        tool: 'Unity',
        detail: [
            '- Designed whole game.',
            '- used raycast to detect collisions.',
            '- UI:inventory system/ 2DLighting.',
        ],
        embed: (
            <iframe
                className="yt-container"
                src="https://www.youtube.com/embed/RfBksGt2Ky8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        ),
    },

    {
        title: '2d platformer game demo',
        tool: 'Unity',
        detail: ['- used raycasting method to detect collisions.'],
        embed: (
            <iframe
                className="yt-container"
                src="https://www.youtube.com/embed/ZQ9Vy1z4JlY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        ),
    },
    {
        title: 'SDL2 game',
        tool: 'C++,SDL2',
        detail: ['- drew simple squares display simple ‘breakout’ scene.'],
        embed: (
            <iframe
                className="yt-container"
                src="https://www.youtube.com/embed/J8DhLsZceyo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        ),
    },
    {
        title: '2d platformer controller without ridgidbody',
        tool: 'Unity',
        detail: [
            '- used raycasting method to detect collisions.',
            '- implemented jump, climb, auto platform movement functions.',
        ],
        embed: (
            <iframe
                className="yt-container"
                src="https://www.youtube.com/embed/-8v0BQ0Ku9E"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        ),
    },
    {
        title: 'a2b',
        tool: 'Unity',
        detail: [
            <a href="https://choipaper.itch.io/a2b">- itch.io_downloadLink</a>,
            '- 48hrs game jam.',
            '- a2b(a to b), it is a simple movement game but with a theme;’Out of Order’. I made it so the movement of the character is controlled by the user but once you choose to take a box then it is out of control.',
        ],
        embed: (
            <iframe
                className="yt-container"
                width="90%"
                height="100%"
                src="https://www.youtube.com/embed/oNkS7E19rLU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        ),
    },
    {
        title: 'Camera Shaking',
        tool: 'Unity',
        detail: [
            '- understand and control Unity basic UI.',
            '- code camera shaking movement with on click event.',
        ],
        embed: (
            <iframe
                className="yt-container"
                src="https://www.youtube.com/embed/afII-P1ugmw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        ),
    },
];
