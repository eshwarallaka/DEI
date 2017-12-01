<section role="main" class="content-body">
    <header class="page-header">
        <h2>Territories</h2>
        <div class="right-wrapper pull-right pr-xlg">
            <ol class="breadcrumbs">
                <li>
                    <a href="<?= Yii::$app->params['SITE_URL'] ?>admin">
                        <i class="fa fa-home"></i>
                    </a>
                </li>
                <li><span>Create Territory</span></li>
            </ol>
        </div>
    </header>
    <?php if (Yii::$app->session->hasFlash('success')): ?>
        <div class="alert alert-success alert-dismissable">
            <button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>
            <?= Yii::$app->session->getFlash('success') ?>
        </div>
    <?php endif; ?>
    <?php if (Yii::$app->session->hasFlash('warning')): ?>
        <div class="alert alert-warning alert-dismissable">
            <button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>
            <?= Yii::$app->session->getFlash('warning') ?>
        </div>
    <?php endif; ?>
    <?php if (Yii::$app->session->hasFlash('error')): ?>
        <div class="alert alert-danger alert-dismissable">
            <button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>
            <?= Yii::$app->session->getFlash('error') ?>
        </div>
    <?php endif; ?>

    <!-- start: page -->
    <div class="col-md-6 col-md-offset-3">
        <a href="<?= Yii::$app->params['SITE_URL'] ?>admin/territories" class="mb-xs mt-xs mr-xs btn btn-primary btn-block">Back To Territories List</a>
    </div>
    <form class="form-horizontal form-dtls" method="post" action="<?= Yii::$app->params['SITE_URL'] ?>admin/saveterritory" id="addterritory">
        <div class="col-md-12" >
            <div class="tabs tabs-danger">
                <ul class="nav nav-tabs">
                    <li class="active">
                        <a href="#popular4" data-toggle="tab" aria-expanded="true"><i class="fa fa-align-left"></i> Territory</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div id="popular4" class="tab-pane active">

                        <section class="panel">

                            <h2 class="panel-title">Add Territory</h2>
                            <div class="panel-body">
                                <div class="col-md-12">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">Territory Name : </label>
                                            <div class="col-sm-8">
                                                <input type="text" id="territory_name" name="territory_name" class="form-control" placeholder="Territory*" required="required"  />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">Zone : </label>
                                            <div class="col-sm-8">
                                                <select class="form-control" id="zone_id" name="zone_id" required="required">
                                                    <option value="">SELECT ZONE *</option>
                                                    <?php
                                                    foreach ($zones as $zone)
                                                        if ($zone['zone_status'] == 1)
                                                            echo "<option value='".$zone['zone_id']."'>" . strtoupper($zone['zone_name']) . "</option>";
                                                    ?>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">State : </label>
                                            <div class="col-sm-8">
                                                <select class="form-control" id="state_id" name="state_id" required="required">
                                                    <option value="">SELECT STATE *</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">District : </label>
                                            <div class="col-sm-8">
                                                <select class="form-control" id="district_id" name="district_id" required="required">
                                                    <option value="">SELECT DISTRICT *</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="col-sm-4 control-label">Status : </label>
                                            <div class="col-sm-8">
                                                <select class="form-control" id="territory_status" name="territory_status" required="required">
                                                    <option value="">SELECT STATUS *</option>
                                                    <option value="0">Inactive</option>
                                                    <option value="1">Active</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-12">
            <footer class="panel-footer text-center">
                <button type="submit" class="btn btn-danger">Submit</button>
                <a href="<?= Yii::$app->params['SITE_URL'] ?>admin/territories" type="reset" class="btn btn-default">Cancel</a>
            </footer>
        </div>
    </form>
    <div class="clearfix mb-xlg"></div>
</section>
<script>
$(document).ready(function () {
    $('#adddistrict').validate();
});

$('#zone_id').change(function(){
    var zone_id = $(this).val();
    $.ajax({
        url: "<?= Yii::$app->params['SITE_URL'] ?>admin/getstatesbyzones",
        data : {zone_id: $(this).val(), "_csrf": "<?php echo Yii::$app->request->csrfToken; ?>" },
        dataType: 'json',
        success: function(data){
            $('#state_id').html(data.states);
        }
    });
}); 
$('#state_id').change(function(){
    var state_id = $(this).val();
    $.ajax({
        url: "<?= Yii::$app->params['SITE_URL'] ?>admin/getdistrictsbystates",
        data : {state_id: $(this).val(), "_csrf": "<?php echo Yii::$app->request->csrfToken; ?>" },
        dataType: 'json',
        success: function(data){
            $('#district_id').html(data.districts);
        }
    });
}); 
</script>