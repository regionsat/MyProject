let money, time;

function start() {
   money = +prompt("Ваш бюджет на месяц?", '');
   time = prompt('Введите дату в формате YYYY-MM-DD', '');

   while (isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюджет на месяц?", '');
   }
}
start();

let appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: true
};

function chooseExpenses() {
   for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
         b = prompt("Во сколько обойдется?", '');
   
      if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
         && a != '' && b != '' && a.length < 50) {
         console.log("done");
         appData.expenses[a] = b;
      } else {
         i = i - 1;
      }
   
   }
}
chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
   console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
   console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
   console.log("Максимальный уровень достатка");
} else {
   console.log("Произошла ошибка");
}

function checkSavings() {
   if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
         percent = prompt("Под какой процент?");
      
      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
   }
}

checkSavings();

function detectDayBudget() {
   if (appData.savings == true) {
      let dayBudget = +prompt("Какова сумма дневного бюджета?");
         appData.dayIncome = dayBudget;
   
   detectLevel();
      function detectLevel() {
         if (appData.dayIncome < 100) {
            console.log("Минимальный уровень достатка");
         } else if (appData.dayIncome > 100 && appData.dayIncome < 2000) {
            console.log("Средний уровень достатка");
         } else if (appData.dayIncome > 2000) {
            console.log("Максимальный уровень достатка");
         } else {
            console.log("Произошла ошибка");
         }
      }
   }
   
}
detectDayBudget();

function chooseOptExpenses() {
   let opt1 = +prompt("Статья необязательных расходов?"),
      opt2 = prompt("Статья необязательных расходов?"),
      opt3 = prompt("Статья необязательных расходов?");
   appData.optionalExpenses = {
      1: opt1,
      2: opt2,
      3: opt3,
   }
}

chooseOptExpenses();











