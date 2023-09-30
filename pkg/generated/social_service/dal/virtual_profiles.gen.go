// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"
	"strings"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"
	"gorm.io/gen/helper"

	"gorm.io/plugin/dbresolver"

	social_servicev2 "github.com/SolomonAIEngineering/service-level-api/pkg/generated/social_service/v2"
)

func newVirtualProfileORM(db *gorm.DB, opts ...gen.DOOption) virtualProfileORM {
	_virtualProfileORM := virtualProfileORM{}

	_virtualProfileORM.virtualProfileORMDo.UseDB(db, opts...)
	_virtualProfileORM.virtualProfileORMDo.UseModel(&social_servicev2.VirtualProfileORM{})

	tableName := _virtualProfileORM.virtualProfileORMDo.TableName()
	_virtualProfileORM.ALL = field.NewAsterisk(tableName)
	_virtualProfileORM.Activated = field.NewBool(tableName, "activated")
	_virtualProfileORM.Id = field.NewUint64(tableName, "id")
	_virtualProfileORM.UserId = field.NewUint64(tableName, "user_id")
	_virtualProfileORM.User = virtualProfileORMHasOneUser{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("User", "social_servicev2.UserProfileORM"),
		Bookmarks: struct {
			field.RelationField
			Publications struct {
				field.RelationField
				Admin struct {
					field.RelationField
				}
				Editors struct {
					field.RelationField
				}
			}
		}{
			RelationField: field.NewRelation("User.Bookmarks", "social_servicev2.BookmarkORM"),
			Publications: struct {
				field.RelationField
				Admin struct {
					field.RelationField
				}
				Editors struct {
					field.RelationField
				}
			}{
				RelationField: field.NewRelation("User.Bookmarks.Publications", "social_servicev2.PublicationORM"),
				Admin: struct {
					field.RelationField
				}{
					RelationField: field.NewRelation("User.Bookmarks.Publications.Admin", "social_servicev2.UserProfileORM"),
				},
				Editors: struct {
					field.RelationField
				}{
					RelationField: field.NewRelation("User.Bookmarks.Publications.Editors", "social_servicev2.UserProfileORM"),
				},
			},
		},
		Tags: struct {
			field.RelationField
		}{
			RelationField: field.NewRelation("User.Tags", "social_servicev2.TagsORM"),
		},
	}

	_virtualProfileORM.Communities = virtualProfileORMHasManyCommunities{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Communities", "social_servicev2.CommunityProfileORM"),
		Topics: struct {
			field.RelationField
		}{
			RelationField: field.NewRelation("Communities.Topics", "social_servicev2.TopicORM"),
		},
	}

	_virtualProfileORM.fillFieldMap()

	return _virtualProfileORM
}

type virtualProfileORM struct {
	virtualProfileORMDo

	ALL       field.Asterisk
	Activated field.Bool
	Id        field.Uint64
	UserId    field.Uint64
	User      virtualProfileORMHasOneUser

	Communities virtualProfileORMHasManyCommunities

	fieldMap map[string]field.Expr
}

func (v virtualProfileORM) Table(newTableName string) *virtualProfileORM {
	v.virtualProfileORMDo.UseTable(newTableName)
	return v.updateTableName(newTableName)
}

func (v virtualProfileORM) As(alias string) *virtualProfileORM {
	v.virtualProfileORMDo.DO = *(v.virtualProfileORMDo.As(alias).(*gen.DO))
	return v.updateTableName(alias)
}

func (v *virtualProfileORM) updateTableName(table string) *virtualProfileORM {
	v.ALL = field.NewAsterisk(table)
	v.Activated = field.NewBool(table, "activated")
	v.Id = field.NewUint64(table, "id")
	v.UserId = field.NewUint64(table, "user_id")

	v.fillFieldMap()

	return v
}

func (v *virtualProfileORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := v.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (v *virtualProfileORM) fillFieldMap() {
	v.fieldMap = make(map[string]field.Expr, 5)
	v.fieldMap["activated"] = v.Activated
	v.fieldMap["id"] = v.Id
	v.fieldMap["user_id"] = v.UserId

}

func (v virtualProfileORM) clone(db *gorm.DB) virtualProfileORM {
	v.virtualProfileORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return v
}

func (v virtualProfileORM) replaceDB(db *gorm.DB) virtualProfileORM {
	v.virtualProfileORMDo.ReplaceDB(db)
	return v
}

type virtualProfileORMHasOneUser struct {
	db *gorm.DB

	field.RelationField

	Bookmarks struct {
		field.RelationField
		Publications struct {
			field.RelationField
			Admin struct {
				field.RelationField
			}
			Editors struct {
				field.RelationField
			}
		}
	}
	Tags struct {
		field.RelationField
	}
}

func (a virtualProfileORMHasOneUser) Where(conds ...field.Expr) *virtualProfileORMHasOneUser {
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

func (a virtualProfileORMHasOneUser) WithContext(ctx context.Context) *virtualProfileORMHasOneUser {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a virtualProfileORMHasOneUser) Session(session *gorm.Session) *virtualProfileORMHasOneUser {
	a.db = a.db.Session(session)
	return &a
}

func (a virtualProfileORMHasOneUser) Model(m *social_servicev2.VirtualProfileORM) *virtualProfileORMHasOneUserTx {
	return &virtualProfileORMHasOneUserTx{a.db.Model(m).Association(a.Name())}
}

type virtualProfileORMHasOneUserTx struct{ tx *gorm.Association }

func (a virtualProfileORMHasOneUserTx) Find() (result *social_servicev2.UserProfileORM, err error) {
	return result, a.tx.Find(&result)
}

func (a virtualProfileORMHasOneUserTx) Append(values ...*social_servicev2.UserProfileORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a virtualProfileORMHasOneUserTx) Replace(values ...*social_servicev2.UserProfileORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a virtualProfileORMHasOneUserTx) Delete(values ...*social_servicev2.UserProfileORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a virtualProfileORMHasOneUserTx) Clear() error {
	return a.tx.Clear()
}

func (a virtualProfileORMHasOneUserTx) Count() int64 {
	return a.tx.Count()
}

type virtualProfileORMHasManyCommunities struct {
	db *gorm.DB

	field.RelationField

	Topics struct {
		field.RelationField
	}
}

func (a virtualProfileORMHasManyCommunities) Where(conds ...field.Expr) *virtualProfileORMHasManyCommunities {
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

func (a virtualProfileORMHasManyCommunities) WithContext(ctx context.Context) *virtualProfileORMHasManyCommunities {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a virtualProfileORMHasManyCommunities) Session(session *gorm.Session) *virtualProfileORMHasManyCommunities {
	a.db = a.db.Session(session)
	return &a
}

func (a virtualProfileORMHasManyCommunities) Model(m *social_servicev2.VirtualProfileORM) *virtualProfileORMHasManyCommunitiesTx {
	return &virtualProfileORMHasManyCommunitiesTx{a.db.Model(m).Association(a.Name())}
}

type virtualProfileORMHasManyCommunitiesTx struct{ tx *gorm.Association }

func (a virtualProfileORMHasManyCommunitiesTx) Find() (result []*social_servicev2.CommunityProfileORM, err error) {
	return result, a.tx.Find(&result)
}

func (a virtualProfileORMHasManyCommunitiesTx) Append(values ...*social_servicev2.CommunityProfileORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a virtualProfileORMHasManyCommunitiesTx) Replace(values ...*social_servicev2.CommunityProfileORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a virtualProfileORMHasManyCommunitiesTx) Delete(values ...*social_servicev2.CommunityProfileORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a virtualProfileORMHasManyCommunitiesTx) Clear() error {
	return a.tx.Clear()
}

func (a virtualProfileORMHasManyCommunitiesTx) Count() int64 {
	return a.tx.Count()
}

type virtualProfileORMDo struct{ gen.DO }

type IVirtualProfileORMDo interface {
	gen.SubQuery
	Debug() IVirtualProfileORMDo
	WithContext(ctx context.Context) IVirtualProfileORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IVirtualProfileORMDo
	WriteDB() IVirtualProfileORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IVirtualProfileORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IVirtualProfileORMDo
	Not(conds ...gen.Condition) IVirtualProfileORMDo
	Or(conds ...gen.Condition) IVirtualProfileORMDo
	Select(conds ...field.Expr) IVirtualProfileORMDo
	Where(conds ...gen.Condition) IVirtualProfileORMDo
	Order(conds ...field.Expr) IVirtualProfileORMDo
	Distinct(cols ...field.Expr) IVirtualProfileORMDo
	Omit(cols ...field.Expr) IVirtualProfileORMDo
	Join(table schema.Tabler, on ...field.Expr) IVirtualProfileORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IVirtualProfileORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IVirtualProfileORMDo
	Group(cols ...field.Expr) IVirtualProfileORMDo
	Having(conds ...gen.Condition) IVirtualProfileORMDo
	Limit(limit int) IVirtualProfileORMDo
	Offset(offset int) IVirtualProfileORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IVirtualProfileORMDo
	Unscoped() IVirtualProfileORMDo
	Create(values ...*social_servicev2.VirtualProfileORM) error
	CreateInBatches(values []*social_servicev2.VirtualProfileORM, batchSize int) error
	Save(values ...*social_servicev2.VirtualProfileORM) error
	First() (*social_servicev2.VirtualProfileORM, error)
	Take() (*social_servicev2.VirtualProfileORM, error)
	Last() (*social_servicev2.VirtualProfileORM, error)
	Find() ([]*social_servicev2.VirtualProfileORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*social_servicev2.VirtualProfileORM, err error)
	FindInBatches(result *[]*social_servicev2.VirtualProfileORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*social_servicev2.VirtualProfileORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IVirtualProfileORMDo
	Assign(attrs ...field.AssignExpr) IVirtualProfileORMDo
	Joins(fields ...field.RelationField) IVirtualProfileORMDo
	Preload(fields ...field.RelationField) IVirtualProfileORMDo
	FirstOrInit() (*social_servicev2.VirtualProfileORM, error)
	FirstOrCreate() (*social_servicev2.VirtualProfileORM, error)
	FindByPage(offset int, limit int) (result []*social_servicev2.VirtualProfileORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IVirtualProfileORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result social_servicev2.VirtualProfileORM, err error)
	GetRecordByIDs(ids []int) (result []social_servicev2.VirtualProfileORM, err error)
	CreateRecord(item social_servicev2.VirtualProfileORM) (err error)
	UpdateRecordByID(id int, item social_servicev2.VirtualProfileORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []social_servicev2.VirtualProfileORM, err error)
	CountAll() (result int, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (v virtualProfileORMDo) GetRecordByID(id int) (result social_servicev2.VirtualProfileORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM virtual_profiles ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = v.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (v virtualProfileORMDo) GetRecordByIDs(ids []int) (result []social_servicev2.VirtualProfileORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM virtual_profiles ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = v.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (v virtualProfileORMDo) CreateRecord(item social_servicev2.VirtualProfileORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO virtual_profiles (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = v.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (v virtualProfileORMDo) UpdateRecordByID(id int, item social_servicev2.VirtualProfileORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE virtual_profiles SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = v.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (v virtualProfileORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM virtual_profiles ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = v.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (v virtualProfileORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []social_servicev2.VirtualProfileORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM virtual_profiles ORDER BY " + v.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = v.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (v virtualProfileORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM virtual_profiles ")

	var executeSQL *gorm.DB
	executeSQL = v.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (v virtualProfileORMDo) Debug() IVirtualProfileORMDo {
	return v.withDO(v.DO.Debug())
}

func (v virtualProfileORMDo) WithContext(ctx context.Context) IVirtualProfileORMDo {
	return v.withDO(v.DO.WithContext(ctx))
}

func (v virtualProfileORMDo) ReadDB() IVirtualProfileORMDo {
	return v.Clauses(dbresolver.Read)
}

func (v virtualProfileORMDo) WriteDB() IVirtualProfileORMDo {
	return v.Clauses(dbresolver.Write)
}

func (v virtualProfileORMDo) Session(config *gorm.Session) IVirtualProfileORMDo {
	return v.withDO(v.DO.Session(config))
}

func (v virtualProfileORMDo) Clauses(conds ...clause.Expression) IVirtualProfileORMDo {
	return v.withDO(v.DO.Clauses(conds...))
}

func (v virtualProfileORMDo) Returning(value interface{}, columns ...string) IVirtualProfileORMDo {
	return v.withDO(v.DO.Returning(value, columns...))
}

func (v virtualProfileORMDo) Not(conds ...gen.Condition) IVirtualProfileORMDo {
	return v.withDO(v.DO.Not(conds...))
}

func (v virtualProfileORMDo) Or(conds ...gen.Condition) IVirtualProfileORMDo {
	return v.withDO(v.DO.Or(conds...))
}

func (v virtualProfileORMDo) Select(conds ...field.Expr) IVirtualProfileORMDo {
	return v.withDO(v.DO.Select(conds...))
}

func (v virtualProfileORMDo) Where(conds ...gen.Condition) IVirtualProfileORMDo {
	return v.withDO(v.DO.Where(conds...))
}

func (v virtualProfileORMDo) Order(conds ...field.Expr) IVirtualProfileORMDo {
	return v.withDO(v.DO.Order(conds...))
}

func (v virtualProfileORMDo) Distinct(cols ...field.Expr) IVirtualProfileORMDo {
	return v.withDO(v.DO.Distinct(cols...))
}

func (v virtualProfileORMDo) Omit(cols ...field.Expr) IVirtualProfileORMDo {
	return v.withDO(v.DO.Omit(cols...))
}

func (v virtualProfileORMDo) Join(table schema.Tabler, on ...field.Expr) IVirtualProfileORMDo {
	return v.withDO(v.DO.Join(table, on...))
}

func (v virtualProfileORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IVirtualProfileORMDo {
	return v.withDO(v.DO.LeftJoin(table, on...))
}

func (v virtualProfileORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IVirtualProfileORMDo {
	return v.withDO(v.DO.RightJoin(table, on...))
}

func (v virtualProfileORMDo) Group(cols ...field.Expr) IVirtualProfileORMDo {
	return v.withDO(v.DO.Group(cols...))
}

func (v virtualProfileORMDo) Having(conds ...gen.Condition) IVirtualProfileORMDo {
	return v.withDO(v.DO.Having(conds...))
}

func (v virtualProfileORMDo) Limit(limit int) IVirtualProfileORMDo {
	return v.withDO(v.DO.Limit(limit))
}

func (v virtualProfileORMDo) Offset(offset int) IVirtualProfileORMDo {
	return v.withDO(v.DO.Offset(offset))
}

func (v virtualProfileORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IVirtualProfileORMDo {
	return v.withDO(v.DO.Scopes(funcs...))
}

func (v virtualProfileORMDo) Unscoped() IVirtualProfileORMDo {
	return v.withDO(v.DO.Unscoped())
}

func (v virtualProfileORMDo) Create(values ...*social_servicev2.VirtualProfileORM) error {
	if len(values) == 0 {
		return nil
	}
	return v.DO.Create(values)
}

func (v virtualProfileORMDo) CreateInBatches(values []*social_servicev2.VirtualProfileORM, batchSize int) error {
	return v.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (v virtualProfileORMDo) Save(values ...*social_servicev2.VirtualProfileORM) error {
	if len(values) == 0 {
		return nil
	}
	return v.DO.Save(values)
}

func (v virtualProfileORMDo) First() (*social_servicev2.VirtualProfileORM, error) {
	if result, err := v.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.VirtualProfileORM), nil
	}
}

func (v virtualProfileORMDo) Take() (*social_servicev2.VirtualProfileORM, error) {
	if result, err := v.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.VirtualProfileORM), nil
	}
}

func (v virtualProfileORMDo) Last() (*social_servicev2.VirtualProfileORM, error) {
	if result, err := v.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.VirtualProfileORM), nil
	}
}

func (v virtualProfileORMDo) Find() ([]*social_servicev2.VirtualProfileORM, error) {
	result, err := v.DO.Find()
	return result.([]*social_servicev2.VirtualProfileORM), err
}

func (v virtualProfileORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*social_servicev2.VirtualProfileORM, err error) {
	buf := make([]*social_servicev2.VirtualProfileORM, 0, batchSize)
	err = v.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (v virtualProfileORMDo) FindInBatches(result *[]*social_servicev2.VirtualProfileORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return v.DO.FindInBatches(result, batchSize, fc)
}

func (v virtualProfileORMDo) Attrs(attrs ...field.AssignExpr) IVirtualProfileORMDo {
	return v.withDO(v.DO.Attrs(attrs...))
}

func (v virtualProfileORMDo) Assign(attrs ...field.AssignExpr) IVirtualProfileORMDo {
	return v.withDO(v.DO.Assign(attrs...))
}

func (v virtualProfileORMDo) Joins(fields ...field.RelationField) IVirtualProfileORMDo {
	for _, _f := range fields {
		v = *v.withDO(v.DO.Joins(_f))
	}
	return &v
}

func (v virtualProfileORMDo) Preload(fields ...field.RelationField) IVirtualProfileORMDo {
	for _, _f := range fields {
		v = *v.withDO(v.DO.Preload(_f))
	}
	return &v
}

func (v virtualProfileORMDo) FirstOrInit() (*social_servicev2.VirtualProfileORM, error) {
	if result, err := v.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.VirtualProfileORM), nil
	}
}

func (v virtualProfileORMDo) FirstOrCreate() (*social_servicev2.VirtualProfileORM, error) {
	if result, err := v.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*social_servicev2.VirtualProfileORM), nil
	}
}

func (v virtualProfileORMDo) FindByPage(offset int, limit int) (result []*social_servicev2.VirtualProfileORM, count int64, err error) {
	result, err = v.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = v.Offset(-1).Limit(-1).Count()
	return
}

func (v virtualProfileORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = v.Count()
	if err != nil {
		return
	}

	err = v.Offset(offset).Limit(limit).Scan(result)
	return
}

func (v virtualProfileORMDo) Scan(result interface{}) (err error) {
	return v.DO.Scan(result)
}

func (v virtualProfileORMDo) Delete(models ...*social_servicev2.VirtualProfileORM) (result gen.ResultInfo, err error) {
	return v.DO.Delete(models)
}

func (v *virtualProfileORMDo) withDO(do gen.Dao) *virtualProfileORMDo {
	v.DO = *do.(*gen.DO)
	return v
}
