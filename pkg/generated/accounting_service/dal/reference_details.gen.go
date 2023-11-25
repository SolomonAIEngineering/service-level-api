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

func newReferenceDetailsORM(db *gorm.DB, opts ...gen.DOOption) referenceDetailsORM {
	_referenceDetailsORM := referenceDetailsORM{}

	_referenceDetailsORM.referenceDetailsORMDo.UseDB(db, opts...)
	_referenceDetailsORM.referenceDetailsORMDo.UseModel(&accounting_servicev1.ReferenceDetailsORM{})

	tableName := _referenceDetailsORM.referenceDetailsORMDo.TableName()
	_referenceDetailsORM.ALL = field.NewAsterisk(tableName)
	_referenceDetailsORM.Id = field.NewUint64(tableName, "id")
	_referenceDetailsORM.LinkedAccountingAccountId = field.NewUint64(tableName, "linked_accounting_account_id")
	_referenceDetailsORM.ChartOfAccounts = referenceDetailsORMHasManyChartOfAccounts{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("ChartOfAccounts", "accounting_servicev1.BusinessChartOfAccountsORM"),
	}

	_referenceDetailsORM.Contacts = referenceDetailsORMHasManyContacts{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Contacts", "accounting_servicev1.ContactsORM"),
	}

	_referenceDetailsORM.Items = referenceDetailsORMHasManyItems{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Items", "accounting_servicev1.ItemORM"),
	}

	_referenceDetailsORM.TaxRates = referenceDetailsORMHasManyTaxRates{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("TaxRates", "accounting_servicev1.TaxRateORM"),
	}

	_referenceDetailsORM.fillFieldMap()

	return _referenceDetailsORM
}

type referenceDetailsORM struct {
	referenceDetailsORMDo

	ALL                       field.Asterisk
	Id                        field.Uint64
	LinkedAccountingAccountId field.Uint64
	ChartOfAccounts           referenceDetailsORMHasManyChartOfAccounts

	Contacts referenceDetailsORMHasManyContacts

	Items referenceDetailsORMHasManyItems

	TaxRates referenceDetailsORMHasManyTaxRates

	fieldMap map[string]field.Expr
}

func (r referenceDetailsORM) Table(newTableName string) *referenceDetailsORM {
	r.referenceDetailsORMDo.UseTable(newTableName)
	return r.updateTableName(newTableName)
}

func (r referenceDetailsORM) As(alias string) *referenceDetailsORM {
	r.referenceDetailsORMDo.DO = *(r.referenceDetailsORMDo.As(alias).(*gen.DO))
	return r.updateTableName(alias)
}

func (r *referenceDetailsORM) updateTableName(table string) *referenceDetailsORM {
	r.ALL = field.NewAsterisk(table)
	r.Id = field.NewUint64(table, "id")
	r.LinkedAccountingAccountId = field.NewUint64(table, "linked_accounting_account_id")

	r.fillFieldMap()

	return r
}

func (r *referenceDetailsORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := r.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (r *referenceDetailsORM) fillFieldMap() {
	r.fieldMap = make(map[string]field.Expr, 6)
	r.fieldMap["id"] = r.Id
	r.fieldMap["linked_accounting_account_id"] = r.LinkedAccountingAccountId

}

func (r referenceDetailsORM) clone(db *gorm.DB) referenceDetailsORM {
	r.referenceDetailsORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return r
}

func (r referenceDetailsORM) replaceDB(db *gorm.DB) referenceDetailsORM {
	r.referenceDetailsORMDo.ReplaceDB(db)
	return r
}

type referenceDetailsORMHasManyChartOfAccounts struct {
	db *gorm.DB

	field.RelationField
}

func (a referenceDetailsORMHasManyChartOfAccounts) Where(conds ...field.Expr) *referenceDetailsORMHasManyChartOfAccounts {
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

func (a referenceDetailsORMHasManyChartOfAccounts) WithContext(ctx context.Context) *referenceDetailsORMHasManyChartOfAccounts {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a referenceDetailsORMHasManyChartOfAccounts) Session(session *gorm.Session) *referenceDetailsORMHasManyChartOfAccounts {
	a.db = a.db.Session(session)
	return &a
}

func (a referenceDetailsORMHasManyChartOfAccounts) Model(m *accounting_servicev1.ReferenceDetailsORM) *referenceDetailsORMHasManyChartOfAccountsTx {
	return &referenceDetailsORMHasManyChartOfAccountsTx{a.db.Model(m).Association(a.Name())}
}

type referenceDetailsORMHasManyChartOfAccountsTx struct{ tx *gorm.Association }

func (a referenceDetailsORMHasManyChartOfAccountsTx) Find() (result []*accounting_servicev1.BusinessChartOfAccountsORM, err error) {
	return result, a.tx.Find(&result)
}

func (a referenceDetailsORMHasManyChartOfAccountsTx) Append(values ...*accounting_servicev1.BusinessChartOfAccountsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a referenceDetailsORMHasManyChartOfAccountsTx) Replace(values ...*accounting_servicev1.BusinessChartOfAccountsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a referenceDetailsORMHasManyChartOfAccountsTx) Delete(values ...*accounting_servicev1.BusinessChartOfAccountsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a referenceDetailsORMHasManyChartOfAccountsTx) Clear() error {
	return a.tx.Clear()
}

func (a referenceDetailsORMHasManyChartOfAccountsTx) Count() int64 {
	return a.tx.Count()
}

type referenceDetailsORMHasManyContacts struct {
	db *gorm.DB

	field.RelationField
}

func (a referenceDetailsORMHasManyContacts) Where(conds ...field.Expr) *referenceDetailsORMHasManyContacts {
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

func (a referenceDetailsORMHasManyContacts) WithContext(ctx context.Context) *referenceDetailsORMHasManyContacts {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a referenceDetailsORMHasManyContacts) Session(session *gorm.Session) *referenceDetailsORMHasManyContacts {
	a.db = a.db.Session(session)
	return &a
}

func (a referenceDetailsORMHasManyContacts) Model(m *accounting_servicev1.ReferenceDetailsORM) *referenceDetailsORMHasManyContactsTx {
	return &referenceDetailsORMHasManyContactsTx{a.db.Model(m).Association(a.Name())}
}

type referenceDetailsORMHasManyContactsTx struct{ tx *gorm.Association }

func (a referenceDetailsORMHasManyContactsTx) Find() (result []*accounting_servicev1.ContactsORM, err error) {
	return result, a.tx.Find(&result)
}

func (a referenceDetailsORMHasManyContactsTx) Append(values ...*accounting_servicev1.ContactsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a referenceDetailsORMHasManyContactsTx) Replace(values ...*accounting_servicev1.ContactsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a referenceDetailsORMHasManyContactsTx) Delete(values ...*accounting_servicev1.ContactsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a referenceDetailsORMHasManyContactsTx) Clear() error {
	return a.tx.Clear()
}

func (a referenceDetailsORMHasManyContactsTx) Count() int64 {
	return a.tx.Count()
}

type referenceDetailsORMHasManyItems struct {
	db *gorm.DB

	field.RelationField
}

func (a referenceDetailsORMHasManyItems) Where(conds ...field.Expr) *referenceDetailsORMHasManyItems {
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

func (a referenceDetailsORMHasManyItems) WithContext(ctx context.Context) *referenceDetailsORMHasManyItems {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a referenceDetailsORMHasManyItems) Session(session *gorm.Session) *referenceDetailsORMHasManyItems {
	a.db = a.db.Session(session)
	return &a
}

func (a referenceDetailsORMHasManyItems) Model(m *accounting_servicev1.ReferenceDetailsORM) *referenceDetailsORMHasManyItemsTx {
	return &referenceDetailsORMHasManyItemsTx{a.db.Model(m).Association(a.Name())}
}

type referenceDetailsORMHasManyItemsTx struct{ tx *gorm.Association }

func (a referenceDetailsORMHasManyItemsTx) Find() (result []*accounting_servicev1.ItemORM, err error) {
	return result, a.tx.Find(&result)
}

func (a referenceDetailsORMHasManyItemsTx) Append(values ...*accounting_servicev1.ItemORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a referenceDetailsORMHasManyItemsTx) Replace(values ...*accounting_servicev1.ItemORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a referenceDetailsORMHasManyItemsTx) Delete(values ...*accounting_servicev1.ItemORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a referenceDetailsORMHasManyItemsTx) Clear() error {
	return a.tx.Clear()
}

func (a referenceDetailsORMHasManyItemsTx) Count() int64 {
	return a.tx.Count()
}

type referenceDetailsORMHasManyTaxRates struct {
	db *gorm.DB

	field.RelationField
}

func (a referenceDetailsORMHasManyTaxRates) Where(conds ...field.Expr) *referenceDetailsORMHasManyTaxRates {
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

func (a referenceDetailsORMHasManyTaxRates) WithContext(ctx context.Context) *referenceDetailsORMHasManyTaxRates {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a referenceDetailsORMHasManyTaxRates) Session(session *gorm.Session) *referenceDetailsORMHasManyTaxRates {
	a.db = a.db.Session(session)
	return &a
}

func (a referenceDetailsORMHasManyTaxRates) Model(m *accounting_servicev1.ReferenceDetailsORM) *referenceDetailsORMHasManyTaxRatesTx {
	return &referenceDetailsORMHasManyTaxRatesTx{a.db.Model(m).Association(a.Name())}
}

type referenceDetailsORMHasManyTaxRatesTx struct{ tx *gorm.Association }

func (a referenceDetailsORMHasManyTaxRatesTx) Find() (result []*accounting_servicev1.TaxRateORM, err error) {
	return result, a.tx.Find(&result)
}

func (a referenceDetailsORMHasManyTaxRatesTx) Append(values ...*accounting_servicev1.TaxRateORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a referenceDetailsORMHasManyTaxRatesTx) Replace(values ...*accounting_servicev1.TaxRateORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a referenceDetailsORMHasManyTaxRatesTx) Delete(values ...*accounting_servicev1.TaxRateORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a referenceDetailsORMHasManyTaxRatesTx) Clear() error {
	return a.tx.Clear()
}

func (a referenceDetailsORMHasManyTaxRatesTx) Count() int64 {
	return a.tx.Count()
}

type referenceDetailsORMDo struct{ gen.DO }

type IReferenceDetailsORMDo interface {
	gen.SubQuery
	Debug() IReferenceDetailsORMDo
	WithContext(ctx context.Context) IReferenceDetailsORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IReferenceDetailsORMDo
	WriteDB() IReferenceDetailsORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IReferenceDetailsORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IReferenceDetailsORMDo
	Not(conds ...gen.Condition) IReferenceDetailsORMDo
	Or(conds ...gen.Condition) IReferenceDetailsORMDo
	Select(conds ...field.Expr) IReferenceDetailsORMDo
	Where(conds ...gen.Condition) IReferenceDetailsORMDo
	Order(conds ...field.Expr) IReferenceDetailsORMDo
	Distinct(cols ...field.Expr) IReferenceDetailsORMDo
	Omit(cols ...field.Expr) IReferenceDetailsORMDo
	Join(table schema.Tabler, on ...field.Expr) IReferenceDetailsORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IReferenceDetailsORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IReferenceDetailsORMDo
	Group(cols ...field.Expr) IReferenceDetailsORMDo
	Having(conds ...gen.Condition) IReferenceDetailsORMDo
	Limit(limit int) IReferenceDetailsORMDo
	Offset(offset int) IReferenceDetailsORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IReferenceDetailsORMDo
	Unscoped() IReferenceDetailsORMDo
	Create(values ...*accounting_servicev1.ReferenceDetailsORM) error
	CreateInBatches(values []*accounting_servicev1.ReferenceDetailsORM, batchSize int) error
	Save(values ...*accounting_servicev1.ReferenceDetailsORM) error
	First() (*accounting_servicev1.ReferenceDetailsORM, error)
	Take() (*accounting_servicev1.ReferenceDetailsORM, error)
	Last() (*accounting_servicev1.ReferenceDetailsORM, error)
	Find() ([]*accounting_servicev1.ReferenceDetailsORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*accounting_servicev1.ReferenceDetailsORM, err error)
	FindInBatches(result *[]*accounting_servicev1.ReferenceDetailsORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*accounting_servicev1.ReferenceDetailsORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IReferenceDetailsORMDo
	Assign(attrs ...field.AssignExpr) IReferenceDetailsORMDo
	Joins(fields ...field.RelationField) IReferenceDetailsORMDo
	Preload(fields ...field.RelationField) IReferenceDetailsORMDo
	FirstOrInit() (*accounting_servicev1.ReferenceDetailsORM, error)
	FirstOrCreate() (*accounting_servicev1.ReferenceDetailsORM, error)
	FindByPage(offset int, limit int) (result []*accounting_servicev1.ReferenceDetailsORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IReferenceDetailsORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result accounting_servicev1.ReferenceDetailsORM, err error)
	GetRecordByIDs(ids []int) (result []accounting_servicev1.ReferenceDetailsORM, err error)
	CreateRecord(item accounting_servicev1.ReferenceDetailsORM) (err error)
	UpdateRecordByID(id int, item accounting_servicev1.ReferenceDetailsORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []accounting_servicev1.ReferenceDetailsORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result accounting_servicev1.ReferenceDetailsORM, err error)
	GetByIDs(ids []uint64) (result []accounting_servicev1.ReferenceDetailsORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (r referenceDetailsORMDo) GetRecordByID(id int) (result accounting_servicev1.ReferenceDetailsORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM reference_details ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = r.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (r referenceDetailsORMDo) GetRecordByIDs(ids []int) (result []accounting_servicev1.ReferenceDetailsORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM reference_details ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = r.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (r referenceDetailsORMDo) CreateRecord(item accounting_servicev1.ReferenceDetailsORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO reference_details (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = r.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (r referenceDetailsORMDo) UpdateRecordByID(id int, item accounting_servicev1.ReferenceDetailsORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE reference_details SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = r.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (r referenceDetailsORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM reference_details ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = r.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (r referenceDetailsORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []accounting_servicev1.ReferenceDetailsORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM reference_details ORDER BY " + r.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = r.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (r referenceDetailsORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM reference_details ")

	var executeSQL *gorm.DB
	executeSQL = r.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (r referenceDetailsORMDo) GetByID(id uint64) (result accounting_servicev1.ReferenceDetailsORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM reference_details ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = r.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (r referenceDetailsORMDo) GetByIDs(ids []uint64) (result []accounting_servicev1.ReferenceDetailsORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM reference_details ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = r.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (r referenceDetailsORMDo) Debug() IReferenceDetailsORMDo {
	return r.withDO(r.DO.Debug())
}

func (r referenceDetailsORMDo) WithContext(ctx context.Context) IReferenceDetailsORMDo {
	return r.withDO(r.DO.WithContext(ctx))
}

func (r referenceDetailsORMDo) ReadDB() IReferenceDetailsORMDo {
	return r.Clauses(dbresolver.Read)
}

func (r referenceDetailsORMDo) WriteDB() IReferenceDetailsORMDo {
	return r.Clauses(dbresolver.Write)
}

func (r referenceDetailsORMDo) Session(config *gorm.Session) IReferenceDetailsORMDo {
	return r.withDO(r.DO.Session(config))
}

func (r referenceDetailsORMDo) Clauses(conds ...clause.Expression) IReferenceDetailsORMDo {
	return r.withDO(r.DO.Clauses(conds...))
}

func (r referenceDetailsORMDo) Returning(value interface{}, columns ...string) IReferenceDetailsORMDo {
	return r.withDO(r.DO.Returning(value, columns...))
}

func (r referenceDetailsORMDo) Not(conds ...gen.Condition) IReferenceDetailsORMDo {
	return r.withDO(r.DO.Not(conds...))
}

func (r referenceDetailsORMDo) Or(conds ...gen.Condition) IReferenceDetailsORMDo {
	return r.withDO(r.DO.Or(conds...))
}

func (r referenceDetailsORMDo) Select(conds ...field.Expr) IReferenceDetailsORMDo {
	return r.withDO(r.DO.Select(conds...))
}

func (r referenceDetailsORMDo) Where(conds ...gen.Condition) IReferenceDetailsORMDo {
	return r.withDO(r.DO.Where(conds...))
}

func (r referenceDetailsORMDo) Order(conds ...field.Expr) IReferenceDetailsORMDo {
	return r.withDO(r.DO.Order(conds...))
}

func (r referenceDetailsORMDo) Distinct(cols ...field.Expr) IReferenceDetailsORMDo {
	return r.withDO(r.DO.Distinct(cols...))
}

func (r referenceDetailsORMDo) Omit(cols ...field.Expr) IReferenceDetailsORMDo {
	return r.withDO(r.DO.Omit(cols...))
}

func (r referenceDetailsORMDo) Join(table schema.Tabler, on ...field.Expr) IReferenceDetailsORMDo {
	return r.withDO(r.DO.Join(table, on...))
}

func (r referenceDetailsORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IReferenceDetailsORMDo {
	return r.withDO(r.DO.LeftJoin(table, on...))
}

func (r referenceDetailsORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IReferenceDetailsORMDo {
	return r.withDO(r.DO.RightJoin(table, on...))
}

func (r referenceDetailsORMDo) Group(cols ...field.Expr) IReferenceDetailsORMDo {
	return r.withDO(r.DO.Group(cols...))
}

func (r referenceDetailsORMDo) Having(conds ...gen.Condition) IReferenceDetailsORMDo {
	return r.withDO(r.DO.Having(conds...))
}

func (r referenceDetailsORMDo) Limit(limit int) IReferenceDetailsORMDo {
	return r.withDO(r.DO.Limit(limit))
}

func (r referenceDetailsORMDo) Offset(offset int) IReferenceDetailsORMDo {
	return r.withDO(r.DO.Offset(offset))
}

func (r referenceDetailsORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IReferenceDetailsORMDo {
	return r.withDO(r.DO.Scopes(funcs...))
}

func (r referenceDetailsORMDo) Unscoped() IReferenceDetailsORMDo {
	return r.withDO(r.DO.Unscoped())
}

func (r referenceDetailsORMDo) Create(values ...*accounting_servicev1.ReferenceDetailsORM) error {
	if len(values) == 0 {
		return nil
	}
	return r.DO.Create(values)
}

func (r referenceDetailsORMDo) CreateInBatches(values []*accounting_servicev1.ReferenceDetailsORM, batchSize int) error {
	return r.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (r referenceDetailsORMDo) Save(values ...*accounting_servicev1.ReferenceDetailsORM) error {
	if len(values) == 0 {
		return nil
	}
	return r.DO.Save(values)
}

func (r referenceDetailsORMDo) First() (*accounting_servicev1.ReferenceDetailsORM, error) {
	if result, err := r.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.ReferenceDetailsORM), nil
	}
}

func (r referenceDetailsORMDo) Take() (*accounting_servicev1.ReferenceDetailsORM, error) {
	if result, err := r.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.ReferenceDetailsORM), nil
	}
}

func (r referenceDetailsORMDo) Last() (*accounting_servicev1.ReferenceDetailsORM, error) {
	if result, err := r.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.ReferenceDetailsORM), nil
	}
}

func (r referenceDetailsORMDo) Find() ([]*accounting_servicev1.ReferenceDetailsORM, error) {
	result, err := r.DO.Find()
	return result.([]*accounting_servicev1.ReferenceDetailsORM), err
}

func (r referenceDetailsORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*accounting_servicev1.ReferenceDetailsORM, err error) {
	buf := make([]*accounting_servicev1.ReferenceDetailsORM, 0, batchSize)
	err = r.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (r referenceDetailsORMDo) FindInBatches(result *[]*accounting_servicev1.ReferenceDetailsORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return r.DO.FindInBatches(result, batchSize, fc)
}

func (r referenceDetailsORMDo) Attrs(attrs ...field.AssignExpr) IReferenceDetailsORMDo {
	return r.withDO(r.DO.Attrs(attrs...))
}

func (r referenceDetailsORMDo) Assign(attrs ...field.AssignExpr) IReferenceDetailsORMDo {
	return r.withDO(r.DO.Assign(attrs...))
}

func (r referenceDetailsORMDo) Joins(fields ...field.RelationField) IReferenceDetailsORMDo {
	for _, _f := range fields {
		r = *r.withDO(r.DO.Joins(_f))
	}
	return &r
}

func (r referenceDetailsORMDo) Preload(fields ...field.RelationField) IReferenceDetailsORMDo {
	for _, _f := range fields {
		r = *r.withDO(r.DO.Preload(_f))
	}
	return &r
}

func (r referenceDetailsORMDo) FirstOrInit() (*accounting_servicev1.ReferenceDetailsORM, error) {
	if result, err := r.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.ReferenceDetailsORM), nil
	}
}

func (r referenceDetailsORMDo) FirstOrCreate() (*accounting_servicev1.ReferenceDetailsORM, error) {
	if result, err := r.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*accounting_servicev1.ReferenceDetailsORM), nil
	}
}

func (r referenceDetailsORMDo) FindByPage(offset int, limit int) (result []*accounting_servicev1.ReferenceDetailsORM, count int64, err error) {
	result, err = r.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = r.Offset(-1).Limit(-1).Count()
	return
}

func (r referenceDetailsORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = r.Count()
	if err != nil {
		return
	}

	err = r.Offset(offset).Limit(limit).Scan(result)
	return
}

func (r referenceDetailsORMDo) Scan(result interface{}) (err error) {
	return r.DO.Scan(result)
}

func (r referenceDetailsORMDo) Delete(models ...*accounting_servicev1.ReferenceDetailsORM) (result gen.ResultInfo, err error) {
	return r.DO.Delete(models)
}

func (r *referenceDetailsORMDo) withDO(do gen.Dao) *referenceDetailsORMDo {
	r.DO = *do.(*gen.DO)
	return r
}
