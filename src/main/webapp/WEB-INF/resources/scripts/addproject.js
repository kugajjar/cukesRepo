jQuery(document).ready(function() {

        $("input[id^='add-project']").on('click',function() {


                var me = $(this);
                var project_name = $(".project-name").val();
                var repository_url = $(".repository-path").val();
                var path_to_features = $(".git-branch").val();
                var email_of_po = $(".project-owners").val();
                var display_project_name = $(".display-name").val();

             $.ajax({

                url: "/user/add-project/persist",
                data:{projectname: project_name, displayprojectname: display_project_name, repositorypath: repository_url, featurespath: path_to_features, emailofpo: email_of_po},


                    }).done(function(data) {

                    top.location.href = "/projects/";

                                                          });

            });
});