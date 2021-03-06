var addMoreCounter = 1; //adds counter for the dynamic form builder.

var projectID = '';//golobalizing the projectID variable because it has 2 scopes

//when page is ready run this code
$(document).ready(function() {

    //when .openBtn is clicked project id for that project is stored into the session
    $('.openBtn').click(function() {
        projectID = $(this).attr('project-id');
        $.post('includes/ajax/setSession.php', {
            projectid: projectID
        }, function(data) {
            window.location = "features.php#/" + projectID + "";
        });
    });

    //When .statusBtn is clicked status is changed and toggled to its oposite
    //also the database is changed as well.
    $('.statusBtn').click(function() {
        var projectID = $(this).attr('project-id');
        var status = $('.statusBtn[project-id = "' + projectID + '"]').text();

        $.post('includes/ajax/updateAdmin.php', {
            projectid: projectID,
            status: status
        }, function(data) {

            if(status == 'Start'){
                if(data){
                    alert("You must stop a survey before you open a survey.");
                }else{
                    window.location = "survey.php";
                }

            } else {
                window.location.reload();
            }
        });
    });

    //When add more button is clicked on the features page it dynamicly creates more
    //forms for user to add more features.
    $('#addmore').click(function() {
        var input = '<div class="' + addMoreCounter + ' valign-wrapper">' +
            '<div class="col s7 offset-s1">' +
            '<fieldset>' +
            '<legend>Add Feature:</legend>' +
            '<input placeholder="Add Feature Name:" class="featureName" type="text" />' +
            '<textarea placeholder="Add Feature Description:" class="featureDesc"></textarea>' +
            '</fieldset>' +
            '<br />' +
            '</div>' +
            '<button class="btn col s2 offset-s1 removeInput valign" counter="' + addMoreCounter + '">Remove</button>' +
            '</div>';
        $('#dynamicInput').append(input);
        addMoreCounter++;
        $('.removeInput').click(function() {
            var thisDiv = $(this).attr('counter');
            $('.' + thisDiv + '').remove();
        });
    });

    //when remove button is clicked on the features page it removes a add feature form input.
    $('.removeInput').click(function() {
        var thisDiv = $(this).attr('counter');

        $('.' + thisDiv + '').remove();

    });

    //when sumbit button on the features page is called it summites the page and stores
    //all the data into the datanase.
    $('#submit').click(function() {

        //Adds all the feature that share the same name as .featurename to a array
        var allFeatureNameInputs = $('.featureName').map(function() {
            if ($(this).val()) {
                return $(this).val();
            }
        }).get();

        //Adds all the feature that share the same name as .featurename to a array
        var allFeatureDescInputs = $('.featureDesc').map(function() {
            return $(this).val();
        }).get();

        //Adds all features and posts it through ajax and stored in the database. (working on changing this)
        $.post('includes/ajax/insertFeatures.php', {
            featuresNameArr: allFeatureNameInputs,
            featuresDescArr: allFeatureDescInputs
        }, function(data) {
            window.location.reload();
        });
    });

    //when the delete button is clicked deletes feature from database
    $('.delete').click(function() {
        var featureID = $(this).attr('feature-id');

        $.post('includes/ajax/deleteFeature.php', {
            featureid: featureID
        }, function(data) {
            window.location.reload();
        });
    });

    //when deleteProject is clicked it deletes that project and all of its features from the database.
    $('.deleteProject').click(function(){
        var projectID = $(this).attr('project-id');

        $.post('includes/ajax/deleteProject.php', {
            projectid: projectID
        }, function(data) {
            window.location.reload();
        });
    });

    




}); //document.ready
