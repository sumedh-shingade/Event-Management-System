

CREATE TABLE venue (
    venue_id INT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    location VARCHAR(255)
);
CREATE TABLE media (
    media_id INT PRIMARY KEY,
    photography VARCHAR(255),
    videography VARCHAR(255),
    drone_photography VARCHAR(255)
);
CREATE TABLE menu (
    menu_id INT PRIMARY KEY,
    indian VARCHAR(255),
    continental VARCHAR(255)
);
CREATE TABLE decoration (
    decoration_id INT PRIMARY KEY,
    floral_decor VARCHAR(255),
    balloon_decor VARCHAR(255),
    other_decor VARCHAR(255)
);
CREATE TABLE events (
    event_id INT PRIMARY KEY,
    event_name VARCHAR(255),
    date DATE,
    time TIME,
    exp_attendee INT,
    venue_id INT,
    menu_id INT,
    media_id INT,
    decoration_id INT,
    FOREIGN KEY (venue_id) REFERENCES venue(venue_id),
    FOREIGN KEY (menu_id) REFERENCES menu(menu_id),
    FOREIGN KEY (media_id) REFERENCES media(media_id),
    FOREIGN KEY (decoration_id) REFERENCES decoration(decoration_id)
);

CREATE TABLE login (
	
    uname VARCHAR(255),
    password VARCHAR(255),
    role varchar(20)
);


CREATE TABLE customer (
    customer_id INT PRIMARY KEY auto_increment,
    emailid VARCHAR(255),
    password VARCHAR(255),
    uname varchar(40),
    name VARCHAR(255),
    mob_no VARCHAR(15),
    address VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    pincode VARCHAR(10),
    event_id INT,
    FOREIGN KEY (event_id) REFERENCES events(event_id)

);
CREATE TABLE admin (
    admin_id INT PRIMARY KEY auto_increment,
    email_id VARCHAR(255),
    password VARCHAR(255),
    name VARCHAR(255),
    uname varchar(40),
   
    date_of_birth DATE
  
);
