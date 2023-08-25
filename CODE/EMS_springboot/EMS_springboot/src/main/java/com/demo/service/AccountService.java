package com.demo.service;

import com.demo.beans.Accounts;

public interface AccountService {
   
	void addNewAccount (Accounts a);

	Accounts getByEmailId(String email_id);

}
