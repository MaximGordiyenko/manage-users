# Application manage users endpoint using mongo bd

We will create a REST API using NodeJS

We will use Mongodb as our database.

Please feel free to use google search or variants.


Please create a user object with below attributes;
Full Name
DOB
Gender

Please make sure this object is stored in mongodb.


Please create /user endpoint with 3 verbs GET, PUT, and POST.
Using this endpoint, post data into mongodb.
Edit a single user record using PUT method.


Will be a bonus - db migration and redis.

We will utilize redis as our cache.

Please make sure this object is also stored in redis so when we access it, we access it from redis if the cache is still valid, if not available fallback to mongodb.

