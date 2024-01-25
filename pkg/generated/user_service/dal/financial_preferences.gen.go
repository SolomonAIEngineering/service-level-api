// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"
	"strings"

	user_servicev1 "github.com/SolomonAIEngineering/service-level-api/pkg/generated/user_service/v1"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"
	"gorm.io/gen/helper"

	"gorm.io/plugin/dbresolver"
)

func newFinancialPreferencesORM(db *gorm.DB, opts ...gen.DOOption) financialPreferencesORM {
	_financialPreferencesORM := financialPreferencesORM{}

	_financialPreferencesORM.financialPreferencesORMDo.UseDB(db, opts...)
	_financialPreferencesORM.financialPreferencesORMDo.UseModel(&user_servicev1.FinancialPreferencesORM{})

	tableName := _financialPreferencesORM.financialPreferencesORMDo.TableName()
	_financialPreferencesORM.ALL = field.NewAsterisk(tableName)
	_financialPreferencesORM.CurrencyPreference = field.NewString(tableName, "currency_preference")
	_financialPreferencesORM.FinancialYearStart = field.NewString(tableName, "financial_year_start")
	_financialPreferencesORM.Id = field.NewUint64(tableName, "id")
	_financialPreferencesORM.SettingsId = field.NewUint64(tableName, "settings_id")
	_financialPreferencesORM.TaxCode = field.NewString(tableName, "tax_code")
	_financialPreferencesORM.TaxPercentage = field.NewFloat64(tableName, "tax_percentage")

	_financialPreferencesORM.fillFieldMap()

	return _financialPreferencesORM
}

type financialPreferencesORM struct {
	financialPreferencesORMDo

	ALL                field.Asterisk
	CurrencyPreference field.String
	FinancialYearStart field.String
	Id                 field.Uint64
	SettingsId         field.Uint64
	TaxCode            field.String
	TaxPercentage      field.Float64

	fieldMap map[string]field.Expr
}

func (f financialPreferencesORM) Table(newTableName string) *financialPreferencesORM {
	f.financialPreferencesORMDo.UseTable(newTableName)
	return f.updateTableName(newTableName)
}

func (f financialPreferencesORM) As(alias string) *financialPreferencesORM {
	f.financialPreferencesORMDo.DO = *(f.financialPreferencesORMDo.As(alias).(*gen.DO))
	return f.updateTableName(alias)
}

func (f *financialPreferencesORM) updateTableName(table string) *financialPreferencesORM {
	f.ALL = field.NewAsterisk(table)
	f.CurrencyPreference = field.NewString(table, "currency_preference")
	f.FinancialYearStart = field.NewString(table, "financial_year_start")
	f.Id = field.NewUint64(table, "id")
	f.SettingsId = field.NewUint64(table, "settings_id")
	f.TaxCode = field.NewString(table, "tax_code")
	f.TaxPercentage = field.NewFloat64(table, "tax_percentage")

	f.fillFieldMap()

	return f
}

func (f *financialPreferencesORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := f.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (f *financialPreferencesORM) fillFieldMap() {
	f.fieldMap = make(map[string]field.Expr, 6)
	f.fieldMap["currency_preference"] = f.CurrencyPreference
	f.fieldMap["financial_year_start"] = f.FinancialYearStart
	f.fieldMap["id"] = f.Id
	f.fieldMap["settings_id"] = f.SettingsId
	f.fieldMap["tax_code"] = f.TaxCode
	f.fieldMap["tax_percentage"] = f.TaxPercentage
}

func (f financialPreferencesORM) clone(db *gorm.DB) financialPreferencesORM {
	f.financialPreferencesORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return f
}

func (f financialPreferencesORM) replaceDB(db *gorm.DB) financialPreferencesORM {
	f.financialPreferencesORMDo.ReplaceDB(db)
	return f
}

type financialPreferencesORMDo struct{ gen.DO }

type IFinancialPreferencesORMDo interface {
	gen.SubQuery
	Debug() IFinancialPreferencesORMDo
	WithContext(ctx context.Context) IFinancialPreferencesORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IFinancialPreferencesORMDo
	WriteDB() IFinancialPreferencesORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IFinancialPreferencesORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IFinancialPreferencesORMDo
	Not(conds ...gen.Condition) IFinancialPreferencesORMDo
	Or(conds ...gen.Condition) IFinancialPreferencesORMDo
	Select(conds ...field.Expr) IFinancialPreferencesORMDo
	Where(conds ...gen.Condition) IFinancialPreferencesORMDo
	Order(conds ...field.Expr) IFinancialPreferencesORMDo
	Distinct(cols ...field.Expr) IFinancialPreferencesORMDo
	Omit(cols ...field.Expr) IFinancialPreferencesORMDo
	Join(table schema.Tabler, on ...field.Expr) IFinancialPreferencesORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IFinancialPreferencesORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IFinancialPreferencesORMDo
	Group(cols ...field.Expr) IFinancialPreferencesORMDo
	Having(conds ...gen.Condition) IFinancialPreferencesORMDo
	Limit(limit int) IFinancialPreferencesORMDo
	Offset(offset int) IFinancialPreferencesORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IFinancialPreferencesORMDo
	Unscoped() IFinancialPreferencesORMDo
	Create(values ...*user_servicev1.FinancialPreferencesORM) error
	CreateInBatches(values []*user_servicev1.FinancialPreferencesORM, batchSize int) error
	Save(values ...*user_servicev1.FinancialPreferencesORM) error
	First() (*user_servicev1.FinancialPreferencesORM, error)
	Take() (*user_servicev1.FinancialPreferencesORM, error)
	Last() (*user_servicev1.FinancialPreferencesORM, error)
	Find() ([]*user_servicev1.FinancialPreferencesORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*user_servicev1.FinancialPreferencesORM, err error)
	FindInBatches(result *[]*user_servicev1.FinancialPreferencesORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*user_servicev1.FinancialPreferencesORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IFinancialPreferencesORMDo
	Assign(attrs ...field.AssignExpr) IFinancialPreferencesORMDo
	Joins(fields ...field.RelationField) IFinancialPreferencesORMDo
	Preload(fields ...field.RelationField) IFinancialPreferencesORMDo
	FirstOrInit() (*user_servicev1.FinancialPreferencesORM, error)
	FirstOrCreate() (*user_servicev1.FinancialPreferencesORM, error)
	FindByPage(offset int, limit int) (result []*user_servicev1.FinancialPreferencesORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IFinancialPreferencesORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result user_servicev1.FinancialPreferencesORM, err error)
	GetRecordByIDs(ids []int) (result []user_servicev1.FinancialPreferencesORM, err error)
	CreateRecord(item user_servicev1.FinancialPreferencesORM) (err error)
	UpdateRecordByID(id int, item user_servicev1.FinancialPreferencesORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []user_servicev1.FinancialPreferencesORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result user_servicev1.FinancialPreferencesORM, err error)
	GetByIDs(ids []uint64) (result []user_servicev1.FinancialPreferencesORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (f financialPreferencesORMDo) GetRecordByID(id int) (result user_servicev1.FinancialPreferencesORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM financial_preferences ")
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
func (f financialPreferencesORMDo) GetRecordByIDs(ids []int) (result []user_servicev1.FinancialPreferencesORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM financial_preferences ")
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
func (f financialPreferencesORMDo) CreateRecord(item user_servicev1.FinancialPreferencesORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO financial_preferences (columns) VALUES (values) ")

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
func (f financialPreferencesORMDo) UpdateRecordByID(id int, item user_servicev1.FinancialPreferencesORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE financial_preferences SET columns=values ")
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
func (f financialPreferencesORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM financial_preferences ")
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
func (f financialPreferencesORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []user_servicev1.FinancialPreferencesORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM financial_preferences ORDER BY " + f.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = f.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (f financialPreferencesORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM financial_preferences ")

	var executeSQL *gorm.DB
	executeSQL = f.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (f financialPreferencesORMDo) GetByID(id uint64) (result user_servicev1.FinancialPreferencesORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM financial_preferences ")
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
func (f financialPreferencesORMDo) GetByIDs(ids []uint64) (result []user_servicev1.FinancialPreferencesORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM financial_preferences ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = f.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (f financialPreferencesORMDo) Debug() IFinancialPreferencesORMDo {
	return f.withDO(f.DO.Debug())
}

func (f financialPreferencesORMDo) WithContext(ctx context.Context) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.WithContext(ctx))
}

func (f financialPreferencesORMDo) ReadDB() IFinancialPreferencesORMDo {
	return f.Clauses(dbresolver.Read)
}

func (f financialPreferencesORMDo) WriteDB() IFinancialPreferencesORMDo {
	return f.Clauses(dbresolver.Write)
}

func (f financialPreferencesORMDo) Session(config *gorm.Session) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.Session(config))
}

func (f financialPreferencesORMDo) Clauses(conds ...clause.Expression) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.Clauses(conds...))
}

func (f financialPreferencesORMDo) Returning(value interface{}, columns ...string) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.Returning(value, columns...))
}

func (f financialPreferencesORMDo) Not(conds ...gen.Condition) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.Not(conds...))
}

func (f financialPreferencesORMDo) Or(conds ...gen.Condition) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.Or(conds...))
}

func (f financialPreferencesORMDo) Select(conds ...field.Expr) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.Select(conds...))
}

func (f financialPreferencesORMDo) Where(conds ...gen.Condition) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.Where(conds...))
}

func (f financialPreferencesORMDo) Order(conds ...field.Expr) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.Order(conds...))
}

func (f financialPreferencesORMDo) Distinct(cols ...field.Expr) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.Distinct(cols...))
}

func (f financialPreferencesORMDo) Omit(cols ...field.Expr) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.Omit(cols...))
}

func (f financialPreferencesORMDo) Join(table schema.Tabler, on ...field.Expr) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.Join(table, on...))
}

func (f financialPreferencesORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.LeftJoin(table, on...))
}

func (f financialPreferencesORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.RightJoin(table, on...))
}

func (f financialPreferencesORMDo) Group(cols ...field.Expr) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.Group(cols...))
}

func (f financialPreferencesORMDo) Having(conds ...gen.Condition) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.Having(conds...))
}

func (f financialPreferencesORMDo) Limit(limit int) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.Limit(limit))
}

func (f financialPreferencesORMDo) Offset(offset int) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.Offset(offset))
}

func (f financialPreferencesORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.Scopes(funcs...))
}

func (f financialPreferencesORMDo) Unscoped() IFinancialPreferencesORMDo {
	return f.withDO(f.DO.Unscoped())
}

func (f financialPreferencesORMDo) Create(values ...*user_servicev1.FinancialPreferencesORM) error {
	if len(values) == 0 {
		return nil
	}
	return f.DO.Create(values)
}

func (f financialPreferencesORMDo) CreateInBatches(values []*user_servicev1.FinancialPreferencesORM, batchSize int) error {
	return f.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (f financialPreferencesORMDo) Save(values ...*user_servicev1.FinancialPreferencesORM) error {
	if len(values) == 0 {
		return nil
	}
	return f.DO.Save(values)
}

func (f financialPreferencesORMDo) First() (*user_servicev1.FinancialPreferencesORM, error) {
	if result, err := f.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.FinancialPreferencesORM), nil
	}
}

func (f financialPreferencesORMDo) Take() (*user_servicev1.FinancialPreferencesORM, error) {
	if result, err := f.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.FinancialPreferencesORM), nil
	}
}

func (f financialPreferencesORMDo) Last() (*user_servicev1.FinancialPreferencesORM, error) {
	if result, err := f.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.FinancialPreferencesORM), nil
	}
}

func (f financialPreferencesORMDo) Find() ([]*user_servicev1.FinancialPreferencesORM, error) {
	result, err := f.DO.Find()
	return result.([]*user_servicev1.FinancialPreferencesORM), err
}

func (f financialPreferencesORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*user_servicev1.FinancialPreferencesORM, err error) {
	buf := make([]*user_servicev1.FinancialPreferencesORM, 0, batchSize)
	err = f.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (f financialPreferencesORMDo) FindInBatches(result *[]*user_servicev1.FinancialPreferencesORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return f.DO.FindInBatches(result, batchSize, fc)
}

func (f financialPreferencesORMDo) Attrs(attrs ...field.AssignExpr) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.Attrs(attrs...))
}

func (f financialPreferencesORMDo) Assign(attrs ...field.AssignExpr) IFinancialPreferencesORMDo {
	return f.withDO(f.DO.Assign(attrs...))
}

func (f financialPreferencesORMDo) Joins(fields ...field.RelationField) IFinancialPreferencesORMDo {
	for _, _f := range fields {
		f = *f.withDO(f.DO.Joins(_f))
	}
	return &f
}

func (f financialPreferencesORMDo) Preload(fields ...field.RelationField) IFinancialPreferencesORMDo {
	for _, _f := range fields {
		f = *f.withDO(f.DO.Preload(_f))
	}
	return &f
}

func (f financialPreferencesORMDo) FirstOrInit() (*user_servicev1.FinancialPreferencesORM, error) {
	if result, err := f.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.FinancialPreferencesORM), nil
	}
}

func (f financialPreferencesORMDo) FirstOrCreate() (*user_servicev1.FinancialPreferencesORM, error) {
	if result, err := f.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.FinancialPreferencesORM), nil
	}
}

func (f financialPreferencesORMDo) FindByPage(offset int, limit int) (result []*user_servicev1.FinancialPreferencesORM, count int64, err error) {
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

func (f financialPreferencesORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = f.Count()
	if err != nil {
		return
	}

	err = f.Offset(offset).Limit(limit).Scan(result)
	return
}

func (f financialPreferencesORMDo) Scan(result interface{}) (err error) {
	return f.DO.Scan(result)
}

func (f financialPreferencesORMDo) Delete(models ...*user_servicev1.FinancialPreferencesORM) (result gen.ResultInfo, err error) {
	return f.DO.Delete(models)
}

func (f *financialPreferencesORMDo) withDO(do gen.Dao) *financialPreferencesORMDo {
	f.DO = *do.(*gen.DO)
	return f
}
