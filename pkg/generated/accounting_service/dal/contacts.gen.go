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

func newContactsORM(db *gorm.DB, opts ...gen.DOOption) contactsORM {
	_contactsORM := contactsORM{}

	_contactsORM.contactsORMDo.UseDB(db, opts...)
	_contactsORM.contactsORMDo.UseModel(&accounting_servicev1.ContactsORM{})

	tableName := _contactsORM.contactsORMDo.TableName()
	_contactsORM.ALL = field.NewAsterisk(tableName)
	_contactsORM.AddressesIds = field.NewField(tableName, "addresses_ids")
	_contactsORM.Company = field.NewString(tableName, "company")
	_contactsORM.Currency = field.NewString(tableName, "currency")
	_contactsORM.EmailAddress = field.NewString(tableName, "email_address")
	_contactsORM.Id = field.NewUint64(tableName, "id")
	_contactsORM.IsCustomer = field.NewBool(tableName, "is_customer")
	_contactsORM.IsSupplier = field.NewBool(tableName, "is_supplier")
	_contactsORM.LinkedAccountingAccountId = field.NewUint64(tableName, "linked_accounting_account_id")
	_contactsORM.MergeRecordId = field.NewString(tableName, "merge_record_id")
	_contactsORM.ModifiedAt = field.NewTime(tableName, "modified_at")
	_contactsORM.Name = field.NewString(tableName, "name")
	_contactsORM.PhoneNumbers = field.NewField(tableName, "phone_numbers")
	_contactsORM.RemoteId = field.NewString(tableName, "remote_id")
	_contactsORM.RemoteUpdatedAt = field.NewTime(tableName, "remote_updated_at")
	_contactsORM.RemoteWasDeleted = field.NewBool(tableName, "remote_was_deleted")
	_contactsORM.Status = field.NewString(tableName, "status")
	_contactsORM.TaxNumber = field.NewString(tableName, "tax_number")

	_contactsORM.fillFieldMap()

	return _contactsORM
}

type contactsORM struct {
	contactsORMDo

	ALL                       field.Asterisk
	AddressesIds              field.Field
	Company                   field.String
	Currency                  field.String
	EmailAddress              field.String
	Id                        field.Uint64
	IsCustomer                field.Bool
	IsSupplier                field.Bool
	LinkedAccountingAccountId field.Uint64
	MergeRecordId             field.String
	ModifiedAt                field.Time
	Name                      field.String
	PhoneNumbers              field.Field
	RemoteId                  field.String
	RemoteUpdatedAt           field.Time
	RemoteWasDeleted          field.Bool
	Status                    field.String
	TaxNumber                 field.String

	fieldMap map[string]field.Expr
}

func (c contactsORM) Table(newTableName string) *contactsORM {
	c.contactsORMDo.UseTable(newTableName)
	return c.updateTableName(newTableName)
}

func (c contactsORM) As(alias string) *contactsORM {
	c.contactsORMDo.DO = *(c.contactsORMDo.As(alias).(*gen.DO))
	return c.updateTableName(alias)
}

func (c *contactsORM) updateTableName(table string) *contactsORM {
	c.ALL = field.NewAsterisk(table)
	c.AddressesIds = field.NewField(table, "addresses_ids")
	c.Company = field.NewString(table, "company")
	c.Currency = field.NewString(table, "currency")
	c.EmailAddress = field.NewString(table, "email_address")
	c.Id = field.NewUint64(table, "id")
	c.IsCustomer = field.NewBool(table, "is_customer")
	c.IsSupplier = field.NewBool(table, "is_supplier")
	c.LinkedAccountingAccountId = field.NewUint64(table, "linked_accounting_account_id")
	c.MergeRecordId = field.NewString(table, "merge_record_id")
	c.ModifiedAt = field.NewTime(table, "modified_at")
	c.Name = field.NewString(table, "name")
	c.PhoneNumbers = field.NewField(table, "phone_numbers")
	c.RemoteId = field.NewString(table, "remote_id")
	c.RemoteUpdatedAt = field.NewTime(table, "remote_updated_at")
	c.RemoteWasDeleted = field.NewBool(table, "remote_was_deleted")
	c.Status = field.NewString(table, "status")
	c.TaxNumber = field.NewString(table, "tax_number")

	c.fillFieldMap()

	return c
}

func (c *contactsORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := c.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (c *contactsORM) fillFieldMap() {
	c.fieldMap = make(map[string]field.Expr, 17)
	c.fieldMap["addresses_ids"] = c.AddressesIds
	c.fieldMap["company"] = c.Company
	c.fieldMap["currency"] = c.Currency
	c.fieldMap["email_address"] = c.EmailAddress
	c.fieldMap["id"] = c.Id
	c.fieldMap["is_customer"] = c.IsCustomer
	c.fieldMap["is_supplier"] = c.IsSupplier
	c.fieldMap["linked_accounting_account_id"] = c.LinkedAccountingAccountId
	c.fieldMap["merge_record_id"] = c.MergeRecordId
	c.fieldMap["modified_at"] = c.ModifiedAt
	c.fieldMap["name"] = c.Name
	c.fieldMap["phone_numbers"] = c.PhoneNumbers
	c.fieldMap["remote_id"] = c.RemoteId
	c.fieldMap["remote_updated_at"] = c.RemoteUpdatedAt
	c.fieldMap["remote_was_deleted"] = c.RemoteWasDeleted
	c.fieldMap["status"] = c.Status
	c.fieldMap["tax_number"] = c.TaxNumber
}

func (c contactsORM) clone(db *gorm.DB) contactsORM {
	c.contactsORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return c
}

func (c contactsORM) replaceDB(db *gorm.DB) contactsORM {
	c.contactsORMDo.ReplaceDB(db)
	return c
}

type contactsORMDo struct{ gen.DO }

type IContactsORMDo interface {
	gen.SubQuery
	Debug() IContactsORMDo
	WithContext(ctx context.Context) IContactsORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IContactsORMDo
	WriteDB() IContactsORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IContactsORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IContactsORMDo
	Not(conds ...gen.Condition) IContactsORMDo
	Or(conds ...gen.Condition) IContactsORMDo
	Select(conds ...field.Expr) IContactsORMDo
	Where(conds ...gen.Condition) IContactsORMDo
	Order(conds ...field.Expr) IContactsORMDo
	Distinct(cols ...field.Expr) IContactsORMDo
	Omit(cols ...field.Expr) IContactsORMDo
	Join(table schema.Tabler, on ...field.Expr) IContactsORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IContactsORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IContactsORMDo
	Group(cols ...field.Expr) IContactsORMDo
	Having(conds ...gen.Condition) IContactsORMDo
	Limit(limit int) IContactsORMDo
	Offset(offset int) IContactsORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IContactsORMDo
	Unscoped() IContactsORMDo
	Create(values ...*accounting_servicev1.ContactsORM) error
	CreateInBatches(values []*accounting_servicev1.ContactsORM, batchSize int) error
	Save(values ...*accounting_servicev1.ContactsORM) error
	First() (*accounting_servicev1.ContactsORM, error)
	Take() (*accounting_servicev1.ContactsORM, error)
	Last() (*accounting_servicev1.ContactsORM, error)
	Find() ([]*accounting_servicev1.ContactsORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*accounting_servicev1.ContactsORM, err error)
	FindInBatches(result *[]*accounting_servicev1.ContactsORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*accounting_servicev1.ContactsORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IContactsORMDo
	Assign(attrs ...field.AssignExpr) IContactsORMDo
	Joins(fields ...field.RelationField) IContactsORMDo
	Preload(fields ...field.RelationField) IContactsORMDo
	FirstOrInit() (*accounting_servicev1.ContactsORM, error)
	FirstOrCreate() (*accounting_servicev1.ContactsORM, error)
	FindByPage(offset int, limit int) (result []*accounting_servicev1.ContactsORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IContactsORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result accounting_servicev1.ContactsORM, err error)
	GetRecordByIDs(ids []int) (result []accounting_servicev1.ContactsORM, err error)
	CreateRecord(item accounting_servicev1.ContactsORM) (err error)
	UpdateRecordByID(id int, item accounting_servicev1.ContactsORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []accounting_servicev1.ContactsORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result accounting_servicev1.ContactsORM, err error)
	GetByIDs(ids []uint64) (result []accounting_servicev1.ContactsORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (c contactsORMDo) GetRecordByID(id int) (result accounting_servicev1.ContactsORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM contacts ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = c.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (c contactsORMDo) GetRecordByIDs(ids []int) (result []accounting_servicev1.ContactsORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM contacts ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = c.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (c contactsORMDo) CreateRecord(item accounting_servicev1.ContactsORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO contacts (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = c.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (c contactsORMDo) UpdateRecordByID(id int, item accounting_servicev1.ContactsORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE contacts SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = c.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (c contactsORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM contacts ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = c.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (c contactsORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []accounting_servicev1.ContactsORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM contacts ORDER BY " + c.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = c.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (c contactsORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM contacts ")

	var executeSQL *gorm.DB
	executeSQL = c.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (c contactsORMDo) GetByID(id uint64) (result accounting_servicev1.ContactsORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM contacts ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = c.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (c contactsORMDo) GetByIDs(ids []uint64) (result []accounting_servicev1.ContactsORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM contacts ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = c.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (c contactsORMDo) Debug() IContactsORMDo {
	return c.withDO(c.DO.Debug())
}

func (c contactsORMDo) WithContext(ctx context.Context) IContactsORMDo {
	return c.withDO(c.DO.WithContext(ctx))
}

func (c contactsORMDo) ReadDB() IContactsORMDo {
	return c.Clauses(dbresolver.Read)
}

func (c contactsORMDo) WriteDB() IContactsORMDo {
	return c.Clauses(dbresolver.Write)
}

func (c contactsORMDo) Session(config *gorm.Session) IContactsORMDo {
	return c.withDO(c.DO.Session(config))
}

func (c contactsORMDo) Clauses(conds ...clause.Expression) IContactsORMDo {
	return c.withDO(c.DO.Clauses(conds...))
}

func (c contactsORMDo) Returning(value interface{}, columns ...string) IContactsORMDo {
	return c.withDO(c.DO.Returning(value, columns...))
}

func (c contactsORMDo) Not(conds ...gen.Condition) IContactsORMDo {
	return c.withDO(c.DO.Not(conds...))
}

func (c contactsORMDo) Or(conds ...gen.Condition) IContactsORMDo {
	return c.withDO(c.DO.Or(conds...))
}

func (c contactsORMDo) Select(conds ...field.Expr) IContactsORMDo {
	return c.withDO(c.DO.Select(conds...))
}

func (c contactsORMDo) Where(conds ...gen.Condition) IContactsORMDo {
	return c.withDO(c.DO.Where(conds...))
}

func (c contactsORMDo) Order(conds ...field.Expr) IContactsORMDo {
	return c.withDO(c.DO.Order(conds...))
}

func (c contactsORMDo) Distinct(cols ...field.Expr) IContactsORMDo {
	return c.withDO(c.DO.Distinct(cols...))
}

func (c contactsORMDo) Omit(cols ...field.Expr) IContactsORMDo {
	return c.withDO(c.DO.Omit(cols...))
}

func (c contactsORMDo) Join(table schema.Tabler, on ...field.Expr) IContactsORMDo {
	return c.withDO(c.DO.Join(table, on...))
}

func (c contactsORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IContactsORMDo {
	return c.withDO(c.DO.LeftJoin(table, on...))
}

func (c contactsORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IContactsORMDo {
	return c.withDO(c.DO.RightJoin(table, on...))
}

func (c contactsORMDo) Group(cols ...field.Expr) IContactsORMDo {
	return c.withDO(c.DO.Group(cols...))
}

func (c contactsORMDo) Having(conds ...gen.Condition) IContactsORMDo {
	return c.withDO(c.DO.Having(conds...))
}

func (c contactsORMDo) Limit(limit int) IContactsORMDo {
	return c.withDO(c.DO.Limit(limit))
}

func (c contactsORMDo) Offset(offset int) IContactsORMDo {
	return c.withDO(c.DO.Offset(offset))
}

func (c contactsORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IContactsORMDo {
	return c.withDO(c.DO.Scopes(funcs...))
}

func (c contactsORMDo) Unscoped() IContactsORMDo {
	return c.withDO(c.DO.Unscoped())
}

func (c contactsORMDo) Create(values ...*accounting_servicev1.ContactsORM) error {
	if len(values) == 0 {
		return nil
	}
	return c.DO.Create(values)
}

func (c contactsORMDo) CreateInBatches(values []*accounting_servicev1.ContactsORM, batchSize int) error {
	return c.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (c contactsORMDo) Save(values ...*accounting_servicev1.ContactsORM) error {
	if len(values) == 0 {
		return nil
	}
	return c.DO.Save(values)
}

func (c contactsORMDo) First() (*accounting_servicev1.ContactsORM, error) {
	if result, err := c.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.ContactsORM), nil
	}
}

func (c contactsORMDo) Take() (*accounting_servicev1.ContactsORM, error) {
	if result, err := c.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.ContactsORM), nil
	}
}

func (c contactsORMDo) Last() (*accounting_servicev1.ContactsORM, error) {
	if result, err := c.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.ContactsORM), nil
	}
}

func (c contactsORMDo) Find() ([]*accounting_servicev1.ContactsORM, error) {
	result, err := c.DO.Find()
	return result.([]*accounting_servicev1.ContactsORM), err
}

func (c contactsORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*accounting_servicev1.ContactsORM, err error) {
	buf := make([]*accounting_servicev1.ContactsORM, 0, batchSize)
	err = c.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (c contactsORMDo) FindInBatches(result *[]*accounting_servicev1.ContactsORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return c.DO.FindInBatches(result, batchSize, fc)
}

func (c contactsORMDo) Attrs(attrs ...field.AssignExpr) IContactsORMDo {
	return c.withDO(c.DO.Attrs(attrs...))
}

func (c contactsORMDo) Assign(attrs ...field.AssignExpr) IContactsORMDo {
	return c.withDO(c.DO.Assign(attrs...))
}

func (c contactsORMDo) Joins(fields ...field.RelationField) IContactsORMDo {
	for _, _f := range fields {
		c = *c.withDO(c.DO.Joins(_f))
	}
	return &c
}

func (c contactsORMDo) Preload(fields ...field.RelationField) IContactsORMDo {
	for _, _f := range fields {
		c = *c.withDO(c.DO.Preload(_f))
	}
	return &c
}

func (c contactsORMDo) FirstOrInit() (*accounting_servicev1.ContactsORM, error) {
	if result, err := c.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.ContactsORM), nil
	}
}

func (c contactsORMDo) FirstOrCreate() (*accounting_servicev1.ContactsORM, error) {
	if result, err := c.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.ContactsORM), nil
	}
}

func (c contactsORMDo) FindByPage(offset int, limit int) (result []*accounting_servicev1.ContactsORM, count int64, err error) {
	result, err = c.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = c.Offset(-1).Limit(-1).Count()
	return
}

func (c contactsORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = c.Count()
	if err != nil {
		return
	}

	err = c.Offset(offset).Limit(limit).Scan(result)
	return
}

func (c contactsORMDo) Scan(result interface{}) (err error) {
	return c.DO.Scan(result)
}

func (c contactsORMDo) Delete(models ...*accounting_servicev1.ContactsORM) (result gen.ResultInfo, err error) {
	return c.DO.Delete(models)
}

func (c *contactsORMDo) withDO(do gen.Dao) *contactsORMDo {
	c.DO = *do.(*gen.DO)
	return c
}
