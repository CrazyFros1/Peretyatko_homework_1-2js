//   HOMEWORK 1

var arr = [];                                         
var b = 5;                                             
reg(b);                                                 
enter(prompt('введите ваше имя'));                      
function reg(x) {
    var names = prompt('введите имена пользователей');
    arr = names.split(' ', x);                          
}
function enter(x) {
    var i = 0;
    var a = false;
    while (i < arr.length) {                            
        if (x == arr[i]) {
            a = true;
            break;
        }
        i++;
    }
    if (a == true) {                                    
        alert('Добро пожаловать ' + arr[i]);
    } else {
        alert('Ошибка Входа');
    }
}


//  HOMEWORK 2


var a = prompt('введите число');
var b = prompt('введите степень');

pow(a, b);

function pow(x, y) {

    var result = 1;
    var i = 0;

    if (y > 0) {            
        while (i < y) {     
            result *= x;
            i++;
        }
    } else if (y < 0) {     
        var c = -y;         
        var d = 1;
        while (i < c) {     
            d *= x;
            i++;
        }
        result = 1 / d;     
    } else {
        alert('mistake');   
        result = 'mistake';
    }
    console.log(result);   
} 