const express = require('express');
const app = express();

const port = 5000;
app.get('/', (req,res) => {
	res.send({hey: "Hoe"});
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
})