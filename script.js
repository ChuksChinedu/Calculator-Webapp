let result = document.getElementById('result');

function addNum(num) {
	result.value += num;
}

function clearScreen() {
	result.value = '';
}

function calculate() {
	result.value = eval(result.value);
}
