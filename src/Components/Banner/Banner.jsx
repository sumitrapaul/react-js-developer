import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    const customColorLink = {
        color: "#f1f5f9",
        fontSize: "18px",
        marginTop : '20px'
      };

    return (
        <div style={customColorLink}>
           <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height : '900px'}}
          src="https://i.ibb.co/2cZ4W3Z/rsz-1034988.jpg"
          alt="First slide"
        />
   
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height : '900px'}}
          src="https://i.ibb.co/pr20RB0/rsz-1064746.jpg"
          alt="Second slide"
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height : '900px'}}
          src="https://i.ibb.co/XLBxgRT/rsz-11235114.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height : '900px'}}
          src="https://i.ibb.co/D5dpk7k/rsz-1235113.jpg"
          alt="Fourth slide"
        />
        
      </Carousel.Item>
    </Carousel> 
        </div>
    );
};

export default Banner;