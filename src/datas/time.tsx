export const today = new Date();
export const time = today.getHours() + ":" + today.getMinutes();

// const timestamp = Date.now()

export function formatTime(timestamp) {


	const currentTime = Date.now() // เปลี่ยนเป็น timestamp
	const milliseconds = currentTime - timestamp
	const seconds = Math.floor(milliseconds / 1000)
	const minutes = Math.floor(seconds / 60)
	const hours = Math.floor(minutes / 60)

	let formattedTime = ""

	
  	if (hours >= 24) {
		const days = Math.floor(hours / 24)
		formattedTime = `${days} วัน`

		const date = new Date(timestamp)
		const month = date.getMonth() + 1
		const year = date.getFullYear()

		if (days > 30) { formattedTime = `${month} เดือน`}
		if (days > 365) {formattedTime = `${year} ปี` }
	}   
	else if (hours >= 1) {formattedTime = `${hours} ชั่วโมง ${minutes % 60} นาที`}
	else if (minutes >= 0) {formattedTime = `${minutes} นาที`}
	// else if (seconds >= 0) {formattedTime = `${seconds} วินาที`}

	// console.log(formattedTime)
	return formattedTime

}
// console.log(formatTime(0))
// export let startTimer = () => {
// 	// const timestamp = Date.now();
// 	const formattedTime = formatTime(timestamp)
// 	return formattedTime
//   }
  
// export let formattedTime = startTimer()


// export let updateTime = () => {
// 	formattedTime = startTimer()
// 	console.log(formattedTime)
// 	console.log(updateTime)
// 	console.log(Date.now())
// 	// console.log("time1 " +timestamp)
// 	// console.log("time2 " +timestamp)
// 	return formattedTime
//   };
//   console.log("time1 " +timestamp)
//   console.log("time2 " +timestamp)

//   setInterval(() => {formatTime(timestamp)}, 1000)
	
