const toRadian = angle => Math.PI * (angle - 90) / 180;

const getTimeParts = t => ({
	hour: t.getHours(),
	minute: t.getMinutes(),
	second: t.getSeconds()
});

export const radianX = (r, a) => r * Math.cos(toRadian(a));
export const radianY = (r, a) => r * Math.sin(toRadian(a));


export const timePoints = (r, time) => {
	const { hour, minute, second } = getTimeParts(time);

	const hourX = radianX(r - 30, (360 / 12) * hour);
	const hourY = radianY(r - 30, (360 / 12) * hour);
	const minuteX = radianX(r - 30, (360 / 60) * minute);
	const minuteY = radianY(r - 30, (360 / 60) * minute);
	const secondX = radianX(r - 30, (360 / 60) * second);
	const secondY = radianY(r - 30, (360 / 60) * second);

	return { hourX, hourY, minuteX, minuteY, secondX, secondY };
};