-- 连接查询作者和书 INNER JOIN 全连接
SELECT * from author INNER JOIN authorbook on author.id = authorbook.authorid;
-- 加条件查询
SELECT * from author INNER JOIN authorbook on author.id = authorbook.authorid WHERE author.id =1;
-- LEFT JOIN 以左边为准
SELECT * from author AS a LEFT JOIN authorbook AS b on a.id = b.authorid;
-- RIGHT JOIN 以右边为准
SELECT * from author AS a RIGHT JOIN authorbook AS b on a.id = b.authorid;