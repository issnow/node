-- 创建一个视图,本质上是查询语句,(左侧views里的item就是创建的视图 )
-- create view 视图名称 as 查询语句
 
CREATE VIEW bookAllInfo AS
SELECT * from cartoon WHERE subscribe > 2000; 

-- 更新table
UPDATE student SET student_age = 19,student_name = '小明1' WHERE id = 1;

-- 删除
-- 分为逻辑删除和物理删除
-- 逻辑删除学生郭成
UPDATE student set isdelete = 'true' WHERE id = 3;

-- 物理删除
DELETE from student where id = 4;