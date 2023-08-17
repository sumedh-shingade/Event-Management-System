package com.demo.EMS_v1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.EMS_v1.model.Accounts;
import com.demo.EMS_v1.service.AccountService;

@RestController
public class AccountsController {
	
	  @Autowired
	  private AccountService accountService;

//	    @Autowired
//	    public void AccountController(AccountService accountService) {
//	        this.accountService = accountService;
//	    }
//
//	    @PostMapping("/Accounts")
//	    public ResponseEntity<String> addNewAccount(@RequestBody Accounts account) {
//	        accountService.addAccount(account);
//	        return ResponseEntity.ok("Added successfully");
//	    }

	  
	  @PostMapping("Account")
	  public ResponseEntity<String> addNewAccount(@RequestBody Accounts a){
		  System.out.println(a);
		  int n=accountService.addNewAccount(a);
		  if(n>0)
			  return ResponseEntity.ok("modified successfully");
		  else 
			  return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		  
	  }
	  

	
}
