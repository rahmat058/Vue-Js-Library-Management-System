<template>
   <div class="registration">
     <div class="col-lg-12 text-center ">
         <h1 style="font-family:Lucida Console">Library Management System</h1>
     </div>

     <div class="login" style="margin-top: -20px;">

       <div class="login_wrapper">
               <section class="login_content" style="margin-top: -40px;">
                   <form name="form1" action="" method="post">
                       <h2>User Registration Form</h2><br>

                       <div>
                           <input type="text" class="form-control" placeholder="FirstName" name="firstname" required=""/>
                       </div>
                       <div>
                           <input type="text" class="form-control" placeholder="LastName" name="lastname" required=""/>
                       </div>

                       <div>
                           <input type="text" class="form-control" placeholder="Username" name="username" required=""/>
                       </div>
                       <div>
                           <input type="password" class="form-control" placeholder="Password" name="password" required=""/>
                       </div>
                       <div>
                           <input type="text" class="form-control" placeholder="email" name="email" required=""/>
                       </div>
                       <div>
                           <input type="text" class="form-control" placeholder="contact" name="contact" required=""/>
                       </div>
                       <div>
                           <input type="text" class="form-control" placeholder="SEM" name="sem" required=""/>
                       </div>
                       <div>
                           <input type="text" class="form-control" placeholder="Enrollment No" name="enrollmentno" required=""/>
                       </div>
                       <div class="col-lg-12  col-lg-push-3">
                           <input class="btn btn-default submit " type="submit" name="submit1" value="Register">
                       </div>

                   </form>
               </section>
       </div>

       <div class="alert alert-success col-lg-6 col-lg-push-3">
           Registration successfully, You will get email when your account is approved
       </div>
     </div>

   </div>
</template>

<script>
export default {
}
</script>
