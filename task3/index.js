const rls = require('readline-sync');
rls.setDefaultOptions({encoding: 'utf8'});
const userName = rls.question('Как тебя зовут? ');

console.log('Привет', userName);