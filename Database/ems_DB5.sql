

CREATE TABLE venue (
    venue_id INT PRIMARY KEY auto_increment,
    name VARCHAR(255),
    address VARCHAR(255),
    location VARCHAR(255)
);

CREATE TABLE catering (
    catering_id INT PRIMARY KEY auto_increment,
   menu varchar(255)
);


CREATE TABLE decoration (
    decoration_id INT PRIMARY KEY auto_increment,
decor_type varchar(255)
);

CREATE TABLE media (
    media_id INT PRIMARY KEY auto_increment,
   media_type varchar(255)
);


CREATE TABLE accounts (
    email_id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    mob_no VARCHAR(20),
    role VARCHAR(50) NOT NULL
);

CREATE TABLE bookings (
    event_id INT PRIMARY KEY auto_increment,
    event_name VARCHAR(255) NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    date DATE NOT NULL,
    exp_attendee INT,
    venue_id INT,
    catering_id INT,
    decoration_id INT,
    media_id INT,
    email_id VARCHAR(255),
    FOREIGN KEY (venue_id) REFERENCES venue(venue_id),
    FOREIGN KEY (catering_id) REFERENCES catering(catering_id),
    FOREIGN KEY (decoration_id) REFERENCES decoration(decoration_id),
    FOREIGN KEY (media_id) REFERENCES media(media_id),
    FOREIGN KEY (email_id) REFERENCES accounts(email_id)
);



CREATE TABLE login (
    email_id VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    FOREIGN KEY (email_id) REFERENCES accounts(email_id)
);









