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

func newBusinessChartOfAccountsORM(db *gorm.DB, opts ...gen.DOOption) businessChartOfAccountsORM {
	_businessChartOfAccountsORM := businessChartOfAccountsORM{}

	_businessChartOfAccountsORM.businessChartOfAccountsORMDo.UseDB(db, opts...)
	_businessChartOfAccountsORM.businessChartOfAccountsORMDo.UseModel(&financial_servicev1.BusinessChartOfAccountsORM{})

	tableName := _businessChartOfAccountsORM.businessChartOfAccountsORMDo.TableName()
	_businessChartOfAccountsORM.ALL = field.NewAsterisk(tableName)
	_businessChartOfAccountsORM.AccountNumber = field.NewString(tableName, "account_number")
	_businessChartOfAccountsORM.Classification = field.NewString(tableName, "classification")
	_businessChartOfAccountsORM.Company = field.NewString(tableName, "company")
	_businessChartOfAccountsORM.Currency = field.NewString(tableName, "currency")
	_businessChartOfAccountsORM.CurrentBalance = field.NewFloat64(tableName, "current_balance")
	_businessChartOfAccountsORM.Description = field.NewString(tableName, "description")
	_businessChartOfAccountsORM.Id = field.NewUint64(tableName, "id")
	_businessChartOfAccountsORM.MergeAccountId = field.NewString(tableName, "merge_account_id")
	_businessChartOfAccountsORM.ModifiedAt = field.NewTime(tableName, "modified_at")
	_businessChartOfAccountsORM.Name = field.NewString(tableName, "name")
	_businessChartOfAccountsORM.ParentAccountId = field.NewString(tableName, "parent_account_id")
	_businessChartOfAccountsORM.ReferenceDetailsId = field.NewUint64(tableName, "reference_details_id")
	_businessChartOfAccountsORM.RemoteId = field.NewString(tableName, "remote_id")
	_businessChartOfAccountsORM.RemoteWasDeleted = field.NewBool(tableName, "remote_was_deleted")
	_businessChartOfAccountsORM.Status = field.NewString(tableName, "status")
	_businessChartOfAccountsORM.Type = field.NewString(tableName, "type")

	_businessChartOfAccountsORM.fillFieldMap()

	return _businessChartOfAccountsORM
}

type businessChartOfAccountsORM struct {
	businessChartOfAccountsORMDo

	ALL                field.Asterisk
	AccountNumber      field.String
	Classification     field.String
	Company            field.String
	Currency           field.String
	CurrentBalance     field.Float64
	Description        field.String
	Id                 field.Uint64
	MergeAccountId     field.String
	ModifiedAt         field.Time
	Name               field.String
	ParentAccountId    field.String
	ReferenceDetailsId field.Uint64
	RemoteId           field.String
	RemoteWasDeleted   field.Bool
	Status             field.String
	Type               field.String

	fieldMap map[string]field.Expr
}

func (b businessChartOfAccountsORM) Table(newTableName string) *businessChartOfAccountsORM {
	b.businessChartOfAccountsORMDo.UseTable(newTableName)
	return b.updateTableName(newTableName)
}

func (b businessChartOfAccountsORM) As(alias string) *businessChartOfAccountsORM {
	b.businessChartOfAccountsORMDo.DO = *(b.businessChartOfAccountsORMDo.As(alias).(*gen.DO))
	return b.updateTableName(alias)
}

func (b *businessChartOfAccountsORM) updateTableName(table string) *businessChartOfAccountsORM {
	b.ALL = field.NewAsterisk(table)
	b.AccountNumber = field.NewString(table, "account_number")
	b.Classification = field.NewString(table, "classification")
	b.Company = field.NewString(table, "company")
	b.Currency = field.NewString(table, "currency")
	b.CurrentBalance = field.NewFloat64(table, "current_balance")
	b.Description = field.NewString(table, "description")
	b.Id = field.NewUint64(table, "id")
	b.MergeAccountId = field.NewString(table, "merge_account_id")
	b.ModifiedAt = field.NewTime(table, "modified_at")
	b.Name = field.NewString(table, "name")
	b.ParentAccountId = field.NewString(table, "parent_account_id")
	b.ReferenceDetailsId = field.NewUint64(table, "reference_details_id")
	b.RemoteId = field.NewString(table, "remote_id")
	b.RemoteWasDeleted = field.NewBool(table, "remote_was_deleted")
	b.Status = field.NewString(table, "status")
	b.Type = field.NewString(table, "type")

	b.fillFieldMap()

	return b
}

func (b *businessChartOfAccountsORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := b.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (b *businessChartOfAccountsORM) fillFieldMap() {
	b.fieldMap = make(map[string]field.Expr, 16)
	b.fieldMap["account_number"] = b.AccountNumber
	b.fieldMap["classification"] = b.Classification
	b.fieldMap["company"] = b.Company
	b.fieldMap["currency"] = b.Currency
	b.fieldMap["current_balance"] = b.CurrentBalance
	b.fieldMap["description"] = b.Description
	b.fieldMap["id"] = b.Id
	b.fieldMap["merge_account_id"] = b.MergeAccountId
	b.fieldMap["modified_at"] = b.ModifiedAt
	b.fieldMap["name"] = b.Name
	b.fieldMap["parent_account_id"] = b.ParentAccountId
	b.fieldMap["reference_details_id"] = b.ReferenceDetailsId
	b.fieldMap["remote_id"] = b.RemoteId
	b.fieldMap["remote_was_deleted"] = b.RemoteWasDeleted
	b.fieldMap["status"] = b.Status
	b.fieldMap["type"] = b.Type
}

func (b businessChartOfAccountsORM) clone(db *gorm.DB) businessChartOfAccountsORM {
	b.businessChartOfAccountsORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return b
}

func (b businessChartOfAccountsORM) replaceDB(db *gorm.DB) businessChartOfAccountsORM {
	b.businessChartOfAccountsORMDo.ReplaceDB(db)
	return b
}

type businessChartOfAccountsORMDo struct{ gen.DO }

type IBusinessChartOfAccountsORMDo interface {
	gen.SubQuery
	Debug() IBusinessChartOfAccountsORMDo
	WithContext(ctx context.Context) IBusinessChartOfAccountsORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IBusinessChartOfAccountsORMDo
	WriteDB() IBusinessChartOfAccountsORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IBusinessChartOfAccountsORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IBusinessChartOfAccountsORMDo
	Not(conds ...gen.Condition) IBusinessChartOfAccountsORMDo
	Or(conds ...gen.Condition) IBusinessChartOfAccountsORMDo
	Select(conds ...field.Expr) IBusinessChartOfAccountsORMDo
	Where(conds ...gen.Condition) IBusinessChartOfAccountsORMDo
	Order(conds ...field.Expr) IBusinessChartOfAccountsORMDo
	Distinct(cols ...field.Expr) IBusinessChartOfAccountsORMDo
	Omit(cols ...field.Expr) IBusinessChartOfAccountsORMDo
	Join(table schema.Tabler, on ...field.Expr) IBusinessChartOfAccountsORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IBusinessChartOfAccountsORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IBusinessChartOfAccountsORMDo
	Group(cols ...field.Expr) IBusinessChartOfAccountsORMDo
	Having(conds ...gen.Condition) IBusinessChartOfAccountsORMDo
	Limit(limit int) IBusinessChartOfAccountsORMDo
	Offset(offset int) IBusinessChartOfAccountsORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IBusinessChartOfAccountsORMDo
	Unscoped() IBusinessChartOfAccountsORMDo
	Create(values ...*financial_servicev1.BusinessChartOfAccountsORM) error
	CreateInBatches(values []*financial_servicev1.BusinessChartOfAccountsORM, batchSize int) error
	Save(values ...*financial_servicev1.BusinessChartOfAccountsORM) error
	First() (*financial_servicev1.BusinessChartOfAccountsORM, error)
	Take() (*financial_servicev1.BusinessChartOfAccountsORM, error)
	Last() (*financial_servicev1.BusinessChartOfAccountsORM, error)
	Find() ([]*financial_servicev1.BusinessChartOfAccountsORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.BusinessChartOfAccountsORM, err error)
	FindInBatches(result *[]*financial_servicev1.BusinessChartOfAccountsORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*financial_servicev1.BusinessChartOfAccountsORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IBusinessChartOfAccountsORMDo
	Assign(attrs ...field.AssignExpr) IBusinessChartOfAccountsORMDo
	Joins(fields ...field.RelationField) IBusinessChartOfAccountsORMDo
	Preload(fields ...field.RelationField) IBusinessChartOfAccountsORMDo
	FirstOrInit() (*financial_servicev1.BusinessChartOfAccountsORM, error)
	FirstOrCreate() (*financial_servicev1.BusinessChartOfAccountsORM, error)
	FindByPage(offset int, limit int) (result []*financial_servicev1.BusinessChartOfAccountsORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IBusinessChartOfAccountsORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result financial_servicev1.BusinessChartOfAccountsORM, err error)
	GetRecordByIDs(ids []int) (result []financial_servicev1.BusinessChartOfAccountsORM, err error)
	CreateRecord(item financial_servicev1.BusinessChartOfAccountsORM) (err error)
	UpdateRecordByID(id int, item financial_servicev1.BusinessChartOfAccountsORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.BusinessChartOfAccountsORM, err error)
	CountAll() (result int, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (b businessChartOfAccountsORMDo) GetRecordByID(id int) (result financial_servicev1.BusinessChartOfAccountsORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM business_chart_of_accounts ")
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
func (b businessChartOfAccountsORMDo) GetRecordByIDs(ids []int) (result []financial_servicev1.BusinessChartOfAccountsORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM business_chart_of_accounts ")
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
func (b businessChartOfAccountsORMDo) CreateRecord(item financial_servicev1.BusinessChartOfAccountsORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO business_chart_of_accounts (columns) VALUES (values) ")

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
func (b businessChartOfAccountsORMDo) UpdateRecordByID(id int, item financial_servicev1.BusinessChartOfAccountsORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE business_chart_of_accounts SET columns=values ")
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
func (b businessChartOfAccountsORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM business_chart_of_accounts ")
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
func (b businessChartOfAccountsORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.BusinessChartOfAccountsORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM business_chart_of_accounts ORDER BY " + b.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (b businessChartOfAccountsORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM business_chart_of_accounts ")

	var executeSQL *gorm.DB
	executeSQL = b.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (b businessChartOfAccountsORMDo) Debug() IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.Debug())
}

func (b businessChartOfAccountsORMDo) WithContext(ctx context.Context) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.WithContext(ctx))
}

func (b businessChartOfAccountsORMDo) ReadDB() IBusinessChartOfAccountsORMDo {
	return b.Clauses(dbresolver.Read)
}

func (b businessChartOfAccountsORMDo) WriteDB() IBusinessChartOfAccountsORMDo {
	return b.Clauses(dbresolver.Write)
}

func (b businessChartOfAccountsORMDo) Session(config *gorm.Session) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.Session(config))
}

func (b businessChartOfAccountsORMDo) Clauses(conds ...clause.Expression) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.Clauses(conds...))
}

func (b businessChartOfAccountsORMDo) Returning(value interface{}, columns ...string) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.Returning(value, columns...))
}

func (b businessChartOfAccountsORMDo) Not(conds ...gen.Condition) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.Not(conds...))
}

func (b businessChartOfAccountsORMDo) Or(conds ...gen.Condition) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.Or(conds...))
}

func (b businessChartOfAccountsORMDo) Select(conds ...field.Expr) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.Select(conds...))
}

func (b businessChartOfAccountsORMDo) Where(conds ...gen.Condition) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.Where(conds...))
}

func (b businessChartOfAccountsORMDo) Order(conds ...field.Expr) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.Order(conds...))
}

func (b businessChartOfAccountsORMDo) Distinct(cols ...field.Expr) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.Distinct(cols...))
}

func (b businessChartOfAccountsORMDo) Omit(cols ...field.Expr) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.Omit(cols...))
}

func (b businessChartOfAccountsORMDo) Join(table schema.Tabler, on ...field.Expr) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.Join(table, on...))
}

func (b businessChartOfAccountsORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.LeftJoin(table, on...))
}

func (b businessChartOfAccountsORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.RightJoin(table, on...))
}

func (b businessChartOfAccountsORMDo) Group(cols ...field.Expr) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.Group(cols...))
}

func (b businessChartOfAccountsORMDo) Having(conds ...gen.Condition) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.Having(conds...))
}

func (b businessChartOfAccountsORMDo) Limit(limit int) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.Limit(limit))
}

func (b businessChartOfAccountsORMDo) Offset(offset int) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.Offset(offset))
}

func (b businessChartOfAccountsORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.Scopes(funcs...))
}

func (b businessChartOfAccountsORMDo) Unscoped() IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.Unscoped())
}

func (b businessChartOfAccountsORMDo) Create(values ...*financial_servicev1.BusinessChartOfAccountsORM) error {
	if len(values) == 0 {
		return nil
	}
	return b.DO.Create(values)
}

func (b businessChartOfAccountsORMDo) CreateInBatches(values []*financial_servicev1.BusinessChartOfAccountsORM, batchSize int) error {
	return b.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (b businessChartOfAccountsORMDo) Save(values ...*financial_servicev1.BusinessChartOfAccountsORM) error {
	if len(values) == 0 {
		return nil
	}
	return b.DO.Save(values)
}

func (b businessChartOfAccountsORMDo) First() (*financial_servicev1.BusinessChartOfAccountsORM, error) {
	if result, err := b.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.BusinessChartOfAccountsORM), nil
	}
}

func (b businessChartOfAccountsORMDo) Take() (*financial_servicev1.BusinessChartOfAccountsORM, error) {
	if result, err := b.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.BusinessChartOfAccountsORM), nil
	}
}

func (b businessChartOfAccountsORMDo) Last() (*financial_servicev1.BusinessChartOfAccountsORM, error) {
	if result, err := b.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.BusinessChartOfAccountsORM), nil
	}
}

func (b businessChartOfAccountsORMDo) Find() ([]*financial_servicev1.BusinessChartOfAccountsORM, error) {
	result, err := b.DO.Find()
	return result.([]*financial_servicev1.BusinessChartOfAccountsORM), err
}

func (b businessChartOfAccountsORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.BusinessChartOfAccountsORM, err error) {
	buf := make([]*financial_servicev1.BusinessChartOfAccountsORM, 0, batchSize)
	err = b.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (b businessChartOfAccountsORMDo) FindInBatches(result *[]*financial_servicev1.BusinessChartOfAccountsORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return b.DO.FindInBatches(result, batchSize, fc)
}

func (b businessChartOfAccountsORMDo) Attrs(attrs ...field.AssignExpr) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.Attrs(attrs...))
}

func (b businessChartOfAccountsORMDo) Assign(attrs ...field.AssignExpr) IBusinessChartOfAccountsORMDo {
	return b.withDO(b.DO.Assign(attrs...))
}

func (b businessChartOfAccountsORMDo) Joins(fields ...field.RelationField) IBusinessChartOfAccountsORMDo {
	for _, _f := range fields {
		b = *b.withDO(b.DO.Joins(_f))
	}
	return &b
}

func (b businessChartOfAccountsORMDo) Preload(fields ...field.RelationField) IBusinessChartOfAccountsORMDo {
	for _, _f := range fields {
		b = *b.withDO(b.DO.Preload(_f))
	}
	return &b
}

func (b businessChartOfAccountsORMDo) FirstOrInit() (*financial_servicev1.BusinessChartOfAccountsORM, error) {
	if result, err := b.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.BusinessChartOfAccountsORM), nil
	}
}

func (b businessChartOfAccountsORMDo) FirstOrCreate() (*financial_servicev1.BusinessChartOfAccountsORM, error) {
	if result, err := b.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.BusinessChartOfAccountsORM), nil
	}
}

func (b businessChartOfAccountsORMDo) FindByPage(offset int, limit int) (result []*financial_servicev1.BusinessChartOfAccountsORM, count int64, err error) {
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

func (b businessChartOfAccountsORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = b.Count()
	if err != nil {
		return
	}

	err = b.Offset(offset).Limit(limit).Scan(result)
	return
}

func (b businessChartOfAccountsORMDo) Scan(result interface{}) (err error) {
	return b.DO.Scan(result)
}

func (b businessChartOfAccountsORMDo) Delete(models ...*financial_servicev1.BusinessChartOfAccountsORM) (result gen.ResultInfo, err error) {
	return b.DO.Delete(models)
}

func (b *businessChartOfAccountsORMDo) withDO(do gen.Dao) *businessChartOfAccountsORMDo {
	b.DO = *do.(*gen.DO)
	return b
}
