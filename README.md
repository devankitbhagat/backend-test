
## Prerequisite
1. Redis should be installed in local machine. Default configuration is localhost, port 6379. This can be updated in src/storage/Redis

## setup
1. Clone the repo [Git URL](https://github.com/devankitbhagat/backend-test.git)
2. Run below commands to run the server
```
$npm install
$npm run start
```

## Solutions
1. Fixed: Invalid routes array was passed to HAPI route method because of which server was not starting.
2. Fixed: array addition logic in prod api's
3. Fixed: test api not working, throwing error `h is not a function`

## API's
* GET (http://localhost:8001/user/{user_id})
  - To get user details
* PUT (http://localhost:8001/user/{user_id})
  - To add or update user details
  - Only variables mentioned in csv are allowed (has_depositted, wallet_balance, number_of_deposits). If any more variables needs to be added if can be easily added by adding key to payload validator.
* DELETE (http://localhost:8001/user/{user_id})
  - deletes user data from redis store


* POST(http://localhost:8001/rule-engine)
  - Evaluates input expression and returns boolean/value.
  - Using npm package [expr-eval](https://www.npmjs.com/package/expr-eval#substitutevariable-string-expression-expression--string--number)
  - API will support all operators supported by the package including but not limited to ( "and", "or", “>”, “<”, “==” ).

## Example requests and responses
* GET
  - Request
  ```
  curl -X GET \
  http://localhost:8001/user/2 
  ```
  - Response
  ```
  {"success":true,"data":{"has_depositted":"true","wallet_balance":"100","number_of_deposits":"10"}}
  ```

* PUT 
- Request 
```
curl -X PUT \
  http://localhost:8001/user/3 \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"has_depositted": true,
	"wallet_balance": 100,
	"number_of_deposits": 10
}'
```
- Response
```
{
    "success": true
}
```

* DELETE
- Request 
```
curl -X DELETE \
  http://localhost:8001/user/3 \

```
- Response
```
{
    "success": true
}
``` 

* POST (RULE ENGINE)
- Request
```
curl -X POST \
  http://localhost:8001/rule-engine \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{
	"user_id": 2,
	"expr": "(depositted_users == true AND number_of_deposits > 5) or (NOT depositted_users AND number_of_deposits > 30)"
}'
```

- Response 
```
{
    "success": true,
    "data": {
        "value": true
    }
}
```

## General fundaes:
1. This code was tested in `node v8.1.0` and `npm v5.0.3`. Please update node/npm before starting.
2. You may need to remove the node modules folder and reinstall. Perform by:
```
$rm -rf node_modules/
$npm install
```
