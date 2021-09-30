

class Fox {
	constructor(){
		this.identity = null
	}

	snapshot(matrix){
		const blob = new Blob([JSON.stringify(matrix, null, 2)], {type : 'application/json'});
		console.log(blob)
		return blob
	}

	sign(){
		this.identity = 'now'
		const here = this.identity
		return here;
	}
}

module.exports = Fox