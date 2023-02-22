$(() => {
	let everyOtherSecond;
	const s = new Date().getSeconds();
	const time = [s, s + 1, s + 2, s + 3];
	const ctx = document.getElementById('chart');
	let refridgerantReturn = [1, 2, 6, 9], refridgerant = [12, 19, 3, 5], ambient = [20, 15, 18, 20]


	function replaceData(chart, label, newData) {
		chart.data.labels.shift();
		chart.data.labels.push(label);

		chart.data.datasets.forEach((dataset) => {
			let filteredDataPoint = newData.filter((dp) => Object.keys(dp) == dataset.label)[0];
			dataset.data.shift();
			dataset.data.push(...Object.values(filteredDataPoint));
		});
		chart.update();
	}


	let myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: time,
			datasets: [
				{
					label: 'Retur',
					data: refridgerantReturn,
					borderWidth: 1,
					backgroundColor: 'red',
					borderColor: 'red',
				},
				{
					label: 'Tillopp',
					data: refridgerant,
					borderWidth: 1,
					backgroundColor: 'blue',
					borderColor: 'blue',
				},
				{
					label: 'Rumstemp',
					data: ambient,
					borderWidth: 1,
					backgroundColor: 'green',
					borderColor: 'green',
				},
			]
		},
		options: {
			animation: false,
			interaction: {
				mode: 'nearest',
				axis: 'x',
				intersect: false
			}
		}
	});


	$('#start').on('click', () => {
		everyOtherSecond = setInterval(() => {
			refridgerant.push(1)
			refridgerantReturn.push(2)
			ambient.push(3)

			//	Add previously used datasets.label for comparison in replaceData function ()
			const newDataPoints = [
				{ 'Retur': refridgerantReturn.at(-1) },
				{ 'Tillopp': refridgerant.at(-1) },
				{ 'Rumstemp': ambient.at(-1) },
			];

			replaceData(myChart, new Date().getSeconds(), newDataPoints)
			console.log(`data can still be saved to csv non mutated ${refridgerant.length}`);
		}, 2000)
	})

	$('#stop').on('click', () => {
		clearInterval(everyOtherSecond)
	})
})