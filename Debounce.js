let counter = 0;
const func = () => {
    counter++;
};

// Каждый следующий вызов отменяет предыдущий, если он ожидает выполнения
const debounce = (func, delay) => {
    let timer;
    return function () {
        clearInterval(timer);
        timer = setTimeout(func, delay);
    };
};

const debouncedFunction = debounce(func, 200);

debouncedFunction(); // первый вызов

setTimeout(debouncedFunction, 100); // вызов через 100 мс после последнего вызова. Первый вызов был заблокирован, второй ожидает окончания таймера

setTimeout(debouncedFunction, 200); // вызов через 100 мс после последнего вызова. Второй вызов был заблокирован, третий ожидает окончания таймера

setTimeout(debouncedFunction, 300); // вызов через 100 мс после последнего вызова. Третий вызов был заблокирован, четвертый ожидает окончания таймера

setTimeout(debouncedFunction, 400); // после этого вызова не следует других вызовов. Вызов срабатывает, т.к. после него прошло 200 мс и других вызовов не было

console.log('Ожидание окончания очереди...');

setTimeout(() => {
    console.log('ВЫполнено с задержкой', counter + ' сек');
}, 1000);