/*
================== Adding a Default Option in Switch Statements ==================

In a switch statement you may not be able to specify all possible values as case statements.
Instead, you can add the default statement which will be executed if no matching case statements are found.
Think of it like the final else statement in an if/else chain.

A default statement should be the last case.

-----------------------------------------------------------------------------------------------------------

В операторе switch вы не сможете указать все возможные значения в качестве операторов case.
Вместо этого вы можете добавить оператор по умолчанию, который будет выполняться,
если соответствующие операторы case не будут найдены.
Думайте об этом как о последнем операторе else в цепочке if/else.

Оператор по умолчанию должен быть последним случаем.


===================== TASK =======================

Write a switch statement to set answer for the following conditions:
-------------------------------------------------------------------------------------------
Напишите оператор switch, чтобы задать ответ для следующих условий:

a - apple
b - bird
c - cat
default - stuff
 */
// ================= SOLUTION =====================

function switchOfStuff(val) {
  let answer;
  //answer = "";

  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff"
  }
  return answer;
}

console.log(switchOfStuff("a"));

