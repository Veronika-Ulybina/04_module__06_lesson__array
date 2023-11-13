'use strict';

{
	const allCashbox = [
		[12, 4500], 
		[7, 3210], 
		[4, 650], 
		[3, 1250], 
		[9, 7830], 
		[1, 990], 
		[6, 13900], 
		[1, 370]
	];

	const getAveragePriceGoods = arr => {
		let num = 0;

		for (const item of arr) {
			const [ x, y ] = item;
			num += y / x;
		}
		
		return num / arr.length;
	}

	const res = getAveragePriceGoods(allCashbox);
	console.log(res);
}