let n;

console.log("Digite o número que deseja exibir a tabuada:")
process.stdin.on("data", function(data){
    n = data.toString().trim();
    if(isNaN(n)){
        console.log("O valor digitado não é um número. Digite novamente:");
    } else{
        for(let c=1; c<11; c++){
            console.log(n + " x " + c + " = " + n*c);
        }
        process.exit();
    }
});