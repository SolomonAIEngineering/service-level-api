// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"
	"strings"

	financial_servicev1 "github.com/SolomonAIEngineering/service-level-api/pkg/generated/financial_service/v1"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"
	"gorm.io/gen/helper"

	"gorm.io/plugin/dbresolver"
)

func newActionableInsightORM(db *gorm.DB, opts ...gen.DOOption) actionableInsightORM {
	_actionableInsightORM := actionableInsightORM{}

	_actionableInsightORM.actionableInsightORMDo.UseDB(db, opts...)
	_actionableInsightORM.actionableInsightORMDo.UseModel(&financial_servicev1.ActionableInsightORM{})

	tableName := _actionableInsightORM.actionableInsightORMDo.TableName()
	_actionableInsightORM.ALL = field.NewAsterisk(tableName)
	_actionableInsightORM.DetailedAction = field.NewString(tableName, "detailed_action")
	_actionableInsightORM.FinancialUserProfileId = field.NewUint64(tableName, "financial_user_profile_id")
	_actionableInsightORM.GeneratedTime = field.NewTime(tableName, "generated_time")
	_actionableInsightORM.Id = field.NewUint64(tableName, "id")
	_actionableInsightORM.SummarizedAction = field.NewString(tableName, "summarized_action")
	_actionableInsightORM.Tags = field.NewField(tableName, "tags")

	_actionableInsightORM.fillFieldMap()

	return _actionableInsightORM
}

type actionableInsightORM struct {
	actionableInsightORMDo

	ALL                    field.Asterisk
	DetailedAction         field.String
	FinancialUserProfileId field.Uint64
	GeneratedTime          field.Time
	Id                     field.Uint64
	SummarizedAction       field.String
	Tags                   field.Field

	fieldMap map[string]field.Expr
}

func (a actionableInsightORM) Table(newTableName string) *actionableInsightORM {
	a.actionableInsightORMDo.UseTable(newTableName)
	return a.updateTableName(newTableName)
}

func (a actionableInsightORM) As(alias string) *actionableInsightORM {
	a.actionableInsightORMDo.DO = *(a.actionableInsightORMDo.As(alias).(*gen.DO))
	return a.updateTableName(alias)
}

func (a *actionableInsightORM) updateTableName(table string) *actionableInsightORM {
	a.ALL = field.NewAsterisk(table)
	a.DetailedAction = field.NewString(table, "detailed_action")
	a.FinancialUserProfileId = field.NewUint64(table, "financial_user_profile_id")
	a.GeneratedTime = field.NewTime(table, "generated_time")
	a.Id = field.NewUint64(table, "id")
	a.SummarizedAction = field.NewString(table, "summarized_action")
	a.Tags = field.NewField(table, "tags")

	a.fillFieldMap()

	return a
}

func (a *actionableInsightORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := a.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (a *actionableInsightORM) fillFieldMap() {
	a.fieldMap = make(map[string]field.Expr, 6)
	a.fieldMap["detailed_action"] = a.DetailedAction
	a.fieldMap["financial_user_profile_id"] = a.FinancialUserProfileId
	a.fieldMap["generated_time"] = a.GeneratedTime
	a.fieldMap["id"] = a.Id
	a.fieldMap["summarized_action"] = a.SummarizedAction
	a.fieldMap["tags"] = a.Tags
}

func (a actionableInsightORM) clone(db *gorm.DB) actionableInsightORM {
	a.actionableInsightORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return a
}

func (a actionableInsightORM) replaceDB(db *gorm.DB) actionableInsightORM {
	a.actionableInsightORMDo.ReplaceDB(db)
	return a
}

type actionableInsightORMDo struct{ gen.DO }

type IActionableInsightORMDo interface {
	gen.SubQuery
	Debug() IActionableInsightORMDo
	WithContext(ctx context.Context) IActionableInsightORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IActionableInsightORMDo
	WriteDB() IActionableInsightORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IActionableInsightORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IActionableInsightORMDo
	Not(conds ...gen.Condition) IActionableInsightORMDo
	Or(conds ...gen.Condition) IActionableInsightORMDo
	Select(conds ...field.Expr) IActionableInsightORMDo
	Where(conds ...gen.Condition) IActionableInsightORMDo
	Order(conds ...field.Expr) IActionableInsightORMDo
	Distinct(cols ...field.Expr) IActionableInsightORMDo
	Omit(cols ...field.Expr) IActionableInsightORMDo
	Join(table schema.Tabler, on ...field.Expr) IActionableInsightORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IActionableInsightORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IActionableInsightORMDo
	Group(cols ...field.Expr) IActionableInsightORMDo
	Having(conds ...gen.Condition) IActionableInsightORMDo
	Limit(limit int) IActionableInsightORMDo
	Offset(offset int) IActionableInsightORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IActionableInsightORMDo
	Unscoped() IActionableInsightORMDo
	Create(values ...*financial_servicev1.ActionableInsightORM) error
	CreateInBatches(values []*financial_servicev1.ActionableInsightORM, batchSize int) error
	Save(values ...*financial_servicev1.ActionableInsightORM) error
	First() (*financial_servicev1.ActionableInsightORM, error)
	Take() (*financial_servicev1.ActionableInsightORM, error)
	Last() (*financial_servicev1.ActionableInsightORM, error)
	Find() ([]*financial_servicev1.ActionableInsightORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.ActionableInsightORM, err error)
	FindInBatches(result *[]*financial_servicev1.ActionableInsightORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*financial_servicev1.ActionableInsightORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IActionableInsightORMDo
	Assign(attrs ...field.AssignExpr) IActionableInsightORMDo
	Joins(fields ...field.RelationField) IActionableInsightORMDo
	Preload(fields ...field.RelationField) IActionableInsightORMDo
	FirstOrInit() (*financial_servicev1.ActionableInsightORM, error)
	FirstOrCreate() (*financial_servicev1.ActionableInsightORM, error)
	FindByPage(offset int, limit int) (result []*financial_servicev1.ActionableInsightORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IActionableInsightORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result financial_servicev1.ActionableInsightORM, err error)
	GetRecordByIDs(ids []int) (result []financial_servicev1.ActionableInsightORM, err error)
	CreateRecord(item financial_servicev1.ActionableInsightORM) (err error)
	UpdateRecordByID(id int, item financial_servicev1.ActionableInsightORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.ActionableInsightORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result financial_servicev1.ActionableInsightORM, err error)
	GetByIDs(ids []uint64) (result []financial_servicev1.ActionableInsightORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (a actionableInsightORMDo) GetRecordByID(id int) (result financial_servicev1.ActionableInsightORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM actionable_insights ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (a actionableInsightORMDo) GetRecordByIDs(ids []int) (result []financial_servicev1.ActionableInsightORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM actionable_insights ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (a actionableInsightORMDo) CreateRecord(item financial_servicev1.ActionableInsightORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO actionable_insights (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (a actionableInsightORMDo) UpdateRecordByID(id int, item financial_servicev1.ActionableInsightORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE actionable_insights SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (a actionableInsightORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM actionable_insights ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (a actionableInsightORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.ActionableInsightORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM actionable_insights ORDER BY " + a.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (a actionableInsightORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM actionable_insights ")

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (a actionableInsightORMDo) GetByID(id uint64) (result financial_servicev1.ActionableInsightORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM actionable_insights ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (a actionableInsightORMDo) GetByIDs(ids []uint64) (result []financial_servicev1.ActionableInsightORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM actionable_insights ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (a actionableInsightORMDo) Debug() IActionableInsightORMDo {
	return a.withDO(a.DO.Debug())
}

func (a actionableInsightORMDo) WithContext(ctx context.Context) IActionableInsightORMDo {
	return a.withDO(a.DO.WithContext(ctx))
}

func (a actionableInsightORMDo) ReadDB() IActionableInsightORMDo {
	return a.Clauses(dbresolver.Read)
}

func (a actionableInsightORMDo) WriteDB() IActionableInsightORMDo {
	return a.Clauses(dbresolver.Write)
}

func (a actionableInsightORMDo) Session(config *gorm.Session) IActionableInsightORMDo {
	return a.withDO(a.DO.Session(config))
}

func (a actionableInsightORMDo) Clauses(conds ...clause.Expression) IActionableInsightORMDo {
	return a.withDO(a.DO.Clauses(conds...))
}

func (a actionableInsightORMDo) Returning(value interface{}, columns ...string) IActionableInsightORMDo {
	return a.withDO(a.DO.Returning(value, columns...))
}

func (a actionableInsightORMDo) Not(conds ...gen.Condition) IActionableInsightORMDo {
	return a.withDO(a.DO.Not(conds...))
}

func (a actionableInsightORMDo) Or(conds ...gen.Condition) IActionableInsightORMDo {
	return a.withDO(a.DO.Or(conds...))
}

func (a actionableInsightORMDo) Select(conds ...field.Expr) IActionableInsightORMDo {
	return a.withDO(a.DO.Select(conds...))
}

func (a actionableInsightORMDo) Where(conds ...gen.Condition) IActionableInsightORMDo {
	return a.withDO(a.DO.Where(conds...))
}

func (a actionableInsightORMDo) Order(conds ...field.Expr) IActionableInsightORMDo {
	return a.withDO(a.DO.Order(conds...))
}

func (a actionableInsightORMDo) Distinct(cols ...field.Expr) IActionableInsightORMDo {
	return a.withDO(a.DO.Distinct(cols...))
}

func (a actionableInsightORMDo) Omit(cols ...field.Expr) IActionableInsightORMDo {
	return a.withDO(a.DO.Omit(cols...))
}

func (a actionableInsightORMDo) Join(table schema.Tabler, on ...field.Expr) IActionableInsightORMDo {
	return a.withDO(a.DO.Join(table, on...))
}

func (a actionableInsightORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IActionableInsightORMDo {
	return a.withDO(a.DO.LeftJoin(table, on...))
}

func (a actionableInsightORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IActionableInsightORMDo {
	return a.withDO(a.DO.RightJoin(table, on...))
}

func (a actionableInsightORMDo) Group(cols ...field.Expr) IActionableInsightORMDo {
	return a.withDO(a.DO.Group(cols...))
}

func (a actionableInsightORMDo) Having(conds ...gen.Condition) IActionableInsightORMDo {
	return a.withDO(a.DO.Having(conds...))
}

func (a actionableInsightORMDo) Limit(limit int) IActionableInsightORMDo {
	return a.withDO(a.DO.Limit(limit))
}

func (a actionableInsightORMDo) Offset(offset int) IActionableInsightORMDo {
	return a.withDO(a.DO.Offset(offset))
}

func (a actionableInsightORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IActionableInsightORMDo {
	return a.withDO(a.DO.Scopes(funcs...))
}

func (a actionableInsightORMDo) Unscoped() IActionableInsightORMDo {
	return a.withDO(a.DO.Unscoped())
}

func (a actionableInsightORMDo) Create(values ...*financial_servicev1.ActionableInsightORM) error {
	if len(values) == 0 {
		return nil
	}
	return a.DO.Create(values)
}

func (a actionableInsightORMDo) CreateInBatches(values []*financial_servicev1.ActionableInsightORM, batchSize int) error {
	return a.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (a actionableInsightORMDo) Save(values ...*financial_servicev1.ActionableInsightORM) error {
	if len(values) == 0 {
		return nil
	}
	return a.DO.Save(values)
}

func (a actionableInsightORMDo) First() (*financial_servicev1.ActionableInsightORM, error) {
	if result, err := a.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.ActionableInsightORM), nil
	}
}

func (a actionableInsightORMDo) Take() (*financial_servicev1.ActionableInsightORM, error) {
	if result, err := a.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.ActionableInsightORM), nil
	}
}

func (a actionableInsightORMDo) Last() (*financial_servicev1.ActionableInsightORM, error) {
	if result, err := a.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.ActionableInsightORM), nil
	}
}

func (a actionableInsightORMDo) Find() ([]*financial_servicev1.ActionableInsightORM, error) {
	result, err := a.DO.Find()
	return result.([]*financial_servicev1.ActionableInsightORM), err
}

func (a actionableInsightORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.ActionableInsightORM, err error) {
	buf := make([]*financial_servicev1.ActionableInsightORM, 0, batchSize)
	err = a.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (a actionableInsightORMDo) FindInBatches(result *[]*financial_servicev1.ActionableInsightORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return a.DO.FindInBatches(result, batchSize, fc)
}

func (a actionableInsightORMDo) Attrs(attrs ...field.AssignExpr) IActionableInsightORMDo {
	return a.withDO(a.DO.Attrs(attrs...))
}

func (a actionableInsightORMDo) Assign(attrs ...field.AssignExpr) IActionableInsightORMDo {
	return a.withDO(a.DO.Assign(attrs...))
}

func (a actionableInsightORMDo) Joins(fields ...field.RelationField) IActionableInsightORMDo {
	for _, _f := range fields {
		a = *a.withDO(a.DO.Joins(_f))
	}
	return &a
}

func (a actionableInsightORMDo) Preload(fields ...field.RelationField) IActionableInsightORMDo {
	for _, _f := range fields {
		a = *a.withDO(a.DO.Preload(_f))
	}
	return &a
}

func (a actionableInsightORMDo) FirstOrInit() (*financial_servicev1.ActionableInsightORM, error) {
	if result, err := a.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.ActionableInsightORM), nil
	}
}

func (a actionableInsightORMDo) FirstOrCreate() (*financial_servicev1.ActionableInsightORM, error) {
	if result, err := a.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.ActionableInsightORM), nil
	}
}

func (a actionableInsightORMDo) FindByPage(offset int, limit int) (result []*financial_servicev1.ActionableInsightORM, count int64, err error) {
	result, err = a.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = a.Offset(-1).Limit(-1).Count()
	return
}

func (a actionableInsightORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = a.Count()
	if err != nil {
		return
	}

	err = a.Offset(offset).Limit(limit).Scan(result)
	return
}

func (a actionableInsightORMDo) Scan(result interface{}) (err error) {
	return a.DO.Scan(result)
}

func (a actionableInsightORMDo) Delete(models ...*financial_servicev1.ActionableInsightORM) (result gen.ResultInfo, err error) {
	return a.DO.Delete(models)
}

func (a *actionableInsightORMDo) withDO(do gen.Dao) *actionableInsightORMDo {
	a.DO = *do.(*gen.DO)
	return a
}