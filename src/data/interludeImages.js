import img1 from '../img/interlude_1.png';
import img2 from '../img/interlude_2.png';
import img3 from '../img/interlude_3.png';
import img4 from '../img/interlude_4.png';
import img5 from '../img/interlude_5.png';
import img6 from '../img/interlude_6.png';
import img7 from '../img/interlude_7.png';
import img8 from '../img/interlude_8.png';
import img9 from '../img/interlude_9.png';
import img10 from '../img/interlude_10.png';
import img11 from '../img/interlude_11.png';
import img12 from '../img/interlude_12.png';

const screenWidth = window.innerWidth

const interludeImages = [
    { src: img1, style: screenWidth <= 1200 ? { top: '160px', left: '60px' } : { top: '306px' } },
    { src: img2, style: screenWidth <= 1200 ? { top: '200px', right: '45px' } : { right: '161px' } },
    { src: img3, style: screenWidth <= 1200 ? { left: '25px' } : { left: '170px' } },
    { src: img4, style: screenWidth <= 1200 ? { top: '400px', right: '40px'  } : { top: '500px', right: '230px' } },
    { src: img5, style: screenWidth <= 1200 ? { top: '400px', left: '50px'  } : { top: '500px', right: '300px' } },
    { src: img6, style: screenWidth <= 1200 ? { top: '115px', right: '40px'  } : { top: '280px', left: '255px' } },
    { src: img7, style: screenWidth <= 1200 ? { top: '265px', left: '20px'  } : { bottom: '200px', right: '200px' } },
    { src: img8, style: screenWidth <= 1200 ? { bottom: '130px', right: '40px'  } : { bottom: '400px', left: '100px' } },
    { src: img9, style: screenWidth <= 1200 ? { bottom: '15px', left: '20px'  } : { bottom: '250px', right: '200px' } },
    { src: img10, style: screenWidth <= 1200 ? { bottom: '250px', right: '40px'  } : { bottom: '20px', left: '200px' } },
    { src: img11, style: screenWidth <= 1200 ? { bottom: '200px', left: '30px'  } : { bottom: '50px' } },
    { src: img12, style: screenWidth <= 1200 ? { bottom: '140px', right: '60px'  } : { bottom: '300px', right: '300px' } },
]

export default interludeImages;