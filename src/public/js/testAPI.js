$(document).ready(function (){
    $('.btn-test-api').click(function (){
        $.ajax({
            url:'/api/home',
            type: 'GET',
            dataType: 'json',
            data:{home:'asdfasdfasdf'},
            success: function (data){
                console.log(data)
            }
        })
    })
})