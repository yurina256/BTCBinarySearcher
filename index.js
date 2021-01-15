const { report } = require("process");

function Main(input){
    var n =  parseInt("1000111111110110100",2)//二進数18桁
    n %= (2<<17)
    input = input.split(" ").map(Number);
    console.log("low:"+input[n<<1]+" high:"+input[(n<<1) + 1])
/*    var souwa = 0;
    var kak = 0;
    for(var i=0;i<18;i++){
        console.log(18-i);
        var h = 0;
        var l = 0;
        for(var j=(n<<i);j<((n+1)<<i);j++){
            if(j%2==1) h+=input[j];
            else l+=input[j];
        }
        console.log(h,l);
        var x = Math.pow(h,2)/(Math.pow(h,2)+Math.pow(l,2))
        souwa += (Math.pow(18-i,1.5));
        kak += Math.pow(18-i,1.5)*x;

        n %= (2<<(17-i));
        console.log(n.toString(2))

    }
    console.log(kak/souwa)*/
}Main(require("fs").readFileSync("./out.txt", "utf8").trim());
