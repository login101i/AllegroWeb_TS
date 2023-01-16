import { FC, useState, useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MainContainer, ImgContainer, Image, Container, DotWrapper, Dot } from './MainSlider.styles';
import { homePageSlider } from '../../../../utils/images.source/HomePage.images';
import { screensSizes } from '../../../../utils/screenSizes/screenSizes';

export const MainSlider: FC = () => {
	const [slideIndex, setSlideIndex] = useState<number>(0);
	const sliderRef = useRef<HTMLInputElement>(null);
	const isMobile = useMediaQuery({ maxWidth: screensSizes.md });
	const dotNumbers: number = 6;
	let myCounter: number = 0;
	let timeout: any = 0;
	const sliderImageTime: number = 3000;

	myCounter = slideIndex;

	useEffect(() => {
		startInterval();
		return () => clearInterval(timeout);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [slideIndex]);

	const handleIndex = (index: number) => {
		setSlideIndex(index);
	};

	const startInterval = () => {
		timeout = setInterval(() => {
			setSlideIndex(slideIndex => slideIndex + 1);
			if (myCounter >= 4) {
				setSlideIndex(0);
			}
		}, sliderImageTime);
	};

	return (
		<MainContainer isMobile={isMobile}>
			<Container>
				<ImgContainer ref={sliderRef}>
					<Image src={homePageSlider[slideIndex].img} slideIndex isMobile={isMobile} />
				</ImgContainer>
				<DotWrapper>
					{Array.from(Array(dotNumbers).keys()).map((_, index) => (
						<Dot key={index} onClick={() => handleIndex(index)} index={index} slideIndex={slideIndex} data-testid='mainSlider_dot' />
					))}
				</DotWrapper>
			</Container>
		</MainContainer>
	);
};
