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

func newForecastORM(db *gorm.DB, opts ...gen.DOOption) forecastORM {
	_forecastORM := forecastORM{}

	_forecastORM.forecastORMDo.UseDB(db, opts...)
	_forecastORM.forecastORMDo.UseModel(&financial_servicev1.ForecastORM{})

	tableName := _forecastORM.forecastORMDo.TableName()
	_forecastORM.ALL = field.NewAsterisk(tableName)
	_forecastORM.ForecastedAmount = field.NewString(tableName, "forecasted_amount")
	_forecastORM.ForecastedCompletionDate = field.NewString(tableName, "forecasted_completion_date")
	_forecastORM.Id = field.NewUint64(tableName, "id")
	_forecastORM.SmartGoalId = field.NewUint64(tableName, "smart_goal_id")
	_forecastORM.VarianceAmount = field.NewString(tableName, "variance_amount")

	_forecastORM.fillFieldMap()

	return _forecastORM
}

type forecastORM struct {
	forecastORMDo

	ALL                      field.Asterisk
	ForecastedAmount         field.String
	ForecastedCompletionDate field.String
	Id                       field.Uint64
	SmartGoalId              field.Uint64
	VarianceAmount           field.String

	fieldMap map[string]field.Expr
}

func (f forecastORM) Table(newTableName string) *forecastORM {
	f.forecastORMDo.UseTable(newTableName)
	return f.updateTableName(newTableName)
}

func (f forecastORM) As(alias string) *forecastORM {
	f.forecastORMDo.DO = *(f.forecastORMDo.As(alias).(*gen.DO))
	return f.updateTableName(alias)
}

func (f *forecastORM) updateTableName(table string) *forecastORM {
	f.ALL = field.NewAsterisk(table)
	f.ForecastedAmount = field.NewString(table, "forecasted_amount")
	f.ForecastedCompletionDate = field.NewString(table, "forecasted_completion_date")
	f.Id = field.NewUint64(table, "id")
	f.SmartGoalId = field.NewUint64(table, "smart_goal_id")
	f.VarianceAmount = field.NewString(table, "variance_amount")

	f.fillFieldMap()

	return f
}

func (f *forecastORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := f.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (f *forecastORM) fillFieldMap() {
	f.fieldMap = make(map[string]field.Expr, 5)
	f.fieldMap["forecasted_amount"] = f.ForecastedAmount
	f.fieldMap["forecasted_completion_date"] = f.ForecastedCompletionDate
	f.fieldMap["id"] = f.Id
	f.fieldMap["smart_goal_id"] = f.SmartGoalId
	f.fieldMap["variance_amount"] = f.VarianceAmount
}

func (f forecastORM) clone(db *gorm.DB) forecastORM {
	f.forecastORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return f
}

func (f forecastORM) replaceDB(db *gorm.DB) forecastORM {
	f.forecastORMDo.ReplaceDB(db)
	return f
}

type forecastORMDo struct{ gen.DO }

type IForecastORMDo interface {
	gen.SubQuery
	Debug() IForecastORMDo
	WithContext(ctx context.Context) IForecastORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IForecastORMDo
	WriteDB() IForecastORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IForecastORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IForecastORMDo
	Not(conds ...gen.Condition) IForecastORMDo
	Or(conds ...gen.Condition) IForecastORMDo
	Select(conds ...field.Expr) IForecastORMDo
	Where(conds ...gen.Condition) IForecastORMDo
	Order(conds ...field.Expr) IForecastORMDo
	Distinct(cols ...field.Expr) IForecastORMDo
	Omit(cols ...field.Expr) IForecastORMDo
	Join(table schema.Tabler, on ...field.Expr) IForecastORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IForecastORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IForecastORMDo
	Group(cols ...field.Expr) IForecastORMDo
	Having(conds ...gen.Condition) IForecastORMDo
	Limit(limit int) IForecastORMDo
	Offset(offset int) IForecastORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IForecastORMDo
	Unscoped() IForecastORMDo
	Create(values ...*financial_servicev1.ForecastORM) error
	CreateInBatches(values []*financial_servicev1.ForecastORM, batchSize int) error
	Save(values ...*financial_servicev1.ForecastORM) error
	First() (*financial_servicev1.ForecastORM, error)
	Take() (*financial_servicev1.ForecastORM, error)
	Last() (*financial_servicev1.ForecastORM, error)
	Find() ([]*financial_servicev1.ForecastORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.ForecastORM, err error)
	FindInBatches(result *[]*financial_servicev1.ForecastORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*financial_servicev1.ForecastORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IForecastORMDo
	Assign(attrs ...field.AssignExpr) IForecastORMDo
	Joins(fields ...field.RelationField) IForecastORMDo
	Preload(fields ...field.RelationField) IForecastORMDo
	FirstOrInit() (*financial_servicev1.ForecastORM, error)
	FirstOrCreate() (*financial_servicev1.ForecastORM, error)
	FindByPage(offset int, limit int) (result []*financial_servicev1.ForecastORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IForecastORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result financial_servicev1.ForecastORM, err error)
	GetRecordByIDs(ids []int) (result []financial_servicev1.ForecastORM, err error)
	CreateRecord(item financial_servicev1.ForecastORM) (err error)
	UpdateRecordByID(id int, item financial_servicev1.ForecastORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.ForecastORM, err error)
	CountAll() (result int, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (f forecastORMDo) GetRecordByID(id int) (result financial_servicev1.ForecastORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM forecasts ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = f.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (f forecastORMDo) GetRecordByIDs(ids []int) (result []financial_servicev1.ForecastORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM forecasts ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = f.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (f forecastORMDo) CreateRecord(item financial_servicev1.ForecastORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO forecasts (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = f.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (f forecastORMDo) UpdateRecordByID(id int, item financial_servicev1.ForecastORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE forecasts SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = f.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (f forecastORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM forecasts ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = f.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (f forecastORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.ForecastORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM forecasts ORDER BY " + f.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = f.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (f forecastORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM forecasts ")

	var executeSQL *gorm.DB
	executeSQL = f.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (f forecastORMDo) Debug() IForecastORMDo {
	return f.withDO(f.DO.Debug())
}

func (f forecastORMDo) WithContext(ctx context.Context) IForecastORMDo {
	return f.withDO(f.DO.WithContext(ctx))
}

func (f forecastORMDo) ReadDB() IForecastORMDo {
	return f.Clauses(dbresolver.Read)
}

func (f forecastORMDo) WriteDB() IForecastORMDo {
	return f.Clauses(dbresolver.Write)
}

func (f forecastORMDo) Session(config *gorm.Session) IForecastORMDo {
	return f.withDO(f.DO.Session(config))
}

func (f forecastORMDo) Clauses(conds ...clause.Expression) IForecastORMDo {
	return f.withDO(f.DO.Clauses(conds...))
}

func (f forecastORMDo) Returning(value interface{}, columns ...string) IForecastORMDo {
	return f.withDO(f.DO.Returning(value, columns...))
}

func (f forecastORMDo) Not(conds ...gen.Condition) IForecastORMDo {
	return f.withDO(f.DO.Not(conds...))
}

func (f forecastORMDo) Or(conds ...gen.Condition) IForecastORMDo {
	return f.withDO(f.DO.Or(conds...))
}

func (f forecastORMDo) Select(conds ...field.Expr) IForecastORMDo {
	return f.withDO(f.DO.Select(conds...))
}

func (f forecastORMDo) Where(conds ...gen.Condition) IForecastORMDo {
	return f.withDO(f.DO.Where(conds...))
}

func (f forecastORMDo) Order(conds ...field.Expr) IForecastORMDo {
	return f.withDO(f.DO.Order(conds...))
}

func (f forecastORMDo) Distinct(cols ...field.Expr) IForecastORMDo {
	return f.withDO(f.DO.Distinct(cols...))
}

func (f forecastORMDo) Omit(cols ...field.Expr) IForecastORMDo {
	return f.withDO(f.DO.Omit(cols...))
}

func (f forecastORMDo) Join(table schema.Tabler, on ...field.Expr) IForecastORMDo {
	return f.withDO(f.DO.Join(table, on...))
}

func (f forecastORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IForecastORMDo {
	return f.withDO(f.DO.LeftJoin(table, on...))
}

func (f forecastORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IForecastORMDo {
	return f.withDO(f.DO.RightJoin(table, on...))
}

func (f forecastORMDo) Group(cols ...field.Expr) IForecastORMDo {
	return f.withDO(f.DO.Group(cols...))
}

func (f forecastORMDo) Having(conds ...gen.Condition) IForecastORMDo {
	return f.withDO(f.DO.Having(conds...))
}

func (f forecastORMDo) Limit(limit int) IForecastORMDo {
	return f.withDO(f.DO.Limit(limit))
}

func (f forecastORMDo) Offset(offset int) IForecastORMDo {
	return f.withDO(f.DO.Offset(offset))
}

func (f forecastORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IForecastORMDo {
	return f.withDO(f.DO.Scopes(funcs...))
}

func (f forecastORMDo) Unscoped() IForecastORMDo {
	return f.withDO(f.DO.Unscoped())
}

func (f forecastORMDo) Create(values ...*financial_servicev1.ForecastORM) error {
	if len(values) == 0 {
		return nil
	}
	return f.DO.Create(values)
}

func (f forecastORMDo) CreateInBatches(values []*financial_servicev1.ForecastORM, batchSize int) error {
	return f.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (f forecastORMDo) Save(values ...*financial_servicev1.ForecastORM) error {
	if len(values) == 0 {
		return nil
	}
	return f.DO.Save(values)
}

func (f forecastORMDo) First() (*financial_servicev1.ForecastORM, error) {
	if result, err := f.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.ForecastORM), nil
	}
}

func (f forecastORMDo) Take() (*financial_servicev1.ForecastORM, error) {
	if result, err := f.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.ForecastORM), nil
	}
}

func (f forecastORMDo) Last() (*financial_servicev1.ForecastORM, error) {
	if result, err := f.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.ForecastORM), nil
	}
}

func (f forecastORMDo) Find() ([]*financial_servicev1.ForecastORM, error) {
	result, err := f.DO.Find()
	return result.([]*financial_servicev1.ForecastORM), err
}

func (f forecastORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.ForecastORM, err error) {
	buf := make([]*financial_servicev1.ForecastORM, 0, batchSize)
	err = f.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (f forecastORMDo) FindInBatches(result *[]*financial_servicev1.ForecastORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return f.DO.FindInBatches(result, batchSize, fc)
}

func (f forecastORMDo) Attrs(attrs ...field.AssignExpr) IForecastORMDo {
	return f.withDO(f.DO.Attrs(attrs...))
}

func (f forecastORMDo) Assign(attrs ...field.AssignExpr) IForecastORMDo {
	return f.withDO(f.DO.Assign(attrs...))
}

func (f forecastORMDo) Joins(fields ...field.RelationField) IForecastORMDo {
	for _, _f := range fields {
		f = *f.withDO(f.DO.Joins(_f))
	}
	return &f
}

func (f forecastORMDo) Preload(fields ...field.RelationField) IForecastORMDo {
	for _, _f := range fields {
		f = *f.withDO(f.DO.Preload(_f))
	}
	return &f
}

func (f forecastORMDo) FirstOrInit() (*financial_servicev1.ForecastORM, error) {
	if result, err := f.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.ForecastORM), nil
	}
}

func (f forecastORMDo) FirstOrCreate() (*financial_servicev1.ForecastORM, error) {
	if result, err := f.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.ForecastORM), nil
	}
}

func (f forecastORMDo) FindByPage(offset int, limit int) (result []*financial_servicev1.ForecastORM, count int64, err error) {
	result, err = f.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = f.Offset(-1).Limit(-1).Count()
	return
}

func (f forecastORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = f.Count()
	if err != nil {
		return
	}

	err = f.Offset(offset).Limit(limit).Scan(result)
	return
}

func (f forecastORMDo) Scan(result interface{}) (err error) {
	return f.DO.Scan(result)
}

func (f forecastORMDo) Delete(models ...*financial_servicev1.ForecastORM) (result gen.ResultInfo, err error) {
	return f.DO.Delete(models)
}

func (f *forecastORMDo) withDO(do gen.Dao) *forecastORMDo {
	f.DO = *do.(*gen.DO)
	return f
}
