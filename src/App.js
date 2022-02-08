
import './App.css';
import { Carousel } from './components/carousel-compound/Carousel';

export default function App() {
  return (
    <div className='app__main-container'>
      <Carousel infinite>
        <Carousel.Page>
          {/* <div className='item item-1'>Item-1</div> */}
          <img src='https://i.pinimg.com/564x/d3/11/3c/d3113c5d9261341e35feb2a6277b2a6f.jpg' className='item item-1'/>
        </Carousel.Page>
        <Carousel.Page>
          {/* <div className='item item-2'>Item-2</div> */}
          <img src='https://i.pinimg.com/564x/6d/35/7d/6d357dc34995e78b7053dae7ee85b592.jpg' className='item item-2'/>
        </Carousel.Page>
        <Carousel.Page>
          {/* <div className='item item-3'>Item-3</div> */}
          <img src='https://i.pinimg.com/564x/8b/93/dd/8b93dde5c69cc7afef2453314b74c009.jpg' className='item item-3'/>
        </Carousel.Page>
        <Carousel.Page>
          {/* <div className='item item-3'>Item-3</div> */}
          <img src='https://i.pinimg.com/564x/cd/6b/7f/cd6b7fc827a317be7b3570d14900ef32.jpg' className='item item-4'/>
        </Carousel.Page>
      </Carousel>
    </div>
  )
}

