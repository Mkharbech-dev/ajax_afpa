$(document).ready(function(){
    // alert('ok')
    // $('#btn').click(function(){
    //     //Ajax - debut
    //     $.ajax({
    //         url:"info.txt",
    //         dataType: "text",
    //         success:function(data){
    //             $('.content').html(data);
    //         },
    //         error:function(status){
    //             console.log(status);
    //         }
    //     })
    // })
    $('ul li a').click(function(){
        // event.preventDefault();
        $.ajax({
            
            url: $(this).attr('href'),
            dataType: 'text',
            cache:false,
            success:function(data){
                        $('.container').empty();
                        $('.container').html(data);

                        console.log(data)
                        },
                        error:function(xhr){
                            console.log(xhr.status);
                        }
        })
        return false
    })




})

