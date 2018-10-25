$(document).ready(function(){
    $('#searchUser').on('keyup', function(e){
        let username = e.target.value;

        // Make request to GitHub
        $.ajax({
            url: 'https://api.github.com/users/' + username,
            data: {
                client_id: 'b1123c80b0f3e5f21c28',
                client_secret: '3262b9509718126e1db2599187537b4558827166'
            }
        }).done(function(user){
            $.ajax({
                url: 'https://api.github.com/users/' + username + '/repos',
                data: {
                    client_id: 'b1123c80b0f3e5f21c28',
                    client_secret: '3262b9509718126e1db2599187537b4558827166',
                    sort: 'created: asc',
                    per_page: 5
                }
            }).done(function(repos){
                $.each(repos, function(index, repo){
                    $('#repos').append(`
                        <div class="alert navbar-dark bg-dark">
                            <div class="row">
                                <div class="col-md-6">
                                    <strong>${repo.name}</strong>
                                    <p>${repo.description}</p>
                                </div>
                                <div class="col-md-4">
                                    <span class="btn btn-primary btn-sm">Forks: ${repo.forks_count}</span>
                                    <span class="btn btn-primary btn-sm">Watchers: ${repos.watchers_count}</span>
                                    <span class="btn btn-primary btn-sm">Stars: ${user.stargazers_count}</span>
                                </div>
                                <div class="col-md-2">
                                    <a href="${repo.html_url}" target="_blank" class="btn btn-primary">Repo Page</a>
                                </div>
                            </div>
                        </div>
                    `);
                });
            });
            $('#profile').html(`
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="${user.avatar_url}" class="avatar">
                                <a href="${user.html_url}" class="btn btn-success d-block mb-2 mt-3" target="_blank">View Profile</a>
                            </div>
                            <div class="col-md-9>
                                <h1 class="card-title">${user.name}</h1>
                                <br><br>
                                <span class="alert alert-primary">Public Repos: ${user.public_repos}</span>
                                <span class="alert alert-info">Public Gist: ${user.public_gist}</span>
                                <span class="alert alert-info">Followers: ${user.followers}</span>
                                <span class="alert alert-warning">Following: ${user.following}</span>
                                <br><br>
                                <ul class="list-group">
                                    <li class="list-group-item">Company: ${user.company}</li>
                                    <li class="list-group-item">Blog: ${user.blog}</li>
                                    <li class="list-group-item">Location: ${user.location}</li>
                                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 class="page-header mt-4">Latest Repo</h3>
                <div id="repos"></div>
            `);
        });
    });
});