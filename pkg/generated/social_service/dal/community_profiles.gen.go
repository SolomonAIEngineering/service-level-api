// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"
	"strings"

	social_servicev2 "github.com/SolomonAIEngineering/service-level-api/pkg/generated/social_service/v2"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"
	"gorm.io/gen/helper"

	"gorm.io/plugin/dbresolver"
)

func newCommunityProfileORM(db *gorm.DB, opts ...gen.DOOption) communityProfileORM {
	_communityProfileORM := communityProfileORM{}

	_communityProfileORM.communityProfileORMDo.UseDB(db, opts...)
	_communityProfileORM.communityProfileORMDo.UseModel(&social_servicev2.CommunityProfileORM{})

	tableName := _communityProfileORM.communityProfileORMDo.TableName()
	_communityProfileORM.ALL = field.NewAsterisk(tableName)
	_communityProfileORM.AlgoliaId = field.NewString(tableName, "algolia_id")
	_communityProfileORM.CommunityRules = field.NewString(tableName, "community_rules")
	_communityProfileORM.Description = field.NewString(tableName, "description")
	_communityProfileORM.Followers = field.NewInt64(tableName, "followers")
	_communityProfileORM.Id = field.NewUint64(tableName, "id")
	_communityProfileORM.Name = field.NewString(tableName, "name")
	_communityProfileORM.NewsFeedTimelineId = field.NewString(tableName, "news_feed_timeline_id")
	_communityProfileORM.NotificationFeedTimelineId = field.NewString(tableName, "notification_feed_timeline_id")
	_communityProfileORM.PersonalFeedTimelineId = field.NewString(tableName, "personal_feed_timeline_id")
	_communityProfileORM.Private = field.NewBool(tableName, "private")
	_communityProfileORM.ProfileImageUrl = field.NewString(tableName, "profile_image_url")
	_communityProfileORM.VirtualProfileId = field.NewUint64(tableName, "virtual_profile_id")
	_communityProfileORM.Visible = field.NewBool(tableName, "visible")
	_communityProfileORM.Topics = communityProfileORMHasManyTopics{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Topics", "social_servicev2.TopicORM"),
	}

	_communityProfileORM.fillFieldMap()

	return _communityProfileORM
}

type communityProfileORM struct {
	communityProfileORMDo

	ALL                        field.Asterisk
	AlgoliaId                  field.String
	CommunityRules             field.String
	Description                field.String
	Followers                  field.Int64
	Id                         field.Uint64
	Name                       field.String
	NewsFeedTimelineId         field.String
	NotificationFeedTimelineId field.String
	PersonalFeedTimelineId     field.String
	Private                    field.Bool
	ProfileImageUrl            field.String
	VirtualProfileId           field.Uint64
	Visible                    field.Bool
	Topics                     communityProfileORMHasManyTopics

	fieldMap map[string]field.Expr
}

func (c communityProfileORM) Table(newTableName string) *communityProfileORM {
	c.communityProfileORMDo.UseTable(newTableName)
	return c.updateTableName(newTableName)
}

func (c communityProfileORM) As(alias string) *communityProfileORM {
	c.communityProfileORMDo.DO = *(c.communityProfileORMDo.As(alias).(*gen.DO))
	return c.updateTableName(alias)
}

func (c *communityProfileORM) updateTableName(table string) *communityProfileORM {
	c.ALL = field.NewAsterisk(table)
	c.AlgoliaId = field.NewString(table, "algolia_id")
	c.CommunityRules = field.NewString(table, "community_rules")
	c.Description = field.NewString(table, "description")
	c.Followers = field.NewInt64(table, "followers")
	c.Id = field.NewUint64(table, "id")
	c.Name = field.NewString(table, "name")
	c.NewsFeedTimelineId = field.NewString(table, "news_feed_timeline_id")
	c.NotificationFeedTimelineId = field.NewString(table, "notification_feed_timeline_id")
	c.PersonalFeedTimelineId = field.NewString(table, "personal_feed_timeline_id")
	c.Private = field.NewBool(table, "private")
	c.ProfileImageUrl = field.NewString(table, "profile_image_url")
	c.VirtualProfileId = field.NewUint64(table, "virtual_profile_id")
	c.Visible = field.NewBool(table, "visible")

	c.fillFieldMap()

	return c
}

func (c *communityProfileORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := c.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (c *communityProfileORM) fillFieldMap() {
	c.fieldMap = make(map[string]field.Expr, 14)
	c.fieldMap["algolia_id"] = c.AlgoliaId
	c.fieldMap["community_rules"] = c.CommunityRules
	c.fieldMap["description"] = c.Description
	c.fieldMap["followers"] = c.Followers
	c.fieldMap["id"] = c.Id
	c.fieldMap["name"] = c.Name
	c.fieldMap["news_feed_timeline_id"] = c.NewsFeedTimelineId
	c.fieldMap["notification_feed_timeline_id"] = c.NotificationFeedTimelineId
	c.fieldMap["personal_feed_timeline_id"] = c.PersonalFeedTimelineId
	c.fieldMap["private"] = c.Private
	c.fieldMap["profile_image_url"] = c.ProfileImageUrl
	c.fieldMap["virtual_profile_id"] = c.VirtualProfileId
	c.fieldMap["visible"] = c.Visible

}

func (c communityProfileORM) clone(db *gorm.DB) communityProfileORM {
	c.communityProfileORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return c
}

func (c communityProfileORM) replaceDB(db *gorm.DB) communityProfileORM {
	c.communityProfileORMDo.ReplaceDB(db)
	return c
}

type communityProfileORMHasManyTopics struct {
	db *gorm.DB

	field.RelationField
}

func (a communityProfileORMHasManyTopics) Where(conds ...field.Expr) *communityProfileORMHasManyTopics {
	if len(conds) == 0 {
		return &a
	}

	exprs := make([]clause.Expression, 0, len(conds))
	for _, cond := range conds {
		exprs = append(exprs, cond.BeCond().(clause.Expression))
	}
	a.db = a.db.Clauses(clause.Where{Exprs: exprs})
	return &a
}

func (a communityProfileORMHasManyTopics) WithContext(ctx context.Context) *communityProfileORMHasManyTopics {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a communityProfileORMHasManyTopics) Session(session *gorm.Session) *communityProfileORMHasManyTopics {
	a.db = a.db.Session(session)
	return &a
}

func (a communityProfileORMHasManyTopics) Model(m *social_servicev2.CommunityProfileORM) *communityProfileORMHasManyTopicsTx {
	return &communityProfileORMHasManyTopicsTx{a.db.Model(m).Association(a.Name())}
}

type communityProfileORMHasManyTopicsTx struct{ tx *gorm.Association }

func (a communityProfileORMHasManyTopicsTx) Find() (result []*social_servicev2.TopicORM, err error) {
	return result, a.tx.Find(&result)
}

func (a communityProfileORMHasManyTopicsTx) Append(values ...*social_servicev2.TopicORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a communityProfileORMHasManyTopicsTx) Replace(values ...*social_servicev2.TopicORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a communityProfileORMHasManyTopicsTx) Delete(values ...*social_servicev2.TopicORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a communityProfileORMHasManyTopicsTx) Clear() error {
	return a.tx.Clear()
}

func (a communityProfileORMHasManyTopicsTx) Count() int64 {
	return a.tx.Count()
}

type communityProfileORMDo struct{ gen.DO }

type ICommunityProfileORMDo interface {
	gen.SubQuery
	Debug() ICommunityProfileORMDo
	WithContext(ctx context.Context) ICommunityProfileORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() ICommunityProfileORMDo
	WriteDB() ICommunityProfileORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) ICommunityProfileORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) ICommunityProfileORMDo
	Not(conds ...gen.Condition) ICommunityProfileORMDo
	Or(conds ...gen.Condition) ICommunityProfileORMDo
	Select(conds ...field.Expr) ICommunityProfileORMDo
	Where(conds ...gen.Condition) ICommunityProfileORMDo
	Order(conds ...field.Expr) ICommunityProfileORMDo
	Distinct(cols ...field.Expr) ICommunityProfileORMDo
	Omit(cols ...field.Expr) ICommunityProfileORMDo
	Join(table schema.Tabler, on ...field.Expr) ICommunityProfileORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) ICommunityProfileORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) ICommunityProfileORMDo
	Group(cols ...field.Expr) ICommunityProfileORMDo
	Having(conds ...gen.Condition) ICommunityProfileORMDo
	Limit(limit int) ICommunityProfileORMDo
	Offset(offset int) ICommunityProfileORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) ICommunityProfileORMDo
	Unscoped() ICommunityProfileORMDo
	Create(values ...*social_servicev2.CommunityProfileORM) error
	CreateInBatches(values []*social_servicev2.CommunityProfileORM, batchSize int) error
	Save(values ...*social_servicev2.CommunityProfileORM) error
	First() (*social_servicev2.CommunityProfileORM, error)
	Take() (*social_servicev2.CommunityProfileORM, error)
	Last() (*social_servicev2.CommunityProfileORM, error)
	Find() ([]*social_servicev2.CommunityProfileORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*social_servicev2.CommunityProfileORM, err error)
	FindInBatches(result *[]*social_servicev2.CommunityProfileORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*social_servicev2.CommunityProfileORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) ICommunityProfileORMDo
	Assign(attrs ...field.AssignExpr) ICommunityProfileORMDo
	Joins(fields ...field.RelationField) ICommunityProfileORMDo
	Preload(fields ...field.RelationField) ICommunityProfileORMDo
	FirstOrInit() (*social_servicev2.CommunityProfileORM, error)
	FirstOrCreate() (*social_servicev2.CommunityProfileORM, error)
	FindByPage(offset int, limit int) (result []*social_servicev2.CommunityProfileORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) ICommunityProfileORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result social_servicev2.CommunityProfileORM, err error)
	GetRecordByIDs(ids []int) (result []social_servicev2.CommunityProfileORM, err error)
	CreateRecord(item social_servicev2.CommunityProfileORM) (err error)
	UpdateRecordByID(id int, item social_servicev2.CommunityProfileORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []social_servicev2.CommunityProfileORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result social_servicev2.CommunityProfileORM, err error)
	GetByIDs(ids []uint64) (result []social_servicev2.CommunityProfileORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (c communityProfileORMDo) GetRecordByID(id int) (result social_servicev2.CommunityProfileORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM community_profiles ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = c.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (c communityProfileORMDo) GetRecordByIDs(ids []int) (result []social_servicev2.CommunityProfileORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM community_profiles ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = c.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (c communityProfileORMDo) CreateRecord(item social_servicev2.CommunityProfileORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO community_profiles (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = c.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (c communityProfileORMDo) UpdateRecordByID(id int, item social_servicev2.CommunityProfileORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE community_profiles SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = c.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (c communityProfileORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM community_profiles ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = c.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (c communityProfileORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []social_servicev2.CommunityProfileORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM community_profiles ORDER BY " + c.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = c.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (c communityProfileORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM community_profiles ")

	var executeSQL *gorm.DB
	executeSQL = c.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (c communityProfileORMDo) GetByID(id uint64) (result social_servicev2.CommunityProfileORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM community_profiles ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = c.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (c communityProfileORMDo) GetByIDs(ids []uint64) (result []social_servicev2.CommunityProfileORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM community_profiles ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = c.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (c communityProfileORMDo) Debug() ICommunityProfileORMDo {
	return c.withDO(c.DO.Debug())
}

func (c communityProfileORMDo) WithContext(ctx context.Context) ICommunityProfileORMDo {
	return c.withDO(c.DO.WithContext(ctx))
}

func (c communityProfileORMDo) ReadDB() ICommunityProfileORMDo {
	return c.Clauses(dbresolver.Read)
}

func (c communityProfileORMDo) WriteDB() ICommunityProfileORMDo {
	return c.Clauses(dbresolver.Write)
}

func (c communityProfileORMDo) Session(config *gorm.Session) ICommunityProfileORMDo {
	return c.withDO(c.DO.Session(config))
}

func (c communityProfileORMDo) Clauses(conds ...clause.Expression) ICommunityProfileORMDo {
	return c.withDO(c.DO.Clauses(conds...))
}

func (c communityProfileORMDo) Returning(value interface{}, columns ...string) ICommunityProfileORMDo {
	return c.withDO(c.DO.Returning(value, columns...))
}

func (c communityProfileORMDo) Not(conds ...gen.Condition) ICommunityProfileORMDo {
	return c.withDO(c.DO.Not(conds...))
}

func (c communityProfileORMDo) Or(conds ...gen.Condition) ICommunityProfileORMDo {
	return c.withDO(c.DO.Or(conds...))
}

func (c communityProfileORMDo) Select(conds ...field.Expr) ICommunityProfileORMDo {
	return c.withDO(c.DO.Select(conds...))
}

func (c communityProfileORMDo) Where(conds ...gen.Condition) ICommunityProfileORMDo {
	return c.withDO(c.DO.Where(conds...))
}

func (c communityProfileORMDo) Order(conds ...field.Expr) ICommunityProfileORMDo {
	return c.withDO(c.DO.Order(conds...))
}

func (c communityProfileORMDo) Distinct(cols ...field.Expr) ICommunityProfileORMDo {
	return c.withDO(c.DO.Distinct(cols...))
}

func (c communityProfileORMDo) Omit(cols ...field.Expr) ICommunityProfileORMDo {
	return c.withDO(c.DO.Omit(cols...))
}

func (c communityProfileORMDo) Join(table schema.Tabler, on ...field.Expr) ICommunityProfileORMDo {
	return c.withDO(c.DO.Join(table, on...))
}

func (c communityProfileORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) ICommunityProfileORMDo {
	return c.withDO(c.DO.LeftJoin(table, on...))
}

func (c communityProfileORMDo) RightJoin(table schema.Tabler, on ...field.Expr) ICommunityProfileORMDo {
	return c.withDO(c.DO.RightJoin(table, on...))
}

func (c communityProfileORMDo) Group(cols ...field.Expr) ICommunityProfileORMDo {
	return c.withDO(c.DO.Group(cols...))
}

func (c communityProfileORMDo) Having(conds ...gen.Condition) ICommunityProfileORMDo {
	return c.withDO(c.DO.Having(conds...))
}

func (c communityProfileORMDo) Limit(limit int) ICommunityProfileORMDo {
	return c.withDO(c.DO.Limit(limit))
}

func (c communityProfileORMDo) Offset(offset int) ICommunityProfileORMDo {
	return c.withDO(c.DO.Offset(offset))
}

func (c communityProfileORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) ICommunityProfileORMDo {
	return c.withDO(c.DO.Scopes(funcs...))
}

func (c communityProfileORMDo) Unscoped() ICommunityProfileORMDo {
	return c.withDO(c.DO.Unscoped())
}

func (c communityProfileORMDo) Create(values ...*social_servicev2.CommunityProfileORM) error {
	if len(values) == 0 {
		return nil
	}
	return c.DO.Create(values)
}

func (c communityProfileORMDo) CreateInBatches(values []*social_servicev2.CommunityProfileORM, batchSize int) error {
	return c.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (c communityProfileORMDo) Save(values ...*social_servicev2.CommunityProfileORM) error {
	if len(values) == 0 {
		return nil
	}
	return c.DO.Save(values)
}

func (c communityProfileORMDo) First() (*social_servicev2.CommunityProfileORM, error) {
	if result, err := c.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.CommunityProfileORM), nil
	}
}

func (c communityProfileORMDo) Take() (*social_servicev2.CommunityProfileORM, error) {
	if result, err := c.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.CommunityProfileORM), nil
	}
}

func (c communityProfileORMDo) Last() (*social_servicev2.CommunityProfileORM, error) {
	if result, err := c.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.CommunityProfileORM), nil
	}
}

func (c communityProfileORMDo) Find() ([]*social_servicev2.CommunityProfileORM, error) {
	result, err := c.DO.Find()
	return result.([]*social_servicev2.CommunityProfileORM), err
}

func (c communityProfileORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*social_servicev2.CommunityProfileORM, err error) {
	buf := make([]*social_servicev2.CommunityProfileORM, 0, batchSize)
	err = c.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (c communityProfileORMDo) FindInBatches(result *[]*social_servicev2.CommunityProfileORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return c.DO.FindInBatches(result, batchSize, fc)
}

func (c communityProfileORMDo) Attrs(attrs ...field.AssignExpr) ICommunityProfileORMDo {
	return c.withDO(c.DO.Attrs(attrs...))
}

func (c communityProfileORMDo) Assign(attrs ...field.AssignExpr) ICommunityProfileORMDo {
	return c.withDO(c.DO.Assign(attrs...))
}

func (c communityProfileORMDo) Joins(fields ...field.RelationField) ICommunityProfileORMDo {
	for _, _f := range fields {
		c = *c.withDO(c.DO.Joins(_f))
	}
	return &c
}

func (c communityProfileORMDo) Preload(fields ...field.RelationField) ICommunityProfileORMDo {
	for _, _f := range fields {
		c = *c.withDO(c.DO.Preload(_f))
	}
	return &c
}

func (c communityProfileORMDo) FirstOrInit() (*social_servicev2.CommunityProfileORM, error) {
	if result, err := c.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.CommunityProfileORM), nil
	}
}

func (c communityProfileORMDo) FirstOrCreate() (*social_servicev2.CommunityProfileORM, error) {
	if result, err := c.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.CommunityProfileORM), nil
	}
}

func (c communityProfileORMDo) FindByPage(offset int, limit int) (result []*social_servicev2.CommunityProfileORM, count int64, err error) {
	result, err = c.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = c.Offset(-1).Limit(-1).Count()
	return
}

func (c communityProfileORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = c.Count()
	if err != nil {
		return
	}

	err = c.Offset(offset).Limit(limit).Scan(result)
	return
}

func (c communityProfileORMDo) Scan(result interface{}) (err error) {
	return c.DO.Scan(result)
}

func (c communityProfileORMDo) Delete(models ...*social_servicev2.CommunityProfileORM) (result gen.ResultInfo, err error) {
	return c.DO.Delete(models)
}

func (c *communityProfileORMDo) withDO(do gen.Dao) *communityProfileORMDo {
	c.DO = *do.(*gen.DO)
	return c
}