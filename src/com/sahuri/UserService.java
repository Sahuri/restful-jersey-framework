package com.sahuri;

import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/UserService") 

public class UserService {  
	 UserDao userDao = new UserDao();
	 private static final String SUCCESS_RESULT="success";
	 private static final String FAILURE_RESULT="failure";
	   
   @GET 
   @Path("/all") 
   @Produces(MediaType.APPLICATION_JSON) 
   public List<User> getUsers(){ 
      return userDao.getAllUsers(); 
   }  
   
   @POST
   @Path("/get")
   @Produces(MediaType.APPLICATION_JSON)
   public User getUser(User user){
      return userDao.getUser(user.getId());
   }

   @POST
   @Path("/new")
   @Produces(MediaType.APPLICATION_JSON)
   public String createUser(User user) {
      int result = userDao.addUser(user);
      if(result == 1){
         return SUCCESS_RESULT;
      }
      return FAILURE_RESULT;
   }
   
   @POST
   @Path("/update")
   @Produces(MediaType.APPLICATION_JSON)
   public String updateUser(User user){
      int result = userDao.updateUser(user);
      if(result == 1){
         return SUCCESS_RESULT;
      }
      return FAILURE_RESULT;
   }

   @POST
   @Path("/delete")
   @Produces(MediaType.APPLICATION_JSON)
   public String deleteUser(User user){
      int result = userDao.deleteUser(user.getId());
      if(result == 1){
         return SUCCESS_RESULT;
      }
      return FAILURE_RESULT;
   }

}
