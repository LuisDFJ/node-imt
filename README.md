# NODE-IMT

**NODE-IMT** is an oper-source **_full-stack_** forum (currently in development) made by college students for college students in STEM careers.

## Built with (...)

| **DEPENDENCIES**      | **DEV-DEPENDENCIES** |
| --------------------- | -------------------- |
| bcryptjs              | nodemon              |
| express               |                      |
| express-mysql-session |                      |
| express-session       |                      |
| express-validator     |                      |
| morgan                |                      |
| mysql                 |                      |
| passport              |                      |
| passport-local        |                      |

## Setting Up (...)

**Node.js** must be installed in order get all the dependencies. Select a new directory to clone the repo, then run:

> \$ git clone https:github.com/LuisDFJ/node-imt.git

Use **NPM** to install all the dependencies and dev-dependencies.

> \$ npm install

The app runs on a **MySQL** database. The queries needed to set up the database can be found at _database/db.sql_. Once logged in **_MySQL Shell_** run:

> mysql > CREATE DATABASE _database_name_ ;<br/>
> mysql> CREATE TABLE users (<br/> > &emsp;&emsp;&ensp;&ensp;> &emsp;id SERIAL NOT NULL,<br/> > &emsp;&emsp;&ensp;&ensp;> &emsp;username VARCHAR(32) NOT NULL,<br/> > &emsp;&emsp;&ensp;&ensp;> &emsp;password VARCHAR(60) NOT NULL,<br/> > &emsp;&emsp;&ensp;&ensp;> &emsp;firstName VARCHAR(128) NOT NULL,<br/> > &emsp;&emsp;&ensp;&ensp;> &emsp;lastName VARCHAR(128) NOT NULL,<br/> > &emsp;&emsp;&ensp;&ensp;> &emsp;email VARCHAR(255) NOT NULL,<br/> > &emsp;&emsp;&ensp;&ensp;> &emsp;PRIMARY KEY (id)<br/> > &emsp;&emsp;&ensp;&ensp;> );<br/>

In order to verify this step, use the following command:

> mysql> DESCRIBE users;

You should have the following response:

| Field     | Type            | Null | Key | Default | Extra          |
| --------- | --------------- | ---- | --- | ------- | -------------- |
| id        | bigint unsigned | NO   | PRI | NULL    | auto_increment |
| username  | varchar(32)     | NO   |     | NULL    |                |
| password  | varchar(60)     | NO   |     | NULL    |                |
| firstName | varchar(128)    | NO   |     | NULL    |                |
| lastName  | varchar(128)    | NO   |     | NULL    |                |
| email     | varchar(255)    | NO   |     | NULL    |                |

**_MySQL.js_** doesn't supports auth run for **MySQL 8.0** _caching_sha2_password_, in order to over-run this:

> mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITHmysql_native_password BY 'newPassword';<br/>
> mysql> flush privileges;

Finally, create a new file _src/keys.js_ **where**:

> module.exports = {<br/> > &emsp; database: {<br/> > &emsp;&emsp;host: ["localhost"],<br/> > &emsp;&emsp;user: ["root"],<br/> > &emsp;&emsp;password: ["Password"],<br/> > &emsp;&emsp;database: ["Database name"],<br/> > &emsp;}<br/>
> };
