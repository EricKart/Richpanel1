
const uri='mongodb+srv://Aryan:@Karter1020.pbjm47h.mongodb.net/?retryWrites=true&w=majority';
// mongodb+srv://yadavkapil2336:<password>@cluster0.pbjm47h.mongodb.net/?retryWrites=true&w=majority
const mongoose=require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect(uri).then(()=>{
    console.log("running succesfully");
}).catch((err)=>{
    console.log(err);
});

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
	text: {
		type: String,
		required: true
	},
	complete: {
		type: Boolean,
		default: false
	},

});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;