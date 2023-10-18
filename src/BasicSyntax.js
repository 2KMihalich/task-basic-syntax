export function romanToInteger(str) {
    let result = 0,
        objRomanInteger = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        },
        flag = false;
    for (let i = str.length - 1; i >= 0; i--) {
        let currElem = objRomanInteger[str[i]],
            nextElem = objRomanInteger[str[i - 1]];
        if (flag) {
            flag = false;
            continue;
        } else if (currElem > nextElem) {
            flag = true;
            result += currElem - nextElem;
        } else {
            result += currElem;
            flag = false;
        }
    }
    return result;
}
