$(document).ready(function () {
    var memberId = 1;

    $("#addMember").on("click", function () {
        var newRow = $("#memberSection");
        var cols = "";

        cols += '<div id="member-' + memberId + '" >';

        cols += '<div class="form-row" >'; 

        cols += '<div class="form-group col-sm-6">';
        cols += ' <label for="fname' + memberId + '">First  Name</label>';
        cols += '<input type="text" class="form-control" id="fname' + memberId + '" name="fname-' + memberId + '">';
        cols += '</div> ';

        cols += '<div class="form-group col-sm-4">';
        cols += ' <label for="lname' + memberId + '">Last Name</label>';
        cols += '<input type="text" class="form-control" id="lname' + memberId + '" name="lname-' + memberId + '">';
        cols += '</div> ';

        cols += '<div class="form-group col-sm-2">';
        cols += '<label for="gender-' + memberId + '">Gender</label>';
        cols += '<select class="form-control" id="gender' + memberId + '" name="gender-' + memberId + '"><option>Male</option><option>Female</option></select>';
        cols += '</div>';  

        cols += '</div>';  

        cols += '<div class="form-row">';
       
        cols += '<div class="form-group col-sm-4">';
        cols += '<label for="email' + memberId + '">Email</label>';
        cols += '<input type="email" class="form-control" placeholder="name@email.com" id="email-' + memberId + '" name="email' + memberId + '">';
        cols += '</div>';

        cols += '<div class="form-group col-sm-3">';
        cols += '<label for="phone' + memberId + '">Phone</label>';
        cols += '<input type="tel" pattern="^\d{4}-\d{3}-\d{4}$"class="form-control" placeholder="555-5555-5555"  id="phone-' + memberId + '" name="phone' + memberId + '">';
        cols += '</div>';

        cols += '<div class="form-group col-sm-3">';
        cols += '<label for="bday' + memberId + '">BirthDay</label>';
        cols += '<input class="form-control" type="date" value="2011-08-19"  id="bday-' + memberId + '" name="bday' + memberId + '">';
        cols += '</div>';


        cols += '<div class="form-group col-sm-2">';
        cols += '<label for="tshirt-' + memberId + '">T-Shirt Size</label>';
        cols += '<select class="form-control" id="tshirt' + memberId + '" name="tshirt-' + memberId + '"> <option>S</option><option>M</option><option>L</option><option>XL</option><option>XXL</option><option>XXXL</option></select>';
        cols += '</div>';

        cols += '</div>';  

        cols += '<div class="form-row">'; 

        cols += '<div class="form-group col-sm-4">';
        cols += '<label for="parent-' + memberId + '">Parent Relation</label>';
        cols += '<select class="form-control" id="paren' + memberId + '" name="parent-' + memberId + '"> <option>S</option><option>M</option><option>L</option><option>XL</option><option>XXL</option><option>XXXL</option></select>';
        cols += '</div>';    
        
        cols += '</div>';  

        cols += '<div class="form-row">'; 

        cols += '<div class="form-group">';
        cols += '<button id="delMemBtn" data-id="' + memberId + '" class="form-control  btn btn-md btn-danger ">Delete</button>';
        cols += '</div>';
        cols += '</div>';
        cols += '<hr>';

        cols += '</div>'; 

        newRow.append(cols);
        memberId++;

    });

    $(document).on('click', '#delMemBtn', function() {
        var id = $(this).data('id');
        var selector = "member-"+ id;
        $("div[id*="+selector+"]").remove();
    });

    $('#reunionForm').submit(function(event) {
        event.preventDefault();
        var values = $(this).serializeArray();
        console.log(values)
    });

});

