$(document).ready(function() {
    const BASE_URI = "http://localhost:3000";
    const emailInput = $("#email");
    const passwordInput = $("#password");
    
    //LOGIN
    $(".btn-login").click(function(event) {
        event.preventDefault(); 
        const data = {
            email: emailInput.val(),
            password: passwordInput.val(),
        }       
        $(function() {
            $.ajax({
                url: `${BASE_URI}/users`,
                method: "GET",
                success: function (users) {
                    const user = users.some(user => user.email == data.email && user.password == data.password);
                    if (user) {
                        window.location.replace("add_new_vehicle.html");
                        localStorage.setItem('email', `${data.email}`);
                        
                    } else {
                        $('.login-info').css('display', 'block');
                        return;
                    }
                },
                error: function (err) {
                    console.log("Error: ", err);
                }
            });
        }); 
    });
        // /SIGN UP
        $(".btn-signup").click(function(event) {
            event.preventDefault();
            const data = {
                email: emailInput.val(),
                password: passwordInput.val(),
                isAdmin: false
            };
            
            $(function() {
                $.ajax({
                    url: `${BASE_URI}/users`,
                    method: "GET",
                    success: function(users) {
                        const user = users.some(user => user.email == data.email);
                        //If user already exists    
                        if (user) {
                            $('.signup-info').css('display', 'block');
                            return;
                        };
                        //New User - Add to DB   
                        $.ajax({
                            url: `${BASE_URI}/users`,
                            method: "POST",
                            data,
                            success: function() {
                                window.location.replace("add_new_vehicle.html");
                                localStorage.setItem('email', `${data.email}`);
                            }
                        });
                    },
                    error: function(err) {
                        console.log("Error: ", err);
                    }
                });
            });
        });
    });
