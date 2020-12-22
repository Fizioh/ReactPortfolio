import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                <Cell col={12}>
                    <img 
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQFNAO9C3j_pyw/profile-displayphoto-shrink_200_200/0/1607066705745?e=1614211200&v=beta&t=l3iiLGhXAUOkSv8CWj7cw-LrTksOuGYR6qyUWDTvFLo"
                    alt="avatar"
                    className="avatar-img"
                    />

                    <div className="banner-text">
                        <h1>Développeur Web Fullstack</h1>

                        <hr/>

                    <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

                    <div className="social-links">

                            {/* LinkedIn*/}
                        <a href="https://www.linkedin.com/in/benosmaneyassine/"  rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>
                        {/* GitHub*/}
                        <a href="https://www.linkedin.com/in/benosmaneyassine/"  rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>
                        {/* FreeCodeCamp*/}
                        <a href="https://www.linkedin.com/in/benosmaneyassine/"  rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-free-code-camp" aria-hidden="true" />
                        </a>

                    </div>

                    </div>
                </Cell>
                </Grid>
            </div>
            )
    }
}

export default Landing;