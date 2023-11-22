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

func newTransactionSplitORM(db *gorm.DB, opts ...gen.DOOption) transactionSplitORM {
	_transactionSplitORM := transactionSplitORM{}

	_transactionSplitORM.transactionSplitORMDo.UseDB(db, opts...)
	_transactionSplitORM.transactionSplitORMDo.UseModel(&financial_servicev1.TransactionSplitORM{})

	tableName := _transactionSplitORM.transactionSplitORMDo.TableName()
	_transactionSplitORM.ALL = field.NewAsterisk(tableName)
	_transactionSplitORM.Amount = field.NewFloat64(tableName, "amount")
	_transactionSplitORM.AuthorizedDate = field.NewTime(tableName, "authorized_date")
	_transactionSplitORM.AuthorizedDatetime = field.NewTime(tableName, "authorized_datetime")
	_transactionSplitORM.Categories = field.NewField(tableName, "categories")
	_transactionSplitORM.Description = field.NewString(tableName, "description")
	_transactionSplitORM.Id = field.NewUint64(tableName, "id")
	_transactionSplitORM.LinkId = field.NewUint64(tableName, "link_id")
	_transactionSplitORM.PersonalFinanceCategoryDetailed = field.NewString(tableName, "personal_finance_category_detailed")
	_transactionSplitORM.PersonalFinanceCategoryPrimary = field.NewString(tableName, "personal_finance_category_primary")
	_transactionSplitORM.PlaidAccountTransactionId = field.NewUint64(tableName, "plaid_account_transaction_id")
	_transactionSplitORM.Tags = field.NewField(tableName, "tags")
	_transactionSplitORM.TimeOfSplit = field.NewTime(tableName, "time_of_split")
	_transactionSplitORM.UserId = field.NewUint64(tableName, "user_id")

	_transactionSplitORM.fillFieldMap()

	return _transactionSplitORM
}

type transactionSplitORM struct {
	transactionSplitORMDo

	ALL                             field.Asterisk
	Amount                          field.Float64
	AuthorizedDate                  field.Time
	AuthorizedDatetime              field.Time
	Categories                      field.Field
	Description                     field.String
	Id                              field.Uint64
	LinkId                          field.Uint64
	PersonalFinanceCategoryDetailed field.String
	PersonalFinanceCategoryPrimary  field.String
	PlaidAccountTransactionId       field.Uint64
	Tags                            field.Field
	TimeOfSplit                     field.Time
	UserId                          field.Uint64

	fieldMap map[string]field.Expr
}

func (t transactionSplitORM) Table(newTableName string) *transactionSplitORM {
	t.transactionSplitORMDo.UseTable(newTableName)
	return t.updateTableName(newTableName)
}

func (t transactionSplitORM) As(alias string) *transactionSplitORM {
	t.transactionSplitORMDo.DO = *(t.transactionSplitORMDo.As(alias).(*gen.DO))
	return t.updateTableName(alias)
}

func (t *transactionSplitORM) updateTableName(table string) *transactionSplitORM {
	t.ALL = field.NewAsterisk(table)
	t.Amount = field.NewFloat64(table, "amount")
	t.AuthorizedDate = field.NewTime(table, "authorized_date")
	t.AuthorizedDatetime = field.NewTime(table, "authorized_datetime")
	t.Categories = field.NewField(table, "categories")
	t.Description = field.NewString(table, "description")
	t.Id = field.NewUint64(table, "id")
	t.LinkId = field.NewUint64(table, "link_id")
	t.PersonalFinanceCategoryDetailed = field.NewString(table, "personal_finance_category_detailed")
	t.PersonalFinanceCategoryPrimary = field.NewString(table, "personal_finance_category_primary")
	t.PlaidAccountTransactionId = field.NewUint64(table, "plaid_account_transaction_id")
	t.Tags = field.NewField(table, "tags")
	t.TimeOfSplit = field.NewTime(table, "time_of_split")
	t.UserId = field.NewUint64(table, "user_id")

	t.fillFieldMap()

	return t
}

func (t *transactionSplitORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := t.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (t *transactionSplitORM) fillFieldMap() {
	t.fieldMap = make(map[string]field.Expr, 13)
	t.fieldMap["amount"] = t.Amount
	t.fieldMap["authorized_date"] = t.AuthorizedDate
	t.fieldMap["authorized_datetime"] = t.AuthorizedDatetime
	t.fieldMap["categories"] = t.Categories
	t.fieldMap["description"] = t.Description
	t.fieldMap["id"] = t.Id
	t.fieldMap["link_id"] = t.LinkId
	t.fieldMap["personal_finance_category_detailed"] = t.PersonalFinanceCategoryDetailed
	t.fieldMap["personal_finance_category_primary"] = t.PersonalFinanceCategoryPrimary
	t.fieldMap["plaid_account_transaction_id"] = t.PlaidAccountTransactionId
	t.fieldMap["tags"] = t.Tags
	t.fieldMap["time_of_split"] = t.TimeOfSplit
	t.fieldMap["user_id"] = t.UserId
}

func (t transactionSplitORM) clone(db *gorm.DB) transactionSplitORM {
	t.transactionSplitORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return t
}

func (t transactionSplitORM) replaceDB(db *gorm.DB) transactionSplitORM {
	t.transactionSplitORMDo.ReplaceDB(db)
	return t
}

type transactionSplitORMDo struct{ gen.DO }

type ITransactionSplitORMDo interface {
	gen.SubQuery
	Debug() ITransactionSplitORMDo
	WithContext(ctx context.Context) ITransactionSplitORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() ITransactionSplitORMDo
	WriteDB() ITransactionSplitORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) ITransactionSplitORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) ITransactionSplitORMDo
	Not(conds ...gen.Condition) ITransactionSplitORMDo
	Or(conds ...gen.Condition) ITransactionSplitORMDo
	Select(conds ...field.Expr) ITransactionSplitORMDo
	Where(conds ...gen.Condition) ITransactionSplitORMDo
	Order(conds ...field.Expr) ITransactionSplitORMDo
	Distinct(cols ...field.Expr) ITransactionSplitORMDo
	Omit(cols ...field.Expr) ITransactionSplitORMDo
	Join(table schema.Tabler, on ...field.Expr) ITransactionSplitORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) ITransactionSplitORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) ITransactionSplitORMDo
	Group(cols ...field.Expr) ITransactionSplitORMDo
	Having(conds ...gen.Condition) ITransactionSplitORMDo
	Limit(limit int) ITransactionSplitORMDo
	Offset(offset int) ITransactionSplitORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) ITransactionSplitORMDo
	Unscoped() ITransactionSplitORMDo
	Create(values ...*financial_servicev1.TransactionSplitORM) error
	CreateInBatches(values []*financial_servicev1.TransactionSplitORM, batchSize int) error
	Save(values ...*financial_servicev1.TransactionSplitORM) error
	First() (*financial_servicev1.TransactionSplitORM, error)
	Take() (*financial_servicev1.TransactionSplitORM, error)
	Last() (*financial_servicev1.TransactionSplitORM, error)
	Find() ([]*financial_servicev1.TransactionSplitORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.TransactionSplitORM, err error)
	FindInBatches(result *[]*financial_servicev1.TransactionSplitORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*financial_servicev1.TransactionSplitORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) ITransactionSplitORMDo
	Assign(attrs ...field.AssignExpr) ITransactionSplitORMDo
	Joins(fields ...field.RelationField) ITransactionSplitORMDo
	Preload(fields ...field.RelationField) ITransactionSplitORMDo
	FirstOrInit() (*financial_servicev1.TransactionSplitORM, error)
	FirstOrCreate() (*financial_servicev1.TransactionSplitORM, error)
	FindByPage(offset int, limit int) (result []*financial_servicev1.TransactionSplitORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) ITransactionSplitORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result financial_servicev1.TransactionSplitORM, err error)
	GetRecordByIDs(ids []int) (result []financial_servicev1.TransactionSplitORM, err error)
	CreateRecord(item financial_servicev1.TransactionSplitORM) (err error)
	UpdateRecordByID(id int, item financial_servicev1.TransactionSplitORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.TransactionSplitORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result financial_servicev1.TransactionSplitORM, err error)
	GetByIDs(ids []uint64) (result []financial_servicev1.TransactionSplitORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (t transactionSplitORMDo) GetRecordByID(id int) (result financial_servicev1.TransactionSplitORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM transaction_splits ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = t.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (t transactionSplitORMDo) GetRecordByIDs(ids []int) (result []financial_servicev1.TransactionSplitORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM transaction_splits ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = t.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (t transactionSplitORMDo) CreateRecord(item financial_servicev1.TransactionSplitORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO transaction_splits (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = t.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (t transactionSplitORMDo) UpdateRecordByID(id int, item financial_servicev1.TransactionSplitORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE transaction_splits SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = t.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (t transactionSplitORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM transaction_splits ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = t.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (t transactionSplitORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.TransactionSplitORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM transaction_splits ORDER BY " + t.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = t.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (t transactionSplitORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM transaction_splits ")

	var executeSQL *gorm.DB
	executeSQL = t.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (t transactionSplitORMDo) GetByID(id uint64) (result financial_servicev1.TransactionSplitORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM transaction_splits ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = t.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (t transactionSplitORMDo) GetByIDs(ids []uint64) (result []financial_servicev1.TransactionSplitORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM transaction_splits ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = t.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (t transactionSplitORMDo) Debug() ITransactionSplitORMDo {
	return t.withDO(t.DO.Debug())
}

func (t transactionSplitORMDo) WithContext(ctx context.Context) ITransactionSplitORMDo {
	return t.withDO(t.DO.WithContext(ctx))
}

func (t transactionSplitORMDo) ReadDB() ITransactionSplitORMDo {
	return t.Clauses(dbresolver.Read)
}

func (t transactionSplitORMDo) WriteDB() ITransactionSplitORMDo {
	return t.Clauses(dbresolver.Write)
}

func (t transactionSplitORMDo) Session(config *gorm.Session) ITransactionSplitORMDo {
	return t.withDO(t.DO.Session(config))
}

func (t transactionSplitORMDo) Clauses(conds ...clause.Expression) ITransactionSplitORMDo {
	return t.withDO(t.DO.Clauses(conds...))
}

func (t transactionSplitORMDo) Returning(value interface{}, columns ...string) ITransactionSplitORMDo {
	return t.withDO(t.DO.Returning(value, columns...))
}

func (t transactionSplitORMDo) Not(conds ...gen.Condition) ITransactionSplitORMDo {
	return t.withDO(t.DO.Not(conds...))
}

func (t transactionSplitORMDo) Or(conds ...gen.Condition) ITransactionSplitORMDo {
	return t.withDO(t.DO.Or(conds...))
}

func (t transactionSplitORMDo) Select(conds ...field.Expr) ITransactionSplitORMDo {
	return t.withDO(t.DO.Select(conds...))
}

func (t transactionSplitORMDo) Where(conds ...gen.Condition) ITransactionSplitORMDo {
	return t.withDO(t.DO.Where(conds...))
}

func (t transactionSplitORMDo) Order(conds ...field.Expr) ITransactionSplitORMDo {
	return t.withDO(t.DO.Order(conds...))
}

func (t transactionSplitORMDo) Distinct(cols ...field.Expr) ITransactionSplitORMDo {
	return t.withDO(t.DO.Distinct(cols...))
}

func (t transactionSplitORMDo) Omit(cols ...field.Expr) ITransactionSplitORMDo {
	return t.withDO(t.DO.Omit(cols...))
}

func (t transactionSplitORMDo) Join(table schema.Tabler, on ...field.Expr) ITransactionSplitORMDo {
	return t.withDO(t.DO.Join(table, on...))
}

func (t transactionSplitORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) ITransactionSplitORMDo {
	return t.withDO(t.DO.LeftJoin(table, on...))
}

func (t transactionSplitORMDo) RightJoin(table schema.Tabler, on ...field.Expr) ITransactionSplitORMDo {
	return t.withDO(t.DO.RightJoin(table, on...))
}

func (t transactionSplitORMDo) Group(cols ...field.Expr) ITransactionSplitORMDo {
	return t.withDO(t.DO.Group(cols...))
}

func (t transactionSplitORMDo) Having(conds ...gen.Condition) ITransactionSplitORMDo {
	return t.withDO(t.DO.Having(conds...))
}

func (t transactionSplitORMDo) Limit(limit int) ITransactionSplitORMDo {
	return t.withDO(t.DO.Limit(limit))
}

func (t transactionSplitORMDo) Offset(offset int) ITransactionSplitORMDo {
	return t.withDO(t.DO.Offset(offset))
}

func (t transactionSplitORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) ITransactionSplitORMDo {
	return t.withDO(t.DO.Scopes(funcs...))
}

func (t transactionSplitORMDo) Unscoped() ITransactionSplitORMDo {
	return t.withDO(t.DO.Unscoped())
}

func (t transactionSplitORMDo) Create(values ...*financial_servicev1.TransactionSplitORM) error {
	if len(values) == 0 {
		return nil
	}
	return t.DO.Create(values)
}

func (t transactionSplitORMDo) CreateInBatches(values []*financial_servicev1.TransactionSplitORM, batchSize int) error {
	return t.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (t transactionSplitORMDo) Save(values ...*financial_servicev1.TransactionSplitORM) error {
	if len(values) == 0 {
		return nil
	}
	return t.DO.Save(values)
}

func (t transactionSplitORMDo) First() (*financial_servicev1.TransactionSplitORM, error) {
	if result, err := t.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.TransactionSplitORM), nil
	}
}

func (t transactionSplitORMDo) Take() (*financial_servicev1.TransactionSplitORM, error) {
	if result, err := t.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.TransactionSplitORM), nil
	}
}

func (t transactionSplitORMDo) Last() (*financial_servicev1.TransactionSplitORM, error) {
	if result, err := t.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.TransactionSplitORM), nil
	}
}

func (t transactionSplitORMDo) Find() ([]*financial_servicev1.TransactionSplitORM, error) {
	result, err := t.DO.Find()
	return result.([]*financial_servicev1.TransactionSplitORM), err
}

func (t transactionSplitORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.TransactionSplitORM, err error) {
	buf := make([]*financial_servicev1.TransactionSplitORM, 0, batchSize)
	err = t.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (t transactionSplitORMDo) FindInBatches(result *[]*financial_servicev1.TransactionSplitORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return t.DO.FindInBatches(result, batchSize, fc)
}

func (t transactionSplitORMDo) Attrs(attrs ...field.AssignExpr) ITransactionSplitORMDo {
	return t.withDO(t.DO.Attrs(attrs...))
}

func (t transactionSplitORMDo) Assign(attrs ...field.AssignExpr) ITransactionSplitORMDo {
	return t.withDO(t.DO.Assign(attrs...))
}

func (t transactionSplitORMDo) Joins(fields ...field.RelationField) ITransactionSplitORMDo {
	for _, _f := range fields {
		t = *t.withDO(t.DO.Joins(_f))
	}
	return &t
}

func (t transactionSplitORMDo) Preload(fields ...field.RelationField) ITransactionSplitORMDo {
	for _, _f := range fields {
		t = *t.withDO(t.DO.Preload(_f))
	}
	return &t
}

func (t transactionSplitORMDo) FirstOrInit() (*financial_servicev1.TransactionSplitORM, error) {
	if result, err := t.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.TransactionSplitORM), nil
	}
}

func (t transactionSplitORMDo) FirstOrCreate() (*financial_servicev1.TransactionSplitORM, error) {
	if result, err := t.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.TransactionSplitORM), nil
	}
}

func (t transactionSplitORMDo) FindByPage(offset int, limit int) (result []*financial_servicev1.TransactionSplitORM, count int64, err error) {
	result, err = t.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = t.Offset(-1).Limit(-1).Count()
	return
}

func (t transactionSplitORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = t.Count()
	if err != nil {
		return
	}

	err = t.Offset(offset).Limit(limit).Scan(result)
	return
}

func (t transactionSplitORMDo) Scan(result interface{}) (err error) {
	return t.DO.Scan(result)
}

func (t transactionSplitORMDo) Delete(models ...*financial_servicev1.TransactionSplitORM) (result gen.ResultInfo, err error) {
	return t.DO.Delete(models)
}

func (t *transactionSplitORMDo) withDO(do gen.Dao) *transactionSplitORMDo {
	t.DO = *do.(*gen.DO)
	return t
}
