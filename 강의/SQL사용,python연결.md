My SQL에서 

```mysql
select customernumber from classicmodels.customers where country not in ('usa','uk');

select count(customernumber) from classicmodels.customers where country is null;

select employeenumber from classicmodels.employees where reportsto is null;

select * from classicmodels.employees where jobTitle = 'sales rep';

select distinct officecode from classicmodels.employees;

select * from classicmodels.employees;

select * from classicmodels.offices;

select * from classicmodels.orderdetails;

select orderNumber, priceEach from orderDetails where priceEach >= '100';

select count(orderNumber) from orderDetails;

select * from classicmodels.payments;

select customerNumber from classicmodels.payments;

use classicmodels;

show tables;

select * from employees;

select firstName from employees;

select firstName, lastName from employees;

select firstName, lastName from employees where employees.employeeNumber = 1002;

select employeeNumber ,firstName, lastName from employees where employees.employeeNumber >= 1300;

select * from offices;

select city from offices where offices.officeCode = 1;

select city, phone from offices where offices.officeCode = 1;

select orders.orderNumber, customers.country from orders left join customers on customers.customerNumber = orders.customerNumber;

select orders.orderNumber, customers.country, customers.country from orders left join customers on customers.customerNumber = orders.customerNumber;

SELECT customers.customerNumber, orders.orderNumber, customers.country from orders 
INNER JOIN customers ON orders.customerNumber = customers.customerNumber
WHERE customers.country ='USA';

select customers.customerName, payments.checkNumber from customers
left join payments on customers.customerNumber=payments.customerNumber
where payments.paymentDate >= '2003-06-06';


```



Python에서

```python
import pymysql.cursors
# Connect to the database

connection = pymysql.connect(host='localhost',
        user='junhk',
        password='159123',
        db='tip',
        charset='utf8',
        cursorclass=pymysql.cursors.DictCursor)
try:
    with connection.cursor() as cursor:
        # Read a single record
        sql = "SELECT total_bill FROM tip.tips WHERE tip >= 7 ;"
        cursor.execute(sql)
        result = cursor.fetchone()
        print(result)
finally:
    connection.close()
```



```python
import pandas as pd
import pymysql.cursors

# MySQL DB에서 데이터 받아와서 DataFrame에 저장

conn = pymysql.connect(host='localhost', user='junhk', 
                       password='159123', db='tip', charset='utf8',
                       autocommit=True, cursorclass=pymysql.cursors.DictCursor)
try:

   with conn.cursor() as curs:
      sql = "SELECT total_bill FROM tip.tips WHERE tip >= 7 ;"
      curs.execute(sql)
      rs = curs.fetchall()

      # DB에서 받아온 값을 DataFrame에 넣음

      df = pd.DataFrame(rs)
      print(df)

    #df.to_csv('query.csv') 저장하기
finally:

   conn.close()
```



```python
import pandas as pd
import pymysql.cursors

sql="select customers.customerName, payments.checkNumber from customers left join payments on customers.customerNumber=payments.customerNumber where payments.paymentDate >= '2004-10-06';"

# MySQL DB에서 데이터 받아와서 DataFrame에 저장

conn = pymysql.connect(host='localhost', user='junhk', 
                       password='159123', db='classicmodels', charset='utf8',
                       autocommit=True, cursorclass=pymysql.cursors.DictCursor)
try:

   with conn.cursor() as curs:
      #sql = "SELECT total_bill FROM tip.tips WHERE tip >= 7 ;"
      curs.execute(sql)
      rs = curs.fetchall()

      # DB에서 받아온 값을 DataFrame에 넣음

      df = pd.DataFrame(rs)
      print(df)

    #df.to_csv('query.csv')
finally:

   conn.close()


df.to_csv('query_car.csv')
```



카운트를 해보고 그 뒤에 데이터를 읽기(크기를 먼저 봐야하기 때문에)



수업내용(파이썬에서 판다스사용 vs  MySQL에서 사용)

https://pandas.pydata.org/pandas-docs/stable/getting_started/comparison/comparison_with_sql.html#compare-with-sql

