<?php
    include("inc/header.php");
?>

<div class="container box">
    <div class="right">
        <button type="button" id="modal_button" class="btn btn-info">Create record</button>
        <!-- This is show the modal -->
    </div>
    <div id="result" class="table table-responsive table-bordered">
        <!-- Data will load under this tag!-->
    </div>

    <!-- This is a customer modal. It will use for Create Records and update Record -->
    <div id="customerModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Create New Record</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>Enter First Name</label>
                        <input type="text" name="first_name" id="first_name" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Enter Last Name</label>
                        <input type="text" name="last_name" id="last_name" class="form-control">
                    </div>
                </div>
                <div class="modal-footer">
                    <input type="hidden" name="customer_id" id="customer_id" />
                    <input type="submit" name="action" id="action" class="btn-btn-success" />
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

</div>

<?php
    include("inc/footer.php");
?>