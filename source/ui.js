'use strict';
const path = require('path');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');
const terminalImage = require('terminal-image');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Website',
		url: 'https://heinlinaung.github.com'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/heinlinaung'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/heinlinaung'
	},
	{
		label: 'Blog',
		url: 'https://heinlinaung.github.com/blog'
	},
	{
		label: 'Contact',
		url: 'https://heinlinaung.github.com/contact'
	},
	{
		label: 'Quit',
		action() {
			process.exit();
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>I make things happen.</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
