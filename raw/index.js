class Fox {
	constructor(){
		this.identity = null
	}

	snapshot(matrix){
		const blob = new Blob([JSON.stringify(matrix, null, 2)], {type : 'application/json'});
		console.log(blob)

		const file = new File([blob], `capture-${Date.now()}.txt`, {
		  type: "text/plain",
		  lastModified: new Date().getTime(),
		});

		return blob
	}

	sign(){
		this.identity = 'now'
		const here = this.identity
		return here;
	}
}

export default Fox

