//js的递归快拍
if (typeof Array.prototype.quickSort != 'function') {
    Array.prototype.quickSort = function () {
        quickSortHelper(this, 0, this.length-1)
        function quickSortHelper (arr, start, end) {
            if (start < end) {
                var part = partation(arr, start, end)
                arguments.callee(arr, start, part - 1)
                arguments.callee(arr, part + 1, end)
            }
        }
        function partation(arr, start, end) {
            var pivot = arr[start]
            while (start < end) {
                while (start < end && arr[end] > pivot) {
                    end -= 1
                }
                arr[start] = arr[end]
                while (start < end && arr[start] < pivot) {
                    start += 1
                }
                arr[end] = arr[start]
            }
            arr[start] = pivot
            return start
        }
    }
}
var a = [3,1,2]
a.quickSort()
console.log(a)