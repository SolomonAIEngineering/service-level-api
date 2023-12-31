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

	accounting_servicev1 "github.com/SolomonAIEngineering/service-level-api/pkg/generated/accounting_service/v1"
)

func newPaymentLineItemORM(db *gorm.DB, opts ...gen.DOOption) paymentLineItemORM {
	_paymentLineItemORM := paymentLineItemORM{}

	_paymentLineItemORM.paymentLineItemORMDo.UseDB(db, opts...)
	_paymentLineItemORM.paymentLineItemORMDo.UseModel(&accounting_servicev1.PaymentLineItemORM{})

	tableName := _paymentLineItemORM.paymentLineItemORMDo.TableName()
	_paymentLineItemORM.ALL = field.NewAsterisk(tableName)
	_paymentLineItemORM.AppliedAmount = field.NewFloat32(tableName, "applied_amount")
	_paymentLineItemORM.AppliedDate = field.NewTime(tableName, "applied_date")
	_paymentLineItemORM.CreatedAt = field.NewTime(tableName, "created_at")
	_paymentLineItemORM.Id = field.NewUint64(tableName, "id")
	_paymentLineItemORM.MergeRecordId = field.NewString(tableName, "merge_record_id")
	_paymentLineItemORM.ModifiedAt = field.NewTime(tableName, "modified_at")
	_paymentLineItemORM.RelatedObjectId = field.NewString(tableName, "related_object_id")
	_paymentLineItemORM.RelatedObjectType = field.NewString(tableName, "related_object_type")
	_paymentLineItemORM.RemoteId = field.NewString(tableName, "remote_id")

	_paymentLineItemORM.fillFieldMap()

	return _paymentLineItemORM
}

type paymentLineItemORM struct {
	paymentLineItemORMDo

	ALL               field.Asterisk
	AppliedAmount     field.Float32
	AppliedDate       field.Time
	CreatedAt         field.Time
	Id                field.Uint64
	MergeRecordId     field.String
	ModifiedAt        field.Time
	RelatedObjectId   field.String
	RelatedObjectType field.String
	RemoteId          field.String

	fieldMap map[string]field.Expr
}

func (p paymentLineItemORM) Table(newTableName string) *paymentLineItemORM {
	p.paymentLineItemORMDo.UseTable(newTableName)
	return p.updateTableName(newTableName)
}

func (p paymentLineItemORM) As(alias string) *paymentLineItemORM {
	p.paymentLineItemORMDo.DO = *(p.paymentLineItemORMDo.As(alias).(*gen.DO))
	return p.updateTableName(alias)
}

func (p *paymentLineItemORM) updateTableName(table string) *paymentLineItemORM {
	p.ALL = field.NewAsterisk(table)
	p.AppliedAmount = field.NewFloat32(table, "applied_amount")
	p.AppliedDate = field.NewTime(table, "applied_date")
	p.CreatedAt = field.NewTime(table, "created_at")
	p.Id = field.NewUint64(table, "id")
	p.MergeRecordId = field.NewString(table, "merge_record_id")
	p.ModifiedAt = field.NewTime(table, "modified_at")
	p.RelatedObjectId = field.NewString(table, "related_object_id")
	p.RelatedObjectType = field.NewString(table, "related_object_type")
	p.RemoteId = field.NewString(table, "remote_id")

	p.fillFieldMap()

	return p
}

func (p *paymentLineItemORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := p.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (p *paymentLineItemORM) fillFieldMap() {
	p.fieldMap = make(map[string]field.Expr, 9)
	p.fieldMap["applied_amount"] = p.AppliedAmount
	p.fieldMap["applied_date"] = p.AppliedDate
	p.fieldMap["created_at"] = p.CreatedAt
	p.fieldMap["id"] = p.Id
	p.fieldMap["merge_record_id"] = p.MergeRecordId
	p.fieldMap["modified_at"] = p.ModifiedAt
	p.fieldMap["related_object_id"] = p.RelatedObjectId
	p.fieldMap["related_object_type"] = p.RelatedObjectType
	p.fieldMap["remote_id"] = p.RemoteId
}

func (p paymentLineItemORM) clone(db *gorm.DB) paymentLineItemORM {
	p.paymentLineItemORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return p
}

func (p paymentLineItemORM) replaceDB(db *gorm.DB) paymentLineItemORM {
	p.paymentLineItemORMDo.ReplaceDB(db)
	return p
}

type paymentLineItemORMDo struct{ gen.DO }

type IPaymentLineItemORMDo interface {
	gen.SubQuery
	Debug() IPaymentLineItemORMDo
	WithContext(ctx context.Context) IPaymentLineItemORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IPaymentLineItemORMDo
	WriteDB() IPaymentLineItemORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IPaymentLineItemORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IPaymentLineItemORMDo
	Not(conds ...gen.Condition) IPaymentLineItemORMDo
	Or(conds ...gen.Condition) IPaymentLineItemORMDo
	Select(conds ...field.Expr) IPaymentLineItemORMDo
	Where(conds ...gen.Condition) IPaymentLineItemORMDo
	Order(conds ...field.Expr) IPaymentLineItemORMDo
	Distinct(cols ...field.Expr) IPaymentLineItemORMDo
	Omit(cols ...field.Expr) IPaymentLineItemORMDo
	Join(table schema.Tabler, on ...field.Expr) IPaymentLineItemORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IPaymentLineItemORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IPaymentLineItemORMDo
	Group(cols ...field.Expr) IPaymentLineItemORMDo
	Having(conds ...gen.Condition) IPaymentLineItemORMDo
	Limit(limit int) IPaymentLineItemORMDo
	Offset(offset int) IPaymentLineItemORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IPaymentLineItemORMDo
	Unscoped() IPaymentLineItemORMDo
	Create(values ...*accounting_servicev1.PaymentLineItemORM) error
	CreateInBatches(values []*accounting_servicev1.PaymentLineItemORM, batchSize int) error
	Save(values ...*accounting_servicev1.PaymentLineItemORM) error
	First() (*accounting_servicev1.PaymentLineItemORM, error)
	Take() (*accounting_servicev1.PaymentLineItemORM, error)
	Last() (*accounting_servicev1.PaymentLineItemORM, error)
	Find() ([]*accounting_servicev1.PaymentLineItemORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*accounting_servicev1.PaymentLineItemORM, err error)
	FindInBatches(result *[]*accounting_servicev1.PaymentLineItemORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*accounting_servicev1.PaymentLineItemORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IPaymentLineItemORMDo
	Assign(attrs ...field.AssignExpr) IPaymentLineItemORMDo
	Joins(fields ...field.RelationField) IPaymentLineItemORMDo
	Preload(fields ...field.RelationField) IPaymentLineItemORMDo
	FirstOrInit() (*accounting_servicev1.PaymentLineItemORM, error)
	FirstOrCreate() (*accounting_servicev1.PaymentLineItemORM, error)
	FindByPage(offset int, limit int) (result []*accounting_servicev1.PaymentLineItemORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IPaymentLineItemORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result accounting_servicev1.PaymentLineItemORM, err error)
	GetRecordByIDs(ids []int) (result []accounting_servicev1.PaymentLineItemORM, err error)
	CreateRecord(item accounting_servicev1.PaymentLineItemORM) (err error)
	UpdateRecordByID(id int, item accounting_servicev1.PaymentLineItemORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []accounting_servicev1.PaymentLineItemORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result accounting_servicev1.PaymentLineItemORM, err error)
	GetByIDs(ids []uint64) (result []accounting_servicev1.PaymentLineItemORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (p paymentLineItemORMDo) GetRecordByID(id int) (result accounting_servicev1.PaymentLineItemORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM payment_line_items ")
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
func (p paymentLineItemORMDo) GetRecordByIDs(ids []int) (result []accounting_servicev1.PaymentLineItemORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM payment_line_items ")
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
func (p paymentLineItemORMDo) CreateRecord(item accounting_servicev1.PaymentLineItemORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO payment_line_items (columns) VALUES (values) ")

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
func (p paymentLineItemORMDo) UpdateRecordByID(id int, item accounting_servicev1.PaymentLineItemORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE payment_line_items SET columns=values ")
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
func (p paymentLineItemORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM payment_line_items ")
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
func (p paymentLineItemORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []accounting_servicev1.PaymentLineItemORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM payment_line_items ORDER BY " + p.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = p.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (p paymentLineItemORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM payment_line_items ")

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
func (p paymentLineItemORMDo) GetByID(id uint64) (result accounting_servicev1.PaymentLineItemORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM payment_line_items ")
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
func (p paymentLineItemORMDo) GetByIDs(ids []uint64) (result []accounting_servicev1.PaymentLineItemORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM payment_line_items ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = p.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (p paymentLineItemORMDo) Debug() IPaymentLineItemORMDo {
	return p.withDO(p.DO.Debug())
}

func (p paymentLineItemORMDo) WithContext(ctx context.Context) IPaymentLineItemORMDo {
	return p.withDO(p.DO.WithContext(ctx))
}

func (p paymentLineItemORMDo) ReadDB() IPaymentLineItemORMDo {
	return p.Clauses(dbresolver.Read)
}

func (p paymentLineItemORMDo) WriteDB() IPaymentLineItemORMDo {
	return p.Clauses(dbresolver.Write)
}

func (p paymentLineItemORMDo) Session(config *gorm.Session) IPaymentLineItemORMDo {
	return p.withDO(p.DO.Session(config))
}

func (p paymentLineItemORMDo) Clauses(conds ...clause.Expression) IPaymentLineItemORMDo {
	return p.withDO(p.DO.Clauses(conds...))
}

func (p paymentLineItemORMDo) Returning(value interface{}, columns ...string) IPaymentLineItemORMDo {
	return p.withDO(p.DO.Returning(value, columns...))
}

func (p paymentLineItemORMDo) Not(conds ...gen.Condition) IPaymentLineItemORMDo {
	return p.withDO(p.DO.Not(conds...))
}

func (p paymentLineItemORMDo) Or(conds ...gen.Condition) IPaymentLineItemORMDo {
	return p.withDO(p.DO.Or(conds...))
}

func (p paymentLineItemORMDo) Select(conds ...field.Expr) IPaymentLineItemORMDo {
	return p.withDO(p.DO.Select(conds...))
}

func (p paymentLineItemORMDo) Where(conds ...gen.Condition) IPaymentLineItemORMDo {
	return p.withDO(p.DO.Where(conds...))
}

func (p paymentLineItemORMDo) Order(conds ...field.Expr) IPaymentLineItemORMDo {
	return p.withDO(p.DO.Order(conds...))
}

func (p paymentLineItemORMDo) Distinct(cols ...field.Expr) IPaymentLineItemORMDo {
	return p.withDO(p.DO.Distinct(cols...))
}

func (p paymentLineItemORMDo) Omit(cols ...field.Expr) IPaymentLineItemORMDo {
	return p.withDO(p.DO.Omit(cols...))
}

func (p paymentLineItemORMDo) Join(table schema.Tabler, on ...field.Expr) IPaymentLineItemORMDo {
	return p.withDO(p.DO.Join(table, on...))
}

func (p paymentLineItemORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IPaymentLineItemORMDo {
	return p.withDO(p.DO.LeftJoin(table, on...))
}

func (p paymentLineItemORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IPaymentLineItemORMDo {
	return p.withDO(p.DO.RightJoin(table, on...))
}

func (p paymentLineItemORMDo) Group(cols ...field.Expr) IPaymentLineItemORMDo {
	return p.withDO(p.DO.Group(cols...))
}

func (p paymentLineItemORMDo) Having(conds ...gen.Condition) IPaymentLineItemORMDo {
	return p.withDO(p.DO.Having(conds...))
}

func (p paymentLineItemORMDo) Limit(limit int) IPaymentLineItemORMDo {
	return p.withDO(p.DO.Limit(limit))
}

func (p paymentLineItemORMDo) Offset(offset int) IPaymentLineItemORMDo {
	return p.withDO(p.DO.Offset(offset))
}

func (p paymentLineItemORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IPaymentLineItemORMDo {
	return p.withDO(p.DO.Scopes(funcs...))
}

func (p paymentLineItemORMDo) Unscoped() IPaymentLineItemORMDo {
	return p.withDO(p.DO.Unscoped())
}

func (p paymentLineItemORMDo) Create(values ...*accounting_servicev1.PaymentLineItemORM) error {
	if len(values) == 0 {
		return nil
	}
	return p.DO.Create(values)
}

func (p paymentLineItemORMDo) CreateInBatches(values []*accounting_servicev1.PaymentLineItemORM, batchSize int) error {
	return p.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (p paymentLineItemORMDo) Save(values ...*accounting_servicev1.PaymentLineItemORM) error {
	if len(values) == 0 {
		return nil
	}
	return p.DO.Save(values)
}

func (p paymentLineItemORMDo) First() (*accounting_servicev1.PaymentLineItemORM, error) {
	if result, err := p.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.PaymentLineItemORM), nil
	}
}

func (p paymentLineItemORMDo) Take() (*accounting_servicev1.PaymentLineItemORM, error) {
	if result, err := p.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.PaymentLineItemORM), nil
	}
}

func (p paymentLineItemORMDo) Last() (*accounting_servicev1.PaymentLineItemORM, error) {
	if result, err := p.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.PaymentLineItemORM), nil
	}
}

func (p paymentLineItemORMDo) Find() ([]*accounting_servicev1.PaymentLineItemORM, error) {
	result, err := p.DO.Find()
	return result.([]*accounting_servicev1.PaymentLineItemORM), err
}

func (p paymentLineItemORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*accounting_servicev1.PaymentLineItemORM, err error) {
	buf := make([]*accounting_servicev1.PaymentLineItemORM, 0, batchSize)
	err = p.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (p paymentLineItemORMDo) FindInBatches(result *[]*accounting_servicev1.PaymentLineItemORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return p.DO.FindInBatches(result, batchSize, fc)
}

func (p paymentLineItemORMDo) Attrs(attrs ...field.AssignExpr) IPaymentLineItemORMDo {
	return p.withDO(p.DO.Attrs(attrs...))
}

func (p paymentLineItemORMDo) Assign(attrs ...field.AssignExpr) IPaymentLineItemORMDo {
	return p.withDO(p.DO.Assign(attrs...))
}

func (p paymentLineItemORMDo) Joins(fields ...field.RelationField) IPaymentLineItemORMDo {
	for _, _f := range fields {
		p = *p.withDO(p.DO.Joins(_f))
	}
	return &p
}

func (p paymentLineItemORMDo) Preload(fields ...field.RelationField) IPaymentLineItemORMDo {
	for _, _f := range fields {
		p = *p.withDO(p.DO.Preload(_f))
	}
	return &p
}

func (p paymentLineItemORMDo) FirstOrInit() (*accounting_servicev1.PaymentLineItemORM, error) {
	if result, err := p.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.PaymentLineItemORM), nil
	}
}

func (p paymentLineItemORMDo) FirstOrCreate() (*accounting_servicev1.PaymentLineItemORM, error) {
	if result, err := p.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.PaymentLineItemORM), nil
	}
}

func (p paymentLineItemORMDo) FindByPage(offset int, limit int) (result []*accounting_servicev1.PaymentLineItemORM, count int64, err error) {
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

func (p paymentLineItemORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = p.Count()
	if err != nil {
		return
	}

	err = p.Offset(offset).Limit(limit).Scan(result)
	return
}

func (p paymentLineItemORMDo) Scan(result interface{}) (err error) {
	return p.DO.Scan(result)
}

func (p paymentLineItemORMDo) Delete(models ...*accounting_servicev1.PaymentLineItemORM) (result gen.ResultInfo, err error) {
	return p.DO.Delete(models)
}

func (p *paymentLineItemORMDo) withDO(do gen.Dao) *paymentLineItemORMDo {
	p.DO = *do.(*gen.DO)
	return p
}
