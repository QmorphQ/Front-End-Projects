// Pressets:
const AlphsTabsPairs = [
    ['й', 'q'], ['ц', 'w'], ['у', 'e'], ['к', 'r'], ['е', 't'], ['н', 'y'], ['г', 'u'], ['ш', 'i'], ['щ', 'o'], ['з', 'p'], ['ф', 'a'], ['ы', 's'], ['в', 'd'], 
    ['а', 'f'], ['п', 'g'], ['р', 'h'], ['о', 'j'], ['л', 'k'], ['д', 'l'], ['я', 'z'], ['ч', 'x'], ['с', 'c'], ['м', 'v'], ['и', 'b'], ['т', 'n'], ['ь', 'm'],
]
const cyrillicCommonChars = /[йцукенгшщзфывапролджячмить]/;

export default function searchNormalize(str) {
    const normalizeUnits = [
        (str) => str.toLowerCase(),
        (str) => str.trim(),
        (str) => {
            let arrFromStr = str.split('');
            if (cyrillicCommonChars.test(str)) {
                for (let i = 0; i < arrFromStr.length; i++){
                    if (cyrillicCommonChars.test(arrFromStr[i])){
                        arrFromStr[i] = (AlphsTabsPairs.find((pair) => pair[0] === arrFromStr[i]))[1];
                    } else continue
                } 

            }
            return arrFromStr.join('');
        },
    ];
    const normalizeStr = (str, normalizeStack) => normalizeStack.reduce((acc, func) => func(acc), str);
    return normalizeStr(str, normalizeUnits)
}