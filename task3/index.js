const rls = require('readline-sync');

let stepsNum = 10;
let secNum = '' + Math.ceil(Math.random() * (99999 - 100) + 100);
console.log(`Угадай число из ${secNum.length} цифр, у вас ${stepsNum} попыток`);

//
console.log('Загаданное число: ',secNum);
//
for(let step = 1; step < stepsNum + 1; step++){
    console.log(`Попытка ${step}`);
    console.log('Введите число: ');
    let ans = rls.question();
    console.log('Введенное число: ',ans);
    if (checkNum(ans,secNum)){
        console.log('Поздравляем! Вы угадали!')
        break;
    }else{
        console.log('Попробуйте еще раз')
    }

}
console.log('Загаданное число: ',secNum);

function checkNum(secNum,ansNum){
    if(secNum == ansNum){
        return true; //число угадано
    }else{
        if(secNum.length == ansNum.length){
            let bulls = [];
            let cows = [];
            for(let i = 0; i < secNum.length;i++){
                if(secNum[i] == ansNum[i]){
                    //цифра угадана
                    bulls.push(ansNum[i])
                    continue
                }else if(secNum.indexOf(ansNum[i]) != -1){
                    //цифра есть в числе
                    cows.push(ansNum[i]);
                }
            }
            console.log('совпавших цифр не на своих местах: ',cows.length,` (${cows.join(' ')})`);
            console.log('цифр на своих местах: ',bulls.length,` (${bulls.join(' ')})`);

        }else{
            console.log('Количество разрядов числа не совпадает с загаданным числом')
            return false;
        }
    }

}


//const asd = rls.question();