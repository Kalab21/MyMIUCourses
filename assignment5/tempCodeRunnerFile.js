function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

document.getElementById("result1").innerText = max(3, 6);