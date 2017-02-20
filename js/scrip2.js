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
