function filter1() {
    var input, filter, table, tr, td, i, txtvalue;
    input = document.getElementById('boxSearch');
    filter = input.value.toUpperCase();
    table = document.getElementById('table');
    tr = table.getElementById('tr');

    for (i = 0; i < tr.length; i++); {
        td = tr[i].getElementById('td')[0];
        if (td){
            txtvalue = td.textContent || td.innertext;
            if (txtvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}