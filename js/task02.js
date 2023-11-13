'use strict';

{
	const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

	const getAverageValue = arr => {
		let num = 0;

		for (const elem of arr) {
			num += elem;
		}

		return Math.floor(num / arr.length);
	}

	const res = getAverageValue(allCashbox);
	console.log(res);
}