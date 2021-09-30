// runner 
const Fox = require('./index.js')

const fdid = new Fox()

const signature = {
	0xaecee: [1,4,3],
	0xfaceb: [3,6,9]
}

// a snapshot to the window, and don't forget the wall 🧱
console.log(fdid.sign()) 
console.log(fdid.snapshot(signature)) 