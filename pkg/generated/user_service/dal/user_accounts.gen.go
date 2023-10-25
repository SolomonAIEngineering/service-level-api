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

func newUserAccountORM(db *gorm.DB, opts ...gen.DOOption) userAccountORM {
	_userAccountORM := userAccountORM{}

	_userAccountORM.userAccountORMDo.UseDB(db, opts...)
	_userAccountORM.userAccountORMDo.UseModel(&user_servicev1.UserAccountORM{})

	tableName := _userAccountORM.userAccountORMDo.TableName()
	_userAccountORM.ALL = field.NewAsterisk(tableName)
	_userAccountORM.AccountType = field.NewString(tableName, "account_type")
	_userAccountORM.AuthnAccountId = field.NewUint64(tableName, "authn_account_id")
	_userAccountORM.Bio = field.NewString(tableName, "bio")
	_userAccountORM.CreatedAt = field.NewTime(tableName, "created_at")
	_userAccountORM.Email = field.NewString(tableName, "email")
	_userAccountORM.Firstname = field.NewString(tableName, "firstname")
	_userAccountORM.Headline = field.NewString(tableName, "headline")
	_userAccountORM.Id = field.NewUint64(tableName, "id")
	_userAccountORM.IsActive = field.NewBool(tableName, "is_active")
	_userAccountORM.IsEmailVerified = field.NewBool(tableName, "is_email_verified")
	_userAccountORM.IsPrivate = field.NewBool(tableName, "is_private")
	_userAccountORM.Lastname = field.NewString(tableName, "lastname")
	_userAccountORM.PhoneNumber = field.NewString(tableName, "phone_number")
	_userAccountORM.Username = field.NewString(tableName, "username")
	_userAccountORM.VerifiedAt = field.NewTime(tableName, "verified_at")
	_userAccountORM.Address = userAccountORMHasOneAddress{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Address", "user_servicev1.AddressORM"),
	}

	_userAccountORM.UserSettings = userAccountORMHasOneUserSettings{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("UserSettings", "user_servicev1.UserSettingsORM"),
	}

	_userAccountORM.Tags = userAccountORMHasManyTags{
		db: db.Session(&gorm.Session{}),

		RelationField: field.NewRelation("Tags", "user_servicev1.TagsORM"),
	}

	_userAccountORM.fillFieldMap()

	return _userAccountORM
}

type userAccountORM struct {
	userAccountORMDo

	ALL             field.Asterisk
	AccountType     field.String
	AuthnAccountId  field.Uint64
	Bio             field.String
	CreatedAt       field.Time
	Email           field.String
	Firstname       field.String
	Headline        field.String
	Id              field.Uint64
	IsActive        field.Bool
	IsEmailVerified field.Bool
	IsPrivate       field.Bool
	Lastname        field.String
	PhoneNumber     field.String
	Username        field.String
	VerifiedAt      field.Time
	Address         userAccountORMHasOneAddress

	UserSettings userAccountORMHasOneUserSettings

	Tags userAccountORMHasManyTags

	fieldMap map[string]field.Expr
}

func (u userAccountORM) Table(newTableName string) *userAccountORM {
	u.userAccountORMDo.UseTable(newTableName)
	return u.updateTableName(newTableName)
}

func (u userAccountORM) As(alias string) *userAccountORM {
	u.userAccountORMDo.DO = *(u.userAccountORMDo.As(alias).(*gen.DO))
	return u.updateTableName(alias)
}

func (u *userAccountORM) updateTableName(table string) *userAccountORM {
	u.ALL = field.NewAsterisk(table)
	u.AccountType = field.NewString(table, "account_type")
	u.AuthnAccountId = field.NewUint64(table, "authn_account_id")
	u.Bio = field.NewString(table, "bio")
	u.CreatedAt = field.NewTime(table, "created_at")
	u.Email = field.NewString(table, "email")
	u.Firstname = field.NewString(table, "firstname")
	u.Headline = field.NewString(table, "headline")
	u.Id = field.NewUint64(table, "id")
	u.IsActive = field.NewBool(table, "is_active")
	u.IsEmailVerified = field.NewBool(table, "is_email_verified")
	u.IsPrivate = field.NewBool(table, "is_private")
	u.Lastname = field.NewString(table, "lastname")
	u.PhoneNumber = field.NewString(table, "phone_number")
	u.Username = field.NewString(table, "username")
	u.VerifiedAt = field.NewTime(table, "verified_at")

	u.fillFieldMap()

	return u
}

func (u *userAccountORM) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := u.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (u *userAccountORM) fillFieldMap() {
	u.fieldMap = make(map[string]field.Expr, 18)
	u.fieldMap["account_type"] = u.AccountType
	u.fieldMap["authn_account_id"] = u.AuthnAccountId
	u.fieldMap["bio"] = u.Bio
	u.fieldMap["created_at"] = u.CreatedAt
	u.fieldMap["email"] = u.Email
	u.fieldMap["firstname"] = u.Firstname
	u.fieldMap["headline"] = u.Headline
	u.fieldMap["id"] = u.Id
	u.fieldMap["is_active"] = u.IsActive
	u.fieldMap["is_email_verified"] = u.IsEmailVerified
	u.fieldMap["is_private"] = u.IsPrivate
	u.fieldMap["lastname"] = u.Lastname
	u.fieldMap["phone_number"] = u.PhoneNumber
	u.fieldMap["username"] = u.Username
	u.fieldMap["verified_at"] = u.VerifiedAt

}

func (u userAccountORM) clone(db *gorm.DB) userAccountORM {
	u.userAccountORMDo.ReplaceConnPool(db.Statement.ConnPool)
	return u
}

func (u userAccountORM) replaceDB(db *gorm.DB) userAccountORM {
	u.userAccountORMDo.ReplaceDB(db)
	return u
}

type userAccountORMHasOneAddress struct {
	db *gorm.DB

	field.RelationField
}

func (a userAccountORMHasOneAddress) Where(conds ...field.Expr) *userAccountORMHasOneAddress {
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

func (a userAccountORMHasOneAddress) WithContext(ctx context.Context) *userAccountORMHasOneAddress {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a userAccountORMHasOneAddress) Session(session *gorm.Session) *userAccountORMHasOneAddress {
	a.db = a.db.Session(session)
	return &a
}

func (a userAccountORMHasOneAddress) Model(m *user_servicev1.UserAccountORM) *userAccountORMHasOneAddressTx {
	return &userAccountORMHasOneAddressTx{a.db.Model(m).Association(a.Name())}
}

type userAccountORMHasOneAddressTx struct{ tx *gorm.Association }

func (a userAccountORMHasOneAddressTx) Find() (result *user_servicev1.AddressORM, err error) {
	return result, a.tx.Find(&result)
}

func (a userAccountORMHasOneAddressTx) Append(values ...*user_servicev1.AddressORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a userAccountORMHasOneAddressTx) Replace(values ...*user_servicev1.AddressORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a userAccountORMHasOneAddressTx) Delete(values ...*user_servicev1.AddressORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a userAccountORMHasOneAddressTx) Clear() error {
	return a.tx.Clear()
}

func (a userAccountORMHasOneAddressTx) Count() int64 {
	return a.tx.Count()
}

type userAccountORMHasOneUserSettings struct {
	db *gorm.DB

	field.RelationField
}

func (a userAccountORMHasOneUserSettings) Where(conds ...field.Expr) *userAccountORMHasOneUserSettings {
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

func (a userAccountORMHasOneUserSettings) WithContext(ctx context.Context) *userAccountORMHasOneUserSettings {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a userAccountORMHasOneUserSettings) Session(session *gorm.Session) *userAccountORMHasOneUserSettings {
	a.db = a.db.Session(session)
	return &a
}

func (a userAccountORMHasOneUserSettings) Model(m *user_servicev1.UserAccountORM) *userAccountORMHasOneUserSettingsTx {
	return &userAccountORMHasOneUserSettingsTx{a.db.Model(m).Association(a.Name())}
}

type userAccountORMHasOneUserSettingsTx struct{ tx *gorm.Association }

func (a userAccountORMHasOneUserSettingsTx) Find() (result *user_servicev1.UserSettingsORM, err error) {
	return result, a.tx.Find(&result)
}

func (a userAccountORMHasOneUserSettingsTx) Append(values ...*user_servicev1.UserSettingsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a userAccountORMHasOneUserSettingsTx) Replace(values ...*user_servicev1.UserSettingsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a userAccountORMHasOneUserSettingsTx) Delete(values ...*user_servicev1.UserSettingsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a userAccountORMHasOneUserSettingsTx) Clear() error {
	return a.tx.Clear()
}

func (a userAccountORMHasOneUserSettingsTx) Count() int64 {
	return a.tx.Count()
}

type userAccountORMHasManyTags struct {
	db *gorm.DB

	field.RelationField
}

func (a userAccountORMHasManyTags) Where(conds ...field.Expr) *userAccountORMHasManyTags {
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

func (a userAccountORMHasManyTags) WithContext(ctx context.Context) *userAccountORMHasManyTags {
	a.db = a.db.WithContext(ctx)
	return &a
}

func (a userAccountORMHasManyTags) Session(session *gorm.Session) *userAccountORMHasManyTags {
	a.db = a.db.Session(session)
	return &a
}

func (a userAccountORMHasManyTags) Model(m *user_servicev1.UserAccountORM) *userAccountORMHasManyTagsTx {
	return &userAccountORMHasManyTagsTx{a.db.Model(m).Association(a.Name())}
}

type userAccountORMHasManyTagsTx struct{ tx *gorm.Association }

func (a userAccountORMHasManyTagsTx) Find() (result []*user_servicev1.TagsORM, err error) {
	return result, a.tx.Find(&result)
}

func (a userAccountORMHasManyTagsTx) Append(values ...*user_servicev1.TagsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Append(targetValues...)
}

func (a userAccountORMHasManyTagsTx) Replace(values ...*user_servicev1.TagsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Replace(targetValues...)
}

func (a userAccountORMHasManyTagsTx) Delete(values ...*user_servicev1.TagsORM) (err error) {
	targetValues := make([]interface{}, len(values))
	for i, v := range values {
		targetValues[i] = v
	}
	return a.tx.Delete(targetValues...)
}

func (a userAccountORMHasManyTagsTx) Clear() error {
	return a.tx.Clear()
}

func (a userAccountORMHasManyTagsTx) Count() int64 {
	return a.tx.Count()
}

type userAccountORMDo struct{ gen.DO }

type IUserAccountORMDo interface {
	gen.SubQuery
	Debug() IUserAccountORMDo
	WithContext(ctx context.Context) IUserAccountORMDo
	WithResult(fc func(tx gen.Dao)) gen.ResultInfo
	ReplaceDB(db *gorm.DB)
	ReadDB() IUserAccountORMDo
	WriteDB() IUserAccountORMDo
	As(alias string) gen.Dao
	Session(config *gorm.Session) IUserAccountORMDo
	Columns(cols ...field.Expr) gen.Columns
	Clauses(conds ...clause.Expression) IUserAccountORMDo
	Not(conds ...gen.Condition) IUserAccountORMDo
	Or(conds ...gen.Condition) IUserAccountORMDo
	Select(conds ...field.Expr) IUserAccountORMDo
	Where(conds ...gen.Condition) IUserAccountORMDo
	Order(conds ...field.Expr) IUserAccountORMDo
	Distinct(cols ...field.Expr) IUserAccountORMDo
	Omit(cols ...field.Expr) IUserAccountORMDo
	Join(table schema.Tabler, on ...field.Expr) IUserAccountORMDo
	LeftJoin(table schema.Tabler, on ...field.Expr) IUserAccountORMDo
	RightJoin(table schema.Tabler, on ...field.Expr) IUserAccountORMDo
	Group(cols ...field.Expr) IUserAccountORMDo
	Having(conds ...gen.Condition) IUserAccountORMDo
	Limit(limit int) IUserAccountORMDo
	Offset(offset int) IUserAccountORMDo
	Count() (count int64, err error)
	Scopes(funcs ...func(gen.Dao) gen.Dao) IUserAccountORMDo
	Unscoped() IUserAccountORMDo
	Create(values ...*user_servicev1.UserAccountORM) error
	CreateInBatches(values []*user_servicev1.UserAccountORM, batchSize int) error
	Save(values ...*user_servicev1.UserAccountORM) error
	First() (*user_servicev1.UserAccountORM, error)
	Take() (*user_servicev1.UserAccountORM, error)
	Last() (*user_servicev1.UserAccountORM, error)
	Find() ([]*user_servicev1.UserAccountORM, error)
	FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*user_servicev1.UserAccountORM, err error)
	FindInBatches(result *[]*user_servicev1.UserAccountORM, batchSize int, fc func(tx gen.Dao, batch int) error) error
	Pluck(column field.Expr, dest interface{}) error
	Delete(...*user_servicev1.UserAccountORM) (info gen.ResultInfo, err error)
	Update(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	Updates(value interface{}) (info gen.ResultInfo, err error)
	UpdateColumn(column field.Expr, value interface{}) (info gen.ResultInfo, err error)
	UpdateColumnSimple(columns ...field.AssignExpr) (info gen.ResultInfo, err error)
	UpdateColumns(value interface{}) (info gen.ResultInfo, err error)
	UpdateFrom(q gen.SubQuery) gen.Dao
	Attrs(attrs ...field.AssignExpr) IUserAccountORMDo
	Assign(attrs ...field.AssignExpr) IUserAccountORMDo
	Joins(fields ...field.RelationField) IUserAccountORMDo
	Preload(fields ...field.RelationField) IUserAccountORMDo
	FirstOrInit() (*user_servicev1.UserAccountORM, error)
	FirstOrCreate() (*user_servicev1.UserAccountORM, error)
	FindByPage(offset int, limit int) (result []*user_servicev1.UserAccountORM, count int64, err error)
	ScanByPage(result interface{}, offset int, limit int) (count int64, err error)
	Scan(result interface{}) (err error)
	Returning(value interface{}, columns ...string) IUserAccountORMDo
	UnderlyingDB() *gorm.DB
	schema.Tabler

	GetRecordByID(id int) (result user_servicev1.UserAccountORM, err error)
	GetRecordByIDs(ids []int) (result []user_servicev1.UserAccountORM, err error)
	CreateRecord(item user_servicev1.UserAccountORM) (err error)
	UpdateRecordByID(id int, item user_servicev1.UserAccountORM) (err error)
	DeleteRecordByID(id int) (err error)
	GetAllRecords(orderColumn string, limit int, offset int) (result []user_servicev1.UserAccountORM, err error)
	CountAll() (result int, err error)
}

// SELECT * FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (u userAccountORMDo) GetRecordByID(id int) (result user_servicev1.UserAccountORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM user_accounts ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = u.UnderlyingDB().Raw(generateSQL.String(), params...).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// {{where}}
//
//	id IN (@ids)
//
// {{end}}
func (u userAccountORMDo) GetRecordByIDs(ids []int) (result []user_servicev1.UserAccountORM, err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM user_accounts ")
	var whereSQL0 strings.Builder
	params = append(params, ids)
	whereSQL0.WriteString("id IN (?) ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = u.UnderlyingDB().Raw(generateSQL.String(), params...).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// INSERT INTO @@table (columns) VALUES (values)
func (u userAccountORMDo) CreateRecord(item user_servicev1.UserAccountORM) (err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("INSERT INTO user_accounts (columns) VALUES (values) ")

	var executeSQL *gorm.DB
	executeSQL = u.UnderlyingDB().Exec(generateSQL.String()) // ignore_security_alert
	err = executeSQL.Error

	return
}

// UPDATE @@table SET columns=values
// {{where}}
//
//	id=@id
//
// {{end}}
func (u userAccountORMDo) UpdateRecordByID(id int, item user_servicev1.UserAccountORM) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("UPDATE user_accounts SET columns=values ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = u.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// DELETE FROM @@table
// {{where}}
//
//	id=@id
//
// {{end}}
func (u userAccountORMDo) DeleteRecordByID(id int) (err error) {
	var params []interface{}

	var generateSQL strings.Builder
	generateSQL.WriteString("DELETE FROM user_accounts ")
	var whereSQL0 strings.Builder
	params = append(params, id)
	whereSQL0.WriteString("id=? ")
	helper.JoinWhereBuilder(&generateSQL, whereSQL0)

	var executeSQL *gorm.DB
	executeSQL = u.UnderlyingDB().Exec(generateSQL.String(), params...) // ignore_security_alert
	err = executeSQL.Error

	return
}

// SELECT * FROM @@table
// ORDER BY @@orderColumn
func (u userAccountORMDo) GetAllRecords(orderColumn string, limit int, offset int) (result []user_servicev1.UserAccountORM, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("SELECT * FROM user_accounts ORDER BY " + u.Quote(orderColumn) + " ")

	var executeSQL *gorm.DB
	executeSQL = u.UnderlyingDB().Raw(generateSQL.String()).Find(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

// Additional Operations
// SELECT COUNT(*) FROM @@table
func (u userAccountORMDo) CountAll() (result int, err error) {
	var generateSQL strings.Builder
	generateSQL.WriteString("Additional Operations SELECT COUNT(*) FROM user_accounts ")

	var executeSQL *gorm.DB
	executeSQL = u.UnderlyingDB().Raw(generateSQL.String()).Take(&result) // ignore_security_alert
	err = executeSQL.Error

	return
}

func (u userAccountORMDo) Debug() IUserAccountORMDo {
	return u.withDO(u.DO.Debug())
}

func (u userAccountORMDo) WithContext(ctx context.Context) IUserAccountORMDo {
	return u.withDO(u.DO.WithContext(ctx))
}

func (u userAccountORMDo) ReadDB() IUserAccountORMDo {
	return u.Clauses(dbresolver.Read)
}

func (u userAccountORMDo) WriteDB() IUserAccountORMDo {
	return u.Clauses(dbresolver.Write)
}

func (u userAccountORMDo) Session(config *gorm.Session) IUserAccountORMDo {
	return u.withDO(u.DO.Session(config))
}

func (u userAccountORMDo) Clauses(conds ...clause.Expression) IUserAccountORMDo {
	return u.withDO(u.DO.Clauses(conds...))
}

func (u userAccountORMDo) Returning(value interface{}, columns ...string) IUserAccountORMDo {
	return u.withDO(u.DO.Returning(value, columns...))
}

func (u userAccountORMDo) Not(conds ...gen.Condition) IUserAccountORMDo {
	return u.withDO(u.DO.Not(conds...))
}

func (u userAccountORMDo) Or(conds ...gen.Condition) IUserAccountORMDo {
	return u.withDO(u.DO.Or(conds...))
}

func (u userAccountORMDo) Select(conds ...field.Expr) IUserAccountORMDo {
	return u.withDO(u.DO.Select(conds...))
}

func (u userAccountORMDo) Where(conds ...gen.Condition) IUserAccountORMDo {
	return u.withDO(u.DO.Where(conds...))
}

func (u userAccountORMDo) Order(conds ...field.Expr) IUserAccountORMDo {
	return u.withDO(u.DO.Order(conds...))
}

func (u userAccountORMDo) Distinct(cols ...field.Expr) IUserAccountORMDo {
	return u.withDO(u.DO.Distinct(cols...))
}

func (u userAccountORMDo) Omit(cols ...field.Expr) IUserAccountORMDo {
	return u.withDO(u.DO.Omit(cols...))
}

func (u userAccountORMDo) Join(table schema.Tabler, on ...field.Expr) IUserAccountORMDo {
	return u.withDO(u.DO.Join(table, on...))
}

func (u userAccountORMDo) LeftJoin(table schema.Tabler, on ...field.Expr) IUserAccountORMDo {
	return u.withDO(u.DO.LeftJoin(table, on...))
}

func (u userAccountORMDo) RightJoin(table schema.Tabler, on ...field.Expr) IUserAccountORMDo {
	return u.withDO(u.DO.RightJoin(table, on...))
}

func (u userAccountORMDo) Group(cols ...field.Expr) IUserAccountORMDo {
	return u.withDO(u.DO.Group(cols...))
}

func (u userAccountORMDo) Having(conds ...gen.Condition) IUserAccountORMDo {
	return u.withDO(u.DO.Having(conds...))
}

func (u userAccountORMDo) Limit(limit int) IUserAccountORMDo {
	return u.withDO(u.DO.Limit(limit))
}

func (u userAccountORMDo) Offset(offset int) IUserAccountORMDo {
	return u.withDO(u.DO.Offset(offset))
}

func (u userAccountORMDo) Scopes(funcs ...func(gen.Dao) gen.Dao) IUserAccountORMDo {
	return u.withDO(u.DO.Scopes(funcs...))
}

func (u userAccountORMDo) Unscoped() IUserAccountORMDo {
	return u.withDO(u.DO.Unscoped())
}

func (u userAccountORMDo) Create(values ...*user_servicev1.UserAccountORM) error {
	if len(values) == 0 {
		return nil
	}
	return u.DO.Create(values)
}

func (u userAccountORMDo) CreateInBatches(values []*user_servicev1.UserAccountORM, batchSize int) error {
	return u.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (u userAccountORMDo) Save(values ...*user_servicev1.UserAccountORM) error {
	if len(values) == 0 {
		return nil
	}
	return u.DO.Save(values)
}

func (u userAccountORMDo) First() (*user_servicev1.UserAccountORM, error) {
	if result, err := u.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.UserAccountORM), nil
	}
}

func (u userAccountORMDo) Take() (*user_servicev1.UserAccountORM, error) {
	if result, err := u.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.UserAccountORM), nil
	}
}

func (u userAccountORMDo) Last() (*user_servicev1.UserAccountORM, error) {
	if result, err := u.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.UserAccountORM), nil
	}
}

func (u userAccountORMDo) Find() ([]*user_servicev1.UserAccountORM, error) {
	result, err := u.DO.Find()
	return result.([]*user_servicev1.UserAccountORM), err
}

func (u userAccountORMDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*user_servicev1.UserAccountORM, err error) {
	buf := make([]*user_servicev1.UserAccountORM, 0, batchSize)
	err = u.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (u userAccountORMDo) FindInBatches(result *[]*user_servicev1.UserAccountORM, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return u.DO.FindInBatches(result, batchSize, fc)
}

func (u userAccountORMDo) Attrs(attrs ...field.AssignExpr) IUserAccountORMDo {
	return u.withDO(u.DO.Attrs(attrs...))
}

func (u userAccountORMDo) Assign(attrs ...field.AssignExpr) IUserAccountORMDo {
	return u.withDO(u.DO.Assign(attrs...))
}

func (u userAccountORMDo) Joins(fields ...field.RelationField) IUserAccountORMDo {
	for _, _f := range fields {
		u = *u.withDO(u.DO.Joins(_f))
	}
	return &u
}

func (u userAccountORMDo) Preload(fields ...field.RelationField) IUserAccountORMDo {
	for _, _f := range fields {
		u = *u.withDO(u.DO.Preload(_f))
	}
	return &u
}

func (u userAccountORMDo) FirstOrInit() (*user_servicev1.UserAccountORM, error) {
	if result, err := u.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.UserAccountORM), nil
	}
}

func (u userAccountORMDo) FirstOrCreate() (*user_servicev1.UserAccountORM, error) {
	if result, err := u.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*user_servicev1.UserAccountORM), nil
	}
}

func (u userAccountORMDo) FindByPage(offset int, limit int) (result []*user_servicev1.UserAccountORM, count int64, err error) {
	result, err = u.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = u.Offset(-1).Limit(-1).Count()
	return
}

func (u userAccountORMDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = u.Count()
	if err != nil {
		return
	}

	err = u.Offset(offset).Limit(limit).Scan(result)
	return
}

func (u userAccountORMDo) Scan(result interface{}) (err error) {
	return u.DO.Scan(result)
}

func (u userAccountORMDo) Delete(models ...*user_servicev1.UserAccountORM) (result gen.ResultInfo, err error) {
	return u.DO.Delete(models)
}

func (u *userAccountORMDo) withDO(do gen.Dao) *userAccountORMDo {
	u.DO = *do.(*gen.DO)
	return u
}
