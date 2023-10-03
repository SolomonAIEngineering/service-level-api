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

	user_servicev1 "github.com/SolomonAIEngineering/service-level-api/pkg/generated/user_service/v1"
)

func newAccountInformationORM(db *gorm.DB, opts ...gen.DOOption) accountInformationORM {
	_accountInformationORM := accountInformationORM{}

	_accountInformationORM.accountInformationORMDo.UseDB(db, opts...)
	_accountInformationORM.accountInformationORMDo.UseModel(&user_servicev1.AccountInformationORM{})

	tableName := _accountInformationORM.accountInformationORMDo.TableName()
	_accountInformationORM.ALL = field.NewAsterisk(tableName)
	_accountInformationORM.BusinessAccountSettingsId = field.NewUint64(tableName, "business_account_settings_id")
	_accountInformationORM.BusinessName = field.NewString(tableName, "business_name")
	_accountInformationORM.BusinessRegistrationNumber = field.NewString(tableName, "business_registration_number")
	_accountInformationORM.BusinessType = field.NewString(tableName, "business_type")
	_accountInformationORM.Id = field.NewUint64(tableName, "id")
	_accountInformationORM.ContactInfo = accountInformationORMHasOneContactInfo{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("ContactInfo", "user_servicev1.ContactInformationORM"),
	}

	_accountInformationORM.fillFieldMap()

	return _accountInformationORM
}

type accountInformationORM struct {
	accountInformationORMDo

	ALL                        field.Asterisk
	BusinessAccountSettingsId  field.Uint64
	BusinessName               field.String
	BusinessRegistrationNumber field.String
	BusinessType               field.String
	Id                         field.Uint64
	ContactInfo                accountInformationORMHasOneContactInfo

	fieldMap map[string]field.Expr
}

func (a accountInformationORM) Table(newTableName string) *accountInformationORM {
	a.accountInformationORMDo.UseTable(newTableName)
	return a.updateTableName(newTableName)
}

func (a accountInformationORM) As(alias string) *accountInformationORM {
	a.accountInformationORMDo.DO = *(a.accountInformationORMDo.As(alias).(*gen.DO))
	return a.updateTableName(alias)
}

func (a *accountInformationORM) updateTableName(table string) *accountInformationORM {
	a.ALL = field.NewAsterisk(table)
	a.BusinessAccountSettingsId = field.NewUint64(table, "business_account_settings_id")
	a.BusinessName = field.NewString(table, "business_name")
	a.BusinessRegistrationNumber = field.NewString(table, "business_registration_number")
	a.BusinessType = field.NewString(table, "business_type")
	a.Id = field.NewUint64(table, "id")

	a.fillFieldMap()

	return a
}

func (a *accountInformationORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := a.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (a *accountInformationORM) fillFieldMap() {
	a.fieldMap = make(map[string]field.Expr, 6)
	a.fieldMap["business_account_settings_id"] = a.BusinessAccountSettingsId
	a.fieldMap["business_name"] = a.BusinessName
	a.fieldMap["business_registration_number"] = a.BusinessRegistrationNumber
	a.fieldMap["business_type"] = a.BusinessType
	a.fieldMap["id"] = a.Id

}

func (a accountInformationORM) clone(db *gorm.DB) accountInformationORM {
	a.accountInformationORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return a
}

func (a accountInformationORM) replaceDB(db *gorm.DB) accountInformationORM {
	a.accountInformationORMDo.ReplaceDB(db)
	return a
}

type accountInformationORMHasOneContactInfo struct {
	db *gorm.DB

	field.RelationField
}

func (a accountInformationORMHasOneContactInfo) Where(conds ...field.Expr) *accountInformationORMHasOneContactInfo {
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

func (a accountInformationORMHasOneContactInfo) WithContext(ctx context.Context) *accountInformationORMHasOneContactInfo {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a accountInformationORMHasOneContactInfo) Session(session *gorm.Session) *accountInformationORMHasOneContactInfo {
	a.db = a.db.Session(session)
	return &a
}

func (a accountInformationORMHasOneContactInfo) Model(m *user_servicev1.AccountInformationORM) *accountInformationORMHasOneContactInfoTx {
	return &accountInformationORMHasOneContactInfoTx{a.db.Model(m).Association(a.Name())}
}

type accountInformationORMHasOneContactInfoTx struct{ tx *gorm.Association }

func (a accountInformationORMHasOneContactInfoTx) Find() (result *user_servicev1.ContactInformationORM, err error) {
	return result, a.tx.Find(&result)
}

func (a accountInformationORMHasOneContactInfoTx) Append(values ...*user_servicev1.ContactInformationORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a accountInformationORMHasOneContactInfoTx) Replace(values ...*user_servicev1.ContactInformationORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a accountInformationORMHasOneContactInfoTx) Delete(values ...*user_servicev1.ContactInformationORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a accountInformationORMHasOneContactInfoTx) Clear() error {
	return a.tx.Clear()
}

func (a accountInformationORMHasOneContactInfoTx) Count() int64 {
	return a.tx.Count()
}

type accountInformationORMDo struct{ gen.DO }

type IAccountInformationORMDo interface {
	gen.SubQuery
	Debug() IAccountInformationORMDo
	WithContext(ctx context.Context) IAccountInformationORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IAccountInformationORMDo
	WriteDB() IAccountInformationORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IAccountInformationORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IAccountInformationORMDo
	Not(conds ...gen.Condition) IAccountInformationORMDo
	Or(conds ...gen.Condition) IAccountInformationORMDo
	Select(conds ...field.Expr) IAccountInformationORMDo
	Where(conds ...gen.Condition) IAccountInformationORMDo
	Order(conds ...field.Expr) IAccountInformationORMDo
	Distinct(cols ...field.Expr) IAccountInformationORMDo
	Omit(cols ...field.Expr) IAccountInformationORMDo
	Join(table schema.Tabler, on ...field.Expr) IAccountInformationORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IAccountInformationORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IAccountInformationORMDo
	Group(cols ...field.Expr) IAccountInformationORMDo
	Having(conds ...gen.Condition) IAccountInformationORMDo
	Limit(limit int) IAccountInformationORMDo
	Offset(offset int) IAccountInformationORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IAccountInformationORMDo
	Unscoped() IAccountInformationORMDo
	Create(values ...*user_servicev1.AccountInformationORM) error
	CreateInBatches(values []*user_servicev1.AccountInformationORM, batchSize int) error
	Save(values ...*user_servicev1.AccountInformationORM) error
	First() (*user_servicev1.AccountInformationORM, error)
	Take() (*user_servicev1.AccountInformationORM, error)
	Last() (*user_servicev1.AccountInformationORM, error)
	Find() ([]*user_servicev1.AccountInformationORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*user_servicev1.AccountInformationORM, err error)
	FindInBatches(result *[]*user_servicev1.AccountInformationORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*user_servicev1.AccountInformationORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IAccountInformationORMDo
	Assign(attrs ...field.AssignExpr) IAccountInformationORMDo
	Joins(fields ...field.RelationField) IAccountInformationORMDo
	Preload(fields ...field.RelationField) IAccountInformationORMDo
	FirstOrInit() (*user_servicev1.AccountInformationORM, error)
	FirstOrCreate() (*user_servicev1.AccountInformationORM, error)
	FindByPage(offset int, limit int) (result []*user_servicev1.AccountInformationORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IAccountInformationORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result user_servicev1.AccountInformationORM, err error)
	GetRecordByIDs(ids []int) (result []user_servicev1.AccountInformationORM, err error)
	CreateRecord(item user_servicev1.AccountInformationORM) (err error)
	UpdateRecordByID(id int, item user_servicev1.AccountInformationORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []user_servicev1.AccountInformationORM, err error)
	CountAll() (result int, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (a accountInformationORMDo) GetRecordByID(id int) (result user_servicev1.AccountInformationORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM account_informations ")
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
func (a accountInformationORMDo) GetRecordByIDs(ids []int) (result []user_servicev1.AccountInformationORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM account_informations ")
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
func (a accountInformationORMDo) CreateRecord(item user_servicev1.AccountInformationORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO account_informations (columns) VALUES (values) ")

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
func (a accountInformationORMDo) UpdateRecordByID(id int, item user_servicev1.AccountInformationORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE account_informations SET columns=values ")
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
func (a accountInformationORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM account_informations ")
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
func (a accountInformationORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []user_servicev1.AccountInformationORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM account_informations ORDER BY " + a.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (a accountInformationORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM account_informations ")

	var executeSQL *gorm.DB
	executeSQL = a.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (a accountInformationORMDo) Debug() IAccountInformationORMDo {
	return a.withDO(a.DO.Debug())
}

func (a accountInformationORMDo) WithContext(ctx context.Context) IAccountInformationORMDo {
	return a.withDO(a.DO.WithContext(ctx))
}

func (a accountInformationORMDo) ReadDB() IAccountInformationORMDo {
	return a.Clauses(dbresolver.Read)
}

func (a accountInformationORMDo) WriteDB() IAccountInformationORMDo {
	return a.Clauses(dbresolver.Write)
}

func (a accountInformationORMDo) Session(config *gorm.Session) IAccountInformationORMDo {
	return a.withDO(a.DO.Session(config))
}

func (a accountInformationORMDo) Clauses(conds ...clause.Expression) IAccountInformationORMDo {
	return a.withDO(a.DO.Clauses(conds...))
}

func (a accountInformationORMDo) Returning(value interface{}, columns ...string) IAccountInformationORMDo {
	return a.withDO(a.DO.Returning(value, columns...))
}

func (a accountInformationORMDo) Not(conds ...gen.Condition) IAccountInformationORMDo {
	return a.withDO(a.DO.Not(conds...))
}

func (a accountInformationORMDo) Or(conds ...gen.Condition) IAccountInformationORMDo {
	return a.withDO(a.DO.Or(conds...))
}

func (a accountInformationORMDo) Select(conds ...field.Expr) IAccountInformationORMDo {
	return a.withDO(a.DO.Select(conds...))
}

func (a accountInformationORMDo) Where(conds ...gen.Condition) IAccountInformationORMDo {
	return a.withDO(a.DO.Where(conds...))
}

func (a accountInformationORMDo) Order(conds ...field.Expr) IAccountInformationORMDo {
	return a.withDO(a.DO.Order(conds...))
}

func (a accountInformationORMDo) Distinct(cols ...field.Expr) IAccountInformationORMDo {
	return a.withDO(a.DO.Distinct(cols...))
}

func (a accountInformationORMDo) Omit(cols ...field.Expr) IAccountInformationORMDo {
	return a.withDO(a.DO.Omit(cols...))
}

func (a accountInformationORMDo) Join(table schema.Tabler, on ...field.Expr) IAccountInformationORMDo {
	return a.withDO(a.DO.Join(table, on...))
}

func (a accountInformationORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IAccountInformationORMDo {
	return a.withDO(a.DO.LeftJoin(table, on...))
}

func (a accountInformationORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IAccountInformationORMDo {
	return a.withDO(a.DO.RightJoin(table, on...))
}

func (a accountInformationORMDo) Group(cols ...field.Expr) IAccountInformationORMDo {
	return a.withDO(a.DO.Group(cols...))
}

func (a accountInformationORMDo) Having(conds ...gen.Condition) IAccountInformationORMDo {
	return a.withDO(a.DO.Having(conds...))
}

func (a accountInformationORMDo) Limit(limit int) IAccountInformationORMDo {
	return a.withDO(a.DO.Limit(limit))
}

func (a accountInformationORMDo) Offset(offset int) IAccountInformationORMDo {
	return a.withDO(a.DO.Offset(offset))
}

func (a accountInformationORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IAccountInformationORMDo {
	return a.withDO(a.DO.Scopes(funcs...))
}

func (a accountInformationORMDo) Unscoped() IAccountInformationORMDo {
	return a.withDO(a.DO.Unscoped())
}

func (a accountInformationORMDo) Create(values ...*user_servicev1.AccountInformationORM) error {
	if len(values) == 0 {
		return nil
	}
	return a.DO.Create(values)
}

func (a accountInformationORMDo) CreateInBatches(values []*user_servicev1.AccountInformationORM, batchSize int) error {
	return a.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (a accountInformationORMDo) Save(values ...*user_servicev1.AccountInformationORM) error {
	if len(values) == 0 {
		return nil
	}
	return a.DO.Save(values)
}

func (a accountInformationORMDo) First() (*user_servicev1.AccountInformationORM, error) {
	if result, err := a.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.AccountInformationORM), nil
	}
}

func (a accountInformationORMDo) Take() (*user_servicev1.AccountInformationORM, error) {
	if result, err := a.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.AccountInformationORM), nil
	}
}

func (a accountInformationORMDo) Last() (*user_servicev1.AccountInformationORM, error) {
	if result, err := a.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.AccountInformationORM), nil
	}
}

func (a accountInformationORMDo) Find() ([]*user_servicev1.AccountInformationORM, error) {
	result, err := a.DO.Find()
	return result.([]*user_servicev1.AccountInformationORM), err
}

func (a accountInformationORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*user_servicev1.AccountInformationORM, err error) {
	buf := make([]*user_servicev1.AccountInformationORM, 0, batchSize)
	err = a.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (a accountInformationORMDo) FindInBatches(result *[]*user_servicev1.AccountInformationORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return a.DO.FindInBatches(result, batchSize, fc)
}

func (a accountInformationORMDo) Attrs(attrs ...field.AssignExpr) IAccountInformationORMDo {
	return a.withDO(a.DO.Attrs(attrs...))
}

func (a accountInformationORMDo) Assign(attrs ...field.AssignExpr) IAccountInformationORMDo {
	return a.withDO(a.DO.Assign(attrs...))
}

func (a accountInformationORMDo) Joins(fields ...field.RelationField) IAccountInformationORMDo {
	for _, _f := range fields {
		a = *a.withDO(a.DO.Joins(_f))
	}
	return &a
}

func (a accountInformationORMDo) Preload(fields ...field.RelationField) IAccountInformationORMDo {
	for _, _f := range fields {
		a = *a.withDO(a.DO.Preload(_f))
	}
	return &a
}

func (a accountInformationORMDo) FirstOrInit() (*user_servicev1.AccountInformationORM, error) {
	if result, err := a.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.AccountInformationORM), nil
	}
}

func (a accountInformationORMDo) FirstOrCreate() (*user_servicev1.AccountInformationORM, error) {
	if result, err := a.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.AccountInformationORM), nil
	}
}

func (a accountInformationORMDo) FindByPage(offset int, limit int) (result []*user_servicev1.AccountInformationORM, count int64, err error) {
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

func (a accountInformationORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = a.Count()
	if err != nil {
		return
	}

	err = a.Offset(offset).Limit(limit).Scan(result)
	return
}

func (a accountInformationORMDo) Scan(result interface{}) (err error) {
	return a.DO.Scan(result)
}

func (a accountInformationORMDo) Delete(models ...*user_servicev1.AccountInformationORM) (result gen.ResultInfo, err error) {
	return a.DO.Delete(models)
}

func (a *accountInformationORMDo) withDO(do gen.Dao) *accountInformationORMDo {
	a.DO = *do.(*gen.DO)
	return a
}