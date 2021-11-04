$(document).ready(function(){
  
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

