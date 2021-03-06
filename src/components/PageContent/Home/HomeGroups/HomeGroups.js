import React, { Component } from 'react';

// React Compoenents

import GroupItem from './GroupItem';

// Styled Compoenents

import { BlockTitle } from './../HomeStyled';
import {
	HomeGroupsContainer,
	GroupsTitle,
	GroupsNumber,
} from './HomeGroupsStyled';

export default class HomeGroups extends Component {
	render() {
		return (
			<HomeGroupsContainer>
				<BlockTitle>
					<GroupsTitle>
						Noteworthy pages <GroupsNumber>31</GroupsNumber>
					</GroupsTitle>
				</BlockTitle>
				<GroupItem name="React Native" description="description" />
				<GroupItem name="ReactDev" description="description" />
				<GroupItem name="Js для чайників" description="description" />
				<GroupItem name="Верстака з нуля" description="description" />
			</HomeGroupsContainer>
		);
	}
}
