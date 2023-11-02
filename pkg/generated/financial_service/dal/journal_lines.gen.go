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

func newJournalLineORM(db *gorm.DB, opts ...gen.DOOption) journalLineORM {
	_journalLineORM := journalLineORM{}

	_journalLineORM.journalLineORMDo.UseDB(db, opts...)
	_journalLineORM.journalLineORMDo.UseModel(&financial_servicev1.JournalLineORM{})

	tableName := _journalLineORM.journalLineORMDo.TableName()
	_journalLineORM.ALL = field.NewAsterisk(tableName)
	_journalLineORM.Account = field.NewString(tableName, "account")
	_journalLineORM.Company = field.NewString(tableName, "company")
	_journalLineORM.Contact = field.NewString(tableName, "contact")
	_journalLineORM.Description = field.NewString(tableName, "description")
	_journalLineORM.ExchangeRate = field.NewString(tableName, "exchange_rate")
	_journalLineORM.Id = field.NewUint64(tableName, "id")
	_journalLineORM.JournalEntryId = field.NewUint64(tableName, "journal_entry_id")
	_journalLineORM.ModifiedAt = field.NewTime(tableName, "modified_at")
	_journalLineORM.NetAmount = field.NewFloat32(tableName, "net_amount")
	_journalLineORM.RemoteId = field.NewString(tableName, "remote_id")
	_journalLineORM.TrackingCategories = field.NewField(tableName, "tracking_categories")
	_journalLineORM.TrackingCategory = field.NewString(tableName, "tracking_category")

	_journalLineORM.fillFieldMap()

	return _journalLineORM
}

type journalLineORM struct {
	journalLineORMDo

	ALL                field.Asterisk
	Account            field.String
	Company            field.String
	Contact            field.String
	Description        field.String
	ExchangeRate       field.String
	Id                 field.Uint64
	JournalEntryId     field.Uint64
	ModifiedAt         field.Time
	NetAmount          field.Float32
	RemoteId           field.String
	TrackingCategories field.Field
	TrackingCategory   field.String

	fieldMap map[string]field.Expr
}

func (j journalLineORM) Table(newTableName string) *journalLineORM {
	j.journalLineORMDo.UseTable(newTableName)
	return j.updateTableName(newTableName)
}

func (j journalLineORM) As(alias string) *journalLineORM {
	j.journalLineORMDo.DO = *(j.journalLineORMDo.As(alias).(*gen.DO))
	return j.updateTableName(alias)
}

func (j *journalLineORM) updateTableName(table string) *journalLineORM {
	j.ALL = field.NewAsterisk(table)
	j.Account = field.NewString(table, "account")
	j.Company = field.NewString(table, "company")
	j.Contact = field.NewString(table, "contact")
	j.Description = field.NewString(table, "description")
	j.ExchangeRate = field.NewString(table, "exchange_rate")
	j.Id = field.NewUint64(table, "id")
	j.JournalEntryId = field.NewUint64(table, "journal_entry_id")
	j.ModifiedAt = field.NewTime(table, "modified_at")
	j.NetAmount = field.NewFloat32(table, "net_amount")
	j.RemoteId = field.NewString(table, "remote_id")
	j.TrackingCategories = field.NewField(table, "tracking_categories")
	j.TrackingCategory = field.NewString(table, "tracking_category")

	j.fillFieldMap()

	return j
}

func (j *journalLineORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := j.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (j *journalLineORM) fillFieldMap() {
	j.fieldMap = make(map[string]field.Expr, 12)
	j.fieldMap["account"] = j.Account
	j.fieldMap["company"] = j.Company
	j.fieldMap["contact"] = j.Contact
	j.fieldMap["description"] = j.Description
	j.fieldMap["exchange_rate"] = j.ExchangeRate
	j.fieldMap["id"] = j.Id
	j.fieldMap["journal_entry_id"] = j.JournalEntryId
	j.fieldMap["modified_at"] = j.ModifiedAt
	j.fieldMap["net_amount"] = j.NetAmount
	j.fieldMap["remote_id"] = j.RemoteId
	j.fieldMap["tracking_categories"] = j.TrackingCategories
	j.fieldMap["tracking_category"] = j.TrackingCategory
}

func (j journalLineORM) clone(db *gorm.DB) journalLineORM {
	j.journalLineORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return j
}

func (j journalLineORM) replaceDB(db *gorm.DB) journalLineORM {
	j.journalLineORMDo.ReplaceDB(db)
	return j
}

type journalLineORMDo struct{ gen.DO }

type IJournalLineORMDo interface {
	gen.SubQuery
	Debug() IJournalLineORMDo
	WithContext(ctx context.Context) IJournalLineORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IJournalLineORMDo
	WriteDB() IJournalLineORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IJournalLineORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IJournalLineORMDo
	Not(conds ...gen.Condition) IJournalLineORMDo
	Or(conds ...gen.Condition) IJournalLineORMDo
	Select(conds ...field.Expr) IJournalLineORMDo
	Where(conds ...gen.Condition) IJournalLineORMDo
	Order(conds ...field.Expr) IJournalLineORMDo
	Distinct(cols ...field.Expr) IJournalLineORMDo
	Omit(cols ...field.Expr) IJournalLineORMDo
	Join(table schema.Tabler, on ...field.Expr) IJournalLineORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IJournalLineORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IJournalLineORMDo
	Group(cols ...field.Expr) IJournalLineORMDo
	Having(conds ...gen.Condition) IJournalLineORMDo
	Limit(limit int) IJournalLineORMDo
	Offset(offset int) IJournalLineORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IJournalLineORMDo
	Unscoped() IJournalLineORMDo
	Create(values ...*financial_servicev1.JournalLineORM) error
	CreateInBatches(values []*financial_servicev1.JournalLineORM, batchSize int) error
	Save(values ...*financial_servicev1.JournalLineORM) error
	First() (*financial_servicev1.JournalLineORM, error)
	Take() (*financial_servicev1.JournalLineORM, error)
	Last() (*financial_servicev1.JournalLineORM, error)
	Find() ([]*financial_servicev1.JournalLineORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.JournalLineORM, err error)
	FindInBatches(result *[]*financial_servicev1.JournalLineORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*financial_servicev1.JournalLineORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IJournalLineORMDo
	Assign(attrs ...field.AssignExpr) IJournalLineORMDo
	Joins(fields ...field.RelationField) IJournalLineORMDo
	Preload(fields ...field.RelationField) IJournalLineORMDo
	FirstOrInit() (*financial_servicev1.JournalLineORM, error)
	FirstOrCreate() (*financial_servicev1.JournalLineORM, error)
	FindByPage(offset int, limit int) (result []*financial_servicev1.JournalLineORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IJournalLineORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result financial_servicev1.JournalLineORM, err error)
	GetRecordByIDs(ids []int) (result []financial_servicev1.JournalLineORM, err error)
	CreateRecord(item financial_servicev1.JournalLineORM) (err error)
	UpdateRecordByID(id int, item financial_servicev1.JournalLineORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.JournalLineORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result financial_servicev1.JournalLineORM, err error)
	GetByIDs(ids []uint64) (result []financial_servicev1.JournalLineORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (j journalLineORMDo) GetRecordByID(id int) (result financial_servicev1.JournalLineORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM journal_lines ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = j.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (j journalLineORMDo) GetRecordByIDs(ids []int) (result []financial_servicev1.JournalLineORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM journal_lines ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = j.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (j journalLineORMDo) CreateRecord(item financial_servicev1.JournalLineORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO journal_lines (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = j.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (j journalLineORMDo) UpdateRecordByID(id int, item financial_servicev1.JournalLineORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE journal_lines SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = j.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (j journalLineORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM journal_lines ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = j.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (j journalLineORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []financial_servicev1.JournalLineORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM journal_lines ORDER BY " + j.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = j.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (j journalLineORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM journal_lines ")

	var executeSQL *gorm.DB
	executeSQL = j.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (j journalLineORMDo) GetByID(id uint64) (result financial_servicev1.JournalLineORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM journal_lines ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = j.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (j journalLineORMDo) GetByIDs(ids []uint64) (result []financial_servicev1.JournalLineORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM journal_lines ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = j.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (j journalLineORMDo) Debug() IJournalLineORMDo {
	return j.withDO(j.DO.Debug())
}

func (j journalLineORMDo) WithContext(ctx context.Context) IJournalLineORMDo {
	return j.withDO(j.DO.WithContext(ctx))
}

func (j journalLineORMDo) ReadDB() IJournalLineORMDo {
	return j.Clauses(dbresolver.Read)
}

func (j journalLineORMDo) WriteDB() IJournalLineORMDo {
	return j.Clauses(dbresolver.Write)
}

func (j journalLineORMDo) Session(config *gorm.Session) IJournalLineORMDo {
	return j.withDO(j.DO.Session(config))
}

func (j journalLineORMDo) Clauses(conds ...clause.Expression) IJournalLineORMDo {
	return j.withDO(j.DO.Clauses(conds...))
}

func (j journalLineORMDo) Returning(value interface{}, columns ...string) IJournalLineORMDo {
	return j.withDO(j.DO.Returning(value, columns...))
}

func (j journalLineORMDo) Not(conds ...gen.Condition) IJournalLineORMDo {
	return j.withDO(j.DO.Not(conds...))
}

func (j journalLineORMDo) Or(conds ...gen.Condition) IJournalLineORMDo {
	return j.withDO(j.DO.Or(conds...))
}

func (j journalLineORMDo) Select(conds ...field.Expr) IJournalLineORMDo {
	return j.withDO(j.DO.Select(conds...))
}

func (j journalLineORMDo) Where(conds ...gen.Condition) IJournalLineORMDo {
	return j.withDO(j.DO.Where(conds...))
}

func (j journalLineORMDo) Order(conds ...field.Expr) IJournalLineORMDo {
	return j.withDO(j.DO.Order(conds...))
}

func (j journalLineORMDo) Distinct(cols ...field.Expr) IJournalLineORMDo {
	return j.withDO(j.DO.Distinct(cols...))
}

func (j journalLineORMDo) Omit(cols ...field.Expr) IJournalLineORMDo {
	return j.withDO(j.DO.Omit(cols...))
}

func (j journalLineORMDo) Join(table schema.Tabler, on ...field.Expr) IJournalLineORMDo {
	return j.withDO(j.DO.Join(table, on...))
}

func (j journalLineORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IJournalLineORMDo {
	return j.withDO(j.DO.LeftJoin(table, on...))
}

func (j journalLineORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IJournalLineORMDo {
	return j.withDO(j.DO.RightJoin(table, on...))
}

func (j journalLineORMDo) Group(cols ...field.Expr) IJournalLineORMDo {
	return j.withDO(j.DO.Group(cols...))
}

func (j journalLineORMDo) Having(conds ...gen.Condition) IJournalLineORMDo {
	return j.withDO(j.DO.Having(conds...))
}

func (j journalLineORMDo) Limit(limit int) IJournalLineORMDo {
	return j.withDO(j.DO.Limit(limit))
}

func (j journalLineORMDo) Offset(offset int) IJournalLineORMDo {
	return j.withDO(j.DO.Offset(offset))
}

func (j journalLineORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IJournalLineORMDo {
	return j.withDO(j.DO.Scopes(funcs...))
}

func (j journalLineORMDo) Unscoped() IJournalLineORMDo {
	return j.withDO(j.DO.Unscoped())
}

func (j journalLineORMDo) Create(values ...*financial_servicev1.JournalLineORM) error {
	if len(values) == 0 {
		return nil
	}
	return j.DO.Create(values)
}

func (j journalLineORMDo) CreateInBatches(values []*financial_servicev1.JournalLineORM, batchSize int) error {
	return j.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (j journalLineORMDo) Save(values ...*financial_servicev1.JournalLineORM) error {
	if len(values) == 0 {
		return nil
	}
	return j.DO.Save(values)
}

func (j journalLineORMDo) First() (*financial_servicev1.JournalLineORM, error) {
	if result, err := j.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.JournalLineORM), nil
	}
}

func (j journalLineORMDo) Take() (*financial_servicev1.JournalLineORM, error) {
	if result, err := j.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.JournalLineORM), nil
	}
}

func (j journalLineORMDo) Last() (*financial_servicev1.JournalLineORM, error) {
	if result, err := j.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.JournalLineORM), nil
	}
}

func (j journalLineORMDo) Find() ([]*financial_servicev1.JournalLineORM, error) {
	result, err := j.DO.Find()
	return result.([]*financial_servicev1.JournalLineORM), err
}

func (j journalLineORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*financial_servicev1.JournalLineORM, err error) {
	buf := make([]*financial_servicev1.JournalLineORM, 0, batchSize)
	err = j.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (j journalLineORMDo) FindInBatches(result *[]*financial_servicev1.JournalLineORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return j.DO.FindInBatches(result, batchSize, fc)
}

func (j journalLineORMDo) Attrs(attrs ...field.AssignExpr) IJournalLineORMDo {
	return j.withDO(j.DO.Attrs(attrs...))
}

func (j journalLineORMDo) Assign(attrs ...field.AssignExpr) IJournalLineORMDo {
	return j.withDO(j.DO.Assign(attrs...))
}

func (j journalLineORMDo) Joins(fields ...field.RelationField) IJournalLineORMDo {
	for _, _f := range fields {
		j = *j.withDO(j.DO.Joins(_f))
	}
	return &j
}

func (j journalLineORMDo) Preload(fields ...field.RelationField) IJournalLineORMDo {
	for _, _f := range fields {
		j = *j.withDO(j.DO.Preload(_f))
	}
	return &j
}

func (j journalLineORMDo) FirstOrInit() (*financial_servicev1.JournalLineORM, error) {
	if result, err := j.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.JournalLineORM), nil
	}
}

func (j journalLineORMDo) FirstOrCreate() (*financial_servicev1.JournalLineORM, error) {
	if result, err := j.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*financial_servicev1.JournalLineORM), nil
	}
}

func (j journalLineORMDo) FindByPage(offset int, limit int) (result []*financial_servicev1.JournalLineORM, count int64, err error) {
	result, err = j.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = j.Offset(-1).Limit(-1).Count()
	return
}

func (j journalLineORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = j.Count()
	if err != nil {
		return
	}

	err = j.Offset(offset).Limit(limit).Scan(result)
	return
}

func (j journalLineORMDo) Scan(result interface{}) (err error) {
	return j.DO.Scan(result)
}

func (j journalLineORMDo) Delete(models ...*financial_servicev1.JournalLineORM) (result gen.ResultInfo, err error) {
	return j.DO.Delete(models)
}

func (j *journalLineORMDo) withDO(do gen.Dao) *journalLineORMDo {
	j.DO = *do.(*gen.DO)
	return j
}
