var ArrayList = (function ArrayList() {

    function ArrayList() {
        this.length = 0;
        this.data = {};
    }

    ArrayList.prototype.push = function(element) {
        this.data[this.length] = element;
        this.length++;
    };

    ArrayList.prototype.pop = function() {
        var elem = this.data[this.length - 1];
        this.length--;
        delete this.data[this.length - 1];
        return elem;
    };

    ArrayList.prototype.get = function(index) {
        return this.data[index];
    };

    ArrayList.prototype.delete = function(index) {
      var elem = this.data[index];
      delete this.data[index];
      this.length--;

      _collapseArrayList(index);

      return elem;
    };

    _collapseArrayList = function(index) {
        for(var i = index; i < this.length; i++ ) {
            this.data[i] = this.data[i+1];
        }
    };

    return ArrayList;
}());