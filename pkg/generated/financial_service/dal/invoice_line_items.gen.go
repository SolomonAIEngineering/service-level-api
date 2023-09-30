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

func newInvoiceLineItemORM(db *gorm.DB, opts ...gen.DOOption) invoiceLineItemORM {
	_invoiceLineItemORM := invoiceLineItemORM{}

	_invoiceLineItemORM.invoiceLineItemORMDo.UseDB(db, opts...)
	_invoiceLineItemORM.invoiceLineItemORMDo.UseModel(&financial_servicev1.InvoiceLineItemORM{})

	tableName := _invoiceLineItemORM.invoiceLineItemORMDo.TableName()
	_invoiceLineItemORM.ALL = field.NewAsterisk(tableName)
	_invoiceLineItemORM.Account = field.NewString(tableName, "account")
	_invoiceLineItemORM.Company = field.NewString(tableName, "company")
	_invoiceLineItemORM.Currency = field.NewString(tableName, "currency")
	_invoiceLineItemORM.Description = field.NewString(tableName, "description")
	_invoiceLineItemORM.ExchangeRate = field.NewString(tableName, "exchange_rate")
	_invoiceLineItemORM.Id = field.NewUint64(tableName, "id")
	_invoiceLineItemORM.InvoiceId = field.NewUint64(tableName, "invoice_id")
	_invoiceLineItemORM.Item = field.NewString(tableName, "item")
	_invoiceLineItemORM.MergeAccountId = field.NewString(tableName, "merge_account_id")
	_invoiceLineItemORM.ModifiedAt = field.NewTime(tableName, "modified_at")
	_invoiceLineItemORM.Quantity = field.NewInt32(tableName, "quantity")
	_invoiceLineItemORM.RemoteId = field.NewString(tableName, "remote_id")
	_invoiceLineItemORM.TotalAmount = field.NewFloat32(tableName, "total_amount")
	_invoiceLineItemORM.TrackingCategories = field.NewField(tableName, "tracking_categories")
	_invoiceLineItemORM.TrackingCategory = field.NewString(tableName, "tracking_category")
	_invoiceLineItemORM.UnitPrice = field.NewFloat32(tableName, "unit_price")

	_invoiceLineItemORM.fillFieldMap()

	return _invoiceLineItemORM
}

type invoiceLineItemORM struct {
	invoiceLineItemORMDo

	ALL                field.Asterisk
	Account            field.String
	Company            field.String
	Currency           field.String
	Description        field.String
	ExchangeRate       field.String
	Id                 field.Uint64
	InvoiceId          field.Uint64
	Item               field.String
	MergeAccountId     field.String
	ModifiedAt         field.Time
	Quantity           field.Int32
	RemoteId           field.String
	TotalAmount        field.Float32
	TrackingCategories field.Field
	TrackingCategory   field.String
	UnitPrice          field.Float32

	fieldMap map[string]field.Expr
}

func (i invoiceLineItemORM) Table(newTableName string) *invoiceLineItemORM {
	i.invoiceLineItemORMDo.UseTable(newTableName)
	return i.updateTableName(newTableName)
}

func (i invoiceLineItemORM) As(alias string) *invoiceLineItemORM {
	i.invoiceLineItemORMDo.DO = *(i.invoiceLineItemORMDo.As(alias).(*gen.DO))
	return i.updateTableName(alias)
}

func (i *invoiceLineItemORM) updateTableName(table string) *invoiceLineItemORM {
	i.ALL = field.NewAsterisk(table)
	i.Account = field.NewString(table, "account")
	i.Company = field.NewString(table, "company")
	i.Currency = field.NewString(table, "currency")
	i.Description = field.NewString(table, "description")
	i.ExchangeRate = field.NewString(table, "exchange_rate")
	i.Id = field.NewUint64(table, "id")
	i.InvoiceId = field.NewUint64(table, "invoice_id")
	i.Item = field.NewString(table, "item")
	i.MergeAccountId = field.NewString(table, "merge_account_id")
	i.ModifiedAt = field.NewTime(table, "modified_at")
	i.Quantity = field.NewInt32(table, "quantity")
	i.RemoteId = field.NewString(table, "remote_id")
	i.TotalAmount = field.NewFloat32(table, "total_amount")
	i.TrackingCategories = field.NewField(table, "tracking_categories")
	i.TrackingCategory = field.NewString(table, "tracking_category")
	i.UnitPrice = field.NewFloat32(table, "unit_price")

	i.fillFieldMap()

	return i
}

func (i *invoiceLineItemORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := i.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (i *invoiceLineItemORM) fillFieldMap() {
	i.fieldMap = make(map[string]field.Expr, 16)
	i.fieldMap["account"] = i.Account
	i.fieldMap["company"] = i.Company
	i.fieldMap["currency"] = i.Currency
	i.fieldMap["description"] = i.Description
	i.fieldMap["exchange_rate"] = i.ExchangeRate
	i.fieldMap["id"] = i.Id
	i.fieldMap["invoice_id"] = i.InvoiceId
	i.fieldMap["item"] = i.Item
	i.fieldMap["merge_account_id"] = i.MergeAccountId
	i.fieldMap["modified_at"] = i.ModifiedAt
	i.fieldMap["quantity"] = i.Quantity
	i.fieldMap["remote_id"] = i.RemoteId
	i.fieldMap["total_amount"] = i.TotalAmount
	i.fieldMap["tracking_categories"] = i.TrackingCategories
	i.fieldMap["tracking_category"] = i.TrackingCategory
	i.fieldMap["unit_price"] = i.UnitPrice
}

func (i invoiceLineItemORM) clone(db *gorm.DB) invoiceLineItemORM {
	i.invoiceLineItemORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return i
}

func (i invoiceLineItemORM) replaceDB(db *gorm.DB) invoiceLineItemORM {
	i.invoiceLineItemORMDo.ReplaceDB(db)
	return i
}

type invoiceLineItemORMDo struct{ gen.DO }

type IInvoiceLineItemORMDo interface {
	gen.SubQuery
	Debug() IInvoiceLineItemORMDo
	WithContext(ctx context.Context) IInvoiceLineItemORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IInvoiceLineItemORMDo
	WriteDB() IInvoiceLineItemORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IInvoiceLineItemORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IInvoiceLineItemORMDo
	Not(conds ...gen.Condition) IInvoiceLineItemORMDo
	Or(conds ...gen.Condition) IInvoiceLineItemORMDo
	Select(conds ...field.Expr) IInvoiceLineItemORMDo
	Where(conds ...gen.Condition) IInvoiceLineItemORMDo
	Order(conds ...field.Expr) IInvoiceLineItemORMDo
	Distinct(cols ...field.Expr) IInvoiceLineItemORMDo
	Omit(cols ...field.Expr) IInvoiceLineItemORMDo
	Join(table schema.Tabler, on ...field.Expr) IInvoiceLineItemORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IInvoiceLineItemORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IInvoiceLineItemORMDo
	Group(cols ...field.Expr) IInvoiceLineItemORMDo
	Having(conds ...gen.Condition) IInvoiceLineItemORMDo
	Limit(limit int) IInvoiceLineItemORMDo
	Offset(offset int) IInvoiceLineItemORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IInvoiceLineItemORMDo
	Unscoped() IInvoiceLineItemORMDo
	Create(values ...*financial_servicev1.InvoiceLineItemORM) error
	CreateInBatches(values []*financial_servicev1.InvoiceLineItemORM, batchSize int) error
	Save(values ...*financial_servicev1.InvoiceLineItemORM) error
	First() (*financial_servicev1.InvoiceLineItemORM, error)
	Take() (*financial_servicev1.InvoiceLineItemORM, error)
	Last() (*financial_servicev1.InvoiceLineItemORM, error)
	Find() ([]*financial_servicev1.InvoiceLineItemORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.InvoiceLineItemORM, err error)
	FindInBatches(result *[]*financial_servicev1.InvoiceLineItemORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*financial_servicev1.InvoiceLineItemORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IInvoiceLineItemORMDo
	Assign(attrs ...field.AssignExpr) IInvoiceLineItemORMDo
	Joins(fields ...field.RelationField) IInvoiceLineItemORMDo
	Preload(fields ...field.RelationField) IInvoiceLineItemORMDo
	FirstOrInit() (*financial_servicev1.InvoiceLineItemORM, error)
	FirstOrCreate() (*financial_servicev1.InvoiceLineItemORM, error)
	FindByPage(offset int, limit int) (result []*financial_servicev1.InvoiceLineItemORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IInvoiceLineItemORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result financial_servicev1.InvoiceLineItemORM, err error)
	GetRecordByIDs(ids []int) (result []financial_servicev1.InvoiceLineItemORM, err error)
	CreateRecord(item financial_servicev1.InvoiceLineItemORM) (err error)
	UpdateRecordByID(id int, item financial_servicev1.InvoiceLineItemORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.InvoiceLineItemORM, err error)
	CountAll() (result int, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (i invoiceLineItemORMDo) GetRecordByID(id int) (result financial_servicev1.InvoiceLineItemORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM invoice_line_items ")
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
func (i invoiceLineItemORMDo) GetRecordByIDs(ids []int) (result []financial_servicev1.InvoiceLineItemORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM invoice_line_items ")
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
func (i invoiceLineItemORMDo) CreateRecord(item financial_servicev1.InvoiceLineItemORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO invoice_line_items (columns) VALUES (values) ")

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
func (i invoiceLineItemORMDo) UpdateRecordByID(id int, item financial_servicev1.InvoiceLineItemORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE invoice_line_items SET columns=values ")
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
func (i invoiceLineItemORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM invoice_line_items ")
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
func (i invoiceLineItemORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.InvoiceLineItemORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM invoice_line_items ORDER BY " + i.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = i.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (i invoiceLineItemORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM invoice_line_items ")

	var executeSQL *gorm.DB
	executeSQL = i.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (i invoiceLineItemORMDo) Debug() IInvoiceLineItemORMDo {
	return i.withDO(i.DO.Debug())
}

func (i invoiceLineItemORMDo) WithContext(ctx context.Context) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.WithContext(ctx))
}

func (i invoiceLineItemORMDo) ReadDB() IInvoiceLineItemORMDo {
	return i.Clauses(dbresolver.Read)
}

func (i invoiceLineItemORMDo) WriteDB() IInvoiceLineItemORMDo {
	return i.Clauses(dbresolver.Write)
}

func (i invoiceLineItemORMDo) Session(config *gorm.Session) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.Session(config))
}

func (i invoiceLineItemORMDo) Clauses(conds ...clause.Expression) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.Clauses(conds...))
}

func (i invoiceLineItemORMDo) Returning(value interface{}, columns ...string) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.Returning(value, columns...))
}

func (i invoiceLineItemORMDo) Not(conds ...gen.Condition) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.Not(conds...))
}

func (i invoiceLineItemORMDo) Or(conds ...gen.Condition) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.Or(conds...))
}

func (i invoiceLineItemORMDo) Select(conds ...field.Expr) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.Select(conds...))
}

func (i invoiceLineItemORMDo) Where(conds ...gen.Condition) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.Where(conds...))
}

func (i invoiceLineItemORMDo) Order(conds ...field.Expr) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.Order(conds...))
}

func (i invoiceLineItemORMDo) Distinct(cols ...field.Expr) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.Distinct(cols...))
}

func (i invoiceLineItemORMDo) Omit(cols ...field.Expr) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.Omit(cols...))
}

func (i invoiceLineItemORMDo) Join(table schema.Tabler, on ...field.Expr) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.Join(table, on...))
}

func (i invoiceLineItemORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.LeftJoin(table, on...))
}

func (i invoiceLineItemORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.RightJoin(table, on...))
}

func (i invoiceLineItemORMDo) Group(cols ...field.Expr) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.Group(cols...))
}

func (i invoiceLineItemORMDo) Having(conds ...gen.Condition) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.Having(conds...))
}

func (i invoiceLineItemORMDo) Limit(limit int) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.Limit(limit))
}

func (i invoiceLineItemORMDo) Offset(offset int) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.Offset(offset))
}

func (i invoiceLineItemORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.Scopes(funcs...))
}

func (i invoiceLineItemORMDo) Unscoped() IInvoiceLineItemORMDo {
	return i.withDO(i.DO.Unscoped())
}

func (i invoiceLineItemORMDo) Create(values ...*financial_servicev1.InvoiceLineItemORM) error {
	if len(values) == 0 {
		return nil
	}
	return i.DO.Create(values)
}

func (i invoiceLineItemORMDo) CreateInBatches(values []*financial_servicev1.InvoiceLineItemORM, batchSize int) error {
	return i.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (i invoiceLineItemORMDo) Save(values ...*financial_servicev1.InvoiceLineItemORM) error {
	if len(values) == 0 {
		return nil
	}
	return i.DO.Save(values)
}

func (i invoiceLineItemORMDo) First() (*financial_servicev1.InvoiceLineItemORM, error) {
	if result, err := i.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.InvoiceLineItemORM), nil
	}
}

func (i invoiceLineItemORMDo) Take() (*financial_servicev1.InvoiceLineItemORM, error) {
	if result, err := i.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.InvoiceLineItemORM), nil
	}
}

func (i invoiceLineItemORMDo) Last() (*financial_servicev1.InvoiceLineItemORM, error) {
	if result, err := i.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.InvoiceLineItemORM), nil
	}
}

func (i invoiceLineItemORMDo) Find() ([]*financial_servicev1.InvoiceLineItemORM, error) {
	result, err := i.DO.Find()
	return result.([]*financial_servicev1.InvoiceLineItemORM), err
}

func (i invoiceLineItemORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.InvoiceLineItemORM, err error) {
	buf := make([]*financial_servicev1.InvoiceLineItemORM, 0, batchSize)
	err = i.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (i invoiceLineItemORMDo) FindInBatches(result *[]*financial_servicev1.InvoiceLineItemORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return i.DO.FindInBatches(result, batchSize, fc)
}

func (i invoiceLineItemORMDo) Attrs(attrs ...field.AssignExpr) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.Attrs(attrs...))
}

func (i invoiceLineItemORMDo) Assign(attrs ...field.AssignExpr) IInvoiceLineItemORMDo {
	return i.withDO(i.DO.Assign(attrs...))
}

func (i invoiceLineItemORMDo) Joins(fields ...field.RelationField) IInvoiceLineItemORMDo {
	for _, _f := range fields {
		i = *i.withDO(i.DO.Joins(_f))
	}
	return &i
}

func (i invoiceLineItemORMDo) Preload(fields ...field.RelationField) IInvoiceLineItemORMDo {
	for _, _f := range fields {
		i = *i.withDO(i.DO.Preload(_f))
	}
	return &i
}

func (i invoiceLineItemORMDo) FirstOrInit() (*financial_servicev1.InvoiceLineItemORM, error) {
	if result, err := i.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.InvoiceLineItemORM), nil
	}
}

func (i invoiceLineItemORMDo) FirstOrCreate() (*financial_servicev1.InvoiceLineItemORM, error) {
	if result, err := i.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.InvoiceLineItemORM), nil
	}
}

func (i invoiceLineItemORMDo) FindByPage(offset int, limit int) (result []*financial_servicev1.InvoiceLineItemORM, count int64, err error) {
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

func (i invoiceLineItemORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = i.Count()
	if err != nil {
		return
	}

	err = i.Offset(offset).Limit(limit).Scan(result)
	return
}

func (i invoiceLineItemORMDo) Scan(result interface{}) (err error) {
	return i.DO.Scan(result)
}

func (i invoiceLineItemORMDo) Delete(models ...*financial_servicev1.InvoiceLineItemORM) (result gen.ResultInfo, err error) {
	return i.DO.Delete(models)
}

func (i *invoiceLineItemORMDo) withDO(do gen.Dao) *invoiceLineItemORMDo {
	i.DO = *do.(*gen.DO)
	return i
}
