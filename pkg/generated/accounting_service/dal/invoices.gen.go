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

func newInvoiceORM(db *gorm.DB, opts ...gen.DOOption) invoiceORM {
	_invoiceORM := invoiceORM{}

	_invoiceORM.invoiceORMDo.UseDB(db, opts...)
	_invoiceORM.invoiceORMDo.UseModel(&accounting_servicev1.InvoiceORM{})

	tableName := _invoiceORM.invoiceORMDo.TableName()
	_invoiceORM.ALL = field.NewAsterisk(tableName)
	_invoiceORM.AccountingPeriod = field.NewString(tableName, "accounting_period")
	_invoiceORM.Balance = field.NewFloat32(tableName, "balance")
	_invoiceORM.Company = field.NewString(tableName, "company")
	_invoiceORM.Contact = field.NewString(tableName, "contact")
	_invoiceORM.Currency = field.NewString(tableName, "currency")
	_invoiceORM.DueDate = field.NewTime(tableName, "due_date")
	_invoiceORM.ExchangeRate = field.NewString(tableName, "exchange_rate")
	_invoiceORM.Id = field.NewUint64(tableName, "id")
	_invoiceORM.IssueDate = field.NewTime(tableName, "issue_date")
	_invoiceORM.LinkedAccountingAccountId = field.NewUint64(tableName, "linked_accounting_account_id")
	_invoiceORM.Memo = field.NewString(tableName, "memo")
	_invoiceORM.MergeRecordId = field.NewString(tableName, "merge_record_id")
	_invoiceORM.ModifiedAt = field.NewTime(tableName, "modified_at")
	_invoiceORM.Number = field.NewString(tableName, "number")
	_invoiceORM.PaidOnDate = field.NewTime(tableName, "paid_on_date")
	_invoiceORM.Payments = field.NewField(tableName, "payments")
	_invoiceORM.PurchaseOrders = field.NewField(tableName, "purchase_orders")
	_invoiceORM.RemoteId = field.NewString(tableName, "remote_id")
	_invoiceORM.RemoteUpdatedAt = field.NewTime(tableName, "remote_updated_at")
	_invoiceORM.RemoteWasDeleted = field.NewBool(tableName, "remote_was_deleted")
	_invoiceORM.Status = field.NewString(tableName, "status")
	_invoiceORM.SubTotal = field.NewFloat32(tableName, "sub_total")
	_invoiceORM.TotalAmount = field.NewFloat32(tableName, "total_amount")
	_invoiceORM.TotalDiscount = field.NewFloat32(tableName, "total_discount")
	_invoiceORM.TotalTaxAmount = field.NewFloat32(tableName, "total_tax_amount")
	_invoiceORM.TrackingCategories = field.NewField(tableName, "tracking_categories")
	_invoiceORM.Type = field.NewString(tableName, "type")
	_invoiceORM.LineItems = invoiceORMHasManyLineItems{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("LineItems", "accounting_servicev1.InvoiceLineItemORM"),
	}

	_invoiceORM.fillFieldMap()

	return _invoiceORM
}

type invoiceORM struct {
	invoiceORMDo

	ALL                       field.Asterisk
	AccountingPeriod          field.String
	Balance                   field.Float32
	Company                   field.String
	Contact                   field.String
	Currency                  field.String
	DueDate                   field.Time
	ExchangeRate              field.String
	Id                        field.Uint64
	IssueDate                 field.Time
	LinkedAccountingAccountId field.Uint64
	Memo                      field.String
	MergeRecordId             field.String
	ModifiedAt                field.Time
	Number                    field.String
	PaidOnDate                field.Time
	Payments                  field.Field
	PurchaseOrders            field.Field
	RemoteId                  field.String
	RemoteUpdatedAt           field.Time
	RemoteWasDeleted          field.Bool
	Status                    field.String
	SubTotal                  field.Float32
	TotalAmount               field.Float32
	TotalDiscount             field.Float32
	TotalTaxAmount            field.Float32
	TrackingCategories        field.Field
	Type                      field.String
	LineItems                 invoiceORMHasManyLineItems

	fieldMap map[string]field.Expr
}

func (i invoiceORM) Table(newTableName string) *invoiceORM {
	i.invoiceORMDo.UseTable(newTableName)
	return i.updateTableName(newTableName)
}

func (i invoiceORM) As(alias string) *invoiceORM {
	i.invoiceORMDo.DO = *(i.invoiceORMDo.As(alias).(*gen.DO))
	return i.updateTableName(alias)
}

func (i *invoiceORM) updateTableName(table string) *invoiceORM {
	i.ALL = field.NewAsterisk(table)
	i.AccountingPeriod = field.NewString(table, "accounting_period")
	i.Balance = field.NewFloat32(table, "balance")
	i.Company = field.NewString(table, "company")
	i.Contact = field.NewString(table, "contact")
	i.Currency = field.NewString(table, "currency")
	i.DueDate = field.NewTime(table, "due_date")
	i.ExchangeRate = field.NewString(table, "exchange_rate")
	i.Id = field.NewUint64(table, "id")
	i.IssueDate = field.NewTime(table, "issue_date")
	i.LinkedAccountingAccountId = field.NewUint64(table, "linked_accounting_account_id")
	i.Memo = field.NewString(table, "memo")
	i.MergeRecordId = field.NewString(table, "merge_record_id")
	i.ModifiedAt = field.NewTime(table, "modified_at")
	i.Number = field.NewString(table, "number")
	i.PaidOnDate = field.NewTime(table, "paid_on_date")
	i.Payments = field.NewField(table, "payments")
	i.PurchaseOrders = field.NewField(table, "purchase_orders")
	i.RemoteId = field.NewString(table, "remote_id")
	i.RemoteUpdatedAt = field.NewTime(table, "remote_updated_at")
	i.RemoteWasDeleted = field.NewBool(table, "remote_was_deleted")
	i.Status = field.NewString(table, "status")
	i.SubTotal = field.NewFloat32(table, "sub_total")
	i.TotalAmount = field.NewFloat32(table, "total_amount")
	i.TotalDiscount = field.NewFloat32(table, "total_discount")
	i.TotalTaxAmount = field.NewFloat32(table, "total_tax_amount")
	i.TrackingCategories = field.NewField(table, "tracking_categories")
	i.Type = field.NewString(table, "type")

	i.fillFieldMap()

	return i
}

func (i *invoiceORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := i.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (i *invoiceORM) fillFieldMap() {
	i.fieldMap = make(map[string]field.Expr, 28)
	i.fieldMap["accounting_period"] = i.AccountingPeriod
	i.fieldMap["balance"] = i.Balance
	i.fieldMap["company"] = i.Company
	i.fieldMap["contact"] = i.Contact
	i.fieldMap["currency"] = i.Currency
	i.fieldMap["due_date"] = i.DueDate
	i.fieldMap["exchange_rate"] = i.ExchangeRate
	i.fieldMap["id"] = i.Id
	i.fieldMap["issue_date"] = i.IssueDate
	i.fieldMap["linked_accounting_account_id"] = i.LinkedAccountingAccountId
	i.fieldMap["memo"] = i.Memo
	i.fieldMap["merge_record_id"] = i.MergeRecordId
	i.fieldMap["modified_at"] = i.ModifiedAt
	i.fieldMap["number"] = i.Number
	i.fieldMap["paid_on_date"] = i.PaidOnDate
	i.fieldMap["payments"] = i.Payments
	i.fieldMap["purchase_orders"] = i.PurchaseOrders
	i.fieldMap["remote_id"] = i.RemoteId
	i.fieldMap["remote_updated_at"] = i.RemoteUpdatedAt
	i.fieldMap["remote_was_deleted"] = i.RemoteWasDeleted
	i.fieldMap["status"] = i.Status
	i.fieldMap["sub_total"] = i.SubTotal
	i.fieldMap["total_amount"] = i.TotalAmount
	i.fieldMap["total_discount"] = i.TotalDiscount
	i.fieldMap["total_tax_amount"] = i.TotalTaxAmount
	i.fieldMap["tracking_categories"] = i.TrackingCategories
	i.fieldMap["type"] = i.Type

}

func (i invoiceORM) clone(db *gorm.DB) invoiceORM {
	i.invoiceORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return i
}

func (i invoiceORM) replaceDB(db *gorm.DB) invoiceORM {
	i.invoiceORMDo.ReplaceDB(db)
	return i
}

type invoiceORMHasManyLineItems struct {
	db *gorm.DB

	field.RelationField
}

func (a invoiceORMHasManyLineItems) Where(conds ...field.Expr) *invoiceORMHasManyLineItems {
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

func (a invoiceORMHasManyLineItems) WithContext(ctx context.Context) *invoiceORMHasManyLineItems {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a invoiceORMHasManyLineItems) Session(session *gorm.Session) *invoiceORMHasManyLineItems {
	a.db = a.db.Session(session)
	return &a
}

func (a invoiceORMHasManyLineItems) Model(m *accounting_servicev1.InvoiceORM) *invoiceORMHasManyLineItemsTx {
	return &invoiceORMHasManyLineItemsTx{a.db.Model(m).Association(a.Name())}
}

type invoiceORMHasManyLineItemsTx struct{ tx *gorm.Association }

func (a invoiceORMHasManyLineItemsTx) Find() (result []*accounting_servicev1.InvoiceLineItemORM, err error) {
	return result, a.tx.Find(&result)
}

func (a invoiceORMHasManyLineItemsTx) Append(values ...*accounting_servicev1.InvoiceLineItemORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a invoiceORMHasManyLineItemsTx) Replace(values ...*accounting_servicev1.InvoiceLineItemORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a invoiceORMHasManyLineItemsTx) Delete(values ...*accounting_servicev1.InvoiceLineItemORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a invoiceORMHasManyLineItemsTx) Clear() error {
	return a.tx.Clear()
}

func (a invoiceORMHasManyLineItemsTx) Count() int64 {
	return a.tx.Count()
}

type invoiceORMDo struct{ gen.DO }

type IInvoiceORMDo interface {
	gen.SubQuery
	Debug() IInvoiceORMDo
	WithContext(ctx context.Context) IInvoiceORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IInvoiceORMDo
	WriteDB() IInvoiceORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IInvoiceORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IInvoiceORMDo
	Not(conds ...gen.Condition) IInvoiceORMDo
	Or(conds ...gen.Condition) IInvoiceORMDo
	Select(conds ...field.Expr) IInvoiceORMDo
	Where(conds ...gen.Condition) IInvoiceORMDo
	Order(conds ...field.Expr) IInvoiceORMDo
	Distinct(cols ...field.Expr) IInvoiceORMDo
	Omit(cols ...field.Expr) IInvoiceORMDo
	Join(table schema.Tabler, on ...field.Expr) IInvoiceORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IInvoiceORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IInvoiceORMDo
	Group(cols ...field.Expr) IInvoiceORMDo
	Having(conds ...gen.Condition) IInvoiceORMDo
	Limit(limit int) IInvoiceORMDo
	Offset(offset int) IInvoiceORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IInvoiceORMDo
	Unscoped() IInvoiceORMDo
	Create(values ...*accounting_servicev1.InvoiceORM) error
	CreateInBatches(values []*accounting_servicev1.InvoiceORM, batchSize int) error
	Save(values ...*accounting_servicev1.InvoiceORM) error
	First() (*accounting_servicev1.InvoiceORM, error)
	Take() (*accounting_servicev1.InvoiceORM, error)
	Last() (*accounting_servicev1.InvoiceORM, error)
	Find() ([]*accounting_servicev1.InvoiceORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*accounting_servicev1.InvoiceORM, err error)
	FindInBatches(result *[]*accounting_servicev1.InvoiceORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*accounting_servicev1.InvoiceORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IInvoiceORMDo
	Assign(attrs ...field.AssignExpr) IInvoiceORMDo
	Joins(fields ...field.RelationField) IInvoiceORMDo
	Preload(fields ...field.RelationField) IInvoiceORMDo
	FirstOrInit() (*accounting_servicev1.InvoiceORM, error)
	FirstOrCreate() (*accounting_servicev1.InvoiceORM, error)
	FindByPage(offset int, limit int) (result []*accounting_servicev1.InvoiceORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IInvoiceORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result accounting_servicev1.InvoiceORM, err error)
	GetRecordByIDs(ids []int) (result []accounting_servicev1.InvoiceORM, err error)
	CreateRecord(item accounting_servicev1.InvoiceORM) (err error)
	UpdateRecordByID(id int, item accounting_servicev1.InvoiceORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []accounting_servicev1.InvoiceORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result accounting_servicev1.InvoiceORM, err error)
	GetByIDs(ids []uint64) (result []accounting_servicev1.InvoiceORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (i invoiceORMDo) GetRecordByID(id int) (result accounting_servicev1.InvoiceORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM invoices ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = i.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (i invoiceORMDo) GetRecordByIDs(ids []int) (result []accounting_servicev1.InvoiceORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM invoices ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = i.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (i invoiceORMDo) CreateRecord(item accounting_servicev1.InvoiceORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO invoices (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = i.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (i invoiceORMDo) UpdateRecordByID(id int, item accounting_servicev1.InvoiceORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE invoices SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = i.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (i invoiceORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM invoices ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = i.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (i invoiceORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []accounting_servicev1.InvoiceORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM invoices ORDER BY " + i.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = i.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (i invoiceORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM invoices ")

	var executeSQL *gorm.DB
	executeSQL = i.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (i invoiceORMDo) GetByID(id uint64) (result accounting_servicev1.InvoiceORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM invoices ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = i.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (i invoiceORMDo) GetByIDs(ids []uint64) (result []accounting_servicev1.InvoiceORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM invoices ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = i.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (i invoiceORMDo) Debug() IInvoiceORMDo {
	return i.withDO(i.DO.Debug())
}

func (i invoiceORMDo) WithContext(ctx context.Context) IInvoiceORMDo {
	return i.withDO(i.DO.WithContext(ctx))
}

func (i invoiceORMDo) ReadDB() IInvoiceORMDo {
	return i.Clauses(dbresolver.Read)
}

func (i invoiceORMDo) WriteDB() IInvoiceORMDo {
	return i.Clauses(dbresolver.Write)
}

func (i invoiceORMDo) Session(config *gorm.Session) IInvoiceORMDo {
	return i.withDO(i.DO.Session(config))
}

func (i invoiceORMDo) Clauses(conds ...clause.Expression) IInvoiceORMDo {
	return i.withDO(i.DO.Clauses(conds...))
}

func (i invoiceORMDo) Returning(value interface{}, columns ...string) IInvoiceORMDo {
	return i.withDO(i.DO.Returning(value, columns...))
}

func (i invoiceORMDo) Not(conds ...gen.Condition) IInvoiceORMDo {
	return i.withDO(i.DO.Not(conds...))
}

func (i invoiceORMDo) Or(conds ...gen.Condition) IInvoiceORMDo {
	return i.withDO(i.DO.Or(conds...))
}

func (i invoiceORMDo) Select(conds ...field.Expr) IInvoiceORMDo {
	return i.withDO(i.DO.Select(conds...))
}

func (i invoiceORMDo) Where(conds ...gen.Condition) IInvoiceORMDo {
	return i.withDO(i.DO.Where(conds...))
}

func (i invoiceORMDo) Order(conds ...field.Expr) IInvoiceORMDo {
	return i.withDO(i.DO.Order(conds...))
}

func (i invoiceORMDo) Distinct(cols ...field.Expr) IInvoiceORMDo {
	return i.withDO(i.DO.Distinct(cols...))
}

func (i invoiceORMDo) Omit(cols ...field.Expr) IInvoiceORMDo {
	return i.withDO(i.DO.Omit(cols...))
}

func (i invoiceORMDo) Join(table schema.Tabler, on ...field.Expr) IInvoiceORMDo {
	return i.withDO(i.DO.Join(table, on...))
}

func (i invoiceORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IInvoiceORMDo {
	return i.withDO(i.DO.LeftJoin(table, on...))
}

func (i invoiceORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IInvoiceORMDo {
	return i.withDO(i.DO.RightJoin(table, on...))
}

func (i invoiceORMDo) Group(cols ...field.Expr) IInvoiceORMDo {
	return i.withDO(i.DO.Group(cols...))
}

func (i invoiceORMDo) Having(conds ...gen.Condition) IInvoiceORMDo {
	return i.withDO(i.DO.Having(conds...))
}

func (i invoiceORMDo) Limit(limit int) IInvoiceORMDo {
	return i.withDO(i.DO.Limit(limit))
}

func (i invoiceORMDo) Offset(offset int) IInvoiceORMDo {
	return i.withDO(i.DO.Offset(offset))
}

func (i invoiceORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IInvoiceORMDo {
	return i.withDO(i.DO.Scopes(funcs...))
}

func (i invoiceORMDo) Unscoped() IInvoiceORMDo {
	return i.withDO(i.DO.Unscoped())
}

func (i invoiceORMDo) Create(values ...*accounting_servicev1.InvoiceORM) error {
	if len(values) == 0 {
		return nil
	}
	return i.DO.Create(values)
}

func (i invoiceORMDo) CreateInBatches(values []*accounting_servicev1.InvoiceORM, batchSize int) error {
	return i.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (i invoiceORMDo) Save(values ...*accounting_servicev1.InvoiceORM) error {
	if len(values) == 0 {
		return nil
	}
	return i.DO.Save(values)
}

func (i invoiceORMDo) First() (*accounting_servicev1.InvoiceORM, error) {
	if result, err := i.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.InvoiceORM), nil
	}
}

func (i invoiceORMDo) Take() (*accounting_servicev1.InvoiceORM, error) {
	if result, err := i.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.InvoiceORM), nil
	}
}

func (i invoiceORMDo) Last() (*accounting_servicev1.InvoiceORM, error) {
	if result, err := i.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.InvoiceORM), nil
	}
}

func (i invoiceORMDo) Find() ([]*accounting_servicev1.InvoiceORM, error) {
	result, err := i.DO.Find()
	return result.([]*accounting_servicev1.InvoiceORM), err
}

func (i invoiceORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*accounting_servicev1.InvoiceORM, err error) {
	buf := make([]*accounting_servicev1.InvoiceORM, 0, batchSize)
	err = i.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (i invoiceORMDo) FindInBatches(result *[]*accounting_servicev1.InvoiceORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return i.DO.FindInBatches(result, batchSize, fc)
}

func (i invoiceORMDo) Attrs(attrs ...field.AssignExpr) IInvoiceORMDo {
	return i.withDO(i.DO.Attrs(attrs...))
}

func (i invoiceORMDo) Assign(attrs ...field.AssignExpr) IInvoiceORMDo {
	return i.withDO(i.DO.Assign(attrs...))
}

func (i invoiceORMDo) Joins(fields ...field.RelationField) IInvoiceORMDo {
	for _, _f := range fields {
		i = *i.withDO(i.DO.Joins(_f))
	}
	return &i
}

func (i invoiceORMDo) Preload(fields ...field.RelationField) IInvoiceORMDo {
	for _, _f := range fields {
		i = *i.withDO(i.DO.Preload(_f))
	}
	return &i
}

func (i invoiceORMDo) FirstOrInit() (*accounting_servicev1.InvoiceORM, error) {
	if result, err := i.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.InvoiceORM), nil
	}
}

func (i invoiceORMDo) FirstOrCreate() (*accounting_servicev1.InvoiceORM, error) {
	if result, err := i.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.InvoiceORM), nil
	}
}

func (i invoiceORMDo) FindByPage(offset int, limit int) (result []*accounting_servicev1.InvoiceORM, count int64, err error) {
	result, err = i.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = i.Offset(-1).Limit(-1).Count()
	return
}

func (i invoiceORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = i.Count()
	if err != nil {
		return
	}

	err = i.Offset(offset).Limit(limit).Scan(result)
	return
}

func (i invoiceORMDo) Scan(result interface{}) (err error) {
	return i.DO.Scan(result)
}

func (i invoiceORMDo) Delete(models ...*accounting_servicev1.InvoiceORM) (result gen.ResultInfo, err error) {
	return i.DO.Delete(models)
}

func (i *invoiceORMDo) withDO(do gen.Dao) *invoiceORMDo {
	i.DO = *do.(*gen.DO)
	return i
}
