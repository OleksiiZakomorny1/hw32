//2
function numOfArgs() {
	console.log(arguments.length)
}

numOfArgs(1, 2, "3")

3
function compare(a = prompt('First number'), b = prompt('Second number')) {
	let res
	if (a < b) {
		res = -1
	} else if (a > b) {
		res = 1
	} else if (a == b) {
		res = 0
	} else {
		res = NaN
	}
	alert(res)
}
compare()

//4
function factorial(num = prompt('Enter number')) {
	if (num < 0) {
		return "error"
	} else if (num == 0) {
		return 1
	} else {
		return (num * factorial(num - 1))
	}
}
alert(factorial())

//5
function number(z = prompt("Enter number 1"), x = prompt("Enter number 2"), c = prompt("Enter number 3")) {
	let result = +(z + x + c)
	alert(result)
}
number()

//6
function area(i = prompt("Height"), j = prompt("Width")) {
	let s = 0
	if (i == j) {
		s = i * i
	} else {
		s = i * j
	}
	alert(`The area is ${s}`)
}

area()