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

func newAccountingAttachmentORM(db *gorm.DB, opts ...gen.DOOption) accountingAttachmentORM {
	_accountingAttachmentORM := accountingAttachmentORM{}

	_accountingAttachmentORM.accountingAttachmentORMDo.UseDB(db, opts...)
	_accountingAttachmentORM.accountingAttachmentORMDo.UseModel(&financial_servicev1.AccountingAttachmentORM{})

	tableName := _accountingAttachmentORM.accountingAttachmentORMDo.TableName()
	_accountingAttachmentORM.ALL = field.NewAsterisk(tableName)
	_accountingAttachmentORM.Company = field.NewString(tableName, "company")
	_accountingAttachmentORM.FileName = field.NewString(tableName, "file_name")
	_accountingAttachmentORM.FileUrl = field.NewString(tableName, "file_url")
	_accountingAttachmentORM.Id = field.NewUint64(tableName, "id")
	_accountingAttachmentORM.MergeRecordId = field.NewString(tableName, "merge_record_id")
	_accountingAttachmentORM.ModifiedAt = field.NewString(tableName, "modified_at")
	_accountingAttachmentORM.RemoteId = field.NewString(tableName, "remote_id")
	_accountingAttachmentORM.RemoteWasDeleted = field.NewBool(tableName, "remote_was_deleted")

	_accountingAttachmentORM.fillFieldMap()

	return _accountingAttachmentORM
}

type accountingAttachmentORM struct {
	accountingAttachmentORMDo

	ALL              field.Asterisk
	Company          field.String
	FileName         field.String
	FileUrl          field.String
	Id               field.Uint64
	MergeRecordId    field.String
	ModifiedAt       field.String
	RemoteId         field.String
	RemoteWasDeleted field.Bool

	fieldMap map[string]field.Expr
}

func (a accountingAttachmentORM) Table(newTableName string) *accountingAttachmentORM {
	a.accountingAttachmentORMDo.UseTable(newTableName)
	return a.updateTableName(newTableName)
}

func (a accountingAttachmentORM) As(alias string) *accountingAttachmentORM {
	a.accountingAttachmentORMDo.DO = *(a.accountingAttachmentORMDo.As(alias).(*gen.DO))
	return a.updateTableName(alias)
}

func (a *accountingAttachmentORM) updateTableName(table string) *accountingAttachmentORM {
	a.ALL = field.NewAsterisk(table)
	a.Company = field.NewString(table, "company")
	a.FileName = field.NewString(table, "file_name")
	a.FileUrl = field.NewString(table, "file_url")
	a.Id = field.NewUint64(table, "id")
	a.MergeRecordId = field.NewString(table, "merge_record_id")
	a.ModifiedAt = field.NewString(table, "modified_at")
	a.RemoteId = field.NewString(table, "remote_id")
	a.RemoteWasDeleted = field.NewBool(table, "remote_was_deleted")

	a.fillFieldMap()

	return a
}

func (a *accountingAttachmentORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := a.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (a *accountingAttachmentORM) fillFieldMap() {
	a.fieldMap = make(map[string]field.Expr, 8)
	a.fieldMap["company"] = a.Company
	a.fieldMap["file_name"] = a.FileName
	a.fieldMap["file_url"] = a.FileUrl
	a.fieldMap["id"] = a.Id
	a.fieldMap["merge_record_id"] = a.MergeRecordId
	a.fieldMap["modified_at"] = a.ModifiedAt
	a.fieldMap["remote_id"] = a.RemoteId
	a.fieldMap["remote_was_deleted"] = a.RemoteWasDeleted
}

func (a accountingAttachmentORM) clone(db *gorm.DB) accountingAttachmentORM {
	a.accountingAttachmentORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return a
}

func (a accountingAttachmentORM) replaceDB(db *gorm.DB) accountingAttachmentORM {
	a.accountingAttachmentORMDo.ReplaceDB(db)
	return a
}

type accountingAttachmentORMDo struct{ gen.DO }

type IAccountingAttachmentORMDo interface {
	gen.SubQuery
	Debug() IAccountingAttachmentORMDo
	WithContext(ctx context.Context) IAccountingAttachmentORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IAccountingAttachmentORMDo
	WriteDB() IAccountingAttachmentORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IAccountingAttachmentORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IAccountingAttachmentORMDo
	Not(conds ...gen.Condition) IAccountingAttachmentORMDo
	Or(conds ...gen.Condition) IAccountingAttachmentORMDo
	Select(conds ...field.Expr) IAccountingAttachmentORMDo
	Where(conds ...gen.Condition) IAccountingAttachmentORMDo
	Order(conds ...field.Expr) IAccountingAttachmentORMDo
	Distinct(cols ...field.Expr) IAccountingAttachmentORMDo
	Omit(cols ...field.Expr) IAccountingAttachmentORMDo
	Join(table schema.Tabler, on ...field.Expr) IAccountingAttachmentORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IAccountingAttachmentORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IAccountingAttachmentORMDo
	Group(cols ...field.Expr) IAccountingAttachmentORMDo
	Having(conds ...gen.Condition) IAccountingAttachmentORMDo
	Limit(limit int) IAccountingAttachmentORMDo
	Offset(offset int) IAccountingAttachmentORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IAccountingAttachmentORMDo
	Unscoped() IAccountingAttachmentORMDo
	Create(values ...*financial_servicev1.AccountingAttachmentORM) error
	CreateInBatches(values []*financial_servicev1.AccountingAttachmentORM, batchSize int) error
	Save(values ...*financial_servicev1.AccountingAttachmentORM) error
	First() (*financial_servicev1.AccountingAttachmentORM, error)
	Take() (*financial_servicev1.AccountingAttachmentORM, error)
	Last() (*financial_servicev1.AccountingAttachmentORM, error)
	Find() ([]*financial_servicev1.AccountingAttachmentORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.AccountingAttachmentORM, err error)
	FindInBatches(result *[]*financial_servicev1.AccountingAttachmentORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*financial_servicev1.AccountingAttachmentORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IAccountingAttachmentORMDo
	Assign(attrs ...field.AssignExpr) IAccountingAttachmentORMDo
	Joins(fields ...field.RelationField) IAccountingAttachmentORMDo
	Preload(fields ...field.RelationField) IAccountingAttachmentORMDo
	FirstOrInit() (*financial_servicev1.AccountingAttachmentORM, error)
	FirstOrCreate() (*financial_servicev1.AccountingAttachmentORM, error)
	FindByPage(offset int, limit int) (result []*financial_servicev1.AccountingAttachmentORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IAccountingAttachmentORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result financial_servicev1.AccountingAttachmentORM, err error)
	GetRecordByIDs(ids []int) (result []financial_servicev1.AccountingAttachmentORM, err error)
	CreateRecord(item financial_servicev1.AccountingAttachmentORM) (err error)
	UpdateRecordByID(id int, item financial_servicev1.AccountingAttachmentORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.AccountingAttachmentORM, err error)
	CountAll() (result int, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (a accountingAttachmentORMDo) GetRecordByID(id int) (result financial_servicev1.AccountingAttachmentORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM accounting_attachments ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (a accountingAttachmentORMDo) GetRecordByIDs(ids []int) (result []financial_servicev1.AccountingAttachmentORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM accounting_attachments ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (a accountingAttachmentORMDo) CreateRecord(item financial_servicev1.AccountingAttachmentORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO accounting_attachments (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (a accountingAttachmentORMDo) UpdateRecordByID(id int, item financial_servicev1.AccountingAttachmentORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE accounting_attachments SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (a accountingAttachmentORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM accounting_attachments ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (a accountingAttachmentORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.AccountingAttachmentORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM accounting_attachments ORDER BY " + a.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (a accountingAttachmentORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM accounting_attachments ")

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (a accountingAttachmentORMDo) Debug() IAccountingAttachmentORMDo {
	return a.withDO(a.DO.Debug())
}

func (a accountingAttachmentORMDo) WithContext(ctx context.Context) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.WithContext(ctx))
}

func (a accountingAttachmentORMDo) ReadDB() IAccountingAttachmentORMDo {
	return a.Clauses(dbresolver.Read)
}

func (a accountingAttachmentORMDo) WriteDB() IAccountingAttachmentORMDo {
	return a.Clauses(dbresolver.Write)
}

func (a accountingAttachmentORMDo) Session(config *gorm.Session) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.Session(config))
}

func (a accountingAttachmentORMDo) Clauses(conds ...clause.Expression) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.Clauses(conds...))
}

func (a accountingAttachmentORMDo) Returning(value interface{}, columns ...string) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.Returning(value, columns...))
}

func (a accountingAttachmentORMDo) Not(conds ...gen.Condition) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.Not(conds...))
}

func (a accountingAttachmentORMDo) Or(conds ...gen.Condition) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.Or(conds...))
}

func (a accountingAttachmentORMDo) Select(conds ...field.Expr) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.Select(conds...))
}

func (a accountingAttachmentORMDo) Where(conds ...gen.Condition) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.Where(conds...))
}

func (a accountingAttachmentORMDo) Order(conds ...field.Expr) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.Order(conds...))
}

func (a accountingAttachmentORMDo) Distinct(cols ...field.Expr) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.Distinct(cols...))
}

func (a accountingAttachmentORMDo) Omit(cols ...field.Expr) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.Omit(cols...))
}

func (a accountingAttachmentORMDo) Join(table schema.Tabler, on ...field.Expr) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.Join(table, on...))
}

func (a accountingAttachmentORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.LeftJoin(table, on...))
}

func (a accountingAttachmentORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.RightJoin(table, on...))
}

func (a accountingAttachmentORMDo) Group(cols ...field.Expr) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.Group(cols...))
}

func (a accountingAttachmentORMDo) Having(conds ...gen.Condition) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.Having(conds...))
}

func (a accountingAttachmentORMDo) Limit(limit int) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.Limit(limit))
}

func (a accountingAttachmentORMDo) Offset(offset int) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.Offset(offset))
}

func (a accountingAttachmentORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.Scopes(funcs...))
}

func (a accountingAttachmentORMDo) Unscoped() IAccountingAttachmentORMDo {
	return a.withDO(a.DO.Unscoped())
}

func (a accountingAttachmentORMDo) Create(values ...*financial_servicev1.AccountingAttachmentORM) error {
	if len(values) == 0 {
		return nil
	}
	return a.DO.Create(values)
}

func (a accountingAttachmentORMDo) CreateInBatches(values []*financial_servicev1.AccountingAttachmentORM, batchSize int) error {
	return a.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (a accountingAttachmentORMDo) Save(values ...*financial_servicev1.AccountingAttachmentORM) error {
	if len(values) == 0 {
		return nil
	}
	return a.DO.Save(values)
}

func (a accountingAttachmentORMDo) First() (*financial_servicev1.AccountingAttachmentORM, error) {
	if result, err := a.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.AccountingAttachmentORM), nil
	}
}

func (a accountingAttachmentORMDo) Take() (*financial_servicev1.AccountingAttachmentORM, error) {
	if result, err := a.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.AccountingAttachmentORM), nil
	}
}

func (a accountingAttachmentORMDo) Last() (*financial_servicev1.AccountingAttachmentORM, error) {
	if result, err := a.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.AccountingAttachmentORM), nil
	}
}

func (a accountingAttachmentORMDo) Find() ([]*financial_servicev1.AccountingAttachmentORM, error) {
	result, err := a.DO.Find()
	return result.([]*financial_servicev1.AccountingAttachmentORM), err
}

func (a accountingAttachmentORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.AccountingAttachmentORM, err error) {
	buf := make([]*financial_servicev1.AccountingAttachmentORM, 0, batchSize)
	err = a.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (a accountingAttachmentORMDo) FindInBatches(result *[]*financial_servicev1.AccountingAttachmentORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return a.DO.FindInBatches(result, batchSize, fc)
}

func (a accountingAttachmentORMDo) Attrs(attrs ...field.AssignExpr) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.Attrs(attrs...))
}

func (a accountingAttachmentORMDo) Assign(attrs ...field.AssignExpr) IAccountingAttachmentORMDo {
	return a.withDO(a.DO.Assign(attrs...))
}

func (a accountingAttachmentORMDo) Joins(fields ...field.RelationField) IAccountingAttachmentORMDo {
	for _, _f := range fields {
		a = *a.withDO(a.DO.Joins(_f))
	}
	return &a
}

func (a accountingAttachmentORMDo) Preload(fields ...field.RelationField) IAccountingAttachmentORMDo {
	for _, _f := range fields {
		a = *a.withDO(a.DO.Preload(_f))
	}
	return &a
}

func (a accountingAttachmentORMDo) FirstOrInit() (*financial_servicev1.AccountingAttachmentORM, error) {
	if result, err := a.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.AccountingAttachmentORM), nil
	}
}

func (a accountingAttachmentORMDo) FirstOrCreate() (*financial_servicev1.AccountingAttachmentORM, error) {
	if result, err := a.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.AccountingAttachmentORM), nil
	}
}

func (a accountingAttachmentORMDo) FindByPage(offset int, limit int) (result []*financial_servicev1.AccountingAttachmentORM, count int64, err error) {
	result, err = a.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = a.Offset(-1).Limit(-1).Count()
	return
}

func (a accountingAttachmentORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = a.Count()
	if err != nil {
		return
	}

	err = a.Offset(offset).Limit(limit).Scan(result)
	return
}

func (a accountingAttachmentORMDo) Scan(result interface{}) (err error) {
	return a.DO.Scan(result)
}

func (a accountingAttachmentORMDo) Delete(models ...*financial_servicev1.AccountingAttachmentORM) (result gen.ResultInfo, err error) {
	return a.DO.Delete(models)
}

func (a *accountingAttachmentORMDo) withDO(do gen.Dao) *accountingAttachmentORMDo {
	a.DO = *do.(*gen.DO)
	return a
}
