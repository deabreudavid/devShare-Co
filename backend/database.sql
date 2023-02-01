CREATE TABLE role (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(10)
);

CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password TEXT NOT NULL,
  roleid INT NOT NULL,
  github VARCHAR(255) DEFAULT NULL,
  linkedin VARCHAR(255) DEFAULT NULL,
  pictureprofile TEXT DEFAULT NULL,
  FOREIGN KEY (roleid) REFERENCES role(id)
);

CREATE TABLE project (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  description TEXT NOT NULL,
  linkedin VARCHAR(255) DEFAULT NULL,
  github VARCHAR(255) DEFAULT NULL,
  createdate DATETIME DEFAULT NOW()
);

CREATE TABLE userproject (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  roleproject ENUM("creator", "participators"),
  projectid INT NOT NULL,
  userid INT NOT NULL,
  FOREIGN KEY (projectid) REFERENCES project(id),
  FOREIGN KEY (userid) REFERENCES users(id)
);

CREATE TABLE imageproject (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nameimg TEXT DEFAULT NULL,
  location TEXT NOT NULL,
  projectid INT NOT NULL,
  FOREIGN KEY (projectid) REFERENCES users(id)
);

CREATE TABLE message (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  message TEXT NOT NULL,
  date DATETIME DEFAULT NOW(),
  userid INT NOT NULL,
  FOREIGN KEY (userid) REFERENCES users(id)
);