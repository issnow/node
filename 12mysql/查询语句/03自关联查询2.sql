-- 查所有学生的语文成绩
SELECT a.id,b.student_name,a.score,c.project FROM score AS a 
INNER JOIN student AS b ON a.stuid = b.id 
INNER JOIN project AS c on a.projectid = c.id
WHERE c.id = 1;

-- 自关联查询,省份,市,区,
-- id,area,parentAreaID
-- 1, 广东省,0
-- 2, 广州市,1
-- 3, 天河区,2
-- 广东省,广州市,天河区
-- 找出广东的所有市
-- 1将2张表关联(同一张表)
SELECT r1.id,r1.name,r2.name from area as r1
INNER JOIN area as r2
on r1.id = r2.pid
where r1.name = '广东省';

-- 子查询
-- 找出年龄小于20岁的学生成绩
SELECT student_name from student WHERE student_age < 20;
SELECT * from score INNER JOIN student 
on score.stuid = student.id 
 WHERE student_name = '小明';
 
 -- 合并
SELECT * from score INNER JOIN student 
on score.stuid = student.id 
WHERE student_name IN (SELECT student_name from student WHERE student_age < 20);
-- 存在某个条件下,才做某个查询
-- 如果有学生大于50岁才将老师查找出来 EXISTS 条件查找,后面满足采取查找前面的内容
SELECT * from teacher WHERE EXISTS (SELECT student_name from student WHERE student_age > 50);
