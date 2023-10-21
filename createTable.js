export default function createTable(data, type, isPreemption = false) {
	const tableContainer = document.getElementById("processed-data");
	const table = document.createElement("table");
	table.classList.add("striped", "centered", "responsive-table");
	table.createTHead();
	const header = table.tHead.insertRow();
	const headerData = [
		"Process",
		"Arrival Time",
		"Burst Time",
		"Priority",
		"Start Time",
		"End Time",
		"Turn Around Time",
		"Waiting Time",
		"Response Time",
	];
	if (type !== "Priority") headerData.splice(3, 1);
	if (type !== "Round Robin") headerData.pop();

	headerData.forEach((head) => {
		const cell = document.createElement("th");
		cell.classList.add("center-align");
		cell.innerText = head;
		header.appendChild(cell);
	});
	const body = table.createTBody();

	const keys = [
		"arrivalTime",
		"burstTime",
		"priority",
		"startTime",
		"endTime",
		"turnAroundTime",
		"waitingTime",
		"responseTime",
	];
	data.forEach((process) => {
		const row = body.insertRow();
		const cell = row.insertCell();
		cell.innerText = process[0];
		keys.map((key) => {
			if (type != "Priority" && key == "priority") return;
			if (type != "Round Robin" && key == "responseTime") return;
			const cell = row.insertCell();
			cell.innerText = process[1][key];
		});
	});
	tableContainer.innerHTML = "";
	tableContainer.appendChild(table);

	const averageContainer = document.getElementById("average");
	const averageTurnAround = document.createElement("p");
	averageTurnAround.innerHTML = `Average Turn Around Time: <b>${
		data.reduce((acc, curr) => acc + curr[1].turnAroundTime, 0) / data.length
	}</b>`;
	averageContainer.innerHTML = "";
	averageContainer.appendChild(averageTurnAround);

	const averageWaiting = document.createElement("p");
	averageWaiting.innerHTML = `Average Waiting Time: <b>${
		data.reduce((acc, curr) => acc + curr[1].waitingTime, 0) / data.length
	}</b>`;
	averageContainer.appendChild(averageWaiting);

	if (type == "Round Robin") {
		const averageResponse = document.createElement("p");
		averageResponse.innerHTML = `Average Response Time: <b>${
			data.reduce((acc, curr) => acc + curr[1].responseTime, 0) / data.length
		}</b>`;
		averageContainer.appendChild(averageResponse);
	}

	document.querySelector(".sub_table").innerHTML = `<h5>${
		isPreemption ? "(Pre-Emptive) " : ""
	}${type} Scheduling Table</h5>`;
}
