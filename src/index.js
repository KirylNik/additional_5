module.exports = function check(str, bracketsConfig) {
    let bracketsAsString = [];
    for (let i = 0; i < bracketsConfig.length; i++) {                       //Добавить в массив 'bracketsAsString' все
        bracketsAsString.push(bracketsConfig[i][0] + bracketsConfig[i][1]); //переданные в 'bracketsConfig' типы скобок.
    };

    for (let z = 0; z < bracketsAsString.length + 1; z++) { //Для каждой пар скобок, переданных в 'bracketsConfig'.

        for (let i = 0; i < bracketsAsString.length; i++) {  //Для каждой пар скобок, переданных в 'bracketsConfig'.
            for (let y = 0; y < str.length; y++) {
                if (str.indexOf(bracketsAsString[i]) != -1) { //Если в строке есть искомая по 'bracketsAsString[i]' пара.
                    let deletePosition = str.indexOf(bracketsAsString[i]); // Записать индекс начала парной скобки в 'str'
                    str = str.substring(0, deletePosition) + str.substring(deletePosition + 2); // Перезаписать 'str'без
                    y--;                                                                 // найденой пары скобок.
                };
            };
        };

    };

    if (str.length == 0) {   // Если строка пустая, то значит все элементы в 'str' в результате
        return (true);       // последовательно удаления были парами скобок.
    }
    else {
        return (false);      // Если строка осталась НЕ пустая, то значит НЕ все элементы в 'str' в результате
    };                       // последовательно удаления были именно парами скобок и остались не пары.
};