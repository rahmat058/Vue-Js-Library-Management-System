<template>
  <div class="login">

    <div class="col-lg-12 text-center ">
        <h1 style="font-family:Lucida Console">Library Management System</h1>
    </div>

    <br>

    <div class="login_wrapper">
        <section class="login_content">
            <form name="form1" action="" method="post">
                <h1>User Login Form</h1>

                <div>
                    <input type="text" name="username" class="form-control" placeholder="Username" required=""/>
                </div>
                <div>
                    <input type="password" name="password" class="form-control" placeholder="Password" required=""/>
                </div>
                <div>

                    <input class="btn btn-default submit" type="submit" name="submit1" value="Login">
                    <a class="reset_pass" href="#">Lost your password?</a>
                </div>

                <div class="clearfix"></div>

                <div class="separator">
                    <p class="change_link">New to site?
                        <a href="registration.html"> Create Account </a>
                    </p>

                    <div class="clearfix"></div>
                    <br/>
                </div>
            </form>
        </section>
    </div>

    <div class="alert alert-danger col-lg-6 col-lg-push-3">
        <strong style="color:white">Invalid</strong> Username Or Password.
    </div>

  </div>
</template>

<script>
export default {
}
</script>
