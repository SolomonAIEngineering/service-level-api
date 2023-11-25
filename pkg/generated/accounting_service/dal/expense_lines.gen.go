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

func newExpenseLineORM(db *gorm.DB, opts ...gen.DOOption) expenseLineORM {
	_expenseLineORM := expenseLineORM{}

	_expenseLineORM.expenseLineORMDo.UseDB(db, opts...)
	_expenseLineORM.expenseLineORMDo.UseModel(&accounting_servicev1.ExpenseLineORM{})

	tableName := _expenseLineORM.expenseLineORMDo.TableName()
	_expenseLineORM.ALL = field.NewAsterisk(tableName)
	_expenseLineORM.Account = field.NewString(tableName, "account")
	_expenseLineORM.Company = field.NewString(tableName, "company")
	_expenseLineORM.Contact = field.NewString(tableName, "contact")
	_expenseLineORM.Currency = field.NewString(tableName, "currency")
	_expenseLineORM.Description = field.NewString(tableName, "description")
	_expenseLineORM.ExchangeRate = field.NewString(tableName, "exchange_rate")
	_expenseLineORM.ExpenseId = field.NewUint64(tableName, "expense_id")
	_expenseLineORM.Id = field.NewUint64(tableName, "id")
	_expenseLineORM.Item = field.NewString(tableName, "item")
	_expenseLineORM.ModifiedAt = field.NewTime(tableName, "modified_at")
	_expenseLineORM.NetAmount = field.NewFloat64(tableName, "net_amount")
	_expenseLineORM.RemoteId = field.NewString(tableName, "remote_id")
	_expenseLineORM.TrackingCategories = field.NewField(tableName, "tracking_categories")
	_expenseLineORM.TrackingCategory = field.NewString(tableName, "tracking_category")

	_expenseLineORM.fillFieldMap()

	return _expenseLineORM
}

type expenseLineORM struct {
	expenseLineORMDo

	ALL                field.Asterisk
	Account            field.String
	Company            field.String
	Contact            field.String
	Currency           field.String
	Description        field.String
	ExchangeRate       field.String
	ExpenseId          field.Uint64
	Id                 field.Uint64
	Item               field.String
	ModifiedAt         field.Time
	NetAmount          field.Float64
	RemoteId           field.String
	TrackingCategories field.Field
	TrackingCategory   field.String

	fieldMap map[string]field.Expr
}

func (e expenseLineORM) Table(newTableName string) *expenseLineORM {
	e.expenseLineORMDo.UseTable(newTableName)
	return e.updateTableName(newTableName)
}

func (e expenseLineORM) As(alias string) *expenseLineORM {
	e.expenseLineORMDo.DO = *(e.expenseLineORMDo.As(alias).(*gen.DO))
	return e.updateTableName(alias)
}

func (e *expenseLineORM) updateTableName(table string) *expenseLineORM {
	e.ALL = field.NewAsterisk(table)
	e.Account = field.NewString(table, "account")
	e.Company = field.NewString(table, "company")
	e.Contact = field.NewString(table, "contact")
	e.Currency = field.NewString(table, "currency")
	e.Description = field.NewString(table, "description")
	e.ExchangeRate = field.NewString(table, "exchange_rate")
	e.ExpenseId = field.NewUint64(table, "expense_id")
	e.Id = field.NewUint64(table, "id")
	e.Item = field.NewString(table, "item")
	e.ModifiedAt = field.NewTime(table, "modified_at")
	e.NetAmount = field.NewFloat64(table, "net_amount")
	e.RemoteId = field.NewString(table, "remote_id")
	e.TrackingCategories = field.NewField(table, "tracking_categories")
	e.TrackingCategory = field.NewString(table, "tracking_category")

	e.fillFieldMap()

	return e
}

func (e *expenseLineORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := e.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (e *expenseLineORM) fillFieldMap() {
	e.fieldMap = make(map[string]field.Expr, 14)
	e.fieldMap["account"] = e.Account
	e.fieldMap["company"] = e.Company
	e.fieldMap["contact"] = e.Contact
	e.fieldMap["currency"] = e.Currency
	e.fieldMap["description"] = e.Description
	e.fieldMap["exchange_rate"] = e.ExchangeRate
	e.fieldMap["expense_id"] = e.ExpenseId
	e.fieldMap["id"] = e.Id
	e.fieldMap["item"] = e.Item
	e.fieldMap["modified_at"] = e.ModifiedAt
	e.fieldMap["net_amount"] = e.NetAmount
	e.fieldMap["remote_id"] = e.RemoteId
	e.fieldMap["tracking_categories"] = e.TrackingCategories
	e.fieldMap["tracking_category"] = e.TrackingCategory
}

func (e expenseLineORM) clone(db *gorm.DB) expenseLineORM {
	e.expenseLineORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return e
}

func (e expenseLineORM) replaceDB(db *gorm.DB) expenseLineORM {
	e.expenseLineORMDo.ReplaceDB(db)
	return e
}

type expenseLineORMDo struct{ gen.DO }

type IExpenseLineORMDo interface {
	gen.SubQuery
	Debug() IExpenseLineORMDo
	WithContext(ctx context.Context) IExpenseLineORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IExpenseLineORMDo
	WriteDB() IExpenseLineORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IExpenseLineORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IExpenseLineORMDo
	Not(conds ...gen.Condition) IExpenseLineORMDo
	Or(conds ...gen.Condition) IExpenseLineORMDo
	Select(conds ...field.Expr) IExpenseLineORMDo
	Where(conds ...gen.Condition) IExpenseLineORMDo
	Order(conds ...field.Expr) IExpenseLineORMDo
	Distinct(cols ...field.Expr) IExpenseLineORMDo
	Omit(cols ...field.Expr) IExpenseLineORMDo
	Join(table schema.Tabler, on ...field.Expr) IExpenseLineORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IExpenseLineORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IExpenseLineORMDo
	Group(cols ...field.Expr) IExpenseLineORMDo
	Having(conds ...gen.Condition) IExpenseLineORMDo
	Limit(limit int) IExpenseLineORMDo
	Offset(offset int) IExpenseLineORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IExpenseLineORMDo
	Unscoped() IExpenseLineORMDo
	Create(values ...*accounting_servicev1.ExpenseLineORM) error
	CreateInBatches(values []*accounting_servicev1.ExpenseLineORM, batchSize int) error
	Save(values ...*accounting_servicev1.ExpenseLineORM) error
	First() (*accounting_servicev1.ExpenseLineORM, error)
	Take() (*accounting_servicev1.ExpenseLineORM, error)
	Last() (*accounting_servicev1.ExpenseLineORM, error)
	Find() ([]*accounting_servicev1.ExpenseLineORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*accounting_servicev1.ExpenseLineORM, err error)
	FindInBatches(result *[]*accounting_servicev1.ExpenseLineORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*accounting_servicev1.ExpenseLineORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IExpenseLineORMDo
	Assign(attrs ...field.AssignExpr) IExpenseLineORMDo
	Joins(fields ...field.RelationField) IExpenseLineORMDo
	Preload(fields ...field.RelationField) IExpenseLineORMDo
	FirstOrInit() (*accounting_servicev1.ExpenseLineORM, error)
	FirstOrCreate() (*accounting_servicev1.ExpenseLineORM, error)
	FindByPage(offset int, limit int) (result []*accounting_servicev1.ExpenseLineORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IExpenseLineORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result accounting_servicev1.ExpenseLineORM, err error)
	GetRecordByIDs(ids []int) (result []accounting_servicev1.ExpenseLineORM, err error)
	CreateRecord(item accounting_servicev1.ExpenseLineORM) (err error)
	UpdateRecordByID(id int, item accounting_servicev1.ExpenseLineORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []accounting_servicev1.ExpenseLineORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result accounting_servicev1.ExpenseLineORM, err error)
	GetByIDs(ids []uint64) (result []accounting_servicev1.ExpenseLineORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (e expenseLineORMDo) GetRecordByID(id int) (result accounting_servicev1.ExpenseLineORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM expense_lines ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = e.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (e expenseLineORMDo) GetRecordByIDs(ids []int) (result []accounting_servicev1.ExpenseLineORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM expense_lines ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = e.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (e expenseLineORMDo) CreateRecord(item accounting_servicev1.ExpenseLineORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO expense_lines (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = e.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (e expenseLineORMDo) UpdateRecordByID(id int, item accounting_servicev1.ExpenseLineORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE expense_lines SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = e.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (e expenseLineORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM expense_lines ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = e.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (e expenseLineORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []accounting_servicev1.ExpenseLineORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM expense_lines ORDER BY " + e.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = e.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (e expenseLineORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM expense_lines ")

	var executeSQL *gorm.DB
	executeSQL = e.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (e expenseLineORMDo) GetByID(id uint64) (result accounting_servicev1.ExpenseLineORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM expense_lines ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = e.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (e expenseLineORMDo) GetByIDs(ids []uint64) (result []accounting_servicev1.ExpenseLineORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM expense_lines ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = e.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (e expenseLineORMDo) Debug() IExpenseLineORMDo {
	return e.withDO(e.DO.Debug())
}

func (e expenseLineORMDo) WithContext(ctx context.Context) IExpenseLineORMDo {
	return e.withDO(e.DO.WithContext(ctx))
}

func (e expenseLineORMDo) ReadDB() IExpenseLineORMDo {
	return e.Clauses(dbresolver.Read)
}

func (e expenseLineORMDo) WriteDB() IExpenseLineORMDo {
	return e.Clauses(dbresolver.Write)
}

func (e expenseLineORMDo) Session(config *gorm.Session) IExpenseLineORMDo {
	return e.withDO(e.DO.Session(config))
}

func (e expenseLineORMDo) Clauses(conds ...clause.Expression) IExpenseLineORMDo {
	return e.withDO(e.DO.Clauses(conds...))
}

func (e expenseLineORMDo) Returning(value interface{}, columns ...string) IExpenseLineORMDo {
	return e.withDO(e.DO.Returning(value, columns...))
}

func (e expenseLineORMDo) Not(conds ...gen.Condition) IExpenseLineORMDo {
	return e.withDO(e.DO.Not(conds...))
}

func (e expenseLineORMDo) Or(conds ...gen.Condition) IExpenseLineORMDo {
	return e.withDO(e.DO.Or(conds...))
}

func (e expenseLineORMDo) Select(conds ...field.Expr) IExpenseLineORMDo {
	return e.withDO(e.DO.Select(conds...))
}

func (e expenseLineORMDo) Where(conds ...gen.Condition) IExpenseLineORMDo {
	return e.withDO(e.DO.Where(conds...))
}

func (e expenseLineORMDo) Order(conds ...field.Expr) IExpenseLineORMDo {
	return e.withDO(e.DO.Order(conds...))
}

func (e expenseLineORMDo) Distinct(cols ...field.Expr) IExpenseLineORMDo {
	return e.withDO(e.DO.Distinct(cols...))
}

func (e expenseLineORMDo) Omit(cols ...field.Expr) IExpenseLineORMDo {
	return e.withDO(e.DO.Omit(cols...))
}

func (e expenseLineORMDo) Join(table schema.Tabler, on ...field.Expr) IExpenseLineORMDo {
	return e.withDO(e.DO.Join(table, on...))
}

func (e expenseLineORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IExpenseLineORMDo {
	return e.withDO(e.DO.LeftJoin(table, on...))
}

func (e expenseLineORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IExpenseLineORMDo {
	return e.withDO(e.DO.RightJoin(table, on...))
}

func (e expenseLineORMDo) Group(cols ...field.Expr) IExpenseLineORMDo {
	return e.withDO(e.DO.Group(cols...))
}

func (e expenseLineORMDo) Having(conds ...gen.Condition) IExpenseLineORMDo {
	return e.withDO(e.DO.Having(conds...))
}

func (e expenseLineORMDo) Limit(limit int) IExpenseLineORMDo {
	return e.withDO(e.DO.Limit(limit))
}

func (e expenseLineORMDo) Offset(offset int) IExpenseLineORMDo {
	return e.withDO(e.DO.Offset(offset))
}

func (e expenseLineORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IExpenseLineORMDo {
	return e.withDO(e.DO.Scopes(funcs...))
}

func (e expenseLineORMDo) Unscoped() IExpenseLineORMDo {
	return e.withDO(e.DO.Unscoped())
}

func (e expenseLineORMDo) Create(values ...*accounting_servicev1.ExpenseLineORM) error {
	if len(values) == 0 {
		return nil
	}
	return e.DO.Create(values)
}

func (e expenseLineORMDo) CreateInBatches(values []*accounting_servicev1.ExpenseLineORM, batchSize int) error {
	return e.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (e expenseLineORMDo) Save(values ...*accounting_servicev1.ExpenseLineORM) error {
	if len(values) == 0 {
		return nil
	}
	return e.DO.Save(values)
}

func (e expenseLineORMDo) First() (*accounting_servicev1.ExpenseLineORM, error) {
	if result, err := e.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.ExpenseLineORM), nil
	}
}

func (e expenseLineORMDo) Take() (*accounting_servicev1.ExpenseLineORM, error) {
	if result, err := e.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.ExpenseLineORM), nil
	}
}

func (e expenseLineORMDo) Last() (*accounting_servicev1.ExpenseLineORM, error) {
	if result, err := e.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.ExpenseLineORM), nil
	}
}

func (e expenseLineORMDo) Find() ([]*accounting_servicev1.ExpenseLineORM, error) {
	result, err := e.DO.Find()
	return result.([]*accounting_servicev1.ExpenseLineORM), err
}

func (e expenseLineORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*accounting_servicev1.ExpenseLineORM, err error) {
	buf := make([]*accounting_servicev1.ExpenseLineORM, 0, batchSize)
	err = e.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (e expenseLineORMDo) FindInBatches(result *[]*accounting_servicev1.ExpenseLineORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return e.DO.FindInBatches(result, batchSize, fc)
}

func (e expenseLineORMDo) Attrs(attrs ...field.AssignExpr) IExpenseLineORMDo {
	return e.withDO(e.DO.Attrs(attrs...))
}

func (e expenseLineORMDo) Assign(attrs ...field.AssignExpr) IExpenseLineORMDo {
	return e.withDO(e.DO.Assign(attrs...))
}

func (e expenseLineORMDo) Joins(fields ...field.RelationField) IExpenseLineORMDo {
	for _, _f := range fields {
		e = *e.withDO(e.DO.Joins(_f))
	}
	return &e
}

func (e expenseLineORMDo) Preload(fields ...field.RelationField) IExpenseLineORMDo {
	for _, _f := range fields {
		e = *e.withDO(e.DO.Preload(_f))
	}
	return &e
}

func (e expenseLineORMDo) FirstOrInit() (*accounting_servicev1.ExpenseLineORM, error) {
	if result, err := e.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.ExpenseLineORM), nil
	}
}

func (e expenseLineORMDo) FirstOrCreate() (*accounting_servicev1.ExpenseLineORM, error) {
	if result, err := e.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.ExpenseLineORM), nil
	}
}

func (e expenseLineORMDo) FindByPage(offset int, limit int) (result []*accounting_servicev1.ExpenseLineORM, count int64, err error) {
	result, err = e.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = e.Offset(-1).Limit(-1).Count()
	return
}

func (e expenseLineORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = e.Count()
	if err != nil {
		return
	}

	err = e.Offset(offset).Limit(limit).Scan(result)
	return
}

func (e expenseLineORMDo) Scan(result interface{}) (err error) {
	return e.DO.Scan(result)
}

func (e expenseLineORMDo) Delete(models ...*accounting_servicev1.ExpenseLineORM) (result gen.ResultInfo, err error) {
	return e.DO.Delete(models)
}

func (e *expenseLineORMDo) withDO(do gen.Dao) *expenseLineORMDo {
	e.DO = *do.(*gen.DO)
	return e
}