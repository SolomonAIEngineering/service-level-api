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

func newEmployeTimeOffBalanceORM(db *gorm.DB, opts ...gen.DOOption) employeTimeOffBalanceORM {
	_employeTimeOffBalanceORM := employeTimeOffBalanceORM{}

	_employeTimeOffBalanceORM.employeTimeOffBalanceORMDo.UseDB(db, opts...)
	_employeTimeOffBalanceORM.employeTimeOffBalanceORMDo.UseModel(&accounting_servicev1.EmployeTimeOffBalanceORM{})

	tableName := _employeTimeOffBalanceORM.employeTimeOffBalanceORMDo.TableName()
	_employeTimeOffBalanceORM.ALL = field.NewAsterisk(tableName)
	_employeTimeOffBalanceORM.Balance = field.NewFloat64(tableName, "balance")
	_employeTimeOffBalanceORM.CreatedAt = field.NewTime(tableName, "created_at")
	_employeTimeOffBalanceORM.EmployeeId = field.NewUint64(tableName, "employee_id")
	_employeTimeOffBalanceORM.Id = field.NewUint64(tableName, "id")
	_employeTimeOffBalanceORM.MergeAccountId = field.NewString(tableName, "merge_account_id")
	_employeTimeOffBalanceORM.ModifiedAt = field.NewTime(tableName, "modified_at")
	_employeTimeOffBalanceORM.PolicyType = field.NewString(tableName, "policy_type")
	_employeTimeOffBalanceORM.RemoteId = field.NewString(tableName, "remote_id")
	_employeTimeOffBalanceORM.RemoteWasDeleted = field.NewBool(tableName, "remote_was_deleted")
	_employeTimeOffBalanceORM.Used = field.NewFloat64(tableName, "used")

	_employeTimeOffBalanceORM.fillFieldMap()

	return _employeTimeOffBalanceORM
}

type employeTimeOffBalanceORM struct {
	employeTimeOffBalanceORMDo

	ALL              field.Asterisk
	Balance          field.Float64
	CreatedAt        field.Time
	EmployeeId       field.Uint64
	Id               field.Uint64
	MergeAccountId   field.String
	ModifiedAt       field.Time
	PolicyType       field.String
	RemoteId         field.String
	RemoteWasDeleted field.Bool
	Used             field.Float64

	fieldMap map[string]field.Expr
}

func (e employeTimeOffBalanceORM) Table(newTableName string) *employeTimeOffBalanceORM {
	e.employeTimeOffBalanceORMDo.UseTable(newTableName)
	return e.updateTableName(newTableName)
}

func (e employeTimeOffBalanceORM) As(alias string) *employeTimeOffBalanceORM {
	e.employeTimeOffBalanceORMDo.DO = *(e.employeTimeOffBalanceORMDo.As(alias).(*gen.DO))
	return e.updateTableName(alias)
}

func (e *employeTimeOffBalanceORM) updateTableName(table string) *employeTimeOffBalanceORM {
	e.ALL = field.NewAsterisk(table)
	e.Balance = field.NewFloat64(table, "balance")
	e.CreatedAt = field.NewTime(table, "created_at")
	e.EmployeeId = field.NewUint64(table, "employee_id")
	e.Id = field.NewUint64(table, "id")
	e.MergeAccountId = field.NewString(table, "merge_account_id")
	e.ModifiedAt = field.NewTime(table, "modified_at")
	e.PolicyType = field.NewString(table, "policy_type")
	e.RemoteId = field.NewString(table, "remote_id")
	e.RemoteWasDeleted = field.NewBool(table, "remote_was_deleted")
	e.Used = field.NewFloat64(table, "used")

	e.fillFieldMap()

	return e
}

func (e *employeTimeOffBalanceORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := e.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (e *employeTimeOffBalanceORM) fillFieldMap() {
	e.fieldMap = make(map[string]field.Expr, 10)
	e.fieldMap["balance"] = e.Balance
	e.fieldMap["created_at"] = e.CreatedAt
	e.fieldMap["employee_id"] = e.EmployeeId
	e.fieldMap["id"] = e.Id
	e.fieldMap["merge_account_id"] = e.MergeAccountId
	e.fieldMap["modified_at"] = e.ModifiedAt
	e.fieldMap["policy_type"] = e.PolicyType
	e.fieldMap["remote_id"] = e.RemoteId
	e.fieldMap["remote_was_deleted"] = e.RemoteWasDeleted
	e.fieldMap["used"] = e.Used
}

func (e employeTimeOffBalanceORM) clone(db *gorm.DB) employeTimeOffBalanceORM {
	e.employeTimeOffBalanceORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return e
}

func (e employeTimeOffBalanceORM) replaceDB(db *gorm.DB) employeTimeOffBalanceORM {
	e.employeTimeOffBalanceORMDo.ReplaceDB(db)
	return e
}

type employeTimeOffBalanceORMDo struct{ gen.DO }

type IEmployeTimeOffBalanceORMDo interface {
	gen.SubQuery
	Debug() IEmployeTimeOffBalanceORMDo
	WithContext(ctx context.Context) IEmployeTimeOffBalanceORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IEmployeTimeOffBalanceORMDo
	WriteDB() IEmployeTimeOffBalanceORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IEmployeTimeOffBalanceORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IEmployeTimeOffBalanceORMDo
	Not(conds ...gen.Condition) IEmployeTimeOffBalanceORMDo
	Or(conds ...gen.Condition) IEmployeTimeOffBalanceORMDo
	Select(conds ...field.Expr) IEmployeTimeOffBalanceORMDo
	Where(conds ...gen.Condition) IEmployeTimeOffBalanceORMDo
	Order(conds ...field.Expr) IEmployeTimeOffBalanceORMDo
	Distinct(cols ...field.Expr) IEmployeTimeOffBalanceORMDo
	Omit(cols ...field.Expr) IEmployeTimeOffBalanceORMDo
	Join(table schema.Tabler, on ...field.Expr) IEmployeTimeOffBalanceORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IEmployeTimeOffBalanceORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IEmployeTimeOffBalanceORMDo
	Group(cols ...field.Expr) IEmployeTimeOffBalanceORMDo
	Having(conds ...gen.Condition) IEmployeTimeOffBalanceORMDo
	Limit(limit int) IEmployeTimeOffBalanceORMDo
	Offset(offset int) IEmployeTimeOffBalanceORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IEmployeTimeOffBalanceORMDo
	Unscoped() IEmployeTimeOffBalanceORMDo
	Create(values ...*accounting_servicev1.EmployeTimeOffBalanceORM) error
	CreateInBatches(values []*accounting_servicev1.EmployeTimeOffBalanceORM, batchSize int) error
	Save(values ...*accounting_servicev1.EmployeTimeOffBalanceORM) error
	First() (*accounting_servicev1.EmployeTimeOffBalanceORM, error)
	Take() (*accounting_servicev1.EmployeTimeOffBalanceORM, error)
	Last() (*accounting_servicev1.EmployeTimeOffBalanceORM, error)
	Find() ([]*accounting_servicev1.EmployeTimeOffBalanceORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*accounting_servicev1.EmployeTimeOffBalanceORM, err error)
	FindInBatches(result *[]*accounting_servicev1.EmployeTimeOffBalanceORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*accounting_servicev1.EmployeTimeOffBalanceORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IEmployeTimeOffBalanceORMDo
	Assign(attrs ...field.AssignExpr) IEmployeTimeOffBalanceORMDo
	Joins(fields ...field.RelationField) IEmployeTimeOffBalanceORMDo
	Preload(fields ...field.RelationField) IEmployeTimeOffBalanceORMDo
	FirstOrInit() (*accounting_servicev1.EmployeTimeOffBalanceORM, error)
	FirstOrCreate() (*accounting_servicev1.EmployeTimeOffBalanceORM, error)
	FindByPage(offset int, limit int) (result []*accounting_servicev1.EmployeTimeOffBalanceORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IEmployeTimeOffBalanceORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result accounting_servicev1.EmployeTimeOffBalanceORM, err error)
	GetRecordByIDs(ids []int) (result []accounting_servicev1.EmployeTimeOffBalanceORM, err error)
	CreateRecord(item accounting_servicev1.EmployeTimeOffBalanceORM) (err error)
	UpdateRecordByID(id int, item accounting_servicev1.EmployeTimeOffBalanceORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []accounting_servicev1.EmployeTimeOffBalanceORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result accounting_servicev1.EmployeTimeOffBalanceORM, err error)
	GetByIDs(ids []uint64) (result []accounting_servicev1.EmployeTimeOffBalanceORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (e employeTimeOffBalanceORMDo) GetRecordByID(id int) (result accounting_servicev1.EmployeTimeOffBalanceORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM employe_time_off_balances ")
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
func (e employeTimeOffBalanceORMDo) GetRecordByIDs(ids []int) (result []accounting_servicev1.EmployeTimeOffBalanceORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM employe_time_off_balances ")
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
func (e employeTimeOffBalanceORMDo) CreateRecord(item accounting_servicev1.EmployeTimeOffBalanceORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO employe_time_off_balances (columns) VALUES (values) ")

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
func (e employeTimeOffBalanceORMDo) UpdateRecordByID(id int, item accounting_servicev1.EmployeTimeOffBalanceORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE employe_time_off_balances SET columns=values ")
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
func (e employeTimeOffBalanceORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM employe_time_off_balances ")
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
func (e employeTimeOffBalanceORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []accounting_servicev1.EmployeTimeOffBalanceORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM employe_time_off_balances ORDER BY " + e.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = e.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (e employeTimeOffBalanceORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM employe_time_off_balances ")

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
func (e employeTimeOffBalanceORMDo) GetByID(id uint64) (result accounting_servicev1.EmployeTimeOffBalanceORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM employe_time_off_balances ")
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
func (e employeTimeOffBalanceORMDo) GetByIDs(ids []uint64) (result []accounting_servicev1.EmployeTimeOffBalanceORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM employe_time_off_balances ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = e.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (e employeTimeOffBalanceORMDo) Debug() IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.Debug())
}

func (e employeTimeOffBalanceORMDo) WithContext(ctx context.Context) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.WithContext(ctx))
}

func (e employeTimeOffBalanceORMDo) ReadDB() IEmployeTimeOffBalanceORMDo {
	return e.Clauses(dbresolver.Read)
}

func (e employeTimeOffBalanceORMDo) WriteDB() IEmployeTimeOffBalanceORMDo {
	return e.Clauses(dbresolver.Write)
}

func (e employeTimeOffBalanceORMDo) Session(config *gorm.Session) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.Session(config))
}

func (e employeTimeOffBalanceORMDo) Clauses(conds ...clause.Expression) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.Clauses(conds...))
}

func (e employeTimeOffBalanceORMDo) Returning(value interface{}, columns ...string) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.Returning(value, columns...))
}

func (e employeTimeOffBalanceORMDo) Not(conds ...gen.Condition) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.Not(conds...))
}

func (e employeTimeOffBalanceORMDo) Or(conds ...gen.Condition) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.Or(conds...))
}

func (e employeTimeOffBalanceORMDo) Select(conds ...field.Expr) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.Select(conds...))
}

func (e employeTimeOffBalanceORMDo) Where(conds ...gen.Condition) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.Where(conds...))
}

func (e employeTimeOffBalanceORMDo) Order(conds ...field.Expr) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.Order(conds...))
}

func (e employeTimeOffBalanceORMDo) Distinct(cols ...field.Expr) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.Distinct(cols...))
}

func (e employeTimeOffBalanceORMDo) Omit(cols ...field.Expr) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.Omit(cols...))
}

func (e employeTimeOffBalanceORMDo) Join(table schema.Tabler, on ...field.Expr) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.Join(table, on...))
}

func (e employeTimeOffBalanceORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.LeftJoin(table, on...))
}

func (e employeTimeOffBalanceORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.RightJoin(table, on...))
}

func (e employeTimeOffBalanceORMDo) Group(cols ...field.Expr) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.Group(cols...))
}

func (e employeTimeOffBalanceORMDo) Having(conds ...gen.Condition) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.Having(conds...))
}

func (e employeTimeOffBalanceORMDo) Limit(limit int) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.Limit(limit))
}

func (e employeTimeOffBalanceORMDo) Offset(offset int) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.Offset(offset))
}

func (e employeTimeOffBalanceORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.Scopes(funcs...))
}

func (e employeTimeOffBalanceORMDo) Unscoped() IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.Unscoped())
}

func (e employeTimeOffBalanceORMDo) Create(values ...*accounting_servicev1.EmployeTimeOffBalanceORM) error {
	if len(values) == 0 {
		return nil
	}
	return e.DO.Create(values)
}

func (e employeTimeOffBalanceORMDo) CreateInBatches(values []*accounting_servicev1.EmployeTimeOffBalanceORM, batchSize int) error {
	return e.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (e employeTimeOffBalanceORMDo) Save(values ...*accounting_servicev1.EmployeTimeOffBalanceORM) error {
	if len(values) == 0 {
		return nil
	}
	return e.DO.Save(values)
}

func (e employeTimeOffBalanceORMDo) First() (*accounting_servicev1.EmployeTimeOffBalanceORM, error) {
	if result, err := e.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.EmployeTimeOffBalanceORM), nil
	}
}

func (e employeTimeOffBalanceORMDo) Take() (*accounting_servicev1.EmployeTimeOffBalanceORM, error) {
	if result, err := e.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.EmployeTimeOffBalanceORM), nil
	}
}

func (e employeTimeOffBalanceORMDo) Last() (*accounting_servicev1.EmployeTimeOffBalanceORM, error) {
	if result, err := e.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.EmployeTimeOffBalanceORM), nil
	}
}

func (e employeTimeOffBalanceORMDo) Find() ([]*accounting_servicev1.EmployeTimeOffBalanceORM, error) {
	result, err := e.DO.Find()
	return result.([]*accounting_servicev1.EmployeTimeOffBalanceORM), err
}

func (e employeTimeOffBalanceORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*accounting_servicev1.EmployeTimeOffBalanceORM, err error) {
	buf := make([]*accounting_servicev1.EmployeTimeOffBalanceORM, 0, batchSize)
	err = e.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (e employeTimeOffBalanceORMDo) FindInBatches(result *[]*accounting_servicev1.EmployeTimeOffBalanceORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return e.DO.FindInBatches(result, batchSize, fc)
}

func (e employeTimeOffBalanceORMDo) Attrs(attrs ...field.AssignExpr) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.Attrs(attrs...))
}

func (e employeTimeOffBalanceORMDo) Assign(attrs ...field.AssignExpr) IEmployeTimeOffBalanceORMDo {
	return e.withDO(e.DO.Assign(attrs...))
}

func (e employeTimeOffBalanceORMDo) Joins(fields ...field.RelationField) IEmployeTimeOffBalanceORMDo {
	for _, _f := range fields {
		e = *e.withDO(e.DO.Joins(_f))
	}
	return &e
}

func (e employeTimeOffBalanceORMDo) Preload(fields ...field.RelationField) IEmployeTimeOffBalanceORMDo {
	for _, _f := range fields {
		e = *e.withDO(e.DO.Preload(_f))
	}
	return &e
}

func (e employeTimeOffBalanceORMDo) FirstOrInit() (*accounting_servicev1.EmployeTimeOffBalanceORM, error) {
	if result, err := e.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.EmployeTimeOffBalanceORM), nil
	}
}

func (e employeTimeOffBalanceORMDo) FirstOrCreate() (*accounting_servicev1.EmployeTimeOffBalanceORM, error) {
	if result, err := e.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.EmployeTimeOffBalanceORM), nil
	}
}

func (e employeTimeOffBalanceORMDo) FindByPage(offset int, limit int) (result []*accounting_servicev1.EmployeTimeOffBalanceORM, count int64, err error) {
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

func (e employeTimeOffBalanceORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = e.Count()
	if err != nil {
		return
	}

	err = e.Offset(offset).Limit(limit).Scan(result)
	return
}

func (e employeTimeOffBalanceORMDo) Scan(result interface{}) (err error) {
	return e.DO.Scan(result)
}

func (e employeTimeOffBalanceORMDo) Delete(models ...*accounting_servicev1.EmployeTimeOffBalanceORM) (result gen.ResultInfo, err error) {
	return e.DO.Delete(models)
}

func (e *employeTimeOffBalanceORMDo) withDO(do gen.Dao) *employeTimeOffBalanceORMDo {
	e.DO = *do.(*gen.DO)
	return e
}
