package com.demo.EMS_v1.dao;

import org.springframework.stereotype.Repository;

import com.demo.EMS_v1.model.Accounts;

@Repository	
public interface AccountDao  {

	
int save(Accounts a);
	
	

	

}
