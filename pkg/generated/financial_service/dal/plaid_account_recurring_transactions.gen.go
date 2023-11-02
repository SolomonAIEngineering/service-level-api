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

	financial_servicev1 "github.com/SolomonAIEngineering/service-level-api/pkg/generated/financial_service/v1"
)

func newPlaidAccountRecurringTransactionORM(db *gorm.DB, opts ...gen.DOOption) plaidAccountRecurringTransactionORM {
	_plaidAccountRecurringTransactionORM := plaidAccountRecurringTransactionORM{}

	_plaidAccountRecurringTransactionORM.plaidAccountRecurringTransactionORMDo.UseDB(db, opts...)
	_plaidAccountRecurringTransactionORM.plaidAccountRecurringTransactionORMDo.UseModel(&financial_servicev1.PlaidAccountRecurringTransactionORM{})

	tableName := _plaidAccountRecurringTransactionORM.plaidAccountRecurringTransactionORMDo.TableName()
	_plaidAccountRecurringTransactionORM.ALL = field.NewAsterisk(tableName)
	_plaidAccountRecurringTransactionORM.AccountId = field.NewString(tableName, "account_id")
	_plaidAccountRecurringTransactionORM.AverageAmount = field.NewString(tableName, "average_amount")
	_plaidAccountRecurringTransactionORM.AverageAmountIsoCurrencyCode = field.NewString(tableName, "average_amount_iso_currency_code")
	_plaidAccountRecurringTransactionORM.CategoryId = field.NewString(tableName, "category_id")
	_plaidAccountRecurringTransactionORM.Description = field.NewString(tableName, "description")
	_plaidAccountRecurringTransactionORM.FirstDate = field.NewString(tableName, "first_date")
	_plaidAccountRecurringTransactionORM.Flow = field.NewString(tableName, "flow")
	_plaidAccountRecurringTransactionORM.Frequency = field.NewString(tableName, "frequency")
	_plaidAccountRecurringTransactionORM.Id = field.NewUint64(tableName, "id")
	_plaidAccountRecurringTransactionORM.IsActive = field.NewBool(tableName, "is_active")
	_plaidAccountRecurringTransactionORM.LastAmount = field.NewString(tableName, "last_amount")
	_plaidAccountRecurringTransactionORM.LastAmountIsoCurrencyCode = field.NewString(tableName, "last_amount_iso_currency_code")
	_plaidAccountRecurringTransactionORM.LastDate = field.NewString(tableName, "last_date")
	_plaidAccountRecurringTransactionORM.LinkId = field.NewUint64(tableName, "link_id")
	_plaidAccountRecurringTransactionORM.MerchantName = field.NewString(tableName, "merchant_name")
	_plaidAccountRecurringTransactionORM.PersonalFinanceCategoryDetailed = field.NewString(tableName, "personal_finance_category_detailed")
	_plaidAccountRecurringTransactionORM.PersonalFinanceCategoryPrimary = field.NewString(tableName, "personal_finance_category_primary")
	_plaidAccountRecurringTransactionORM.Status = field.NewString(tableName, "status")
	_plaidAccountRecurringTransactionORM.StreamId = field.NewString(tableName, "stream_id")
	_plaidAccountRecurringTransactionORM.Time = field.NewTime(tableName, "time")
	_plaidAccountRecurringTransactionORM.TransactionIds = field.NewString(tableName, "transaction_ids")
	_plaidAccountRecurringTransactionORM.UpdatedTime = field.NewString(tableName, "updated_time")
	_plaidAccountRecurringTransactionORM.UserId = field.NewUint64(tableName, "user_id")

	_plaidAccountRecurringTransactionORM.fillFieldMap()

	return _plaidAccountRecurringTransactionORM
}

type plaidAccountRecurringTransactionORM struct {
	plaidAccountRecurringTransactionORMDo

	ALL                             field.Asterisk
	AccountId                       field.String
	AverageAmount                   field.String
	AverageAmountIsoCurrencyCode    field.String
	CategoryId                      field.String
	Description                     field.String
	FirstDate                       field.String
	Flow                            field.String
	Frequency                       field.String
	Id                              field.Uint64
	IsActive                        field.Bool
	LastAmount                      field.String
	LastAmountIsoCurrencyCode       field.String
	LastDate                        field.String
	LinkId                          field.Uint64
	MerchantName                    field.String
	PersonalFinanceCategoryDetailed field.String
	PersonalFinanceCategoryPrimary  field.String
	Status                          field.String
	StreamId                        field.String
	Time                            field.Time
	TransactionIds                  field.String
	UpdatedTime                     field.String
	UserId                          field.Uint64

	fieldMap map[string]field.Expr
}

func (p plaidAccountRecurringTransactionORM) Table(newTableName string) *plaidAccountRecurringTransactionORM {
	p.plaidAccountRecurringTransactionORMDo.UseTable(newTableName)
	return p.updateTableName(newTableName)
}

func (p plaidAccountRecurringTransactionORM) As(alias string) *plaidAccountRecurringTransactionORM {
	p.plaidAccountRecurringTransactionORMDo.DO = *(p.plaidAccountRecurringTransactionORMDo.As(alias).(*gen.DO))
	return p.updateTableName(alias)
}

func (p *plaidAccountRecurringTransactionORM) updateTableName(table string) *plaidAccountRecurringTransactionORM {
	p.ALL = field.NewAsterisk(table)
	p.AccountId = field.NewString(table, "account_id")
	p.AverageAmount = field.NewString(table, "average_amount")
	p.AverageAmountIsoCurrencyCode = field.NewString(table, "average_amount_iso_currency_code")
	p.CategoryId = field.NewString(table, "category_id")
	p.Description = field.NewString(table, "description")
	p.FirstDate = field.NewString(table, "first_date")
	p.Flow = field.NewString(table, "flow")
	p.Frequency = field.NewString(table, "frequency")
	p.Id = field.NewUint64(table, "id")
	p.IsActive = field.NewBool(table, "is_active")
	p.LastAmount = field.NewString(table, "last_amount")
	p.LastAmountIsoCurrencyCode = field.NewString(table, "last_amount_iso_currency_code")
	p.LastDate = field.NewString(table, "last_date")
	p.LinkId = field.NewUint64(table, "link_id")
	p.MerchantName = field.NewString(table, "merchant_name")
	p.PersonalFinanceCategoryDetailed = field.NewString(table, "personal_finance_category_detailed")
	p.PersonalFinanceCategoryPrimary = field.NewString(table, "personal_finance_category_primary")
	p.Status = field.NewString(table, "status")
	p.StreamId = field.NewString(table, "stream_id")
	p.Time = field.NewTime(table, "time")
	p.TransactionIds = field.NewString(table, "transaction_ids")
	p.UpdatedTime = field.NewString(table, "updated_time")
	p.UserId = field.NewUint64(table, "user_id")

	p.fillFieldMap()

	return p
}

func (p *plaidAccountRecurringTransactionORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := p.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (p *plaidAccountRecurringTransactionORM) fillFieldMap() {
	p.fieldMap = make(map[string]field.Expr, 23)
	p.fieldMap["account_id"] = p.AccountId
	p.fieldMap["average_amount"] = p.AverageAmount
	p.fieldMap["average_amount_iso_currency_code"] = p.AverageAmountIsoCurrencyCode
	p.fieldMap["category_id"] = p.CategoryId
	p.fieldMap["description"] = p.Description
	p.fieldMap["first_date"] = p.FirstDate
	p.fieldMap["flow"] = p.Flow
	p.fieldMap["frequency"] = p.Frequency
	p.fieldMap["id"] = p.Id
	p.fieldMap["is_active"] = p.IsActive
	p.fieldMap["last_amount"] = p.LastAmount
	p.fieldMap["last_amount_iso_currency_code"] = p.LastAmountIsoCurrencyCode
	p.fieldMap["last_date"] = p.LastDate
	p.fieldMap["link_id"] = p.LinkId
	p.fieldMap["merchant_name"] = p.MerchantName
	p.fieldMap["personal_finance_category_detailed"] = p.PersonalFinanceCategoryDetailed
	p.fieldMap["personal_finance_category_primary"] = p.PersonalFinanceCategoryPrimary
	p.fieldMap["status"] = p.Status
	p.fieldMap["stream_id"] = p.StreamId
	p.fieldMap["time"] = p.Time
	p.fieldMap["transaction_ids"] = p.TransactionIds
	p.fieldMap["updated_time"] = p.UpdatedTime
	p.fieldMap["user_id"] = p.UserId
}

func (p plaidAccountRecurringTransactionORM) clone(db *gorm.DB) plaidAccountRecurringTransactionORM {
	p.plaidAccountRecurringTransactionORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return p
}

func (p plaidAccountRecurringTransactionORM) replaceDB(db *gorm.DB) plaidAccountRecurringTransactionORM {
	p.plaidAccountRecurringTransactionORMDo.ReplaceDB(db)
	return p
}

type plaidAccountRecurringTransactionORMDo struct{ gen.DO }

type IPlaidAccountRecurringTransactionORMDo interface {
	gen.SubQuery
	Debug() IPlaidAccountRecurringTransactionORMDo
	WithContext(ctx context.Context) IPlaidAccountRecurringTransactionORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IPlaidAccountRecurringTransactionORMDo
	WriteDB() IPlaidAccountRecurringTransactionORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IPlaidAccountRecurringTransactionORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IPlaidAccountRecurringTransactionORMDo
	Not(conds ...gen.Condition) IPlaidAccountRecurringTransactionORMDo
	Or(conds ...gen.Condition) IPlaidAccountRecurringTransactionORMDo
	Select(conds ...field.Expr) IPlaidAccountRecurringTransactionORMDo
	Where(conds ...gen.Condition) IPlaidAccountRecurringTransactionORMDo
	Order(conds ...field.Expr) IPlaidAccountRecurringTransactionORMDo
	Distinct(cols ...field.Expr) IPlaidAccountRecurringTransactionORMDo
	Omit(cols ...field.Expr) IPlaidAccountRecurringTransactionORMDo
	Join(table schema.Tabler, on ...field.Expr) IPlaidAccountRecurringTransactionORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IPlaidAccountRecurringTransactionORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IPlaidAccountRecurringTransactionORMDo
	Group(cols ...field.Expr) IPlaidAccountRecurringTransactionORMDo
	Having(conds ...gen.Condition) IPlaidAccountRecurringTransactionORMDo
	Limit(limit int) IPlaidAccountRecurringTransactionORMDo
	Offset(offset int) IPlaidAccountRecurringTransactionORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IPlaidAccountRecurringTransactionORMDo
	Unscoped() IPlaidAccountRecurringTransactionORMDo
	Create(values ...*financial_servicev1.PlaidAccountRecurringTransactionORM) error
	CreateInBatches(values []*financial_servicev1.PlaidAccountRecurringTransactionORM, batchSize int) error
	Save(values ...*financial_servicev1.PlaidAccountRecurringTransactionORM) error
	First() (*financial_servicev1.PlaidAccountRecurringTransactionORM, error)
	Take() (*financial_servicev1.PlaidAccountRecurringTransactionORM, error)
	Last() (*financial_servicev1.PlaidAccountRecurringTransactionORM, error)
	Find() ([]*financial_servicev1.PlaidAccountRecurringTransactionORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.PlaidAccountRecurringTransactionORM, err error)
	FindInBatches(result *[]*financial_servicev1.PlaidAccountRecurringTransactionORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*financial_servicev1.PlaidAccountRecurringTransactionORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IPlaidAccountRecurringTransactionORMDo
	Assign(attrs ...field.AssignExpr) IPlaidAccountRecurringTransactionORMDo
	Joins(fields ...field.RelationField) IPlaidAccountRecurringTransactionORMDo
	Preload(fields ...field.RelationField) IPlaidAccountRecurringTransactionORMDo
	FirstOrInit() (*financial_servicev1.PlaidAccountRecurringTransactionORM, error)
	FirstOrCreate() (*financial_servicev1.PlaidAccountRecurringTransactionORM, error)
	FindByPage(offset int, limit int) (result []*financial_servicev1.PlaidAccountRecurringTransactionORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IPlaidAccountRecurringTransactionORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result financial_servicev1.PlaidAccountRecurringTransactionORM, err error)
	GetRecordByIDs(ids []int) (result []financial_servicev1.PlaidAccountRecurringTransactionORM, err error)
	CreateRecord(item financial_servicev1.PlaidAccountRecurringTransactionORM) (err error)
	UpdateRecordByID(id int, item financial_servicev1.PlaidAccountRecurringTransactionORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.PlaidAccountRecurringTransactionORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result financial_servicev1.PlaidAccountRecurringTransactionORM, err error)
	GetByIDs(ids []uint64) (result []financial_servicev1.PlaidAccountRecurringTransactionORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (p plaidAccountRecurringTransactionORMDo) GetRecordByID(id int) (result financial_servicev1.PlaidAccountRecurringTransactionORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM plaid_account_recurring_transactions ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = p.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (p plaidAccountRecurringTransactionORMDo) GetRecordByIDs(ids []int) (result []financial_servicev1.PlaidAccountRecurringTransactionORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM plaid_account_recurring_transactions ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = p.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (p plaidAccountRecurringTransactionORMDo) CreateRecord(item financial_servicev1.PlaidAccountRecurringTransactionORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO plaid_account_recurring_transactions (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = p.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (p plaidAccountRecurringTransactionORMDo) UpdateRecordByID(id int, item financial_servicev1.PlaidAccountRecurringTransactionORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE plaid_account_recurring_transactions SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = p.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (p plaidAccountRecurringTransactionORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM plaid_account_recurring_transactions ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = p.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (p plaidAccountRecurringTransactionORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.PlaidAccountRecurringTransactionORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM plaid_account_recurring_transactions ORDER BY " + p.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = p.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (p plaidAccountRecurringTransactionORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM plaid_account_recurring_transactions ")

	var executeSQL *gorm.DB
	executeSQL = p.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (p plaidAccountRecurringTransactionORMDo) GetByID(id uint64) (result financial_servicev1.PlaidAccountRecurringTransactionORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM plaid_account_recurring_transactions ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = p.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (p plaidAccountRecurringTransactionORMDo) GetByIDs(ids []uint64) (result []financial_servicev1.PlaidAccountRecurringTransactionORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM plaid_account_recurring_transactions ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = p.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (p plaidAccountRecurringTransactionORMDo) Debug() IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.Debug())
}

func (p plaidAccountRecurringTransactionORMDo) WithContext(ctx context.Context) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.WithContext(ctx))
}

func (p plaidAccountRecurringTransactionORMDo) ReadDB() IPlaidAccountRecurringTransactionORMDo {
	return p.Clauses(dbresolver.Read)
}

func (p plaidAccountRecurringTransactionORMDo) WriteDB() IPlaidAccountRecurringTransactionORMDo {
	return p.Clauses(dbresolver.Write)
}

func (p plaidAccountRecurringTransactionORMDo) Session(config *gorm.Session) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.Session(config))
}

func (p plaidAccountRecurringTransactionORMDo) Clauses(conds ...clause.Expression) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.Clauses(conds...))
}

func (p plaidAccountRecurringTransactionORMDo) Returning(value interface{}, columns ...string) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.Returning(value, columns...))
}

func (p plaidAccountRecurringTransactionORMDo) Not(conds ...gen.Condition) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.Not(conds...))
}

func (p plaidAccountRecurringTransactionORMDo) Or(conds ...gen.Condition) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.Or(conds...))
}

func (p plaidAccountRecurringTransactionORMDo) Select(conds ...field.Expr) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.Select(conds...))
}

func (p plaidAccountRecurringTransactionORMDo) Where(conds ...gen.Condition) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.Where(conds...))
}

func (p plaidAccountRecurringTransactionORMDo) Order(conds ...field.Expr) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.Order(conds...))
}

func (p plaidAccountRecurringTransactionORMDo) Distinct(cols ...field.Expr) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.Distinct(cols...))
}

func (p plaidAccountRecurringTransactionORMDo) Omit(cols ...field.Expr) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.Omit(cols...))
}

func (p plaidAccountRecurringTransactionORMDo) Join(table schema.Tabler, on ...field.Expr) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.Join(table, on...))
}

func (p plaidAccountRecurringTransactionORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.LeftJoin(table, on...))
}

func (p plaidAccountRecurringTransactionORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.RightJoin(table, on...))
}

func (p plaidAccountRecurringTransactionORMDo) Group(cols ...field.Expr) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.Group(cols...))
}

func (p plaidAccountRecurringTransactionORMDo) Having(conds ...gen.Condition) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.Having(conds...))
}

func (p plaidAccountRecurringTransactionORMDo) Limit(limit int) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.Limit(limit))
}

func (p plaidAccountRecurringTransactionORMDo) Offset(offset int) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.Offset(offset))
}

func (p plaidAccountRecurringTransactionORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.Scopes(funcs...))
}

func (p plaidAccountRecurringTransactionORMDo) Unscoped() IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.Unscoped())
}

func (p plaidAccountRecurringTransactionORMDo) Create(values ...*financial_servicev1.PlaidAccountRecurringTransactionORM) error {
	if len(values) == 0 {
		return nil
	}
	return p.DO.Create(values)
}

func (p plaidAccountRecurringTransactionORMDo) CreateInBatches(values []*financial_servicev1.PlaidAccountRecurringTransactionORM, batchSize int) error {
	return p.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (p plaidAccountRecurringTransactionORMDo) Save(values ...*financial_servicev1.PlaidAccountRecurringTransactionORM) error {
	if len(values) == 0 {
		return nil
	}
	return p.DO.Save(values)
}

func (p plaidAccountRecurringTransactionORMDo) First() (*financial_servicev1.PlaidAccountRecurringTransactionORM, error) {
	if result, err := p.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.PlaidAccountRecurringTransactionORM), nil
	}
}

func (p plaidAccountRecurringTransactionORMDo) Take() (*financial_servicev1.PlaidAccountRecurringTransactionORM, error) {
	if result, err := p.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.PlaidAccountRecurringTransactionORM), nil
	}
}

func (p plaidAccountRecurringTransactionORMDo) Last() (*financial_servicev1.PlaidAccountRecurringTransactionORM, error) {
	if result, err := p.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.PlaidAccountRecurringTransactionORM), nil
	}
}

func (p plaidAccountRecurringTransactionORMDo) Find() ([]*financial_servicev1.PlaidAccountRecurringTransactionORM, error) {
	result, err := p.DO.Find()
	return result.([]*financial_servicev1.PlaidAccountRecurringTransactionORM), err
}

func (p plaidAccountRecurringTransactionORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.PlaidAccountRecurringTransactionORM, err error) {
	buf := make([]*financial_servicev1.PlaidAccountRecurringTransactionORM, 0, batchSize)
	err = p.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (p plaidAccountRecurringTransactionORMDo) FindInBatches(result *[]*financial_servicev1.PlaidAccountRecurringTransactionORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return p.DO.FindInBatches(result, batchSize, fc)
}

func (p plaidAccountRecurringTransactionORMDo) Attrs(attrs ...field.AssignExpr) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.Attrs(attrs...))
}

func (p plaidAccountRecurringTransactionORMDo) Assign(attrs ...field.AssignExpr) IPlaidAccountRecurringTransactionORMDo {
	return p.withDO(p.DO.Assign(attrs...))
}

func (p plaidAccountRecurringTransactionORMDo) Joins(fields ...field.RelationField) IPlaidAccountRecurringTransactionORMDo {
	for _, _f := range fields {
		p = *p.withDO(p.DO.Joins(_f))
	}
	return &p
}

func (p plaidAccountRecurringTransactionORMDo) Preload(fields ...field.RelationField) IPlaidAccountRecurringTransactionORMDo {
	for _, _f := range fields {
		p = *p.withDO(p.DO.Preload(_f))
	}
	return &p
}

func (p plaidAccountRecurringTransactionORMDo) FirstOrInit() (*financial_servicev1.PlaidAccountRecurringTransactionORM, error) {
	if result, err := p.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.PlaidAccountRecurringTransactionORM), nil
	}
}

func (p plaidAccountRecurringTransactionORMDo) FirstOrCreate() (*financial_servicev1.PlaidAccountRecurringTransactionORM, error) {
	if result, err := p.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.PlaidAccountRecurringTransactionORM), nil
	}
}

func (p plaidAccountRecurringTransactionORMDo) FindByPage(offset int, limit int) (result []*financial_servicev1.PlaidAccountRecurringTransactionORM, count int64, err error) {
	result, err = p.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = p.Offset(-1).Limit(-1).Count()
	return
}

func (p plaidAccountRecurringTransactionORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = p.Count()
	if err != nil {
		return
	}

	err = p.Offset(offset).Limit(limit).Scan(result)
	return
}

func (p plaidAccountRecurringTransactionORMDo) Scan(result interface{}) (err error) {
	return p.DO.Scan(result)
}

func (p plaidAccountRecurringTransactionORMDo) Delete(models ...*financial_servicev1.PlaidAccountRecurringTransactionORM) (result gen.ResultInfo, err error) {
	return p.DO.Delete(models)
}

func (p *plaidAccountRecurringTransactionORMDo) withDO(do gen.Dao) *plaidAccountRecurringTransactionORMDo {
	p.DO = *do.(*gen.DO)
	return p
}
