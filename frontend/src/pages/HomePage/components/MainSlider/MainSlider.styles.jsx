import styled from 'styled-components';

export const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: ${props => (props.isMobile ? '100vw' : '1000px')};
	margin: 0 auto;
`;

export const Container = styled.div`
	display: flex;
	overflow: hidden;
	flex-direction: column;
	justify-content: space-between;
`;

export const ImgContainer = styled.div`
	height: 100%;
	width: 100%;
`;

export const Image = styled.img`
	width: ${props => (props.isMobile ? 'auto' : '100%')};
	height: ${props => (props.isMobile ? '160px' : '100%')};
	background-image: ${props => props.src};
`;

export const DotWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const Dot = styled.div`
	width: 14px;
	height: 14px;
	border-radius: 7px;
	background-color: ${props => (props.index === props.slideIndex ? 'black' : 'grey')};
	margin: 10px 6px;
	cursor: pointer;
	transition: 0.2s all ease-in-out;
`;
