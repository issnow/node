-- 插入一个学生,他有分数,也有老师
-- 必须将3个表的信息插入(student,score,teacher_student)
-- 如果有报错,那么一个都不插进去

-- 要手动把多条SQL语句作为一个事务执行，使用BEGIN开启一个事务，使用COMMIT提交一个事务，这种事务被称为显式事务
-- COMMIT是指提交事务，即试图把事务内的所有SQL所做的修改永久保存。如果COMMIT语句执行失败了，整个事务也会失败。

-- 有些时候，我们希望主动让事务失败，这时，可以用ROLLBACK回滚事务，整个事务会失败
BEGIN;
INSERT INTO student (id,student_name, student_age, isdelete) VALUES (4,'laocheng', 29, 'false');
INSERT INTO score (score, projectid, stuid) VALUES (90, 1, 4);
INSERT INTO teacher_student VALUE (1,4);
-- ROLLBACK;
COMMIT;