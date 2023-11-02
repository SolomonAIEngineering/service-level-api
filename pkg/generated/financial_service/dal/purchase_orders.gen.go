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

func newPurchaseOrderORM(db *gorm.DB, opts ...gen.DOOption) purchaseOrderORM {
	_purchaseOrderORM := purchaseOrderORM{}

	_purchaseOrderORM.purchaseOrderORMDo.UseDB(db, opts...)
	_purchaseOrderORM.purchaseOrderORMDo.UseModel(&financial_servicev1.PurchaseOrderORM{})

	tableName := _purchaseOrderORM.purchaseOrderORMDo.TableName()
	_purchaseOrderORM.ALL = field.NewAsterisk(tableName)
	_purchaseOrderORM.AccountingPeriod = field.NewString(tableName, "accounting_period")
	_purchaseOrderORM.Company = field.NewString(tableName, "company")
	_purchaseOrderORM.Currency = field.NewString(tableName, "currency")
	_purchaseOrderORM.Customer = field.NewString(tableName, "customer")
	_purchaseOrderORM.DeliveryDate = field.NewTime(tableName, "delivery_date")
	_purchaseOrderORM.ExchangeRate = field.NewString(tableName, "exchange_rate")
	_purchaseOrderORM.Id = field.NewUint64(tableName, "id")
	_purchaseOrderORM.IssueDate = field.NewTime(tableName, "issue_date")
	_purchaseOrderORM.LinkedAccountingAccountId = field.NewUint64(tableName, "linked_accounting_account_id")
	_purchaseOrderORM.Memo = field.NewString(tableName, "memo")
	_purchaseOrderORM.MergeAccountId = field.NewString(tableName, "merge_account_id")
	_purchaseOrderORM.ModifiedAt = field.NewTime(tableName, "modified_at")
	_purchaseOrderORM.PurchaseOrderNumber = field.NewString(tableName, "purchase_order_number")
	_purchaseOrderORM.RemoteCreatedAt = field.NewTime(tableName, "remote_created_at")
	_purchaseOrderORM.RemoteId = field.NewString(tableName, "remote_id")
	_purchaseOrderORM.RemoteUpdatedAt = field.NewTime(tableName, "remote_updated_at")
	_purchaseOrderORM.RemoteWasDeleted = field.NewBool(tableName, "remote_was_deleted")
	_purchaseOrderORM.Status = field.NewString(tableName, "status")
	_purchaseOrderORM.TotalAmount = field.NewFloat32(tableName, "total_amount")
	_purchaseOrderORM.TrackingCategories = field.NewField(tableName, "tracking_categories")
	_purchaseOrderORM.Vendor = field.NewString(tableName, "vendor")
	_purchaseOrderORM.DeliveryAddress = purchaseOrderORMHasOneDeliveryAddress{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("DeliveryAddress", "financial_servicev1.AddressORM"),
	}

	_purchaseOrderORM.LineItems = purchaseOrderORMHasManyLineItems{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("LineItems", "financial_servicev1.PurchaseOrderLineItemORM"),
	}

	_purchaseOrderORM.fillFieldMap()

	return _purchaseOrderORM
}

type purchaseOrderORM struct {
	purchaseOrderORMDo

	ALL                       field.Asterisk
	AccountingPeriod          field.String
	Company                   field.String
	Currency                  field.String
	Customer                  field.String
	DeliveryDate              field.Time
	ExchangeRate              field.String
	Id                        field.Uint64
	IssueDate                 field.Time
	LinkedAccountingAccountId field.Uint64
	Memo                      field.String
	MergeAccountId            field.String
	ModifiedAt                field.Time
	PurchaseOrderNumber       field.String
	RemoteCreatedAt           field.Time
	RemoteId                  field.String
	RemoteUpdatedAt           field.Time
	RemoteWasDeleted          field.Bool
	Status                    field.String
	TotalAmount               field.Float32
	TrackingCategories        field.Field
	Vendor                    field.String
	DeliveryAddress           purchaseOrderORMHasOneDeliveryAddress

	LineItems purchaseOrderORMHasManyLineItems

	fieldMap map[string]field.Expr
}

func (p purchaseOrderORM) Table(newTableName string) *purchaseOrderORM {
	p.purchaseOrderORMDo.UseTable(newTableName)
	return p.updateTableName(newTableName)
}

func (p purchaseOrderORM) As(alias string) *purchaseOrderORM {
	p.purchaseOrderORMDo.DO = *(p.purchaseOrderORMDo.As(alias).(*gen.DO))
	return p.updateTableName(alias)
}

func (p *purchaseOrderORM) updateTableName(table string) *purchaseOrderORM {
	p.ALL = field.NewAsterisk(table)
	p.AccountingPeriod = field.NewString(table, "accounting_period")
	p.Company = field.NewString(table, "company")
	p.Currency = field.NewString(table, "currency")
	p.Customer = field.NewString(table, "customer")
	p.DeliveryDate = field.NewTime(table, "delivery_date")
	p.ExchangeRate = field.NewString(table, "exchange_rate")
	p.Id = field.NewUint64(table, "id")
	p.IssueDate = field.NewTime(table, "issue_date")
	p.LinkedAccountingAccountId = field.NewUint64(table, "linked_accounting_account_id")
	p.Memo = field.NewString(table, "memo")
	p.MergeAccountId = field.NewString(table, "merge_account_id")
	p.ModifiedAt = field.NewTime(table, "modified_at")
	p.PurchaseOrderNumber = field.NewString(table, "purchase_order_number")
	p.RemoteCreatedAt = field.NewTime(table, "remote_created_at")
	p.RemoteId = field.NewString(table, "remote_id")
	p.RemoteUpdatedAt = field.NewTime(table, "remote_updated_at")
	p.RemoteWasDeleted = field.NewBool(table, "remote_was_deleted")
	p.Status = field.NewString(table, "status")
	p.TotalAmount = field.NewFloat32(table, "total_amount")
	p.TrackingCategories = field.NewField(table, "tracking_categories")
	p.Vendor = field.NewString(table, "vendor")

	p.fillFieldMap()

	return p
}

func (p *purchaseOrderORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := p.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (p *purchaseOrderORM) fillFieldMap() {
	p.fieldMap = make(map[string]field.Expr, 23)
	p.fieldMap["accounting_period"] = p.AccountingPeriod
	p.fieldMap["company"] = p.Company
	p.fieldMap["currency"] = p.Currency
	p.fieldMap["customer"] = p.Customer
	p.fieldMap["delivery_date"] = p.DeliveryDate
	p.fieldMap["exchange_rate"] = p.ExchangeRate
	p.fieldMap["id"] = p.Id
	p.fieldMap["issue_date"] = p.IssueDate
	p.fieldMap["linked_accounting_account_id"] = p.LinkedAccountingAccountId
	p.fieldMap["memo"] = p.Memo
	p.fieldMap["merge_account_id"] = p.MergeAccountId
	p.fieldMap["modified_at"] = p.ModifiedAt
	p.fieldMap["purchase_order_number"] = p.PurchaseOrderNumber
	p.fieldMap["remote_created_at"] = p.RemoteCreatedAt
	p.fieldMap["remote_id"] = p.RemoteId
	p.fieldMap["remote_updated_at"] = p.RemoteUpdatedAt
	p.fieldMap["remote_was_deleted"] = p.RemoteWasDeleted
	p.fieldMap["status"] = p.Status
	p.fieldMap["total_amount"] = p.TotalAmount
	p.fieldMap["tracking_categories"] = p.TrackingCategories
	p.fieldMap["vendor"] = p.Vendor

}

func (p purchaseOrderORM) clone(db *gorm.DB) purchaseOrderORM {
	p.purchaseOrderORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return p
}

func (p purchaseOrderORM) replaceDB(db *gorm.DB) purchaseOrderORM {
	p.purchaseOrderORMDo.ReplaceDB(db)
	return p
}

type purchaseOrderORMHasOneDeliveryAddress struct {
	db *gorm.DB

	field.RelationField
}

func (a purchaseOrderORMHasOneDeliveryAddress) Where(conds ...field.Expr) *purchaseOrderORMHasOneDeliveryAddress {
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

func (a purchaseOrderORMHasOneDeliveryAddress) WithContext(ctx context.Context) *purchaseOrderORMHasOneDeliveryAddress {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a purchaseOrderORMHasOneDeliveryAddress) Session(session *gorm.Session) *purchaseOrderORMHasOneDeliveryAddress {
	a.db = a.db.Session(session)
	return &a
}

func (a purchaseOrderORMHasOneDeliveryAddress) Model(m *financial_servicev1.PurchaseOrderORM) *purchaseOrderORMHasOneDeliveryAddressTx {
	return &purchaseOrderORMHasOneDeliveryAddressTx{a.db.Model(m).Association(a.Name())}
}

type purchaseOrderORMHasOneDeliveryAddressTx struct{ tx *gorm.Association }

func (a purchaseOrderORMHasOneDeliveryAddressTx) Find() (result *financial_servicev1.AddressORM, err error) {
	return result, a.tx.Find(&result)
}

func (a purchaseOrderORMHasOneDeliveryAddressTx) Append(values ...*financial_servicev1.AddressORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a purchaseOrderORMHasOneDeliveryAddressTx) Replace(values ...*financial_servicev1.AddressORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a purchaseOrderORMHasOneDeliveryAddressTx) Delete(values ...*financial_servicev1.AddressORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a purchaseOrderORMHasOneDeliveryAddressTx) Clear() error {
	return a.tx.Clear()
}

func (a purchaseOrderORMHasOneDeliveryAddressTx) Count() int64 {
	return a.tx.Count()
}

type purchaseOrderORMHasManyLineItems struct {
	db *gorm.DB

	field.RelationField
}

func (a purchaseOrderORMHasManyLineItems) Where(conds ...field.Expr) *purchaseOrderORMHasManyLineItems {
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

func (a purchaseOrderORMHasManyLineItems) WithContext(ctx context.Context) *purchaseOrderORMHasManyLineItems {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a purchaseOrderORMHasManyLineItems) Session(session *gorm.Session) *purchaseOrderORMHasManyLineItems {
	a.db = a.db.Session(session)
	return &a
}

func (a purchaseOrderORMHasManyLineItems) Model(m *financial_servicev1.PurchaseOrderORM) *purchaseOrderORMHasManyLineItemsTx {
	return &purchaseOrderORMHasManyLineItemsTx{a.db.Model(m).Association(a.Name())}
}

type purchaseOrderORMHasManyLineItemsTx struct{ tx *gorm.Association }

func (a purchaseOrderORMHasManyLineItemsTx) Find() (result []*financial_servicev1.PurchaseOrderLineItemORM, err error) {
	return result, a.tx.Find(&result)
}

func (a purchaseOrderORMHasManyLineItemsTx) Append(values ...*financial_servicev1.PurchaseOrderLineItemORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a purchaseOrderORMHasManyLineItemsTx) Replace(values ...*financial_servicev1.PurchaseOrderLineItemORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a purchaseOrderORMHasManyLineItemsTx) Delete(values ...*financial_servicev1.PurchaseOrderLineItemORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a purchaseOrderORMHasManyLineItemsTx) Clear() error {
	return a.tx.Clear()
}

func (a purchaseOrderORMHasManyLineItemsTx) Count() int64 {
	return a.tx.Count()
}

type purchaseOrderORMDo struct{ gen.DO }

type IPurchaseOrderORMDo interface {
	gen.SubQuery
	Debug() IPurchaseOrderORMDo
	WithContext(ctx context.Context) IPurchaseOrderORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IPurchaseOrderORMDo
	WriteDB() IPurchaseOrderORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IPurchaseOrderORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IPurchaseOrderORMDo
	Not(conds ...gen.Condition) IPurchaseOrderORMDo
	Or(conds ...gen.Condition) IPurchaseOrderORMDo
	Select(conds ...field.Expr) IPurchaseOrderORMDo
	Where(conds ...gen.Condition) IPurchaseOrderORMDo
	Order(conds ...field.Expr) IPurchaseOrderORMDo
	Distinct(cols ...field.Expr) IPurchaseOrderORMDo
	Omit(cols ...field.Expr) IPurchaseOrderORMDo
	Join(table schema.Tabler, on ...field.Expr) IPurchaseOrderORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IPurchaseOrderORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IPurchaseOrderORMDo
	Group(cols ...field.Expr) IPurchaseOrderORMDo
	Having(conds ...gen.Condition) IPurchaseOrderORMDo
	Limit(limit int) IPurchaseOrderORMDo
	Offset(offset int) IPurchaseOrderORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IPurchaseOrderORMDo
	Unscoped() IPurchaseOrderORMDo
	Create(values ...*financial_servicev1.PurchaseOrderORM) error
	CreateInBatches(values []*financial_servicev1.PurchaseOrderORM, batchSize int) error
	Save(values ...*financial_servicev1.PurchaseOrderORM) error
	First() (*financial_servicev1.PurchaseOrderORM, error)
	Take() (*financial_servicev1.PurchaseOrderORM, error)
	Last() (*financial_servicev1.PurchaseOrderORM, error)
	Find() ([]*financial_servicev1.PurchaseOrderORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.PurchaseOrderORM, err error)
	FindInBatches(result *[]*financial_servicev1.PurchaseOrderORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*financial_servicev1.PurchaseOrderORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IPurchaseOrderORMDo
	Assign(attrs ...field.AssignExpr) IPurchaseOrderORMDo
	Joins(fields ...field.RelationField) IPurchaseOrderORMDo
	Preload(fields ...field.RelationField) IPurchaseOrderORMDo
	FirstOrInit() (*financial_servicev1.PurchaseOrderORM, error)
	FirstOrCreate() (*financial_servicev1.PurchaseOrderORM, error)
	FindByPage(offset int, limit int) (result []*financial_servicev1.PurchaseOrderORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IPurchaseOrderORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result financial_servicev1.PurchaseOrderORM, err error)
	GetRecordByIDs(ids []int) (result []financial_servicev1.PurchaseOrderORM, err error)
	CreateRecord(item financial_servicev1.PurchaseOrderORM) (err error)
	UpdateRecordByID(id int, item financial_servicev1.PurchaseOrderORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.PurchaseOrderORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result financial_servicev1.PurchaseOrderORM, err error)
	GetByIDs(ids []uint64) (result []financial_servicev1.PurchaseOrderORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (p purchaseOrderORMDo) GetRecordByID(id int) (result financial_servicev1.PurchaseOrderORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM purchase_orders ")
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
func (p purchaseOrderORMDo) GetRecordByIDs(ids []int) (result []financial_servicev1.PurchaseOrderORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM purchase_orders ")
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
func (p purchaseOrderORMDo) CreateRecord(item financial_servicev1.PurchaseOrderORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO purchase_orders (columns) VALUES (values) ")

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
func (p purchaseOrderORMDo) UpdateRecordByID(id int, item financial_servicev1.PurchaseOrderORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE purchase_orders SET columns=values ")
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
func (p purchaseOrderORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM purchase_orders ")
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
func (p purchaseOrderORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.PurchaseOrderORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM purchase_orders ORDER BY " + p.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = p.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (p purchaseOrderORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM purchase_orders ")

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
func (p purchaseOrderORMDo) GetByID(id uint64) (result financial_servicev1.PurchaseOrderORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM purchase_orders ")
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
func (p purchaseOrderORMDo) GetByIDs(ids []uint64) (result []financial_servicev1.PurchaseOrderORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM purchase_orders ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = p.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (p purchaseOrderORMDo) Debug() IPurchaseOrderORMDo {
	return p.withDO(p.DO.Debug())
}

func (p purchaseOrderORMDo) WithContext(ctx context.Context) IPurchaseOrderORMDo {
	return p.withDO(p.DO.WithContext(ctx))
}

func (p purchaseOrderORMDo) ReadDB() IPurchaseOrderORMDo {
	return p.Clauses(dbresolver.Read)
}

func (p purchaseOrderORMDo) WriteDB() IPurchaseOrderORMDo {
	return p.Clauses(dbresolver.Write)
}

func (p purchaseOrderORMDo) Session(config *gorm.Session) IPurchaseOrderORMDo {
	return p.withDO(p.DO.Session(config))
}

func (p purchaseOrderORMDo) Clauses(conds ...clause.Expression) IPurchaseOrderORMDo {
	return p.withDO(p.DO.Clauses(conds...))
}

func (p purchaseOrderORMDo) Returning(value interface{}, columns ...string) IPurchaseOrderORMDo {
	return p.withDO(p.DO.Returning(value, columns...))
}

func (p purchaseOrderORMDo) Not(conds ...gen.Condition) IPurchaseOrderORMDo {
	return p.withDO(p.DO.Not(conds...))
}

func (p purchaseOrderORMDo) Or(conds ...gen.Condition) IPurchaseOrderORMDo {
	return p.withDO(p.DO.Or(conds...))
}

func (p purchaseOrderORMDo) Select(conds ...field.Expr) IPurchaseOrderORMDo {
	return p.withDO(p.DO.Select(conds...))
}

func (p purchaseOrderORMDo) Where(conds ...gen.Condition) IPurchaseOrderORMDo {
	return p.withDO(p.DO.Where(conds...))
}

func (p purchaseOrderORMDo) Order(conds ...field.Expr) IPurchaseOrderORMDo {
	return p.withDO(p.DO.Order(conds...))
}

func (p purchaseOrderORMDo) Distinct(cols ...field.Expr) IPurchaseOrderORMDo {
	return p.withDO(p.DO.Distinct(cols...))
}

func (p purchaseOrderORMDo) Omit(cols ...field.Expr) IPurchaseOrderORMDo {
	return p.withDO(p.DO.Omit(cols...))
}

func (p purchaseOrderORMDo) Join(table schema.Tabler, on ...field.Expr) IPurchaseOrderORMDo {
	return p.withDO(p.DO.Join(table, on...))
}

func (p purchaseOrderORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IPurchaseOrderORMDo {
	return p.withDO(p.DO.LeftJoin(table, on...))
}

func (p purchaseOrderORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IPurchaseOrderORMDo {
	return p.withDO(p.DO.RightJoin(table, on...))
}

func (p purchaseOrderORMDo) Group(cols ...field.Expr) IPurchaseOrderORMDo {
	return p.withDO(p.DO.Group(cols...))
}

func (p purchaseOrderORMDo) Having(conds ...gen.Condition) IPurchaseOrderORMDo {
	return p.withDO(p.DO.Having(conds...))
}

func (p purchaseOrderORMDo) Limit(limit int) IPurchaseOrderORMDo {
	return p.withDO(p.DO.Limit(limit))
}

func (p purchaseOrderORMDo) Offset(offset int) IPurchaseOrderORMDo {
	return p.withDO(p.DO.Offset(offset))
}

func (p purchaseOrderORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IPurchaseOrderORMDo {
	return p.withDO(p.DO.Scopes(funcs...))
}

func (p purchaseOrderORMDo) Unscoped() IPurchaseOrderORMDo {
	return p.withDO(p.DO.Unscoped())
}

func (p purchaseOrderORMDo) Create(values ...*financial_servicev1.PurchaseOrderORM) error {
	if len(values) == 0 {
		return nil
	}
	return p.DO.Create(values)
}

func (p purchaseOrderORMDo) CreateInBatches(values []*financial_servicev1.PurchaseOrderORM, batchSize int) error {
	return p.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (p purchaseOrderORMDo) Save(values ...*financial_servicev1.PurchaseOrderORM) error {
	if len(values) == 0 {
		return nil
	}
	return p.DO.Save(values)
}

func (p purchaseOrderORMDo) First() (*financial_servicev1.PurchaseOrderORM, error) {
	if result, err := p.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.PurchaseOrderORM), nil
	}
}

func (p purchaseOrderORMDo) Take() (*financial_servicev1.PurchaseOrderORM, error) {
	if result, err := p.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.PurchaseOrderORM), nil
	}
}

func (p purchaseOrderORMDo) Last() (*financial_servicev1.PurchaseOrderORM, error) {
	if result, err := p.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.PurchaseOrderORM), nil
	}
}

func (p purchaseOrderORMDo) Find() ([]*financial_servicev1.PurchaseOrderORM, error) {
	result, err := p.DO.Find()
	return result.([]*financial_servicev1.PurchaseOrderORM), err
}

func (p purchaseOrderORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.PurchaseOrderORM, err error) {
	buf := make([]*financial_servicev1.PurchaseOrderORM, 0, batchSize)
	err = p.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (p purchaseOrderORMDo) FindInBatches(result *[]*financial_servicev1.PurchaseOrderORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return p.DO.FindInBatches(result, batchSize, fc)
}

func (p purchaseOrderORMDo) Attrs(attrs ...field.AssignExpr) IPurchaseOrderORMDo {
	return p.withDO(p.DO.Attrs(attrs...))
}

func (p purchaseOrderORMDo) Assign(attrs ...field.AssignExpr) IPurchaseOrderORMDo {
	return p.withDO(p.DO.Assign(attrs...))
}

func (p purchaseOrderORMDo) Joins(fields ...field.RelationField) IPurchaseOrderORMDo {
	for _, _f := range fields {
		p = *p.withDO(p.DO.Joins(_f))
	}
	return &p
}

func (p purchaseOrderORMDo) Preload(fields ...field.RelationField) IPurchaseOrderORMDo {
	for _, _f := range fields {
		p = *p.withDO(p.DO.Preload(_f))
	}
	return &p
}

func (p purchaseOrderORMDo) FirstOrInit() (*financial_servicev1.PurchaseOrderORM, error) {
	if result, err := p.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.PurchaseOrderORM), nil
	}
}

func (p purchaseOrderORMDo) FirstOrCreate() (*financial_servicev1.PurchaseOrderORM, error) {
	if result, err := p.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.PurchaseOrderORM), nil
	}
}

func (p purchaseOrderORMDo) FindByPage(offset int, limit int) (result []*financial_servicev1.PurchaseOrderORM, count int64, err error) {
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

func (p purchaseOrderORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = p.Count()
	if err != nil {
		return
	}

	err = p.Offset(offset).Limit(limit).Scan(result)
	return
}

func (p purchaseOrderORMDo) Scan(result interface{}) (err error) {
	return p.DO.Scan(result)
}

func (p purchaseOrderORMDo) Delete(models ...*financial_servicev1.PurchaseOrderORM) (result gen.ResultInfo, err error) {
	return p.DO.Delete(models)
}

func (p *purchaseOrderORMDo) withDO(do gen.Dao) *purchaseOrderORMDo {
	p.DO = *do.(*gen.DO)
	return p
}
