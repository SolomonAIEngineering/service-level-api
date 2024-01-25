// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"
	"strings"

	user_servicev1 "github.com/SolomonAIEngineering/service-level-api/pkg/generated/user_service/v1"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"
	"gorm.io/gen/helper"

	"gorm.io/plugin/dbresolver"
)

func newSettingsORM(db *gorm.DB, opts ...gen.DOOption) settingsORM {
	_settingsORM := settingsORM{}

	_settingsORM.settingsORMDo.UseDB(db, opts...)
	_settingsORM.settingsORMDo.UseModel(&user_servicev1.SettingsORM{})

	tableName := _settingsORM.settingsORMDo.TableName()
	_settingsORM.ALL = field.NewAsterisk(tableName)
	_settingsORM.AppTheme = field.NewString(tableName, "app_theme")
	_settingsORM.BusinessAccountId = field.NewUint64(tableName, "business_account_id")
	_settingsORM.Id = field.NewUint64(tableName, "id")
	_settingsORM.PreferredLanguage = field.NewString(tableName, "preferred_language")
	_settingsORM.RiskTolerance = field.NewString(tableName, "risk_tolerance")
	_settingsORM.UserAccountId = field.NewUint64(tableName, "user_account_id")
	_settingsORM.DigitalWorkerSettings = settingsORMHasOneDigitalWorkerSettings{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("DigitalWorkerSettings", "user_servicev1.DigitalWorkerSettingsORM"),
	}

	_settingsORM.FinancialPreferences = settingsORMHasOneFinancialPreferences{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("FinancialPreferences", "user_servicev1.FinancialPreferencesORM"),
	}

	_settingsORM.NotificationSettings = settingsORMHasOneNotificationSettings{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("NotificationSettings", "user_servicev1.NotificationSettingsORM"),
	}

	_settingsORM.fillFieldMap()

	return _settingsORM
}

type settingsORM struct {
	settingsORMDo

	ALL                   field.Asterisk
	AppTheme              field.String
	BusinessAccountId     field.Uint64
	Id                    field.Uint64
	PreferredLanguage     field.String
	RiskTolerance         field.String
	UserAccountId         field.Uint64
	DigitalWorkerSettings settingsORMHasOneDigitalWorkerSettings

	FinancialPreferences settingsORMHasOneFinancialPreferences

	NotificationSettings settingsORMHasOneNotificationSettings

	fieldMap map[string]field.Expr
}

func (s settingsORM) Table(newTableName string) *settingsORM {
	s.settingsORMDo.UseTable(newTableName)
	return s.updateTableName(newTableName)
}

func (s settingsORM) As(alias string) *settingsORM {
	s.settingsORMDo.DO = *(s.settingsORMDo.As(alias).(*gen.DO))
	return s.updateTableName(alias)
}

func (s *settingsORM) updateTableName(table string) *settingsORM {
	s.ALL = field.NewAsterisk(table)
	s.AppTheme = field.NewString(table, "app_theme")
	s.BusinessAccountId = field.NewUint64(table, "business_account_id")
	s.Id = field.NewUint64(table, "id")
	s.PreferredLanguage = field.NewString(table, "preferred_language")
	s.RiskTolerance = field.NewString(table, "risk_tolerance")
	s.UserAccountId = field.NewUint64(table, "user_account_id")

	s.fillFieldMap()

	return s
}

func (s *settingsORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := s.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (s *settingsORM) fillFieldMap() {
	s.fieldMap = make(map[string]field.Expr, 9)
	s.fieldMap["app_theme"] = s.AppTheme
	s.fieldMap["business_account_id"] = s.BusinessAccountId
	s.fieldMap["id"] = s.Id
	s.fieldMap["preferred_language"] = s.PreferredLanguage
	s.fieldMap["risk_tolerance"] = s.RiskTolerance
	s.fieldMap["user_account_id"] = s.UserAccountId

}

func (s settingsORM) clone(db *gorm.DB) settingsORM {
	s.settingsORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return s
}

func (s settingsORM) replaceDB(db *gorm.DB) settingsORM {
	s.settingsORMDo.ReplaceDB(db)
	return s
}

type settingsORMHasOneDigitalWorkerSettings struct {
	db *gorm.DB

	field.RelationField
}

func (a settingsORMHasOneDigitalWorkerSettings) Where(conds ...field.Expr) *settingsORMHasOneDigitalWorkerSettings {
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

func (a settingsORMHasOneDigitalWorkerSettings) WithContext(ctx context.Context) *settingsORMHasOneDigitalWorkerSettings {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a settingsORMHasOneDigitalWorkerSettings) Session(session *gorm.Session) *settingsORMHasOneDigitalWorkerSettings {
	a.db = a.db.Session(session)
	return &a
}

func (a settingsORMHasOneDigitalWorkerSettings) Model(m *user_servicev1.SettingsORM) *settingsORMHasOneDigitalWorkerSettingsTx {
	return &settingsORMHasOneDigitalWorkerSettingsTx{a.db.Model(m).Association(a.Name())}
}

type settingsORMHasOneDigitalWorkerSettingsTx struct{ tx *gorm.Association }

func (a settingsORMHasOneDigitalWorkerSettingsTx) Find() (result *user_servicev1.DigitalWorkerSettingsORM, err error) {
	return result, a.tx.Find(&result)
}

func (a settingsORMHasOneDigitalWorkerSettingsTx) Append(values ...*user_servicev1.DigitalWorkerSettingsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a settingsORMHasOneDigitalWorkerSettingsTx) Replace(values ...*user_servicev1.DigitalWorkerSettingsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a settingsORMHasOneDigitalWorkerSettingsTx) Delete(values ...*user_servicev1.DigitalWorkerSettingsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a settingsORMHasOneDigitalWorkerSettingsTx) Clear() error {
	return a.tx.Clear()
}

func (a settingsORMHasOneDigitalWorkerSettingsTx) Count() int64 {
	return a.tx.Count()
}

type settingsORMHasOneFinancialPreferences struct {
	db *gorm.DB

	field.RelationField
}

func (a settingsORMHasOneFinancialPreferences) Where(conds ...field.Expr) *settingsORMHasOneFinancialPreferences {
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

func (a settingsORMHasOneFinancialPreferences) WithContext(ctx context.Context) *settingsORMHasOneFinancialPreferences {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a settingsORMHasOneFinancialPreferences) Session(session *gorm.Session) *settingsORMHasOneFinancialPreferences {
	a.db = a.db.Session(session)
	return &a
}

func (a settingsORMHasOneFinancialPreferences) Model(m *user_servicev1.SettingsORM) *settingsORMHasOneFinancialPreferencesTx {
	return &settingsORMHasOneFinancialPreferencesTx{a.db.Model(m).Association(a.Name())}
}

type settingsORMHasOneFinancialPreferencesTx struct{ tx *gorm.Association }

func (a settingsORMHasOneFinancialPreferencesTx) Find() (result *user_servicev1.FinancialPreferencesORM, err error) {
	return result, a.tx.Find(&result)
}

func (a settingsORMHasOneFinancialPreferencesTx) Append(values ...*user_servicev1.FinancialPreferencesORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a settingsORMHasOneFinancialPreferencesTx) Replace(values ...*user_servicev1.FinancialPreferencesORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a settingsORMHasOneFinancialPreferencesTx) Delete(values ...*user_servicev1.FinancialPreferencesORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a settingsORMHasOneFinancialPreferencesTx) Clear() error {
	return a.tx.Clear()
}

func (a settingsORMHasOneFinancialPreferencesTx) Count() int64 {
	return a.tx.Count()
}

type settingsORMHasOneNotificationSettings struct {
	db *gorm.DB

	field.RelationField
}

func (a settingsORMHasOneNotificationSettings) Where(conds ...field.Expr) *settingsORMHasOneNotificationSettings {
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

func (a settingsORMHasOneNotificationSettings) WithContext(ctx context.Context) *settingsORMHasOneNotificationSettings {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a settingsORMHasOneNotificationSettings) Session(session *gorm.Session) *settingsORMHasOneNotificationSettings {
	a.db = a.db.Session(session)
	return &a
}

func (a settingsORMHasOneNotificationSettings) Model(m *user_servicev1.SettingsORM) *settingsORMHasOneNotificationSettingsTx {
	return &settingsORMHasOneNotificationSettingsTx{a.db.Model(m).Association(a.Name())}
}

type settingsORMHasOneNotificationSettingsTx struct{ tx *gorm.Association }

func (a settingsORMHasOneNotificationSettingsTx) Find() (result *user_servicev1.NotificationSettingsORM, err error) {
	return result, a.tx.Find(&result)
}

func (a settingsORMHasOneNotificationSettingsTx) Append(values ...*user_servicev1.NotificationSettingsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a settingsORMHasOneNotificationSettingsTx) Replace(values ...*user_servicev1.NotificationSettingsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a settingsORMHasOneNotificationSettingsTx) Delete(values ...*user_servicev1.NotificationSettingsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a settingsORMHasOneNotificationSettingsTx) Clear() error {
	return a.tx.Clear()
}

func (a settingsORMHasOneNotificationSettingsTx) Count() int64 {
	return a.tx.Count()
}

type settingsORMDo struct{ gen.DO }

type ISettingsORMDo interface {
	gen.SubQuery
	Debug() ISettingsORMDo
	WithContext(ctx context.Context) ISettingsORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() ISettingsORMDo
	WriteDB() ISettingsORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) ISettingsORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) ISettingsORMDo
	Not(conds ...gen.Condition) ISettingsORMDo
	Or(conds ...gen.Condition) ISettingsORMDo
	Select(conds ...field.Expr) ISettingsORMDo
	Where(conds ...gen.Condition) ISettingsORMDo
	Order(conds ...field.Expr) ISettingsORMDo
	Distinct(cols ...field.Expr) ISettingsORMDo
	Omit(cols ...field.Expr) ISettingsORMDo
	Join(table schema.Tabler, on ...field.Expr) ISettingsORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) ISettingsORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) ISettingsORMDo
	Group(cols ...field.Expr) ISettingsORMDo
	Having(conds ...gen.Condition) ISettingsORMDo
	Limit(limit int) ISettingsORMDo
	Offset(offset int) ISettingsORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) ISettingsORMDo
	Unscoped() ISettingsORMDo
	Create(values ...*user_servicev1.SettingsORM) error
	CreateInBatches(values []*user_servicev1.SettingsORM, batchSize int) error
	Save(values ...*user_servicev1.SettingsORM) error
	First() (*user_servicev1.SettingsORM, error)
	Take() (*user_servicev1.SettingsORM, error)
	Last() (*user_servicev1.SettingsORM, error)
	Find() ([]*user_servicev1.SettingsORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*user_servicev1.SettingsORM, err error)
	FindInBatches(result *[]*user_servicev1.SettingsORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*user_servicev1.SettingsORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) ISettingsORMDo
	Assign(attrs ...field.AssignExpr) ISettingsORMDo
	Joins(fields ...field.RelationField) ISettingsORMDo
	Preload(fields ...field.RelationField) ISettingsORMDo
	FirstOrInit() (*user_servicev1.SettingsORM, error)
	FirstOrCreate() (*user_servicev1.SettingsORM, error)
	FindByPage(offset int, limit int) (result []*user_servicev1.SettingsORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) ISettingsORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result user_servicev1.SettingsORM, err error)
	GetRecordByIDs(ids []int) (result []user_servicev1.SettingsORM, err error)
	CreateRecord(item user_servicev1.SettingsORM) (err error)
	UpdateRecordByID(id int, item user_servicev1.SettingsORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []user_servicev1.SettingsORM, err error)
	CountAll() (result int, err error)
	GetByID(id uint64) (result user_servicev1.SettingsORM, err error)
	GetByIDs(ids []uint64) (result []user_servicev1.SettingsORM, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (s settingsORMDo) GetRecordByID(id int) (result user_servicev1.SettingsORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM settings ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (s settingsORMDo) GetRecordByIDs(ids []int) (result []user_servicev1.SettingsORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM settings ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (s settingsORMDo) CreateRecord(item user_servicev1.SettingsORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO settings (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (s settingsORMDo) UpdateRecordByID(id int, item user_servicev1.SettingsORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE settings SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (s settingsORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM settings ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (s settingsORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []user_servicev1.SettingsORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM settings ORDER BY " + s.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (s settingsORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM settings ")

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (s settingsORMDo) GetByID(id uint64) (result user_servicev1.SettingsORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM settings ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (s settingsORMDo) GetByIDs(ids []uint64) (result []user_servicev1.SettingsORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM settings ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = s.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (s settingsORMDo) Debug() ISettingsORMDo {
	return s.withDO(s.DO.Debug())
}

func (s settingsORMDo) WithContext(ctx context.Context) ISettingsORMDo {
	return s.withDO(s.DO.WithContext(ctx))
}

func (s settingsORMDo) ReadDB() ISettingsORMDo {
	return s.Clauses(dbresolver.Read)
}

func (s settingsORMDo) WriteDB() ISettingsORMDo {
	return s.Clauses(dbresolver.Write)
}

func (s settingsORMDo) Session(config *gorm.Session) ISettingsORMDo {
	return s.withDO(s.DO.Session(config))
}

func (s settingsORMDo) Clauses(conds ...clause.Expression) ISettingsORMDo {
	return s.withDO(s.DO.Clauses(conds...))
}

func (s settingsORMDo) Returning(value interface{}, columns ...string) ISettingsORMDo {
	return s.withDO(s.DO.Returning(value, columns...))
}

func (s settingsORMDo) Not(conds ...gen.Condition) ISettingsORMDo {
	return s.withDO(s.DO.Not(conds...))
}

func (s settingsORMDo) Or(conds ...gen.Condition) ISettingsORMDo {
	return s.withDO(s.DO.Or(conds...))
}

func (s settingsORMDo) Select(conds ...field.Expr) ISettingsORMDo {
	return s.withDO(s.DO.Select(conds...))
}

func (s settingsORMDo) Where(conds ...gen.Condition) ISettingsORMDo {
	return s.withDO(s.DO.Where(conds...))
}

func (s settingsORMDo) Order(conds ...field.Expr) ISettingsORMDo {
	return s.withDO(s.DO.Order(conds...))
}

func (s settingsORMDo) Distinct(cols ...field.Expr) ISettingsORMDo {
	return s.withDO(s.DO.Distinct(cols...))
}

func (s settingsORMDo) Omit(cols ...field.Expr) ISettingsORMDo {
	return s.withDO(s.DO.Omit(cols...))
}

func (s settingsORMDo) Join(table schema.Tabler, on ...field.Expr) ISettingsORMDo {
	return s.withDO(s.DO.Join(table, on...))
}

func (s settingsORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) ISettingsORMDo {
	return s.withDO(s.DO.LeftJoin(table, on...))
}

func (s settingsORMDo) RightJoin(table schema.Tabler, on ...field.Expr) ISettingsORMDo {
	return s.withDO(s.DO.RightJoin(table, on...))
}

func (s settingsORMDo) Group(cols ...field.Expr) ISettingsORMDo {
	return s.withDO(s.DO.Group(cols...))
}

func (s settingsORMDo) Having(conds ...gen.Condition) ISettingsORMDo {
	return s.withDO(s.DO.Having(conds...))
}

func (s settingsORMDo) Limit(limit int) ISettingsORMDo {
	return s.withDO(s.DO.Limit(limit))
}

func (s settingsORMDo) Offset(offset int) ISettingsORMDo {
	return s.withDO(s.DO.Offset(offset))
}

func (s settingsORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) ISettingsORMDo {
	return s.withDO(s.DO.Scopes(funcs...))
}

func (s settingsORMDo) Unscoped() ISettingsORMDo {
	return s.withDO(s.DO.Unscoped())
}

func (s settingsORMDo) Create(values ...*user_servicev1.SettingsORM) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Create(values)
}

func (s settingsORMDo) CreateInBatches(values []*user_servicev1.SettingsORM, batchSize int) error {
	return s.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (s settingsORMDo) Save(values ...*user_servicev1.SettingsORM) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Save(values)
}

func (s settingsORMDo) First() (*user_servicev1.SettingsORM, error) {
	if result, err := s.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.SettingsORM), nil
	}
}

func (s settingsORMDo) Take() (*user_servicev1.SettingsORM, error) {
	if result, err := s.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.SettingsORM), nil
	}
}

func (s settingsORMDo) Last() (*user_servicev1.SettingsORM, error) {
	if result, err := s.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.SettingsORM), nil
	}
}

func (s settingsORMDo) Find() ([]*user_servicev1.SettingsORM, error) {
	result, err := s.DO.Find()
	return result.([]*user_servicev1.SettingsORM), err
}

func (s settingsORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*user_servicev1.SettingsORM, err error) {
	buf := make([]*user_servicev1.SettingsORM, 0, batchSize)
	err = s.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (s settingsORMDo) FindInBatches(result *[]*user_servicev1.SettingsORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return s.DO.FindInBatches(result, batchSize, fc)
}

func (s settingsORMDo) Attrs(attrs ...field.AssignExpr) ISettingsORMDo {
	return s.withDO(s.DO.Attrs(attrs...))
}

func (s settingsORMDo) Assign(attrs ...field.AssignExpr) ISettingsORMDo {
	return s.withDO(s.DO.Assign(attrs...))
}

func (s settingsORMDo) Joins(fields ...field.RelationField) ISettingsORMDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Joins(_f))
	}
	return &s
}

func (s settingsORMDo) Preload(fields ...field.RelationField) ISettingsORMDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Preload(_f))
	}
	return &s
}

func (s settingsORMDo) FirstOrInit() (*user_servicev1.SettingsORM, error) {
	if result, err := s.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.SettingsORM), nil
	}
}

func (s settingsORMDo) FirstOrCreate() (*user_servicev1.SettingsORM, error) {
	if result, err := s.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.SettingsORM), nil
	}
}

func (s settingsORMDo) FindByPage(offset int, limit int) (result []*user_servicev1.SettingsORM, count int64, err error) {
	result, err = s.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = s.Offset(-1).Limit(-1).Count()
	return
}

func (s settingsORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = s.Count()
	if err != nil {
		return
	}

	err = s.Offset(offset).Limit(limit).Scan(result)
	return
}

func (s settingsORMDo) Scan(result interface{}) (err error) {
	return s.DO.Scan(result)
}

func (s settingsORMDo) Delete(models ...*user_servicev1.SettingsORM) (result gen.ResultInfo, err error) {
	return s.DO.Delete(models)
}

func (s *settingsORMDo) withDO(do gen.Dao) *settingsORMDo {
	s.DO = *do.(*gen.DO)
	return s
}
