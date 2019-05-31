const images = [
	{
		name: 'Tiger',
		src: 'images/tiger.jpg'
	},
	{
		name: 'Lions',
		src: 'iamges/lions.jpg'
	}
];

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomInt(89, 7));
