-- 找出年龄小于20岁同学的成绩
select * from score inner join student
 on student.id = score.stuid 
 where student.name in (select name from student where age < 20)

-- 存在某个条件下才去查询

select * from teacher where exists (select name from student where age > 20)