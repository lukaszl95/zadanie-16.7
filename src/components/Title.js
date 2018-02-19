import React from 'react';
import style from './Title.css';

const Title = props => {
	return (
			<div className={style.Title}>
			<h2>{props.title}</h2>
			<div>{props.number}</div>
			</div>
			);
}

export default Title;