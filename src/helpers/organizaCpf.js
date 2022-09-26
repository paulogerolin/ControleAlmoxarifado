var cpf = document.getElementById('cpfCad');
if (cpf) {
    cpf.addEventListener('keyup', () => {
        if (cpf.value.length == 11) {
            var array = [];
            for (var cjt = 0; cjt <= 3; cjt++) {
                var pedaco = cpf.value.slice((cjt * 3), (cjt * 3 + 3));
                array.push(pedaco);
            }
        }
        cpf.value = `${array[0]}.${array[1]}.${array[2]}-${array[3]}`;
    });
};

