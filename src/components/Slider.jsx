import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        height="500px"
                        className="d-block w-100"
                        src="https://scontent.ffru2-1.fna.fbcdn.net/v/t1.6435-9/161313967_252904926533482_1435076606419330836_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=wxZ78PteDZgAX8wfYTb&_nc_ht=scontent.ffru2-1.fna&oh=00_AT_NNjGhI9SRyB0rko5WvWwo7rIjLF_peMFNyJkL5mC2NA&oe=622AD73E"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{color:'red',fontWeight:'600'}}>Гарантированное качество</h3>
                        <p>Самоё лутшее качество</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height="500px"
                        className="d-block w-100"
                        src="https://scontent.ffru2-1.fna.fbcdn.net/v/t1.6435-9/p180x540/88959150_1135314390144725_1641338047272321024_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PYkvruUsV98AX-glcGX&_nc_ht=scontent.ffru2-1.fna&oh=00_AT8fAnFoQKVOSYoZdWSUJnYDiCqtuzWo0eIbmMJtrxNWxQ&oe=622AA51B"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 style={{color:'red',fontWeight:'600'}}>ХАЛЯЛЬ</h3>
                        <p>ЗУБ ДАЮ</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height="500px"
                        className="d-block w-100"
                        src="https://scontent.ffru2-1.fna.fbcdn.net/v/t1.6435-9/p180x540/88364008_1126290144380483_3813988163517415424_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=QjlS_N3qWPgAX-wTptu&_nc_ht=scontent.ffru2-1.fna&oh=00_AT8DAD2A9-8R33hJpwNwj6Nfq-moVyxtMIgFFS7SXKuKuQ&oe=62278635"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 style={{color:'red',fontWeight:'600'}}>КОЛБАСА ПУШКА ЧЕСТНО ГОВОРЯ!</h3>
                        <p>Ваще бомба</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;