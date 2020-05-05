import React from 'react';
import logo from './logo.svg';
import './App.css';
import './scss/style.scss';
import Banner1 from './assests/banner.png';
import Banner2 from './assests/banner2.png';
import icon1 from './assests/icon1.png';
import icon2 from './assests/icon2.png';
import icon3 from './assests/icon3.png';

function App() {
    return (
        <div>
            <nav id="main-nav">
                <div class="wrapper">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Lessons</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div class="lead-banner">
                <img src={Banner1} alt="uk"/>
                <div class="banner-content">
                    <div class="wrapper">
                        <span class="title">Check our video</span>
                        <span class="sub-title">Learning in 6 weeks</span>
                    </div>
                </div>
            </div>
            <section id="services">
                <div class="wrapper">
                    <h1>Services</h1>
                    <p></p>
                    <ul>
                        <li>
                            <img src={icon1}/>
                            <a href="#">Recording<br/>services</a>
                        </li>
                        <li>
                            <img src={icon2}/>
                            <a href="#">Get a printed<br/>certificate</a>
                        </li>
                        <li>
                            <img src={icon3}/>
                            <a href="#">Lessons via<br/>Skype</a>
                        </li>
                    </ul>
                </div>
            </section>
            <div class="lessons-banner">
                <img src={Banner2}/>
                <div class="banner-content">
                    <div class="wrapper">
                        <span class="title">Our Lessons</span>
                        <span class="sub-title">Are Easy</span>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <section id="projects">
                <div class="wrapper">
                    <h1>Our Projects</h1>
                    <ul>
                        <li><img src="http://placehold.it/150x150"/></li>
                        <li><img src="http://placehold.it/150x150"/></li>
                        <li><img src="http://placehold.it/150x150"/></li>
                        <li><img src="http://placehold.it/150x150"/></li>
                        <li><img src="http://placehold.it/150x150"/></li>
                        <li><img src="http://placehold.it/150x150"/></li>
                        <li><img src="http://placehold.it/150x150"/></li>
                        <li><img src="http://placehold.it/150x150"/></li>
                        <li><img src="http://placehold.it/150x150"/></li>
                        <li><img src="http://placehold.it/150x150"/></li>
                        <li><img src="http://placehold.it/150x150"/></li>
                        <li><img src="http://placehold.it/150x150"/></li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default App;
