(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
        	Director: this["director"].value
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit( processForm );
})(jQuery);


function getAllMovies() {
   $.ajax({
    url:"https://localhost:44325/api/movie",
    contentType: "application/json",
    type: "get",
    success: function( data, textStatus, jQxhr ){
                console.log("Success!");
                console.log(data);
            },
            error: function( jqXhr, textStatus, errorThrown ){
                 console.log("Error!");
                console.log( errorThrown );
            }
    dataType:dataType
   });
}

function jqMovieInput(){
    let valueofInput = $(jqMovieInput).value();
    console.log (valueofInput);
    $(jqMovieInput).value("")
}

function postMovie(){
    $.ajax({
        url:"https://localhost:44325/api/movie",
        dataType: "json",
        type: "post",   
        contentType: "application/json",
        data JSON.replaceWith(dict),
        success: function( data, textStatus, jQxhr ){
                console.log("Success!");
                console.log(data);
            },
            error: function( jqXhr, textStatus, errorThrown ){
                 console.log("Error!");
                console.log( errorThrown );
            }
    })
}

function putMovies(){
     $.ajax({
        url:"https://localhost:44325/api/movie",
        dataType: "json",
        type: "put",   
        contentType: "application/json",
        data JSON.replaceWith(dict),
        success: function( data, textStatus, jQxhr ){
                console.log("Success!");
                console.log(data);
            },
            error: function( jqXhr, textStatus, errorThrown ){
                 console.log("Error!");
                console.log( errorThrown );
     })       }
}

function deleteMovies(){
    var dict = {
        Title: this["title"].value,
        Director:this["director"].value,
        Genere: this["genere"].value
    };
}