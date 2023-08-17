package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.demo.dao.LoginDao;
import com.demo.model.Accounts;
import com.demo.model.Login;

public class LoginServiceImpl implements LoginService {

	@Autowired
	LoginDao ldao;

	@Override
	public void addNewLogin(Accounts a) {
		Login l=new Login(a.getEmail_id(),a.getPassword());
		ldao.save(l);
	}

}
