// ========== Selecting from Many Options with Switch Statements ==========

/*
If you need to match one value against many options, you can use a switch statement.
A switch statement compares the value to the case statements which define various possible values.
Any valid JavaScript statements can be executed inside a case block
and will run from the first matched case value until a break is encountered.

The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

---------------------------------------------------------------------------------------------------------------------

Если вам нужно сопоставить одно значение со многими параметрами, вы можете использовать оператор switch.
Оператор switch сравнивает значение с операторами case, которые определяют различные возможные значения.
Любые действительные операторы JavaScript могут выполняться внутри блока case
и будут выполняться с первого совпадающего значения case до тех пор, пока не будет обнаружен разрыв.

Break говорит JavaScript прекратить выполнение инструкций. Если break пропущен, будет выполнен следующий оператор.
 */

/* ============= TASK ===========
Write a switch statement which tests val and sets answer for the following conditions:
-----------------------------------------------------------------------------------------
Напишите оператор switch, который проверяет val и устанавливает ответ для следующих условий:

1 - alpha
2 - beta
3 - gamma
4 - delta
 */

// ============ SOLUTION ================

function caseInSwitch(val) {
    let answer;
    answer = "";

    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

console.log(caseInSwitch(4));