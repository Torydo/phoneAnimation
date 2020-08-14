import React from 'react';
import logo from './logo.svg';
import './App.css';

const firstPadding = 361.778, phoneWidth = 822, phoneHeight = 406, videoWidth = 620, videoHeight = 351, goodsWidth = 64, goodsHeight = 195, goodsRight = 34;
let timeId;
class App extends React.Component {
	constructor(props) {
		super (props);
		this.state = {
			apple: {
				xPos : 537.5,
				yPos : 388.5,
				width : 200,
				height : 200
			},
			percent: 100,
			opacity: 0,
			flag: true,
			appOpacity: 1,
			paddingTop: firstPadding,
			phone: {
				width: phoneWidth,
				height: phoneHeight
			},
			spendTime: 0,
			goods: {
				width: goodsWidth,
				height: goodsHeight,
				right: goodsRight,
			},
			textOpacity: 0
		}
	}

	componentDidMount() {
		// canvas = this.refs.vsCanvas;
		// video = this.refs.vfAyba;
		// // this.startPlayback();
		window.addEventListener('scroll', (e) => this.handleScrollToElement(e));
		timeId = setInterval(() => this.carpetFunc(), 1000);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', (e) => this.handleScrollToElement(e));
		// console.log(this.refs.vfAyba);
	}

	carpetFunc() {
		this.setState({
			spendTime: ++this.state.spendTime
		})
	}
	handleScrollToElement(event) {
		let position = event.srcElement.defaultView.scrollY;
		if( position < 1300 ) {
			this.setState({
				phone: {
					width: phoneWidth + phoneWidth * position / 600,
					height: phoneHeight + phoneHeight * position / 600,
				},
				video: {
					width: videoWidth + videoWidth * position / 600,
					height: videoHeight + videoHeight * position /600,
				},
				goods: {
					width: goodsWidth + goodsWidth * position / 600,
					height: goodsHeight + goodsHeight * position / 600,
					right: goodsRight + position / 5,
				},
				textOpacity: 0,
				bottomPro: position >= 1300 && position <= 2500 ?  position / 500 * 8 - 20: position / 50 -20
			});
		} else {
			this.setState({
				phone: {
					width: phoneWidth + phoneWidth * 1300 / 600,
					height: phoneHeight + phoneHeight * 1300 / 600,
				},
				video: {
					width: videoWidth + videoWidth * 1300 / 600,
					height: videoHeight + videoHeight * 1300 /600,
				},
				goods: {
					width: goodsWidth + goodsWidth * 1300 / 600,
					height: goodsHeight + goodsHeight * 1300 / 600,
					right: goodsRight + 1300 / 5,
				},
				textOpacity: position / 2200,
				bottomPro: position >= 1300 && position <= 2500 ?  position / 500 * 8 - 20: position / 45 -20
			});
		}
		
	}
   	render() {
		var myStyle1 = {
			marginTop:'10px'
		}
		var dummyimg = {
			height: '200px',
			background: '#aaa'
		}
		const {paddingTop, phone, video, spendTime, goods, textOpacity, bottomPro} = this.state;
		return (		   
			<section className="section section-4k-video theme-light-tertiary">
				<div className="section-main-content">
					<div className="section-content">
						<div className="row align-items-center">
							<div className="header-column column large-10 large-offset-1 small-12 small-offset-0">
								<h2 className="eyebrow-icon"><span className="visuallyhidden">4k Video</span></h2>
								<h3 className=" section-headline typography-section-headline-super">High, high,&nbsp;high,<br className="small"/> high‑definition video.</h3>
							</div>
						</div>
					</div>
					<div className="sticky-element" style={{top: '0px'}}>
						<div className="scalable-hardware" style={{top: '50%', transform: 'translate(0%, -50%)'}}>
							<div style={{position: "relative"}}>
								<figure className="hardware-image no-inversion" style={phone}></figure>
								<div className="video-container" style={video}>
									<div className='extra-goods' style={{right: `-${goods.right}px`}}>
										<figure className='main-item' style={{ width: goods.width, height: goods.height, backgroundSize: `${goods.width}px ${goods.height}px`}}></figure>
									</div>
									<video muted={false} playsInline="" autoPlay loop="1"  className="vp-large video-loaded video-can-play video-download-complete" src="https://www.apple.com//105/media/us/iphone-se/2020/90024c0f-285a-4bf5-af04-2c38de97b06e/anim/4k-video/large.mp4">
									</video>
								</div>
								<div className='time-map'>
									{
										spendTime % 5 == 0 && <figure className='time-item sub-img-1'></figure>
									}
									{
										spendTime % 5 == 1 && <figure className='time-item sub-img-2'></figure>
									}
									{
										spendTime % 5 == 2 && <figure className='time-item sub-img-3'></figure>
									}
									{
										spendTime % 5 == 3 && <figure className='time-item sub-img-4'></figure>
									}
									{
										spendTime % 5 == 4 && <figure className='time-item '></figure>
									}
								</div>
								
							</div>
						</div>
						<div className='text-part' style={{opacity: textOpacity}}>
							<p class="base-only section-intro typography-section-intro-elevated no-inversion"  style={{opacity: textOpacity / 1.2 , bottom: `${-10 + bottomPro}%`}}>
								4K video means you’ll see four times more detail than in 1080p HD video. And extended dynamic range adds greater detail in highlights and shadows.
							</p>
						</div>
					</div>
					<div className='section-bottom' >

					</div>
				</div>
			</section>
      	);
   }
}

export default App;