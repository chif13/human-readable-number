module.exports = function toReadable(number) {
    if (number / 10 < 1) {
        switch (number) {
            case 0: return 'zero';
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
        }
    }
    if (number / 100 < 1) {
        let n2 = Math.floor(number / 10);
        let n3 = number % 10;
        if (n2 === 1) {
            switch (n3) {
                case 0: return 'ten';
                case 1: return 'eleven';
                case 2: return 'twelve';
                case 3: return 'thirteen';
                case 4: return 'fourteen';
                case 5: return 'fifteen';
                case 6: return 'sixteen';
                case 7: return 'seventeen';
                case 8: return 'eighteen';
                case 9: return 'nineteen';
            }
        }
        let res = '';
        switch (n2) {
                case 2: res += 'twenty'; break;
                case 3: res += 'thirty'; break;
                case 4: res += 'forty'; break;
                case 5: res += 'fifty'; break;
                case 6: res += 'sixty'; break;
                case 7: res += 'seventy'; break;
                case 8: res += 'eighty'; break;
                case 9: res += 'ninety'; break;
            }
        switch (n3) {
                case 0: return res;
                case 1: return res += ' one';
                case 2: return res += ' two';
                case 3: return res += ' three';
                case 4: return res += ' four';
                case 5: return res += ' five';
                case 6: return res += ' six';
                case 7: return res += ' seven';
                case 8: return res += ' eight';
                case 9: return res += ' nine';
        }
    }
    let n1 = Math.floor(number / 100);
    let n2 = (Math.floor(number / 10)) % 10;
    let n3 = number % 10;
    let res = '';
    switch (n1) {
        case 1: res += 'one hundred'; break;
        case 2: res += 'two hundred'; break;
        case 3: res += 'three hundred'; break;
        case 4: res += 'four hundred'; break;
        case 5: res += 'five hundred'; break;
        case 6: res += 'six hundred'; break;
        case 7: res += 'seven hundred'; break;
        case 8: res += 'eight hundred'; break;
        case 9: res += 'nine hundred'; break;
    }
    if (n2 === 1) {
            switch (n3) {
                case 0: return res += ' ten';
                case 1: return res += ' eleven';
                case 2: return res += ' twelve';
                case 3: return res += ' thirteen';
                case 4: return res += ' fourteen';
                case 5: return res += ' fifteen';
                case 6: return res += ' sixteen';
                case 7: return res += ' seventeen';
                case 8: return res += ' eighteen';
                case 9: return res += ' nineteen';
            }
    }
    switch (n2) {
        case 0: res += ''; break;
                case 2: res += ' twenty'; break;
                case 3: res += ' thirty'; break;
                case 4: res += ' forty'; break;
                case 5: res += ' fifty'; break;
                case 6: res += ' sixty'; break;
                case 7: res += ' seventy'; break;
                case 8: res += ' eighty'; break;
                case 9: res += ' ninety'; break;
            }
        switch (n3) {
                case 0: return res;
                case 1: return res += ' one';
                case 2: return res += ' two';
                case 3: return res += ' three';
                case 4: return res += ' four';
                case 5: return res += ' five';
                case 6: return res += ' six';
                case 7: return res += ' seven';
                case 8: return res += ' eight';
                case 9: return res += ' nine';
        }


}
