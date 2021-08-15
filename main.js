const app = require("express")();

const PORT = process.env.PORT || 3000;

var a=0;
setInterval(generaVal,5000);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generaVal(){
    a = getRandomInt(10)+1;
}



app.get("", (req, res) => {
  res.write(a.toString());
  res.end();
});

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});