-- 还是查询两张表但都是自己，
SELECT * FROM area as a inner join area as b on a.id = b.pid where a.area = '北京';