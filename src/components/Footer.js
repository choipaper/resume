import React from 'react';
import { Email, GitHub, LinkedIn } from '@material-ui/icons';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer" ref={'footer'}>
                <a href={info.email}>
                    <Email fontSize="large" />
                </a>
                <a href={info.github}>
                    <GitHub fontSize="large" />
                </a>
                <a href={info.linkedIn}>
                    <LinkedIn fontSize="large" />
                </a>
                <p>&copy;JongheeChoi 2021</p>
            </div>
        );
    }
}

const info = {
    email: 'mailto: jhvito@gmail.com',
    github: 'https://github.com/choipaper',
    linkedIn: 'https://www.linkedin.com/in/jong-hee-choi-2a9184188/',
};
export default Footer;
