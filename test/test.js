function A(a) {
    this.x = a;
    var get = function() {
        return this.x;
    }
    this.print = function() {
        console.log(get());
    }
}

a = new A(1);
a.print();
