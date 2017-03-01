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
a.quickSort()
console.log(a)
//
$(function () {
    if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
        $('.navi').hide()
    }
    $.post('/stat/new', {}, function (data) {
        all = data.all
        sp_all = data.sp_all
        sp_wx = data.sp_wx
        sp_ali = data.sp_ali
        pos_all = data.pos_all
        pos_wx = data.pos_wx
        pos_ali = data.pos_ali
        pos_card = data.pos_card
        $('#all').append(all.map(x => `<td>${x}</td>`).join(''))
        $('#sp_all').append(sp_all.map(x => `<td>${x}</td>`).join(''))
        $('#sp_wx').append(sp_wx.map(x => `<td>${x}</td>`).join(''))
        $('#sp_ali').append(sp_ali.map(x => `<td>${x}</td>`).join(''))
        $('#pos_all').append(pos_all.map(x => `<td>${x}</td>`).join(''))
        $('#pos_wx').append(pos_wx.map(x => `<td>${x}</td>`).join(''))
        $('#pos_ali').append(pos_ali.map(x => `<td>${x}</td>`).join(''))
        $('#pos_card').append(pos_card.map(x => `<td>${x}</td>`).join(''))
    })
    $('td.pos_follow_ktv_id').each(() => {
        var that = $(this);
        ktv_id = $(this).attr('data-ktvid')
        $.get('/stat/following', {ktv_id:ktv_id, tp:'pos'}, function (data) {
            that.text(data.res)
        })
    })
    $('td.sp_follow_ktv_id').each(() => {
        var that = $(this);
        ktv_id = $(this).attr('data-ktvid')
        $.get('/stat/following', {ktv_id:ktv_id, tp:'sp'}, function (data) {
            that.text(data.res)
        })
    })
})
