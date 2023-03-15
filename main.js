
let homeTask = +prompt ('Введите номер домашнего задания от 1 до 15');

if (homeTask === 1 ) {
let x = prompt('Введите число'); 
alert(Number(x)? x%2 === 0? 'Парное число' : 'НеПарное число' :`ERROR`)} ;



if (homeTask === 2 ) {
  let str = prompt('Введите текст. При вводе текста запрещено использование слов : "плохо", "ужасно" и "отвратительно" ');

if (str.toLowerCase().includes('плохо') ||
 str.toLowerCase().includes('ужасно') ||
  str.toLowerCase().includes('отвратительно')) {alert(`Вы используете запрещенные слова`);}
};

if (homeTask === 3 ) { 
let firstSecretQuestion = confirm ('Если Ваш пол женский нажмите ОК иначе нажмите ОТМЕНА');
console.log(firstSecretQuestion);
};

if (homeTask === 4 ) {
  alert(confirm("Are you happy?") ? "It's wonderful" : 'You need a rest');
};

if (homeTask === 5 ) {
let size = +prompt('Enter your ukrainian outerwear size');
alert((size !== null && size !== undefined && size>=40 && size<=54) ?  
`Your italian size is ${size-12}` : `Your italian size is not defined` )
};

if (homeTask === 6 ) {
   alert(confirm("Are you man (confirm) or woman (esc)?") ? "You are man" : 'You are woman');
  };

  if (homeTask === 7 ) {
     let str = prompt('Введите число');
  if(Number.parseInt(str) || Number.parseInt(str) === 0) {
    alert(str);
  } else {
    alert(`ERROR`);
  } 
};
 
if (homeTask === 8 ) {
  confirm('shopping?') || alert('you are stupped')

};

if (homeTask === 9 ) {
  let answer = confirm('shopping?');
if (!answer) {alert('you are stupped')}
};

if (homeTask === 10 ) { 
 let firstName = prompt("Введите Имя"); 
  let surName = prompt("Введите Отчество");
  let lastName = prompt("Введите Фамилию");
  alert (`Здравствуй,
  ${firstName === null || firstName === " "|| firstName == 0 ?
  'Василий' : firstName} ${surName === null || surName === " "|| surName == 0 ?
   'Васильевич' : surName} ${lastName === null || lastName === " "|| lastName == 0 ?
    'Васильев' : lastName }`);
  };


  if (homeTask === 11 ) { 

let firstName = prompt("Введите Имя"); 
  let surName = prompt("Введите Отчество");
  let lastName = prompt("Введите Фамилию");
  if (firstName === null || firstName === " "|| firstName == 0) {
    alert (` имя пользователя : Василий` ) } else {alert (` имя пользователя : ${firstName}` )};
  if (surName === null || surName === " "|| surName == 0) {
    alert (` отчество пользователя : Васильевич` ) } else {alert (` отчество пользователя : ${surName}` )};
    if (lastName === null || lastName === " "|| lastName == 0) {
      alert (` фамилия пользователя : Василенко` ) } else {alert (` фамилия пользователя : ${lastName}` )};   
    };   

     

    if (homeTask === 12 ) { 
      let login = prompt ('Введите логин'); if (login==='admin') {
        let parol = prompt ('ВВедите пароль'); 
      if (parol === 'qwerty') {alert('Добро пожаловать');} 
          else {alert ('Никакой ты не админ');}} else {alert ('Мы с Вами незнакомы')}
      };



      if (homeTask === 13 ) {
  

       let user = prompt ('Введи слово : камень, ножницы, бумага');
       
       let comp = Math.ceil(Math.random()*100);
       let guess;
       if (comp>=0 && comp<=33) {guess = 'ножницы'} ; 
       if (comp>=34 && comp<=66) {guess = 'камень'};
       if (comp>=67 && comp<=100) {guess = 'бумага'} ;

       alert(`Выбор компа : ${guess}`) ;

       if (user === guess) alert ('ничья');
       if (user === 'ножницы' && guess === 'камень') alert (`Победил комп (ты выбрал: ${user}, комп выбрал: ${guess})`);
       if (user === 'ножницы' && guess === 'бумага') alert (`Победил ТЫ (ты выбрал: ${user}, комп выбрал: ${guess})`);

       if (user === 'бумага' && guess === 'камень') alert (`Победил ТЫ (ты выбрал: ${user}, комп выбрал: ${guess})`);
       if (user === 'бумага' && guess === 'ножницы') alert (`Победил комп (ты выбрал: ${user}, комп выбрал: ${guess})`);

       if (user === 'камень' && guess === 'бумага') alert (`Победил комп (ты выбрал: ${user}, комп выбрал: ${guess})`);
       if (user === 'камень' && guess === 'ножницы') alert (`Победил ТЫ (ты выбрал: ${user}, комп выбрал: ${guess})`);
      };

      if (homeTask === 14 ) {

      let user = prompt ('Введи слово : камень, ножницы, бумага')
       let comp = Math.ceil(Math.random()*100);
       let guess = (comp>=0 && comp<=33 ? 'ножницы' : comp>=34 && comp<=66 ? 'камень' : 'бумага');
      alert (`Комп: ${guess}`); 

       alert(user === guess ? 'ничья':
            user === 'ножницы' && guess === 'камень' ||
             user === 'бумага' && guess === 'ножницы' ||
             user === 'камень' && guess === 'бумага'? "Победил комп" : "Победил ТЫ" );
      };

      if (homeTask === 15 ) {
        
      
        let carrency = prompt ('Выберите и введите валюту к обмену : euro / usd');
              
        const usdSell = 36.5;
        const usdBuy = 36.0;
        const euroSell = 38.5;
        const euroBuy = 37.0;
        
        
 
       if (carrency.toLowerCase() == 'usd') {
        alert (`Курс доллара на сегодня:\n
            Продажа - ${usdSell} грн. за единицу валюты\n
            Покупка - ${usdBuy} грн. за единицу валюты`);

            let agreeToSell = confirm ('Вы хотите продать?')
              if(agreeToSell) { 
                let sumToSell = +prompt(`Продать валюту по курсу ${usdBuy}.
            Введите сумму валюты, которую Вы хотите продать:`);
            alert( (sumToSell > 0) ?
            `В результате продажи Вы получите ${(sumToSell * usdBuy).toFixed(2)} в гривнах.` :                     
            "Приходите к нам еще, но только с деньгами");
          }
             else {let agreeToBuy = confirm ('Вы хотите купить?');
             if(agreeToBuy) {     
            let sumToBuy = +prompt(`Купить валюту по курсу ${usdSell}.
             Введите сумму валюты, которую Вы хотите купить:`);
             alert((sumToBuy > 0) ?
               `Приготовьте ${(sumToBuy * usdSell).toFixed(2)} гривен` :
             "Приходите к нам еще, но только с деньгами");
             } alert('До свидания')}
            };
       
           
           if( carrency.toLowerCase() == 'euro') {
            alert (`Курс евро на сегодня:\n
           Продажа - ${euroSell} грн. за единицу валюты\n
           Покупка - ${euroBuy} грн. за единицу валюты`);

           let agreeToSell = confirm ('Вы хотите продать?')
              if(agreeToSell) {     
           let sumToSell = +prompt(`Продать валюту по курсу ${euroBuy}.
           Введите сумму валюты, которую Вы хотите продать:`);
           alert( (sumToSell > 0) ?
           `В результате продажи Вы получите ${(sumToSell * euroBuy).toFixed(2)} в гривнах.` :                     
           "Приходите к нам еще, но только с деньгами");
              }
 
              else {let agreeToBuy = confirm ('Вы хотите купить?');
              if(agreeToBuy) {                    
                let sumToBuy = +prompt(`Купить валюту по курсу ${euroSell}.
             Введите сумму валюты, которую Вы хотите купить:`);
             alert((sumToBuy > 0) ?
             `Приготовьте ${(sumToBuy * euroSell).toFixed(2)} гривен` :
             "Приходите к нам еще, но только с деньгами");
             } alert('До свидания') }
            };
          }























