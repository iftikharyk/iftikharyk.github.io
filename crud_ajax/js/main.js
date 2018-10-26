$(document).ready(function(){
    fetchUser(); // This function will load data on webpage when page load
    function fetchUser(){ // This function will fetch data from table and display under #result
        var action = "Load";
        $.ajax({
            url: "action.php", // Request send to "action.php page"
            method: "POST", // Using of Post method for sending data
            data: {action:action}, // Action variable data has been send to server
            success:function(data){
                $('#result').html(data); // It will display data under #result
            }
        });
    }

    // This jQuery code will Reset value of Modal item when modal will load from create users
    $('#modal_button').click(function(){
        $('#customerModal').modal('show'); // It will load modal on webpage
        $('#first_name').val(''); // this will clear modal first name textbox
        $('#last_name').val(''); // this will clear modal last name textbox
        $('.modal-title').text("Create New Records"); // It will change the modal title
        $('#action').val('Create');
    });

    // This jQuery code is for Click on Modal action button for Create new records or update existing record
    $('#action').click(function(){
        var firstName = $('#first_name').val(); // Get the value of first name textbox
        var lastName = $('#last_name').val(); // Get the value of last name textbox
        var id = $('#customer_id').val(); // Get the value of hidden field customer id
        var action = $('#action').val(); // Get the value of Modal Action button and stored into action variable
        if(firstName != '' && lastName !='') {
            $.ajax({
                url: "action.php", // Request send to action.php page
                method: "POST", // Using of Post method for send data
                data:{firstName:firstName, lastName:lastName, id:id, action:action}, // Send data to server
                success:function(data){
                    alert(data); // It will pop up which data it was received from server side
                    $('#customerModal').modal('hide'); // It will hide Customer Modal from webpage
                    fetchUser();
                }
            });
        } else {
            alert("Both fields are required"); // If both field are empty then show error
        }
    });

    // This jQuery code is for Update customer data
    $(document).on('click', '.update', function(){
        var id = $(this).attr("id"); // It will fetch customer data using id
        var action = "Select"; // We have define action variable value is equal to select
        $.ajax({
            url: "action.php", // Request send to action.php
            method: "POST", // Using post method
            data:{id:id, action:action}, // Send data to server
            dataType: "json", // Define json datatype, so server will send data in json format
            success:function(data){
                $('#customerModal').modal('show');
                $('.modal-title').text('Update Records');
                $('#action').val("Update"); // This will change the button value
                $('#customer_id').val(id); // this will define the value of id
                $('#first_name').val(data.first_name); // It will assign value to textbox
                $('#last_name').val(data.last_name); // It will assign value to textbox
            }
        });
    });

    // This jQuery code to delete customer data
    $(document).on('click', '.delete', function(){
        var id = $(this).attr("id"); // this will fetch customer data by id
        if (confirm("Are you sure you want to delete this data?")) { // Confirm Box
            var action = "Delete";
            $.ajax({
                url: "action.php",
                method: "POST",
                data:{id:id, action:action}, // Data send to server from ajax method
                success:function(data) {
                    fetchUser(); // fetchUser() function has been called and it will load data under divison tag with id result
                    alert(data); // It will pop up which data it was received from server side
                }
            });
        } else {
            return false; // No action will perform
        }
    });

    // https://www.webslesson.info/2017/01/php-pdo-crud-with-ajax-jquery-and-bootstrap.html

});