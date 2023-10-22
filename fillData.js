export default function fillData(type, randomize = false) {
	let arrivalData = [];
	let burstData = [];
	let priorityData = [];

	arrivalData = [0, 5, 12, 2, 9];
	burstData = [11, 28, 2, 10, 16];
	priorityData = [2, 0, 3, 1, 4];

	if (randomize) {
		arrivalData = arrivalData.map(() => Math.floor(Math.random() * 20));
		burstData = burstData.map(() => Math.floor(Math.random() * 20));
		priorityData = priorityData.map(() => Math.floor(Math.random() * 10));
	}

	var arrivalInputs = document.querySelectorAll(".arrivalInput");
	var burstInputs = document.querySelectorAll(".burstInput");

	arrivalInputs.forEach((elem, index) => {
		if (index > arrivalData.length - 1) elem.value = Math.floor(Math.random() * 20);
		else elem.value = arrivalData[index];
	});

	burstInputs.forEach((elem, index) => {
		if (index > arrivalData.length - 1) elem.value = Math.ceil(Math.random() * 20);
		else elem.value = burstData[index];
	});

	if (type === "Priority") {
		var priorityInputs = document.querySelectorAll(".priorityInput");
		priorityInputs.forEach((elem, index) => {
			if (index > arrivalData.length - 1) elem.value = Math.ceil(Math.random() * 20);
			else elem.value = priorityData[index];
		});
	}
}
