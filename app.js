function buttons(user_btn) {
    var screen = document.getElementById("input-screen");
    screen.value += user_btn;
}

function result() {
    var screen = document.getElementById("input-screen");
    var result = eval(screen.value);
    screen.value = result;
}

function remove() {
    var input = document.getElementById("input-screen")

    input.value = input.value.slice(0 , -1);
    // console.log(input.slice( 0 , -1 ));
}