const fs = require('fs');
const csv = require('csv');

//処理（跡でpipeに食べさせる）
const parser = csv.parse((error, data) => {

    //内容出力

    //変換後の配列を格納
    let newData = [];
    console.log("hoge")
    //ループしながら１行ずつ処理
    let ls = 0;
    let bit = 0;
    const mod = (2<<18);
    var vec = new Array(mod).fill(0);
    data.forEach((element, index, array) => {
        let n = element[1];
        if(!isNaN(n)){
            bit = bit << 1;
            //console.log(bit)
            if(ls<n) bit++;
            ls = n;
            bit %= mod;
            vec[bit]++;
        }
    });
    console.log(vec);

    fs.writeFile('out.txt', vec.join(" "), (err, data) => {
        if(err) console.log(err);
        else console.log('write end');
      });
    /*
    //write
    csv.stringify(newData,(error,output)=>{
        fs.writeFile('out.csv',output,(error)=>{
            console.log('処理データをCSV出力しました。');
        })
    })*/
})

//読み込みと処理を実行
fs.createReadStream('test.csv').pipe(parser);