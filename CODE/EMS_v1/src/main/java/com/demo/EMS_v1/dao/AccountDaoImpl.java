package com.demo.EMS_v1.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.demo.EMS_v1.model.Accounts;

@Repository
public class AccountDaoImpl implements AccountDao {

	@Autowired
	SessionFactory sessionFactory;

	@Override
	public int save(Accounts a) {
		try {
		
	Session session=sessionFactory.openSession();
	Transaction tr=session.beginTransaction();
	session.save(a);
	tr.commit();
	session.close();
	return 1;
		

	}catch(DataAccessException e)
	{

		return 0;

	}

}
}

