import React, { Component } from 'react';

// React Components

import HomeInfoNumbers from './HomeInfoNumbers';

// Styled components
import {
	HomeInfoContainer,
	NameTitle,
	ProfileStatus,
	CheckOnline,
	InformationContainer,
	Information,
	LeftColumn,
	RightColumn,
	MoreInfo,
	MoreInfoBlock,
	InfoTitle,
} from './HomeInfoStyled';

export default class HomeInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: 'none',
			text: 'Show full information',
		};
	}

	handleClick = e => {
		e.preventDefault();
		if (this.state.display === 'none') {
			this.setState({
				display: 'block',
				text: 'Hide full information',
			});
		} else {
			this.setState({
				display: 'none',
				text: 'Show full information',
			});
		}
	};

	render() {
		return (
			<HomeInfoContainer>
				<NameTitle>
					Едуард Панасенко, Дарія Котова
					<CheckOnline>Online</CheckOnline>{' '}
				</NameTitle>
				<ProfileStatus>Живи. Люби. КПІ.</ProfileStatus>
				<InformationContainer>
					<Information>
						<LeftColumn>Birthday:</LeftColumn>
						<RightColumn>
							<a href="">April 14</a>
						</RightColumn>
					</Information>

					<Information>
						<LeftColumn>Relationship status:</LeftColumn>
						<RightColumn>
							<a href="">KPI</a>
						</RightColumn>
					</Information>
					<Information>
						<LeftColumn>Current city:</LeftColumn>
						<RightColumn>
							<a href="">Kiev</a>
						</RightColumn>
					</Information>
					<MoreInfo onClick={this.handleClick.bind(this)}>
						<Information>
							<LeftColumn />
							<RightColumn href="">
								<a href="">{this.state.text}</a>{' '}
							</RightColumn>
						</Information>
					</MoreInfo>
					<MoreInfoBlock style={{ display: `${this.state.display}` }}>
						<InfoTitle>
							<b>Main information</b>{' '}
						</InfoTitle>
						<Information>
							<LeftColumn>Hometown:</LeftColumn>
							<RightColumn>Kiev</RightColumn>
						</Information>

						<Information>
							<LeftColumn>Languages</LeftColumn>
							<RightColumn>Український</RightColumn>
						</Information>

						<InfoTitle>
							<b>Personal information</b>{' '}
						</InfoTitle>
						<Information>
							<LeftColumn>Favorite quotes </LeftColumn>
							<RightColumn>
								Не дивіться на те, що є в інших, бережіть те, що є у Вас!
							</RightColumn>
						</Information>

						<Information>
							<LeftColumn>Groups: </LeftColumn>
							<RightColumn>
								<a href="">React Native </a>,<a href="">Js для чайників </a>,
								<a href="">ReactDev </a>,<a href="">Верстака з нуля</a>,
							</RightColumn>
						</Information>
					</MoreInfoBlock>
					<HomeInfoNumbers />
				</InformationContainer>
			</HomeInfoContainer>
		);
	}
}
