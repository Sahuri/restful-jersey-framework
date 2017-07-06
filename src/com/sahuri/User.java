package com.sahuri;

import java.io.Serializable; 

public class User implements Serializable {  
   private static final long serialVersionUID = 1L; 
   private int id; 
   private String name;
   private String account;
   private String profession;
   private String phone;
   private String email;
   public User(){} 
    
   
   public User(int id, String name, String account,String profession,String phone, String email){  
      this.id = id; 
      this.name = name; 
      this.account=account;
      this.profession = profession; 
      this.phone=phone;
      this.email=email;
   }  
   public int getId() { 
      return id; 
   }  
 
   public void setId(int id) { 
      this.id = id; 
   } 
   public String getName() { 
      return name; 
   } 

   public void setName(String name) { 
      this.name = name; 
   } 
   public String getProfession() { 
      return profession; 
   } 
  
   public void setProfession(String profession) { 
      this.profession = profession; 
   }


	public String getAccount() {
		return account;
	}
	

	public void setAccount(String account) {
		this.account = account;
	}


	public String getPhone() {
		return phone;
	}

	
	public void setPhone(String phone) {
		this.phone = phone;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}   
} 
