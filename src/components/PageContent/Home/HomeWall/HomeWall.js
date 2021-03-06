import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

// React compoents

import SearchNotFound from './../../../SearchNotFound/SearchNotFound';
import PostChangeTemplate from './PostChange';
import RenderIcon from './.././../../RenderIcon';

// Styled Components

import {
	WallContainer,
	WallProfile,
	Post,
	PostTitle,
	PostContent,
	PostSettings,
	PostProfile,
	SearchWallContainer,
	ChoiceWallLinks,
	ChoiceWallLink,
	SearchWallIcon,
	WallSearch,
	WallSearchInput,
	PositionSearch,
} from './HomeWallStyled';

// Actions

import DeleteWallPost from './../../../../actions/DeleteWallPost';
import SearchWallPost from './../../../../actions/SearhWall';

// Icons

import { withBaseIcon } from 'react-icons-kit';
import { heart } from 'react-icons-kit/fa/heart';
import { comment } from 'react-icons-kit/fa/comment';
import { share } from 'react-icons-kit/fa/share';
import { search } from 'react-icons-kit/fa/search';
import { ic_close } from 'react-icons-kit/md/ic_close';

const SideIconContainer = withBaseIcon({
	size: 18,
	style: {
		color: '#4a76a8',
		cursor: 'pointer',
		width: '30px',
		height: '30px',
		opacity: '.8 ',
	},
});

const closeStyle = {
	color: '#4a76a8',
	cursor: 'pointer',
	width: '25px',
	height: '25px',
	opacity: '.8 ',
};

export class HomeWall extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			postId: '',
			searchShow: true,
			vallLength: true,
		};
	}
	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			vallLength: nextProps.vall.length,
		};
	}
	handleClick(e) {
		if (e.currentTarget.className === 'close') {
			this.searhInput.value = '';
			this.props.searchPost(this.searhInput.value);
		}
		if (!this.state.searchShow) {
			this.setState({ searchShow: true });
		} else {
			this.setState({ searchShow: false });
		}
	}

	handleChange(e) {
		const rusRegExp = /[а-яА-ЯёЁ]/g;
		let inputValue = e.target.value;
		if (inputValue.search(rusRegExp) !== -1) {
			this.searhInput.value = inputValue.replace(rusRegExp, '');
		}
		this.props.searchPost(e.target.value);
	}
	render() {
		return (
			<Fragment>
				{this.state.searchShow ? (
					<PositionSearch>
						<SearchWallContainer>
							<ChoiceWallLinks>
								<ChoiceWallLink>All posts</ChoiceWallLink>
								<ChoiceWallLink lineShow={true}>My posts</ChoiceWallLink>
							</ChoiceWallLinks>
							<SearchWallIcon>
								<SideIconContainer
									onClick={this.handleClick.bind(this)}
									icon={search}
								/>
							</SearchWallIcon>
						</SearchWallContainer>
					</PositionSearch>
				) : (
					<PositionSearch>
						<WallSearch>
							<SideIconContainer icon={search} />
							<WallSearchInput
								autoFocus={true}
								placeholder="Enter a word or phrase here..."
								onChange={this.handleChange.bind(this)}
								ref={node => (this.searhInput = node)}
							/>
							<RenderIcon
								onClick={this.handleClick.bind(this)}
								icon={ic_close}
								size="30"
								style={closeStyle}
								className="close"
							/>
						</WallSearch>
					</PositionSearch>
				)}

				<WallContainer>
					{!this.state.vallLength ? (
						<SearchNotFound searchText={this.props.searchText} />
					) : (
						''
					)}
					{this.props.vall.map((item, index) => {
						return (
							<Post key={index}>
								<PostTitle>
									<PostProfile>
										<WallProfile back="./images/profile.jpg" />
										<span>Панасенко Едуард, Котова Дарія</span>
									</PostProfile>
									<PostChangeTemplate />
								</PostTitle>
								<PostContent>
									<p>{item.text}</p>
								</PostContent>
								<PostSettings>
									<SideIconContainer icon={heart} />
									<SideIconContainer icon={comment} />
									<SideIconContainer icon={share} />
								</PostSettings>
							</Post>
						);
					})}
				</WallContainer>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	vall: state.WallAddPost.posts.filter(item =>
		item.text.includes(state.WallAddPost.searchText)
	),
	resultSearchWall: state.WallAddPost.resultSearch,
	searchText: state.WallAddPost.searchText,
});

const mapDispatchToProps = dispatch => ({
	deletePost: post => {
		dispatch(DeleteWallPost(post));
	},
	searchPost: postText => {
		dispatch(SearchWallPost(postText));
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeWall);
