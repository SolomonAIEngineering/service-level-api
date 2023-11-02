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

func newBusinessTransactionORM(db *gorm.DB, opts ...gen.DOOption) businessTransactionORM {
	_businessTransactionORM := businessTransactionORM{}

	_businessTransactionORM.businessTransactionORMDo.UseDB(db, opts...)
	_businessTransactionORM.businessTransactionORMDo.UseModel(&financial_servicev1.BusinessTransactionORM{})

	tableName := _businessTransactionORM.businessTransactionORMDo.TableName()
	_businessTransactionORM.ALL = field.NewAsterisk(tableName)
	_businessTransactionORM.Account = field.NewString(tableName, "account")
	_businessTransactionORM.AccountingPeriod = field.NewString(tableName, "accounting_period")
	_businessTransactionORM.Company = field.NewString(tableName, "company")
	_businessTransactionORM.Contact = field.NewString(tableName, "contact")
	_businessTransactionORM.Currency = field.NewString(tableName, "currency")
	_businessTransactionORM.ExchangeRate = field.NewString(tableName, "exchange_rate")
	_businessTransactionORM.Id = field.NewUint64(tableName, "id")
	_businessTransactionORM.MergeAccountId = field.NewString(tableName, "merge_account_id")
	_businessTransactionORM.ModifiedAt = field.NewTime(tableName, "modified_at")
	_businessTransactionORM.Number = field.NewString(tableName, "number")
	_businessTransactionORM.RemoteId = field.NewString(tableName, "remote_id")
	_businessTransactionORM.RemoteWasDeleted = field.NewBool(tableName, "remote_was_deleted")
	_businessTransactionORM.TotalAmount = field.NewString(tableName, "total_amount")
	_businessTransactionORM.TrackingCategories = field.NewField(tableName, "tracking_categories")
	_businessTransactionORM.TransactionDate = field.NewTime(tableName, "transaction_date")
	_businessTransactionORM.TransactionDetailsId = field.NewUint64(tableName, "transaction_details_id")
	_businessTransactionORM.TransactionType = field.NewString(tableName, "transaction_type")
	_businessTransactionORM.LineItems = businessTransactionORMHasManyLineItems{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("LineItems", "financial_servicev1.TransactionLineItemORM"),
	}

	_businessTransactionORM.fillFieldMap()

	return _businessTransactionORM
}

type businessTransactionORM struct {
	businessTransactionORMDo

	ALL                  field.Asterisk
	Account              field.String
	AccountingPeriod     field.String
	Company              field.String
	Contact              field.String
	Currency             field.String
	ExchangeRate         field.String
	Id                   field.Uint64
	MergeAccountId       field.String
	ModifiedAt           field.Time
	Number               field.String
	RemoteId             field.String
	RemoteWasDeleted     field.Bool
	TotalAmount          field.String
	TrackingCategories   field.Field
	TransactionDate      field.Time
	TransactionDetailsId field.Uint64
	TransactionType      field.String
	LineItems            businessTransactionORMHasManyLineItems

	fieldMap map[string]field.Expr
}

func (b businessTransactionORM) Table(newTableName string) *businessTransactionORM {
	b.businessTransactionORMDo.UseTable(newTableName)
	return b.updateTableName(newTableName)
}

func (b businessTransactionORM) As(alias string) *businessTransactionORM {
	b.businessTransactionORMDo.DO = *(b.businessTransactionORMDo.As(alias).(*gen.DO))
	return b.updateTableName(alias)
}

func (b *businessTransactionORM) updateTableName(table string) *businessTransactionORM {
	b.ALL = field.NewAsterisk(table)
	b.Account = field.NewString(table, "account")
	b.AccountingPeriod = field.NewString(table, "accounting_period")
	b.Company = field.NewString(table, "company")
	b.Contact = field.NewString(table, "contact")
	b.Currency = field.NewString(table, "currency")
	b.ExchangeRate = field.NewString(table, "exchange_rate")
	b.Id = field.NewUint64(table, "id")
	b.MergeAccountId = field.NewString(table, "merge_account_id")
	b.ModifiedAt = field.NewTime(table, "modified_at")
	b.Number = field.NewString(table, "number")
	b.RemoteId = field.NewString(table, "remote_id")
	b.RemoteWasDeleted = field.NewBool(table, "remote_was_deleted")
	b.TotalAmount = field.NewString(table, "total_amount")
	b.TrackingCategories = field.NewField(table, "tracking_categories")
	b.TransactionDate = field.NewTime(table, "transaction_date")
	b.TransactionDetailsId = field.NewUint64(table, "transaction_details_id")
	b.TransactionType = field.NewString(table, "transaction_type")

	b.fillFieldMap()

	return b
}

func (b *businessTransactionORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := b.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (b *businessTransactionORM) fillFieldMap() {
	b.fieldMap = make(map[string]field.Expr, 18)
	b.fieldMap["account"] = b.Account
	b.fieldMap["accounting_period"] = b.AccountingPeriod
	b.fieldMap["company"] = b.Company
	b.fieldMap["contact"] = b.Contact
	b.fieldMap["currency"] = b.Currency
	b.fieldMap["exchange_rate"] = b.ExchangeRate
	b.fieldMap["id"] = b.Id
	b.fieldMap["merge_account_id"] = b.MergeAccountId
	b.fieldMap["modified_at"] = b.ModifiedAt
	b.fieldMap["number"] = b.Number
	b.fieldMap["remote_id"] = b.RemoteId
	b.fieldMap["remote_was_deleted"] = b.RemoteWasDeleted
	b.fieldMap["total_amount"] = b.TotalAmount
	b.fieldMap["tracking_categories"] = b.TrackingCategories
	b.fieldMap["transaction_date"] = b.TransactionDate
	b.fieldMap["transaction_details_id"] = b.TransactionDetailsId
	b.fieldMap["transaction_type"] = b.TransactionType

}

func (b businessTransactionORM) clone(db *gorm.DB) businessTransactionORM {
	b.businessTransactionORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return b
}

func (b businessTransactionORM) replaceDB(db *gorm.DB) businessTransactionORM {
	b.businessTransactionORMDo.ReplaceDB(db)
	return b
}

type businessTransactionORMHasManyLineItems struct {
	db *gorm.DB

	field.RelationField
}

func (a businessTransactionORMHasManyLineItems) Where(conds ...field.Expr) *businessTransactionORMHasManyLineItems {
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

func (a businessTransactionORMHasManyLineItems) WithContext(ctx context.Context) *businessTransactionORMHasManyLineItems {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a businessTransactionORMHasManyLineItems) Session(session *gorm.Session) *businessTransactionORMHasManyLineItems {
	a.db = a.db.Session(session)
	return &a
}

func (a businessTransactionORMHasManyLineItems) Model(m *financial_servicev1.BusinessTransactionORM) *businessTransactionORMHasManyLineItemsTx {
	return &businessTransactionORMHasManyLineItemsTx{a.db.Model(m).Association(a.Name())}
}

type businessTransactionORMHasManyLineItemsTx struct{ tx *gorm.Association }

func (a businessTransactionORMHasManyLineItemsTx) Find() (result []*financial_servicev1.TransactionLineItemORM, err error) {
	return result, a.tx.Find(&result)
}

func (a businessTransactionORMHasManyLineItemsTx) Append(values ...*financial_servicev1.TransactionLineItemORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a businessTransactionORMHasManyLineItemsTx) Replace(values ...*financial_servicev1.TransactionLineItemORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a businessTransactionORMHasManyLineItemsTx) Delete(values ...*financial_servicev1.TransactionLineItemORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a businessTransactionORMHasManyLineItemsTx) Clear() error {
	return a.tx.Clear()
}

func (a businessTransactionORMHasManyLineItemsTx) Count() int64 {
	return a.tx.Count()
}

type businessTransactionORMDo struct{ gen.DO }

type IBusinessTransactionORMDo interface {
	gen.SubQuery
	Debug() IBusinessTransactionORMDo
	WithContext(ctx context.Context) IBusinessTransactionORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IBusinessTransactionORMDo
	WriteDB() IBusinessTransactionORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IBusinessTransactionORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IBusinessTransactionORMDo
	Not(conds ...gen.Condition) IBusinessTransactionORMDo
	Or(conds ...gen.Condition) IBusinessTransactionORMDo
	Select(conds ...field.Expr) IBusinessTransactionORMDo
	Where(conds ...gen.Condition) IBusinessTransactionORMDo
	Order(conds ...field.Expr) IBusinessTransactionORMDo
	Distinct(cols ...field.Expr) IBusinessTransactionORMDo
	Omit(cols ...field.Expr) IBusinessTransactionORMDo
	Join(table schema.Tabler, on ...field.Expr) IBusinessTransactionORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IBusinessTransactionORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IBusinessTransactionORMDo
	Group(cols ...field.Expr) IBusinessTransactionORMDo
	Having(conds ...gen.Condition) IBusinessTransactionORMDo
	Limit(limit int) IBusinessTransactionORMDo
	Offset(offset int) IBusinessTransactionORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IBusinessTransactionORMDo
	Unscoped() IBusinessTransactionORMDo
	Create(values ...*financial_servicev1.BusinessTransactionORM) error
	CreateInBatches(values []*financial_servicev1.BusinessTransactionORM, batchSize int) error
	Save(values ...*financial_servicev1.BusinessTransactionORM) error
	First() (*financial_servicev1.BusinessTransactionORM, error)
	Take() (*financial_servicev1.BusinessTransactionORM, error)
	Last() (*financial_servicev1.BusinessTransactionORM, error)
	Find() ([]*financial_servicev1.BusinessTransactionORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.BusinessTransactionORM, err error)
	FindInBatches(result *[]*financial_servicev1.BusinessTransactionORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*financial_servicev1.BusinessTransactionORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IBusinessTransactionORMDo
	Assign(attrs ...field.AssignExpr) IBusinessTransactionORMDo
	Joins(fields ...field.RelationField) IBusinessTransactionORMDo
	Preload(fields ...field.RelationField) IBusinessTransactionORMDo
	FirstOrInit() (*financial_servicev1.BusinessTransactionORM, error)
	FirstOrCreate() (*financial_servicev1.BusinessTransactionORM, error)
	FindByPage(offset int, limit int) (result []*financial_servicev1.BusinessTransactionORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IBusinessTransactionORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result financial_servicev1.BusinessTransactionORM, err error)
	GetRecordByIDs(ids []int) (result []financial_servicev1.BusinessTransactionORM, err error)
	CreateRecord(item financial_servicev1.BusinessTransactionORM) (err error)
	UpdateRecordByID(id int, item financial_servicev1.BusinessTransactionORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.BusinessTransactionORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result financial_servicev1.BusinessTransactionORM, err error)
	GetByIDs(ids []uint64) (result []financial_servicev1.BusinessTransactionORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (b businessTransactionORMDo) GetRecordByID(id int) (result financial_servicev1.BusinessTransactionORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM business_transactions ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (b businessTransactionORMDo) GetRecordByIDs(ids []int) (result []financial_servicev1.BusinessTransactionORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM business_transactions ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (b businessTransactionORMDo) CreateRecord(item financial_servicev1.BusinessTransactionORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO business_transactions (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (b businessTransactionORMDo) UpdateRecordByID(id int, item financial_servicev1.BusinessTransactionORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE business_transactions SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (b businessTransactionORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM business_transactions ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (b businessTransactionORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.BusinessTransactionORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM business_transactions ORDER BY " + b.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (b businessTransactionORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM business_transactions ")

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (b businessTransactionORMDo) GetByID(id uint64) (result financial_servicev1.BusinessTransactionORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM business_transactions ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (b businessTransactionORMDo) GetByIDs(ids []uint64) (result []financial_servicev1.BusinessTransactionORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM business_transactions ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (b businessTransactionORMDo) Debug() IBusinessTransactionORMDo {
	return b.withDO(b.DO.Debug())
}

func (b businessTransactionORMDo) WithContext(ctx context.Context) IBusinessTransactionORMDo {
	return b.withDO(b.DO.WithContext(ctx))
}

func (b businessTransactionORMDo) ReadDB() IBusinessTransactionORMDo {
	return b.Clauses(dbresolver.Read)
}

func (b businessTransactionORMDo) WriteDB() IBusinessTransactionORMDo {
	return b.Clauses(dbresolver.Write)
}

func (b businessTransactionORMDo) Session(config *gorm.Session) IBusinessTransactionORMDo {
	return b.withDO(b.DO.Session(config))
}

func (b businessTransactionORMDo) Clauses(conds ...clause.Expression) IBusinessTransactionORMDo {
	return b.withDO(b.DO.Clauses(conds...))
}

func (b businessTransactionORMDo) Returning(value interface{}, columns ...string) IBusinessTransactionORMDo {
	return b.withDO(b.DO.Returning(value, columns...))
}

func (b businessTransactionORMDo) Not(conds ...gen.Condition) IBusinessTransactionORMDo {
	return b.withDO(b.DO.Not(conds...))
}

func (b businessTransactionORMDo) Or(conds ...gen.Condition) IBusinessTransactionORMDo {
	return b.withDO(b.DO.Or(conds...))
}

func (b businessTransactionORMDo) Select(conds ...field.Expr) IBusinessTransactionORMDo {
	return b.withDO(b.DO.Select(conds...))
}

func (b businessTransactionORMDo) Where(conds ...gen.Condition) IBusinessTransactionORMDo {
	return b.withDO(b.DO.Where(conds...))
}

func (b businessTransactionORMDo) Order(conds ...field.Expr) IBusinessTransactionORMDo {
	return b.withDO(b.DO.Order(conds...))
}

func (b businessTransactionORMDo) Distinct(cols ...field.Expr) IBusinessTransactionORMDo {
	return b.withDO(b.DO.Distinct(cols...))
}

func (b businessTransactionORMDo) Omit(cols ...field.Expr) IBusinessTransactionORMDo {
	return b.withDO(b.DO.Omit(cols...))
}

func (b businessTransactionORMDo) Join(table schema.Tabler, on ...field.Expr) IBusinessTransactionORMDo {
	return b.withDO(b.DO.Join(table, on...))
}

func (b businessTransactionORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IBusinessTransactionORMDo {
	return b.withDO(b.DO.LeftJoin(table, on...))
}

func (b businessTransactionORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IBusinessTransactionORMDo {
	return b.withDO(b.DO.RightJoin(table, on...))
}

func (b businessTransactionORMDo) Group(cols ...field.Expr) IBusinessTransactionORMDo {
	return b.withDO(b.DO.Group(cols...))
}

func (b businessTransactionORMDo) Having(conds ...gen.Condition) IBusinessTransactionORMDo {
	return b.withDO(b.DO.Having(conds...))
}

func (b businessTransactionORMDo) Limit(limit int) IBusinessTransactionORMDo {
	return b.withDO(b.DO.Limit(limit))
}

func (b businessTransactionORMDo) Offset(offset int) IBusinessTransactionORMDo {
	return b.withDO(b.DO.Offset(offset))
}

func (b businessTransactionORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IBusinessTransactionORMDo {
	return b.withDO(b.DO.Scopes(funcs...))
}

func (b businessTransactionORMDo) Unscoped() IBusinessTransactionORMDo {
	return b.withDO(b.DO.Unscoped())
}

func (b businessTransactionORMDo) Create(values ...*financial_servicev1.BusinessTransactionORM) error {
	if len(values) == 0 {
		return nil
	}
	return b.DO.Create(values)
}

func (b businessTransactionORMDo) CreateInBatches(values []*financial_servicev1.BusinessTransactionORM, batchSize int) error {
	return b.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (b businessTransactionORMDo) Save(values ...*financial_servicev1.BusinessTransactionORM) error {
	if len(values) == 0 {
		return nil
	}
	return b.DO.Save(values)
}

func (b businessTransactionORMDo) First() (*financial_servicev1.BusinessTransactionORM, error) {
	if result, err := b.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.BusinessTransactionORM), nil
	}
}

func (b businessTransactionORMDo) Take() (*financial_servicev1.BusinessTransactionORM, error) {
	if result, err := b.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.BusinessTransactionORM), nil
	}
}

func (b businessTransactionORMDo) Last() (*financial_servicev1.BusinessTransactionORM, error) {
	if result, err := b.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.BusinessTransactionORM), nil
	}
}

func (b businessTransactionORMDo) Find() ([]*financial_servicev1.BusinessTransactionORM, error) {
	result, err := b.DO.Find()
	return result.([]*financial_servicev1.BusinessTransactionORM), err
}

func (b businessTransactionORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.BusinessTransactionORM, err error) {
	buf := make([]*financial_servicev1.BusinessTransactionORM, 0, batchSize)
	err = b.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (b businessTransactionORMDo) FindInBatches(result *[]*financial_servicev1.BusinessTransactionORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return b.DO.FindInBatches(result, batchSize, fc)
}

func (b businessTransactionORMDo) Attrs(attrs ...field.AssignExpr) IBusinessTransactionORMDo {
	return b.withDO(b.DO.Attrs(attrs...))
}

func (b businessTransactionORMDo) Assign(attrs ...field.AssignExpr) IBusinessTransactionORMDo {
	return b.withDO(b.DO.Assign(attrs...))
}

func (b businessTransactionORMDo) Joins(fields ...field.RelationField) IBusinessTransactionORMDo {
	for _, _f := range fields {
		b = *b.withDO(b.DO.Joins(_f))
	}
	return &b
}

func (b businessTransactionORMDo) Preload(fields ...field.RelationField) IBusinessTransactionORMDo {
	for _, _f := range fields {
		b = *b.withDO(b.DO.Preload(_f))
	}
	return &b
}

func (b businessTransactionORMDo) FirstOrInit() (*financial_servicev1.BusinessTransactionORM, error) {
	if result, err := b.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.BusinessTransactionORM), nil
	}
}

func (b businessTransactionORMDo) FirstOrCreate() (*financial_servicev1.BusinessTransactionORM, error) {
	if result, err := b.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.BusinessTransactionORM), nil
	}
}

func (b businessTransactionORMDo) FindByPage(offset int, limit int) (result []*financial_servicev1.BusinessTransactionORM, count int64, err error) {
	result, err = b.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = b.Offset(-1).Limit(-1).Count()
	return
}

func (b businessTransactionORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = b.Count()
	if err != nil {
		return
	}

	err = b.Offset(offset).Limit(limit).Scan(result)
	return
}

func (b businessTransactionORMDo) Scan(result interface{}) (err error) {
	return b.DO.Scan(result)
}

func (b businessTransactionORMDo) Delete(models ...*financial_servicev1.BusinessTransactionORM) (result gen.ResultInfo, err error) {
	return b.DO.Delete(models)
}

func (b *businessTransactionORMDo) withDO(do gen.Dao) *businessTransactionORMDo {
	b.DO = *do.(*gen.DO)
	return b
}
