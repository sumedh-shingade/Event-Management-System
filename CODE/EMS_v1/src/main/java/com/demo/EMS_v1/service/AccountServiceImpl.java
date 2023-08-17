package com.demo.EMS_v1.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.EMS_v1.dao.AccountDao;
import com.demo.EMS_v1.model.Accounts;

@Service
public class AccountServiceImpl implements AccountService {
	@Autowired
	private AccountDao adao;



	@Override
	public int addNewAccount(Accounts a) {
		
		return adao.save(a);
	}

	

	
	
	


}
