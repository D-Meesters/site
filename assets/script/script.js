const projects = document.getElementById("projects");

                    var xmlhttp = new XMLHttpRequest();
                    var url = "https://api.github.com/users/D-Meesters/repos";
                    xmlhttp.onreadystatechange = function() {
                        if (this.readyState == 4 && this.status == 200) {
                            var arr = JSON.parse(this.responseText);
                            var out = "";
                            var i;
                            for (i = 0; i < arr.length; i++) {
                                if (i <= 4) {
                                    out += `
                                        <div class="project">
                                            <div class="big">` + arr[i].name + `</div>`;
                                    if (arr[i].description != null) {
                                        out += `<p>` + arr[i].description + `</p>`;
                                    }
                                    if (arr[i].language != null) {
                                        out += `<div class="horizontal">
                                                    <img class="image" src="images/CodeLogo.svg" width="21">
                                                    <div>` + arr[i].language + `</div>
                                                </div>`;
                                    }
                                    out += `<div class="horizontal">
                                                <img class="image" src="images/GithubLogo.svg" width="21">
                                                <a href="` + arr[i].html_url + `">Repository</a>
                                            </div>
                                        </div>`;
                                }
                            }
                            projects.innerHTML = out;
                        }
                    };
                    xmlhttp.open("GET", url, true);
                    xmlhttp.send();