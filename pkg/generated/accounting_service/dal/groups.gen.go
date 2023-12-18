// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"
	"strings"

	accounting_servicev1 "github.com/SolomonAIEngineering/service-level-api/pkg/generated/accounting_service/v1"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"
	"gorm.io/gen/helper"

	"gorm.io/plugin/dbresolver"
)

func newGroupORM(db *gorm.DB, opts ...gen.DOOption) groupORM {
	_groupORM := groupORM{}

	_groupORM.groupORMDo.UseDB(db, opts...)
	_groupORM.groupORMDo.UseModel(&accounting_servicev1.GroupORM{})

	tableName := _groupORM.groupORMDo.TableName()
	_groupORM.ALL = field.NewAsterisk(tableName)
	_groupORM.CreatedAt = field.NewTime(tableName, "created_at")
	_groupORM.EmployeeId = field.NewUint64(tableName, "employee_id")
	_groupORM.Id = field.NewUint64(tableName, "id")
	_groupORM.MergeAccountId = field.NewString(tableName, "merge_account_id")
	_groupORM.ModifiedAt = field.NewTime(tableName, "modified_at")
	_groupORM.Name = field.NewString(tableName, "name")
	_groupORM.ParentGroupMergeAccountId = field.NewString(tableName, "parent_group_merge_account_id")
	_groupORM.RemoteId = field.NewString(tableName, "remote_id")
	_groupORM.RemoteWasDeleted = field.NewBool(tableName, "remote_was_deleted")
	_groupORM.Type = field.NewString(tableName, "type")

	_groupORM.fillFieldMap()

	return _groupORM
}

type groupORM struct {
	groupORMDo

	ALL                       field.Asterisk
	CreatedAt                 field.Time
	EmployeeId                field.Uint64
	Id                        field.Uint64
	MergeAccountId            field.String
	ModifiedAt                field.Time
	Name                      field.String
	ParentGroupMergeAccountId field.String
	RemoteId                  field.String
	RemoteWasDeleted          field.Bool
	Type                      field.String

	fieldMap map[string]field.Expr
}

func (g groupORM) Table(newTableName string) *groupORM {
	g.groupORMDo.UseTable(newTableName)
	return g.updateTableName(newTableName)
}

func (g groupORM) As(alias string) *groupORM {
	g.groupORMDo.DO = *(g.groupORMDo.As(alias).(*gen.DO))
	return g.updateTableName(alias)
}

func (g *groupORM) updateTableName(table string) *groupORM {
	g.ALL = field.NewAsterisk(table)
	g.CreatedAt = field.NewTime(table, "created_at")
	g.EmployeeId = field.NewUint64(table, "employee_id")
	g.Id = field.NewUint64(table, "id")
	g.MergeAccountId = field.NewString(table, "merge_account_id")
	g.ModifiedAt = field.NewTime(table, "modified_at")
	g.Name = field.NewString(table, "name")
	g.ParentGroupMergeAccountId = field.NewString(table, "parent_group_merge_account_id")
	g.RemoteId = field.NewString(table, "remote_id")
	g.RemoteWasDeleted = field.NewBool(table, "remote_was_deleted")
	g.Type = field.NewString(table, "type")

	g.fillFieldMap()

	return g
}

func (g *groupORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := g.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (g *groupORM) fillFieldMap() {
	g.fieldMap = make(map[string]field.Expr, 10)
	g.fieldMap["created_at"] = g.CreatedAt
	g.fieldMap["employee_id"] = g.EmployeeId
	g.fieldMap["id"] = g.Id
	g.fieldMap["merge_account_id"] = g.MergeAccountId
	g.fieldMap["modified_at"] = g.ModifiedAt
	g.fieldMap["name"] = g.Name
	g.fieldMap["parent_group_merge_account_id"] = g.ParentGroupMergeAccountId
	g.fieldMap["remote_id"] = g.RemoteId
	g.fieldMap["remote_was_deleted"] = g.RemoteWasDeleted
	g.fieldMap["type"] = g.Type
}

func (g groupORM) clone(db *gorm.DB) groupORM {
	g.groupORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return g
}

func (g groupORM) replaceDB(db *gorm.DB) groupORM {
	g.groupORMDo.ReplaceDB(db)
	return g
}

type groupORMDo struct{ gen.DO }

type IGroupORMDo interface {
	gen.SubQuery
	Debug() IGroupORMDo
	WithContext(ctx context.Context) IGroupORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IGroupORMDo
	WriteDB() IGroupORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IGroupORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IGroupORMDo
	Not(conds ...gen.Condition) IGroupORMDo
	Or(conds ...gen.Condition) IGroupORMDo
	Select(conds ...field.Expr) IGroupORMDo
	Where(conds ...gen.Condition) IGroupORMDo
	Order(conds ...field.Expr) IGroupORMDo
	Distinct(cols ...field.Expr) IGroupORMDo
	Omit(cols ...field.Expr) IGroupORMDo
	Join(table schema.Tabler, on ...field.Expr) IGroupORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IGroupORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IGroupORMDo
	Group(cols ...field.Expr) IGroupORMDo
	Having(conds ...gen.Condition) IGroupORMDo
	Limit(limit int) IGroupORMDo
	Offset(offset int) IGroupORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IGroupORMDo
	Unscoped() IGroupORMDo
	Create(values ...*accounting_servicev1.GroupORM) error
	CreateInBatches(values []*accounting_servicev1.GroupORM, batchSize int) error
	Save(values ...*accounting_servicev1.GroupORM) error
	First() (*accounting_servicev1.GroupORM, error)
	Take() (*accounting_servicev1.GroupORM, error)
	Last() (*accounting_servicev1.GroupORM, error)
	Find() ([]*accounting_servicev1.GroupORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*accounting_servicev1.GroupORM, err error)
	FindInBatches(result *[]*accounting_servicev1.GroupORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*accounting_servicev1.GroupORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IGroupORMDo
	Assign(attrs ...field.AssignExpr) IGroupORMDo
	Joins(fields ...field.RelationField) IGroupORMDo
	Preload(fields ...field.RelationField) IGroupORMDo
	FirstOrInit() (*accounting_servicev1.GroupORM, error)
	FirstOrCreate() (*accounting_servicev1.GroupORM, error)
	FindByPage(offset int, limit int) (result []*accounting_servicev1.GroupORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IGroupORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result accounting_servicev1.GroupORM, err error)
	GetRecordByIDs(ids []int) (result []accounting_servicev1.GroupORM, err error)
	CreateRecord(item accounting_servicev1.GroupORM) (err error)
	UpdateRecordByID(id int, item accounting_servicev1.GroupORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []accounting_servicev1.GroupORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result accounting_servicev1.GroupORM, err error)
	GetByIDs(ids []uint64) (result []accounting_servicev1.GroupORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (g groupORMDo) GetRecordByID(id int) (result accounting_servicev1.GroupORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM groups ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = g.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (g groupORMDo) GetRecordByIDs(ids []int) (result []accounting_servicev1.GroupORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM groups ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = g.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (g groupORMDo) CreateRecord(item accounting_servicev1.GroupORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO groups (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = g.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (g groupORMDo) UpdateRecordByID(id int, item accounting_servicev1.GroupORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE groups SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = g.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (g groupORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM groups ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = g.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (g groupORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []accounting_servicev1.GroupORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM groups ORDER BY " + g.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = g.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (g groupORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM groups ")

	var executeSQL *gorm.DB
	executeSQL = g.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (g groupORMDo) GetByID(id uint64) (result accounting_servicev1.GroupORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM groups ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = g.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (g groupORMDo) GetByIDs(ids []uint64) (result []accounting_servicev1.GroupORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM groups ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = g.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (g groupORMDo) Debug() IGroupORMDo {
	return g.withDO(g.DO.Debug())
}

func (g groupORMDo) WithContext(ctx context.Context) IGroupORMDo {
	return g.withDO(g.DO.WithContext(ctx))
}

func (g groupORMDo) ReadDB() IGroupORMDo {
	return g.Clauses(dbresolver.Read)
}

func (g groupORMDo) WriteDB() IGroupORMDo {
	return g.Clauses(dbresolver.Write)
}

func (g groupORMDo) Session(config *gorm.Session) IGroupORMDo {
	return g.withDO(g.DO.Session(config))
}

func (g groupORMDo) Clauses(conds ...clause.Expression) IGroupORMDo {
	return g.withDO(g.DO.Clauses(conds...))
}

func (g groupORMDo) Returning(value interface{}, columns ...string) IGroupORMDo {
	return g.withDO(g.DO.Returning(value, columns...))
}

func (g groupORMDo) Not(conds ...gen.Condition) IGroupORMDo {
	return g.withDO(g.DO.Not(conds...))
}

func (g groupORMDo) Or(conds ...gen.Condition) IGroupORMDo {
	return g.withDO(g.DO.Or(conds...))
}

func (g groupORMDo) Select(conds ...field.Expr) IGroupORMDo {
	return g.withDO(g.DO.Select(conds...))
}

func (g groupORMDo) Where(conds ...gen.Condition) IGroupORMDo {
	return g.withDO(g.DO.Where(conds...))
}

func (g groupORMDo) Order(conds ...field.Expr) IGroupORMDo {
	return g.withDO(g.DO.Order(conds...))
}

func (g groupORMDo) Distinct(cols ...field.Expr) IGroupORMDo {
	return g.withDO(g.DO.Distinct(cols...))
}

func (g groupORMDo) Omit(cols ...field.Expr) IGroupORMDo {
	return g.withDO(g.DO.Omit(cols...))
}

func (g groupORMDo) Join(table schema.Tabler, on ...field.Expr) IGroupORMDo {
	return g.withDO(g.DO.Join(table, on...))
}

func (g groupORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IGroupORMDo {
	return g.withDO(g.DO.LeftJoin(table, on...))
}

func (g groupORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IGroupORMDo {
	return g.withDO(g.DO.RightJoin(table, on...))
}

func (g groupORMDo) Group(cols ...field.Expr) IGroupORMDo {
	return g.withDO(g.DO.Group(cols...))
}

func (g groupORMDo) Having(conds ...gen.Condition) IGroupORMDo {
	return g.withDO(g.DO.Having(conds...))
}

func (g groupORMDo) Limit(limit int) IGroupORMDo {
	return g.withDO(g.DO.Limit(limit))
}

func (g groupORMDo) Offset(offset int) IGroupORMDo {
	return g.withDO(g.DO.Offset(offset))
}

func (g groupORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IGroupORMDo {
	return g.withDO(g.DO.Scopes(funcs...))
}

func (g groupORMDo) Unscoped() IGroupORMDo {
	return g.withDO(g.DO.Unscoped())
}

func (g groupORMDo) Create(values ...*accounting_servicev1.GroupORM) error {
	if len(values) == 0 {
		return nil
	}
	return g.DO.Create(values)
}

func (g groupORMDo) CreateInBatches(values []*accounting_servicev1.GroupORM, batchSize int) error {
	return g.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (g groupORMDo) Save(values ...*accounting_servicev1.GroupORM) error {
	if len(values) == 0 {
		return nil
	}
	return g.DO.Save(values)
}

func (g groupORMDo) First() (*accounting_servicev1.GroupORM, error) {
	if result, err := g.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.GroupORM), nil
	}
}

func (g groupORMDo) Take() (*accounting_servicev1.GroupORM, error) {
	if result, err := g.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.GroupORM), nil
	}
}

func (g groupORMDo) Last() (*accounting_servicev1.GroupORM, error) {
	if result, err := g.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.GroupORM), nil
	}
}

func (g groupORMDo) Find() ([]*accounting_servicev1.GroupORM, error) {
	result, err := g.DO.Find()
	return result.([]*accounting_servicev1.GroupORM), err
}

func (g groupORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*accounting_servicev1.GroupORM, err error) {
	buf := make([]*accounting_servicev1.GroupORM, 0, batchSize)
	err = g.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (g groupORMDo) FindInBatches(result *[]*accounting_servicev1.GroupORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return g.DO.FindInBatches(result, batchSize, fc)
}

func (g groupORMDo) Attrs(attrs ...field.AssignExpr) IGroupORMDo {
	return g.withDO(g.DO.Attrs(attrs...))
}

func (g groupORMDo) Assign(attrs ...field.AssignExpr) IGroupORMDo {
	return g.withDO(g.DO.Assign(attrs...))
}

func (g groupORMDo) Joins(fields ...field.RelationField) IGroupORMDo {
	for _, _f := range fields {
		g = *g.withDO(g.DO.Joins(_f))
	}
	return &g
}

func (g groupORMDo) Preload(fields ...field.RelationField) IGroupORMDo {
	for _, _f := range fields {
		g = *g.withDO(g.DO.Preload(_f))
	}
	return &g
}

func (g groupORMDo) FirstOrInit() (*accounting_servicev1.GroupORM, error) {
	if result, err := g.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.GroupORM), nil
	}
}

func (g groupORMDo) FirstOrCreate() (*accounting_servicev1.GroupORM, error) {
	if result, err := g.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.GroupORM), nil
	}
}

func (g groupORMDo) FindByPage(offset int, limit int) (result []*accounting_servicev1.GroupORM, count int64, err error) {
	result, err = g.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = g.Offset(-1).Limit(-1).Count()
	return
}

func (g groupORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = g.Count()
	if err != nil {
		return
	}

	err = g.Offset(offset).Limit(limit).Scan(result)
	return
}

func (g groupORMDo) Scan(result interface{}) (err error) {
	return g.DO.Scan(result)
}

func (g groupORMDo) Delete(models ...*accounting_servicev1.GroupORM) (result gen.ResultInfo, err error) {
	return g.DO.Delete(models)
}

func (g *groupORMDo) withDO(do gen.Dao) *groupORMDo {
	g.DO = *do.(*gen.DO)
	return g
}
