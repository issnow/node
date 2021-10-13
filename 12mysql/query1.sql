-- 查询10000到11000的hot
SELECT * FROM cartoon where hot > 10000 and hot < 11000;
-- 找出热度100以下的书
SELECT * FROM cartoon where hot BETWEEN 0 and 100;
-- 查询4W到5W的hot
SELECT * FROM cartoon where hot BETWEEN 40000 and 50000;
-- 查到分类为奇幻的书
SELECT * from cartoon where classify = '奇幻';
-- 查询出版时间不等于空串的书
SELECT * FROM cartoon where public_time != '';
SELECT * FROM cartoon where public_time = '';
-- 查询出版时间是2018或者2019的书
SELECT * FROM cartoon where public_time = 2018 or public_time = 2019;
SELECT * FROM cartoon where public_time in (2018,2019);
-- 模糊查询带有女朋友的书
SELECT * FROM cartoon where bookname LIKE '%女朋友%';
-- 查询以女朋友开头,8个字符的书
SELECT * FROM cartoon where bookname LIKE '女朋友_____';
-- 查找数据为空的内容,空值(NULL)查询，使用IS NULL来判断
SELECT * FROM cartoon where bookname is NULL;
-- 查找书名为非空的数据
SELECT * FROM cartoon where bookname is NOT NULL;